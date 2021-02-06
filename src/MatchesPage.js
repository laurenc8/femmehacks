import RestaurantCard from './components/RestaurantCard'

function MatchesPage() {
  return (
    <div>
      <RestaurantCard
        name = "Chipotle"
        location = "Penn, US"
        desc = "This is a really good restaurant, and you should totally come here. We have lots of different food!"
        price = "$$$$"
        reviews = "amazing! yay!"
      />
    </div>
  );
}

export default MatchesPage;