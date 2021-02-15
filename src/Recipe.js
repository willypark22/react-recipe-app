import React from 'react';
import uuid from 'react-uuid';
import style from './recipe.module.css';
import Popup from 'reactjs-popup';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <Popup 
            trigger={
                <div className={style.recipe} style={{backgroundImage: `url(${image})`, margin: "20px"}}>
                    {/* <ol>
                        {ingredients.map(ingredient => (
                            <li key={uuid()}>{ingredient.text}</li>
                        ))}
                    </ol> */}
                    {/* <p>{calories}</p> */}
                    <h1>{title}</h1>
                </div>
            }
            modal
        >
            {close => (
                <div className="modal">
                    <div className="content">
                        <div className="content-header">
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </div>
                        <div className="content-body">
                            <div className="content-row">
                                <div className="content-column-40">
                                    <img src={image} alt={title} width="100%"/>
                                </div>
                                <div className="content-column-60">
                                    <h2>{title}</h2>
                                    <p>Calories: {Math.round(calories)}</p>
                                    <ul>
                                        {ingredients.map(ingredient => (
                                            <li key={uuid()}>{ingredient.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Recipe;