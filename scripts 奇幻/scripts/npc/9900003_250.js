var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
	1099010, //		黑色军团盾	
	1098005, //		黑色灵魂盾	
	1352605, //		黑色灵魂手镯	
	1352705, //		黑色麦林弹	
	1352405, //		黑色宝珠		
	1352505, //		黑色诺巴精髓	
	1352295, //		黑色破邪符	
	1352285, //		黑色剑鞘	
	1352205, //		黑色吊坠	
	1352215, //		黑色念珠	
	1352225, //		黑色锁链	
	1352235, //		赤铜之书<黑色>	
	1352245, //		青银之书<黑色>	
	1352255, //		白金之书<黑色>	
	1352265, //		黑色羽毛	
	1352275, //		黑色千发全中		
	1353005, //		黑色八核控制器		
	1353104, //		黑色狐狸珠	
	1352955, //		黑色极限球	
	1352008, //		黑色魔法箭矢	
	1352944, //		黑色龙神的遗产	
	1352934, //		黑色天龙锤		
	1352927, //		黑色中心发火火药桶	
	1352915, //		黑色雕眼	
	1352905, //		黑色手腕护甲	
	1342092, //		黑色之刃	
	1352965, //		黑色狂野之牙	
	1352974, //		黑色圣地之光	
	1352108 //		黑色卡片	
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
            var selStr = "#d我这里可以制作100级副手，请选择想要制作的装备：#n#k\r\n";    
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