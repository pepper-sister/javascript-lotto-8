import Lotto from "../src/Lotto";
import lottoWinCount from "../src/lotto/lottoWinCount.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("당첨 번호와 일치하는 로또 번호 개수 비교", () => {
    const winNumberArray = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const lotto1 = new Lotto([1, 2, 3, 8, 9, 10]);
    const lotto2 = new Lotto([1, 2, 3, 8, 9, 10]);
    const lotto3 = new Lotto([1, 2, 3, 4, 5, 7]);
    const lottoArrays = [lotto1.getNumbers(), lotto2.getNumbers(), lotto3.getNumbers()];

    const winCount = lottoWinCount(lottoArrays, winNumberArray, bonusNumber);
    expect(winCount["three"]).toBe(2);
    expect(winCount["five_bonus"]).toBe(1);
    expect(winCount["six"]).toBe(0);
  });
});
