var status = -1;
var typed = 0;
var isSuccess = 0;
var giftItems = Array(2432353, 5062002, 5062500);
var needItems = Array(
	Array(
		4032579,// - 粉嫩饺子面粉 - 粉扑扑的奇妙饺子面粉，可揉捏出令人开心的饺子皮。是制作节日饺子的上品。
		4032580,// - 活力鲜肉 - 时刻透出无限活力的鲜肉，据说吃了会让人精力充沛。是制作节日饺子的上品。
		4032581// - 恬静白菜 - 沉浸于安详恬静中的白菜，据说吃了能让人保持冷静。是制作节日饺子的上品。
	),
	Array(
		4032582,// - 益寿春卷皮 - 添药草精华的春卷皮，据说可以给人带来更多健康。是制作节日春卷的上品。
		4032583,// - 福气肉馅 - 向流星许愿过的肉馅，据说可以给人带来更多福气。是制作节日春卷的上品。
		4032584// - 财运豆油 - 用金豆子制作的豆油，据说可以给人带来更多财运。是制作节日春卷的上品。
	),
	Array(
		4032585,// - 缠绵糯米 - 天天黏黏的特级糯米，据说可以把人们的心联系在一起。今年做节日年糕的上品。
		4032586,// - 蜜语糖精 - 回忆蜜蜜的神妙糖精，据说可以让人们的关系浪漫温馨。今年做节日年糕的上品。
		4032587// - 配对年糕锤 - 月下传承的年糕锤，据说可以引人们寻找天赐注定的缘分。今年做节日年糕的上品。
	)
)
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = "肚子好饿啊，你能做些东西给我吃吗？我会给你应有的报酬的。\r\n";
		text+="#b#L0##v4032592#制作饺子#l\r\n";
		text+="#L1##v4032593#制作春卷#l\r\n";
		text+="#L2##v4032594#制作年糕#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1){
		typed = selection;
		var text = "你需要以下材料完成制作：\r\n\r\n";
		needItem = needItems[selection];
		for(var key in needItem) {
			isEnough = "#r(×)#k";
			if (cm.haveItem(needItem[key])) {
				isEnough = "#g(√)#k";
				isSuccess++;
			}
			text+=isEnough+" #k需要1个#b#v"+needItem[key]+"##t"+needItem[key]+"#\r\n";
		}
		if (isSuccess == 3) {
			text+="\r\n#g(√)#k表示足够，#r(×)#k表示不足，#d#e是否继续制作？#n#k\r\n";
			cm.sendYesNo(text);
		} else {
			status = -1;
			isSuccess = 0;
			text+="\r\n#g(√)#k表示足够，#r(×)#k表示不足，#d#e你的材料好像不足哦！#n#k\r\n";
			cm.sendSimple(text);
		}
	} else if (status == 2) {
		isSuccess = 0;
		needItem = needItems[typed];
		for(var key in needItem) {
			cm.gainItem(needItem[key], -1);
		}
		giftId = giftItems[typed];
		cm.gainItem(giftId, 1);
		status = -1;
		cm.sendSimple("真美味，作为奖励，给你1个#b#v"+giftId+"##t"+giftId+"##k，点击#b“下一步”#k继续制作。");
	}
}