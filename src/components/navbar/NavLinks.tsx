import MyLink from "../reusableComponents/MyLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => (
        <MyLink href={link.href} key={link.href}>
          <li className="py-1 hover:border-b hover:border-b-black dark:hover:border-b-gray-300">
            {link.label}
          </li>
        </MyLink>
      ))}
    </>
  );
}
