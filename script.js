const counterData = {
    "マルファイト": ["イラオイ", "ガレン", "モルデカイザー"],
    "ダリウス": ["クイン", "ティーモ", "ヴェイン"],
    "ヤスオ": ["レネクトン", "パンテオン", "アニー"],
    "ティーモ": ["終わっている人間"]
};

function searchChampion() {
    const input = normalizeText(document.getElementById("championName").value);
    const result = document.getElementById("result");

    const champions = Object.keys(counterData);

    for (let i = 0; i < champions.length; i++) {
        const normalizedName = normalizeText(champions[i]);

        if (normalizedName.indexOf(input) !== -1) {
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

        if (normalizedName.indexOf(input) !== -1) {

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

    // 全角英数字 → 半角
    text = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 65248);
    });

    // ひらがな → カタカナ
    text = text.replace(/[\u3041-\u3096]/g, function(match) {
        return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });

    // Unicode正規化（超重要）
    text = text.normalize("NFKC");

    return text.trim();
}




function hiraganaToKatakana(text) {
    return text.replace(/[\u3041-\u3096]/g, function(match) {
        return String.fromCharCode(match.charCodeAt(0) + 0x60);
    });
}
