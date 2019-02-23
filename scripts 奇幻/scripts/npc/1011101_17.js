var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1042231, 100),// 最高级贝勒德腰带
Array(1112681, 100),// 最高吊坠
Array(1152074, 100),// 最高级贝勒德耳环
Array(1122174, 100),// 最高指
Array(1032121, 100), // 高级贝勒德腰带
Array(1082401, 100), // 高级贝吊坠
Array(1062148, 100), // 高级耳环
Array(1072618, 100), // 高级贝勒德戒指

Array(2044003, 500), // 贝勒德头部椅子
Array(2044103, 500), // 中级贝勒德腰带
Array(2044303, 500), // 中级贝坠
Array(2044203, 500), // 中级环
Array(2043003, 500), // 中级贝勒德戒指
Array(2044908, 500), // 贝勒德椅子
Array(2044815, 500), // 低级腰带
Array(2043203, 500), // 低级贝
Array(2043103, 500), // 低级贝勒德耳环
Array(2043803, 500), // 低级贝勒德耳环
Array(2044503, 500), // 低级贝
Array(2044403, 500), // 低级贝勒德耳环
Array(2040303, 500), // 低级
Array(2044703, 500), // 低级贝勒德耳环
Array(2044603, 500)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "亲爱的 #r#h ##k ,可以用 #v4310030# 兑换#e#b运动会优胜系列装备#n#k：\r\n #r#e#L0#进入 #v4310030# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
			for (var i=1; i<=itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i-1] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9900003,109);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4310030#");
        } else if (a == 2) {
            if (cm.haveItem(4310030,buynum * itemlist[selects][1])) {
                cm.gainItem(4310030, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[平民商城] ：" + "玩家 " + cm.getChar().getName() + " 兑换了运动会优胜系列装备,离超神更近了一步！");                
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4310030#。");
                cm.dispose();
            }
        }
    }//mode
}//f