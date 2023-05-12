import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Collapsible from "react-collapsible";

export function Navigation({ navigation, className }) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState([]);

  const groupedNavigation = navigation.reduce((acc, item) => {
    if (!acc[item.groupTitle]) {
      acc[item.groupTitle] = [];
    }
    acc[item.groupTitle].push(item);
    return acc;
  }, {});

  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <ul role="list" className="space-y-6">
        {Object.entries(groupedNavigation).map(([groupTitle, items]) => (
          <li key={groupTitle}>
            {groupTitle !== "undefined" && (
              <h2 className="font-display font-medium text-slate-900 dark:text-white">
                {groupTitle}
              </h2>
            )}
            <ul
              role="list"
              className="mt-2 ml-2 space-y-2 lg:mt-4 lg:space-y-4"
            >
              {items.map((section) => (
                <Collapsible
                  key={
                    groupTitle
                      ? `${groupTitle}-${section.title}`
                      : section.title
                  }
                  trigger={
                    <li className="group flex items-center justify-between">
                      <h2
                        className={clsx(
                          "font-display font-medium text-slate-500",
                          section.collapsible &&
                            "cursor-pointer transition-all group-hover:text-slate-900 dark:group-hover:text-white",
                          !section.collapsible && "cursor-default",
                          section.links.some(
                            (link) => link.href === router.pathname
                          ) && "text-sky-500"
                        )}
                      >
                        {section.title}
                      </h2>
                      {section.collapsible && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className={clsx(
                            "h-5 w-5 text-slate-500",
                            expandedSections.includes(section.title)
                              ? "rotate-90 transform transition-transform duration-200"
                              : "transform transition-transform duration-200",
                            section.links.some(
                              (link) => link.href === router.pathname
                            ) && "text-sky-500"
                          )}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      )}
                    </li>
                  }
                  open={
                    section.links.some(
                      (link) => link.href === router.pathname
                    ) ||
                    !section.collapsible ||
                    groupTitle
                      ? expandedSections.includes(
                          groupTitle
                            ? `${groupTitle}-${section.title}`
                            : section.title
                        )
                      : false
                  }
                  onOpening={() =>
                    setExpandedSections((expandedSections) => [
                      ...expandedSections,
                      groupTitle
                        ? `${groupTitle}-${section.title}`
                        : section.title,
                    ])
                  }
                  onClosing={() =>
                    setExpandedSections((expandedSections) =>
                      expandedSections.filter(
                        (title) => title !== section.title
                      )
                    )
                  }
                  transitionTime={250}
                  easing="ease-in-out"
                >
                  <ul
                    role="list"
                    className="mt-2 ml-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                  >
                    {section.links.map((link) => (
                      <li key={link.href} className="relative">
                        <Link
                          href={link.href}
                          className={clsx(
                            "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                            link.href === router.pathname
                              ? "font-semibold text-sky-500 before:bg-sky-500"
                              : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                          )}
                        >
                          {link.title}
                          {link.beta && (
                            <span class="mr-2 ml-4 rounded-full bg-sky-300 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                              Beta
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapsible>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
