/* Dawnveil
    Guild Emblem
	Lea
    Made by Daenerys
*/
var status = 0;
var sel;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0)
			cm.sendSimple("What would you like to do?\r\n#b#L0#Create/Change your Guild Emblem#l#k");
		else if (status == 1)
		{
			sel = selection;
			if (selection == 0)
			{
				if (cm.getChar().getGuildRank() == 1)
					cm.sendYesNo("Creating or changing Guild Emblem costs #b500,000 mesos#k, are you sure you want to continue?");
				else
					cm.sendOk("Oh...you're not a Guild Master. The guild emblem can be created, deleted, or modified only by the #rGuild Master#k.");

			}
				
		}
		else if (status == 2)
		{
			if (sel == 0)
			{
				cm.genericGuildMessage(18);
				cm.dispose();
			}
		}
	}
}