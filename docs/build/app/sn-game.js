/*! Built with http://stenciljs.com */
const { h } = window.App;

class Game {
    comparePatterns(userPattern, pattern) {
        for (let i = 0; i < userPattern.length; i++) {
            if (userPattern[i] != pattern[i]) {
                return false;
            }
        }
        return true;
    }
    createNewStep() {
        return Math.ceil(Math.random() * 4);
    }
}

class SnGame {
    gamepadTouched(event) {
        this.userProposal.push(event.detail);
        if (this.game.comparePatterns(this.userProposal, this.animationPattern)) {
            if (this.userProposal.length == this.animationPattern.length) {
                setTimeout(() => {
                    this.animationPattern = [
                        ...this.animationPattern,
                        this.game.createNewStep()
                    ];
                    this.userProposal = [];
                }, 500);
            }
        }
        else {
            this.history.replace(`/gameover/${this.animationPattern.length - 1}`, {});
        }
    }
    componentWillLoad() {
        this.game = new Game();
        this.userProposal = [];
        this.animationPattern = [this.game.createNewStep()];
    }
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Simon Game")),
            h("main", null,
                h("sn-gameboard", { animationPattern: this.animationPattern }))));
    }
    static get is() { return "sn-game"; }
    static get properties() { return { "animationPattern": { "state": true }, "history": { "type": "Any", "attr": "history" } }; }
    static get style() { return ""; }
}

class SnGameboard {
    constructor() {
        this.step = 0;
    }
    animationPatternChanged() {
        this.step = 0;
    }
    blinkFinished() {
        this.step += 1;
    }
    get heading() {
        return this.isPlaying ? "Memorize the pattern" : "Replay the pattern";
    }
    get isPlaying() {
        return this.step < this.animationPattern.length;
    }
    render() {
        let gamepads = [];
        for (let i = 1; i <= 4; i++) {
            let classes = {};
            classes['gamepad'] = true;
            classes['gamepad-' + i] = true;
            classes['blink'] = this.animationPattern[this.step] == i;
            if (this.isPlaying) {
                gamepads.push(h("button", { class: classes }));
            }
            else {
                gamepads.push(h("button", { onClick: () => this.gamepadTouched.emit(i), class: classes }));
            }
        }
        return (h("section", null,
            h("h2", null, this.heading),
            h("div", { class: "gameboard" }, gamepads)));
    }
    static get is() { return "sn-gameboard"; }
    static get properties() { return { "animationPattern": { "type": "Any", "attr": "animation-pattern", "watchCallbacks": ["animationPatternChanged"] }, "step": { "state": true } }; }
    static get events() { return [{ "name": "gamepadTouched", "method": "gamepadTouched", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return ".gameboard {\n    display:flex;\n    flex-wrap: wrap;    \n    max-width: 500px;\n    min-width: 300px;\n    width:60vw;\n}\n.gamepad {\n    border: 2px solid black;\n    border-radius: 15px;\n    flex-basis: 40%;\n    padding:20% 0;\n    margin:5%;\n}\n.gamepad:focus, .gamepad:active {\n    outline: none;\n}\n.gamepad:active {\n    opacity: 0.4;\n}\n.gamepad-1 {\n    background:yellow;\n}\n.gamepad-2 {\n    background: red;\n}\n.gamepad-3 {\n    background: green;\n}\n.gamepad-4 {\n    background: blue;\n}\n\n.blink {\n    animation-name: blink;\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n}\n\n\@keyframes blink {\n    0% {\n        opacity: 1;\n    }\n    25% {\n        opacity: 0.4;\n    }\n    50% {\n        opacity:1;\n    }\n}\n"; }
}

export { SnGame, SnGameboard };
