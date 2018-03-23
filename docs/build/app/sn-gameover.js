/*! Built with http://stenciljs.com */
const { h } = window.App;

import { Highscore } from './chunk1.js';

class SnGameover {
    componentDidLoad() {
        Highscore.addHighscore(this.match.params.count);
    }
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Game Over")),
            h("main", null,
                h("h2", null,
                    "Great you did ",
                    this.match.params.count,
                    " correct steps."),
                h("div", { class: "menu-item" },
                    h("stencil-route-link", { url: '/game' },
                        h("button", null, "Try again"))),
                h("div", { class: "menu-item" },
                    h("stencil-route-link", { url: "/" },
                        h("button", null, "Back to menu"))))));
    }
    static get is() { return "sn-gameover"; }
    static get properties() { return { "match": { "type": "Any", "attr": "match" } }; }
}

export { SnGameover };
