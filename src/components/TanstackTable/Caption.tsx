import { PropsWithChildren } from 'react';

const Caption: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">{children}</caption>
  );
};

export default Caption;
