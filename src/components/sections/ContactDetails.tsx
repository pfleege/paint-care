// src/components/sections/ContactDetails.tsx

import { site } from "@/data/site";

export default function ContactDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-medium">Visit us</h2>
        <address className="mt-2 not-italic text-ink/85">
          {site.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>
      <div>
        <h2 className="text-2xl font-medium">Opening hours</h2>
        <p className="mt-2 text-ink/85">{site.hours}</p>
      </div>
      <div>
        <h2 className="text-2xl font-medium">Talk to us</h2>
        <p className="mt-2 text-ink/85">
          <a
            className="underline decoration-sun decoration-4 underline-offset-4"
            href={`tel:${site.phone.replace(/\s/g, "")}`}
          >
            {site.phone}
          </a>
          <br />
          <a
            className="break-all underline decoration-sun decoration-4 underline-offset-4"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </p>
      </div>
    </div>
  );
}
