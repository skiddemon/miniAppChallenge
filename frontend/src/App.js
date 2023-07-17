import './App.css';

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

function App() {
  return (
    <div>
      <h1>test</h1>
      <ul>
        {movies.map(movie => <li key={movies.indexOf(movie)}> {movie.title} </li> )}
      </ul>
    </div>
  );
}

export default App;