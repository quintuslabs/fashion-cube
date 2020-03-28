const CalculateTax = subtotal => {
  return {
    taxes: parseFloat((subtotal * 0.14).toFixed(2)),
    total: parseFloat((subtotal * 1.14).toFixed(2))
  };
};
export default CalculateTax;
