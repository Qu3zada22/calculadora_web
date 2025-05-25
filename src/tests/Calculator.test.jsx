import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Calculator from "../components/Calculator"

describe("Calculator Integration", () => {
  it("renders calculator with initial display of 0", () => {
    render(<Calculator />)
    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("performs basic addition correctly", () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText("5"))
    fireEvent.click(screen.getByText("+"))
    fireEvent.click(screen.getByText("3"))
    fireEvent.click(screen.getByText("="))

    expect(screen.getByText("8")).toBeInTheDocument()
  })

  it("clears display when C is pressed", () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText("5"))
    fireEvent.click(screen.getByText("C"))

    expect(screen.getByText("0")).toBeInTheDocument()
  })

  it("shows ERROR for numbers exceeding 999999999", () => {
    render(<Calculator />)

    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("9"))
    fireEvent.click(screen.getByText("+"))
    fireEvent.click(screen.getByText("1"))
    fireEvent.click(screen.getByText("="))

    expect(screen.getByText("ERROR")).toBeInTheDocument()
  })
})
