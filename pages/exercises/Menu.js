import Link from "next/link";
import styles from "./Menu.module.css"
import Image from "next/image";



const Menu = () => {
    return(
        <>
        
    <div className={styles.menuGrid}>
        <Link href="/exercises"><a className={styles.btn}>All</a></Link>
        
        
            <Link href="/exercises/bodyPart/back">
                <a className={styles.btn}>
                    <Image src="/upperarms.svg" width={65} height={55} alt="logo"/>
                    Back
                </a>    
            </Link>
        

        <Link href="/exercises/bodyPart/cardio"><a className={styles.btn}><Image src="/cardio.svg" width={65} height={55} alt="logo"/>Cardio</a>
        </Link>

        <Link href="/exercises/bodyPart/chest"><a className={styles.btn}><Image src="/cardio.svg" width={65} height={55} alt="logo"/>Chest</a></Link>
        <Link href="/exercises/bodyPart/lowerarms"><a className={styles.btn}><Image src="/cardio.svg" width={65} height={55} alt="logo"/>Lower Arms</a></Link>
        <Link href="/exercises/bodyPart/lowerlegs"><a className={styles.btn}><Image src="/cardio.svg" width={65} height={55} alt="logo"/>lowerlegs</a></Link>
        <Link href="/exercises/bodyPart/neck"><a className={styles.btn}>neck</a></Link>
        <Link href="/exercises/bodyPart/shoulder"><a className={styles.btn}><Image src="/shoulders.svg" width={65} height={55} alt="logo"/>shoulder</a></Link>
        <Link href="/exercises/bodyPart/upperarms"><a className={styles.btn}><Image src="/upperarms.svg" width={65} height={55} alt="logo"/>UpperArms</a></Link>
        <Link href="/exercises/bodyPart/upperlegs"><a className={styles.btn}><Image src="/upperarms.svg" width={65} height={55} alt="logo"/>UpperLegs</a></Link>
        <Link href="/exercises/bodyPart/waist"><a className={styles.btn}><Image src="/upperarms.svg" width={65} height={55} alt="logo"/> Waist</a></Link>
    </div>
        </>
       
        
        
    )
}
export default Menu