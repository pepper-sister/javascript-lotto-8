import { Console } from "@woowacourse/mission-utils";
import { INPUT_BONUS_NUMBER } from "../constants/message.js";
import validationBonusNumber from "../validation/validationBonusNumber.js";

export default async function getBonusNumber(winNumberArray) {
  while (true) {
    try {
      const bonusNumber = Number(await Console.readLineAsync(INPUT_BONUS_NUMBER));
      if (validationBonusNumber(bonusNumber, winNumberArray)) return bonusNumber;
    } catch (error) {
      Console.print(error.message);
    }
  }
}
