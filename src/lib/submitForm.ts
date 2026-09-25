import { site, whatsappLink } from "@/lib/site";

/**
 * Forms hand off to WhatsApp.
 *
 * Nothing is posted to a server: the details the visitor typed are composed
 * into a message and WhatsApp opens with it ready to send, addressed to the
 * agency number. That keeps every enquiry in one inbox the team already reads,
 * and means there is no endpoint to maintain or data stored on the site.
 */

export type FormKind = "application-enquiry" | "general-contact" | "consultant-referral";

const HEADINGS: Record<FormKind, string> = {
  "application-enquiry": "New enquiry from the website",
  "general-contact": "New message from the website",
  "consultant-referral": "New referral enquiry from the website",
};

const LABELS: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  message: "Message",
  heard: "Heard about us",
  level: "Highest qualification",
  where: "Applying from",
  mode: "Study preference",
  when: "Preferred start",
};

export function buildMessage(kind: FormKind, data: Record<string, string>) {
  const lines = [`${HEADINGS[kind]}`, ""];
  for (const [key, value] of Object.entries(data)) {
    if (!value) continue;
    lines.push(`${LABELS[key] ?? key}: ${value}`);
  }
  lines.push("", `Sent from ${site.url}`);
  return lines.join("\n");
}

export function openWhatsApp(kind: FormKind, data: Record<string, string>) {
  const url = whatsappLink(buildMessage(kind, data));
  window.open(url, "_blank", "noopener,noreferrer");
}
