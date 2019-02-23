var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1412126, //	布莱克缤双手斧	
	1532089, //	布莱克缤火炮	
	1472205, //	布莱克缤拳套	
	1452196, //	布莱克缤弓	
	1362081, //	布莱克缤手杖	
	1242069, //	布莱克缤能量剑	
	1242070, //	布莱克缤能量剑	
	1432158, //	布莱克缤长枪	
	1492170, //	布莱克缤短枪	
	1322100, //	布莱克缤单手钝器	
	1522085, //	布莱克缤双弩枪	
	1372168, //	布莱克缤短杖	
	1212072, //	布莱克缤双头杖	
	1222067, //	布莱克缤灵魂手铳	
	1462184, //	布莱克缤弩	
	1442209, //	布莱克缤长矛	
	1382199, //	布莱克缤长杖	
	1232064, //	布莱克缤亡命剑	
	1422129, //	布莱克缤双手钝器	
	1332214, //	布莱克缤短刀	
	1402185, //	布莱克缤双手剑	
	1482159, //	布莱克缤指节	
	1342079, //	布莱克缤双刀	
	1252062, //	布莱克缤魔法棒	
	1312142, //	布莱克缤单手斧	
	1302070 //	布莱克缤单手剑
);
var needItemList = Array(
	//Array(4310036, 2500),
	Array(4000021, 80),
	Array(4001241, 6),
	Array(4001242, 6),
	Array(4000630, 2),
	Array(4004000, 60),
	Array(4004001, 60),
	Array(4004002, 60),
	Array(4004003, 60)
);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
            var selStr = "#d我这里可以制作145级武器，请选择想要制作的装备：#n#k\r\n";    
			for(var key in weaponList) {
				var item = weaponList[key];
				selStr += "#r#L"+key+"#制作 #b#z"+item+"# #r[查看详情]\r\n";
			}
        	cm.sendSimple(selStr);	
		} else if (status == 1) {
			weaponId = selection;
			var text = "- #e#d#z"+weaponList[weaponId]+"#需要的材料：#n#k\r\n\r\n#b";
			for(var key in needItemList) {
				var itemName = cm.getItemName(needItemList[key][0]);
				text+=itemName;
				for(var i=0; i<=25-itemName.getBytes().length; i++)
				{
					text+=" ";
				}
				var currentItemQuantity = cm.getItemQuantity(needItemList[key][0]);
				var color="#g";
				if (currentItemQuantity<needItemList[key][1])
					color="#r";
				text+=color+currentItemQuantity+" / "+needItemList[key][1]+" 个#b\r\n";
			}
			text+="#k\r\n\r\n- #e#d管理提示：#n#b点是进行制作。点否返回上一页.#k";
			cm.sendYesNo(text);
		} else if (status == 2) {
			flag=true;
			for(var key in needItemList) {
				var itemId = needItemList[key][0];
				var itemQuantity = needItemList[key][1];
				if (!cm.haveItem(itemId, itemQuantity))
				{
					flag=false;
					break;
				}
			}
            if (flag) {
				if (cm.getSpace(1)<1) {
					cm.sendOk("装备栏空间不足，请整理后重新制作！");
					cm.dispose();
					return;
				}
				for(var key in needItemList) {
					var itemId = needItemList[key][0];
					var itemQuantity = needItemList[key][1];
					cm.gainItem(itemId, -itemQuantity);
				}
				cm.gainItem(weaponList[weaponId], 1);
				cm.sendOk("恭喜您合成#z"+weaponList[weaponId]+"#一把.");
				cm.worldSpouseMessage(0x20, "[任务公告] : 恭喜 " + cm.getChar().getName() + " 制作了一件 <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("材料不足，无法完成制作！");
				cm.dispose();
			}
		}
	}
}