---
title: DynamicInstance
description: Base class where all objects within the game world derive from.
---

`DynamicInstance` is the base class where all objects within the game world with dynamic properties (position, rotation, scale) derive from.

{% callout type="error" title="Abstract class" %}

`DynamicInstance` cannot be derived from directly. Instead, use one of the classes that derive from `DynamicInstance`.

{% /callout %}

## Inheritance

`DynamicInstance` inherits from [`Instance`](/api-docs/system/instance).

## Methods

### LookAt

Rotates the object so that the forward vector points at the target position.

#### Parameters

| Name   | Type      | Description              |
| ------ | --------- | ------------------------ |
| target | `Vector3` | The position to look at. |

#### Example

**Lua**

```lua
local part = Instance.new("Part")
part.Position = Vector3.new(0, 0, 0)
part:LookAt(Vector3.new(0, 0, 10))
```

**TypeScript**

```ts
const part = new Part();
part.Position = new Vector3(0, 0, 0);
part.LookAt(new Vector3(0, 0, 10));
```

#### Returns

Returns `void`.

### Translate

Moves the object by the specified offset.

#### Parameters

| Name   | Type      | Description            |
| ------ | --------- | ---------------------- |
| offset | `Vector3` | The offset to move by. |

#### Returns

Returns `void`.

## Properties

### Forward

The forward vector of the object.

#### Type

[`Vector3`](/api-docs/types/vector3)

### LocalPosition

The position of the object relative to its parent.

#### Type

[`Vector3`](/api-docs/types/vector3)

### LocalRotation

The rotation of the object relative to its parent.

{% callout type="note" title="Euler angles" %}

The rotation is represented in Euler angles.

{% /callout %}

#### Type

[`Vector3`](/api-docs/types/vector3)

### LocalScale

The scale of the object relative to its parent.

#### Type

[`Vector3`](/api-docs/types/vector3)

### Right

The right vector of the object.

#### Type

[`Vector3`](/api-docs/types/vector3)

### Up

The up vector of the object.

#### Type

[`Vector3`](/api-docs/types/vector3)

### Position

The position of the object in world space.

#### Type

[`Vector3`](/api-docs/types/vector3)

### Rotation

The rotation of the object in world space.

{% callout type="note" title="Euler angles" %}

The rotation is represented in Euler angles.

{% /callout %}

#### Type

[`Vector3`](/api-docs/types/vector3)

### Scale

The scale of the object in world space.

#### Type

[`Vector3`](/api-docs/types/vector3)
