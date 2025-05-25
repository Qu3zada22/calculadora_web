"use client"

interface NumberKeysProps {
  onInput: (value: string) => void
  onClear: () => void
  onToggle: () => void
  onDecimal: () => void
  onOperation: (operation: string) => void
}

const NumberKeys = ({ onInput, onClear, onToggle, onDecimal, onOperation }: NumberKeysProps) => {
  return (
    <>
      {/* Primera fila: C, +/-, %, . */}
      <button className="calculator-keyboard_number_key" type="button" onClick={onClear}>
        C
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={onToggle}>
        +/−
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onOperation("modulo")}>
        %
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={onDecimal}>
        •
      </button>

      {/* Números del 7 al 9 */}
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("7")}>
        7
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("8")}>
        8
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("9")}>
        9
      </button>

      {/* Números del 4 al 6 */}
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("4")}>
        4
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("5")}>
        5
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("6")}>
        6
      </button>

      {/* Números del 1 al 3 */}
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("1")}>
        1
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("2")}>
        2
      </button>
      <button className="calculator-keyboard_number_key" type="button" onClick={() => onInput("3")}>
        3
      </button>

      {/* Número 0 (ocupa dos columnas) */}
      <button
        className="calculator-keyboard_number_key"
        type="button"
        onClick={() => onInput("0")}
        style={{ gridColumn: "span 2" }}
      >
        0
      </button>
    </>
  )
}

export default NumberKeys
