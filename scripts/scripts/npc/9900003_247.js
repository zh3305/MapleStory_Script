var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1462202, // 	巨匠弩	
	1412144, // 	巨匠战斧	
	1532106, // 	巨匠火炮	
	1472223, // 	巨匠黑手甲	
	1362099, // 	巨匠手杖	
	1302285, // 	巨匠战剑	
	1242076, // 	巨匠精神之刃	
	1432176, // 	巨匠战斗之矛	
	1492188, // 	巨匠无尽之枪	
	1372186, // 	巨匠邪恶杖	
	1212077, // 	巨匠黑甲凶灵	
	1222072, // 	巨匠天使手铳	
	1442232, // 	巨匠地狱之鸟	
	1522103, // 	巨匠鹰弩枪	
	1232071, // 	巨匠死亡使者	
	1422149, // 	巨匠战锤	
	1382220, // 	巨匠战斗长杖	
	1332235, // 	巨匠小妖精刀	
	1312162, // 	巨匠战斗切肉斧	
	1322213, // 	巨匠大战斗锤	
	1482177, // 	巨匠狮鹫拳爪	
	1402204, // 	巨匠巨剑	
	1452214, // 	巨匠战斗弓	
	1252058, // 	巨匠光能魔法棒	
	1342084 // 	巨匠小刀

);
var needItemList = Array(
	Array(4310030, 500),
	Array(4310036, 2000),
	Array(4033356, 15),
	Array(4021012, 15),
	Array(4021011, 15),
	Array(4021010, 15),
	Array(4000630, 5),
	Array(4000082, 150),
	//Array(4000124, 20),
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