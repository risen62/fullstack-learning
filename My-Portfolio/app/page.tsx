import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Icon, Spark } from "@/components/icons";

const problemSolving = { solved: 71, total: 75 };

const topics = [
  "Arrays & hashing",
  "Two pointers",
  "Sliding window",
  "Stacks",
  "Binary search",
  "Linked lists",
  "Trees",
  "Heaps",
  "Backtracking",
  "Graphs",
  "Tries",
  "Dynamic programming",
];
const toolkits = [
  {
    number: "01",
    icon: "code",
    title: "The languages",
    detail: "Turning ideas into working solutions.",
    skills: ["C / C++", "Python", "SQL"],
  },
  {
    number: "02",
    icon: "window",
    title: "The web",
    detail: "Bringing useful things to the browser.",
    skills: ["HTML", "CSS", "Bootstrap"],
    learning: "Now exploring React & Next.js",
  },
  {
    number: "03",
    icon: "layers",
    title: "The foundations",
    detail: "Thinking clearly before writing code.",
    skills: ["Data structures", "Algorithms", "OOP"],
  },
];

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation home />
      <main id="main">
        <section className="shell hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="short-line" /> HELLO, I’M SAMIULLAH KHAN
            </p>
            <h1 id="hero-heading">
              Thoughtful code.
              <br />
              Meaningful
              <br />
              <em>impact.</em>
              <Spark className="hero-spark" />
            </h1>
            <p className="hero-description">
              A Computer Science student with a curious mind.
              <br className="desktop-break" /> I turn complex problems into
              simple, useful software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#journey">
                Explore my journey{" "}
                <Icon name="northeast" width="18" height="18" />
              </a>
              <a
                className="text-link"
                href="https://github.com/risen62"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="github" width="19" height="19" /> My GitHub{" "}
                <Icon name="northeast" width="15" height="15" />
              </a>
            </div>
            <div className="hero-location">
              <Icon name="location" width="14" height="14" /> Based in Haripur,
              Pakistan <span>·</span> Always learning
            </div>
          </div>
          <div className="portrait-composition">
            <span className="portrait-side-note">
              A DEVELOPER IN THE MAKING
            </span>
            <div className="portrait-frame">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/samiullah.jpeg`}
                width={1536}
                height={2048}
                alt="Samiullah Khan outdoors with mountains in the background"
                className="portrait"
                priority
                sizes="(max-width: 640px) 85vw, (max-width: 1000px) 40vw, 390px"
              />
              <div className="portrait-caption">
                <span>Samiullah Khan</span>
                <span>Student. Builder. Problem solver.</span>
              </div>
            </div>
            <div className="portrait-note">
              <span className="note-icon">
                <Icon name="code" width="22" height="22" />
              </span>
              <div>
                Small steps.
                <br />
                <strong>Better every day.</strong>
              </div>
              <Spark />
            </div>
            <div className="orbit-stamp" aria-hidden="true">
              <svg viewBox="0 0 100 100">
                <defs>
                  <path
                    id="stamp-circle"
                    d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                  />
                </defs>
                <text>
                  <textPath href="#stamp-circle" textLength="224">
                    STAY CURIOUS · KEEP BUILDING ·{" "}
                  </textPath>
                </text>
              </svg>
              <Spark />
            </div>
          </div>
        </section>

        <div className="shell intro-strip">
          <span>
            DRIVEN BY CURIOSITY.
            <br />
            <strong>BUILT ON FUNDAMENTALS.</strong>
          </span>
          <div>
            C++
            <span className="strip-dot" />
            Python
            <span className="strip-dot" />
            Web development
            <span className="strip-dot" />
            Problem solving
          </div>
          <a href="#about" aria-label="Scroll to about me">
            <Icon name="down" />
          </a>
        </div>

        <section id="about" className="shell about-section section-space">
          <div className="section-label">
            <span className="section-number">01 /</span> A LITTLE ABOUT ME
          </div>
          <div className="about-grid">
            <h2>
              Curiosity is where
              <br />
              it starts.
              <br />
              <em>
                Building is how
                <br /> I learn.
              </em>
            </h2>
            <div className="about-copy">
              <p>
                I’m Samiullah, a Computer Science student at{" "}
                <strong>Pak-Austria Fachhochschule</strong>, working toward
                becoming a software engineer.
              </p>
              <p>
                I enjoy the moment a tricky problem finally clicks. From
                understanding data structures to building with C++ and Python,
                I’m learning to write software that’s clear, efficient, and
                useful.
              </p>
              <p>
                Right now, I’m strengthening my foundations, exploring web
                development, and putting what I learn into practice.
              </p>
              <div className="about-signoff">
                <span className="handwritten">Samiullah.</span>
                <span>ONE PROBLEM AT A TIME.</span>
              </div>
            </div>
          </div>
          <div className="stats-row">
            <div>
              <strong>
                {problemSolving.solved}
                <span>/{problemSolving.total}</span>
              </strong>
              <p>Blind 75 problems solved</p>
            </div>
            <div>
              <strong>
                2024<span>—</span>28
              </strong>
              <p>My Computer Science journey</p>
            </div>
            <div>
              <strong>
                Always<span> curious.</span>
              </strong>
              <p>The mindset behind everything</p>
            </div>
          </div>
        </section>

        <section id="journey" className="journey-section section-space">
          <div className="shell">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  <span className="section-number">02 /</span> THE JOURNEY SO
                  FAR
                </div>
                <h2>
                  Learning by <em>doing.</em>
                </h2>
              </div>
              <p>
                Every chapter adds something. <br />
                Here’s what’s shaped me so far.
              </p>
            </div>
            <div className="journey-list">
              <article className="journey-item">
                <div className="journey-date">
                  <span className="timeline-dot" />
                  <span>2024 — 2028</span>
                  <span className="small-tag">IN PROGRESS</span>
                </div>
                <div className="journey-content">
                  <span className="eyebrow">EDUCATION</span>
                  <h3>B.Sc. in Computer Sciences</h3>
                  <p className="institution">Pak-Austria Fachhochschule</p>
                  <p>
                    Institute of Applied Sciences and Technology, Pakistan.
                    Building a strong foundation in programming, data
                    structures, and software development.
                  </p>
                </div>
                <Icon
                  name="book"
                  className="journey-icon"
                  width="30"
                  height="30"
                />
              </article>
              <article className="journey-item">
                <div className="journey-date">
                  <span className="timeline-dot" />
                  <span>MAY — JUL 2025</span>
                  <span className="small-tag">INTERNSHIP</span>
                </div>
                <div className="journey-content">
                  <span className="eyebrow">EXPERIENCE</span>
                  <h3>Learning in the real world</h3>
                  <p className="institution">Prosensia · Internship</p>
                  <p>
                    Completed Python coursework through Scrimba, strengthening
                    scripting and automation fundamentals through hands-on
                    coding exercises.
                  </p>
                  <div className="inline-tags">
                    <span>Python</span>
                    <span>Scripting</span>
                    <span>Problem solving</span>
                  </div>
                </div>
                <Icon
                  name="code"
                  className="journey-icon"
                  width="30"
                  height="30"
                />
              </article>
            </div>
          </div>
        </section>

        <section id="practice" className="shell practice-section section-space">
          <div className="practice-panel">
            <div className="practice-copy">
              <div className="section-label">
                <span className="section-number">03 /</span> THE DAILY PRACTICE
              </div>
              <h2>
                Big problems.
                <br />
                <em>Small breakthroughs.</em>
              </h2>
              <p>
                One problem, one insight, one better solution. <br />
                Building confidence in data structures and algorithms through
                the NeetCode Blind 75.
              </p>
              <div className="practice-metric">
                <strong>
                  {problemSolving.solved}
                  <span>/{problemSolving.total}</span>
                </strong>
                <div>
                  PROBLEMS SOLVED
                  <br />
                  <span>And still going.</span>
                </div>
              </div>
              <a
                href="https://neetcode.io/practice"
                target="_blank"
                rel="noreferrer"
                className="practice-link"
              >
                Explore the Blind 75{" "}
                <Icon name="northeast" width="17" height="17" />
              </a>
            </div>
            <div className="practice-visual">
              <div className="grid-topline">
                <span>
                  <span className="status-dot" /> CONSISTENCY ADDS UP
                </span>
                <span>
                  {(
                    (problemSolving.solved / problemSolving.total) *
                    100
                  ).toFixed(1)}
                  %
                </span>
              </div>
              <div
                className="problem-grid"
                role="img"
                aria-label={`${problemSolving.solved} of ${problemSolving.total} Blind 75 problems completed`}
              >
                {Array.from({ length: problemSolving.total }, (_, i) => (
                  <span
                    key={i}
                    className={
                      i < problemSolving.solved
                        ? `problem-cell filled tone-${i % 5}`
                        : "problem-cell"
                    }
                  />
                ))}
              </div>
              <div className="grid-legend">
                <span>
                  <i /> Solved
                </span>
                <span>
                  <i /> Up next
                </span>
                <span>One square. One solution.</span>
              </div>
              <div className="topic-list">
                {topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="toolkit" className="shell toolkit-section section-space">
          <div className="section-heading">
            <div>
              <div className="section-label">
                <span className="section-number">04 /</span> WHAT I WORK WITH
              </div>
              <h2>
                A growing <em>toolkit.</em>
              </h2>
            </div>
            <p>
              Good tools help. <br />
              Strong fundamentals go further.
            </p>
          </div>
          <div className="toolkit-grid">
            {toolkits.map((toolkit) => (
              <article className="toolkit-card" key={toolkit.number}>
                <div className="toolkit-card-top">
                  <Icon name={toolkit.icon} width="29" height="29" />
                  <span>{toolkit.number}</span>
                </div>
                <h3>{toolkit.title}</h3>
                <p>{toolkit.detail}</p>
                <div className="toolkit-tags">
                  {toolkit.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
                {toolkit.learning && (
                  <p className="learning-note">
                    <span /> {toolkit.learning}
                  </p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="beyond" className="shell beyond-section">
          <div>
            <div className="section-label">
              <span className="section-number">05 /</span> BEYOND THE SCREEN
            </div>
            <h2>
              A little more <em>human.</em>
            </h2>
            <p>There’s more to life than a well-placed semicolon.</p>
          </div>
          <Link href="/hobbies/" className="hobby-link">
            <span className="hobby-icons">
              <span>
                <Icon name="ball" width="23" height="23" />
              </span>
              <span>
                <Icon name="game" width="23" height="23" />
              </span>
              <span>
                <Icon name="code" width="23" height="23" />
              </span>
            </span>
            <span>
              Football, gaming & side quests{" "}
              <Icon name="northeast" width="18" height="18" />
            </span>
          </Link>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
