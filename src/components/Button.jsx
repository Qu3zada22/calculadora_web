const Button = ({ children, onClick, className = '', type = 'number', disabled = false }) => {
  const getButtonClass = () => {
    switch (type) {
      case 'special':
        return 'special-key'
      case 'operator':
        return 'operator-key'
      case 'equals':
        return 'equals-key'
      default:
        return 'number-key'
    }
  }

  return (
    <button className={`${getButtonClass()} ${className}`} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  )
}

export default Button
