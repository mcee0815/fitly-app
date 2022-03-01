import Image from "next/image";
import Link from "next/link";
import Styles from "./Details.module.css"

export const getStaticPaths = async() => {
    const res = await fetch('https://exercisedb.p.rapidapi.com/exercises',{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "53fb5c832cmsh77e423d816d5cf5p1e69ecjsnf5d8ca3e82a3"
        }
    })
    const data = await res.json();
    
    const paths = data.map(exercise => {
        return {
            params:{ id:exercise.id.toString()}
        }
    })

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) =>
{
    const id  = context.params.id
    const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "53fb5c832cmsh77e423d816d5cf5p1e69ecjsnf5d8ca3e82a3"
        }
    })
    const data = await res.json()
    return {
        props:{ exercise:data }
    }
}

const Details = ({exercise}) => {
    return(
        <>
        <div className={Styles.flexContainer}>
            <div className={Styles.card}>
                <Image src={exercise.gifUrl} width={500} height={400} className={Styles.image}/>
                <h2 className={Styles.title}>{exercise.name}</h2>
                <div className={Styles.badges}>
                    <span className={Styles.badge}>{exercise.bodyPart} </span>
                    <span className={Styles.badge}>{exercise.target}</span>
                </div>
                <Link href="/exercises">
                    <a className={Styles.btn}>Go Back</a>
                </Link>
            </div>
        </div>
        
        </>
    )
}

export default Details