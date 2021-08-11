//import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Tree = (props) => {
// console.log('props', props)
    return(
        <div>
            <Container fluid >
                <Row>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src="https://harvesting-abundance.s3.us-east-2.amazonaws.com/No-Image-Placeholder.svg" width={300} height={300} />
                        <Card.Body>
                        <Card.Title>{props.tree.attributes.name}</Card.Title>
                        <Card.Text>
                            {props.tree.attributes.description}
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