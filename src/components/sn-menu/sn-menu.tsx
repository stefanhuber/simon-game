import { Component } from '@stencil/core';

@Component({
    tag: 'sn-menu',
    styleUrl: 'sn-menu.css'
})
export class SimonMenu {

  render() {
    return (
        <main>
          <h1>Simon Game</h1>
          <div class="menu-item">  
              <stencil-route-link url="/game">Start game</stencil-route-link>
          </div>
          <div class="menu-item">  
              <stencil-route-link url="/highscore">Highscores</stencil-route-link>
          </div>
        </main>
    );
  }
}