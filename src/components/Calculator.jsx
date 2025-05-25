"use client"

import Screen from "./Screen"
import ButtonGrid from "./ButtonGrid"
import { useCalculator } from "../hooks/useCalculator"
import "./Calculator.css"
import "./Keyboard.css"

const Calculator = () => {
  const { currentValue, handleInput, handleOperation, handleResult, handleClear, handleToggle, handleDecimal } =
    useCalculator()

  return (
    <div className="container">
      <div className="calculator">
        <Screen value={currentValue} isError={currentValue === "ERROR"} />
        <ButtonGrid
          onInput={handleInput}
          onOperation={handleOperation}
          onResult={handleResult}
          onClear={handleClear}
          onToggle={handleToggle}
          onDecimal={handleDecimal}
        />
      </div>
    </div>
  )
}

export default Calculator
