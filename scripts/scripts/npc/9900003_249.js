var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1412136, //	真红战斗斧	
	1532099, //	真红崩溃	
	1472215, //	真红暗黑拳套	
	1362091, //	真红手杖	
	1242063, //	真红分裂剑	
	1242062, //	真红分裂剑		
	1432168, //	真红战斗矛	
	1302276, //	真红战剑	
	1492180, //	真红无限手铳	
	1522095, //	真红鹰翼	
	1372178, //	真红恶魔手杖	
	1212065, //	真红黑甲凶灵	
	1222060, //	真红天使射手	
	1702455, //	真红油漆桶	
	1442224, //	真红地狱鸟	
	1462194, //	真红十字弩	
	1232058, //	真红死亡使者	
	1422141, //	真红战斗锤	
	1382209, //	真红战斗法杖	
	1332226, //	真红十字剑	
	1402197, //	真红巨剑	
	1322204, //	真红战锤	
	1482169, //	真红格里芬爪	
	1452206, // 真红战斗弓	
	1312154, //	真红战斧	
	1342083 //	真红之刀
);
var needItemList = Array(
	Array(4310030, 500),
	Array(4310036, 2000),
	Array(4033356, 15),
	Array(4021012, 15),
	Array(4021011, 15),
	Array(4021010, 15),
	Array(4000630, 5),
	//Array(4000082, 150),
	Array(4000124, 20),
	Array(4310015, 1),
	Array(4021019, 1)
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