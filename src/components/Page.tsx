import React, { PropsWithChildren } from 'react';

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container max-w-none min-h-screen">{children}</div>;
};

export default Page;
