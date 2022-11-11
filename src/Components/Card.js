import Star from "../images/star.png"

const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src={require(`../images/${props.img}`)} className="card--image" alt=""/>
            <div className="card--stats">
                <img src={Star} className="card--star" alt=""/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;