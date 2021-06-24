import logo from './logo.svg';
import './App.css';
import Simpson from "./components/simpson/Simpson";
import Menu from "./components/menu/Menu";
import Simpsons from "./components/simpsons/Simpsons";

let simpsons = [
  {name:'Bart', surname: 'Simpson', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, veniam.', age: 10, photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
  {name:'Homer', surname: 'Simpson', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, veniam.', age: 65, photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'},
  {name:'Lisa', surname: 'Simpson', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, veniam. ', age: 8, photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'},
  {name:'Marge', surname: 'Simpson', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, veniam.', age: 34, photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
];

function App() {
  return (
      <div>
        <Menu/>
        <Simpsons items = {simpsons}/>
        <Menu/>
      </div>
  );
}

export default App;

