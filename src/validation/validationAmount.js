import { ZERO, LOTTO_PRICE } from "../constants/number.js";
import { ERROR, ERROR_REASON } from "../constants/error.js";

export default function validationAmount(purchaseAmount) {
  if (purchaseAmount <= ZERO) throw new Error(`${ERROR}${ERROR_REASON.MIN_AMOUNT}`);
  if (purchaseAmount % LOTTO_PRICE != ZERO) throw new Error(`${ERROR}${ERROR_REASON.UNIT}`);
  return true;
}
