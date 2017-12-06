import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayCards } from './helper'

class App extends Component {
  constructor(props) {
    super(props)

    const deck = new PlayCards

    this.state = {
      remainCard: deck.remain(),
      deck,
      currentCards: [null, null],
      winingOrLosing: null
    }

    this.handleClickHigh = this.handleClickHigh.bind(this)
    this.handleClickLow = this.handleClickLow.bind(this)
    this.handleClickNext = this.handleClickNext.bind(this)
  }

  drawCard() {
    this.state.deck.shuffle()
    const drawCards = this.state.deck.draw(2)

    this.setState({
      currentCards: drawCards
    })
  }

  componentWillMount() {
    this.drawCard()
    this.updateRemain()
  }

  updateRemain() {
    this.setState({ remainCard: this.state.deck.remain() })
  }

  compare(selected) {
    const { currentCards } = this.state
    const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const n = [cards.indexOf(currentCards[0]), cards.indexOf(currentCards[1])]
    let compared = ''

    if (n[0] === n[1]) {
      compared = 'DRAW'
    } else if (n[0] < n[1] || n[1] === -1) {
      compared = 'HIGH'
    } else {
      compared = 'LOW'
    }

    const winingOrLosing = selected === compared ? 'WIN' : 'LOSE'

    this.setState({ winingOrLosing })
  }

  handleClickHigh() {
    this.compare('HIGH')
  }

  handleClickLow() {
    this.compare('LOW')
  }

  handleClickNext() {
    this.drawCard()
    this.updateRemain()
    this.setState({ winingOrLosing: null })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Card: {`${this.state.currentCards[0]}, ${this.state.winingOrLosing ? this.state.currentCards[1] : '*'}`}</div>
          <div>Result: {this.state.winingOrLosing}</div>
          <div>Remain: {this.state.remainCard}</div>
        </header>
        <p>
          <button onClick={this.handleClickHigh}>High</button> <button onClick={this.handleClickLow}>Low</button><br/>
          <button onClick={this.handleClickNext}>Next</button>
        </p>
      </div>
    );
  }
}

export default App;
