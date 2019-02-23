var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
Array(1112951, 99), // 麦格纳斯的愤怒	 
Array(1142528, 11), // 麦格纳斯的威严	
Array(1142520, 33), // 麦格纳斯击败先锋	 
Array(1004143, 33), // 军团长麦格纳斯面具	 

Array(1082543, 99), // 暴君西亚戴斯手套 // (无描述)
Array(1082544, 99), // 暴君赫尔梅斯手套 // (无描述)
Array(1082545, 99), // 暴君凯伦手套 // (无描述)
Array(1082546, 99), // 暴君利卡昂手套 // (无描述)
Array(1082547, 99), // 暴君阿尔泰手套 // (无描述)
Array(1102481, 99), // 暴君西亚戴斯披风 // (无描述)
Array(1102482, 99), // 暴君赫尔梅斯披风 // (无描述)
Array(1102483, 99), // 暴君凯伦披风 // (无描述)
Array(1102484, 99), // 暴君利卡昂披风 // (无描述)
Array(1102485, 99), // 暴君阿尔泰披风 // (无描述)
Array(1072743, 99), // 暴君西亚戴斯靴 // (无描述)
Array(1072744, 99), // 暴君赫尔梅斯靴 // (无描述)
Array(1072745, 99), // 暴君凯伦靴 // (无描述)
Array(1072746, 99), // 暴君利卡昂靴 // (无描述)
Array(1072747, 99), // 暴君阿尔泰靴 // (无描述)
Array(1132174, 99), // 暴君西亚戴斯腰带 // (无描述)
Array(1132175, 99), // 暴君赫尔梅斯腰带 // (无描述)
Array(1132176, 99), // 暴君凯伦腰带 // (无描述)
Array(1132177, 99), // 暴君利卡昂腰带 // (无描述)
Array(1132178, 99)// 暴君阿尔泰腰带 // (无描述)*/);
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
			text = "亲爱的 #r#h ##k ,可以用 #v4310058# 兑换#e#b暴君系列套装#n#k：\r\n #r#e#L0#进入 #v4310058# 专爆地图（请自己留好空格！）#l\r\n\r\n#b";
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
				cm.warp(401072000);

				return;
			}  else {
			selects = (selection-1);
            
			}
            buynum = 1;
            cm.sendYesNo("你想兑换" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "个#v4310058#");
        } else if (a == 2) {
            if (cm.haveItem(4310058,buynum * itemlist[selects][1])) {
                cm.gainItem(4310058, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
				cm.worldSpouseMessage(0x20,"[土豪商城]：" + "玩家 " + cm.getChar().getName() + " 兑换了暴君系列装备,离超神更近了一步！");                
				cm.sendOk("兑换成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的#v4310058#。");
                cm.dispose();
            }
        }
    }//mode
}//f