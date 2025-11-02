import getWinNumber from "./getWinNumber.js";
import getBonusNumber from "./getBonusNumber.js";

export default async function userInputNumber() {
  const winNumberArray = await getWinNumber();
  const bonusNumber = await getBonusNumber();

  return { winNumberArray, bonusNumber };
}
