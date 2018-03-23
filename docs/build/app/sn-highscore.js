/*! Built with http://stenciljs.com */
const { h } = window.App;

import { Highscore } from './chunk1.js';

class SnHighscore {
    render() {
        let highscore = Highscore.getHighscore();
        let items = [];
        for (let item of highscore) {
            items.push(h("p", null,
                h("b", null,
                    item.score,
                    ":"),
                " ",
                (new Date(item.date)).toLocaleDateString()));
        }
        return (h("div", null,
            h("header", null,
                h("h1", null, "Highscore")),
            h("main", null, items)));
    }
    static get is() { return "sn-highscore"; }
}

export { SnHighscore };
