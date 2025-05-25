import { useState } from 'react'

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForNewValue, setWaitingForNewValue] = useState(false)

  const handleInput = (value) => {
    // Si está mostrando ERROR, limpiar y empezar de nuevo
    if (currentValue === 'ERROR') {
      setCurrentValue(value)
      setWaitingForNewValue(false)
      return
    }

    if (waitingForNewValue) {
      setCurrentValue(value)
      setWaitingForNewValue(false)
    } else {
      // No permitir más de 9 caracteres
      if (currentValue.length >= 9) {
        return // Ignorar cualquier número después del noveno
      }

      if (currentValue === '0') {
        setCurrentValue(value)
      } else {
        setCurrentValue(currentValue + value)
      }
    }
  }

  const handleDecimal = () => {
    // Si está mostrando ERROR, empezar con "0."
    if (currentValue === 'ERROR') {
      setCurrentValue('0.')
      setWaitingForNewValue(false)
      return
    }

    if (waitingForNewValue) {
      setCurrentValue('0.')
      setWaitingForNewValue(false)
    } else {
      // No agregar punto si ya existe uno o si se excede el límite de 9 caracteres
      if (!currentValue.includes('.') && currentValue.length < 9) {
        setCurrentValue(currentValue + '.')
      }
    }
  }

  const formatResult = (result) => {
    // Verificar si el número es negativo
    if (result < 0) {
      return 'ERROR'
    }

    // Verificar si el número es mayor a 999999999
    if (result > 999999999) {
      return 'ERROR'
    }

    // Convertir a string y verificar longitud
    let resultString = result.toString()

    // Si el resultado tiene más de 9 caracteres, mostrar ERROR
    if (resultString.length > 9) {
      return 'ERROR'
    }

    // Si es un número decimal, verificar que no exceda 9 caracteres
    if (resultString.includes('.')) {
      // Si el resultado decimal es muy largo, truncarlo para que quepa en 9 caracteres
      if (resultString.length > 9) {
        const decimalIndex = resultString.indexOf('.')
        const integerPart = resultString.substring(0, decimalIndex)

        // Si la parte entera ya es muy larga, mostrar ERROR
        if (integerPart.length >= 9) {
          return 'ERROR'
        }

        // Truncar la parte decimal para que el total no exceda 9 caracteres
        const maxDecimalPlaces = 8 - integerPart.length
        if (maxDecimalPlaces > 0) {
          resultString = result.toFixed(maxDecimalPlaces)
          // Remover ceros innecesarios al final
          resultString = parseFloat(resultString).toString()
        } else {
          return 'ERROR'
        }
      }
    }

    return resultString
  }

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case 'add':
        return firstValue + secondValue
      case 'subtract':
        return firstValue - secondValue
      case 'multiply':
        return firstValue * secondValue
      case 'divide':
        if (secondValue === 0) {
          return Infinity // Esto se manejará como ERROR
        }
        return firstValue / secondValue
      case 'modulo':
        if (secondValue === 0) {
          return Infinity // Esto se manejará como ERROR
        }
        return firstValue % secondValue
      default:
        return secondValue
    }
  }

  const handleOperation = (nextOperation) => {
    const inputValue = parseFloat(currentValue)

    if (storedValue === null) {
      setStoredValue(currentValue)
    } else if (operation) {
      const storedValueFloat = parseFloat(storedValue)
      const result = calculate(storedValueFloat, inputValue, operation)

      const formattedResult = formatResult(result)
      setCurrentValue(formattedResult)

      if (formattedResult === 'ERROR') {
        setStoredValue(null)
        setOperation(null)
        setWaitingForNewValue(true)
        return
      }

      setStoredValue(formattedResult)
    }

    setWaitingForNewValue(true)
    setOperation(nextOperation)
  }

  const handleResult = () => {
    if (operation && storedValue) {
      const inputValue = parseFloat(currentValue)
      const storedValueFloat = parseFloat(storedValue)
      const result = calculate(storedValueFloat, inputValue, operation)

      const formattedResult = formatResult(result)
      setCurrentValue(formattedResult)

      setStoredValue(null)
      setOperation(null)
      setWaitingForNewValue(true)
    }
  }

  const handleClear = () => {
    setCurrentValue('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForNewValue(false)
  }

  const handleToggle = () => {
    if (currentValue === 'ERROR' || currentValue === '0') return

    // La función +/- siempre resultará en un número negativo,
    // pero según las reglas, no podemos mostrar números negativos
    // Por lo tanto, esta función debería mostrar ERROR
    setCurrentValue('ERROR')
    setWaitingForNewValue(true)
  }

  return {
    currentValue,
    handleInput,
    handleOperation,
    handleResult,
    handleClear,
    handleToggle,
    handleDecimal
  }
}
