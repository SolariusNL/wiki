---
title: Player
description: Learn about Player typings.
---

Cosmic provides a set of typings that you can use to interact with players in your game. These typings are globally available in your scripts.

## `IPlayer`

An interface representing a player in your game.

### Properties

- `id` (number): The player's unique identifier.
- `username` (string): The player's username.
- `avatar` (object): An object containing information about the player's avatar:
  - `id` (string): The ID of the player's avatar.
  - `userId` (number): The ID of the player associated with this avatar.
  - `headColor` (string): The color of the player's avatar head.
  - `leftArmColor` (string): The color of the player's avatar left arm.
  - `leftLegColor` (string): The color of the player's avatar left leg.
  - `rightArmColor` (string): The color of the player's avatar right arm.
  - `rightLegColor` (string): The color of the player's avatar right leg.
  - `torsoColor` (string): The color of the player's avatar torso.
- `country` (string): The player's country.
- `bio` (string): The player's bio.
- `busy` (boolean): Whether the player is busy.
- `premium` (boolean): Whether the player has premium membership.
- `banned` (boolean): Whether the player is banned.
- `followers` (array): An array of objects representing players who follow this player:
  - `id` (number): The ID of the follower.
- `following` (array): An array of objects representing players whom this player follows:
  - `id` (number): The ID of the player being followed.
- `lastSeen` (string): The date and time the player was last seen.
- `timeZone` (string): The player's time zone.
- `role` (string): The player's role.
- `alias` (string): The player's alias.
- `previousUsernames` (array): An array of the player's previous usernames.
- `statusPosts` (array): An array of objects representing the player's status posts:
  - `id` (string): The ID of the status post.
  - `userId` (number): The ID of the player who created the status post.
  - `createdAt` (string): The date and time the status post was created.
  - `content` (string): The content of the status post.
- `socket` (object): An object representing the player's socket connection:
  - `emit` (function): A function that sends an event with data to the client.
  - `on` (function): A function that registers a callback to be called when an event is received from the client.
  - `disconnect` (function): A function that disconnects the socket.

---

## `IPlayerEx`

An interface extending the `IPlayer` interface to include additional properties.

### Properties

- `kick` (function): A function that kicks the player.
- `socket` (object): An object representing the player's socket connection:
  - `emit` (function): A function that sends an event with data to the client.
  - `on` (function): A function that registers a callback to be called when an event is received from the client.
  - `disconnect` (function): A function that disconnects the socket.

{% callout title="Recommendation" %}
We recommend using the `IPlayerEx` interface when interacting with players in your game as it provides additional functionality.
{% /callout %}
