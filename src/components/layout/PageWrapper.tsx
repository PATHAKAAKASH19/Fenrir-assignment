import type { ReactNode } from "react";
import { cn } from "../../lib/utils";


type PageWrapperProps = {
    children: ReactNode,
    className?: string,
    title: string,
    actions:ReactNode
}

const PageWrapper = ({ children, className, title, actions }:PageWrapperProps) => {
  return (
    <div className={cn("space-y-6", className)}>
      {(title || actions) && (
        <div className="flex items-center justify-between">
          {title && (
            <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          )}
          {actions && (
            <div className="flex items-center space-x-2">{actions}</div>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
