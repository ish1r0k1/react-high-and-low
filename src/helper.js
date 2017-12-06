export class PlayCards {
  constructor() {
    this.initialize()
  }

  initialize() {
    this.deck = []

    const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

    // Standard
    for (let i = 4 - 1; i >= 0; i--) {
      Array.prototype.push.apply(this.deck, cards)
    }

    // Joker
    Array.prototype.push.apply(this.deck, ['Joker', 'Joker'])
  }

  shuffle() {
    let d = this.deck

    for (let i = d.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const k = d[i];
        d[i] = d[j];
        d[j] = k;
    }

    return this.deck = d
  }

  draw(len = 1) {
    return this.deck.splice(0, len)
  }

  remain() {
    return this.deck.length
  }
}
