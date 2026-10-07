"use client";

import { useState } from "react";
import { RequestModal } from "./RequestModal";

export function RequestButton({
  formId,
  product,
  children,
  outline,
  light,
}: {
  formId: string;
  product?: string;
  children: string;
  outline?: boolean;
  light?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const cls = light ? "btn btn-light" : outline ? "btn btn-outline" : "btn btn-accent";
  return (
    <>
      <button type="button" className={cls} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && <RequestModal formId={formId} product={product} onClose={() => setOpen(false)} />}
    </>
  );
}
