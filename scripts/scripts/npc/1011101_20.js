var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(2044003, 2000), // 贝
Array(2044103, 2000), // 中级
Array(2044303, 2000), // 中
Array(2044203, 2000), // 中级环
Array(2043003, 2000), // 中
Array(2044908, 2000), // 贝勒
Array(2044815, 2000), // 低
Array(2043203, 2000), // 低级贝
Array(2043103, 2000), // 低级
Array(2043803, 2000), // 低级
Array(2044503, 2000), // 低
Array(2044403, 2000), // 低
Array(2040303, 2000), // 低级
Array(2044703, 2000), // 低级
Array(2044603, 2000),
Array(2049135, 5000),//惊人正义混沌卷轴 20%	
Array(2046010,5000), // 周年庆单手武器攻击力卷轴100%	
Array(2046011,5000), // 周年庆单手武器魔法力卷轴100%	
Array(2046110,5000), // 周年庆双手武器攻击力卷轴100%	
Array(2046577,5000), // 宿命正义防具力量卷轴 100% // 为防具增加力量属性。
Array(2046578,5000), // 宿命正义防具智力卷轴 100% // 为防具增加智力属性。
Array(2046579,5000), // 宿命正义防具敏捷卷轴 100% // 为防具增加敏捷属性。
Array(2046580,5000), // 宿命正义防具运气卷轴 100% // 为防具增加运气属性。
Array(2046763,8000), // 宿命正义饰品力量卷轴 100% // 为饰品增加力量属性。
Array(2046764,8000), // 宿命正义饰品智力卷轴 100% // 为饰品增加智力属性。
Array(2046765,8000), // 宿命正义饰品敏捷卷轴 100% // 为饰品增加敏捷属性。
Array(2046766,8000)// 宿命正义饰品运气卷轴 100% // 为饰品增加运气属性。
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
			text = "亲爱的 #r#h ##k ,可以用 #v4310036# 兑换#e#b各种超级物品#n#k：\r\n #r#e#L0#进入 #v4310036# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
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
				cm.openNpc(2101017,1);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4310036#");
        } else if (a == 2) {
            if (cm.haveItem(4310036,buynum * itemlist[selects][1])) {
                cm.gainItem(4310036, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[平民商城] ：" + "玩家 " + cm.getChar().getName() + " 兑换了运动会优胜系列,离超神更近了一步！");                
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4310036#。");
                cm.dispose();
            }
        }
    }//mode
}//f