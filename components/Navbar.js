import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./Navitem";

const MENU_LIST = [
  { text: "Features", href: "#features" },
  { text: "About", href: "#info" },
  { text: "Team", href: "#meet-team" },
  { text: "Community", href: "#" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div>
      <nav>
        <div className={`container`}>
          <Link href={"/"} passHref legacyBehavior>
            <Logo />
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list theme`}>
            {MENU_LIST.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
