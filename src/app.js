/* eslint-disable */

import "./style.css";



window.onload = function() {
  //write your code here
// Función para generar una lista de tarjetas aleatorias
function generateRandomCards(numCards) {
  const suits = ["♠", "♥", "♦", "♣"];
  const cards = [];

  for (let i = 0; i < numCards; i++) {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomNumber = Math.floor(Math.random() * 13) + 1;
    cards.push(randomNumber + randomSuit);
  }

  return cards;
}

// Función para dibujar las tarjetas en el contenedor
function drawCards(cards) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.textContent = cards[i];
    cardContainer.appendChild(cardElement);
  }
}

// Función para ordenar las tarjetas usando el algoritmo de clasificación bubble
function sortCards(cards) {
  const sortedCards = [...cards];
  const numCards = sortedCards.length;

  for (let i = 0; i < numCards - 1; i++) {
    for (let j = 0; j < numCards - 1 - i; j++) {
      const card1 = parseInt(sortedCards[j]);
      const card2 = parseInt(sortedCards[j + 1]);

      if (card1 > card2) {
        const temp = sortedCards[j];
        sortedCards[j] = sortedCards[j + 1];
        sortedCards[j + 1] = temp;
      }
    }
  }

  return sortedCards;
}

// Función para mostrar el registro de cambios
function showLog(log) {
  const logContainer = document.getElementById("logContainer");
  logContainer.innerHTML = "";

  for (let i = 0; i < log.length; i++) {
    const logEntry = document.createElement("div");
    logEntry.textContent = log[i];
    logContainer.appendChild(logEntry);
  }
}

// Manejar el evento de clic en el botón de sorteo
document.getElementById("drawButton").addEventListener("click", function() {
  const numCardsInput = document.getElementById("numCardsInput");
  const numCards = parseInt(numCardsInput.value);

  if (isNaN(numCards) || numCards <= 0) {
    alert("Ingrese un número válido de tarjetas.");
    return;
  }

  const cards = generateRandomCards(numCards);
  drawCards(cards);
});

// Manejar el evento de clic en el botón de clasificación
document.getElementById("sortButton").addEventListener("click", function() {
  const numCardsInput = document.getElementById("numCardsInput");
  const numCards = parseInt(numCardsInput.value);

  if (isNaN(numCards) || numCards <= 0) {
    alert("Ingrese un número válido de tarjetas.");
    return;
  }

  const cards = generateRandomCards(numCards);
  const sortedCards = sortCards(cards);
  const log = ["Tarjetas generadas: " + cards.join(", "), "Tarjetas clasificadas: " + sortedCards.join(", ")];
  showLog(log);
});

};
