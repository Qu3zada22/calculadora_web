import Screen from "../components/Screen"

export default {
  title: "Calculator/Screen",
  component: Screen,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export const Default = {
  args: {
    value: "0",
  },
}

export const WithNumber = {
  args: {
    value: "123456789",
  },
}

export const WithDecimal = {
  args: {
    value: "123.456",
  },
}

export const ErrorState = {
  args: {
    value: "ERROR",
    isError: true,
  },
}
