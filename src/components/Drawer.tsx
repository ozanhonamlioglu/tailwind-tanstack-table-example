import { toggleDrawer } from 'utils/drawer';

const Drawer = () => {
  return (
    <div
      id="drawer-container"
      className="fixed z-10 top-0 left-0 h-screen w-screen bg-zinc-400/50 scale-0 data-[state=true]:scale-100"
      data-state="false"
      onClick={toggleDrawer}
    >
      <div
        id="drawer-content"
        className="bg-white absolute -translate-x-full origin-left lg:w-1/4 sm:w-1/2 w-3/4 h-screen transition-all duration-150 data-[state=true]:translate-x-0"
        data-state="false"
      >
        Drawer
      </div>
    </div>
  );
};

export default Drawer;
