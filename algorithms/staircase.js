//Return a staircase shape made of #s where n = the length of the base, and the height of the staircase
//All staircase tiers < n preceded by amount of spaces: n - tier length

function staircase(n) {
    for (let level = 1; level <= height; level++) {
        let spaces = height - level;
        let hashTag = level;
        let levelString = '';

        for (let i = 0; i < spaces; i++) {
            levelString += ' ';
        }

        for (let i = 0; i < hashTag; i++) {
            levelString += '#';
        }

        console.log(levelString);
    }
}