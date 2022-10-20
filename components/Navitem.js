import Link from "next/link";
import React from "react";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <div className="theme">
        <a className={`nav__item nav__link ${active ? "active" : ""}`}>
          {text}
        </a>
      </div>
    </Link>
  );
};

export default NavItem;
