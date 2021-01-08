import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './ResultsHeader.css'


function ResultHeader () {
    return (
        <Container className="resultHeader" fluid>
            <Row>
                <Col>Image</Col>
                <Col>Name</Col>
                <Col>Neighborhood</Col>
                <Col>Yelp Rating</Col>
                <Col>Categories</Col>
                <Col>Yelp Page</Col>
                <Col>Wish List</Col>
                <Col>Saved</Col>
            </Row>
        </Container>
    );
}

export default ResultHeader;