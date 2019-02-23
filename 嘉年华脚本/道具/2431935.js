var status = -1;

function start() {
	var menu = im.getSkillMenu(20);
	if (menu == "") {
		im.sendOkS("看来你不需要其他能手册啊。", 4, 2080009);
		im.dispose();
	} else {
		im.sendSimpleS("你可以提升的技能目录如下。\r\n" + menu + "\r\n\r\n#r#L0# #fn黑体##fs14##e取消使用能手册。#n#fs##fn##l", 5, 2080009);
	}
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;

	if (status == 0) {
		if (selection > 0 && im.canUseSkillBook(selection, 20) && im.used()) {
			im.useSkillBook(selection, 20);
		} else if (selection != 0) {
			im.sendOkS("看来你不需要其他能手册啊。", 4, 2080009);
		}
		im.dispose();
	} else {
		im.dispose();
	}
}
