var knight = prompt("You're galloping through the forest, King Arthur to your left, and you run into the dreaded Black Knight. Do you FIGHT him, let ARTHUR fight, or RUN?").toUpperCase();

switch (knight) {
    case 'FIGHT':
        var head = prompt("How courageous! Do you aim to strike his head (YES or NO)?").toUpperCase();
        var limb = prompt("Do you cut off all his limbs?").toUpperCase();
        if (head === 'YES' && limb === 'YES') {
            alert("He has no ability to fight on! You beat the Knight, who now yells insults at you from the ground.");
        } else {
            alert("You're defeated by your foe, you wake in a tent and find Arthur has saved you.");
        }
        break;

    case 'RUN':
        var fast = prompt("RUN AWAY, RUN AWAY, RUN AWAY! Are you fast (YES or NO)?").toUpperCase();
        var headStart = prompt("Do you trip your servant to buy time?").toUpperCase();
        if (fast === 'YES' || headStart === 'YES') {
            alert("You got away--barely! You live to ride through the forest another day.");
        } else {
            alert("You're not fast and you didn't get a head start? You never had a chance! The Knight catches up to you, but is soon slain by Arthur.");
        }
        break;

    case 'ARTHUR':
        var help = prompt("How cowardly, do you give your king some assistance? (YES or NO)?").toUpperCase();
        var back = prompt("Do you circle around the knight, and attack from behind?").toUpperCase();
        if (help === 'YES' || back === 'YES') {
            alert("You bring the Knight to the ground however he just will not die. Oh well, at least he cant follow you.");
        } else {
            alert("Arthur wins the fight, without your help.");
        }
        break;

    default:
        alert("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, ARTHUR, or RUN.");
}