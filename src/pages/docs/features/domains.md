---
title: Domains
description: Add custom domains to your profile to verify your identity and improve your brand.
---

The domains feature enables developers to add custom domains to their profile to verify ownership of the domain and improve recognition of their brand. Domains can also be used in conjunction with other Framework [SaaS](https://en.wikipedia.org/wiki/Software_as_a_service) components like [Status](/docs/features/status) and [Wiki](/docs/features/wiki) to improve the user experience and brand recognition.

## Adding a Domain

Visit the **[Domains](https://framework.solarius.me/developer/domains)** page in the **Developer Dashboard** to get started. On the sidebar, click the **New domain** button to start adding a new domain.

{% center %}

{% figure src="https://cloud.solarius.me/index.php/s/gygjXdqn4QPXbaX/download" caption="Interface for adding a new domain" rounded="true" /%}

{% /center %}

Once you've done that, you will see a form that will ask you to enter the domain you want to add. You can add a domain that you own or a subdomain of a domain that you own. For example, if you own `example.com`, you can add `docs.example.com` as a domain.

We accept both apex domains and subdomains.

When you're done, click the **Create domain** button to create the domain.

{% callout title="Duplicate domains" type="warning" %}

Domains are unique and cannot exist more than once internally. If you try to add a domain that already exists, you will see an error message.

{% /callout %}

## Verifying a Domain

Domains are verified using TXT records in the DNS configuration of the domain. You will need to locate the DNS configuration for the domain you want to add and fill in the required information, displayed once clicking on your domain (after adding it).

{% center %}

{% figure src="https://cloud.solarius.me/index.php/s/wcyCc3MQ7tPfSAa/download" caption="Interface for verifying a domain" rounded="true" /%}

{% /center %}

## 🎉 Congratulations!

You've successfully registered and verified a domain on Framework. If you need further assistance, please [contact us](https://framework.solarius.me/support) and we'll be happy to help you out, or you can [join our Discourse community](https://discourse.solarius.me/) to ask questions and get help from other developers.

{% center %}

{% figure src="https://cloud.solarius.me/index.php/s/cAcjM9rowjWJt5o/download" caption="Domain details after verification" rounded="true" /%}

{% /center %}

Happy building!
