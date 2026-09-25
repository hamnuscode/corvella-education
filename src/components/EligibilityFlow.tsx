"use client";

import * as React from "react";
import { EligibilityCheck } from "@/components/EligibilityCheck";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Modal } from "@/components/ui/Modal";
import { ArchPanel } from "@/components/ui/ArchPanel";

/**
 * The four question check, with "Get started" opening the enquiry form in a
 * popup rather than sending the visitor to another page. Whatever they answered
 * is carried into the form so the adviser sees it with their details.
 */
export function EligibilityFlow({
  label = "Free eligibility check",
  halo = true,
  idPrefix = "flow",
}: {
  label?: string;
  halo?: boolean;
  idPrefix?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [answers, setAnswers] = React.useState<Record<string, string>>({});

  return (
    <>
      <ArchPanel label={label} halo={halo} idPrefix={idPrefix}>
        <EligibilityCheck
          onGetStarted={(a) => {
            setAnswers(a);
            setOpen(true);
          }}
        />
      </ArchPanel>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Get started"
        description="Fill this in and we will open WhatsApp with your details ready to send. An adviser will take it from there."
      >
        <EnquiryForm variant="apply" context={answers} />
      </Modal>
    </>
  );
}
