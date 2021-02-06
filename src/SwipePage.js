
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
  
  var BigR = [["Chipotle","Fast-food chain offering Mexican fare, including design-your-own burritos, tacos and bowls.","$" ],
      ["Mc Donalds","Classic, long-running fast-food chain known for its burgers, fries and shakes.","$" ],
      ["Olive Garden","Lively, family-friendly chain featuring Italian standards such as pastas and salads, with a full bar.","$$" ]
      ,["Outback Steakhouse","Boisterous Australian-themed chain serving steaks, seafood and other hearty steakhouse fare.","$$" ],
      ["Panda Express","Fast-food chain for Chinese standards, including some health-conscious options.","$" ],
      ["Pizza Hut","Family-friendly chain known for its made-to-order pizzas.","$" ],
      ["Red Lobster","Lively chain restaurant serving American seafood standards amid New England-themed decor.","$$" ]]
      


  return (
    <div style={groupStyle}>
    <center>
      <div className="header">
        <h1>YUMBBLE</h1>
      </div>
      <div className="swipe">
      <button style={buttonStyle}>yes</button>
      <div className="card">
        {BigR.map( (restaurant,index) => (

        <RestaurantCard 
          name = {restaurant[0]}
          desc = {restaurant[1]}
          price = {restaurant[2]}
        />
        ))}
        
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