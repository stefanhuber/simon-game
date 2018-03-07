export class Game {

    comparePatterns(userPattern:any[], pattern:any[]) : boolean {
        for (let i = 0; i < userPattern.length; i++) {
            if (userPattern[i] != pattern[i]) {
                return false;
            }
        }

        return true;
    }

    createNewStep() : number {
        return Math.ceil( Math.random() * 4 );
    }

}