/* RED Zero
    Agatha
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	    cm.sendSimple("Hello, I'm the information guide for Orbis Station. Which of our destinations would you like to know more about?\r\n#b#L0# Victoria Island#l\r\n#b#L1# Ludibrium#l\r\n#b#L2# Leafre#l\r\n#b#L3# Mu Lung#l\r\n#b#L4# Ariant#l\r\n#b#L5# Ereve#l\r\n#b#L6# Edelstein#k#l");
    } else if (status == 1) {
        sel = selection;
	if (selection == 0) {		
	    cm.sendNext("Are you trying to go to Victoria Island? Oh, it's a beautiful island with an abundance of beautiful forests. The ship that goes to Victoria #bleaves every 15 minutes on the hour#k.");
        } else if (selection == 1) {
		cm.sendNext("Are you heading towards Ludibrium in Lake Ludus? It's a fun little town that mainly consists of toys. The ship that heads to Ludibrium #bleaves at the top of the hour, and every 10 minutes afterwards#k.");
        } else if (selection == 2) {
		cm.sendNext("Are you heading towards Leafre of Minar Forest? It's a cozy little town where the Halflingers reside. The ship that heads to Leafre #bleaves at the top of the hour, and every 10 minutes afterwards#k.");
        } else if (selection == 3) {
		cm.sendNext("Are you heading towards Mu Lung in the Mu Lung Temple? I'm sorry, but there's no ship that flies from Orbis to Mu Lung. There is another way to get there, though. There's a #bCrane that runs a cab service for 1 that's always available#k, so you'll get there as soon as you wish.");
        } else if (selection == 4) {
		cm.sendNext("Are you heading towards Ariant in Nihal Desert? It's a town full of alchemists that live the life with vigor much like the scorching desert heat. The ship that heads to Ariant #bleaves at the top of the hour, and every 10 minutes afterwards#k.");
		} else if (selection == 5) {
		cm.sendNext("Are you heading toward Ereve? It's a beautiful island blessed with the presence of the Shinsoo the Holy Beast and Empress Cygnus. #bThe boat is for 1 person and it's always readily available#k so you can travel to Ereve fast.");
        } else if (selection == 6) {
		cm.sendNext("Are you going to Edelstein? The brave people who live there constantly fight the influence of dangerous monsters. #b1-person Airship to Edelstein is always on standby#k, so you can use it at any time.");	
		}
	} else if (status == 2) {
	  if (sel == 0) {
        cm.sendNextPrev("Talk to #bIsa the Station Guide#k on the right if you would like to take the airship to Victoria. Isa will guide you to the Station to Victoria.");
		cm.dispose();
        } else if (sel == 1) {
		cm.sendNextPrev("If you wish to hop on board the ship that'll fly to Ludibrium, talk to #bIsa the Station Guide#k on the right. She'll take you to the station where the ride to Ludibrium awaits.");
        cm.dispose();
		} else if (sel == 2) {
		cm.sendNextPrev("If you wish to hop on board the ship that'll fly to Leafre, talk to #bIsa the Station Guide#k on the right. She'll take you to the station where the ride to Leafre awaits.");
        cm.dispose();
		} else if (sel == 3) {
		cm.sendNextPrev("Unlike the ships that fly for free, however, this cab requires a set fee. This personalized flight to Mu Lung will cost you #b1,500 mesos#k, so please have the fee ready before riding the Crane.");
		} else if (sel == 4) {
		cm.sendNextPrev("If you wish to use the Genie that'll take you to Ariant, talk to #bIsa the Station Guide#k on the right. She'll take you to the station where the ride to Ariant awaits.");
		cm.dispose();
		} else if (sel == 5) {
		cm.sendNextPrev("If you want to take the boat to Ereve, please talk to #bIsa the Station Guide#k standing on the right. Isa will guide you to the Ereve Station.");
		cm.dispose();
		} else if (sel == 6) {
		cm.sendNextPrev("Talk to #bIsa the Station Guide#k on the right if you would like to take the ship to Edelstein. Isa will guide you to the Station to Edelstein.");
		cm.dispose();
		}
    } else if (status == 3) {
        if (sel == 3) {
		cm.sendNextPrev("If you wish to ride the crane that'll fly to Mu Lung, talk to #bIsa the Station Guide#k on the right.  She'll take you to the station where the ride to Mu Lung awaits.");
        cm.dispose();
	   }
        cm.dispose();
	}
 }
