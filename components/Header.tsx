import React from "react";

const Header = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  return (
    <h2
      className={`${className} border-4 border-black font-bold text-2xl py-4 px-10 inline-block tracking-widest  my-10`}
    >
      {children}
    </h2>
  );
};

export default Header;
