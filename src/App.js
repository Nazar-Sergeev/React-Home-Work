import logo from './logo.svg';
import './App.css';
import {useReducer} from "react";

function reducer(state,action){
    switch (action.type){
        case 'INC_A':
            return {...state, a: state.a + action.payload}
        case 'INC_B':
            return {...state, b: state.b + action.payload}
        default:
            return {...state}
    }
}

function App() {

    let [state, dispatch] = useReducer(reducer, {a: 0, b: 0});
    console.log(state);

    return (
        <div>
            <button onClick={() => dispatch({type: 'INC_A', payload: 1})}>Click Me - {state.a}</button>
            <button onClick={() => dispatch({type: 'INC_B', payload: 2})}>Click Me - {state.b}</button>
        </div>
    );
}

export default App;


// let [a, setA] = useState(0);
// let [b, setB] = useState(0);
//
// <div>
//     <h2>A - {a}</h2>
//     <button onClick={() => {
//         setA(++a);
//     }
//     }>inc A - {a}</button>
// </div>
// <div>
//     <h2>B - {b}</h2>
//     <button onClick={() => {
//         setB(++b);
//     }
//     }>inc B - {b}</button>
// </div>