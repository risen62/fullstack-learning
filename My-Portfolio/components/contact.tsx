"use client";

import { useState } from "react";
import { Icon, Spark } from "./icons";

export const email = "samiullahpann@gmail.com";

export function Contact({ standalone = false }: { standalone?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setFailed(false);
      window.setTimeout(() => setCopied(false), 3000);
    } catch {
      setFailed(true);
    }
  }
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="contact" className="contact-section shell">
      <div className="contact-panel">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="status-dot" /> A CONVERSATION CAN START SOMETHING
            GOOD
          </p>
          <Spark className="contact-spark" />
        </div>
        <Heading>
          Have something
          <br />
          in mind? <em>Let’s talk.</em>
        </Heading>
        <div className="contact-bottom">
          <div>
            <p className="contact-description">
              An idea, an opportunity, or just a hello.
              <br />
              I’d love to hear from you.
            </p>
            <div className="email-row">
              <a className="email-link" href={`mailto:${email}`}>
                {email}
                <Icon name="northeast" />
              </a>
              <button
                className="copy-button"
                aria-label={copied ? "Email copied" : "Copy email address"}
                onClick={copyEmail}
              >
                <Icon name={copied ? "check" : "copy"} width="17" height="17" />
              </button>
            </div>
            <span className="copy-status" role="status">
              {copied
                ? "Email copied to clipboard."
                : failed
                  ? "Please select the email address to copy it."
                  : ""}
            </span>
          </div>
          <a
            href={`mailto:${email}`}
            className="contact-round"
            aria-label="Send Samiullah an email"
          >
            <Icon name="northeast" width="36" height="36" />
          </a>
        </div>
      </div>
    </section>
  );
}
