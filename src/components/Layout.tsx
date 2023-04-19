import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex flex-col ">
      <div className="h-full w-full overflow-auto">{children}</div>
    </div>
  );
};
