---
title: Secrets
description: Use the Secrets feature in Framework to store and share sensitive information with your team, and reference them in your games code.
---

Secrets in Framework are private "global" environment variables that can be used in your games code. They provide a secure way for developers to store sensitive information, such as API keys or credentials, that are required for their games to run correctly.

API rate limits are not enforced on secrets.

---

To get started, create a new secret on Framework.

- Go to the [Invent](https://framework.soodam.rocks/invent) page
- Go to the **Secrets** tab
- Click on **Create a secret** and fill out the necessary fields
- Once your secret is created, click on the `</>` icon to the right of the secret to copy the code snippet
- Head into your IDE

---

Once you've retrieved the code snippet, you can use it in your game code to retrieve the secret's value. Reference the API documentation below for more information.

## `Secrets.get`

### Definition

```ts
get: (name: string) => Promise<string>;
```

The `get` function retrieves the value of a secret by its name. The function returns a promise that resolves to a string containing the secret's value. If the secret does not exist, the promise will reject with an error. If the secret exists but has no value, the promise will resolve to an empty string.

### Usage

To use the `get` function, pass it a string `name` representing the name of the secret you want to retrieve. The function will return a promise that resolves to a string containing the secret's value.

```ts
// This will retrieve the value of the secret named "mySecret"
await Secrets.get("mySecret")
  .then((value) => {
    // value will be a string containing the secret's value
  })
  .catch((error) => {
    // error will be an error
  });
/**
 * If they key exists, mySecret will be a string containing the secret's value
 * If the key does not exist, mySecret will be an error
 * If the key exists but has no value, it will resolve to an empty string
 */
```

### Alternative Usage

You can assign the return value of the `get` function to a variable and use it in your code.

```ts
const mySecret = await Secrets.get("mySecret");
// mySecret will be a string containing the secret's value
```
