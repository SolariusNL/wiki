---
title: Instance
description: Base class of all classes.
---

{% callout type="note" title="Uninstantiable" %}

This object cannot be instantiated.

{% /callout %}

Every class dervies from `Instance`, and all classes have the same properties and methods as `Instance`.

{% callout type="error" title="Abstract class" %}

`Instance` is an abstract class, meaning you cannot create an instance of `Instance` directly. Instead, you must create an instance of a class that derives from `Instance`.

{% /callout %}

## Events

### ChildAdded

Fires when a child is added to the instance.

#### Parameters

| Name  | Type       | Description               |
| ----- | ---------- | ------------------------- |
| child | `Instance` | The child that was added. |

#### Example

**Lua**

```lua
game.Players.ChildAdded:Connect(function(player)
    print(player.Username .. " joined the game!")
end)
```

**TypeScript**

```ts
game.Players.ChildAdded.Connect((player: Player) => {
  print(player.Username + " joined the game!");
});
```

### ChildRemoved

Fires when a child is removed from the instance.

#### Parameters

| Name  | Type       | Description                 |
| ----- | ---------- | --------------------------- |
| child | `Instance` | The child that was removed. |

#### Example

**Lua**

```lua
game.Players.ChildRemoved:Connect(function(player)
    print(player.Username .. " left the game!")
end)
```

**TypeScript**

```ts
game.Players.ChildRemoved.Connect((player: Player) => {
  print(player.Username + " left the game!");
});
```

### Clicked

Fires when the instance is clicked.

#### Parameters

| Name   | Type                              | Description                           |
| ------ | --------------------------------- | ------------------------------------- |
| player | [`Player`](/api-docs/game/player) | The player that clicked the instance. |

#### Example

**Lua**

```lua
game.World:FindFirstChild("Button").Clicked:Connect(function(player)
  print(player.Username .. " clicked the button!")
end)
```

**TypeScript**

```ts
game.World.FindFirstChild("Button").Clicked.Connect((player: Player) => {
  print(player.Username + " clicked the button!");
});
```

### MouseEnter

Fires when the mouse enters the instance.

#### Example

**Lua**

```lua
game.World:FindFirstChild("Button").MouseEnter:Connect(function()
  print("Mouse entered the button!")
end)
```

**TypeScript**

```ts
game.World.FindFirstChild("Button").MouseEnter.Connect(() => {
  print("Mouse entered the button!");
});
```

### MouseLeave

Fires when the mouse leaves the instance.

#### Example

**Lua**

```lua
game.World:FindFirstChild("Button").MouseLeave:Connect(function()
  print("Mouse left the button!")
end)
```

**TypeScript**

```ts
game.World.FindFirstChild("Button").MouseLeave.Connect(() => {
  print("Mouse left the button!");
});
```

### Touched

Fires when the instance is touched by another instance. To check if the instance was touched by a player, use the `Player` class with the [`IsA`](#isa) method. Debounce is recommended to prevent multiple touches.

#### Parameters

| Name  | Type       | Description                           |
| ----- | ---------- | ------------------------------------- |
| other | `Instance` | The instance that touched the object. |

#### Example

**Lua**

```lua
game.World:FindFirstChild("Button").Touched:Connect(function(other)
  if other:IsA("Player") then
    print(other.Username .. " touched the button!")
  end
end)
```

**TypeScript**

```ts
game.World.FindFirstChild("Button").Touched.Connect((other: Instance) => {
  if (other.IsA("Player")) {
    print(other.Username + " touched the button!");
  }
});
```

{% callout type="note" title="Colliders" %}

There must be a [`Collider`](/api-docs/game/collider) attached to the instance for the `Touched` event to fire.

{% /callout %}

### TouchEnded

Fires when the instance is no longer being touched by another instance.

#### Parameters

| Name  | Type       | Description                                |
| ----- | ---------- | ------------------------------------------ |
| other | `Instance` | The instance that was touching the object. |

#### Example

**Lua**

```lua
game.World:FindFirstChild("Button").TouchEnded:Connect(function(other)
  if other:IsA("Player") then
    print(other.Username .. " stopped touching the button!")
  end
end)
```

**TypeScript**

```ts
game.World.FindFirstChild("Button").TouchEnded.Connect((other: Instance) => {
  if (other.IsA("Player")) {
    print(other.Username + " stopped touching the button!");
  }
});
```

{% callout type="note" title="Colliders" %}

There must be a [`Collider`](/api-docs/game/collider) attached to the instance for the `TouchEnded` event to fire.

{% /callout %}

## Methods

### New

Creates a new instance of the class.

#### Returns

Returns `Instance`.

### Clone

Creates a deep copy of the instance.

#### Returns

Returns `void`.

### Destroy

Destroys the instance.

#### Returns

Returns `void`.

### GetParent

Returns the parent of the instance. Same as accessing the `Parent` property.

#### Returns

Returns `Instance`.

### SetParent

Sets the parent of the instance. Same as setting the `Parent` property.

#### Parameters

| Name      | Type       | Description                     |
| --------- | ---------- | ------------------------------- |
| newParent | `Instance` | The new parent of the instance. |

#### Returns

Returns `void`.

### IsA

Checks if the instance is of the specified class.

#### Parameters

| Name      | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| className | `string` | The name of the class to check. |

#### Returns

Returns `boolean`.

### IsDescendantOf

Checks if the instance is a descendant of the specified instance.

#### Parameters

| Name     | Type       | Description                                                 |
| -------- | ---------- | ----------------------------------------------------------- |
| ancestor | `Instance` | The instance to check if it is an ancestor of the instance. |

#### Returns

Returns `boolean`.

### FindFirstChild

Finds the first child of the instance with the specified name.

#### Parameters

| Name | Type     | Description                    |
| ---- | -------- | ------------------------------ |
| name | `string` | The name of the child to find. |

#### Returns

Returns `Instance`.

### FindFirstChildOfClass

Finds the first child of the instance with the specified class.

#### Parameters

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| className | `string` | The name of the class to find. |

#### Returns

Returns `Instance`.

### FindFirstChildWhichIsA

Finds the first child of the instance that is of the specified class.

#### Parameters

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| className | `string` | The name of the class to find. |

#### Returns

Returns `Instance`.

### GetChildren

Returns a list of all children of the instance.

#### Returns

Returns `Instance[]`.

### GetDescendants

Returns a list of all descendants of the instance.

#### Returns

Returns `Instance[]`.

### WaitForChild

Waits for the child of the instance with the specified name to be added. Will yield the current thread until the child is added.

#### Parameters

| Name | Type     | Description                        |
| ---- | -------- | ---------------------------------- |
| name | `string` | The name of the child to wait for. |

#### Returns

Returns `Instance`.

### WaitForChildOfClass

Waits for the child of the instance with the specified class to be added. Will yield the current thread until the child is added.

#### Parameters

| Name      | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| className | `string` | The name of the class to wait for |

#### Returns

Returns `Instance`.

## Properties

### CanReparent

Returns whether the instance can be reparented or not.

#### Type

`boolean`

### ClassName

Returns the name of the class of the instance.

#### Type

`string`

### Actor

Returns the actor of the instance.

#### Type

Returns [`Actor`](/api-docs/game/actor).

### Name

Returns the name of the instance.

#### Type

`string`

### Parent

Returns the parent of the instance.

#### Type

`Instance`

### Tags

An enumerable list of tags associated with the instance. Tags are used to identify instances with specific properties.

#### Example

**Lua**

```lua
game.World:FindFirstChild("Button").Tags = { "Clickable", "Interactive" }
-- Later...
if game.World:FindFirstChild("Button").Tags["Clickable"] then
  print("Button is clickable!")
end
```

**TypeScript**

```ts
game.World.FindFirstChild("Button").Tags = ["Clickable", "Interactive"];
// Later...
if (game.World.FindFirstChild("Button").Tags["Clickable"]) {
  print("Button is clickable!");
}
```

#### Type

`string[]`
