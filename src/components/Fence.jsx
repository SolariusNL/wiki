import clsx from "clsx";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Fragment } from "react";

export function Fence({ children, language }) {
  return (
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre
          className={clsx(
            "scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-800",
            className
          )}
          style={style}
        >
          <code>
            {tokens.map((line, lineIndex) => (
              <Fragment key={lineIndex}>
                {line
                  .filter((token) => !token.empty)
                  .map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                {"\n"}
              </Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}
