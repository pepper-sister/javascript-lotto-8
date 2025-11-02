import getPurchaseAmount from "./getPurchaseAmount.js";
import getWinNumber from "./getWinNumber.js";
import getBonusNumber from "./getBonusNumber.js";

export default async function userInput() {
  const purchaseAmount = await getPurchaseAmount();
  const winNumber = await getWinNumber();
  const bonusNumber = await getBonusNumber();

  return { purchaseAmount, winNumber, bonusNumber };
}
