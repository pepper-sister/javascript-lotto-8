import userInputMoney from "./utils/userInputMoney.js";
import printLottoCount from "./print/printLottoCount.js";
import userInputNumber from "./utils/userInputNumber.js";

class App {
  async run() {
    const purchaseAmount = await userInputMoney();
    printLottoCount(purchaseAmount);
    const { winNumberArray, bonusNumber } = await userInputNumber();
  }
}

export default App;
