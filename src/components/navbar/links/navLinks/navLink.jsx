"use client";

import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link href={item.path}>
      <a className={pathName === item.path ? "active" : ""}>{item.title}</a>
    </Link>
  );
};

export default NavLink;
