const counterData = {
    "マルファイト": ["イラオイ", "ガレン", "モルデカイザー"],
    "ダリウス": ["クイン", "ティーモ", "ヴェイン"],
    "ヤスオ": ["レネクトン", "パンテオン", "アニー"]
};

function searchChampion() {
    const input = document.getElementById("championName").value;
    const result = document.getElementById("result");

    if (counterData[input]) {
        result.textContent = "カウンター: " + counterData[input].join(", ");
    } else {
        result.textContent = "データがありません";
    }
}
