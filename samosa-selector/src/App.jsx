import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  return (
    <div className="App">
	<div className="header">
		<h1>"Samosa Selector"</h1>
		<h2>"Count:" {count}</h2>
		<img src="https://img.magnific.com/free-psd/delicious-crispy-golden-brown-samosa-with-bubbly-fried-pastry-sits-isolated-against-plain-black-background_84443-63340.jpg?semt=ais_hybrid&w=740&q=80" onClick={updateCount} className="samosa" />
	</div>
	<div className="container">
		<div className="upgrade">
			<h3>Upgrade 1</h3>
			<p>Upgrade description</p>
			<button>10 samosas</button>
		</div>
		<div className="upgrade">
			<h3>Upgrade 2</h3>
			<p>Upgrade description</p>
			<button>20 samosas</button>
		</div>
	</div>
    </div>
  )
}

const updateCount = () => setCount(count + multiplier);

export default App
