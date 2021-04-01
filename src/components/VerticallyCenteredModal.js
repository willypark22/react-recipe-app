import React from 'react';
import Modal from 'react-bootstrap/Modal';
import uuid from 'react-uuid';
import Button from 'react-bootstrap/Button';

const VerticallyCenteredModal = ({ title, calories, image, ingredients, nutrition, show, servings, onHide}) => {
    const filteredNutrition = [ 'Fat', 'Carbs', 'Protein', 'Cholesterol', 'Sodium', 'Calcium' ]
    return(
        <div onClick={e => e.stopPropagation()}>
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                arealabelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2>{title}</h2>
                    </Modal.Title>
                    <a className="modal-close-button" onClick={onHide}>&times;</a>
                </Modal.Header>
                <Modal.Body>
                    <div className="content-row">
                        <div className="content-column-50">
                            <img src={image} width="100%" alt={title}></img>
                        </div>
                        <div className="content-column-50">
                            <div className="column-border">
                                <p>Servings: {servings}</p>
                                <p>Calories: {Math.round(calories)}</p>
                            </div>
                        </div>
                    </div>
                    <h4>Ingredients</h4>
                    <ul>
                        {ingredients.map(ingredient => (
                            <li key={uuid()}>{ingredient.text}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VerticallyCenteredModal;