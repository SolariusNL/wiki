---
title: Advanced Physics Configuration
description: Explore the advanced physics configuration options in Vortex.
---

Vortex is a highly customizable physics engine designed with openness in mind. This document provides an in-depth exploration of the advanced physics configuration options available in Vortex.

## Collision Detection Algorithm

Vortex employs a versatile collision detection system that can be fine-tuned for different performance requirements. The following collision detection options are available:

- [**Continuous Collision Detection (CCD)**](https://digitalrune.github.io/DigitalRune-Documentation/html/138fc8fe-c536-40e0-af6b-0fb7e8eb9623.htm): Vortex uses CCD by default for all physics objects. CCD provides accurate collision handling by considering object motion over time. However, on lower-end devices, CCD might impact performance. In such cases, Vortex automatically switches to Discrete Collision Detection (DCD) for better efficiency.

- [**Discrete Collision Detection (DCD)**](https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.13287): DCD is an alternative to CCD that determines collisions based on discrete time steps. It sacrifices accuracy for improved performance and is automatically activated on lower-end devices when CCD is disabled.

- [**Octree**](<https://onlinelibrary.wiley.com/doi/abs/10.1002/(SICI)1097-4563(199711)14:11%3C789::AID-ROB3%3E3.0.CO;2-Q>): The octree-based collision detection method utilizes spatial partitioning to determine which objects should undergo CCD. This approach is the default option in Vortex and offers a good balance between accuracy and performance.

- [**Bounding Volume Hierarchy (BVH)**](https://www.wikiwand.com/en/Bounding_volume_hierarchy): BVH is another method that uses a tree structure to hierarchically organize bounding volumes of objects. It enables efficient CCD calculations by determining the subset of objects requiring more accurate collision detection. BVH is a more advanced option that can be beneficial for complex scenes with numerous objects.

## Integration Method

Vortex employs various integration methods to simulate the motion of physics objects accurately. The integration method determines how positions and velocities are updated over time. The available integration options in Vortex are as follows:

- [**Symplectic Integrator (Default)**](https://www.wikiwand.com/en/Symplectic_integrator): Vortex utilizes the default symplectic integrator based on PhysX. Symplectic integration is a stable and efficient method that ensures accurate simulations for most scenarios.

- [**Euler Integration**](https://www.wikiwand.com/en/Euler_method): Euler integration is a simple and straightforward method for updating positions and velocities. While it is less accurate and can introduce energy errors, it can be useful for specific cases where simplicity outweighs precision.

- [**Verlet Integration**](https://www.wikiwand.com/en/Verlet_integration): Verlet integration is an improvement over Euler integration and provides better stability and accuracy. It is a popular choice for simulations that require more precise position calculations.

- [**Runge-Kutta Integration**](https://www.wikiwand.com/en/Runge%E2%80%93Kutta_methods): Runge-Kutta integration is a higher-order method known for its accuracy and stability. It can produce highly realistic simulations but requires more computational resources compared to other integration methods.

## Gravity

Gravity is a fundamental force that attracts objects toward the ground. In Vortex, gravity can be configured globally or on a per-object basis.

- **Global Gravity Configuration:** The default global gravity configuration in Vortex is `0, -9.81, 0`, representing Earth's gravity with an acceleration of 9.81 meters per second squared (m/s²) in the negative y-direction. This value can be modified to simulate different gravitational environments.

- **Per-Object Gravity Configuration:** Individual physics objects in Vortex can have their own gravity settings. The `gravity` property of a physics object accepts a `Vector3` value, allowing customization of the gravitational force acting on that specific object.

## Friction Coefficient

Friction is a force that opposes the relative motion of objects in contact. Vortex provides options to configure friction globally or on a per-object basis.

- **Global Friction Coefficient:** The default global friction coefficient in Vortex is `0.51`, representing the friction coefficient of rubber on concrete. This value can be adjusted to simulate different material interactions.

- **Per-Object Friction Coefficient:** Physics objects can have individual friction coefficients set using a property such as `friction`. A higher friction coefficient increases friction, while a lower coefficient reduces it, allowing fine-grained control over frictional forces between objects.

## Restitution Coefficient

Restitution is the measure of an object's bounciness or its ability to bounce back after a collision. Vortex enables the configuration of restitution globally or on a per-object basis.

- **Global Restitution Coefficient:** The default global restitution coefficient in Vortex is `0.25`, providing a reasonable balance between bounciness and realism. Adjusting this value allows customization of the collision response of objects.

- **Per-Object Restitution Coefficient:** Individual physics objects can have their own restitution coefficients defined, affecting how they interact and bounce off other objects. Customizing the restitution coefficient allows for precise control over the elasticity of collisions.

## Custom Constraints

Vortex supports custom constraints, which enable the creation of specialized joints or connections between physics objects. Custom constraints allow for complex and specific physics interactions beyond the built-in physics behavior.

Developers can simulate intricate physical systems and define unique relationships between objects, providing endless possibilities for creating dynamic and interactive environments with the ability to define custom constraints.

Custom constraints are enabled by default in Vortex, empowering developers to unlock the full potential of physics simulations.
