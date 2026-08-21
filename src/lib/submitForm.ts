/**
 * PLACEHOLDER SUBMIT HANDLER.
 *
 * Nothing here leaves the browser. Point FORM_ENDPOINT at a real endpoint
 * (a Next route handler, Formspree, Resend, HubSpot, your CRM) and the rest of
 * the form code will work unchanged.
 */
export const FORM_ENDPOINT = ""; // e.g. "/api/enquiry"

export type SubmitResult = { ok: true } | { ok: false; message: string };

export async function submitForm(
  formName: string,
  data: Record<string, string>,
): Promise<SubmitResult> {
  if (!FORM_ENDPOINT) {
    // Demo mode: log the payload and pretend the network took a moment.
    await new Promise((r) => setTimeout(r, 700));
    if (process.env.NODE_ENV !== "production") {
      console.info(`[corvella] demo submit "${formName}"`, data);
    }
    return { ok: true };
  }

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form: formName, ...data }),
    });
    if (!res.ok) return { ok: false, message: "That did not send. Please try again, or email us." };
    return { ok: true };
  } catch {
    return { ok: false, message: "That did not send. Check your connection and try again." };
  }
}
