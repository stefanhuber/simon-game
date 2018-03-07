import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
    tag: 'sn-app',
    styleUrl: 'sn-app.css'
})
export class SnApp {

  render() {
    return (
      <main>
          <stencil-router>
            <stencil-route url='/' component='sn-game'>
            </stencil-route>            
          </stencil-router>
      </main>
    );
  }
}
