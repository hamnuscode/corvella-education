import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/PageBanner";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { banners, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Message Corvella Education on WhatsApp, call us, or send the form. Office hours, address and quick answers to your questions.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const askHref = whatsappLink(
    `Hello ${site.name}, I have a question about studying at a UK university.`,
  );

  return (
    <>
      <PageBanner {...banners.contact} />

      <Section tone="paper" backdrop={{ orbs: true }}>
        <Container>
          {/* WhatsApp first: it is the quickest way to reach us */}
          <Reveal>
            <a
              href={askHref}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift group flex flex-col gap-5 rounded-3xl border border-mist bg-paper p-7 hover:bg-white sm:flex-row sm:items-center sm:justify-between sm:p-9"
              style={{ ["--accent" as string]: "#1fa855" }}
            >
              <span className="flex items-center gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#1fa855] text-paper">
                  <WhatsAppIcon size={26} />
                </span>
                <span>
                  <span className="block font-display text-[1.35rem] font-bold text-ink">
                    Ask us a question
                  </span>
                  <span className="mt-1 block text-[0.94rem] text-quiet">
                    Message us on WhatsApp and we will reply as soon as we can.
                  </span>
                </span>
              </span>
              <span className="inline-flex h-12 shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#1fa855] px-6 font-semibold text-paper transition-colors group-hover:bg-[#1a8f48]">
                <WhatsAppIcon size={18} />
                {site.contact.whatsapp.display}
              </span>
            </a>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                <a
                  href={site.contact.phoneHref}
                  className="card-lift group flex items-start gap-4 rounded-2xl border border-mist bg-paper-2 p-6 hover:bg-white"
                >
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand transition-colors group-hover:bg-brand group-hover:text-paper"
                  >
                    <Phone size={19} strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="label block text-quiet">Phone</span>
                    <span className="mt-1.5 block font-display text-[1.2rem] font-bold text-ink">
                      {site.contact.phone}
                    </span>
                  </span>
                </a>

                <a
                  href={site.contact.emailHref}
                  className="card-lift group flex items-start gap-4 rounded-2xl border border-mist bg-paper-2 p-6 hover:bg-white"
                >
                  <span
                    aria-hidden
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand transition-colors group-hover:bg-brand group-hover:text-paper"
                  >
                    <Mail size={19} strokeWidth={1.9} />
                  </span>
                  <span className="min-w-0">
                    <span className="label block text-quiet">Email</span>
                    <span className="mt-1.5 block truncate font-display text-[1.1rem] font-bold text-ink">
                      {site.contact.email}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-mist bg-paper-2 p-6">
                  <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand">
                    <MapPin size={19} strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="label block text-quiet">Address</span>
                    <address className="mt-1.5 not-italic leading-relaxed text-ink">
                      {site.contact.address.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </span>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-mist bg-paper-2 p-6">
                  <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand">
                    <Clock size={19} strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="label block text-quiet">Office hours</span>
                    <span className="mt-1.5 block leading-relaxed text-ink">{site.contact.hours}</span>
                    <span className="mt-2 block text-[0.85rem] text-quiet">
                      Messages outside these hours are answered the next working day.
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-mist bg-paper-2 p-6 sm:p-9">
                <h2 className="display-md text-ink">Send us a message</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-quiet">
                  Fill this in and we will open WhatsApp with your message ready to send. No question
                  is too small.
                </p>
                <div className="mt-8">
                  <EnquiryForm variant="contact" />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
