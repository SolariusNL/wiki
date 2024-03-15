---
title: CLI
description: Learn how to use the Cosmic CLI to manage your game.
---

The `@fw/cli` module provides a set of methods for interacting with Cosmic servers. One of these methods is `registerCommand`, which allows you to register a custom command that can be executed from the command line interface (CLI) provided by Cosmic.

## Importing the CLI API

To use the CLI API, you'll need to import it from the `@fw` package. You can do this by adding the following line to the top of your script:

```ts
import { registerCommand } from "@fw/cli";
```

## `CLI.registerCommand`

### Context

Server. Cannot be used in the client.

### Definition

```ts
export function registerCommand(
  name: string,
  description: string,
  usage: string,
  fn: (args: string[]) => void
): void;
```

The `registerCommand` function allows you to register a custom command that can be executed from the Cosmic CLI. It takes four arguments:

- `name` (required): A string representing the name of the command.
- `description` (required): A string representing a brief description of the command.
- `usage` (required): A string representing the usage of the command.
- `fn` (required): A callback function that will be executed when the command is run. This function should take an array of strings representing any command-line arguments passed to the command.

### Usage

To use the `registerCommand` function, import it from the `@fw/cli` module and call it with the required arguments. Here is an example of how to register a custom command named `mycommand`:

```ts
import { registerCommand } from "@fw/cli";

registerCommand(
  "mycommand",
  "A custom command that does something",
  "mycommand <arg1> <arg2>",
  (args: string[]) => {
    // Do something with the arguments
  }
);
```

Once registered, the `mycommand` command can be executed from the CLI using the syntax `mycommand <arg1> <arg2>`. The args parameter passed to the callback function will be an array of strings representing the values passed as arguments to the command.
