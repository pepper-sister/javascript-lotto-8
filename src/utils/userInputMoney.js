import getPurchaseAmount from "./getPurchaseAmount.js";

export default async function userInputMoney() {
  const purchaseAmount = await getPurchaseAmount();
  return purchaseAmount;
}
