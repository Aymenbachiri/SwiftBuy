"use client";

import Link from "next/link";
import { useNavbar } from "./NavbarProvider";

type MobileNavbarLinkProps = {
  link: {
    href: string;
    label: string;
  };
};

export default function MobileNavbarLink({ link }: MobileNavbarLinkProps) {
  const { handleNav } = useNavbar();

  return (
    <Link className="py-2 hover:border-b" href={link.href} onClick={handleNav}>
      {link.label}
    </Link>
  );
}
