import RestaurantCard from './components/RestaurantCard'
import { Container, Row, Col } from 'react-grid-system';
import Helmet from 'react-helmet'
import { results } from './API/results'

function MatchesPage() {
  const groupStyle={
    backgroundColor: "#f3e7e7",
    padding: "10px"
  }
  const buttonStyle = {
    backgroundColor: "#3f63aa",
    color: "#ffffff",
    fontSize: 18,
    height: 40,
    width: 180,
    marginBottom: "10px",
    borderRadius: "5px"
  }
  const boxStyle = {
    alignItems: 'stretch'
  }
  const containerStyle = {
    marginBottom: "40px"
  }
  
  return (
    <div style={groupStyle}>
      <Helmet>
          <style>{'body { background-color: #f3e7e7; }'}</style>
      </Helmet>
      <center>
        <h1>YUMBBLE</h1>
        <p>We found 10 matches!</p>
        <Container style={containerStyle}>
          <Row>
            {results.map((store, ind) => (
              <Col sm={4} style={boxStyle}>
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
        <button style={buttonStyle}>Get More Matches</button>
      </center>
    </div>
  );
}
 
export default MatchesPage;
