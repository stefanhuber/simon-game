import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
    tag: 'sn-app',
})
export class SnApp {
  render() {
    return (
      <stencil-router root="/simon-game/">
        <stencil-route url='/' component='sn-menu' exact={true}>
        </stencil-route>  
        <stencil-route url='/game' component='sn-game'>
        </stencil-route> 
        <stencil-route url='/gameover/:count' component='sn-gameover'>
        </stencil-route>      
        <stencil-route url='/highscore' component='sn-highscore'>
        </stencil-route>   
      </stencil-router>
    );
  }
}
