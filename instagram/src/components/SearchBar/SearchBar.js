import React from 'react';
import './SearchBar.css';
import { Header } from '../Styling.js';

const SearchBar = props => {
    return (
        <Header >
            <span className="search-bar-left" >
                <i className="fab fa-instagram fa-2x "></i>
            </span>
            <img src="https://raw.githubusercontent.com/LambdaSchool/React-Insta-Clone/4079cf6fb6d11bd3ad7a422cdec35e0aab4e2bfe/instagram/src/assets/iglogo.png" alt="" className="iglogo" />
            <input type="text" className="search-input" placeholder="&#8981; Search" onKeyDown={props.filterPostsHandler} />
            <span className="search-icons" onClick={props.logoutHandler} >
                <i class="fas fa-door-closed fa-lg"></i>
            </span>
            <span className="search-icons" >
                <i className="far fa-compass fa-lg" />
            </span>
            <span className="search-icons">
                <i className="far fa-heart fa-lg" />
            </span>
            <span className="search-icons">
                <i className="far fa-user-circle fa-lg" />
            </span>
        </Header>

    );
};

export default SearchBar;