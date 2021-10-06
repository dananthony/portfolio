import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


const Project = ({ title, designer }) => (
  <div className={styles.card}>
    <Image
      src="/images/mondonero.jpeg"
      height={188}
      width={335}
      alt="Mondonero"
    />
    <h3 className={styles.title}>{title} w/ <a href="https:google.com" target="_blank" rel="noopener noreferrer">{designer}</a></h3>
    <p className={styles.meta}><span>React</span><span>Gatsby</span><span>Sanity</span></p>
  </div>
)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dan Anthony</title>
        <meta name="description" content="Web designer and front-end web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dan Anthony
        </h1>

        <p className={styles.description}>
          <span>I&apos;m a Front-End developer and the Director/Founder of <a href="https://paperfox.com.au"
          target="_blank"
          rel="noopener noreferrer">Paperfox</a>.</span>
          <span>I design & build websites and web apps using HTML, CSS and JavaScript and I&apos;m currently focused on React.js, Gatsby and Next.js.</span>
        </p>

        <div className={styles.grid}>
          <h2 className={styles.title}>Selected Projects</h2>
          <hr />
          <Project title="Mondonero" designer="Claudia Pastori" />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="mailto:dan@paperfox.com.au"
        >
         Contact 
        </a>
        <a
          href="https://github.com/dananthony"
          target="_blank"
          rel="noopener noreferrer"
        >
         Github 
        </a>
        <a
          href="https://www.linkedin.com/in/dan-anthony-35baa484/"
          target="_blank"
          rel="noopener noreferrer"
        >
         LinkedIn 
        </a>
      </footer>
    </div>
  )
}
