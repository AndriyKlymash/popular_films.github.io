import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import './Header.css'
import AllFilms from "../AllFilms/AllFilms";
import {useEffect, useState} from "react";
import {getBySearch} from "../../services/api";

export default function Header() {
    let [searchFilm, setSearchFilm] = useState();
    useEffect(() => {
        getBySearch().then(value => setSearchFilm(value.data))
    }, [])

    function search() {

    }

    return (
        <Router>
            <div>
                {
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <Link to={'/'} className="navbar-brand" href="#"
                                  render={() => <AllFilms/>}>SweetMovie</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to={'popularFilms'} className="nav-link active" aria-current="page"
                                              href="#">PopularFilms</Link>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button onClick={search()} className="btn btn-outline-success"
                                            type="submit">Search
                                    </button>
                                </form>
                            </div>
                        </div>
                    </nav>
                }
            </div>
        </Router>
    );
}