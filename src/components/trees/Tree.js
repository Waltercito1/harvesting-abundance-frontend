//import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Tree = (props) => {

    const formatImg = () => props.tree.attributes.image_format ? props.tree.attributes.image_format.url : "https://harvesting-abundance.s3.us-east-2.amazonaws.com/No-Image-Placeholder.svg"

    return(
        <div key={props.tree.attributes.id}>
            <Container fluid >
                <Row>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={formatImg()} width={300} height={300} />
                        <Card.Body>
                        <Card.Title>{props.tree.attributes.name}</Card.Title>
                        <Card.Text>
                            {props.tree.attributes.description}
                        </Card.Text>
                        <Card.Text>
                        <Link
                        to={{pathname:`/trees/${props.tree.attributes.id}`, state: props.tree.attributes}} 
                        // state={{...props.tree.attributes}}
                        ><p>See details</p></Link>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Tree