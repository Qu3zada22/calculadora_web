import "./Display.css"

interface DisplayProps {
  value: string
}

const Display = ({ value }: DisplayProps) => {
  return <div className="calculator-display">{value}</div>
}

export default Display
