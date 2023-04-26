import { Col, Container, Row } from "react-bootstrap";
import GalleryCard from "./Card";
import data from "../../data/data.json"
export default function List() {
    return(
        <>
        <Container>
            <Row>
                {
                    data.map(
                        (element) => {
                            return element
                            ? <GalleryCard data={element} />
                            : <p>Loadings</p>
                        }
                    )
                }
            </Row>
        </Container>
        </>
    )
}