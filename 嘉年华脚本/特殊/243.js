var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
	1212090, // 凯梅尔兹双头杖
	1222085, // 凯梅尔兹灵魂手铳
	1232085, // 凯梅尔兹恶魔剑
	1242091, // 凯梅尔兹锁链剑
	1302299, // 凯梅尔兹剑
	1312174, // 凯梅尔兹斧
	1322224, // 凯梅尔兹锤
	1332249, // 凯梅尔兹匕首
	1342091, // 凯梅尔兹刀
	1362110, // 凯梅尔兹手杖
	1372196, // 凯梅尔兹短杖
	1382232, // 凯梅尔兹长杖
	1402222, // 凯梅尔兹双手剑
	1412153, // 凯梅尔兹双手战斧
	1422159, // 凯梅尔兹巨锤
	1432189, // 凯梅尔兹矛
	1442243, // 凯梅尔兹戟
	1452227, // 凯梅尔兹弓
	1462214, // 凯梅尔兹弩
	1472236, // 凯梅尔兹拳甲
	1482190, // 凯梅尔兹冲拳
	1492200, // 凯梅尔兹手铳
	1522114, // 凯梅尔兹双翼弩
	1532119, // 凯梅尔兹手炮
	1252032, // 凯梅尔兹武士之剑
	1552073 // 凯梅尔兹之风

);
var needItemList = Array(
	Array(4310036, 2000),
	Array(4000021, 300),
	Array(4021016, 100),
	Array(4021015, 200),
	Array(4004000, 100),
	Array(4004001, 100),
	Array(4004002, 100),
	Array(4004003, 100)
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
            var selStr = "#d我这里可以制作150级武器，请选择想要制作的装备：#n#k\r\n";    
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