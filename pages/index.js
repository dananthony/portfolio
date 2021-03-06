import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import content from '../content/projects.json'


const Project = ({ title, designer, tags, url }) => (
  <div className={styles.card}>
    <div>
      <h3 className={styles.title}>{title} {designer && (
        <>
          w/ {''}
          <a href={designer.url} target="_blank" rel="noopener noreferrer">{designer.name}</a>
        </>
      )}</h3>
      <p className={styles.meta}>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </p>
    </div>
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>&rarr;</a>
  </div>
)

export default function Home() {
  console.log(content);
  return (
    <div className={styles.container}>
      <Head>
        <title>Dan Anthony</title>
        <meta name="description" content="Web designer and front-end web developer" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Home"/>
        <meta property="og:description" content="Web designer and front-end web developer"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://dan-anthony.dev"/>
        <meta property="og:image" content="https://dan-anthony.dev/images/mondonero.jpeg"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dan Anthony
        </h1>

        <p className={styles.description}>
          <span>I&apos;m a Front-End developer and the Director/Founder at <a href="https://paperfox.com.au"
          target="_blank"
          rel="noopener noreferrer">Paperfox</a>.</span>
          <span>I design & build websites and web apps using HTML, CSS and JavaScript and I&apos;m currently focused on React.js, Gatsby and Next.js.</span>
        </p>

        <div className={styles.grid}>
          <h2 className={styles.title}>Selected Projects</h2>
          <hr />
          {content.map((project, index) => (
            <Project key={index} title={project.title} designer={project.designer} tags={project.tags} url={project.url}/>
          ))}
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
