import getPurchaseAmount from "./getPurchaseAmount.js";
import getWinNumber from "./getWinNumber.js";
import getBonusNumber from "./getBonusNumber.js";

export default async function userInput() {
  const purchaseAmount = await getPurchaseAmount();
  const winNumberArray = await getWinNumber();
  const bonusNumber = await getBonusNumber();

  return { purchaseAmount, winNumberArray, bonusNumber };
}
