import React, { useState } from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, nutrition, servings }) => {

    return (
        <div 
            className={style.recipe} 
            style={{ backgroundImage: `url(${image})`, margin: "20px" }}
        >
            <h1>{title}</h1>
        </div>
    );
}

export default Recipe;