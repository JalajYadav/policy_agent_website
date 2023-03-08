import "./Card.css"

const Card = (props: { path: string, alt: string, text: string }) => {
    return (
        <div className="cardMainCont">
            <div>
                <img
                    src={props.path} alt={props.alt}
                    height="100px"
                    width="190px"
                ></img>
            </div>
            <div className="marginTop10">{props.text}</div>
        </div>
    )
}

export default Card