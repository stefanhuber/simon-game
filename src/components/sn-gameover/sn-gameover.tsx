import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { Highscore } from '../../services/highscore';

@Component({
    tag: 'sn-gameover',
})
export class SnGameover {

    @Prop()
    match:MatchResults;

    componentDidLoad() {
        Highscore.addHighscore(this.match.params.count);
    }

    render() {        
        return (
            <main>
                <h1>Game Over</h1>
                <h3>Great you did { this.match.params.count } correct steps.</h3>
                <div class="menu-item">
                    <stencil-route-link url={'/game'}>Try again</stencil-route-link>
                </div>                
                <div class="menu-item">
                    <stencil-route-link url="/">Back to menu</stencil-route-link>
                </div>
            </main>            
        );
    }  

}