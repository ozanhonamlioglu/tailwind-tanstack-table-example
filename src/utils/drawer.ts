export const toggleDrawer = (e: any) => {
  const container = document.getElementById('drawer-container');
  const content = document.getElementById('drawer-content');
  const page = document.getElementById('page');

  const containerState = container?.getAttribute('data-state');

  if (containerState === 'true') {
    if (e.target === container) {
      content?.setAttribute('data-state', 'false');
      setTimeout(() => {
        container?.setAttribute('data-state', 'false');
        page?.classList.toggle('fixed_body');
      }, 150);
    }
  } else {
    page?.classList.toggle('fixed_body');
    container?.setAttribute('data-state', 'true');
    content?.setAttribute('data-state', 'true');
  }
};
