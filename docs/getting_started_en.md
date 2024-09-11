# Setup for development

## Create .npmrc
In order for the package to be released, a .npmrc must be created. For this you can either use `make gen-npmrc-release`
or `make gen-npmrc-prerelease` can be used.
In the query that then appears, the access data for the productive EcoSystem must be entered.

Note: For development purposes, it is a good idea to create pre-releases on a regular basis, and then use them in the tool for which
changes are being made here. For this purpose, `make gen-npmrc-prerelease` must be used.**