var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var typed=0;
var rmb = 0;
var weaponId = null;
var weaponList = Array(
    1302228, //	豪华阿加雷斯拳刃	
	1442183, //	豪华阿加雷斯之矛	
	1532075, //	豪华维帕尔火炮	
	1452171, //	豪华伊布斯长弓	
	1242043, //	豪华地狱之路狮蝎剑	
	1242046, //	豪华维帕尔狮蝎剑	
	1432139, //	豪华阿加雷斯之矛	
	1362068, //	豪华赫尔巴斯手杖	
	1322163, //	豪华阿加雷斯锤	
	1492153, //	豪华维帕尔之鹰	
	1522072, //	豪华伊布斯双弩枪	
	1372140, //	豪华艾里格斯短杖	
	1212043, //	豪华艾里格斯双头杖	
	1222043, //	豪华维帕尔血月	
	1462160, //	豪华伊布斯弩	
	1232040, //	豪华阿加雷斯猩红黄道剑	
	1382169, //	豪华艾里格斯笞鞭	
	1422108, //	豪华阿加雷斯大槌	
	1402152, //	豪华阿加雷斯双手剑	
	1482141, //	豪华维帕尔指节手套	
	1472180, //	豪华赫尔巴斯手套	
	1252030, //	豪华艾里格斯猫梳魔法棒	
	1312117, //	豪华阿加雷斯头盔	
	1332194, //	豪华赫尔巴斯猎手	
	1412105 //	豪华阿加雷斯拳套
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
            var selStr = "#d我这里可以制作130级武器，请选择想要制作的装备：#n#k\r\n";    
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