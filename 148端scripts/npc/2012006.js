/* RED Zero
    Isa the Station Guide
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else 
        if (status == 1) {
		    cm.sendNext("Please check your destination one more time, then go to the correct Platform with my help. Each ship has a schedule for departure, so you must be ready to board on time!");
            cm.dispose();
        status--;
    }
    if (status == 0) {
	    cm.sendSimple("There are many Platforms at the Orbis Station. You must find the correct Platform for your destination. Which Platform would you like to go to?\r\n#b#L0# Platform to Board a Ship to Victoria Island#l\r\n#b#L1# Platform to Board a Ship to Ludibrium#l#k\r\n#b#L2# Platform to Board a Ship to Leafre#l\r\n#b#L3# Platform to Ride a Crane to Mu Lung#l\r\n#b#L4# Platform to Ride a Genie to Ariant#l#k\r\n#b#L5# Platform to Board a Ship to Ereve#l#k\r\n#b#L6# Platform to Board a Ship to Edelstein#l");
    } else if (status == 1) {
        sel = selection;
	if (selection == 0) {		
	    cm.sendYesNo("Even if you've entered a wrong Tunnel, you can always come back to where I am, via the Portal, so don't worry. Would you like to go to the #bPlatform to Board a Ship to Victoria Island#k?");
        } else if (selection == 1) {
		cm.sendYesNo("Even if you took the wrong passage you can get back here using the portal, so no worries. Will you move to the #bplatform to the ship that heads to Ludibrium#k?");
        } else if (selection == 2) {
		cm.sendYesNo("Even if you took the wrong passage you can get back here using the portal, so no worries.\r\nWill you move to the #bplatform to the ship that heads to Leafre#k?");
        } else if (selection == 3) {
		cm.sendYesNo("Even if you took the wrong passage you can get back here using the portal, so no worries. Will you move to the #bplatform to Hak that heads to Mu Lung#k?");
        } else if (selection == 4) {
		cm.sendYesNo("Even if you took the wrong passage you can get back here using the portal, so no worries. Will you move to the #bplatform to Genie that heads to Ariant#k?");
		} else if (selection == 5) {
		cm.sendYesNo("Even if you took the wrong passage you can get back here using the portal, so no worries. Will you move to the #bplatform to Hak that heads to Ereve#k?");
        } else if (selection == 6) {
		cm.sendYesNo("Even if you've entered a wrong Tunnel, you can always come back to where I am, via the Portal, so don't worry. Would you like to go to the #bPlatform to Board a Ship to Edelstein#k?");	
		}
	} else if (status == 2) {
	  if (sel == 0) {
        cm.warp(200000111,0);
		cm.dispose();
        } else if (sel == 1) {
        cm.warp(200000121,0);
		cm.dispose();
		} else if (sel == 2) {
        cm.warp(200000131,0);
		cm.dispose();
		} else if (sel == 3) {
        cm.warp(200000141,0);
		cm.dispose();
		} else if (sel == 4) {
        cm.warp(200000151,0);
		cm.dispose();
		} else if (sel == 5) {
        cm.warp(200000161,0);
		cm.dispose();
		} else if (sel == 6) {
        cm.warp(200000170,0);
		cm.dispose();
	   }
	    cm.dispose();
    }
}