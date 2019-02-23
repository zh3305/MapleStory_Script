importPackage(net.sf.odinms.client);

var status = 0;
var selectedType = -1;
var selectedItem = -1;
var item;
var mats;
var matQty;
var cost;
var qty;
var equip;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else 
		cm.dispose();
	if (status == 0 && mode == 1) {
		var selStr = "#b5元冒险岛，合成系统.\r\n#k各类母矿在高级地图都有掉落、BOSS可以直接掉落成品哦！\r\n#k你想让我做什么事？#b"
		var options = new Array("治炼矿石母矿","治炼宝石母矿","永恒装备制作");
		for (var i = 0; i < options.length; i++){
			selStr += "\r\n#L" + i + "# " + options[i] + "#l";
		}	
			
		cm.sendSimple(selStr);
	}
	else if (status == 1 && mode == 1) {
		selectedType = selection;
		if (selectedType == 0){ //mineral refine
			var selStr = "你想治炼什么矿石？#b";
			var minerals = new Array ("青铜","钢铁","锂矿石","朱矿石","银","紫矿石","黄金");
			for (var i = 0; i < minerals.length; i++){
				selStr += "\r\n#L" + i + "# " + minerals[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		}
		else if (selectedType == 1){ //jewel refine
			var selStr = "你想治炼什么宝石？#b";
			var jewels = new Array ("石榴石","紫水晶","海蓝宝石","祖母缘","蛋白石","蓝宝石","黄晶","钻石","黑水晶");
			for (var i = 0; i < jewels.length; i++){
				selStr += "\r\n#L" + i + "# " + jewels[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = false;
		} else if (selectedType == 2){ //helmet refine
			var selStr = "你想合成什么道具？#b";
var helmets = new Array ("永恒断蚺斧",
			"永恒破甲剑",
			"永恒惊破天",
			"永恒狂鲨锯",
			"永恒断首刃",
			"永恒蝶翼杖",
			"永恒冰轮杖",
			"永恒玄冥剑",
			"永恒碎鼋斧",
			"永恒威震天",
			"永恒显圣枪",
			"永恒神光戟",
			"永恒惊电弓",
			"永恒冥雷弩",
			"永恒大悲赋",
			"永恒孔雀翎",
			"永恒凤凰铳",
			"永恒魔光盾",
			"永恒寒冰盾",
			"永恒匿踪盾"
			);
			for (var i = 0; i < helmets.length; i++){
				selStr += "\r\n#L" + i + "# " + helmets[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		else if (selectedType == 3){ //shield refine
			var selStr = "你想合成什么道具？#b";
			var shields = new Array ("朱矿方盾#k(等级限制 : 40,战士)#b","锂矿方盾#k(等级限制 : 40,战士)#b","古老银盾#k(等级限制 : 60,战士)#b","古老朱矿盾#k(等级限制 : 60,战士)#b");
			for (var i = 0; i < shields.length; i++){
				selStr += "\r\n#L" + i + "# " + shields[i] + "#l";
			}
			cm.sendSimple(selStr);
			equip = true;
		}
		if (equip)
			status++;
	}
	else if (status == 2 && mode == 1) {
		selectedItem = selection;
		if (selectedType == 0){ //mineral refine
			var itemSet = new Array(4011000,4011001,4011002,4011003,4011004,4011005,4011006);
			var matSet = new Array(4010000,4010001,4010002,4010003,4010004,4010005,4010006);
			var matQtySet = new Array(10,10,10,10,10,10,10);
			var costSet = new Array(300,300,300,500,500,500,800);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 1){ //jewel refine
			var itemSet = new Array(4021000,4021001,4021002,4021003,4021004,4021005,4021006,4021007,4021008);
			var matSet = new Array(4020000,4020001,4020002,4020003,4020004,4020005,4020006,4020007,4020008);
			var matQtySet = new Array(10,10,10,10,10,10,10,10,10);
			var costSet = new Array (500,500,500,500,500,500,500,1000,3000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "那么你想治炼几个#t" + item + "#？";
		
		cm.sendGetNumber(prompt,1,1,100)
	}
	else if (status == 3 && mode == 1) {
		if (equip)
		{
			selectedItem = selection;
			qty = 1;
		}
		else
			qty = selection;

		if (selectedType == 2){ //helmet refine


			var itemSet = new Array(
			1312037,//永恒断蚺斧
                       1302081,//永恒破甲剑
                       1322060,//永恒惊破天
                       1332073,//永恒狂鲨锯
                       1332074,//永恒断首刃
                       1372044,//永恒蝶翼杖
                       1382057,//永恒冰轮杖
                       1402046,//永恒玄冥剑
                       1412033,//永恒碎鼋斧
                       1422037,//永恒威震天
                       1432047,//永恒显圣枪
                       1442063,//永恒神光戟
                       1452057,//永恒惊电弓
                       1462050,//永恒冥雷弩
                       1472068,//永恒大悲赋
                       1482023,//永恒孔雀翎
                       1492023,//永恒凤凰铳
                       1092057,//永恒魔光盾
                       1092058,//永恒寒冰盾
                       1092059//永恒匿踪盾
);//装备代码


			var matSet = new Array(
new Array(1412046,4001035,2340000),
new Array(1302133,4001035,2340000),
new Array(1412046,4001035,2340000),
new Array(1472100,4001035,2340000),
new Array(1472100,4001035,2340000),
new Array(1372058,4001035,2340000),
new Array(1382080,4001035,2340000),
new Array(1402072,4001035,2340000),
new Array(1412046,4001035,2340000),
new Array(1412046,4001035,2340000),
new Array(1492048,4001035,2340000),
new Array(1492048,4001035,2340000),
new Array(1452085,4001035,2340000),
new Array(1462075,4001035,2340000),
new Array(1472100,4001035,2340000),
new Array(1482046,4001035,2340000),
new Array(1492048,4001035,2340000),
new Array(1382060,4001035,2340000),
new Array(1442068,4001035,2340000),
new Array(1452060,4001035,2340000)
);//需要的物品



var matQtySet = new Array(
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3),
new Array(2,5,3)
);//需要的东西的个数



			var costSet = new Array(80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000,
80000000
);//需要的金币


			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		else if (selectedType == 3){ //shield refine
			var itemSet = new Array (1092014,1092013,1092010,1092011);
			var matSet = new Array(new Array (1092012,4011003),new Array (1092012,4011002),new Array (1092009,4011007,4011004),new Array (1092009,4011007,4011003));
			var matQtySet = new Array (new Array (1,10),new Array (1,10),new Array (1,1,15),new Array (1,1,15));
			var costSet = new Array (100000,100000,120000,120000);
			item = itemSet[selectedItem];
			mats = matSet[selectedItem];
			matQty = matQtySet[selectedItem];
			cost = costSet[selectedItem];
		}
		
		var prompt = "想做";
		if (qty == 1)
			prompt += "1个#t" + item + "##v" + item + "#吗？";
		else
			prompt += qty + "个#t" + item + "#吗？";
			
		prompt += "需要下面的材料，怎么样？你想试试吗？#b\r\n";
		
		if (mats instanceof Array){
			for(var i = 0; i < mats.length; i++){
				prompt += "\r\n#i"+mats[i]+"# " + matQty[i] * qty + " #t" + mats[i] + "#";
			}
		}
		else {
			prompt += "\r\n#i"+mats+"# " + matQty * qty + " #t" + mats + "#";
		}
		
		if (cost > 0)
			prompt += "\r\n#i4031138# " + cost * qty + " 金币";
		
		cm.sendYesNo(prompt);
	}
	else if (status == 4 && mode == 1) {
		var complete = true;
		
		if (cm.getMeso() < cost * qty)
			{
				cm.sendOk("请你确认有需要的物品或背包的其它窗口有空间。")
			}
			else
			{
				if (mats instanceof Array) {
					for(var i = 0; complete && i < mats.length; i++)
					{
						if (matQty[i] * qty == 1)	{
							if (!cm.haveItem(mats[i]))
							{
								complete = false;
							}
						}
						else {
							var count = 0;
							var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats[i]).iterator();
							while (iter.hasNext()) {
								count += iter.next().getQuantity();
							}
							if (count < matQty[i] * qty)
								complete = false;
						}					
					}
				}
				else {
					var count = 0;
					var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(mats).iterator();
					while (iter.hasNext()) {
						count += iter.next().getQuantity();
					}
					if (count < matQty * qty)
						complete = false;
				}
			}
			
			if (!complete) 
				cm.sendOk("请你确认有需要的物品或背包的其它窗口有空间。");
			else {
				if (mats instanceof Array) {
					for (var i = 0; i < mats.length; i++){
						cm.gainItem(mats[i], -matQty[i] * qty);
					}
				}
				else
					cm.gainItem(mats, -matQty * qty);
					
				cm.gainMeso(-cost * qty);
				cm.gainItem(item,qty);
				cm.sendOk("好！你的东西已经做好了，我的手艺果然不错！你看见过这么完美的东西吗？下次再来吧。");
			}
		cm.dispose();
	}
}