import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold text-foreground">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{site.description}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 sm:flex-row sm:gap-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="text-sm text-muted hover:text-foreground">
                Privacy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted sm:px-6">
        © {new Date().getFullYear()} {site.name}. Placeholder links—add real policies and security.txt as needed.
      </p>
    </footer>
  );
}
