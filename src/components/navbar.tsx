import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav
      className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px] fixed bg-secondary right-0 top-0 z-10 flex flex-col items-end m-6 p-1 rounded-lg text-tertiary border-b-4 border-secondary-shadow
        md:p-12
        xl:flex-row xl:justify-end xl:bg-transparent xl:shadow-none"
    >
      <NavMenuButton onIsMenuClicked={() => setIsMenuOpen(state => !state)}/>

      <ul
        className={`${isMenuOpen
            ? "rounded-lg border-b-2 border-primary-shadow bg-primary p-5 shadow-xl"
            : "hidden"
          } 
        lx:my-0 lx:flex lx:flex-row lx:gap-10 relative flex flex-col gap-7 
        font-medium transition-all duration-300 ease-in`}
      >
        {links.map((item) => (
          <li className="relative text-tertiary hover:text-red-500">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function NavMenuButton({ onIsMenuClicked }) {
  return (
    <label className="cursor-pointer">
      <input
        type="checkbox"
        onClick={onIsMenuClicked}
        className="peer hidden [&:checked_+_svg_.a]:[stroke-dasharray:_20_300] [&:checked_+_svg_.a]:[stroke-dashoffset:_-32.42]"
      />
      <svg
        viewBox="0 0 32 32"
        className="h-[3rem] [transition:_transform_600ms_cubic-bezier(0.4,_0,_0.2,_1)] peer-checked:[transform:_rotate(-45deg)]"
      >
        <path
          className="a stroke-[white] stroke-[3] [fill:_none] [stroke-dasharray:_12_63] [stroke-linecap:_round] [stroke-linejoin:_round] [transition:_stroke-dasharray_600ms_cubic-bezier(0.4,_0,_0.2,_1),_stroke-dashoffset_600ms_cubic-bezier(0.4,_0,_0.2,_1)]"
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path
          className="stroke-[white] stroke-[3] [fill:_none] [stroke-linecap:_round] [stroke-linejoin:_round] [transition:_stroke-dasharray_600ms_cubic-bezier(0.4,_0,_0.2,_1),_stroke-dashoffset_600ms_cubic-bezier(0.4,_0,_0.2,_1)]"
          d="M7 16 27 16"
        ></path>
      </svg>
    </label>
  )
}

export default NavBar;
