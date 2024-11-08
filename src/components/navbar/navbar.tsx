import { ActiveLink } from "../active-link/active-link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  return (
    <nav
      role="navigation"
      className="py-5 px-1 grid place-content-center bg-zinc-950"
    >
      <ul className="flex justify-center items-center gap-2 text-white font-semibold">
        {navigation.map((path, index) => (
          <li key={index}>
            <ActiveLink {...path} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
