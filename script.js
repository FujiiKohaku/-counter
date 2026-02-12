const counterData = {
    "マルファイト": ["イラオイ", "ガレン", "モルデカイザー"],
    "ダリウス": ["クイン", "ティーモ", "ヴェイン"],
    "ヤスオ": ["レネクトン", "パンテオン", "アニー"]
};

function searchChampion() {
    const input = normalizeText(document.getElementById("championName").value);
    const result = document.getElementById("result");

    const champions = Object.keys(counterData);

    for (let i = 0; i < champions.length; i++) {
        const normalizedName = normalizeText(champions[i]);

        if (normalizedName.includes(input)) {
            result.textContent = "カウンター: " + counterData[champions[i]].join(", ");
            return;
        }
    }

    result.textContent = "データがありません";
}

function showSuggestions() {
    const input = normalizeText(document.getElementById("championName").value);
    const suggestionsDiv = document.getElementById("suggestions");

    suggestionsDiv.innerHTML = "";

    if (input === "") {
        return;
    }

    const champions = Object.keys(counterData);

    for (let i = 0; i < champions.length; i++) {
        const normalizedName = normalizeText(champions[i]);

        if (normalizedName.includes(input)) {

            const div = document.createElement("div");
            div.textContent = champions[i];
            div.className = "suggestion-item";

            div.onclick = function() {
                document.getElementById("championName").value = champions[i];
                suggestionsDiv.innerHTML = "";
            };

            suggestionsDiv.appendChild(div);
        }
    }
}

function normalizeText(text) {
    return text
        .toLowerCase()
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) - 65248);
        })
        .trim();
}
