import getWinNumber from "./getWinNumber.js";

export default async function userInputWinNumber() {
  const winNumberArray = await getWinNumber();

  return winNumberArray;
}
