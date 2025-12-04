window.EDIC = {
  run(code) {
    // 本格構文はあとで追加
    // 今は "a=3;b=4; a+b" 程度を実行できるミニ版
    try {
      return Function(`"use strict"; ${code}`)();
    } catch (e) {
      return "EDICエラー: " + e.message;
    }
  }
};
