import React, { useState } from "react";

export default function Square() {
  const [square, setSquare] = useState(0);
  const [result, setResult] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    const result = 4 * square;
    setResult(result);
  };

  const handleChange = e => {
    setSquare(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={handleChange}
          value={square}
          name="square"
        />
        <button type="submit">submit</button>
      </form>
      {/* <h1>keliling</h1> */}
      <h1>Result Square {result}</h1>
    </div>
  );
}
