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
                  name = "store"
                  location = "Penn, US"
                  desc = "This is a really good restaurant, and you should totally come here. We have lots of different food!"
                  price = "$$$$"
                />
                </Col>
            ))}
          </Row>
          {/* 
          <Row>
            <Col sm={4}>
            <RestaurantBox
                title = {goalDetails[3].title}
                usersCompleted = {goalDetails[3].userscompleted}
                usersWorking = {goalDetails[3].usersworking}
                description = {goalDetails[3].description}
                imgsrc = {goalDetails[3].image}
              ></GroupBox>
            </Col>
            <Col sm={4}>
            <GroupBox
                title = {goalDetails[4].title}
                usersCompleted = {goalDetails[4].userscompleted}
                usersWorking = {goalDetails[4].usersworking}
                description = {goalDetails[4].description}
                imgsrc = {goalDetails[4].image}
              ></GroupBox>
            </Col>
            <Col sm={4}>
            <GroupBox
                title = {goalDetails[5].title}
                usersCompleted = {goalDetails[5].userscompleted}
                usersWorking = {goalDetails[5].usersworking}
                description = {goalDetails[5].description}
                imgsrc = {goalDetails[5].image}
              ></GroupBox> 
             </Col> 
          </Row>*/}
        </Container>
    </div>
  );
 }
 
 
export default MatchesPage;
