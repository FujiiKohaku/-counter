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
function showSuggestions() {
    const input = document.getElementById("championName").value;
    const suggestionsDiv = document.getElementById("suggestions");

    suggestionsDiv.innerHTML = "";

    if (input === "") {
        return;
    }

    const champions = Object.keys(counterData);

    for (let i = 0; i < champions.length; i++) {
        if (champions[i].startsWith(input)) {

            const div = document.createElement("div");
            div.textContent = champions[i];

            div.onclick = function() {
                document.getElementById("championName").value = champions[i];
                suggestionsDiv.innerHTML = "";
            };

            suggestionsDiv.appendChild(div);
        }
    }
}
