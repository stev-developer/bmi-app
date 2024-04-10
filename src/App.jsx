import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values");
    }
  };
  function clearAll(){
    setBmi(null);
    setBmiStatus("");
    setHeight("");
    setWeight("");
    setErrorMessage("");

  }

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
          <div className="data">
            <h1>BMI Calculator</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            <div>
              <label>Height (cm):</label>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <label>Weight (kg):</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <button onClick={calculateBmi}>Calculate BMI</button>
            <button onClick={clearAll}>Clear</button>
            {bmi &&<div className="result">
              
              {bmi && <p>Your BMI is: {bmi}</p>}
              {bmiStatus && <p>You are {bmiStatus}</p>}
            </div>}
          </div>
        </div>
      
    </>
  );
}

export default App;


      
