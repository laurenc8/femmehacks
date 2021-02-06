import React, { useState, useEffect } from 'react';
const larg_res_chain = ['McDonald\'s'  , ' Starbucks' , 'KFC  ' , 'Pizza Hut', '  Burger King'  , '  Domino’s'  ,  'Dunkin' , 'Hunt Brothers Pizza',  'Taco Bell', 'Baskin-Robbins ' , ' Wendy\'s' , 'Hardee\'s' , 'Orange Julius', 'Papa John\'s Pizza', 'Dairy Queen', 'Little Caesars', 'Tim Hortons', 'Jollibee', 'Costa', 'CNHLS', 'Sonic Drive-In', 'Arby\'s', 'Popeyes', 'Jimmy John\'s', 'Dicos', 'Jack in the Box', 'LEM hamburger', 'Panda Express', 'Ting Hsin International Group', 'Chick-fil-A', 'Greggs', 'Applebee\'s', 'Panera Bread', 'Chipotle Mexican Grill', 'Pelicana Chicken', 'Shanghai Shihao', 'Sukiya', 'Pala Hamburger', 'Chester\'s International', 'Café Coffee Day', 'MOS Burger', 'Denny\'s', 'Church\'s Chicken', 'IHOP', 'WingStreet', 'Chili\'s', 'Auntie Anne\'s', 'Carl\'s Jr.', 'Five Guys', 'Waffle House', 'Quiznos', 'Papa Murphy\'s', 'Krispy Kreme', 'Ichibanya', 'Stardogs', 'Long John Silver\'s', 'Buffalo Wild Wings', 'A&W Restaurants', 'Firehouse Subs', 'Kebab Turki Baba Rafi', 'Telepizza', 'Bob\'s', 'Chooks-to-Go', 'Jersey Mike\'s Subs', 'Nando\'s', 'Wetherspoons', 'Häagen-Dazs', 'A&W (Canada)' , 'Jamba Juice' , 'BreadTalk' , '85C Bakery Cafe' , 'Sbarro' , 'Zaxby\'s' , 'Checkers and Rally\'s' , 'Cinnabon' , 'Blimpie' , 'Whataburger' , 'SFC Plus' , 'Dodo Pizza' , 'Wingstop' , 'Einstein Bros. Bagels' , 'Bojangles\' Famous Chicken \'n Biscuits' , 'Culver\'s' , 'Moe\'s Southwest Grill' , 'Pizza Pizza' , 'Qdoba' , 'Rita\'s Italian Ice' , 'Smoothie King' , 'Chuck E. Cheese' , 'Pita Pit' , 'Kungfu' , 'Del Taco' , 'Steak \'n Shake' , 'Steers' , 'Captain D\'s' , 'Da Niang Dumpling' , 'Raising Cane\'s Chicken Fingers' , 'Brioche Dorée' , 'Charleys Philly Steaks' , 'Round Table Pizza', 'Hesburger', 'Shakey\'s Pizza', 'Shake Shack' ];

function MyComponent({ fooood }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      var url = getUrl(fooood)
      fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.results);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    function getUrl (food){
      return "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.957119,-75.199547&radius=1500&type=restaurant&keyword="+food+"&key=AIzaSyB0mUdXc01qBhDULZ8G84ePiU7Y2j_8Cb8"
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // <p> { results } </p>
        <ul>
          {underTotalRatings(results).map(item => (
            <li key={item.place_id}>
              {item.name} {item.price_level}
            </li>
          ))}
        </ul>
      );
    }

    function underTotalRatings(results) {
      var new_results = []
      results.forEach(element => {
        //if ele is not large food chain, add to new list
        if (!larg_res_chain.includes(element.name) && element.user_ratings_total < 200){
          return new_results.push(element)
        }
      });
      return new_results
    }
  }
// [[{name: thename, }],[],[]]
export default MyComponent;