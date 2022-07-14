import logo from "../assets/images/katie-zaferes.png"
import logo_star from "../assets/images/star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={logo} className="card--image" alt="Katie Zaferes" />
            <div className="card--stats">
                <img src={logo_star} className="card--star" alt="Star logo" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}