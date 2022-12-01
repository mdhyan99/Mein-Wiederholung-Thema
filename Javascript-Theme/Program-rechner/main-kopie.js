const form = document.querySelector("form");

const feld1 = document.querySelector("#feld1");
const feld2 = document.querySelector("#feld2");
const feld3 = document.querySelector("#feld3");
const feld4 = document.querySelector("#feld4");
const feld5 = document.querySelector("#feld5");
const feld6 = document.querySelector("#feld6");
const feld7 = document.querySelector("#feld7");
const feld8 = document.querySelector("#feld8");
const Product_Preis_1 = 1000;
const Product_Preis_2 = 2000;
const Product_Preis_3 = 3000;
const Product_Preis_4 = 4000;
const Product_Preis_5 = 5000;
const Product_Preis_6 = 6000;
const sub = document.querySelector(".sub");
sub.addEventListener("click", () => {
    console.log(Product_Preis_2);
    const feld = form.elements.feld.value;

    const feld11 = feld1.value;
    console.log(feld1);
    const feld22 = feld2.value;
    const feld33 = feld3.value;
    const TagSumme = document.querySelector("#feld7");
    TagSumme.innerText = feld11 + feld22 + feld33;
    form.appendChild(TagSumme);
});

// const ersteDay = function () {
//     const ersteTag =
//         51 +
//         182 +
//         (2987000 / 4660) +
//         (405000 / 4550) +
//         2 +
//         (820000 / 4720) +
//         1 +
//         (207000 / 3055) +
//         2 +
//         (893000/4725)
//         +1
//         +(428000/ 4820
//         )+
//         (1350000/4750)+2
//         +
//         (300000/4600) +1+
//         (1000000/4640) +1
//         +(443000/4650)+1
//         +(1075000/4730)+1
//         +(425000/4725)+1
//         +(630000/4800)+1
//         +(21200/4610)+2
//         +(425000/4740)+1
//         +(868000/4770)+1
//         +(204000/4550)+2
//         +500;
//     console.log(ersteTag);
// // };
// ersteDay();
