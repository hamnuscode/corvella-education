import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { CorvellaLogo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { footerNav, site, whatsappLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const hasMainSite = Boolean(site.mainWebsite.href);

  return (
    <footer className="relative overflow-clip bg-ink text-paper">
      <div aria-hidden className="pointer-events-none absolute inset-0 hairline-grid opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-[24rem] w-[24rem] rounded-full bg-brand/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="arch pointer-events-none absolute -right-16 top-8 hidden h-[80%] w-[20rem] border border-paper/[0.07] lg:block"
      />

      <Container className="relative py-12 lg:py-14">
        {/* Top: the one action we want */}
        <div className="flex flex-col gap-6 rounded-3xl border border-paper/12 bg-paper/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="display-md text-paper">Ready when you are</h2>
            <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-paper/70">
              Send us a message on WhatsApp and we will help you find your route in.
            </p>
          </div>
          <a
            href={whatsappLink(`Hello ${site.name}, I would like some advice about studying.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[3.25rem] shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#1fa855] px-7 font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1a8f48]"
          >
            <WhatsAppIcon size={19} />
            Chat on WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr]">
          <div>
            <CorvellaLogo variant="reversed" markClassName="h-9 w-9" idPrefix="footer" />
            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-paper/65">
              We help you find a UK university course you can get on to, and we stay with you from
              the first question to your first term.
            </p>

            <ul className="mt-6 flex flex-col gap-3 text-[0.88rem]">
              <li className="flex items-start gap-2.5 text-paper/70">
                <MapPin size={15} className="mt-0.5 shrink-0 text-amber" aria-hidden />
                <address className="not-italic">
                  {site.contact.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex items-center gap-2.5 text-paper/70">
                <Clock size={15} className="shrink-0 text-amber" aria-hidden />
                {site.contact.hours}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="label text-paper/45">{col.title}</h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.9rem] text-paper/70 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="label text-paper/45">Get in touch</h2>
              <ul className="mt-4 flex flex-col gap-2.5 text-[0.9rem]">
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
                  >
                    <WhatsAppIcon size={14} />
                    {site.contact.whatsapp.display}
                  </a>
                </li>
                <li>
                  <a
                    href={site.contact.phoneHref}
                    className="inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
                  >
                    <Phone size={14} aria-hidden />
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={site.contact.emailHref}
                    className="inline-flex items-center gap-2 text-paper/70 transition-colors hover:text-paper"
                  >
                    <Mail size={14} aria-hidden />
                    {site.contact.email}
                  </a>
                </li>
                <li className="pt-1">
                  {hasMainSite ? (
                    <a
                      href={site.mainWebsite.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-amber transition-colors hover:text-paper"
                    >
                      Visit our main website
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-paper/45">
                      Main website: {site.mainWebsite.label}
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-11 flex flex-col gap-3 border-t border-paper/12 pt-7 text-[0.8rem] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. {site.company.registration} {site.company.vat}.
          </p>
          <Link href="/privacy" className="transition-colors hover:text-paper/80">
            Privacy policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
