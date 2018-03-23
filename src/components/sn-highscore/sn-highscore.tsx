import { Component } from '@stencil/core';
import { Highscore } from '../../services/highscore';

@Component({
    tag: 'sn-highscore',
})
export class SnHighscore {

    render() {        
        let highscore = Highscore.getHighscore();
        let items = [];

        for (let item of highscore) {
            items.push(<p><b>{ item.score }:</b> { (new Date(item.date)).toLocaleDateString() }</p>);
        }

        return (
            <div>
                <header>
                    <h1>Highscore</h1>
                </header>
    
                <main>
                    { items }
                </main>
            </div>
        );
    }  

}