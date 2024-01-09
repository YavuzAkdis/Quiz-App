function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
  this.soruMetni = soruMetni;
  this.cevapSecenekleri = cevapSecenekleri;
  this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrol = function (cevap) {
  return cevap === this.dogruCevap;
};

let soru1 = new Soru(
  "Hangisi javascript paket yönetim uygulamasıdır?",
  { a: "Node.js", b: "Typescript", c: "Npm" },
  "c"
);
let soru2 = new Soru(
  "Hangisi .net paket yönetim uygulamasıdır?",
  { a: "Node.js", b: "Nuget", c: "Npm" },
  "b"
);

let sorular = [
  new Soru(
    "1-Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "2-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "3-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Soru(
    "4-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
Quiz.prototype.soruGetir = function () {
  return this.sorular[this.soruIndex];
};

const quiz = new Quiz(sorular);

document.querySelector(".btn-start").addEventListener("click", function () {
  document.querySelector(".quiz-box").classList.add("active");
  soruGöster(quiz.soruGetir());
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.sorular.lenght != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    soruGöster(quiz.soruGetir());
  } else {
    console.log("quiz bitti.");
  }
});

function soruGöster(soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = "";

  for (let cevap in soru.cevapSecenekleri) {
    options += `
        <div class="option">
            <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>
      `;
  }

  document.querySelector(".question_text").innerHTML = question;
  document.querySelector(".option_list").innerHTML = options;
}
