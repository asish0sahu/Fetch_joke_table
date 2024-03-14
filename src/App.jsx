import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10'
      );
      const data = await response.json();
      setJokes(data.jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Jokes Crack</h1>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Category</th>
              <th scope="col">Joke</th>
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{joke.category}</td>
                <td>{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
