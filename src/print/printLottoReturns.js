import { Console } from "@woowacourse/mission-utils";
import { TOTAL_RETURNS_FRONT, TOTAL_RETURNS_END } from "../constants/message.js";

export default function printLottoReturns(purchaseAmount, totalPrize) {
  const totalReturns = Math.ceil((totalPrize / purchaseAmount) * 100 * 10) / 10;

  Console.print(`${TOTAL_RETURNS_FRONT}${totalReturns}${TOTAL_RETURNS_END}`);
}
