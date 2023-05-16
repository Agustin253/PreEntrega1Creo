import { Link } from "react-router-dom";
import { memo } from "react";

export const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className='btn btn-secondary'>
                        <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/lunas-de-valencia.appspot.com/o/logolunas.png?alt=media&token=de83577d-3071-437c-8953-f2261c7f9bf2" width={60}></img>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-secondary'>Macetas</button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-secondary'>Animalitos</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-secondary'>Tazas</button>
                </Link>
            </li>

           

        </ul>
    );
}