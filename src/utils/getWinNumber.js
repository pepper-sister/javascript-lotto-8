import { Console } from "@woowacourse/mission-utils";
import { INPUT_WIN_NUMBER } from "../constants/message.js";

export default async function getWinNumber() {
  const winNumber = await Console.readLineAsync(INPUT_WIN_NUMBER);
  return winNumber.split(",");
}
