/*
	名称：天空之城换肤
	内容：更换皮肤颜色
*/

var status = -1;
var skin = new Array(0, 1, 2, 3, 4);
var card = 5153015; // 万能护肤券

function start () {
	action(1, 0, 0);
}

function action (mode, type, selection) {
	if (mode == 0) {
		cm.dispose();
		return;
	} else {
		status++;
	}

	if (status == 0) {
		var text = "您好，我是皮肤外科专家#p" + cm.getNpc() + "#，别看我长得卡哇伊，其实刚好应验了一句话：“人不可貌相”……\r\n\r\n";
		text += "#b#L0# 改变肤色";
		cm.sendSimple(text);
	} else if (status == 1) {
		var text = "选择您满意的脸型吧，如果你有#b#t" + card + "##k的话，我可以帮你整出令人惊艳的脸型。";
		cm.sendStyle(text, skin, card);
	} else if (status == 2) {
		if (cm.setAvatar(card, skin[selection]) == 1) {
			cm.sendOk("没说错吧，其实人不可貌相……");
		} else {
			cm.sendOk("你没有#b#t" + card + "##k，可以先去商城购买。");
		}
	}
}