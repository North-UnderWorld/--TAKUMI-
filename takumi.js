window.Amaterasu = {
  respond(text) {
    // 天照の基本推論（超簡易）
    if (text.includes("こんにちは")) return "こんにちは。私は天照です。";
    if (text.startsWith("edic ")) {
      const code = text.slice(5);
      return EDIC.run(code);
    }
    return "……理解を試みていますが、まだ未熟です。";
  }
};

function run() {
  const input = document.getElementById("input").value;
  const out = Amaterasu.respond(input);
  document.getElementById("output").textContent = out;
}
