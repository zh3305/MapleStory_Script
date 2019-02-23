/* 洗装备潜能 */

var status = -1;
var potList = Array(
Array(40603, "攻击BOSS时伤害：+40%", 1),
Array(40292, "无视怪物40%的防御率", 1),
Array(42051, "攻击力：+12%", 1),
Array(60001, "总伤害：+12% (不能修改附加潜能)", 1),
Array(60002, "所有属性：+20% (不能修改附加潜能)", 1),
Array(60007, "MaxHP : +10% (不能修改附加潜能)", 1),
Array(60008, "攻击力/魔力：+10% (不能修改附加潜能)", 1),
Array(40055, "爆击率 12%", 1));
var potId = -1; //潜能的ID
var depict = ""; //潜能的描述
var points = -1; //每次的价格
var potline = 1; //修改的潜能是第几条
var oldEquip;
var newEquip;
var count = 1; //定义洗到那个属性的次数
var slot = 1; //定义需要修改的装备在背包的位置
var potline = 1; //定义需要修改的是第几条潜能 [1-3] 为普通 [4-6] 为附加
var Nx = -1;
var List = Array(1162046,1112673);//这里添加能潜能的装备ID
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
        var selStr = "亲爱的#r#h ##k您好!想给你的#v1162016#选择什么样的潜能:\r\n";
        for (var i = 0; i < potList.length; i++) {
            selStr += "#L" + i + "##b " + potList[i][1] + "#l\r\n";
        }
        cm.sendSimple(selStr + "  ");
    } else if (status == 1) {
        oldEquip = cm.getEquipBySlot(slot);
        if (oldEquip == null) {
            cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空");
            cm.dispose();
            return; //出现错误直接返回 不执行下面的操作 这个必须注意
        }
        var A = false;
		for (var i =0;i<List.length ;i++ ){
			if(oldEquip.getItemId()==List[i]){
				A = true;
				break;
			}
		}
		if (!A){
			var TXT="";
			for (var i =0;i<List.length ;i++  ){
				TXT+="#v"+List[i]+"#";
			}
			cm.sendOk("物品第一格必须要有以下物品的其中一个：\r\n"+TXT);
            cm.dispose();
            return;
		}
        var pot = potList[selection];
        if (pot != null) {
            potId = pot[0];
            depict = pot[1];
            points = pot[2];
            cm.sendYesNo("您是否要将#b装备栏第一格装备\r\n第一条潜能属性(不会改变其它潜能属性)#k\r\n口袋洗潜能属性为 #b" + depict + "#k？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
	if(cm.itemQuantity(4001534) < 1) {
	    cm.sendOk("请确认背包中是否存在#v4001534##t4001534#");
	    cm.dispose();
	    return;
	}
        if (potId <= 0 || depict == "" || points <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
            cm.sendYesNo("洗出潜能属性为 #b" + depict + "#k 用了 #b" + count + "#k 次。\r\n本次保留该属性需要:#r 1 #k #v4001534##t4001534# 是否保留该属性？");
    } else if (status == 3) {
        newEquip = cm.getEquipBySlot(slot);
        if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
                if (cm.changePotential(slot, potline, potId, false)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                    //todo 扣点卷
		    cm.gainItem(4001534,-1);
                    cm.sendOk("恭喜您成功洗出潜能属性....");
		    cm.worldSpouseMessage(0x20, "【口袋潜能】" + ": " + " 恭喜玩家 " + cm.getChar().getName() + " 使用材料给口袋洗出第一条潜能！");
		    cm.getPlayer().saveToDB(false, false);
		    cm.dispose();
		    return;
                } else {
                    cm.sendOk("出现错误...");
		    cm.dispose();
                }
        } else {
            cm.sendOk("出现错误...");
	    cm.dispose();
        }
    }
}