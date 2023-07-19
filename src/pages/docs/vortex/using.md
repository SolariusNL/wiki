---
title: Using Vortex
description: Learn how to use the Vortex Engine to build games.
---

Vortex is a cutting-edge 3D and 2D game engine specifically designed for Framework. Because Vortex is built specifically for Framework, it can only be used with our platform and dedicated tools.

## Getting started

To get started with Vortex, you must install [Framework](https://dl.solarius.me/app/solarius/framework/installer/latest) and [Framework Studio 2023](https://dl.solarius.me/app/solarius/framework-studio/installer/latest). Once you have installed these tools, you can launch **Framework Studio 2023** and start building games with Vortex.

## Creating a new game

{% center %}

{% figure src="https://cloud.solarius.me/index.php/s/aSHPR3aA25swydb/preview" alt="Create a new game" caption="Interface for creating a new game" rounded="true" /%}

{% /center %}

Vortex supports 3D and 2D games. Simply select the type of game you want to create and enter a name for your game. Once you've done that, click the **Create game** button to create your game.

Optionally, you can find user-created templates for Vortex games on the [Vortex Marketplace](https://marketplace.solarius.me/). You can use these templates to get started with your game. You can also find assets for your game on marketplace.

## Understanding the interface

Framework Studio is a complex, feature-rich and extremely powerful tool. As such, it can be overwhelming for new users. To help you get started, we'll be taking note of the most important parts of the interface.

### Sidebar

{% center %}

{% figure src="https://cloud.solarius.me/index.php/s/g4FgdGxDkcMbdk7/preview" alt="Sidebar" caption="Sidebar interface" rounded="true" /%}

{% /center %}

The sidebar serves as the primary navigation interface for your project, providing a hierarchical list of actors or objects within the active scene. It offers convenient functionality to select actors, modify their properties, and highlight them in the viewport.

From top to bottom, the sidebar consists of the following components:

- **Lite Nav**: The lite nav is a compact navigation bar that enables quick access to different sections of the sidebar:
  - **Toolbox**: Represents the level hierarchy.
  - **Inventory**: Displays all owned assets in your Framework account.
  - **Assets**: Shows all assets within the current project.
- **Chips**: Located at the bottom of the sidebar, this section presents a collection of small, interactive elements called chips. These chips provide supplementary information about the selected actor.
  - **Filter**: Allows you to filter the list of actors in the sidebar.
  - **Search**: Enables searching for actors within the sidebar.
  - **Import**: Facilitates the import of assets into the current project.
  - **Browse**: Allows browsing through assets in the current project.
  - **Assets**: Provides a view of all assets in the current project.
  - **Options**: Displays options for the toolbox.
- **Toolbox filter**: This filter lets you refine the list of actors in the toolbox.
  - **All**: Displays all actors in the toolbox.
  - **Folders**: Shows only folders in the toolbox.
  - **Files**: Shows only files in the toolbox.
  - **Scripts**: Displays only scripts in the toolbox.

## Bottom bar

{% center %}

{% figure src="https://cloud.solarius.me/index.php/s/bsAirm6LDSTriMR/preview" alt="Bottom bar" caption="Bottom bar interface" rounded="true" /%}

{% /center %}

The bottom bar is a horizontal bar situated at the bottom of the screen, providing convenient access to a range of tools and features within Framework Studio.

The available tools and features are as follows:

- **Output**: Displays the output of the Hydra TypeScript compiler, providing valuable information about the compilation process.
- **Problems**: Offers an outline of all code problems detected in the current project, including helpful feedback from FrameworkAI.
- **Terminal**: Functions as a terminal emulator, allowing you to execute commands on the local machine directly within Framework Studio.
- **Git**: Integrates with Git, offering seamless management of version control for your project.
- **Animation**: Employs the Pandora animation editor, which facilitates the creation and editing of animations with ease.
- **Audio**: Enables fine-tuning of audio settings for specific audio sources, ensuring optimal sound customization.
- **Extensions**: Serves as a centralized location for managing and utilizing Studio extensions, expanding the functionality of Framework Studio.
