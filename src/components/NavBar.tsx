import { memo } from 'react';
import { NavItems } from 'routes/main-navbar/consts';
import Drawer from 'components/Drawer';

interface IProps {
  selectedItem?: (path: string) => void;
}

const NavBar: React.FC<IProps> = ({ selectedItem }) => {
  const { toggle } = Drawer.use();

  const onPress = (index: number) => {
    const bgClass = 'bg-cyan-700';
    const elements = Array.from(document.getElementsByClassName('navbar-item'));

    elements.map((elem, i) => {
      if (elem.classList.contains(bgClass)) {
        elem.classList.remove(bgClass);
      }

      if (i === index) {
        elem.classList.add(bgClass);
      }
    });

    selectedItem?.(NavItems[index].path);
  };

  return (
    <nav className="max-w-none bg-gray-800 p-5 flex flex-row justify-between text-white px-10 items-center">
      <button className="sm:flex md:hidden" onClick={toggle}>
        <i className="fa-solid fa-bars text-xl"></i>
      </button>
      <ol className="md:flex hidden flex-row gap-2 flex-wrap">
        {NavItems.map((x, key) => {
          return (
            <li
              key={x.path}
              className={`transition-all duration-200 rounded-full px-5 py-1 navbar-item ${x.preSelected ? 'bg-cyan-700' : undefined}`}
            >
              <a href="#" onClick={() => onPress(key)}>
                {x.name}
              </a>
            </li>
          );
        })}
      </ol>
      <h1 className="font-bold text-lg">WORLDBESTAPP</h1>
    </nav>
  );
};

export default memo(NavBar);
