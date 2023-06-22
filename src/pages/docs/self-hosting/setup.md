---
title: Setup
description: Learn how to set up your Framework instance.
---

Setting up your Framework instance is fairly straightforward. This guide will walk you through the process of setting up your instance!

## Prerequisites

- **Node.js (recommended version: 16.x)** - Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. Framework uses Node.js to run the server-side code.
- **Yarn package manager** - Yarn is a package manager for Node.js that allows you to install and manage dependencies for your Framework instance.
- **PostgreSQL database** - PostgreSQL is a relational database management system that Framework uses to store data. You'll need to set up a PostgreSQL database and obtain the connection details before you can set up your Framework instance.

## Clone the Repository

Clone the Framework repository from our [GitLab](https://invent.solarius.me) instance:

```bash
git clone https://invent.solarius.me/Soodam.re/framework.git
```

## Install Dependencies

Navigate into the cloned directory and install the dependencies by running the following command:

```bash
cd framework/
yarn
```

## Configure Environment Variables

The Framework platform uses environment variables for configuration. Rename the `.env.example` file to `.env` and edit it to suit your needs. The most important environment variable to configure is the `DATABASE_URL`, which should contain the connection details for your PostgreSQL database.

```env
DATABASE_URL=postgresql://user:password@localhost:5432/database
```

{% callout title=".env Guide" type="note" %}
For more information on configuring environment variables, see the [Environment](/docs/self-hosting/environment) page.
{% /callout %}

## Set Up the Database

- Run the following command to set up a PostgreSQL database and apply the migrations:

  ```bash
  yarn run migrate
  ```

- Run the following command to seed the database with initial data:
  ```bash
  yarn run seed
  ```

## Set Up an Admin Account

Run the following command to set an admin password:

```bash
yarn run ctl --set-pwd your_admin_password
```

{% callout title="Admin Account" type="note" %}
The default admin username is "Framework". You'll need to use this username to log in to Framework.
{% /callout %}

## Build and Start Framework

- Build the platform by running the following command:

  ```bash
  yarn run build
  ```

- Start Framework by running the following command:
  ```bash
  yarn run start
  ```

## Access your new Framework instance

Open your web browser and navigate to `http://localhost:3000` to access Framework! Use the admin username and password you set up earlier to log in.

{% quick-links %}

{% quick-link title=".env Guide" icon="installation" href="/docs/self-hosting/environment" description="Learn how to configure environment variables in your self-hosted Framework instance" /%}

{% quick-link title="framework.yml Guide" icon="installation" href="/docs/self-hosting/configuration" description="Learn how to configure your self-hosted Framework instance using the framework.yml file" /%}

{% quick-link title="PM2 Guide" icon="theming" href="/docs/self-hosting/pm2" description="Learn how to use PM2 to manage your self-hosted Framework instance" /%}

{% /quick-links %}
