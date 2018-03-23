export class Highscore {

    static getHighscore() : any[] {
        return JSON.parse(localStorage.getItem('highscore'));
    }

    static addHighscore(count:any) {
        let highscore = JSON.parse(localStorage.getItem('highscore'));

        if (!highscore) {
            highscore = [];
        }

        let now = new Date();
        highscore.push({ score: count, date: now.getTime() });

        highscore.sort((a, b) => {
            if (a.score > b.score) {
                return -1;
            } else if (a.score < b.score) {
                return 1;
            } else {
                return 0;
            }
        });

        if (highscore.length > 3) {
            highscore.length = 3;
        }

        localStorage.setItem('highscore', JSON.stringify(highscore));
    }

}