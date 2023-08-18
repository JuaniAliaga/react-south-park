import Card from "./Card"

const CharacterList = ({character, handlePrev, handleNext}) => {
    return(
        <div className="container">
            <div className="d-flex justify-content-between ms-4 me-4 mb-2">
                <button onClick={handlePrev} className="btn btn-primary">Prev</button>

                <button onClick={handleNext} className="btn btn-primary">Next</button>
            </div>
            <div className="row">
                {character.map((char) => (
                    <Card character={char} key={char.id} />
                ))}
            </div>
        </div>
    )
}

export default CharacterList;