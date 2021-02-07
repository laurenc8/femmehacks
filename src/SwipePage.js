
import RestaurantCard from './components/RestaurantCard'
import { setConfiguration, Container, Row, Col } from 'react-grid-system';
import Helmet from 'react-helmet'
import { results } from './API/results'
import "./SwipePage.css"
import {useState} from 'react'


export default function SwipePage() {
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
  const [state, setState] = useState({index: 0, preferences: []});

  var BigR = [
      ["Chipotle", "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos and bowls.", "$"],
      ["Mc Donalds","Classic, long-running fast-food chain known for its burgers, fries and shakes.","$","fast food"],
      ["Olive Garden","Lively, family-friendly chain featuring Italian standards such as pastas and salads, with a full bar.","$$", "italian" ]
      ,["Outback Steakhouse","Boisterous Australian-themed chain serving steaks, seafood and other hearty steakhouse fare.","$$","steak" ],
      ["Panda Express","Fast-food chain for Chinese standards, including some health-conscious options.","$", "panda Express"],
      ["Pizza Hut","Family-friendly chain known for its made-to-order pizzas.","$","pizza"],
      ["Red Lobster","Lively chain restaurant serving American seafood standards amid New England-themed decor.","$$", "seafood" ]]

  return (
    <div style={groupStyle}>
      <center>
        <div className="header">
          <h1>YUMBBLE</h1>
        </div>
        <div className="swipe">
          <div className="card">
            <button style={buttonStyle} onClick={() => setState({index: (state.index + 1) % BigR.length, preferences: state.preferences})}>
              no.
            </button>
            <RestaurantCard 
              name = {BigR[state.index][0]}
              desc = {BigR[state.index][1]}
              price = {BigR[state.index][2]}
            />
            <button style={buttonStyle} onClick= {() => setState({index: (state.index + 1) % BigR.length, preferences: state.preferences.concat(BigR[state.index])})}>
              yes.
            </button>
          </div>
        </div>
        <form method="get" action="/matches">
          <button style={buttonStyle} type="submit">See Matches</button>
        </form>
      </center>
    </div>
  );
}