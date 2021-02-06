import React, { useState, useEffect } from 'react';

function Places({id }) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch(getUrl(id))
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

    function getUrl (p){
      return "https://maps.googleapis.com/maps/api/place/details/json?place_id="+p+"&fields=name,vicinity,rating,reviews,price_level&key=AIzaSyB0mUdXc01qBhDULZ8G84ePiU7Y2j_8Cb8"}
  
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