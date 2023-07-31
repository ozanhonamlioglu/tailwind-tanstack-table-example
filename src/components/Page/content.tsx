import React, { PropsWithChildren } from 'react';

const PageContent: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto flex flex-col justify-center items-center p-5">{children}</div>;
};

export default PageContent;
