import { useState,useEffect } from "react";
import CharacterList from "./CharacterList"

const CharacterListContainer = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    
    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        setPage(page + 1)
    }

    useEffect(() => {
        fetch(`https://spapi.dev/api/characters/?page=${page}`)
        .then((response) => response.json())
        .then(data => setCharacters(data.data))
        .catch(error => console.log(error + "ERROR"))
    },[page])

    return(
        <CharacterList character={characters} handlePrev={handlePrev} handleNext={handleNext}/>
    )
}

export default CharacterListContainer;