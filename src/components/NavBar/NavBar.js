import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Lunas de Valencia</h3>
            <div>
                <button>Macetas</button>
                <button>Platos</button>
                <button>Velas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar