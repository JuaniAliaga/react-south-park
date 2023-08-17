

const Card = (character) => {
    return(
        <div className="col-6 col-md-4 col-lg-3">
            <div className="card box-shadow rounded mb-4">
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <h4>{character.sex}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card