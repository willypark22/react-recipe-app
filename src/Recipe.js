import React, { useState } from 'react';
import style from './recipe.module.css';
import VerticallyCenteredModal from './components/VerticallyCenteredModal';

const Recipe = ({ title, calories, image, ingredients, nutrition, servings }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div 
            className={style.recipe} 
            style={{ backgroundImage: `url(${image})`, margin: "20px" }}
            onClick={() => setModalShow(true)}
        >
            <h1>{title}</h1>
            <VerticallyCenteredModal
                title={title}
                calories={calories}
                image={image}
                ingredients={ingredients}
                show={modalShow}
                nutrition={nutrition}
                servings={servings}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
}

export default Recipe;