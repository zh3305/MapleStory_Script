var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1102445, //	豪华阿加雷斯披风	
	1102449, //	豪华维帕尔披风	
	1102448, //	豪华赫尔巴斯披风	
	1102447, //	豪华伊布斯披风	
	1102446, //	豪华艾里格斯披风
    1082470, //	豪华维帕尔手套	
	1082469, //	豪华赫尔巴斯手套	
	1082467, //	豪华艾里格斯手套	
	1082468, //	豪华伊布斯手套	
	1082466, //	豪华阿加雷斯手套	
	1052498, //	豪华阿加雷斯锁子甲	
	1052499, //	豪华艾里格斯锁子甲	
	1052500, //	豪华伊布斯锁子甲	
	1052501, //	豪华赫尔巴斯锁子甲	
	1052502, //	豪华维帕尔锁子甲
    1003592, //	豪华赫尔巴斯头箍	
	1003593, //	豪华维帕尔头箍	
	1003590, //	豪华艾里格斯头箍	
	1003591, //	豪华伊布斯头箍	
	1003589, //	豪华阿加雷斯头箍	
	1072705, //	豪华伊布斯靴	
	1072706, //	豪华赫尔巴斯靴	
	1072703, //	豪华阿加雷斯靴	
	1072704, //	豪华艾里格斯靴	
	1072707 //	豪华维帕尔靴		
);
var needItemList = Array(
	//Array(4310036, 2500),
	Array(4000021, 60),
	Array(4001241, 4),
	Array(4001242, 4),
	Array(4000630, 3),
	Array(4004000, 40),
	Array(4004001, 40),
	Array(4004002, 40),
	Array(4004003, 40)
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
            var selStr = "#d我这里可以制作130级防具，请选择想要制作的装备：#n#k\r\n";    
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