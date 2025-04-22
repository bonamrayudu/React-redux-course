
import './App.css';

function App() {
  let numbers=Math.random()* 10
let message= "Below 5"
  if (numbers>5){
  message="Above 5"
  console.log(numbers);
  let date= new Date()
  var time= date.toLocaleTimeString();
  
  }
  return (
    <div className="App">
      <h1>{message}</h1>
      <h1>{numbers}</h1>
      <h1>{time}</h1>
    </div>
  );
}

export default App;
