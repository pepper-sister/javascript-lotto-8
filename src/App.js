import userInput from "./utils/userInput.js";

class App {
  async run() {
    const { purchaseAmount, winNumberArray, bonusNumber } = await userInput();
  }
}

export default App;
