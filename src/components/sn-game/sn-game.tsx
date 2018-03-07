import { Component, State, Listen } from '@stencil/core';
import { Game } from '../../services/game';

@Component({
    tag: 'sn-game',
    styleUrl: 'sn-game.css'
})
export class SnGame {

    game = new Game();
    userProposal = [];

    @State()
    animationPattern = [1,2,3,4];

    @Listen('gamepadTouched')
    gamepadTouched(event: CustomEvent) {
        this.userProposal.push(event.detail);

        if (this.game.comparePatterns(this.userProposal, this.animationPattern)) {
            if (this.userProposal.length == this.animationPattern.length) {
                
                this.animationPattern = [
                    ...this.animationPattern ,
                    this.game.createNewStep()
                ];
                this.userProposal = [];
                
            }
        } else {
            console.log("leider falsch");
        }
    }

    render() {
      return (
        <div>
          <header>
            <h1>Simon Game</h1>
          </header>

          <main>
            <sn-gameboard animationPattern={ this.animationPattern }></sn-gameboard>
          </main>
        </div>
      );
    }
}
