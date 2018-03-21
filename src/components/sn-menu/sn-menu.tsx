import { Component } from '@stencil/core';

@Component({
    tag: 'sn-menu'
})
export class SimonMenu {

  render() {
    return (
      <div>
        <header>
            <h1>Simon Game</h1>
        </header>

        <main>

          <div class="menu-item">  
              <stencil-route-link url="/game">
                  <button>Start game</button>
              </stencil-route-link>
          </div>

          <div class="menu-item">  
              <stencil-route-link url="">
                  <button>Highscores</button>
              </stencil-route-link>
          </div>

        </main>
      </div>
    );
  }
}