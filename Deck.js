import { options } from "./app.js";
import { Card } from "./Card.js";

import shuffle from "./node_modules/lodash-es/shuffle.js";

export class Deck {
  constructor(options) {
    this.values = options.values;
    this.suits = options.suits;
  }

  //créer propriété cards qui stock un tableau, mais pk pas dans le constructeur ?????
  // et pk pas de constante devant ?
  #cards = [];

  //PAS COMPRIS - PAS REUSSIS SEULE :(
  // création de la méthode, une fois créer pas oublier de l'appeler pour app.js pour quelle s'execute
  createFullDeck = () => {
    // pour chaque valeur qui se trouve dans l'objet option ...
    this.values.forEach((v) => {
      // et pour chaque suite qui se trouve dans l'objet option...
      this.suits.forEach((s) => {
        // dans ce tableau cards poush la nouvelle carte créer
        this.#cards.push(new Card(v, s));
      });
    });
  };

  // mélanger les cartes

  shuffle = () => {
    this.#cards = shuffle(this.#cards);
  };

  // créer une méthode affiche
  displayCards = () => {
    // pour chaque element du tab cards applique la méthode affiche sur l'élément
    this.#cards.forEach((element) => {
      element.display();
    });
  };
}
