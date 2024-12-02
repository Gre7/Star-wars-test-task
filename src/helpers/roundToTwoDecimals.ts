export const roundToTwoDecimals = (input: string): number | null => {
  const normalizedInput = input.replace(',', '.');

  const number = parseFloat(normalizedInput);

  if (isNaN(number)) {
    return null;
  }
  return Math.round(number * 100) / 100;
};
