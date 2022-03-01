import Link from "next/link";
import styles from "./Menu.module.css"



const Menu = () => {
    return(
       
        <div className={styles.menuGrid}>
            <Link href="/exercises"><a className={styles.btn}>All</a></Link>
            <Link href="/exercises/bodyPart/back"><a className={styles.btn}>Back</a></Link>
            <Link href="/exercises/bodyPart/cardio"><a className={styles.btn}>Cardio</a></Link>
            <Link href="/exercises/bodyPart/chest"><a className={styles.btn}>Chest</a></Link>
            <Link href="/exercises/bodyPart/lowerarms"><a className={styles.btn}>Lower Arms</a></Link>
            <Link href="/exercises/bodyPart/lowerlegs"><a className={styles.btn}>lowerlegs</a></Link>
            <Link href="/exercises/bodyPart/neck"><a className={styles.btn}>neck</a></Link>
            <Link href="/exercises/bodyPart/shoulder"><a className={styles.btn}>shoulder</a></Link>
            <Link href="/exercises/bodyPart/upperarms"><a className={styles.btn}>UpperArms</a></Link>
            <Link href="/exercises/bodyPart/upperlegs"><a className={styles.btn}>UpperLegs</a></Link>
            <Link href="/exercises/bodyPart/waist"><a className={styles.btn}>Waist</a></Link>
        </div>
        
    )
}
export default Menu