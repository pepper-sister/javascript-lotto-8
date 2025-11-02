import { Random, Console } from "@woowacourse/mission-utils";

export default function printLottoNumber(lottoCount) {
  let count = lottoCount;
  while (count) {
    const lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoArray.sort((a, b) => a - b);

    Console.print(`[${lottoArray.join(", ")}]`);
    count--;
  }

  return;
}
