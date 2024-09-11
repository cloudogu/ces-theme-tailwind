# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- color name scheme from `--colors-<name>` to `--ces-color-<name>` (#46452)

## [v0.7.1] - 2024-06-19
### Fixed
- Fix focus-color of summary-component (#47313)
- replace align-attribute in table-cells with css (#47314)

## [v0.7.0] - 2024-06-12
### Changed
- Add margin to page layout (#47312)

## [v0.6.0] - 2024-05-23
### Added
- Add radio group as input (#45513)
- Add option to details-content to disable border (#45513)

## [v0.5.0] - 2024-05-03
### Added
- Add html time tag <time> for translations

## [v0.4.1] - 2024-05-02
### Fixed
- Fix missing role-attributes in navbar (#42044)

## [v0.4.0] - 2024-04-24
### Added
- FullPageLayout which uses 100% of the screen width (#46060)

## [v0.3.8] - 2024-03-01
### Fixed
- Fix keyboard-navigation for Dropdown in Firefox with Screenreader on Windows

## [v0.3.7] - 2024-02-28

### Changed
- Hints are now exported as a separate component
- Bring back deleted deprecated components
- Add Hints to deprecated Form.ValidatedTextInput

## [v0.3.6] - 2024-02-28
### Changed
- Refactor dropdown menu storybook

## [v0.3.5] - 2024-02-27
### Fixed
- Fix release build pipeline

## [v0.3.4] - 2024-02-27
### Fixed
- Improve build pipeline

## [v0.3.3] - 2024-02-26
### Changed
- Create source maps on build

### Removed
- Remove useUrlPaginationControl-Hook

## [v0.3.2] - 2024-02-22

### Added
- Add ConfirmDialog (#44740)
- Add hooks to handle query params in pagination (#44740)

### Changed
- Rename Dialog to SegmentedDialog
- Improve story design for dialogs

## [v0.3.1] - 2024-02-09
- Fix release build

## [v0.3.0] - 2024-02-09
### Changed
- Change table component to new version (#42566)
- Several refactorings
- Fix circular imports

### Added
- Dropdown-Component (#42641)
- Toast-Component (#42829)
- Select-Dropdown-Component (#42572)
- Navbar-Component (#42565)
- Skeleton Component for e.g. table
- Check for circular dependencies
- Eslint rules for hooks
- Alias for @src and @components for imports
- transferred Details Component to new Theme (#42569)

## [0.2.4] - 2024-01-10
### Added
- Automatic Storybook Deployment

## [0.2.3] - 2023-11-23
### Added
- Automatic Release Procedure implemented
- Makefiles in version 8.8.0

### Changed
- Moved build directory from `./build` to `./target` to prevent conflicts with the makefiles located inside the `./build` directory

## [0.2.2] - 2023-09-20
### Added
- Create basic configuration file which is rolled out on build (#42573)

## [0.2.1] - 2023-09-18
### Added
- Documentation how to release this repository in detail
