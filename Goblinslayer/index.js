/**
 * Created by session2 on 9/28/15.
 */
    // Added a "story" to the game.
var knight = prompt("You're galloping through the forest, and you run into the dreaded Great Goblin of the Grassy Green Grove. Do you FIGHT him, or RUN?").toUpperCase();

switch (knight) {
    case 'FIGHT':
        var head = prompt("How courageous! Are you ready? (YES or NO)").toUpperCase();

        if (head === 'YES') {
            alert("Lets fight.");

            var slaying = true;
// Changed the enemy to a goblin.

            var youHit = Math.floor(Math.random() * 2);
            var damageThisRound = Math.floor(Math.random() * 5 + 1);
            var totalDamage = 0;


            while (slaying) {
                if (youHit) {
                    alert("You hit the goblin and did " + damageThisRound + " damage!");
                    totalDamage += damageThisRound;

                    if (totalDamage >= 4) {
                        alert("You did it! You slew the goblin!");
                        slaying = false;
                    } else {
                        youHit = Math.floor(Math.random() * 2);
                    }
                } else {
                    // Changed the function so that you don't instantly die upon missing.
                    alert("You missed!");
                    slaying = false
                }
            }
// Added a goblin attack by copying the original code and changing the variables.
            var gSlaying = true;

            var goblinHit = Math.floor(Math.random() * 2);
            var gDamageThisRound = Math.floor(Math.random() * 5 + 1);
            var gTotalDamage = 0;

            while (gSlaying) {
                if (goblinHit) {
                    alert("The goblin hit you and did " + gDamageThisRound + " damage!");
                    gTotalDamage += gDamageThisRound;

                    if (gTotalDamage >= 4) {
                        alert("The goblin killed you!");
                        gSlaying = false;
                    } else {
                        goblinHit = Math.floor(Math.random() * 2);
                    }
                } else {
                    alert("It missed!");
                    gSlaying = false;
                }
            }

        } else {
            alert("Fine then go home");
            throw new Error
        }
        break;

    case 'RUN':
        var fast = prompt("RUN AWAY, RUN AWAY, RUN AWAY! Are you fast (YES or NO)?").toUpperCase();
        var headStart = prompt("Do you trip your servant to buy time?").toUpperCase();
        if (fast === 'YES' || headStart === 'YES') {
            alert("You got away--barely! You live to ride through the forest another day.");
            throw new Error
        } else {
            alert("You're not fast and you didn't get a head start? You never had a chance! The Goblin catches up to you and kills you.");
            throw new Error
        }
        break;


    default:
        alert("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, or RUN.");
}
