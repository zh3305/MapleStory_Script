var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1099012, //	银河之盾	
	1099011, //	银河之咒盾	
	1352606, //	银河之灵魂手镯	
	1352707, //	银河之麦林弹	
	1352815, //	银河之私语	
	1352406, //	银河之魂珠	
	1352506, //	银河之精髓	
	1352296, //	银河之灵符	
	1352286, //	银河之剑鞘	
	1352206, //	银河之吊坠	
	1352216, //	银河之念珠	
	1352226, //	银河之锁链	
	1352236, //	银河之赤铜之书	
	1352246, //	银河之青银之书	
	1352256, //	银河之白金之书	
	1352266, //	银河之风暴羽毛	
	1352276, //	银河之扳指	
	1353006, //	银河之控制器	
	1353105, //	银河之狐狸珠	
	1352009, //	银河之箭矢	
	1352957, //	银河之极限球	
	1352945, //	银河之龙神的遗产	
	1352935, //	银河之天龙锤	
	1352928, //	银河之火药桶	
	1352916, //	银河之鹰眼	
	1352906, //	银河之腕轮	
	1342095, //	银河之刃	
	1352967, //	银河之狂野之矛	
	1352975, //	银河之圣地之光	
	1352109 //	银河之卡片
);
var needItemList = Array(
	Array(4310036, 2500),
	Array(4000021, 120),
	Array(4033356, 5),
	Array(4000630, 3),
	Array(4004000, 80),
	Array(4004001, 80),
	Array(4004002, 80),
	Array(4004003, 80),
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
            var selStr = "#d我这里可以制作140级副手，请选择想要制作的装备：#n#k\r\n";    
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
				cm.worldSpouseMessage(0x20, "[装备制作] : 恭喜 " + cm.getChar().getName() + " 制作了一件 <"+cm.getItemName(weaponList[weaponId])+">.");
				cm.dispose();
			} else {
				cm.sendOk("材料不足，无法完成制作！");
				cm.dispose();
			}
		}
	}
}