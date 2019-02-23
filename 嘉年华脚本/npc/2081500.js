/*  NPC : Samuel
	Pirate 4th job advancement
	Forest of the priest (240010501)
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }

    if (status == 0) {
		if ((cm.getJob() == 512 || cm.getJob() == 522 || cm.getJob() == 532)) {
			cm.sendSimple("你找我有什么事情么? \r\n#b#L11# 关于自由转职#l");
		} else if (!(cm.getJob() == 511 || cm.getJob() == 521 || cm.getJob() == 531)) {
			cm.sendOk("你为什么想见我？我没有你想知道的事。");
			cm.safeDispose();
			return;
		} else if (cm.getQuestStatus(1459) == 1) {
			cm.sendSimple("我可以将你传送到天鹰或火焰龙所在地, 那么你想去 \r\n#b#L0# 火焰龙森林#l\r\n#b#L1# 天鹰森林#l");
		} else {
			cm.sendOk("你还不够强大走海盗顶尖的道路。等你变得更强壮再来找我吧。");
			cm.dispose();
			return;
		}
    } else if (status == 1 && selection == 11){
		cm.dispose();
		cm.openNpc(2081500, "FreeTransfer");
		return;
    } else if (status == 1) {
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
    }
}
