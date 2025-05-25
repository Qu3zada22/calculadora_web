"use client"

import "./Keyboard.css"

interface KeyboardProps {
  onInput: (value: string) => void
  onOperation: (operation: string) => void
  onResult: () => void
  onClear: () => void
  onToggle: () => void
  onDecimal: () => void
}

const Keyboard = ({ onInput, onOperation, onResult, onClear, onToggle, onDecimal }: KeyboardProps) => {
  return (
    <div className="calculator-keyboard">
      {/* Fila 1: C, +/-, %, ÷ */}
      <button className="special-key" onClick={onClear}>
        C
      </button>
      <button className="special-key" onClick={onToggle}>
        +/−
      </button>
      <button className="special-key" onClick={() => onOperation("modulo")}>
        %
      </button>
      <button className="operator-key" onClick={() => onOperation("divide")}>
        ÷
      </button>

      {/* Fila 2: 7, 8, 9, × */}
      <button className="number-key" onClick={() => onInput("7")}>
        7
      </button>
      <button className="number-key" onClick={() => onInput("8")}>
        8
      </button>
      <button className="number-key" onClick={() => onInput("9")}>
        9
      </button>
      <button className="operator-key" onClick={() => onOperation("multiply")}>
        ×
      </button>

      {/* Fila 3: 4, 5, 6, - */}
      <button className="number-key" onClick={() => onInput("4")}>
        4
      </button>
      <button className="number-key" onClick={() => onInput("5")}>
        5
      </button>
      <button className="number-key" onClick={() => onInput("6")}>
        6
      </button>
      <button className="operator-key" onClick={() => onOperation("subtract")}>
        −
      </button>

      {/* Fila 4: 1, 2, 3, + */}
      <button className="number-key" onClick={() => onInput("1")}>
        1
      </button>
      <button className="number-key" onClick={() => onInput("2")}>
        2
      </button>
      <button className="number-key" onClick={() => onInput("3")}>
        3
      </button>
      <button className="operator-key" onClick={() => onOperation("add")}>
        +
      </button>

      {/* Fila 5: 0 (doble ancho), •, = */}
      <button className="number-key zero-key" onClick={() => onInput("0")}>
        0
      </button>
      <button className="operator-key" onClick={onDecimal}>
        •
      </button>
      <button className="equals-key" onClick={onResult}>
        =
      </button>
    </div>
  )
}

export default Keyboard
