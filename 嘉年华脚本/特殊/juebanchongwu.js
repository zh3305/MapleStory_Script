var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
5000228, // 狮心战斗锁子甲, // (无描述)
5000229, // 龙尾法师长袍, // (无描述)
5000230, // 鹰翼哨兵服, // (无描述)
5000237, // 渡鸦之魂追踪者盔甲, // (无描述)
5000243, // 鲨齿船长外套, // (无描述)
5000244, // 龙尾法师手套, // (无描述)
5000245, // 鹰翼哨兵手套, // (无描述)
5000284, // 渡鸦之魂追踪者手套, // (无描述)
5000247, // 鲨齿船长手套, // (无描述)
5000285, // 狮心战斗护腕, // (无描述)
5000252, // 龙尾法师护肩, // (无描述)
5000288, // 鹰翼哨兵护肩, // (无描述)
5000289, // 渡鸦之魂猎人护肩, // (无描述)
5000290, // 鲨齿船长护肩, // (无描述)
5000292, // 狮心战斗护肩, // (无描述)
5000291, // 狮心战斗披风, // (无描述)
5000293, // 龙尾法师披风, // (无描述)
5000294, // 鹰翼哨兵披风, // (无描述)
5000295, // 渡鸦之魂猎人披风, // (无描述)
5000324, // 鲨齿船长披风, // (无描述)
5000324, // 狮心战斗头盔, // (无描述)
5000296, // 龙尾法师帽子, // (无描述)
5000297, // 鹰翼哨兵便帽, // (无描述)
5000298, // 渡鸦之魂追踪者帽, // (无描述)
5000370, // 鲨齿船长帽, // (无描述)
5000369, // 狮心战斗鞋, // (无描述)
5000371, // 龙尾法师鞋, // (无描述)
5000352, // 鹰翼哨兵鞋, // (无描述)
5000353, 
5000354,
5000375,
5000376,
5000377,
5000191,
5000382,
5000366,
5000367,
5000365 
);
var needItemList = Array(
	Array(4310036, 2000),
	Array(4000021, 100),
	Array(4001241, 5),
	Array(4001242, 5),
	Array(4004000, 50),
	Array(4004001, 50),
	Array(4004002, 50),
	Array(4004003, 50)
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
            var selStr = "#d我这里可以制作140级防具，请选择想要制作的装备：#n#k\r\n";    
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