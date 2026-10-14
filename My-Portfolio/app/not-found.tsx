import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell not-found">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>
        This page took
        <br />
        <em>a different path.</em>
      </h1>
      <p>Let’s get you back to familiar ground.</p>
      <Link href="/" className="button button-primary">
        Back to the portfolio →
      </Link>
    </main>
  );
}
