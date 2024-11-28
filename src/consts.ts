import type navType from "./types";

export const NavLinks: navType[] = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Product",
    href: "/product",
  },
  {
    name: "Resource",
    href: "/resource",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;
