import { Callout } from "@/components/Callout";
import PackageDetails from "@/components/PackageDetails";
import { QuickLink, QuickLinks } from "@/components/QuickLinks";

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
    },
    render: ({ src, alt = "", caption }) => (
      <figure
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "8px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
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
};

export default tags;
