"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import Button from "../components/Button"

describe("Button Component", () => {
  it("renders button with correct text", () => {
    render(<Button>5</Button>)
    expect(screen.getByRole("button")).toHaveTextContent("5")
  })

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>5</Button>)

    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("applies correct CSS class for different types", () => {
    const { rerender } = render(<Button type="special">C</Button>)
    expect(screen.getByRole("button")).toHaveClass("special-key")

    rerender(<Button type="operator">+</Button>)
    expect(screen.getByRole("button")).toHaveClass("operator-key")
  })

  it("can be disabled", () => {
    render(<Button disabled>5</Button>)
    expect(screen.getByRole("button")).toBeDisabled()
  })
})
