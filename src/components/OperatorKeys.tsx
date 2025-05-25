"use client"

interface OperatorKeysProps {
  onOperation: (operation: string) => void
  onResult: () => void
}

const OperatorKeys = ({ onOperation, onResult }: OperatorKeysProps) => {
  return (
    <>
      {/* División */}
      <button
        className="calculator-keyboard_operator_key"
        type="button"
        onClick={() => onOperation("divide")}
        style={{ gridColumn: "4", gridRow: "2" }}
      >
        ÷
      </button>

      {/* Multiplicación */}
      <button
        className="calculator-keyboard_operator_key"
        type="button"
        onClick={() => onOperation("multiply")}
        style={{ gridColumn: "4", gridRow: "3" }}
      >
        ×
      </button>

      {/* Resta */}
      <button
        className="calculator-keyboard_operator_key"
        type="button"
        onClick={() => onOperation("subtract")}
        style={{ gridColumn: "4", gridRow: "4" }}
      >
        −
      </button>

      {/* Suma */}
      <button
        className="calculator-keyboard_operator_key"
        type="button"
        onClick={() => onOperation("add")}
        style={{ gridColumn: "4", gridRow: "5" }}
      >
        +
      </button>

      {/* Igual */}
      <button
        className="calculator-keyboard_operator_key"
        type="button"
        onClick={onResult}
        style={{ gridColumn: "3", gridRow: "6" }}
      >
        =
      </button>
    </>
  )
}

export default OperatorKeys
