import from "./headerStyle.css"
import logo from "./headerImage/Group 4.png"


export default function Header() {

    return (
        <header>
            <img src={logo} alt="logo" />
            <div className="a-container">
                <a>Інтерактив</a>
                <a>Наша команда</a>
                <a>Контакти</a>
            </div>

            <h3 className="presentTitle">Вітаємо, User!</h3>
        </header>
    )
}