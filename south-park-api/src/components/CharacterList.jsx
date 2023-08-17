import Card from "./Card"

const CharacterList = ({character}) => {
    return(
        <div>
            <div className="row">
                <button className="btn btn-primary">Prev</button>

                <button className="btn btn-primary">Next</button>
            </div>
            <div className="row">
                {character.map((character) => (
                    <Card character={character} key={character.id} />
                ))}
            </div>
        </div>
    )
}

export default CharacterList;