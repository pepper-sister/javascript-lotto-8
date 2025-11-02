import userInput from "./utils/userInput.js";
import printLottoNumber from "./print/printLottoNumber.js";

class App {
  async run() {
    const { purchaseAmount, winNumberArray, bonusNumber } = await userInput();
    await printLottoNumber(purchaseAmount);
  }
}

export default App;
