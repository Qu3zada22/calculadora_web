"use client"

import Button from "./Button"
import "./Keyboard.css"

const ButtonGrid = ({ onInput, onOperation, onResult, onClear, onToggle, onDecimal }) => {
  return (
    <div className="calculator-keyboard">
      {/* Fila 1: C, +/-, %, ÷ */}
      <Button type="special" onClick={onClear}>
        C
      </Button>
      <Button type="special" onClick={onToggle}>
        +/−
      </Button>
      <Button type="special" onClick={() => onOperation("modulo")}>
        %
      </Button>
      <Button type="operator" onClick={() => onOperation("divide")}>
        ÷
      </Button>

      {/* Fila 2: 7, 8, 9, × */}
      <Button onClick={() => onInput("7")}>7</Button>
      <Button onClick={() => onInput("8")}>8</Button>
      <Button onClick={() => onInput("9")}>9</Button>
      <Button type="operator" onClick={() => onOperation("multiply")}>
        ×
      </Button>

      {/* Fila 3: 4, 5, 6, - */}
      <Button onClick={() => onInput("4")}>4</Button>
      <Button onClick={() => onInput("5")}>5</Button>
      <Button onClick={() => onInput("6")}>6</Button>
      <Button type="operator" onClick={() => onOperation("subtract")}>
        −
      </Button>

      {/* Fila 4: 1, 2, 3, + */}
      <Button onClick={() => onInput("1")}>1</Button>
      <Button onClick={() => onInput("2")}>2</Button>
      <Button onClick={() => onInput("3")}>3</Button>
      <Button type="operator" onClick={() => onOperation("add")}>
        +
      </Button>

      {/* Fila 5: 0, •, = */}
      <Button className="zero-key" onClick={() => onInput("0")}>
        0
      </Button>
      <Button type="operator" onClick={onDecimal}>
        •
      </Button>
      <Button type="equals" onClick={onResult}>
        =
      </Button>
    </div>
  )
}

export default ButtonGrid
