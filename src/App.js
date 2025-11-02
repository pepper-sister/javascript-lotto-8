import userInputMoney from "./utils/userInputMoney.js";
import printLottoCount from "./print/printLottoCount.js";
import printLottoNumber from "./print/printLottoNumber.js";
import userInputWinNumber from "./utils/userInputWinNumber.js";
import userInputBonusNumber from "./utils/userInputBonusNumber.js";
import lottoWinCount from "./lotto/lottoWinCount.js";
import printLottoWin from "./print/printLottoWin.js";
import printLottoReturns from "./print/printLottoReturns.js";

class App {
  async run() {
    const purchaseAmount = await userInputMoney();
    const lottoCount = printLottoCount(purchaseAmount);
    const lottoArrays = printLottoNumber(lottoCount);
    const winNumberArray = await userInputWinNumber();
    const bonusNumber = await userInputBonusNumber(winNumberArray);

    const winCount = lottoWinCount(lottoArrays, winNumberArray, bonusNumber);
    const totalPrize = printLottoWin(winCount);
    printLottoReturns(purchaseAmount, totalPrize);
  }
}

export default App;
