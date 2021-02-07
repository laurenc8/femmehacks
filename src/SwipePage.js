
import RestaurantCard from './components/RestaurantCard'
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import Helmet from 'react-helmet'
import { results } from './API/results'
import "./SwipePage.css"
import {useState} from 'react'


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
  const [card, SetCard] = useState({name:"Chipotle",desc:"Fast-food chain offering Mexican fare, including design-your-own burritos, tacos and bowls.", price: "$"});


  var BigR = [
      ["Mc Donalds","Classic, long-running fast-food chain known for its burgers, fries and shakes.","$","fast food"],
      ["Olive Garden","Lively, family-friendly chain featuring Italian standards such as pastas and salads, with a full bar.","$$", "italian" ]
      ,["Outback Steakhouse","Boisterous Australian-themed chain serving steaks, seafood and other hearty steakhouse fare.","$$","steak" ],
      ["Panda Express","Fast-food chain for Chinese standards, including some health-conscious options.","$", "panda Express"],
      ["Pizza Hut","Family-friendly chain known for its made-to-order pizzas.","$","pizza"],
      ["Red Lobster","Lively chain restaurant serving American seafood standards amid New England-themed decor.","$$", "seafood" ]]
  
  var foodtypes = []



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
          name = {card.name}
          desc = {card.desc}
          price = {card.price}
        />
        
        {BigR.map( (restaurant,index) => (
        <div>
        <button onClick= {() => "foodtypes.push(restaurant[3]); SetCard({name:restaurant[0], desc: restaurant[1],price:restaurant[2]})"
  }>
          yes
        </button>
        <button onClick={() => SetCard({name:restaurant[0], desc: restaurant[1],price:restaurant[2]})}>
          No
        </button>
        
        </div>
        ))}

        
        
      </div>
      
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