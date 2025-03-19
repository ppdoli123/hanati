

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      let num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b); // 정렬된 결과 반환
  }

  const lotto_num1 = document.querySelector('.lotto_context');
  const lastWeekLotto = [3, 12, 19, 25, 33, 41];
  const go = document.querySelector(".go");
  go.addEventListener("click" ,()=> {
    lotto_num1.innerHTML = "";
    const numberN = document.querySelector(".lotto_num");
  for(let E = 0 ; E < numberN.value ; E ++){
    const myNumbers = generateLottoNumbers();
    const matchCount = myNumbers.filter(num => lastWeekLotto.includes(num)).length;

    const lottoNumElement = document.createElement("div");
    lottoNumElement.textContent = `예측 번호: ${myNumbers.join(", ")} | 맞춘 개수: ${matchCount}개`;
    lotto_num1.appendChild(lottoNumElement);
    console.log(lotto_num1);
    }
  })