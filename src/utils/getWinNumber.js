import { Console } from "@woowacourse/mission-utils";
import { INPUT_WIN_NUMBER } from "../constants/message.js";
import Lotto from "../Lotto.js";

export default async function getWinNumber() {
  const winNumber = await Console.readLineAsync(INPUT_WIN_NUMBER);
  const withoutSpaceWinNumber = winNumber.replace(/\s/g, "");
  const winNumberArray = withoutSpaceWinNumber.split(",").map(Number);
  new Lotto(winNumberArray);
  return winNumberArray;
}
