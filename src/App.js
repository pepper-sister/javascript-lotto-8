import userInputMoney from "./utils/userInputMoney.js";
import printLottoCount from "./print/printLottoCount.js";
import userInputNumber from "./utils/userInputNumber.js";
import printLottoNumber from "./print/printLottoNumber.js";

class App {
  async run() {
    const purchaseAmount = await userInputMoney();
    const lottoCount = printLottoCount(purchaseAmount);
    printLottoNumber(lottoCount);
    const { winNumberArray, bonusNumber } = await userInputNumber();
  }
}

export default App;
