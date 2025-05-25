import "./Screen.css"

const Screen = ({ value, isError = false }) => {
  return <div className={`calculator-display ${isError ? "error" : ""}`}>{value}</div>
}

export default Screen
