---
title: Environment Variables
description: Learn how to use environment variables to store dynamic data, sensitive data, and more in your games.
---

The Environment Variable feature on Framework allows you to manage and control environment variables used within your game's architecture. This documentation provides an overview of how to create, edit, and delete environment variables through the Environment Variables tab on your game's edit page, and how to use them in your game's code.

## Environment variable management

### Accessing environment variables

To access the Environment Variables tab and manage your game's environment variables, follow these steps:

- Log in to your Framework account and navigate to the edit page of the desired game.
- Once on the game's edit page, locate and click on the "Environment Variables" tab. This tab is specifically dedicated to managing environment variables for your game.

### Creating environment variables

To create a new environment variable, follow the steps below:

- Open the "Environment Variables" tab on your game's edit page.
- Locate the input form provided for creating a new environment variable.
- Fill in the following details in the input form:
  1. Name: Provide a unique name for the environment variable.
  2. Value: Specify the value associated with the environment variable.
  3. Environment: Select the appropriate environment for the variable, either **Production** or **Development**, depending on where you want the variable to be used.
- After entering the required information, click on the "Save" button to create the environment variable.

| Environment | Description                                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Production  | The production environment is used for your live game, and is the environment that your players will interact with.                                     |
| Development | The development environment is used for your game's development and testing, and is the environment that you will interact with when testing your game. |

## Using environment variables

To access environment variables within your game's code on Framework, you can utilize the `getAsync` function exported from the `@fw/env` package. This function allows you to fetch the values of specific environment variables at runtime. Here's an example of how to use it in your code:

```ts
import { getAsync } from "@fw/env";

const myEnv = await getAsync("environment-variable-name");
// or
await getAsync("environment").then((env) => {
  // Use the `env` value retrieved from the environment variable
});
```

In the above code snippet, we import the `getAsync` function from the `@fw/env` package. The `getAsync` function is then used to fetch the value of an environment variable.

### Using `getAsync`

The `getAsync` function accepts the name of the environment variable as its argument and returns a promise that resolves to the corresponding value. You can use `await` or `.then()` to handle the asynchronous nature of the operation.

In the first example, `myEnv` is assigned the value of the environment variable with the name `"environment-variable-name"`. You can replace `"environment-variable-name"` with the actual name of the environment variable you want to access in your game.

In the second example, the `getAsync` function is used within a `.then()` block. Once the promise is resolved, the retrieved value is accessible within the callback function as `env`. You can then use `env` for further operations or processing within your code.

### Handling Errors

If the specified environment variable does not exist or cannot be retrieved for any reason, the `getAsync` function will reject the promise, and you can handle the error using standard error-handling techniques such as `try-catch` or `.catch()`.

```ts
try {
  const myEnv = await getAsync("non-existent-variable");
  // Handle successful retrieval of `myEnv` value
} catch (error) {
  // Handle error when environment variable is not found
}
```

Ensure that you handle potential errors when fetching environment variables to ensure graceful behavior and prevent unexpected issues in your game.

## Conclusion

By utilizing the `getAsync` function from the `@fw/env` package, you can easily access environment variables within your game's code on Framework. The `getAsync` function allows you to retrieve the value of a specific environment variable, and you can handle the asynchronous nature of the operation using `await` or `.then()`. Remember to handle any potential errors that may occur when fetching environment variables to ensure the stability and reliability of your game.
