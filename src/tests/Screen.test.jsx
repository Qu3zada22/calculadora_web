import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import Screen from "../components/Screen"

describe("Screen Component", () => {
  it("displays the correct value", () => {
    render(<Screen value="123" />)
    expect(screen.getByText("123")).toBeInTheDocument()
  })

  it("applies error class when isError is true", () => {
    render(<Screen value="ERROR" isError={true} />)
    const display = screen.getByText("ERROR")
    expect(display).toHaveClass("error")
  })

  it("handles long numbers correctly", () => {
    render(<Screen value="123456789" />)
    expect(screen.getByText("123456789")).toBeInTheDocument()
  })

  it("displays decimal numbers", () => {
    render(<Screen value="123.45" />)
    expect(screen.getByText("123.45")).toBeInTheDocument()
  })
})
