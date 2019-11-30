import React from 'react';

class Header extends React.Component{
    render(){ 
        return (
        <header class="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand c-darkblue" href="#">Logo<a class="c-blue">Box</a></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <ul className="navbar-nav ml-auto f-poppins">
                        <li className="nav-item">
                            <a className="nav-link">About us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> GBP</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action with a lot of text inside of an
                                    item</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> English</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action with a lot of text inside of an
                                    item</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span className="lnr lnr-phone-handset"></span>
                        </li>
                        <li className="nav-item">
                            <a class="Do-you-here-any-ques ">Do you here any questions?</a>
                            <p class="f-Montserrat contact-us mt-2">Contact us: +44 444 44 44</p>
                        </li>
                        <li className="nav-item">
                            <button className="btn bg-purple f-Montserrat">Purple Button</button>
                        </li>
                    </ul>
            </nav>
        </header>
    )}
}

export default Header;