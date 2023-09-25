import Head from 'next/head';
import homeStyles from '../styles/Home.module.css';
import buttonStyles from '../styles/Button.module.css'
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={homeStyles.container} style={darkMode ? { backgroundColor: '#121212', color: '#ffffff' } : {}}>
      <Head>
        <title>Joshua Bastien</title>
        <link rel="icon" href="/picture3.jpeg" />
      </Head>

      <main>
        <h1 className={homeStyles.title}>
          Hello, I'm 
          <button data-text="Joshua Bastien" className={buttonStyles.button}>
          <span className={buttonStyles.actualText}>Joshua Bastien</span>
          <span className={buttonStyles.hoverText} aria-hidden="true">Joshua Bastien</span>
          </button>
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

        <p className={homeStyles.description}>
        Proficient computer science student, excels in his role as a Junior Developer at Voltaric Inc., using his expertise in C# (.NET, XAML) and JavaScript (React.js, Node.js, Express.js) to create innovative solutions. His work is underpinned by a strong understanding of object-oriented programming, enabling the development of efficient, reusable, and maintainable code. Outside of professional endeavors, Joshua actively participates in hackathons, further honing his problem-solving skills and competitive edge. This blend of technical proficiency, keen understanding of OOP, and hands-on work and hackathon experience positions him well for impactful contributions in software development.
        </p>

        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>


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
            ${darkMode ? `
            main {
              background-color: #121212;
              color: #ffffff;
            }
            footer {
              background-color: #1f1f1f;
              border-top: 1px solid #ffffff;
            }
          ` : ''}
        `}</style>
      </div>
  );
}
