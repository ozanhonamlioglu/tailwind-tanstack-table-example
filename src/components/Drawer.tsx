const Drawer = () => {
  const closeDrawer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = document.getElementById('drawer-container');
    const content = document.getElementById('drawer-content');

    if (e.target === container) {
      content?.setAttribute('data-state', 'false');
      setTimeout(() => {
        container?.setAttribute('data-state', 'false');
      }, 150);
    }
  };

  return (
    <div
      id="drawer-container"
      className="fixed top-0 left-0 h-screen w-screen bg-zinc-400/50 scale-0 data-[state=true]:scale-100"
      data-state="false"
      onClick={(e) => closeDrawer(e)}
    >
      <div
        id="drawer-content"
        className="bg-white absolute -left-full origin-left lg:w-1/4 sm:w-1/2 w-3/4 h-screen transition-all duration-150 data-[state=true]:left-0 data-[state=fale]:-left-full"
        data-state="false"
      >
        Drawer
      </div>
    </div>
  );
};

export default Drawer;
