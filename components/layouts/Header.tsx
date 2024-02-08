'use client';

import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "Entreprise",
      href: "/entreprise",
    },
    {
      label: "Realisations",
      href: "/realisations",
    },
    {
      label: "Veille",
      href: "/veille",
    },
    {
      label: "Bilan",
      href: "/bilan",
    },
  ];

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar position={`sticky`} onMenuOpenChange={setIsMenuOpen} className={``} >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image alt={`Logo`} src={`/M.svg`} width={100} height={100} className={`h-[60px]`} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {links.map((item, index) => (
          <NavbarItem key={`${item.label}`}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="px-2 py-1 bg-primary-300 bg-opacity-20 rounded-md sm:hidden lg:flex">
          <p className={`font-semibold text-primary`}>
            mon portfolio
          </p>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`
              w-full text-${index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              `}
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};