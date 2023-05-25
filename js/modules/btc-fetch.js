export default function btcFetch(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((bitcoin) => {
      const bitcoinBox = document.querySelector(target);
      bitcoinBox.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
