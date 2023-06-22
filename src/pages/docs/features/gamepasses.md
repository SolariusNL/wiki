---
title: Gamepasses
description: Learn about our implementation of a gamepass system, similar to Roblox, and it's features or limitations.
---

Gamepasses allow you to sell access to certain features of your game for Tickets (T$). You can create gamepasses the **Store** tab of your games edit page, and providing a:

- **Name** - The name of the gamepass, for example, "Armory Upgrade".
- **Description** - A description of the gamepass that details its rewards. For example, "Unlock the Golden Armory forever".
- **Price** - The price of the gamepass in Tickets (T$).
- **Icon** - An icon for the gamepass, which will be displayed in the store.

## Restrictions

### Gambling

Gamepasses related to gambling are permitted under the condition that it is not possible to purchase the currency used for it. The currency must be earnable by playing the game or by other means that are not purchasable. You must implement a fair algorithm so that the end user is not rigged up to lose. If Framework's Tickets are involved in any step of the process, your account may be permanently banned by Framework staff.

#### Good implementations

- Implementing a reward system where players can earn in-game currency by completing in-game tasks, such as winning games or completing quests.
- Ensuring that randomness used gambling systems is truly random, and cannot be influenced by any external factors.
- Providing clear and transparent rules for gambling in your game works, such as the odds of winning and the payout structure. This helps to ensure that players have a fair and enjoyable experience.

#### Bad implementations

- Implementing a pay-to-win mechanism where players can purchase a large amount of the in-game currency with real money, which gives them an unfair advantage over other players.
- Rigging the algorithm in favor of players who spend more money, such that they are more likely to win.
- Allowing players to buy tickets with real money, which violates the condition of not being able to purchase the currency used for gambling.

### Inappropriate Content

Gamepasses that contain inappropriate content are not permitted. This includes, but is not limited to:

- Pornographic or other sexually explicit content
- Racist, sexist, or otherwise discriminatory content
- Content that promotes violence or hatred
- Content that promotes illegal activities
- ...and other terms listed in our [Community Guidelines](https://framework.solarius.me/guidelines)

Please note that the above list is not exhaustive, and that Solarius staff may remove any gamepass that they deem to be inappropriate. If you are unsure whether your gamepass is appropriate for the platform, please contact us, we'd be happy to help.

### False Gamepasses

Gamepasses that do not provide the advertised rewards are not permitted and can result in account moderation.

## Sale

Gamepasses are listed and can be purchased in the **Store** tab on the page of your game. Revenue is immediately credited to your account, and does not include any fees. The revenue is credited to your account in the form of Framework Tickets (T$), which can be used to purchase other gamepasses or items in the store.

## Refunds

Gamepasses are non-refundable and cannot be removed from a players account without deleting the gamepass entirely.
