import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: Props) {
  return (
    <div className={`mx-auto w-full max-w-[1446px] px-5 sm:px-8 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}
