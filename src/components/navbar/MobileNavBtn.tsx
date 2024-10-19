"use client";

import MenuIcon from "@/lib/icons/MenuIcon";
import { useNavbar } from "./NavbarProvider";
import CloseIcon from "@/lib/icons/CloseIcon";

export default function MobileNavBtn() {
  const { handleNav, nav } = useNavbar();

  return (
    <main
      onClick={handleNav}
      className="absolute right-0 z-10 cursor-pointer p-4 md:hidden"
    >
      {!nav ? <MenuIcon /> : <CloseIcon />}
    </main>
  );
}
