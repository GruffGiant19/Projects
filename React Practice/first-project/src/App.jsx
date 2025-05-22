import React from 'react'

const Derrick = () => {

  const name = "Derrick";
  const age = "32";

  const increase= () => {
    const num = document.getElementsByTagName("button").innerHTML;
    num++;

    return num++;
  }

  return (
    <div>
      <h2>My name is {name}. I am {age} years old. </h2>
      <h2>I am male.</h2>
      <button onClick={increase}>{age}</button>
    </div>
  )
}

export default Derrick