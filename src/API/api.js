import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect((food) => {
      var url = getUrl("chinese")
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
          {results.map(item => (
            <li key={item.place_id}>
              {item.name} {item.price_level}
            </li>
          ))}
        </ul>
      );
    }
  }

export default MyComponent;