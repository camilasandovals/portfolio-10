import { Col, Container, Row } from "react-bootstrap";

export default function About() {
    return (
        <section>
            <Container className="bg-danger">
                <Row>
                    <Col>
                        <img src= "/images/profile22.png" alt="profile pict" width={300}></img>
                    </Col>

                    <Col>
                    <h1>Hi, I am Camila</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum saepe ratione qui amet a soluta, est excepturi modi cumque animi rerum itaque blanditiis, illum aliquid recusandae tempora. Iusto, quos explicabo!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}