/* RED Zero
    Joel
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendNext("Hi there! I'm Joel, and I work in this station. Are you thinking of leaving Victoria Island for other places? This station is where you'll find the ship that heads to #bOrbis Station#k of Ossyria leaving #bat the top of the hour, and every 15 minutes afterwards#k.");
	} else if (status == 1) {	
	    cm.sendNextPrev("If you are thinking of going to Orbis, please go talk to #bCherry#k on the right.");
	} else if (status == 2) {	
	    cm.sendNextPrev("Well, the truth is, we charged for these flights until very recently, but the alchemists of Magatia made a crucial discovery on the fuel that dramatically cuts down the amount of Mana used for the flight, so these flights are now free. Don't worry, we still get paid. Now we just get paid through the government.");	
	    cm.dispose(); 
    }
}
