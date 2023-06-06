---
title: Environment
description: Learn how to configure environment variables in your self-hosted Framework instance
---

Much of the functionality of Framework is configured using environment variables. These variables are set in a file named `.env` in the root directory of your Framework instance.

To get started, copy the contents of the `.env.example` file in the root directory of your Framework instance and paste them into a new file named `.env`. You can then edit the values of the variables in the `.env` file to configure your Framework instance.

## `DATABASE_URL`

The `DATABASE_URL` option sets the URL of your PostgreSQL database. This should be set to the correct URL for your database.

### Example

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/mydatabase"
```

---

## SMTP Mail Delivery Configuration

The SMTP configuration options are used to set up email delivery. You will need to set up an SMTP server and fill in the following options to enable email delivery.

- `MAIL_ENABLED` - Set this to `true` to enable email delivery.
- `SMTP_HOST` - The hostname of your SMTP server.
- `SMTP_PASSWORD` - The password to use to authenticate with your SMTP server.
- `SMTP_USERNAME` - The username to use to authenticate with your SMTP server.
- `MAIL_DOMAIN` - The domain name to use in the `From` field of emails.

### Example

```envv
MAIL_ENABLED=true
SMTP_HOST=smtp.gmail.com
SMTP_PASSWORD=mypassword
SMTP_USERNAME=myusername@gmail.com
MAIL_DOMAIN=mydomain.com
```

---

## Feature Flag Configuration

Feature flags allow you to enable or disable certain features of your platform for different environments. You will need to create an account at HappyKit to use this feature.

- `NEXT_PUBLIC_FLAGS_KEY` - The API key for your HappyKit account.
- `NEXT_PUBLIC_FLAGS_PRODUCTION` - The production feature flag key for your HappyKit account.
- `NEXT_PUBLIC_FLAGS_PREVIEW` - The preview feature flag key for your HappyKit account.
- `NEXT_PUBLIC_FLAGS_DEVELOPMENT` - The development feature flag key for your HappyKit account.

{% callout title="Deprecation notice" type="warning" %}
Framework is no longer dependent on external feature flag services. This feature will be removed in a future release. Please use the built-in feature flag system instead, no configuration is required.
{% /callout %}

### Example

```env
NEXT_PUBLIC_FLAGS_KEY=YOUR_HAPPYKIT_API_KEY
NEXT_PUBLIC_FLAGS_PRODUCTION=YOUR_PRODUCTION_FLAG_KEY
NEXT_PUBLIC_FLAGS_PREVIEW=YOUR_PREVIEW_FLAG_KEY
NEXT_PUBLIC_FLAGS_DEVELOPMENT=YOUR_DEVELOPMENT_FLAG_KEY
```

---

## Persistent Storage URL

- `NEXT_PUBLIC_PERSISTENT_FILE_STORAGE_BASE` - The base URL for the persistent storage of files in the database.

### Example

```
NEXT_PUBLIC_PERSISTENT_FILE_STORAGE_BASE="https://media.example.com"
```

---

## Stripe API Keys

Framework uses Stripe to process payments. You will need to create a Stripe account and fill in the following options to enable payments for Tickets, Premium, etc.

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key.
- `STRIPE_SECRET_KEY` - Your Stripe secret key.

### Example

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=YOUR_STRIPE_PUBLISHABLE_KEY
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```

---

## BetterUptime API Keys

This option is used to enable the BetterUptime status badge in the footer to indicate the status of your instance.

- `BETTER_UPTIME_KEY` - Your BetterUptime API key.
- `NEXT_PUBLIC_BETTER_UPTIME_ENABLED` - Set this to `true` to enable the BetterUptime status badge in the footer.
- `NEXT_PUBLIC_STATUSPAGE_URL` - The URL of your status page.

### Example

```env
BETTER_UPTIME_KEY=YOUR_BETTER_UPTIME_API_KEY
NEXT_PUBLIC_BETTER_UPTIME_ENABLED=true
NEXT_PUBLIC_STATUSPAGE_URL=https://status.example.com
```

---

## Support Preferences

These options are used to configure the support email address that is used in the built-in contact page. This allows users to contact you for support regarding your Framework instance.

- `SUPPORT_EMAIL` - The email address to use for support.
- `NEXT_PUBLIC_SUPPORT_EMAIL` - The public email address to use for support.

## Example

```env
SUPPORT_EMAIL=support@example.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@example.com
```

---

{% callout title="Warning" type="warning" %}
Change these values to match your own preferences. We are not responsible for any issues that may arise from using the default values.
{% /callout %}
