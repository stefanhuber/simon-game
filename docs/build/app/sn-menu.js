/*! Built with http://stenciljs.com */
const { h } = window.App;

class SimonMenu {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Simon Game")),
            h("main", null,
                h("div", { class: "menu-item" },
                    h("stencil-route-link", { url: "/game" },
                        h("button", null, "Start game"))),
                h("div", { class: "menu-item" },
                    h("stencil-route-link", { url: "/highscore" },
                        h("button", null, "Highscores"))))));
    }
    static get is() { return "sn-menu"; }
}

export { SimonMenu as SnMenu };
