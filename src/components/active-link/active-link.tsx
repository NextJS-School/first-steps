"use client"

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface Props extends LinkProps {
  label: string;
}

export const ActiveLink: React.FC<Props> = ({ label, href, ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="aria-[current=page]:text-blue-400/80  no-underline px-5 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors hover:shadow hover:shadow-blue-500/40 hover:text-zinc-100 rounded"
      {...(isActive && { "aria-current": "page" })}
      {...props}
    >
      {label}
    </Link>
  );
};
