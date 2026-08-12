const sets = {

    2: [
        ["ship", "sheep"],
        ["sit", "seat"],
        ["live", "leave"],
        ["bit", "beat"],
        ["fill", "feel"]
    ],

    6: [
        ["cap", "cup"],
        ["bat", "but"],
        ["hat", "hut"],
        ["ran", "run"],
        ["fan", "fun"]
    ],

    10: [
        ["bed", "bad"],
        ["pen", "pan"],
        ["men", "man"],
        ["said", "sad"],
        ["send", "sand"]
    ],

    14: [
        ["ship", "chip"],
        ["shop", "chop"],
        ["sheep", "cheap"],
        ["share", "chair"],
        ["wash", "watch"]
    ],

    18: [
        ["free", "three"],
        ["fin", "thin"],
        ["fought", "thought"],
        ["four", "thaw"],
        ["fan", "than"]
    ],

    22: [
        ["cart", "curt"],
        ["barn", "burn"],
        ["heart", "hurt"],
        ["park", "perk"],
        ["hard", "heard"]
    ],

    26: [
        ["not", "note"],
        ["cot", "coat"],
        ["hop", "hope"],
        ["rob", "robe"],
        ["com", "comb"]
    ],

    30: [
        ["fool", "full"],
        ["pool", "pull"],
        ["Luke", "look"],
        ["food", "foot"],
        ["suit", "soot"]
    ],

    34: [
        ["cap", "carp"],
        ["hat", "heart"],
        ["bat", "Bart"],
        ["lack", "lark"],
        ["cat", "cart"]
    ]

};


function showSet(setNumber) {

    const pairsContainer = document.getElementById("pairs");

    const selectedSet = sets[setNumber];

    pairsContainer.innerHTML = "";

    selectedSet.forEach(pair => {

        const line = document.createElement("div");

        line.innerHTML = `
            <span class="first-word">${pair[0]}</span>
            <span class="dash">—</span>
            <span class="second-word">${pair[1]}</span>
        `;

        pairsContainer.appendChild(line);

    });


    document.querySelectorAll(".set-selector button").forEach(button => {
        button.classList.remove("active");
    });


    document
        .querySelector(`button[onclick="showSet(${setNumber})"]`)
        .classList.add("active");
}


/* Start with Set 2 */

showSet(2);
