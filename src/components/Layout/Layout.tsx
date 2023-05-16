import React from "react";
import Banner from "./Banner";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="px-20 poof">
      <Banner />
      {children}
    </div>
  );
};

export default Layout;
