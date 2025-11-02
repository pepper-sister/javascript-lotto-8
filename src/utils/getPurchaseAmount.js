import { Console } from "@woowacourse/mission-utils";
import { INPUT_PURCHASE_AMOUNT } from "../constants/message.js";
import validationAmount from "../validation/validationAmount.js";

export default async function getPurchaseAmount() {
  while (true) {
    try {
      const purchaseAmount = await Console.readLineAsync(INPUT_PURCHASE_AMOUNT);
      if (validationAmount(purchaseAmount)) return purchaseAmount;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
