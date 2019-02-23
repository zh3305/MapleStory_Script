var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow/Minigame/Common/mark#";

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
          if (status == 0) {


    if (cm.getPQLog("新手驾到") >= 0 && cm.getPlayerStat("LVL") < 150) {

			var text = "#h0# 欢迎来到" + cm.getServerName() + "#k,先来大概了解一下本服特色：\r\n\r\n";
				//text += "· 本服为仿官方模式\r\n";
				text += "· #e#d本服为完美仿官 爆率设置：经验20倍  金币10倍  爆率5倍\r\n";
				text += "· #b#n问:为什么别的F倍率那么高,我们F倍率那么低?答:我们F的倍率经过了精心的策划与测试,不是倍率高就好玩,爆的东西就多.\r\n";
				text += "· #r主菜单在拍卖按钮(或者输入@npc),和背包里的运营员箱子可以提供各种便捷服务\r\n";
				text += "· #e#r新手出生将会送你:#v1142310##v1003552##v1082433##v1052461##v1102441##v1072666##v1132154##v1152089##v2431402##v1002679##v1702224##v1050291##v1051357##v3010501##v1012057##v1022048##v1032024##v5150040##v5152053##v5150052##v5153015##v5152057##v5151036##v5211060##v5360015##v5060000##v2431092##v1102630##v2431402##v1112918##v5000209#\r\n";
				//text += "· 开放全职业创建。所有的怪物都会随机掉落#v4280000##v4280001##v2430112##v2028061##v2460003##v2290285##v2028062##v2028062##v4310088##v2431887##v2431174##v2431738##v2431738##v4310057##v4001832##v4310129##v4000313##v4004000##v4004001##v4004002##v4004003##v4001244#\r\n";
				text += "·  \r\n";
				text += "· 各种仿官方流程副本趣味活动丰厚奖励,尽享游戏欢乐,强力的等级奖励,各种独有副本-吊丝.土豪.上班族的天堂\r\n";
				text += "\r\n\r\n更多精彩,敬请期待!";
			cm.sendSimple(text);
		} else {
			cm.dispose();
			//cm.worldSpouseMessage(0x14,"★★★★★★★『新手驾到』：【"+ cm.getChar().getName() +"】 成功偷渡来到了" + cm.getServerName() +"!★★★★★★★");
			cm.sendOk("你已经领取过新人礼包，无法再次领取！");
			cm.dispose();
		}
	} else if (status == 1) {
		cm.dispose();
		//cm.setEventCount("新人驾到1111",1)
                cm.setPQLog("新手驾到", 0, -2);
              // cm.setEventCount("新手驾到pk1", 0, -2);
		//cm.gainItem(2431719, 1);
		cm.gainItem(2430241, 1);
		cm.gainItem(2431549, 1);
		cm.gainItem(2430607, 1);
		cm.gainItem(2430154, 1);
		cm.gainItem(4310088, 50);
		//cm.gainItem(2430505, 1);
		//cm.gainItem(2431673, 1, 60);
		cm.gainMeso(1000000);
                cm.gainPetItem(5000209, 1);
		//cm.gainItem(2022452, 15);
		//cm.gainItem(2430869, 1);//宠物 
		//cm.gainItem(5190000, 1);//宠物 
		//cm.gainItem(5190001, 1);//宠物 
		//cm.gainItem(5190006, 1);//宠物 
		cm.warp(50000);
		//cm.openNpc(2008, 2);
		cm.worldSpouseMessage(0x20,"★★★★★★★『新手驾到』：【"+ cm.getChar().getName() +"】 成功偷渡来到了" +cm.getServerName() +"!★★★★★★★");
		cm.worldSpouseMessage(0x20,"★★★★★★★『新手驾到』：【"+ cm.getChar().getName() +"】 成功偷渡来到了" +cm.getServerName() +"!★★★★★★★");
		//cm.worldSpouseMessage(0x15,"『新手驾到』：天空一声巨响,不明飞行物品 "+ cm.getChar().getName() +" 掉进了梦想帝国!");
	}
}






function Operate(job) {
    switch (job) {
        case 6001://爆莉萌天使
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)
            cm.gainExp(100000)//升到10级
            cm.gainItem(1222000, -1);//删除原始道具
            equip(1352600)//佩戴灵魂手镯
            cm.changeJob(6500);
            cm.gainItem(2431305, 1);
            cm.sendY("赠送给你 >>> 火光武器箱 一个，可以根据你的角色等级获取相应的道具！")
            break;
    }
}
function equip(itemId) {
    if (!cm.haveItem(itemId, 1, true, true)) {
        cm.gainItem(itemId, 1);
    }
    //查找玩家背包有没有这个物品,没有就给玩家
    cm.gainItemAndEquip(itemId, -10);
}
