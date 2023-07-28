import React, { PropsWithChildren } from 'react';
import Drawer from './Drawer';

interface IProps {
  drawer?: boolean;
}

const Page: React.FC<PropsWithChildren<IProps>> = ({ children, drawer }) => {
  return (
    <div className="container max-w-none min-h-screen">
      {children}
      {drawer && <Drawer />}
    </div>
  );
};

export default Page;
