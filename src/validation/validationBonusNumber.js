import { MIN_NUMBER, MAX_NUMBER } from "../constants/number.js";
import { ERROR, ERROR_REASON } from "../constants/error.js";

export default function validationBonusNumber(bonusNumber, winNumberArray) {
  if (bonusNumber < MIN_NUMBER || bonusNumber > MAX_NUMBER || !Number.isInteger(bonusNumber))
    throw new Error(`${ERROR}${ERROR_REASON.RANGE}`);

  if (winNumberArray.includes(bonusNumber)) throw new Error(`${ERROR}${ERROR_REASON.DUPLICATION}`);
  return true;
}
