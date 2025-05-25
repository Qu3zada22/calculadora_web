import { renderHook, act } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import { useCalculator } from "../hooks/useCalculator"

describe("useCalculator Hook", () => {
  it("should initialize with zero", () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.currentValue).toBe("0")
  })

  it("should handle number input correctly", () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput("5")
    })

    expect(result.current.currentValue).toBe("5")
  })

  it("should limit input to 9 characters", () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput("1")
      result.current.handleInput("2")
      result.current.handleInput("3")
      result.current.handleInput("4")
      result.current.handleInput("5")
      result.current.handleInput("6")
      result.current.handleInput("7")
      result.current.handleInput("8")
      result.current.handleInput("9")
      result.current.handleInput("0") // Este debería ser ignorado
    })

    expect(result.current.currentValue).toBe("123456789")
    expect(result.current.currentValue.length).toBe(9)
  })

  it("should show ERROR for negative results", () => {
    const { result } = renderHook(() => useCalculator())

    act(() => {
      result.current.handleInput("5")
      result.current.handleOperation("subtract")
      result.current.handleInput("10")
      result.current.handleResult()
    })

    expect(result.current.currentValue).toBe("ERROR")
  })
})
