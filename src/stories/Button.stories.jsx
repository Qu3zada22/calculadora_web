import Button from "../components/Button"

export default {
  title: "Calculator/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["number", "special", "operator", "equals"],
    },
    onClick: { action: "clicked" },
  },
}

export const NumberButton = {
  args: {
    children: "5",
    type: "number",
  },
}

export const SpecialButton = {
  args: {
    children: "C",
    type: "special",
  },
}

export const OperatorButton = {
  args: {
    children: "+",
    type: "operator",
  },
}

export const EqualsButton = {
  args: {
    children: "=",
    type: "equals",
  },
}
