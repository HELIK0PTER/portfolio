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
} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import Image from "next/image";
import {router} from "next/client";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const handleClick = () => {
    setIsMenuOpen(false)
  }

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
    <Navbar position={`sticky`} onMenuOpenChange={setIsMenuOpen} className={`bg-primary-300 bg-opacity-40`} >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image alt={`Logo`} src={`/M.svg`} width={100} height={100} className={`h-[60px] hover:scale-105 transition`} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-0" justify="center">
        {links.map((item, index) => (
          <NavbarItem key={`${item.label}`} className={`h-full w-full`}>
            <Link href={item.href}
                  className={`px-3 h-full flex items-center hover:bg-primary-500 hover:bg-opacity-20
                  font-semibold transition
                  `}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="bg-success-300 bg-opacity-60 rounded-md hidden lg:flex hover:bg-opacity-100 transition">
          <Link href="/" className={`px-2 py-1 font-semibold text-primary`}>
            mon portfolio
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {links.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}
          >
            <Link
              className={`w-full text-primary`}
              href={item.href}
              onPress = { handleClick }
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};