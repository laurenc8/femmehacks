import RestaurantCard from './components/RestaurantCard'
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import Helmet from 'react-helmet'
import { results } from './API/results'
import "./SwipePage.css"


export default function SwipePage() {

  // const groupStyle={
  //   backgroundColor: "#c8e1ef",
  //   padding: "50px"
  // }
  // const createButtonStyle = {
  //   backgroundColor: "#0e71a9",
  //   color: "#ffffff",
  //   fontSize: 16,
  //   height: 30,
  //   width: 160,
  //   borderRadius: "20px",
  //   marginBottom: "10px"
  // }
  const groupStyle={
    backgroundColor: "#f3e7e7",
    padding: "10px"
  }
  const buttonStyle = {
    backgroundColor: "#d1d7ef",
    fontSize: 16,
    height: 30,
    width: 90,
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "5px"
  }


  return (
    <div style={groupStyle}>
    <center>
      <div className="header">
        <h1>YUMBBLE</h1>
      </div>
      <div className="swipe">
      <button style={buttonStyle}>yes</button>
      <div className="card">
        <RestaurantCard 
          name = {results[0].name}
          location = {results[0].location}
          desc = {results[0].desc}
          price = {results[0].price}
          reviews = {results[0].reviews}
        />
      </div>
      <button style={buttonStyle}>no</button>
      </div>
      </center>
    </div>
    // <div style={groupStyle}>
    //   <Helmet>
    //       <style>{'body { background-color: #C8E1EF; }'}</style>
    //   </Helmet>
    //     <h1>YUMBBLE</h1>
    //     <button style={createButtonStyle}>YUMBBLE</button>
    //     <Container>
    //       <Row>
    //         {results.map((store, ind) => (
    //           <Col sm={4}>
    //             <RestaurantCard 
    //               name = {store.name}
    //               location = {store.location}
    //               desc = {store.desc}
    //               price = {store.price}
    //               reviews = {store.reviews}
    //             />
    //             </Col>
    //         ))}
    //       </Row>
    //     </Container>
    // </div>
  );
}