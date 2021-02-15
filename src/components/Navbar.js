import React from 'react';

const Navbar = ({ getSearch, search, updateSearch }) => {
    
    return (
        <div className="recipe-navbar sticky">
            <p>
                RECIPE-APP
            </p>
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" placeholder="Search a recipe..." type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
}

export default Navbar;