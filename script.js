const words = [
  "sagaz",

  "âmago",

  "negro",

  "termo",

  "êxito",

  "mexer",

  "nobre",

  "senso",

  "afeto",

  "algoz",

  "ética",

  "plena",

  "fazer",

  "tênue",

  "mútua",

  "assim",

  "vigor",

  "sutil",

  "aquém",

  "porém",

  "seção",

  "fosse",

  "poder",

  "sobre",

  "sanar",

  "ideia",

  "audaz",

  "cerne",

  "inato",

  "moral",

  "desde",

  "muito",

  "justo",

  "quiçá",

  "honra",

  "torpe",

  "sonho",

  "razão",

  "fútil",

  "etnia",

  "ícone",

  "amigo",

  "anexo",

  "égide",

  "tange",

  "lapso",

  "haver",

  "dengo",

  "expor",

  "tempo",

  "então",

  "mútuo",

  "seara",

  "casal",

  "boçal",

  "hábil",

  "saber",

  "ávido",

  "ardil",

  "pesar",

  "graça",

  "dizer",

  "causa",

  "óbice",

  "genro",

  "dever",

  "coser",

  "pária",

  "posse",

  "tenaz",

  "sendo",

  "brado",

  "prole",

  "crivo",

  "comum",

  "temor",

  "ainda",

  "xibiu",

  "estar",

  "corja",

  "ápice",

  "detém",

  "ânimo",

  "ceder",

  "assaz",

  "pauta",

  "ânsia",

  "culto",

  "digno",

  "fugaz",

  "censo",

  "mundo",

  "atroz",

  "gleba",

  "forte",

  "vício",

  "vulgo",

  "cozer",

  "valha",

  "denso",

  "criar",

  "revés",

  "neném",

  "saúde",

  "mesmo",

  "pudor",

  "dogma",

  "jeito",

  "regra",

  "louco",

  "todos",

  "atrás",

  "ordem",

  "mercê",

  "round",

  "impor",

  "banal",

  "homem",

  "clava",

  "feliz",

  "pedir",

  "limbo",

  "coisa",

  "usura",

  "apraz",

  "juízo",

  "sábio",

  "servo",

  "tenro",

  "forma",

  "desse",

  "prosa",

  "pífio",

  "presa",

  "falar",

  "ontem",

  "viril",

  "cunho",

  "posso",

  "certo",

  "devir",

  "vendo",

  "manso",

  "reaça",

  "herói",

  "meiga",

  "valor",

  "ébrio",

  "mágoa",

  "legal",

  "falso",

  "visar",

  "sério",

  "fluir",

  "acaso",

  "puder",

  "fácil",

  "afago",

  "guisa",

  "platô",

  "ajuda",

  "lugar",

  "temer",

  "ímpio",

  "abrir",

  "garbo",

  "linda",

  "afins",

  "cisma",

  "obter",

  "praxe",

  "gerar",

  "óbvio",

  "bruma",

  "pleno",

  "burro",

  "matiz",

  "êxodo",

  "crise",

  "união",

  "havia",

  "fluxo",

  "vênia",

  "senil",

  "tédio",

  "ritmo",

  "enfim",

  "tomar",

  "morte",

  "visão",

  "olhar",

  "levar",

  "brega",

  "prumo",

  "parvo",

  "casta",

  "álibi",

  "gênio",

  "favor",

  "bravo",

  "vital",

  "pulha",

  "reles",

  "reter",

  "vivaz",

  "falta",

  "parco",

  "valia",

  "cabal",

  "ouvir",

  "tecer",

  "grato",

  "laico",

  "ameno",

  "sábia",

  "calma",

  "possa",

  "outro",

  "viver",

  "noção",

  "carma",

  "força",

  "passo",

  "ranço",

  "tendo",

  "nicho",

  "achar",

  "único",

  "terra",

  "noite",

  "prime",

  "pobre",

  "façam",

  "óbito",

  "rever",

  "rogar",

  "fator",

  "fardo",

  "selar",

  "ativo",

  "farsa",

  "coeso",

  "anelo",

  "épico",

  "dúbio",

  "citar",

  "sinto",

  "cisão",

  "leigo",

  "sesta",

  "sonso",

  "adiar",

  "ciúme",

  "claro",

  "haste",

  "gente",

  "cesta",

  "humor",

  "tende",

  "deter",

  "velho",

  "revel",

  "atuar",

  "papel",

  "sulco",

  "líder",

  "exato",

  "vemos",

  "amplo",

  "ideal",

  "nossa",

  "árduo",

  "igual",

  "feixe",

  "labor",

  "ponto",

  "marco",

  "fonte",

  "lavra",

  "ficar",

  "terno",

  "débil",

  "vazio",

  "hiato",

  "gesto",

  "imune",

  "ótica",

  "cauda",

  "senão",

  "remir",

  "ambos",

  "capaz",

  "varão",

  "vácuo",

  "jovem",

  "tanto",

  "toada",

  "sonsa",

  "inata",

  "tenra",

  "apoio",

  "coçar",

  "velar",

  "relva",

  "caçar",

  "algum",

  "xeque",

  "série",

  "ciclo",

  "raiva",

  "horda",

  "pouco",

  "vimos",

  "farão",

  "fusão",

  "leito",

  "advém",

  "probo",

  "entre",

  "doido",

  "feito",

  "sente",

  "chuva",

  "coesa",

  "minha",

  "frase",

  "torço",

  "anuir",

  "verso",

  "cruel",

  "botar",

  "rigor",

  "brisa",

  "trama",

  "carro",

  "ímpar",

  "blasé",

  "massa",

  "chata",

  "prece",

  "dorso",

  "maior",

  "lazer",

  "signo",

  "pegar",

  "moção",

  "fauna",

  "credo",

  "covil",

  "seita",

  "preso",

  "sorte",

  "furor",

  "casto",

  "morar",

  "flora",

  "peste",

  "ambas",

  "dócil",

  "livro",

  "vetor",

  "adeus",

  "faina",

  "houve",

  "senda",

  "árido",

  "comer",

  "plano",

  "liame",

  "setor",

  "pecha",

  "vírus",

  "nunca",

  "ocaso",

  "manha",

  "saiba",

  "aliás",

  "meses",

  "peixe",

  "ardor",

  "visse",

  "beata",

  "praia",

  "salvo",

  "aceso",

  "vulto",

  "vasto",

  "antro",

  "breve",

  "mudar",

  "rezar",

  "pajem",

  "banzo",

  "morro",

  "saída",

  "agora",

  "parte",

  "junto",

  "reger",

  "ótimo",

  "prado",

  "birra",

  "campo",

  "avaro",

  "sinal",

  "risco",

  "segue",

  "áureo",

  "grupo",

  "motim",

  "anais",

  "serão",

  "lenda",

  "andar",

  "chulo",

  "acima",

  "antes",

  "opção",

  "átomo",

  "fugir",

  "nação",

  "leite",

  "brava",

  "treta",

  "rapaz",

  "vilão",

  "parar",

  "fruir",

  "conta",

  "ídolo",

  "fitar",

  "estão",

  "jazia",

  "texto",

  "prazo",

  "áurea",

  "tenso",

  "verbo",

  "gerir",

  "puxar",

  "reino",

  "tirar",

  "alude",

  "oxalá",

  "norma",

  "índio",

  "tosco",

  "exame",

  "época",

  "bando",

  "traga",

  "malta",

  "anciã",

  "festa",

  "prova",

  "psico",

  "filho",

  "corpo",

  "arcar",

  "átrio",

  "sinhá",

  "preto",

  "aonde",

  "avião",

  "turba",

  "fatal",

  "cheio",

  "voraz",

  "praga",

  "acesa",

  "quase",

  "venal",

  "sarça",

  "certa",

  "fatos",

  "quota",

  "cópia",

  "logro",

  "manhã",

  "ligar",

  "apego",

  "fixar",

  "oásis",
];

function getRandomWord() {
  const randomN = Math.floor(Math.random() * words.length);

  return words[randomN];
}
let actualWord = getRandomWord();
let word = actualWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

async function checkWordExistence(wordToCheck) {
  const jsonDataWord = (
    await fetch("https://api.dicionario-aberto.net/" + wordToCheck, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },

      mode: "cors",

      credentials: "include",
    })
  ).json();

  jsonDataWord.then((data) => {
    if (data.word) {
      return true;
    } else {
      return false;
    }
  });
}

let letters = [];

function printTables() {
  const template = `
    <table border="1">

    <tr id="1" class="c-1 highlight">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

<tr id="2"  class="c-2">

        <td></td>

        <td></td>

        <td></td>

    <td></td>

        <td></td>

</tr>

<tr id="3"  class="c-3">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

<tr id="4"  class="c-4">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

    <tr id="5"  class="c-5">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

</table>
    `;

  const mainContainer = document.querySelector("main");

  mainContainer.innerHTML = template;
}

printTables();

let counter = 0;

function checkLetter() {
  const input = document.querySelector("input").value.toLowerCase();
  document.querySelector("input").value = "";
  document.querySelector("input").focus();
  counter++;
  if (input === word && input.length == word.length) {
    document.querySelector("h1").innerText = "🥳 Parabéns: " + actualWord;
    return;
  } else if (counter == 5) {
    document.querySelector("h1").innerText = "❌ Game over: " + actualWord;
    counter = 5;
  } else if (counter >= 6) {
    return;
  }

  let template = ``;

  for (let i = 0; i < 5; ++i) {
    letters.push(input[i]);
    template += `
        <td>

            ${input[i]}

        
        </td>
    `;
  }
  printGoneLetters(letters);
  const placeToAdd = document.getElementById(`${counter}`);

  placeToAdd.innerHTML = template;
  const allRows = document.querySelectorAll("tr");
  allRows[counter - 1].className = "c-" + (counter + 1);
  for (let i = 0; i < 5; ++i) {
    allRows[i].className = `c-${i + 1}`;
  }

  if (counter == 5) {
    allRows[counter - 1].className += " highlight";
  } else {
    allRows[counter].className += " highlight";
  }

  printTableAnimations();

  setTimeout(() => {
    checkLettersIncidence(counter, placeToAdd);
  }, 200);
}

function checkLettersIncidence(row, rowEl) {
  const letters = [...word];
  const roww = [...document.querySelectorAll(`tr.c-${row} td`)];
  const lettersOfRowEl = roww.map((td) => td.innerHTML);

  for (let i = 0; i < letters.length; ++i) {
    console.log(letters[i]);
    console.log(lettersOfRowEl[i]);
    console.log(letters.indexOf(lettersOfRowEl[i].trim()));

    if (letters.indexOf(lettersOfRowEl[i].trim()) != -1) {
      roww[i].className += " yellow";

      for (let x = 0; x < i; ++x) {
        if (
          roww[x].classList.contains("green") &&
          roww[x].innerText.toLowerCase() === lettersOfRowEl[i].trim()
        ) {
          console.log("OOEOE");
          roww[i].className = "";
        }
      }
    }

    if (lettersOfRowEl[i].trim() == letters[i].trim()) {
      roww[i].className += " green";

      for (let x = 0; x < i; ++x) {
        console.log(lettersOfRowEl[i].trim());
        console.log(roww[x].innerHTML + " <<<");
        console.log("<<<<<<<<<<OOEOE>>>>>>>>>>");

        if (
          roww[x].classList.contains("yellow") &&
          roww[x].innerText.toLowerCase() === lettersOfRowEl[i].trim()
        ) {
          roww[x].className = "";
        }
      }
    }

    // if (
    //   lettersOfRowEl[i].trim() !== letters[i].trim() &&
    //   letters.indexOf(lettersOfRowEl[i].trim()) == -1
    // ) {
    //   roww[i].className += " red";
    // }
  }
}

function printGoneLetters(arr) {
  noRepeat = Array.from(new Set(arr.join(" ")));
  document.querySelector("section.letters-gone").innerText = " ";
  document.querySelector("section.letters-gone").innerHTML +=
    noRepeat.join(" - ");
}

function reloadPage() {
  window.location.reload();
}

function printTableAnimations() {
  const allTds = document.querySelectorAll("td");
  let counter = 0;

  let timer = setInterval(() => {
    allTds[counter].style.visibility = "visible";
    allTds[counter].style.transition = "100ms linear";
    counter++;

    if (counter >= allTds.length) {
      clearInterval(timer);
    }
  }, 20);
}
printTableAnimations();

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Form submission prevented.");
});
