import { Random, Console } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";

export default function printLottoNumber(lottoCount) {
  let count = lottoCount;
  while (count) {
    const lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    new Lotto(lottoArray);

    Console.print(`[${lottoArray.join(", ")}]`);
    count--;
  }

  return;
}
