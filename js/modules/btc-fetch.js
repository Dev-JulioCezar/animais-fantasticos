export default function btcFetch() {
  
  fetch("https://www.blockchain.com/ticker")
    .then((r) => r.json())
    .then((bitcoin) => {
      const bitcoinBox = document.querySelector(".btc-preco")
      bitcoinBox.innerText = (1000 / bitcoin.BRL.sell).toFixed(4)
    }).catch((erro) => console.log(Error(erro)));
}

