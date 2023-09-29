export type WordFormsList = [string, string, string];

export function changeWordForm(words: WordFormsList, number: number): string {
  if (number >= 11 && number <= 19) {
    return words[1];
  }

  const remainder = number % 10;

  if (remainder === 1) {
    return words[0];
  }
  if (remainder >= 2 && remainder <= 4) {
    return words[2];
  }

  return words[1];
}
