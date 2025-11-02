import { Console } from "@woowacourse/mission-utils";
import { LOTTO_PRICE } from "../constants/number.js";
import { LOTTO_COUNT } from "../constants/message.js";

export default function printLottoCount(purchaseAmount) {
  const lottoCount = purchaseAmount / LOTTO_PRICE;
  Console.print(`${lottoCount}${LOTTO_COUNT}`);

  return lottoCount;
}
