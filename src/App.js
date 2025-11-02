import userInput from "./utils/userInput.js";

class App {
  async run() {
    const { purchaseAmount, winNumber, bonusNumber } = await userInput();
  }
}

export default App;
