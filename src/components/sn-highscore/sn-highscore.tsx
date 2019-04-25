import { Component } from '@stencil/core';
import { Highscore } from '../../services/highscore';

@Component({
    tag: 'sn-highscore',
})
export class SnHighscore {

    render() {        
        let highscore = Highscore.getHighscore();
        let items = [];

        for (let i = 0; i < highscore.length; i++) {
            items.push(
                <div class="highscore-item">
                    <u>{ highscore[i].score } steps</u> on { (new Date(highscore[i].date)).toLocaleDateString() }
                </div>
            );
        }

        return (
            <main>
                <h1>Highscores</h1>
                { items }
                <div class="menu-item">  
                    <stencil-route-link url="/">Back</stencil-route-link>
                </div>
            </main>
        );
    }  

}