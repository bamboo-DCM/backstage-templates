/**
 * Converts a string to a boolean value.
 * @param value - The string value to convert
 * @returns boolean - The converted boolean value
 */
export function stringToBoolean(value: string): boolean {
  if (!value) return false;

  const normalizedValue = value.toLowerCase().trim();

  return (
    normalizedValue === 'true' ||
    normalizedValue === '1' ||
    normalizedValue === 'yes'
  );
}

/**
 * Verifies if a string represents a true or false value.
 * @param value - The string value to verify
 * @returns boolean - True if the string represents a true value, false otherwise
 */
export function isTrueString(value: string): boolean {
  return stringToBoolean(value);
}
