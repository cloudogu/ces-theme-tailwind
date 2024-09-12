#!groovy
@Library(['github.com/cloudogu/ces-build-lib@2.2.1'])
import com.cloudogu.ces.cesbuildlib.*

Git git = new Git(this, "cesmarvin")
git.committerName = 'cesmarvin'
git.committerEmail = 'cesmarvin@cloudogu.com'
gitflow = new GitFlow(this, git)
github = new GitHub(this, git)
String productionReleaseBranch = "main"
Docker docker = new Docker(this)

node('docker') {
    timestamps {
        properties([
                // Keep only the last x builds to preserve space
                buildDiscarder(logRotator(numToKeepStr: '10')),
                // Don't run concurrent builds for a branch, because they use the same workspace directory
                disableConcurrentBuilds()
        ])

        stage('Checkout') {
            checkout scm
        }

        docker.image("node:lts-alpine").inside("-v $WORKSPACE:/project") {
            sh "cd /project"

            stage('yarn install') {
                sh "yarn install"
            }

            stage('ESlint') {
                sh "source ./scripts/functions.sh && lint_components"
            }

            stage('Test') {
                sh "source ./scripts/functions.sh && execute_tests"
            }

            stage('Verify story imports') {
                sh "source ./scripts/functions.sh && check_story_imports"
            }

            stage('Build') {
                sh "source ./scripts/functions.sh && build"
            }
        }

        def dockerImage
        stage('Build Storybook') {
            String branchName = git.getSimpleBranchName()
            String imageName = "internal/storybook-ces-theme-tailwind"
            if (branchName == 'main') {
                imageName += ":latest"
            } else if (branchName == 'develop') {
                imageName += ":develop"
            } else {
                imageName += ":tmp"
            }

            dockerImage = docker.build(imageName, "-f ./.storybook/Dockerfile .")
        }

        stage('deploy storybook') {
            docker.withRegistry("https://registry.cloudogu.com", 'harbor-robot-internal-push') {
                dockerImage.push()
            }
        }

        if (gitflow.isReleaseBranch()) {
            String releaseVersion = git.getSimpleBranchName()
            Changelog changelog = new Changelog(this)

            stage('Finish Release') {
                gitflow.finishRelease(releaseVersion, productionReleaseBranch)
            }

            stage('Publish') {
                try {
                    createNpmrcFile("cesmarvin-npmjs-token")
                    sh 'make yarn-install'
                    sh 'make yarn-publish-ci'
                }
                finally {
                    sh 'rm -f .npmrc'
                }
            }

            stage ('Add Github-Release'){
                github.createReleaseWithChangelog(releaseVersion, changelog)
            }
        }
    }
}

void createNpmrcFile(String credentialsId) {
    withCredentials([string(credentialsId: credentialsId, variable: 'NPM_TOKEN')]) {
        withEnv(["HOME=${env.WORKSPACE}"]) {
            writeFile encoding: 'UTF-8', file: '.npmrc', text: """
@cloudogu-npm:registry=https://registry.npmjs.org/
email=jenkins@cloudogu.com
always-auth=true
//registry.npmjs.org/:_authToken="${NPM_TOKEN}"
            """.trim()
        }
    }
}
