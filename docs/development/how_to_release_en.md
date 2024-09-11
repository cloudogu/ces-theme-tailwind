## How to create a release of this library

## Pre-requisites
To ensure the highest possible quality, various pre-publish checks have been included. The package cannot or must not 
be pushed into the production registry without running these checks.
It is a good idea to make sure that all checks are successful before merging the feature branch.
These checks can be executed with: `yarn prepublishOnly`.
If this was not done in the feature branch, it can also be done in the release branch.
If some checks fail here, the errors must be fixed.
If it is forgotten to do these checks, then they will be done automatically before the npm publish.

## Execution of the release

Prerequisites:
* The feature branch has already been merged into the develop branch.

To start the release process just run the `make` target `node-release` and follow the process steps.

In case there occurred errors during the deployment to the npm registry, you have to manually release the package. Follow
these steps:

1. `git checkout <tag>`
1. make sure that the `.npmrc` has been generated for the productive registry. If necessary: `make gen-npmrc-release`
1. release the package: `yarn publish  --non-interactive`
   1. the extra flag `--non-interactive` tells the process to use the version specified in the `package.json`
