"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon, Spark } from "./icons";

export function Navigation({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  const prefix = home ? "" : "/";
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    if (!home) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [home]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Samiullah Khan, home">
          <Spark />
          <span>
            samiullah<span className="brand-period">.</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "menu-lines is-open" : "menu-lines"} />
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {[
            ["about", "About"],
            ["journey", "Journey"],
            ["toolkit", "Toolkit"],
          ].map(([id, label]) => (
            <Link
              key={id}
              href={`${prefix}#${id}`}
              className={active === id ? "nav-link active" : "nav-link"}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href={`${prefix}#contact`}
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Let’s talk <Icon name="northeast" width="16" height="16" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
