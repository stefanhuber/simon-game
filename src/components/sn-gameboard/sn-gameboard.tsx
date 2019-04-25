import { Component, Prop, State, Listen, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
    tag : 'sn-gameboard' ,
    styleUrl : 'sn-gameboard.css'
})
export class SnGameboard {
    
    get heading() {
        return this.isPlaying ? "Memorize the pattern" : "Replay the pattern";
    }

    get isPlaying() {
        return this.step < this.animationPattern.length;
    }

    @State()
    step:number = 0;

    @Prop()
    animationPattern:number[];
    
    @Watch('animationPattern')
    animationPatternChanged() {
        this.step = 0;
    }

    @Event()
    gamepadTouched: EventEmitter;

    @Listen('animationiteration')
    blinkFinished() {
        this.step += 1;
    }

    render() {
        let gamepads = [];

        for (let i = 1; i <= 4; i++) {
            let classes = {};
            classes['gamepad'] = true;
            classes['gamepad-' + i] = true;
            classes['blink'] = this.animationPattern[this.step] == i;

            if (this.isPlaying) {
                gamepads.push(<button class={ classes }></button>);
            } else {
                gamepads.push(<button onClick={ () => this.gamepadTouched.emit(i) } class={ classes }></button>);
            }          
        }

        return [
            <h2>{ this.heading }</h2>,
            <div class="gameboard">
                { gamepads }
            </div>
        ];
    }    
}
