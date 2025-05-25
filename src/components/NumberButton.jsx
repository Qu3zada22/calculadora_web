"use client"

function NumberButton({ value, onClick, children }) {
  return (
    <button className="calculator-keyboard_number_key" type="button" value={value} onClick={onClick}>
      {children}
    </button>
  )
}

export default NumberButton
