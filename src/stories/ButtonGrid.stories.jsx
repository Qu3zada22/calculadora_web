import ButtonGrid from "../components/ButtonGrid"

export default {
  title: "Calculator/ButtonGrid",
  component: ButtonGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export const Default = {
  args: {
    onInput: (value) => console.log("Input:", value),
    onOperation: (op) => console.log("Operation:", op),
    onResult: () => console.log("Result"),
    onClear: () => console.log("Clear"),
    onToggle: () => console.log("Toggle"),
    onDecimal: () => console.log("Decimal"),
  },
}
