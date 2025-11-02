import getBonusNumber from "./getBonusNumber.js";

export default async function userInputBonusNumber(winNumberArray) {
  const bonusNumber = await getBonusNumber(winNumberArray);

  return bonusNumber;
}
