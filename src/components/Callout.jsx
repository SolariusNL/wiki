import clsx from "clsx";

import { Icon } from "@/components/Icon";

const styles = {
  note: {
    container:
      "bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
    title: "text-sky-900 dark:text-sky-400",
    body: "text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300",
  },
  warning: {
    container:
      "bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300",
  },
  error: {
    container:
      "bg-red-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
    title: "text-red-900 dark:text-red-500",
    body: "text-red-800 [--tw-prose-background:theme(colors.red.50)] prose-a:text-red-900 prose-code:text-red-900 dark:text-slate-300 dark:prose-code:text-slate-300",
  },
  summary: {
    // purple
    container:
      "bg-violet-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10",
    title: "text-violet-900 dark:text-violet-500",
    body: "text-violet-800 [--tw-prose-background:theme(colors.violet.50)] prose-a:text-violet-900 prose-code:text-violet-900 dark:text-slate-300 dark:prose-code:text-slate-300",
  },
};

const icons = {
  note: (props) => <Icon icon="lightbulb" {...props} />,
  warning: (props) => <Icon icon="warning" color="amber" {...props} />,
  error: (props) => <Icon icon="warning" color="red" {...props} />,
  summary: (props) => <Icon icon="plugins" color="purple" {...props} />,
};

export function Callout({ type = "note", title, children }) {
  let IconComponent = icons[type];

  return (
    <div className={clsx("my-8 flex rounded-3xl p-6", styles[type].container)}>
      <IconComponent className="h-8 w-8 flex-none" />
      <div className="ml-4 flex-auto">
        <p className={clsx("m-0 font-display text-xl", styles[type].title)}>
          {title}
        </p>
        <div className={clsx("prose mt-2.5", styles[type].body)}>
          {children}
        </div>
      </div>
    </div>
  );
}
