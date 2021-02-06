
import RestaurantCard from './components/RestaurantCard'
import Chip from './Assests/Chipotle.jpg'

function SwipePage() {
  return (
    <div>
      Swipe!

      <RestaurantCard 
                  name = "Chipotle"
                  desc = "Fast-food chain offering Mexican fare, including design-your-own burritos, tacos and bowls."
                  price = "$"
                />
    </div>
  );
}

export default SwipePage;