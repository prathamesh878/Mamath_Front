import React from "react";

const Header1 = ()=> {

    return(
        <header>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" href="#home">Mamata Andh - Anath Kalyan Kendra</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#donation">Donate</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#mission-id">Activity's</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header1;