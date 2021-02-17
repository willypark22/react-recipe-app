import React from 'react';
import Modal from 'react-bootstrap/Modal';
import uuid from 'react-uuid';
import Button from 'react-bootstrap/Button';

const VerticallyCenteredModal = ({ title, calories, image, ingredients, show, onHide}) => {
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

                        </div>
                    </div>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default VerticallyCenteredModal;