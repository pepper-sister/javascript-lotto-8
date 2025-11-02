import userInputMoney from "./utils/userInputMoney.js";
import printLottoNumber from "./print/printLottoNumber.js";
import userInputNumber from "./utils/userInputNumber.js";

class App {
  async run() {
    const purchaseAmount = await userInputMoney();
    printLottoNumber(purchaseAmount);
    const { winNumberArray, bonusNumber } = await userInputNumber();
  }
}

export default App;
