import Drawer from 'components/Drawer';
import React, { PropsWithChildren } from 'react';

import './index.css';

interface IProps {
  drawer?: boolean;
}

const Page: React.FC<PropsWithChildren<IProps>> = ({ children, drawer }) => {
  return (
    <div id="page" className="container max-w-none min-h-screen">
      {children}
      {drawer && <Drawer />}
    </div>
  );
};

export default Page;
