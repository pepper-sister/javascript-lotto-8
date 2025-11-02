import { Console } from "@woowacourse/mission-utils";
import { INPUT_PURCHASE_AMOUNT } from "../constants/message.js";

export default async function getPurchaseAmount() {
  const purchaseAmount = await Console.readLineAsync(INPUT_PURCHASE_AMOUNT);
  return purchaseAmount;
}
