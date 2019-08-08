const state = {
  cardRanks: [
    { name: 'Ace', value: 11 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'Jack', value: 10 },
    { name: 'Queen', value: 10 },
    { name: 'King', value: 10 }
  ],
  cardSuits: ['Clubs', 'Diamonds', 'Hearts', 'Spades'],

  deck: [],
  playerHand: []
}

const createDeck = () => {
  for (let i = 0; i < state.cardSuits.length; i++) {
    const suit = state.cardSuits[i]
    for (let j = 0; j < state.cardRanks.length; j++) {
      const rank = state.cardRanks[j]
      state.deck.push({
        rank: rank.name,
        value: rank.value,
        suit: suit
      })
    }
  }
  console.log(state.deck)
}
const shuffleDeck = () => {
  for (let i = state.deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i)
    const firstArray = state.deck[i]
    const secondArray = state.deck[j]
    state.deck[i] = secondArray
    state.deck[j] = firstArray
  }
  console.log(state.deck)
}
const dealPlayerHand = () => {
  for (let i = 0; i < 3; i++) {
    // remove card from the deck
    const dealtCard = state.deck.pop()
    // add to the player hand
    state.playerHand.push(dealtCard)
  }
  console.log(state.playerHand)
}
const getPlayerHandTotal = () => {
  // go to each card
  let handTotal
  for (let i = 0; i < state.playerHand.length; i++) {
    const card = state.playerHand[i]
    // add the current card value to a hand total
    if (handTotal) {
      handTotal += card.value
    } else {
      handTotal = card.value
    }
  }
  // display the total
  console.log(handTotal)
}

const main = () => {
  createDeck()
  shuffleDeck()
  dealPlayerHand()
  getPlayerHandTotal()
}

document.addEventListener('DOMContentLoaded', main)
