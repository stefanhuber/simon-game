import { Component, Prop, State, Listen, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
    tag : 'sn-gameboard' ,
    styleUrl : 'sn-gameboard.css'
})
export class SnGameboard {

    @Prop()
    animationPattern:number[];

    @State()
    step:number = 0;

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

            gamepads.push(<button onClick={ () => this.gamepadTouched.emit(i) } class={ classes }></button>);
        }

        return (
            <div class="gameboard">
                { gamepads }
            </div>
        );
    }
    
}