import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Icon, Spark } from "@/components/icons";

export const metadata: Metadata = {
  title: "Beyond the screen — Samiullah Khan",
};

export default function HobbiesPage() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="shell hobbies-page">
        <Link className="back-link" href="/">
          ← Back to the portfolio
        </Link>
        <div className="hobbies-title">
          <div className="section-label">BEYOND THE SCREEN</div>
          <h1>
            Not always
            <br />
            <em>at the keyboard.</em>
          </h1>
          <p>A few things that make me, me.</p>
          <Spark />
        </div>
        <div className="hobbies-grid">
          {[
            {
              name: "Football",
              icon: "ball",
              number: "01",
              text: "Away from the desk, onto the pitch. A different kind of teamwork and a good reason to get outside.",
            },
            {
              name: "Gaming",
              icon: "game",
              number: "02",
              text: "New worlds, a little competition, and the satisfaction of figuring out the next move.",
            },
            {
              name: "Coding",
              icon: "code",
              number: "03",
              text: "Sometimes the side quest is another idea to build. Curiosity doesn’t really clock out.",
            },
          ].map((hobby) => (
            <article className="hobby-card" key={hobby.name}>
              <div>
                <Icon name={hobby.icon} width="44" height="44" />
                <span>{hobby.number}</span>
              </div>
              <h2>{hobby.name}</h2>
              <p>{hobby.text}</p>
            </article>
          ))}
        </div>
        <div className="hobbies-cta">
          <span>Have a shared interest? Say hello.</span>
          <Link href="/contact/" className="button button-primary">
            Let’s connect <Icon name="northeast" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
