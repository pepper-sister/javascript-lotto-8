import { Console } from "@woowacourse/mission-utils";
import { INPUT_BONUS_NUMBER } from "../constants/message.js";

export default async function getBonusNumber() {
  const bonusNumber = await Console.readLineAsync(INPUT_BONUS_NUMBER);
  return Number(bonusNumber);
}
