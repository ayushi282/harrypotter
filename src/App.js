import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use Axios to fetch data from the API
    axios
      .get("https://api.potterdb.com/v1/spells")
      .then((response) => { console.log(response.data);
        setSpells(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false);
      });
  }, []);
// below I am returing the fetch API data and checking if he api is in array form can be mapped on the screen using array.isarray object
// Harry Potter Spells will be the heading and if the data is no able to map then it will show No spells found.
  return (
    <div>
      <h1>Harry Potter Spells</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(spells) && spells.length > 0 ? (
            spells.map((spell) => (
              <li key={spell.id}>{spell.name}</li>
            ))
          ) : (
            <p>No spells found.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default App;

