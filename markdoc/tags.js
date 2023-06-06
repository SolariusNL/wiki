import { Callout } from "@/components/Callout";
import PackageDetails from "@/components/PackageDetails";
import { QuickLink, QuickLinks } from "@/components/QuickLinks";
import { Tab } from "@/components/Tab";
import { Tabs } from "@/components/Tabs";
import { Tag } from "@markdoc/markdoc";

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: "note",
        matches: ["note", "warning"],
        errorLevel: "critical",
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
      rounded: { type: Boolean, default: false },
    },
    render: ({ src, alt = "", caption, rounded }) => (
      <figure
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "8px",
          ...(rounded && { borderRadius: "8px" }),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            ...(rounded && { borderRadius: "8px" }),
          }}
        />
        <figcaption className="font-semibold">{caption}</figcaption>
      </figure>
    ),
  },
  "quick-links": {
    render: QuickLinks,
  },
  "quick-link": {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  center: {
    attributes: {
      flexType: { type: String, default: "column" },
    },
    render: ({ children, flexType }) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: flexType,
        }}
      >
        {children}
      </div>
    ),
  },
  grid: {
    attributes: {
      columns: { type: Number, default: 2 },
    },
    render: ({ children, columns }) => (
      <div
        className="grid grid-cols-2 gap-4"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {children}
      </div>
    ),
  },
  "package-details": {
    selfClosing: true,
    attributes: {
      name: { type: String },
      description: { type: String },
    },
    render: PackageDetails,
  },
  tabs: {
    render: Tabs,
    attributes: {},
    transform(node, config) {
      const labels = node
        .transformChildren(config)
        .filter((child) => child && child.name === "Tab")
        .map((tab) => (typeof tab === "object" ? tab.attributes.label : null));

      return new Tag(this.render, { labels }, node.transformChildren(config));
    },
  },
  tab: {
    render: Tab,
    attributes: {
      label: {
        type: String,
      },
    },
  },
};

export default tags;
