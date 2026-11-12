import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { seo } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Send a message to Qinghe Atelier using the contact form.", "/contact"),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Please enter a message").max(1000),
});

const field = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const r = schema.safeParse(Object.fromEntries(new FormData(form)));
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    // Demo only: nothing is sent or stored.
    setErrors({});
    form.reset();
    setSent(true);
  }

  return (
    <Layout>
      <h1 className="font-display text-4xl">Contact</h1>
      <p className="mt-3 text-muted-foreground">This is a demo form — messages are not sent or saved anywhere.</p>
      {sent ? (
        <div role="status" className="mt-10 max-w-lg rounded-lg border border-primary/40 bg-secondary p-6">
          <h2 className="font-display text-2xl">Thank you!</h2>
          <p className="mt-2 text-sm text-muted-foreground">Your message was received (demo only).</p>
          <button onClick={() => setSent(false)} className="mt-4 text-sm text-primary underline">Send another</button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-10 max-w-lg space-y-5">
          {(["name", "email"] as const).map((f) => (
            <label key={f} className="block text-sm capitalize">{f}
              <input name={f} type={f === "email" ? "email" : "text"} className={field} />
              {errors[f] && <span className="text-xs text-destructive">{errors[f]}</span>}
            </label>
          ))}
          <label className="block text-sm">Message
            <textarea name="message" rows={5} className={field} />
            {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
          </label>
          <button type="submit" className="rounded-md bg-primary px-5 py-2.5 text-sm text-primary-foreground hover:bg-primary/90">Send message</button>
        </form>
      )}
    </Layout>
  );
}
