---
title: Framework Studio Shared Source
description: Learn how to retrieve the source code of pre-release Framework Studio for self-compilation.
---

We provide a tool called `Builder` that allows you to retrieve bundled Framework Studio source packages for self-compilation using `Solarius.Compiler`.

## Prerequisites

Before proceeding, ensure that you have the following prerequisites installed:

- [Python 3 or higher](https://www.python.org/downloads/)
- [Microsoft Visual Studio 2017 or higher](https://visualstudio.microsoft.com/downloads/)
- [Builder](https://cloud.solarius.me/index.php/s/tqp2KSbDNQgHzTb/download)
- [Rust](https://www.rust-lang.org/tools/install)
- [CMake](https://cmake.org/download/)

## Usage

Follow these steps to retrieve the Framework Studio source code:

- Download and place `Builder` to a folder of your choice.
- Execute `Builder.exe` and follow the provided prompts.

{% callout title="File system warning" type="warning" %}
To avoid potential issues, it is strongly recommended to place `Builder` in an empty folder, as it heavily utilizes the file system during operation.
{% /callout %}

{% callout title="System requirements" type="note" %}
About 2.0 GB of disk space is required to download all necessary files and components. Additionally, at least 16 GB of RAM and 8 CPU cores are recommended for the build step - it may take hours to complete even on a powerful machine. Framework Studio is a large and complex application.

Once your build cache is populated, subsequent builds will be much faster.
{% /callout %}

## Solarius Infra

Access to the Framework Studio bundles requires a valid Solarius Infra license. If you do not possess one, you can request temporary access by contacting us at <infra@solarius.me>.

Kindly provide your name, email address (for future contact, if none is provided, we will use the one you contacted us from), and a brief description of your interest in self-compiling Framework Studio.

## Proprietary components

Framework Studio includes several proprietary components, such as NVIDIA PhysX and FMOD Studio. Devices without hardware-based DRM and Secure Boot support will not retrieve these components.

### List of proprietary components

- **NVIDIA PhysX** - a proprietary physics engine by NVIDIA Corporation.
- **FMOD Studio** - a proprietary audio engine by Firelight Technologies Pty Ltd.
- **NVIDIA OptiX** - a proprietary ray tracing engine by NVIDIA Corporation.
- **NVIDIA CUDA** - a proprietary parallel computing platform and API by NVIDIA Corporation.
- **NVIDIA Nsight** - a proprietary graphics debugger by NVIDIA Corporation.

## Future

We are committed to the principles of freedom and open-source software. Rest assured that Framework Studio will become entirely free, both in terms of freedom and cost, upon its official release. Until then, it will continue to remain shared source.
