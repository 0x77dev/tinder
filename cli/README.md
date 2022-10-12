oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @tinder-tools/console
$ tinder COMMAND
running command...
$ tinder (--version)
@tinder-tools/console/0.0.0 darwin-arm64 node-v16.17.0
$ tinder --help [COMMAND]
USAGE
  $ tinder COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tinder api profile`](#tinder-api-profile)
* [`tinder help [COMMAND]`](#tinder-help-command)
* [`tinder plugins`](#tinder-plugins)
* [`tinder plugins:install PLUGIN...`](#tinder-pluginsinstall-plugin)
* [`tinder plugins:inspect PLUGIN...`](#tinder-pluginsinspect-plugin)
* [`tinder plugins:install PLUGIN...`](#tinder-pluginsinstall-plugin-1)
* [`tinder plugins:link PLUGIN`](#tinder-pluginslink-plugin)
* [`tinder plugins:uninstall PLUGIN...`](#tinder-pluginsuninstall-plugin)
* [`tinder plugins:uninstall PLUGIN...`](#tinder-pluginsuninstall-plugin-1)
* [`tinder plugins:uninstall PLUGIN...`](#tinder-pluginsuninstall-plugin-2)
* [`tinder plugins update`](#tinder-plugins-update)
* [`tinder profile`](#tinder-profile)
* [`tinder proxy`](#tinder-proxy)
* [`tinder token`](#tinder-token)

## `tinder api profile`

Get current user profile

```
USAGE
  $ tinder api profile

DESCRIPTION
  Get current user profile
```

## `tinder help [COMMAND]`

Display help for tinder.

```
USAGE
  $ tinder help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for tinder.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.15/src/commands/help.ts)_

## `tinder plugins`

List installed plugins.

```
USAGE
  $ tinder plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ tinder plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.2/src/commands/plugins/index.ts)_

## `tinder plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tinder plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tinder plugins add

EXAMPLES
  $ tinder plugins:install myplugin 

  $ tinder plugins:install https://github.com/someuser/someplugin

  $ tinder plugins:install someuser/someplugin
```

## `tinder plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ tinder plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ tinder plugins:inspect myplugin
```

## `tinder plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ tinder plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ tinder plugins add

EXAMPLES
  $ tinder plugins:install myplugin 

  $ tinder plugins:install https://github.com/someuser/someplugin

  $ tinder plugins:install someuser/someplugin
```

## `tinder plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ tinder plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ tinder plugins:link myplugin
```

## `tinder plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tinder plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tinder plugins unlink
  $ tinder plugins remove
```

## `tinder plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tinder plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tinder plugins unlink
  $ tinder plugins remove
```

## `tinder plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ tinder plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ tinder plugins unlink
  $ tinder plugins remove
```

## `tinder plugins update`

Update installed plugins.

```
USAGE
  $ tinder plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `tinder profile`

Get current user profile

```
USAGE
  $ tinder profile

DESCRIPTION
  Get current user profile
```

_See code: [dist/commands/profile/index.ts](https://github.com/0x77dev/tinder/blob/v0.0.0/dist/commands/profile/index.ts)_

## `tinder proxy`

Proxy for the Tinder API

```
USAGE
  $ tinder proxy [-p <value>] [-s] [-i <value>]

FLAGS
  -i, --imagesOutput=<value>  -i /output/path
  -p, --port=<value>          [default: 8000] Port to run the proxy on
  -s, --system                Set the proxy system wise

DESCRIPTION
  Proxy for the Tinder API

FLAG DESCRIPTIONS
  -i, --imagesOutput=<value>  -i /output/path

    Output images to the file system
```

_See code: [dist/commands/proxy.ts](https://github.com/0x77dev/tinder/blob/v0.0.0/dist/commands/proxy.ts)_

## `tinder token`

Get the last known API token

```
USAGE
  $ tinder token

DESCRIPTION
  Get the last known API token
```

_See code: [dist/commands/token.ts](https://github.com/0x77dev/tinder/blob/v0.0.0/dist/commands/token.ts)_
<!-- commandsstop -->
