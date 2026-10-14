import Link from "next/link";
import { Icon, Spark } from "./icons";

export function Footer() {
  return (
    <footer className="shell site-footer">
      <div className="footer-main">
        <Link href="/" className="brand">
          <Spark />
          <span>samiullah.</span>
        </Link>
        <p>A curious mind. A work in progress.</p>
        <div className="social-links">
          <Link href="/contact/">
            Contact <Icon name="northeast" width="15" height="15" />
          </Link>
          <a href="https://github.com/risen62" target="_blank" rel="noreferrer">
            GitHub <Icon name="northeast" width="15" height="15" />
          </a>
          <a
            href="https://www.linkedin.com/in/samiullah-khan-993bb2366/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Icon name="northeast" width="15" height="15" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Samiullah Khan</span>
        <span>
          Made with care, in Pakistan <span className="tiny-star">✳</span>
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
