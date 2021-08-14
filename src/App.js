import "./App.css";

function App() {
  const title = "Welcome to the new React blog";
  const likes = 80;
  const person = { name: "Isuru", age: 33 };
  const link = "https://github.com/isu3ru/";

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times!</p>
        <p>
          My Name is {person.name} and I am {person.age} years old.
        </p>
        <p>An Array: {[1, 2, 3]}</p>
        <p>
          A Math.random (will change on page refresh): {Math.random() * 100}
        </p>
        <p>
          <a href={link} target="_blank" rel="noreferrer">
            My Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
