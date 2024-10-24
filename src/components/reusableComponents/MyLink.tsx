import Link from "next/link";

interface CustomLinkProps {
  href: string | URL;
  children: React.ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  passHref?: boolean;
}

export default function MyLink({
  href,
  children,
  className,
  target,
  rel,
  onClick,
  passHref,
  ...rest
}: CustomLinkProps) {
  return (
    <Link
      rel={rel}
      href={href}
      target={target}
      onClick={onClick}
      className={className}
      passHref={passHref}
      {...rest}
    >
      {children}
    </Link>
  );
}
