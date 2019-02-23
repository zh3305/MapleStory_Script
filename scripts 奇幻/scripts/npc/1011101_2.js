var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1352202, 6000), //英雄副手
Array(1352212, 6000), //圣骑副手
Array(1352222, 6000), //黑骑副手
Array(1352503, 6000), //狂龙副手
Array(1352932, 6000), //战神副手
Array(1352232, 6000), //火毒副手
Array(1352242, 6000), //冰雷副手
Array(1352252, 6000), //主教副手
Array(1352403, 6000), //夜光副手
Array(1352813, 6000), //林之副手
Array(1352942, 6000),  //龙神副手
Array(1352952, 6000),  //唤灵副手
Array(1352003, 6000),  //双弩副手
Array(1352262, 6000),  //神射副手
Array(1352272, 6000),  //箭神副手
Array(1352962, 6000),  //豹弩副手
Array(1352103, 6000),  //幻影副手
Array(1352292, 6000),  //隐士副手
Array(1353004, 6000),  //尖兵副手
Array(1352303, 6000),  //龙传副手
Array(1352604, 6000),  //天使副手
Array(1352703, 6000),  //机械副手
Array(1352902, 6000),  //队长副手
Array(1352912, 6000),  //船长副手
Array(1352922, 6000),  //火炮副手
Array(1099004, 6000),  //猎手副手
Array(1099009, 6000),  //复仇副手
Array(1353103, 6000),  //隐月副手
Array(1352972, 6000),  //骑士团副手
Array(1098003, 6000),  //米哈副手
Array(1352282, 6000),  //侠盗副手
Array(1342008, 200),  //双刀副手
Array(1190001, 2000),  //狂龙纹章
Array(1190101, 2000),  //天使纹章
Array(1190201, 2000)  //尖兵心脏

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
			text = "亲爱的 #r#h ##k 您好，请点击图片购买物品：\r\n#b注意：请自己留出空格！\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + (itemlist[selects][1]*500) + "个#b游戏币#k", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]*500) + "游戏币。");
        } else if (a == 3) {
            if (cm.getPlayer().getMeso() >= buynum * itemlist[selects][1]*500&&cm.getPlayer().getMeso() >=3000000) {
                cm.gainMeso(-buynum * itemlist[selects][1]*500);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[平民商城]：" + "玩家 " + cm.getChar().getName() + " 用金币购买了物品,离超神更近了一步！");                
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的游戏币。或者空格不够");
                cm.dispose();
            }
        }
    }//mode
}//f