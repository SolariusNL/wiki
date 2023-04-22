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

To use the `on` method, import `game` from the `@fw/base` module and call it with the required arguments. Here is an example of how to listen for the `PlayerConnected` event:

```ts
import { game } from "@fw/base";

game.on(IScriptEvent.PlayerConnected, (player: IPlayerEx) => {
  // Do something when a player connects
});
```

The callback function takes a variable number of arguments of type `T`, depending on the event that is being listened to. For example, the `PlayerConnected` event passes a single argument of type `IPlayerEx`, which represents the player object of the player that just connected.

---

## Events

Here are the events that you can listen for:

### `PlayerConnected`

Emitted when a player connects to the game.

```ts
import { game } from "@fw/base";

game.on(IScriptEvent.PlayerConnected, (player: IPlayerEx) => {
  // handle player connection
});
```

The callback function receives a single parameter, which is a `IPlayerEx` object representing the player that connected.

---

### `PlayerDisconnected`

Emitted when a player disconnects from the game.

```ts
import { game } from "@fw/base";

game.on(IScriptEvent.PlayerDisconnected, (player: IPlayerEx) => {
  // handle player disconnection
});
```

The callback function receives a single parameter, which is a `IPlayerEx` object representing the player that disconnected.

---

### `GamepassPurchaseComplete`

Emitted when a player completes a game pass purchase.

```ts
import { game } from "@fw/base";

game.on(
  IScriptEvent.GamepassPurchaseComplete,
  (uid: number, gamepassId: number) => {
    // handle game pass purchase completion
  }
);
```

The callback function receives two parameters: a number representing the player's user ID, and a number representing the ID of the game pass that was purchased.
