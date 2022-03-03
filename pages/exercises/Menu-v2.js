import Link from "next/link";
import styles from "./Menu.module.css"
import Image from "next/image";



const Menu = () => {
    return(
        <>
        <h3 className={styles.title}>Fitly gives you access to over 1300 exercises with individual exercise and animation</h3>
    <div className={styles.menuGridv2}>
                    <Link className={styles.col} href="/exercises/bodyPart/back">
                        <a className={styles.btn}>
                            <Image src="/exercise-back-svgrepo-com .svg" width={65} height={55} alt="logo"/>
                            Back
                        </a>    
                    </Link>
                    <div>
                        <Link className={styles.col} href="/exercises/bodyPart/cardio">
                            <a className={styles.btn}>
                                <Image src="/running-stick-figure-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            Cardio
                            </a> 
                        </Link>
                    </div>
                    
                    <Link className={styles.col} href="/exercises/bodyPart/chest">
                        <a className={styles.btn}>
                            <Image src="/weightlifting-chest-exercise-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            Chest
                        </a>    
                    </Link>
                    <Link className={styles.col} href="/exercises/bodyPart/lowerarms">
                        <a className={styles.btn}>
                            <Image src="/man-lifting-weights-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            LowerArms
                        </a>    
                    </Link>
                    <Link className={styles.col} href="/exercises/bodyPart/lowerlegs">
                        <a className={styles.btn}>
                            <Image src="/hieroglyph-legs-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            lowerlegs
                        </a>    
                    </Link>
            
                    <Link className={styles.col} href="/exercises/bodyPart/neck">
                        <a className={styles.btn}>
                            <Image src="/head-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            Neck
                        </a>    
                    </Link>
                
                    <Link className={styles.col} href="/exercises/bodyPart/shoulders">
                        <a className={styles.btn}>
                            <Image src="/dumbbells-exercise-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            Shoulders
                        </a>    
                    </Link>

                    <Link className={styles.col} href="/exercises/bodyPart/upperarms">
                        <a className={styles.btn}>
                            <Image src="/exercise-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            UpperArms
                        </a>    
                    </Link>
            
                    <Link className={styles.col} href="/exercises/bodyPart/upperlegs">
                        <a className={styles.btn}>
                            <Image src="/man-exercising-his-legs-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                            UpperLegs
                        </a>    
                    </Link>
                
                    <Link  href="/exercises/bodyPart/waist">
                        <a className={styles.btn}>
                            <Image src="/waist-exercise-svgrepo-com.svg" width={65} height={55} alt="logo"/>
                                Waist
                        </a>    
                    </Link>
           
    </div>
        </>
       
        
        
    )
}
export default Menu