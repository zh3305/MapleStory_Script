importPackage(java.lang);

var status = 0;
var minLevel = 50; // GMS = 50 
var maxLevel = 250; // GMS = 200? recommended 50 - 69
var minPlayers = 1; // GMS = 3
var maxPlayers = 6; // GMS = 4 || but 6 makes it better :p
var open = false;//open or not
var PQ = 'opq';

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
		cm.sendSimple("#e <Party Quest: Remnants of Goddess>#n \r\n  How would you like to complete a quest by working with your party members? Inside, you will find many obstacles that you will have to overcome with help of your party members.#b\r\n#L0#Go to the Orbis PQ Lobby.")
	} else if (cm.getPlayer().getMapId() == 910002000) {
		cm.sendSimple("#e <Party Quest: Remnants of Goddess>#n \r\nHi, I'm Wonky the Fairy. Talk to me if you want to explore the Goddess Tower. Oh also, if you have a Warrior, Magican, Thief, Bowman, and Pirate in your party, I will grant you Wonky's Blessing.#b\r\n#L1#Request admission.#l\r\n#L2#Ask about Tower of Goddess.#l\r\n#L3#Give food to Wonky.#l\r\n#L4#Exchange Feather of Goddess for a different item.#l\r\n#L5#Find party members.#l\r\n#L6#Check the number of tries left for today.#k");
	} else {
		cm.dispose();
	}
} else if (status == 1) {
	if (selection == 0) {
	    cm.saveLocation("MULUNG_TC");
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
        	var em = cm.getEventManager("OrbisPQ");
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
		for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i);
	}
		cm.setPQLog(PQ);
		cm.dispose();
	} 
} else {
            cm.sendYesNo("Your party is not a party between " + minPlayers + " and " + maxPlayers + " party members. Please come back when you have between " + minPlayers + " and " + maxPlayers + " party members.");
        } 
    }
} else if (selection == 2) {
	cm.sendOk("#e <Party Quest: Remnants of Goddess>#n \r\n After a heavy rainfall on El Nath Mountains, a new cloud path opened behind the #bStatue of Goddess Minerva#k at the top of Orbis Tower. When a giant cloud far away split open, a mysterious tower appeared. It's the tower of #bGoddess Minerva#k, who ruled Orbis a long time ago. Would you like to begin your adventure at this legendary tower where Goddess Minerva is said to be trapped?\r\n #e - Level:#n 70 or higher #r (Recommended Level: 70 - 119)#k \r\n #e - Time Limit:#n 20 min \r\n #e - Players:#n 3 - 6 \r\n #e - Reward:#n \r\n#v1082232:# Goddess Wristband #b \r\n(Can be traded for 15 Feathers of Goddess.)#k \r\n#v1072455:# Goddess Shoes#b \r\n(Can be traded for 10 Feathers of Goddess.)#k \r\n#v1082322:# Minvera's Bracelet#b \r\n(Can be traded for 30 Feathers of Goddess and 1 Goddess Wristband.)#k \r\n#v1072534:# Minvera's Shoes#b \r\n(Can be traded for 20 Feathers of Goddess and 1 Goddess Shoes.).");
	cm.dispose();
} else if (selection == 3) {
               cm.sendSimple("Whoa, you got something to eat!?!");// add food selections....
               cm.dispose();
	} else if (selection == 4) {// first talks about being a friend and feeding? skip for now i think..
		cm.sendOk("You are #b" + cm.getChar().getName() + "!#k You gave me delicious food! #b\r\n#L10#Goddess Wristband#k#r( 15 Feathers of Goddess required)#k#b#l\r\n#L11#Goddess Shoes#k#r( 10 Feathers of Goddess required)#k#b#l\r\n#L12#Minerva's Bracelet#k#r( 30 Feathers of Goddess and 1 Goddess Wristband required)#k#b#l\r\n#L13#Minerva's Shoes#k#r( 20 Feathers of Goddess and 1 Goddess Shoes required)#k#b#l\r\n");
		} else if (selection == 5) {
			cm.OpenUI("21");
            cm.dispose();
        } else if (selection == 6) {
        	var pqtry = 10 - cm.getPQLog(PQ);
        	if (pqtry >= 10){
        		cm.sendOk("You can do this quest " + pqtry + " time(s) today.");
        		cm.dispose();
        	}
        }
    }else if (status == 2) { 
    	if (selection == 10) {
    		if (!cm.canHold(1082232,1)) {
    			cm.sendOk("Make room for this Hat.");
    		}else if (cm.haveItem(4001158,15)) {
			cm.gainItem(1082232, 1);// Goddess Wristband
			cm.gainItem(4001158, -15);
			cm.sendOk("Thank you so much. And enjoy your new Wristband");
			cm.dispose();
		}else{
			cm.sendOk("Please make sure you have the amount of Feathers needed.");
			cm.dispose();
		}  
	} else if (selection == 11) {
		if (!cm.canHold(1072455,1)) {
			cm.sendOk("Make room for this Hat.");
		}else if (cm.haveItem(4001158,10)) {
			cm.gainItem(1072455, 1);// Goddess shoes
			cm.gainItem(4001158, -10);
			cm.sendOk("Thank you so much. And enjoy your new Shoes");
			cm.dispose();
		}else{
			cm.sendOk("Please make sure you have the amount of Feathers needed.");
			cm.dispose();
		}} else if (selection == 12) {
			if (!cm.canHold(1082322,1)) {
				cm.sendOk("Make room for this Hat.");
			}else if (cm.haveItem(4001158,30) && cm.haveItem(1082232,1)) {
			cm.gainItem(1082322, 1);// minerva's bracelet
			cm.gainItem(4001158, -30);
			cm.gainItem(1082232, -1);
			cm.sendOk("Thank you so much. And enjoy your brand new Bracelet");
			cm.dispose();
		}else{
			cm.sendOk("Please make sure you have the amount of Feathers needed. Or if you have the Goddess Wrisband.");
			cm.dispose();
		}}   else if (selection == 13) {
			if (!cm.canHold(1072534,1)) {
				cm.sendOk("Make room for these Shoes.");
			}else if (cm.haveItem(4001158,20) && cm.haveItem(1072455, 1)) {
			cm.gainItem(1072534, 1);// Minerva's Shoes
			cm.gainItem(4001158, -20);
			cm.gainItem(1072455, -1);
			cm.sendOk("Thank you so much. And enjoy your brand new Shoes!");
			cm.dispose();
		}else{
			cm.sendOk("Please make sure you have the amount of Feathers needed. Or if you have the Goddess Shoes.");
			cm.dispose();
		}}    
		else if (status == 3) { 
      cm.OpenUI("21");
      cm.dispose();         
  }		else if (mode == 0) { 
  	cm.dispose();
  } 
}
}