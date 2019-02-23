/*
	Lakelis - First Time Together Lobby (910340700)
*/
importPackage(java.lang);

var status = 0;
var minLevel = 50; // GMS = 50 
var maxLevel = 200; // GMS = 200? recommended 50 - 69
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = false;//open or not
var PQ = 'kpq';

function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (status >= 1 && mode == 0) {
        cm.sendOk("Ask your friends to join your party. You can use the Party Search funtion (hotkey O) to find a party anywhere, anytime.");
        cm.dispose();
        return;
    }
    if (mode == 1)
    	status++;
    else
    	status--;

    if (status == 0) {
	if (cm.getPlayer().getMapId() != 910002000) { // not in first time together lobby
		cm.sendSimple("#e <Party Quest: First Time Together>#n \r\n  How would you like to complete a quest by working with your party members? Inside, you will find many obstacles that you will have to overcome with help of your party members.#b\r\n#L0#Go to the First Time Together Lobby.")
	} else if (cm.getPlayer().getMapId() == 910002000) {
		cm.sendSimple("#e <Party Quest: First Time Together>#n \r\n Inside, you'll find many obstacles that can only be solved by working with a party. Interested? Then have your #bParty Leader #k talk to me.#b\r\n#L1#I want to do the Party Quest.#l\r\n#L2#I want to find party members who will join me.#l\r\n#L3#I want to hear the details.#l\r\n#L4#I want a Soft Jelly Shoes.#l\r\n#L5#Check the number of tries left for today#k");
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
    //} else if (cm.getPQtry() == 0){
    } else if (cm.getPQLog(PQ) >= 10){
	//if (cm.getGiftLog('FreeGift') >= 1) {
		cm.sendOk("Sorry... you've done it 10 times today. Please come back tomorrow.");
		cm.dispose();
	} else if (!cm.allMembersHere()) {
        cm.sendOk("Some of your party members are in a different map. Please try again once everyone is together."); // check if working..
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
        	var em = cm.getEventManager("KerningPQ");
        	if (em == null || open == false) {
        		cm.sendSimple("This PQ is not currently available.");
        	} else {
        		var prop = em.getProperty("state");
        		if (prop == null || prop.equals("0")) {
        			em.startInstance(cm.getParty(),cm.getMap(), 70);
        		} else {
		    cm.sendSimple("Someone is already attempting the PQ. Please wait for them to finish, or find another channel.");
		}
		cm.removeAll(4001008);
		cm.removeAll(4001007);
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
		cm.sendOk("Calling on all those with courage! Work together, share your strengths, and use your wisdom to find and defeat the vicious #r King Slime!#k King Slime will appear once you complete certain challanges, such as collecting passes or answering location-based quizzes.\r\n #e - Level:#n Lv. 50 or higer #r (Recommended Level: 50 - 69)#k \r\n #e - Time Limit:#n 20 min \r\n #e - Number of Players:#n 3 to 4 \r\n #e - Reward:#n #v1072634:# Squishy Shoes #b (dropped by King Slime)#k \r\n #e - Reward:#n #v1072533:# Soft Jelly Shoes #b (Exhanged for Smooshy Liquid x 15).");
		cm.dispose();
	} else if (selection == 4) {
		if (!cm.canHold(1072533,1)) {
			cm.sendOk("Please make some room for these shoes.");
		} else if (cm.haveItem(4001531,15)) {
			cm.gainItem(4001531,-15); 
			cm.gainItem(1072533,1);
			cm.sendOk("Here you go. Enjoy!")
		} else {
			cm.sendOk("If you want #v1072533:# Soft Jelly Shoes. You'll need 15 #b Smooshy Liquids.#k You can optain Smooshy Liquids by defeating #r King Slime.");
		}
		cm.dispose();
	} else if (selection == 5) {
            var pqtry = 10 - cm.getPQLog(PQ);
            if (pqtry >= 10){
            	cm.sendOk("You can do this quest " + pqtry + " time(s) today.");
				cm.dispose();
	}}
}else if (status == 2) { 
      cm.openUI("21");
      cm.dispose();         
  } else if (mode == 0) { 
  	cm.dispose();
  } 
}