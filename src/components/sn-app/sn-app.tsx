import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
    tag: 'sn-app',
    styleUrl: 'sn-app.css'
})
export class SnApp {

  render() {
    return (
      <stencil-router>
        <stencil-route url='/' component='sn-menu' exact={true}>
        </stencil-route>  
        <stencil-route url='/game' component='sn-game'>
        </stencil-route> 
        <stencil-route url='/gameover/:count' component='sn-gameover'>
        </stencil-route>         
      </stencil-router>
    );
  }
}
