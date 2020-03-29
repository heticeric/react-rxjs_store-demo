import React, { useState, useEffect } from 'react';
import './App.css';

import messageService from "./messageService";

const AddOne = () =>
{
  return (
    <>
      <h3>Add one to counter</h3>
      <button
        onClick={ _ => messageService.increment() }
      >
        Increment counter
      </button>
    </>
  );
}

const MinusOne = props =>
{
  return (
    <>
      <h3>Substract one to counter</h3>
      <button
        onClick={ _ => messageService.decrement() }
      >
        Decrement counter
      </button>
      <div>{ props.children }</div>
    </>
  );
}

const Counter = props =>
{
  const [ count, setCount ] = useState( messageService.value );

  /**
   * Subscribe to the stream
   */
  useEffect
  (
    () =>
    {
      messageService.subscribe( setCount );
    },[ count ]
  )

  return(
    <>
      <h3>{ props.msg }</h3>
      <div>{ count }</div>
      <div>{ props.children }</div>
    </>
  );
}



const App = () =>
{
  return (
    <div className="App">
      <Counter msg="High level counter">
        <AddOne />
      </Counter>
      <hr/>
      <MinusOne>
        <Counter msg="Deep level counter" />
      </MinusOne>
    </div>
  );
}

export default App;
