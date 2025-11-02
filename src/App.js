import userInputMoney from "./utils/userInputMoney.js";
import printLottoCount from "./print/printLottoCount.js";
import printLottoNumber from "./print/printLottoNumber.js";
import userInputNumber from "./utils/userInputNumber.js";
import lottoWinCount from "./lotto/lottoWinCount.js";
import printLottoWin from "./print/printLottoWin.js";

class App {
  async run() {
    const purchaseAmount = await userInputMoney();
    const lottoCount = printLottoCount(purchaseAmount);
    const lottoArrays = printLottoNumber(lottoCount);
    const { winNumberArray, bonusNumber } = await userInputNumber();
    const winCount = lottoWinCount(lottoArrays, winNumberArray, bonusNumber);
    printLottoWin(winCount);
  }
}

export default App;
