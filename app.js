"use strict";

import { Deck } from "./Deck.js";
import { Card } from "./Card.js";

export const options = {
  values: ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"],
  suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
};

// instancier deck et cartes
// pk on lui passe l'objet des options eet pas directement 2 et heart
const deck = new Deck(options);
const carte = new Card(4, "Hearts");

deck.createFullDeck();
deck.shuffle();
deck.displayCards();

console.log(deck);
console.log(carte);
