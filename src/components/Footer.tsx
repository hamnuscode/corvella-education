import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CorvellaLogo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Section";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const contacts = [
    { icon: Phone, label: site.contact.phone, href: site.contact.phoneHref },
    { icon: MessageCircle, label: site.contact.whatsapp, href: site.contact.whatsappHref },
    { icon: Mail, label: site.contact.email, href: site.contact.emailHref },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 hairline-grid opacity-40" />

      <Container className="relative py-10 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="lg:max-w-xs">
            <CorvellaLogo variant="reversed" markClassName="h-9 w-9" idPrefix="footer" />
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="inline-flex items-center gap-2 text-[0.85rem] text-paper/70 transition-colors hover:text-paper"
                >
                  <c.icon size={13} aria-hidden />
                  {c.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid flex-1 gap-8 sm:grid-cols-3 lg:max-w-2xl">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="label text-paper/40">{col.title}</h2>
                <ul className="mt-3.5 flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.88rem] text-paper/70 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-paper/12 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
            aria-label="FBA UK Ltd website, opens in a new tab"
          >
            <Image
              src="/brand/fba-uk-ltd.png"
              alt="FBA UK Ltd"
              width={160}
              height={50}
              className="h-7 w-auto opacity-80 transition-opacity hover:opacity-100"
            />
            <span className="max-w-md text-[0.78rem] leading-relaxed text-paper/50">
              {site.parent.line}
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-paper/45">
            <Link href="/privacy" className="transition-colors hover:text-paper/80">
              Privacy
            </Link>
            <Link href="/careers" className="transition-colors hover:text-paper/80">
              Become a consultant
            </Link>
            <span>
              &copy; {year} {site.name}
            </span>
          </div>
        </div>

        <p className="mt-4 text-[0.72rem] leading-relaxed text-paper/32">
          {site.company.registration} {site.company.vat}.
        </p>
      </Container>
    </footer>
  );
}
