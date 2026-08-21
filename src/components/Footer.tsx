import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CorvellaLogo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Section";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <CorvellaLogo variant="reversed" markClassName="h-10 w-10" idPrefix="footer" />
            <p className="mt-6 max-w-sm text-[0.97rem] leading-relaxed text-paper/65">
              We help people get on to UK university courses, including people who were told it was
              not an option. The advice is free and the answers are honest.
            </p>

            <div className="mt-7 flex flex-col gap-2.5 text-[0.93rem]">
              <a href={site.contact.phoneHref} className="inline-flex w-fit items-center gap-2.5 text-paper/75 transition-colors hover:text-paper">
                <Phone size={15} aria-hidden /> {site.contact.phone}
              </a>
              <a href={site.contact.whatsappHref} className="inline-flex w-fit items-center gap-2.5 text-paper/75 transition-colors hover:text-paper">
                <MessageCircle size={15} aria-hidden /> WhatsApp {site.contact.whatsapp}
              </a>
              <a href={site.contact.emailHref} className="inline-flex w-fit items-center gap-2.5 text-paper/75 transition-colors hover:text-paper">
                <Mail size={15} aria-hidden /> {site.contact.email}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h2 className="label text-paper/45">{col.title}</h2>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[0.95rem] text-paper/75 transition-colors hover:text-paper"
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

        <div className="mt-14 rounded-2xl border border-paper/12 bg-paper/[0.04] p-6 sm:flex sm:items-center sm:gap-7">
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-fit shrink-0 rounded"
            aria-label="FBA UK Ltd website, opens in a new tab"
          >
            <Image
              src="/brand/fba-uk-ltd.png"
              alt="FBA UK Ltd"
              width={200}
              height={62}
              className="h-11 w-auto opacity-90"
            />
          </a>
          <p className="mt-5 text-[0.9rem] leading-relaxed text-paper/60 sm:mt-0">
            {site.parent.line}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-paper/12 pt-8 text-[0.83rem] text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. {site.company.registration} {site.company.vat}.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-paper/80">
              Privacy policy
            </Link>
            <Link href="/careers" className="transition-colors hover:text-paper/80">
              Become a consultant
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
