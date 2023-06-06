---
title: Events
description: Learn how to register and listen for events in your game.
---

The `on` method allows you to subscribe to events emitted by the game server. Here are the events that you can listen for:

## `on`

### Definition

```ts
export function on<T>(event: IScriptEvent, fn: (...args: T[]) => void): void;
```

The `on` method allows you to register a callback function that will be executed when a specific event occurs in your game. It takes two arguments:

- `event` (required): An enum value representing the name of the event to listen for. Discover available events below or by using the autocomplete feature in your IDE for the `IScriptEvent` enum.
- `fn` (required): A callback function that will be executed when the event is triggered. This function should take any number of arguments of type `T`.

### Usage

To use the `on` method, import `game` from the `@fw/base` module and call it with the required arguments. Here is an example of how to listen for the `playerConnected` event:

```ts
import { game } from "@fw/base";

game.on("playerConnected", (player) => {
  // Do something when a player connects
});
```

The callback function takes a variable number of arguments of type `T`, depending on the event that is being listened to. For example, the `playerConnected` event passes a single argument of type `IPlayerEx`, which represents the player object of the player that just connected.

---

## Events

Here are the events that you can listen for:

### `playerConnected`

Emitted when a player connects to the game.

```ts
import { game } from "@fw/base";

game.on("playerConnected", (player: IPlayerEx) => {
  // handle player connection
});
```

The callback function receives a single parameter, which is a `IPlayerEx` object representing the player that connected.

---

### `playerDisconnected`

Emitted when a player disconnects from the game.

```ts
import { game } from "@fw/base";

game.on("playerDisconnected", (player) => {
  // handle player disconnection
});
```

The callback function receives a single parameter, which is a `IPlayerEx` object representing the player that disconnected.

---

### `gamepassPurchaseComplete`

Emitted when a player completes a game pass purchase.

```ts
import { game } from "@fw/base";

game.on("gamepassPurchaseComplete", (uid, gamepassId) => {
  // handle game pass purchase completion
});
```

The callback function receives two parameters: a number representing the player's user ID, and a number representing the ID of the game pass that was purchased.

{% callout title="Types" %}
All arguments passed to the callback function are automatically inferred from the event name, so you don't need to manually specify them.

You can explore event types by using the autocomplete feature in your IDE.
{% /callout %}
