
import './App.css';

function App() {
  let number=Math.random()* 10
let message= "Below 5"
  if (number>5){
  message="Above 5"
  console.log(number);
  
  }
  return (
    <div className="App">
      <h1>{message}</h1>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
