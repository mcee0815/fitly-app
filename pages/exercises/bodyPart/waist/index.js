
import Link from "next/link";
import Styles from "../bodyPart.module.css";


export const getStaticProps = async () =>
{
    const res = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist`,{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "53fb5c832cmsh77e423d816d5cf5p1e69ecjsnf5d8ca3e82a3"
        }
    })
    const data = await res.json()
    return {
        props:{ backs:data }
    }
}

const Details = ({backs}) => {
    return(
        <>
        <div className={Styles.container}>
            <h1>Waist Exercises</h1>
        { 
            backs.map(exercise => (
                <div key={exercise.id}>
                    <Link href={`/exercises/${exercise.id}`}>
                        <a><h3>{exercise.name}</h3></a>
                    </Link>
                </div>
            ))
        }
        </div>
      
        
        </>
    )
}

export default Details