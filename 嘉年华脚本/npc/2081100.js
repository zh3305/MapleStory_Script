/*  NPC : Harmonia
	Warrior 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;
var sel_act = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
		cm.dispose();
		return;
    }
    if (mode == 1)
		status++;
    else
		status--;

    if (status == 0) {
		if ((cm.getJob() == 112 || cm.getJob() == 122 || cm.getJob() == 132 )) {
			//cm.sendOk("你为什么想见我？我没有你想知道的事。");
			cm.sendSimple("你找我有什么事情么? \r\n#b#L11# 关于自由转职#l");
		} else if (!(cm.getJob() == 111 || cm.getJob() == 121 || cm.getJob() == 131|| cm.getJob() == 2111)) {
			cm.sendOk("你为什么想见我？我没有你想知道的事。");
			cm.safeDispose();
			return;
		} else if (cm.getQuestStatus(1451) == 1) {
			sel_act = 1;
			cm.sendSimple("我可以将你传送到天鹰或火焰龙所在地, 那么你想去 \r\n#b#L0# 火焰龙森林#l\r\n#b#L1# 天鹰森林#l");
		} else if (cm.getQuestStatus(6904) == 2 || cm.getJob() == 2111) {
			sel_act = 2;
			if (cm.getJob() == 111)
				cm.sendSimple("You're qualified to be a true warrior. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Hero.#l\r\n#b#L1#  Let me think for a while.#l");
			else if (cm.getJob() == 121)
				cm.sendSimple("You're qualified to be a true warrior. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Paladin.#l\r\n#b#L1#  Let me think for a while.#l");
			else if (cm.getJob() == 131)
				cm.sendSimple("You're qualified to be a true warrior. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Dark Knight.#l\r\n#b#L1#  Let me think for a while.#l");
			else {
				if (cm.haveItem(4031348)) {
					cm.sendSimple("You're qualified to be a true warrior. \r\nDo you want job advancement?\r\n#b#L0# I want to advance to Aran.#l\r\n#b#L1#  Let me think for a while.#l");
				} else {
					cm.sendNext("You need the Secret Scroll for 10 million meso.");
					cm.dispose();
					return;
				}
			}
		} else {
			cm.sendOk("你还不够强大走战士顶尖的道路。等你变得更强壮再来找我吧。");
			cm.dispose();
			return;
		}
    } else if (status == 1 && sel_act == 1) {
		if (selection == 0) {
			if (cm.haveItem(4031343, 1)) {
				cm.sendOk("你已经有#b#t4031343##k了");
			} else {
				cm.resetMap(924000200);
				cm.warp(924000200);
			}
		} else {
			if (cm.haveItem(4031344, 1)) {
				cm.sendOk("你已经有#b#t4031344##k了");
			} else {
				cm.resetMap(924000201);
				cm.warp(924000201);
			}
		}
		cm.dispose();
    } else if (status == 1 && sel_act == 2) {
		if (selection == 1) {
			cm.sendOk("You don't have to hesitate to be the best Warrior..Whenever you make your decision, talk to me. If you're ready, I'll let you make the 4th job advancement.");
			cm.dispose();
			return;
		}
		if (cm.getPlayerStat("RSP") > cm.getPlayerStat("LVL") * 3) { //player have too much SP means they havent assigned to their skills
			if (cm.getPlayer().getAllSkillLevels() > ((cm.getPlayerStat("LVL") - 9) * 3)) { //player used too much SP means they have assigned to their skills.. conflict
				cm.sendOk("It appears that you have a great number of SP yet you have used enough SP on your skills already. Your SP has been reset. #ePlease talk to me again to make the job advancement.#n");
				cm.getPlayer().resetSP((cm.getPlayerStat("LVL") - 120) * 3);
			} else {
				cm.sendOk("Hmm...You have too many #bSP#k. You can't make the 4th job advancement with too many SP left.");
			}
			cm.dispose();
			return;
		} else {
			if (cm.getJob() == 111) {
				cm.changeJob(112);
				cm.sendNext("You have become the best of warriors, my #bHero#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable will along with #bStance#k and #bAchilles#k");
			} else if (cm.getJob() == 121) {
				cm.changeJob(122);
				cm.sendNext("You have become the best of warriors, my #bPaladint#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable will along with #bStance#k and #bAchilles#k");
			} else if (cm.getJob() == 131) {
				cm.changeJob(132);
				cm.sendNext("You have become the best of warriors, my #bDark Knight#k.You will gain the #bRush#k Skill which makes you attack mutiple enemies and give you indomitable with along with #bStance#k and #bAchilles#k.");
			} else {
				cm.gainItem(4031348, -1);
				cm.changeJob(2112);
			if (cm.canHold(1142132,1)) {
				cm.forceCompleteQuest(29927);
				cm.gainItem(1142132,1); //temp fix
			}
				cm.sendNext("You have become the best of warriors, my #bAran#k.You will gain the #bOverswing#k Skill which makes you attack mutiple enemies and give you indomitable with along with #bAggression#k and #bFreezing Posture#k.");
			}
		}
    } else if (status == 1 && selection == 11){
		cm.dispose();
		cm.openNpc(2081100, "FreeTransfer");
		return;
    } else if (status == 2) {
		cm.sendNextPrev("Don't forget that it all depends on how much you train.");
		cm.dispose();
    }
}
