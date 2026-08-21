import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Call, WhatsApp, email or message Corvella Education. Office hours, address and a contact form for university admissions enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const details = [
    { icon: Phone, label: "Phone", value: site.contact.phone, href: site.contact.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: site.contact.whatsapp, href: site.contact.whatsappHref },
    { icon: Mail, label: "Email", value: site.contact.email, href: site.contact.emailHref },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to someone who can answer properly"
        lede="Call, message or send the form. If you can only talk in the evening or at the weekend, say so and we will work around it."
      />

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="flex flex-col gap-4">
                {details.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    className="group flex items-start gap-4 rounded-2xl border border-mist bg-paper-2 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/35 hover:bg-white"
                  >
                    <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand transition-colors group-hover:bg-brand group-hover:text-paper">
                      <d.icon size={19} strokeWidth={1.9} />
                    </span>
                    <span>
                      <span className="label block text-quiet">{d.label}</span>
                      <span className="mt-1.5 block font-display text-[1.2rem] font-bold text-ink">
                        {d.value}
                      </span>
                    </span>
                  </a>
                ))}

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
                      WhatsApp messages outside these hours are answered the next working day.
                    </span>
                  </span>
                </div>


              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-mist bg-paper-2 p-6 sm:p-9">
                <h2 className="display-md text-ink">Send us a message</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-quiet">
                  Tell us what you need. We reply to everything, including the questions people think
                  are too basic to ask.
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
