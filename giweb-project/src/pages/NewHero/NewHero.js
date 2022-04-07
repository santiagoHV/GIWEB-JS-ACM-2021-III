import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";

const NewHero = ({onSubmit}) => {
    const [heroe, setHeroe] = useState({
        nombre: "",
        edad: "",
        imagen: ""
    });

    const handleChange = (e) => {
        setHeroe({
            ...heroe,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>New Hero</h1>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    name='nombre'
                    type="text"
                    placeholder="Nombre del heroe" 
                    value={heroe.nombre}
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Edad</Form.Label>
                <Form.Control 
                    name='edad' 
                    type="text" 
                    placeholder="edad" 
                    value={heroe.edad}
                    onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Imagen</Form.Label>
                <Form.Control 
                    name='imagen' 
                    type="text" 
                    placeholder="Imagen"
                    value={heroe.imagen}
                    onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={() => onSubmit(heroe)}>
                Submit
            </Button>
            </Form>
        </div>
    );
}

export default NewHero;