---
title: Configuration
description: Learn how to configure your self-hosted Framework instance.
---

Framework instances have a `framework.yml` file in the root directory of the instance. This file contains configuration options for your Framework instance.

{% callout title="Warning" type="warning" %}
A few warnings:

- Changes to the `framework.yml` file will not be applied until the instance is rebuilt.
- The `framework.yml` is included in the build and is shipped to the client. Do not include any sensitive information in this file.

{% /callout %}

## Footer Configuration

The `footer` section contains two subsections:

### Links

This subsection is used to configure the links displayed in the footer of your platform. It contains an array of objects, each representing a section of links. Each section contains a `sectionName` string and an array of `links`. Each `link` object contains a `label` string and a `url` string.

#### Example

```yml
footer:
  links:
    - sectionName: Legal
      links:
        - label: Privacy Policy
          url: /privacy
        - label: Community Guidelines
          url: /guidelines
    - sectionName: Company
      links:
        - label: About Us
          url: /about
        - label: Careers
          url: /careers
```

### Socials

This subsection is used to configure the social media links displayed in the footer of your platform. It contains an object with three properties: `twitter`, `youtube`, and `instagram`. Each property contains two subproperties: `show` (a boolean indicating whether or not to display the link) and `url` (a string containing the URL of the social media page).

#### Example

```yml
footer:
  socials:
    twitter:
      show: true
      url: https://twitter.com/
    youtube:
      show: false
      url: https://youtube.com/
    instagram:
      show: true
      url: https://instagram.com/
```
