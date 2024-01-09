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
