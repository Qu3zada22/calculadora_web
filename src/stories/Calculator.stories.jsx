import Calculator from "../components/Calculator"

export default {
  title: "Calculator/Calculator",
  component: Calculator,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
}

export const Default = {}

export const DarkTheme = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}
