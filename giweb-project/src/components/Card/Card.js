import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';

const MyCard = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.heroe.imagen} />
        <Card.Body>
            <Card.Title>{props.heroe.nombre}</Card.Title>
            <Card.Text>
            Edad: {props.heroe.edad}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    )
}

export default MyCard;