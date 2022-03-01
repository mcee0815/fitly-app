import Head from "next/head"
import styles from '../styles/About.module.css'

const About = () => {
    return(
      <>
          <Head>
            <title>ExerciseDB | About</title>
          </Head> 
          <div className={styles.container}>
            <h1 className={styles.title}>About ExerciseDb</h1>
            <p className={styles.text}>Leo vel fringilla est ullamcorper eget. Pellentesque id nibh tortor id aliquet lectus proin nibh.</p> 
          </div>
             
      </>
    )
}

export default About