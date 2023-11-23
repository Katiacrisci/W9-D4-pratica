fetch("https://mocki.io/v1/765b2daf-41d5-4e94-a0d5-abd918f57b8f")
  .then(response => response.json())
  .then(result => {
    console.log(result);
    for (let i = 0; i< result.length; i++) {
      const element = result[i];
      const item = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
       console.log(item.getSaldoCapo());
       console.log(item.getAcquistoCapo());
    }

  }) 

  .catch(error => console.log("error", error));

class Abbigliamento {
  id: number;
  codprod: number;
  collezione: string;
  capo: string;
  modello: number;
  quantita: number;
  colore: string;
  prezzoivaesclusa: number;
  prezzoivainclusa: number;
  disponibile: string;
  saldo: number;

  constructor(
    _id: number,
    _codprod: number,
    _collezione: string,
    _capo: string,
    _modello: number,
    _quantita: number,
    _colore: string,
    _prezzoivaesclusa: number,
    _prezzoivainclusa: number,
    _disponibile: string,
    _saldo: number
  ) {
    this.id = _id;
    this.codprod = _codprod;
    this.collezione = _collezione;
    this.capo = _capo;
    this.modello = _modello;
    this.quantita = _quantita;
    this.colore = _colore;
    this.prezzoivaesclusa = _prezzoivaesclusa;
    this.prezzoivainclusa = _prezzoivainclusa;
    this.disponibile = _disponibile;
    this.saldo = _saldo;
  }

  getSaldoCapo(): number {
    return (this.prezzoivainclusa - this.saldo) / 100;
  }
  getAcquistoCapo(): number {
    return this.prezzoivainclusa - this.getSaldoCapo();
  }
}
