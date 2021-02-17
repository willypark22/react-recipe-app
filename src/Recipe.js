import React, { useState } from 'react';
import style from './recipe.module.css';
import VerticallyCenteredModal from './components/VerticallyCenteredModal';

const Recipe = ({ title, calories, image, ingredients }) => {
    const [modalShow, setModalShow] = useState(false);

    const handleClose = (e) =>  {
        setModalShow(false);
    }
    
    const handleOpen = (e) => {
        setModalShow(true);
    }

    return (
        <div 
            className={style.recipe} 
            style={{ backgroundImage: `url(${image})`, margin: "20px" }}
            onClick={handleOpen}
        >
            <h1>{title}</h1>
            <VerticallyCenteredModal
                title={title}
                calories={calories}
                image={image}
                ingredients={ingredients}
                show={modalShow}
                onHide={handleClose}
            />
        </div>
        // <Popup 
        //     trigger={
        //         <div className={style.recipe} style={{backgroundImage: `url(${image})`, margin: "20px"}}>
        //             <h1>{title}</h1>
        //         </div>
        //     }
        //     modal
        // >
        //     {close => (
        //         <div className="banner">
        //             <div className="modal">
        //                 <button className="close" onClick={close}>
        //                     &times;
        //                 </button>
        //                 <div className="content">
        //                     <div className="content-row">
        //                         <div className="content-column-40">
        //                             <img src={image} alt={title} width="100%"/>
        //                         </div>
        //                         <div className="content-column-60">
        //                             <h2>{title}</h2>
        //                             <p>Calories: {Math.round(calories)}</p>
        //                             <ul>
        //                                 {ingredients.map(ingredient => (
        //                                     <li key={uuid()}>{ingredient.text}</li>
        //                                 ))}
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     )}
        // </Popup>
    );
}

export default Recipe;