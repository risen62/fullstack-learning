import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icons";

export const metadata: Metadata = { title: "Get in touch — Samiullah Khan" };

export default function ContactPage() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="inner-page">
        <div className="shell">
          <Link className="back-link" href="/">
            ← Back to the portfolio
          </Link>
        </div>
        <Contact standalone />
        <div className="shell contact-details">
          <span>
            <Icon name="location" /> Haripur, Panian, Pakistan
          </span>
          <a href="tel:+923172776086">
            +92 317 2776086 <Icon name="northeast" width="16" height="16" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
