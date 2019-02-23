/*
	Red Sign - 101st Floor Eos Tower (221024500)
*/
importPackage(java.lang);

var status = 0;
var minLevel = 50;
var maxLevel = 200;
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4
var open = false;//open or not
var PQ = 'lpq';

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
    if (mode == 1)
    	status++;
    else
    	status--;

    if (status == 0) {
	if (cm.getPlayer().getMapId() != 910002000) { // not in first time together lobby
		cm.sendSimple("#e <Party Quest: Dimensional Crack>#n \r\n  How would you like to complete a quest by working with your party members? Inside, you will find many obstacles that you will have to overcome with help of your party members.#b\r\n#L0#Go to the 101 floor.")
	} else if (cm.getPlayer().getMapId() == 910002000) {
		cm.sendSimple("#e <Party Quest: Dimensional Crack>#n \r\nYou can't go any higher because of the extremely dangerous creatures above. Would you like to collaborate with party members to complete the quest? If so, please have your #bParty Leader#k talk to me.#b\r\n#L1#I want to participate in the party quest.#l\r\n#L2#I want to find party members.#l\r\n#L3#I want to hear more details.#l\r\n#L4#I want to recive the Broken Classes. #l\r\n#L5#Check the number of tries left for today.#k");
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
    	cm.sendOk("Sorry. You have done this PQ 10 times today, please come back tomorrow.");
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
        	var em = cm.getEventManager("LudiPQ");
        	if (em == null || open == false) {
        		cm.sendSimple("This PQ is not currently available.");
        	} else {
        		var prop = em.getProperty("state");
        		if (prop == null || prop.equals("0")) {
        			em.startInstance(cm.getParty(),cm.getMap(), 70);
        		} else {
        			cm.sendSimple("Someone is already attempting the PQ. Please wait for them to finish, or find another channel.");
        		}
        		cm.removeAll(4001022);
        		cm.removeAll(4001023);
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
               cm.sendOk("#e <Party Quest: Dimensional Crack>#n \r\nA Dimensional Crack has appeared in #bLudibrium#k! We desperatly need brave adventurers who can defeat the intruding monsters. Please, party with some dependable allies to save Ludibrium! You must pass through various stages by defeating monsters and solving quizzes, and ultimatly defeat #rAlishar#k.\r\n #e - Level:#n 30 or above #r (Recommended Level: 20 - 69)#k \r\n #e - Time Limit:#n 20 min \r\n #e - Number of Players:#n 3 to 6 \r\n #e - Reward:#n #v1022073:# Broken Glasses #b(Exhanged for 35 #t4033039#) #k");//(Optained every 35 time(s) you participate)#k");
cm.dispose();
} else if (selection == 4) {
	if (!cm.canHold(1022073,1)) {
		cm.sendOk("Please make some room for these Glasses");
	} else if (cm.haveItem(4033039,35)) {
		cm.gainItem(4033039,-35); 
		cm.gainItem(1022073,1);
		cm.sendOk("Here you go. Enjoy!")
	} else {
	    cm.sendOk("I am offering 1 #v1022073:##bBroken Glasses #k for every 35 times you help me. If you get #b35 #t4033039# #k you can receive Broken Glasses."); //If you help me #b35 more times#k, you can reveive Broken Glasses.");
}
cm.dispose();
} else if (selection == 5) {
	var pqtry = 10 - cm.getPQLog(PQ);
	cm.sendOk("You can do this quest " + pqtry + " time(s) today.");
	cm.dispose();
}
}else if (status == 2) { 
	cm.openUI("21");
	cm.dispose();         
} else if (mode == 0) { 
	cm.dispose();
} 
}