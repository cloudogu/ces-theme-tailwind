MAKEFILES_VERSION=9.2.1
VERSION=1.0.0
NODE_VERSION=18
IMAGE_NAME="registry.cloudogu.com/storybook/ces-theme-tailwind"

IMAGE_TAG="$(VERSION)-$(CHANGE_COUNTER)"

include build/make/variables.mk
include build/make/clean.mk
include build/make/self-update.mk
include build/make/release.mk
include build/make/yarn.mk



.PHONY gen-phosphor-icons:
gen-phosphor-icons:
	@echo Deleting old icons
	@rm -f src/components/icons/phosphor.ts
	@echo Generating new icon set
	@node src/components/icons/IconGenerator.mjs

.PHONY: build-storybook
build-storybook:
	docker build -f ./.storybook/Dockerfile -t "$(IMAGE_NAME):$(IMAGE_TAG)" .

.PHONY: deploy-storybook
deploy-storybook:
	docker push "$(IMAGE_NAME):$(IMAGE_TAG)"

.PHONY: node-release
node-release: ## Start a node package release - execute prepublishOnly checks before => This will overwrite the original rule
	@yarn prepublishOnly
	build/make/release.sh node-pkg
