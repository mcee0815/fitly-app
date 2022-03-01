import Link from "next/link"
export const getStaticProps = async () =>
{
    const res = await fetch('https://exercisedb.p.rapidapi.com/exercises',{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "53fb5c832cmsh77e423d816d5cf5p1e69ecjsnf5d8ca3e82a3"
        }
    })
    const data = await res.json()
    console.log(data)
    return {
        props:{ exercises:data }
    }
}

const Ninjas = ({exercises}) => {
    console.log(exercises)
    return(
        <>
        <h1>Exercise List</h1>
        {
            
            exercises.map(exercise => (
                <div key={exercise.id}>
                    <Link href={`/exercises/${exercise.id}`} key={exercise.id}>
                        <a><h3>{exercise.name}</h3></a>
                    </Link>
                </div>
            ))
        }
        
        </>
    )
}

export default Ninjas