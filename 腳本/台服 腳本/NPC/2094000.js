importPackage(java.lang);

var status = 0;
var minLevel = 50; // GMS = 50 
var maxLevel = 250; // GMS = 200? recommended 50 - 69
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = false; //open or not
var PQ = 'PiratePQ';

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 1 && mode == 0) {
        cm.sendOk("Ask your friends to join your party. You can use the Party Search funtion (hotkey O) to find a party anywhere, anytime."); // gms has spelling mistakes.. 
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
    	cm.dispose();
    	return;
    }
    if (mode == 1)
    	status++;
    else
    	status--;

    if (status == 0) {
	if (cm.getPlayer().getMapId() != 910002000) { // not in pq lobby
		cm.sendSimple("#e <Party Quest: Lord Pirate>#n \r\n  How would you like to complete a quest by working with your party members? Inside, you will find many obstacles that you will have to overcome with help of your party members.#b\r\n#L0#Go to the Pirate PQ Lobby.#l");
	} else if (cm.getPlayer().getMapId() == 910002000) {
		cm.sendSimple("#e <Party Quest: Lord Pirate>#n \r\nWhat is it that you want?#b\r\n#L1#I want to participate in the Party Quest.#l\r\n#L2#I want to find Party Members.#l\r\n#L3#I want to listen to the explanation.#l\r\n#L4#I want to get Lord Pirate Hat.#l\r\n#L6#I want to check the number of tries left for today.#k");// last not GMS like
	} else {
		cm.dispose();
	}
} else if (status == 1) {
	if (selection == 0) {
	    cm.saveLocation("MULUNG_TC"); // not sure if correct..?
	    cm.warp(910002000,0);
	    cm.dispose();
	} else if (selection == 1) {
     if (cm.getParty() == null) { // No Party
     	cm.sendYesNo("You need to create a party to do a Party Quest. Do you want to use the Party Search funtion?");
    } else if (!cm.isLeader()) { // Not Party Leader
    	cm.sendOk("It is up to your party leader to proceed.");
    	cm.dispose();
    } else if (cm.getPQLog(PQ) >= 10){
    	cm.sendOk("sorry... you've tryed 10 times today alreddy..");
    	cm.dispose();
    } else if (!cm.allMembersHere()) {
    	cm.sendOk("Some of your party members are in a different map. Please try again once everyone is together.");
    	cm.dispose();
    } else {
	// Check if all party members are over lvl 50
	var party = cm.getParty().getMembers();
	var mapId = cm.getMapId();
	var next = true;
	var levelValid = 0;
	var inMap = 0;

	var it = party.iterator();
	while (it.hasNext()) {
		var cPlayer = it.next();
		if (cPlayer.getLevel() >= minLevel && cPlayer.getLevel() <= maxLevel) {
			levelValid += 1;
		} else {
			cm.sendOk("You need to be between level " + minLevel + " and " + maxLevel + " to take on this epic challenge!");
			cm.dispose();
			next = false;
		} 
		if (cPlayer.getMapid() == mapId) {
			inMap += 1;
		}
	}
	if (party.size() > maxPlayers || inMap < minPlayers) {
		next = false;
	}
	if (next) {
		var em = cm.getEventManager("Pirate");
		if (em == null || open == false) {
			cm.sendSimple("This PQ is not currently available.");
			cm.dispose();
		} else {
			var prop = em.getProperty("state");
			if (prop == null || prop.equals("0")) {
				em.startInstance(cm.getParty(),cm.getMap(), 70);
			} else {
				cm.sendSimple("Someone is already attempting the PQ. Please wait for them to finish, or find another channel.");
			}
             /*   for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
	}*/
		//cm.removeAll(4001453);//remove all orbis pq items
		cm.setPQLog(PQ);
		cm.dispose();
	} 
} else {
	cm.sendYesNo("Your party is not a party between " + minPlayers + " and " + maxPlayers + " party members. Please come back when you have between " + minPlayers + " and " + maxPlayers + " party members.");
} 
}
} else if (selection == 2) {
	cm.OpenUI("21");
	cm.dispose();
	
} else if (selection == 3) {
	cm.sendOk("#e#b#m251000000##k#n, where Bellflowers live, has been attacked by the #r#o9300119##k, and #e#b#p2094001##k#n, the king of the Bellflowers, has been kidnapped. Gather your allies and attack the pirate ship to drive the #o9300119# and his men away.\r\n #e - Level:#n 70 or above\r\n #e - Players:#n 3 - 6 \r\n #e - Reward:#n#v1002573:##b Average Lord Pirate Hat#k");
	cm.dispose();
} else if (selection == 4) {
	cm.sendOk("Thank you for saving #b Wu Yang#k from the #bLord Pirate#k. As a reward, I will make you a #bLord Pirate Hat#k if you bring me Hat Fragments. Now, exactly which hat would you like?#b\r\n#L10##v1002573:##t1002573#\r\n#r(Need 100 Lord Pirate Hat Fragments)#k#l\r\n#b\r\n#L11##v1002574:##t1002574#\r\n#r(Need 1 Average Lord Pirate Hat,\r\n200 Lord Pirate Hat Fragments)#k#l\r\n#b\r\n#L12##v1003267:##t1003267#\r\n#r(Need 1 Acceptable Lord Pirate Hat,\r\n 1000 Lord Pirate Hat Fragments)#k#l");
} else if (selection == 6) {
	var pqtry = 10 - cm.getPQLog(PQ);
	cm.sendOk("You can do this quest " + pqtry + " time(s) today.");
	cm.dispose();
}
}else if (status == 2) {
	if (selection == 10) {
		if (!cm.canHold(1002573,1)) {
			cm.sendOk("Make room for this Hat.");
		}else if (cm.haveItem(4001455,100)) {
			cm.gainItem(1002573, 1);// Goddess Wristband
			cm.gainItem(4001455, -100);
			cm.sendOk("Thank you so much. And enjoy your new Hat");
			cm.dispose();
		}else{
			cm.sendOk("Do you want me to make a Lord Pirate Hat for you? You did bring enought Hat Fragments, right?");
			cm.dispose();
		}  
	} else if (selection == 11) {
		if (!cm.canHold(1002574,1)) {
			cm.sendOk("Make room for this Hat.");
		}else if (cm.haveItem(4001455,200) && cm.haveItem(1002573, 1)) {
			cm.gainItem(1002574, 1);// Goddess shoes
			cm.gainItem(4001455, -200);
			cm.gainItem(1002573, -1);
			cm.sendOk("Thank you so much. And enjoy your new Hat");
			cm.dispose();
		}else{
			cm.sendOk("Do you want me to make a Lord Pirate Hat for you? You did bring enought Hat Fragments, right? And don't forget the Average Lord Pirate Hat.");
			cm.dispose();
		}} else if (selection == 12) {
			if (!cm.canHold(1003267,1)) {
				cm.sendOk("Make room for this Hat.");
			}else if (cm.haveItem(4001455,1000) && cm.haveItem(1002574,1)) {
			cm.gainItem(1003267, 1);// minerva's bracelet
			cm.gainItem(4001455, -1000);
			cm.gainItem(1002574, -1);
			cm.sendOk("Thank you so much. And enjoy your brand new Super Hat");
			cm.dispose();
		}else{
			cm.sendOk("Do you want me to make a Lord Pirate Hat for you? You did bring enought Hat Fragments, right? And don't forget the Acceptable Lord Pirate Hat.");
			cm.dispose();
		}}  else if (cm.getMapId != 910002000) {
			cm.OpenUI("21");
			cm.dispose();
		}
		else if (status == 3) { 
			cm.OpenUI("21");
			cm.dispose();         
		}		else if (mode == 0) { 
			cm.dispose();
		} 
	}
}