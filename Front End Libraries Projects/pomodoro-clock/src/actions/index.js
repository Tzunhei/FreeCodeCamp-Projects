export setConfiguration = (option, operation) => {
  return {
    type: "SET_CONFIGURATION",
    payload: {
      option,
      operation
    }
  }
}