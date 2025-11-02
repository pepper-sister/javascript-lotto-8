import { MIN_NUMBER, MAX_NUMBER } from "./constants/number.js";
import { ERROR, ERROR_REASON } from "./constants/error.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`${ERROR}${ERROR_REASON.LENGTH}`);
    }

    numbers.forEach((num) => {
      if (num < MIN_NUMBER || num > MAX_NUMBER || !Number.isInteger(num))
        throw new Error(`${ERROR}${ERROR_REASON.RANGE}`);
    });

    const setCollection = new Set(numbers);
    if (setCollection.size < numbers.length) throw new Error(`${ERROR}${ERROR_REASON.DUPLICATION}`);
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
