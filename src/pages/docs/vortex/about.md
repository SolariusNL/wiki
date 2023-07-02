---
title: Vortex Engine
description: Learn about the Vortex Engine, the engine that powers Framework.
---

Welcome to Vortex, a cutting-edge 3D and 2D game engine specifically designed for Framework, the captivating alternative to Roblox. In this comprehensive overview, we go into the core features of the Vortex Engine that make it a powerful tool for game developers wanting to push the boundaries of creativity and immersion.

## Embark on a Visual Journey

The Vortex Engine takes game graphics to new heights, offering extensive support for both 3D and 2D visuals. It empowers developers to craft visually stunning and immersive game experiences that captivate players. Leveraging modern rendering techniques and advanced shader capabilities, this engine enables realistic lighting, dynamic shadows, advanced particle systems, and fluid animations.

### Comprehensive graphics support

- Realistic lighting effects
- Dynamic shadows
- Advanced particle systems
- Fluid animations

### TypeScript and Iana: Fueling Functional Code

Games built with the Vortex Engine rely on [TypeScript](https://www.typescriptlang.org/), a rising and popular statically-typed superset of JavaScript. TypeScript allows developers to write functional code that seamlessly integrates with the engine's capabilities.

Additionally, Framework introduces a bespoke language called Iana. This homemade language provides additional expressive capabilities and specialized features tailored specifically for game development, opening up new realms of creativity for developers.

### React: Bringing UI to Life

Vortex incorporates the power of [React](https://reactjs.org/) and its JSX syntax for UI development. By embracing React, developers can unleash their creativity and construct rich and interactive user interfaces that captivate players. The engine allows for the creation of reusable UI components, efficient state management, and dynamic UI experiences.

### Hydra: Your Path to Streamlined Development

To simplify the process of integrating client and server code seamlessly, Framework employs a custom TypeScript compiler known as Hydra. Hydra is a multi-pass compiler that empowers developers by introducing pragmas such as "use client" and "use server." These pragmas facilitate easy switching between client-side and server-side contexts, enabling code sharing and efficient development of both client and server functionality.

#### Example of Hydra functionality

```typescript
import { game } from "@fw/base";
import { CoreUiRowBuilder, CoreUiWidgetBuilder } from "@fw/coreui";
import { render } from "@fw/react";
import MainUI from "@/ui/main";

("use client");

game.on("playerConnected", (player) => {
  render(MainUI, player.uiView);

  player.uiCore.disableCoreUiElement(CoreUiElement.Feedback);
  player.uiCore.disableCoreUiElement(CoreUiElement.Chat);
  player.uiCore.disableCoreUiElement(CoreUiElement.Inventory);
  player.uiCore.disableCoreUiElement(CoreUiElement.PlayerList);
  player.uiCore.disableCoreUiElement(CoreUiElement.Menu);

  const customItem = new CoreUiWidgetBuilder()
    .setIcon(Icon.SUN)
    .setAccessibilityName("My Custom Item")
    .setOnClick(() => {
      print("Clicked custom item");
    });

  const customItemRow = new CoreUiRowBuilder().addCustomItem(
    customItem.build()
  );

  player.uiCore.addCoreUiRow(customItemRow.build());
});
```

This example demonstrates the usage of Hydra's API along with the powerful "use client" pragma, which enables mixing client and server pragmas within the same file, adding an intriguing layer of complexity and versatility to the development process.

## Framework Studio: Where Creativity Thrives

Framework Studio, the ultimate editor for Framework game development, is equipped with a vast array

of features and tools tailored specifically for efficient and seamless game development workflows. Let's explore some of its key highlights:

### Intuitive Interface and First-class IntelliSense

- User-friendly interface enhances productivity and ease of use.
- First-class IntelliSense offers smart autocompletion, code suggestions, and real-time error detection.
- Smooth and efficient coding experience, allowing developers to focus on the creative aspects of game development.

### 3D Editing and Scene Design

- Built-in 3D editing capabilities for precise game scene design.
- Intuitive scene editor allows easy placement and manipulation of assets, environment elements, lighting, and special effects.
- Visual editing environment speeds up iteration process and provides a powerful tool for scene composition.

### UI Editing and Customization

- Comprehensive UI editing suite enables effortless creation and customization of user interfaces.
- Drag-and-drop interface builder for rapid creation of interactive UI elements.
- Real-time previewing and seamless integration of UI components.
- Easy management of UI layouts, styles, and transitions for polished and visually appealing user interfaces.

### Terrain and River Tools

- Specialized tools for terrain and river editing.
- Sculpt terrains, add textures, and paint details for diverse and immersive environments.
- Integrated river tools for dynamic rivers, lakes, and water bodies with realistic water simulation and interactions.

### Asset Management and Collaboration

- Robust asset management capabilities for efficient organization, import, and management of game assets.
- Easy integration of 3D models, textures, audio files, and other resources.
- Collaboration features support seamless teamwork with multiple developers working on the same project.
- Share assets and synchronize changes effortlessly.

With its powerful features and streamlined workflow, Framework Studio empowers developers to unleash their creativity and build amazing games that captivate players, pushing the boundaries of what is possible in game development.

---

The Vortex Engine stands proudly at the forefront of game engine technology, providing developers with a feature-rich and high-performance environment to create immersive games that push the boundaries of creativity and immersion.

With comprehensive graphics support, the utilization of [TypeScript](https://www.typescriptlang.org/) and Iana, integration of [React](https://reactjs.org/) for UI development, and the power of Hydra, the Vortex Engine empowers developers on the Framework platform to unlock their creativity, build captivating experiences, and contribute to the ongoing evolution of game development.
