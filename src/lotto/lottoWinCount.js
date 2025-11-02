export default function lottoWinCount(lottoArrays, winNumberArray, bonusNumber) {
  let winCount = {
    three: 0,
    four: 0,
    five: 0,
    five_bonus: 0,
    six: 0,
  };

  lottoArrays.forEach((lottoArray) => {
    let matchCount = 0;
    lottoArray.forEach((num) => {
      if (winNumberArray.includes(num)) matchCount++;
    });

    if (matchCount === 6) return winCount.six++;
    if (matchCount === 5 && lottoArray.includes(bonusNumber)) return winCount.five_bonus++;
    if (matchCount === 5) return winCount.five++;
    if (matchCount === 4) return winCount.four++;
    if (matchCount === 3) return winCount.three++;
  });

  return winCount;
}
