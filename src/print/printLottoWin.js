import { Console } from "@woowacourse/mission-utils";
import { LOTTO_CORRECT, LOTTO_PRIZE } from "../constants/lotto.js";
import { COUNT } from "../constants/message.js";

export default function printLottoWin(winCount) {
  let totalPrize = 0;
  const keys = ["three", "four", "five", "five_bonus", "six"];
  keys.forEach((key) => {
    const upperKey = key.toUpperCase();
    Console.print(`${LOTTO_CORRECT[upperKey]}${winCount[key]}${COUNT}`);
    totalPrize += LOTTO_PRIZE[upperKey] * winCount[key];
  });

  return totalPrize;
}
