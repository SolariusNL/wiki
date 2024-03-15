---
title: Gamepass Handling Example
description: This example demonstrates how to handle gamepasses in your server-side code.
---

## Code

```ts
"use server";

import { gamepass, root, serverStorage, modals } from "@fw/core";
import { FireType, NodeType } from "@fw/types";

enum Product {
  HealthPotion,
  Longsword,
}

const products: Record<string, Product> = {
  f57c31f352cd4c5da1e13f5e172d7a1a: Product.HealthPotion,
  f1db48ba03a64967a10aadc57547b6f0: Product.Longsword,
};

// You'd also want to grant the player the gamepass item if they already own it, for example, if they die and respawn or rejoin the game.
// That isn't shown here for brevity.

gamepass.onGamepassPurchaseComplete.connect((userId, productId) => {
  const player = game.players.findFirstWith("id", userId);
  if (player) {
    const product = products[productId];
    switch (product) {
      case Product.HealthPotion:
        modals.openModal({
          title: "Health potion purchased",
          message: "You have purchased a health potion.",
          userId: userId,
        });

        const potion = serverStorage
          .getNode(NodeType.Tool, "HealthPotion")
          .clone();
        potion.set("parent", player.backpack);

        break;
      case Product.Longsword:
        // ...
        break;
    }
  } else {
    warn(`Player with id ${userId} not found - gamepass purchase not handled`);
  }
});
```

---

## Explanation

```ts
"use server";
```

The code specifies a pragma to indicate to the Hydra compiler that the code from this point on should be apart of the server-side code bundle.

```ts
import { gamepass, root, serverStorage, modals } from "@fw/core";
import { FireType, NodeType } from "@fw/types";
```

The code imports necessary modules from Vortex.

```ts
enum Product {
  HealthPotion,
  Longsword,
}
```

An enumeration called `Product` is defined with two possible values: `HealthPotion` and `Longsword`. These values are used to represent the different gamepasses that can be purchased.

```ts
const products: Record<string, Product> = {
  f57c31f352cd4c5da1e13f5e172d7a1a: Product.HealthPotion,
  f1db48ba03a64967a10aadc57547b6f0: Product.Longsword,
};
```

A constant variable `products` is declared and assigned an object. The object represents a mapping between string keys and `Product` values, associating specific IDs with the corresponding `Product` enum values.

```ts
gamepass.onGamepassPurchaseComplete.connect((userId, productId) => {
  const player = game.players.findFirstWith("id", userId);
  if (player) {
    const product = products[productId];
    switch (product) {
      case Product.HealthPotion:
        modals.openModal({
          title: "Health potion purchased",
          message: "You have purchased a health potion.",
          userId: userId,
        });

        const potion = serverStorage
          .getNode(NodeType.Tool, "HealthPotion")
          .clone();
        potion.set("parent", player.backpack);

        break;
      case Product.Longsword:
        // ...
        break;
    }
  } else {
    warn(`Player with id ${userId} not found - gamepass purchase not handled`);
  }
});
```

The `gamepass.onGamepassPurchaseComplete` event is listened for, and a callback function is executed when the event is fired. The callback function receives two parameters: `userId` and `productId`. The `userId` parameter represents the ID of the player who purchased the gamepass, and the `productId` parameter represents the ID of the gamepass that was purchased.
