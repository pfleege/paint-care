// src/components/sections/ContactForm.tsx

"use client";

import Button from "@/components/ui/Button";
import { useState, type SubmitEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

type Status = "idle" | "sending" | "sent" | "error";
const field =
  "mt-1.5 w-full rounded-2xl border-2 border-ink/15 bg-white px-4 py-3 transition-colors focus:border-grape focus:outline-none";

export default function ContactForm({ ageGroups }: { ageGroups: string[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");

    try {
      // Static site: there is no server to save the form. If NEXT_PUBLIC_INQUIRY_URL
      // is set (e.g. a Formspree URL) the form is posted there; otherwise it is a demo
      // and just pretends to send.
      const url = process.env.NEXT_PUBLIC_INQUIRY_URL;
      if (!url) {
        await new Promise((r) => setTimeout(r, 600));
        form.reset();
        setStatus("sent");
        return;
      }
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError((err as Error).message);
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="thanks"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2.5rem] bg-mint/40 p-10"
          role="status"
        >
          <h2 className="text-4xl font-medium">Thank you!</h2>
          <p className="mt-3 text-lg">
            We have your message and will reply within two working days.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          exit={{ opacity: 0 }}
          className="space-y-5 rounded-[2.5rem] bg-white p-8 shadow-[0_30px_60px_-35px_rgba(42,33,80,0.5)] md:p-10"
        >
          <label className="block font-display text-lg">
            Your name
            <input name="name" required autoComplete="name" className={field} />
          </label>
          <label className="block font-display text-lg">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className={field}
            />
          </label>
          <label className="block font-display text-lg">
            Your child&apos;s age group
            <select name="ageGroup" className={field} defaultValue="">
              <option value="">Not sure yet</option>
              {ageGroups.map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </label>
          <label className="block font-display text-lg">
            Message
            <textarea name="message" rows={4} className={field} />
          </label>
          {status === "error" && (
            <p role="alert" className="text-tomato">
              {error}
            </p>
          )}
          <Button size="sm" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
