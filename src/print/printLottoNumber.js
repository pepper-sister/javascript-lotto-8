import { Random, Console } from "@woowacourse/mission-utils";

export default function printLottoNumber(lottoCount) {
  const lottoArrays = [];

  let count = lottoCount;
  while (count) {
    const lottoArray = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);

    Console.print(`[${lottoArray.join(", ")}]`);
    lottoArrays.push(lottoArray);
    count--;
  }

  return lottoArrays;
}
