"use client"

function OperatorButton({ value, onClick, children }) {
  return (
    <button className="calculator-keyboard_operator_key" type="button" value={value} onClick={onClick}>
      {children}
    </button>
  )
}

export default OperatorButton
