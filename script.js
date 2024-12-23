document.addEventListener("DOMContentLoaded", () => {
    const rollDiceButton = document.getElementById("rollDice");
    const diceResult = document.getElementById("diceResult");
    const cells = document.querySelectorAll(".cell"); // 全てのマスを取得
    let currentPosition = 0; // 初期位置をスタート地点に設定
  
    // 初期位置を強調
    cells[currentPosition].classList.add("active");
  
    rollDiceButton.addEventListener("click", () => {
      // 1から6までのランダムな数を生成
      const roll = Math.floor(Math.random() * 6) + 1;
      diceResult.textContent = `結果: ${roll}`;
  
      // 現在の位置の強調を解除
      cells[currentPosition].classList.remove("active");
  
      // 新しい位置を計算 (配列の範囲内に収める)
      currentPosition = (currentPosition + roll) % cells.length;
  
      // 新しい位置を強調
      cells[currentPosition].classList.add("active");
    });
  });
  