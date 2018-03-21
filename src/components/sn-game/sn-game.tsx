import { Component, State, Listen, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';
import { Game } from '../../services/game';

@Component({
    tag: 'sn-game',
    styleUrl: 'sn-game.css'
})
export class SnGame {

    protected game:Game;
    protected userProposal;

    @Prop()
    history:RouterHistory;

    @State()
    animationPattern;

    @Listen('gamepadTouched')
    gamepadTouched(event: CustomEvent) {
        this.userProposal.push(event.detail);

        if (this.game.comparePatterns(this.userProposal, this.animationPattern)) {
            if (this.userProposal.length == this.animationPattern.length) {
                setTimeout(() => {
                    this.animationPattern = [
                        ...this.animationPattern ,
                        this.game.createNewStep()
                    ];
                    this.userProposal = [];  
                }, 500);                             
            }
        } else {
            this.history.replace(`/gameover/${ this.animationPattern.length - 1 }`, {});
        }
    }

    componentWillLoad() {
        this.game = new Game();
        this.userProposal = [];
        this.animationPattern = [ this.game.createNewStep() ];
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
