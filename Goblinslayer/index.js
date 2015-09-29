/**
 * Created by session2 on 9/28/15.
 */
var slaying = true;
// Changed the enemy to a goblin.

var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;


while (slaying) {
    if (youHit) {
        console.log("You hit the goblin and did " + damageThisRound + " damage!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("You did it! You slew the goblin!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        // Changed the function so that you don't instantly die upon missing.
        console.log("You missed!");
        slaying = false
    }
}
// Added a goblin attack by copying the original code and changing the variables.
var gSlaying = true

var goblinHit = Math.floor(Math.random() * 2);
var gDamageThisRound = Math.floor(Math.random() * 5 + 1);
var gTotalDamage = 0;

while (gSlaying) {
    if (goblinHit) {
        console.log("The goblin hit you and did " + gDamageThisRound + " damage!");
        gTotalDamage += gDamageThisRound;

        if (gTotalDamage >= 4) {
            console.log("The goblin killed you!");
            gSlaying = false;
        } else {
            goblinHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("It missed!");
        gSlaying = false;
    }
}