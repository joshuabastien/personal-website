import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Bastien</title>
        <link rel="icon" href="/picture3.jpeg" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello, I'm <span style={{ color: '#0070f3' }}>Joshua Bastien</span>
        </h1>

        <img src="/picture1.jpeg" alt="Your Picture" style={{ borderRadius: '50%', width: '400px', margin: '20px 0' }} />

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
          Todo here is a description about me. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
