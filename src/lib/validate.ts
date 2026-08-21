export type Rule = "required" | "email" | "phone";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[\d\s()+.-]{7,}$/;

export function validate(
  values: Record<string, string>,
  rules: Record<string, Rule[]>,
  labels: Record<string, string>,
): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = (values[field] ?? "").trim();
    const label = labels[field] ?? field;

    for (const rule of fieldRules) {
      if (errors[field]) break;
      if (rule === "required" && !value) errors[field] = `${label} is needed.`;
      if (rule === "email" && value && !emailRe.test(value)) {
        errors[field] = "That email address does not look right.";
      }
      if (rule === "phone" && value && !phoneRe.test(value)) {
        errors[field] = "Use digits, spaces and the + sign only.";
      }
    }
  }

  return errors;
}
