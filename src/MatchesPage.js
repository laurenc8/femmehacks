import RestaurantCard from './components/RestaurantCard'
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import Helmet from 'react-helmet'
import { results } from './API/results'


function MatchesPage() {
  const groupStyle={
    backgroundColor: "#c8e1ef",
    padding: "50px"
  }
  const createButtonStyle = {
    backgroundColor: "#0e71a9",
    color: "#ffffff",
    fontSize: 16,
    height: 30,
    width: 160,
    borderRadius: "20px",
    marginBottom: "10px"
  }
  
  return (
    <div style={groupStyle}>
      <Helmet>
          <style>{'body { background-color: #C8E1EF; }'}</style>
      </Helmet>
        <h1>YUMBBLE</h1>
        <button style={createButtonStyle}>YUMBBLE</button>
        <Container>
          <Row>
            {results.map((store, ind) => (
              <Col sm={4}>
                <RestaurantCard 
                  name = {store.name}
                  location = {store.location}
                  desc = {store.desc}
                  price = {store.price}
                  reviews = {store.reviews}
                />
                </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
 }
 
 
export default MatchesPage;
