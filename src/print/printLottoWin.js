import { Console } from "@woowacourse/mission-utils";
import { LOTTO_CORRECT } from "../constants/lotto.js";
import { COUNT } from "../constants/message.js";

export default function printLottoWin(winCount) {
  const keys = ["three", "four", "five", "five_bonus", "six"];

  keys.forEach((key) => {
    const upperKey = key.toUpperCase();
    Console.print(`${LOTTO_CORRECT[upperKey]}${winCount[key]}${COUNT}`);
  });

  return;
}
