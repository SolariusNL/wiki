import clsx from "clsx";
import React from "react";

export const TabContext = React.createContext();

export function Tabs({ labels, children }) {
  const [currentTab, setCurrentTab] = React.useState(labels[0]);

  return (
    <TabContext.Provider value={currentTab}>
      <div className="flex gap-2">
        {labels.map((label) => (
          <div
            className={clsx(
              "rounded-lg py-1 px-3 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500",
              label === currentTab
                ? "bg-sky-300"
                : "bg-sky-300/50 hover:bg-sky-300",
              "cursor-pointer transition-all"
            )}
            key={label}
            role="tablist"
            onClick={() => setCurrentTab(label)}
          >
            <button role="tab" aria-selected={label === currentTab}>
              {label}
            </button>
          </div>
        ))}
      </div>
      {children}
    </TabContext.Provider>
  );
}
