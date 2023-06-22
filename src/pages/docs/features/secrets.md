---
title: Secrets
description: Use the Secrets feature in Framework to store and share sensitive information with your team, and reference them in your games code.
---

Secrets in Framework are private "global" environment variables that can be used in your games code. They provide a secure way for developers to store sensitive information, such as API keys or credentials, that are required for their games to run correctly.

## Storing Secrets

Developers can store secrets in Framework by creating a new secret by visiting [Invent](https://framework.solarius.me/invent) **-> Secrets**, clicking "Create a secret" and assigning it a name and value. The value of a secret is encrypted and kept private, making it a secure way to store sensitive information.

## Using Secrets in Code

When browsing your secrets, you will see a little action button on the right side of the secret with an icon like this: `</>`. Clicking this button will open a modal with a TypeScript excerpt that you can paste into a Cosmic script to retrieve the secrets value in your game.

Secrets are scoped to the user who created them, so they can only be accessed by the user who created them.
