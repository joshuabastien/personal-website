import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const updateBackground = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', updateBackground);

    return () => {
      window.removeEventListener('mousemove', updateBackground);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Bastien</title>
        <link rel="icon" href="/picture3.jpeg" />
      </Head>

      <main>
      <h1 className={styles.title}>
        Hello, I'm <a>Joshua Bastien</a>
      </h1>

        <img className={styles.card} src="/picture1.jpeg" alt="Your Picture" style={{ borderRadius: '50%', width: '400px', margin: '20px 0' }} />

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <a
            href="https://linkedin.com/in/joshuabastien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedinicon.svg" alt="LinkedIn" width="100" height="100" />
          </a>
          <a
            href="https://github.com/joshuabastien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/githubicon.svg" alt="GitHub" width="100" height="100" />
          </a>
        </div>

        <p className={styles.description}>
        Proficient computer science student, excels in his role as a Junior Developer at Voltaric Inc., using his expertise in C# (.NET, XAML) and JavaScript (React.js, Node.js, Express.js) to create innovative solutions. His work is underpinned by a strong understanding of object-oriented programming, enabling the development of efficient, reusable, and maintainable code. Outside of professional endeavors, Joshua actively participates in hackathons, further honing his problem-solving skills and competitive edge. This blend of technical proficiency, keen understanding of OOP, and hands-on work and hackathon experience positions him well for impactful contributions in software development.
        </p>

      </main>

      <footer>
        &copy; 2023 All rights reserved. Designed and developed using Next.js by Joshua Bastien.
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

    </div>
  );
}
