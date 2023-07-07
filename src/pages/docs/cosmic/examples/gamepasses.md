---
title: Gamepass Handling Example
description: This example demonstrates how to handle gamepasses in your server-side code.
---

```ts
import { game } from "@fw/base";
import { FireType, NodeType, root, serverStorage } from "@fw/scene";

("use server");

enum Product {
  HealthPotion,
  Longsword,
}

const modals = root.getNode(NodeType.RemoteEvent, "UIModalEvent");
const products: Record<string, Product> = {
  f57c31f352cd4c5da1e13f5e172d7a1a: Product.HealthPotion,
  f1db48ba03a64967a10aadc57547b6f0: Product.Longsword,
};

game.on("gamepassPurchaseComplete", (userId, productId) => {
  const player = game.players.findFirstWith("id", userId);
  if (player) {
    const product = products[productId];
    switch (product) {
      case Product.HealthPotion:
        modals.fire(FireType.Client, {
          title: "Health potion purchased",
          message: "You have purchased a health potion.",
        });

        const potion = serverStorage
          .getNode(NodeType.Tool, "HealthPotion")
          .clone();
        potion.set("parent", player.backpack);
        player.tags.set("ownsHealthPotion", true);

        break;
      case Product.Longsword:
        break;
    }
  } else {
    warn(`Player with id ${userId} not found - gamepass purchase not handled`);
  }
});
```

```ts
import { game } from "@fw/base";
import { FireType, NodeType, root, serverStorage } from "@fw/scene";
```

The code imports necessary modules from Vortex.

```ts
("use server");
```

The code specifies a pragma to indicate to the Hydra compiler that the code from this point on should be apart of the server-side code bundle.

```ts
enum Product {
  HealthPotion,
  Longsword,
}
```

An enumeration called `Product` is defined with two possible values: `HealthPotion` and `Longsword`. These values are used to represent the different gamepasses that can be purchased.

```ts
const modals = root.getNode(NodeType.RemoteEvent, "UIModalEvent");
```

A constant variable `modals` is declared and assigned the value returned by fetching a specific node of type `RemoteEvent` with the name **UIModalEvent** from the `root` object.

```ts
const products: Record<string, Product> = {
  f57c31f352cd4c5da1e13f5e172d7a1a: Product.HealthPotion,
  f1db48ba03a64967a10aadc57547b6f0: Product.Longsword,
};
```

A constant variable `products` is declared and assigned an object. The object represents a mapping between string keys and `Product` values, associating specific IDs with the corresponding `Product` enum values.

```ts
game.on("gamepassPurchaseComplete", (userId, productId) => {
  const player = game.players.findFirstWith("id", userId);
  if (player) {
    const product = products[productId];
    switch (product) {
      case Product.HealthPotion:
        modals.fire(FireType.Client, {
          title: "Health potion purchased",
          message: "You have purchased a health potion.",
        });

        const potion = serverStorage
          .getNode(NodeType.Tool, "HealthPotion")
          .clone();
        potion.set("parent", player.backpack);
        player.tags.set("ownsHealthPotion", true);

        break;
      case Product.Longsword:
        break;
    }
  } else {
    warn(`Player with id ${userId} not found - gamepass purchase not handled`);
  }
});
```

The code listens for the event "gamepassPurchaseComplete". When the event occurs, it finds the player with the corresponding `userId`. If the player exists, it determines the purchased `product` based on the `productId`. If the product is a `HealthPotion`, it fires a modal event on the client side, creates a clone of a specific node from the server storage, sets its parent to the player's backpack, and sets a tag to indicate ownership. If the product is a `Longsword`, no specific action is taken. If the player is not found, a warning is logged indicating that the gamepass purchase was not handled for the given `userId`.
