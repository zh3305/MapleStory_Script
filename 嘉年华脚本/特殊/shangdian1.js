var status = 0;
var eff ="#fUI/UIWindow/Quest/icon6/7#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请您选择您需要的功能:\r\n";
		selStr += "#L0##b全职业副手武器商店(#r100级以下#b)#l\r\n";
		selStr += "#L1##b飞镖店(#r飞侠专区#b)#l   #L19##b子弹店(#r最下面卖#b)#l\r\n";		
		//selStr += "#L3##b我要购买外星人装备#l\r\n";		
		selStr += "#L4##b战士装备(#r100级以下#b)#l";
		selStr += "#L5##b法师装备(#r100级以下#b)#l\r\n";
		selStr += "#L6##b箭手装备(#r100级以下#b)#l";
		selStr += "#L7##b飞侠装备(#r100级以下#b)#l\r\n";
		selStr += "#L8##b海盗装备(#r100级以下#b)#l";
		selStr += "#L9##b幻影装备(#r100级以下#b)#l\r\n";
		selStr += "#L10##b双刀装备(#r100级以下#b)#l";
		selStr += "#L11##b尖兵装备(#r100级以下#b)#l\r\n";	
		selStr += "#L12##b萝莉装备(#r100级以下#b)#l";
		selStr += "#L13##b夜光装备(#r100级以下#b)#l\r\n";			
		selStr += "#L14##b火炮装备(#r100级以下#b)#l";
		selStr += "#L15##b双弩装备(#r100级以下#b)#l\r\n";	
		selStr += "#L16##b恶魔复仇者装备(#r100级以下#b)#l\r\n";
		selStr += "#L17##b剑豪装备(#r100级以下#b)#l";		
		selStr += "#L18##b阴阳师装备(#r100级以下#b)#l\r\n\r\n";	
		selStr += "#b温馨提示:特殊飞镖请到废弃药店冲镖哦!#l";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
			cm.dispose();
			cm.openShop(1033001);
			break;
        case 1:
			cm.dispose();
			cm.openShop(1033003);
			break;			
        case 2:
            cm.dispose();
            cm.openShop(1012123);
            break;
        case 3://外星人装备
           /* cm.dispose();
            cm.openShop(9090000);*/
			cm.dispose();
            cm.openShop(9310117);
            break;
        case 4://战士
            cm.dispose();
            cm.openShop(1021000);
            /*cm.dispose();
            cm.openShop(1012124);*/
            break;
        case 5://法师
            /*cm.dispose();
            cm.openShop(1012125);*/		
            cm.dispose();
            cm.openShop(1031000);
            break;
        case 6://弓手装备
           /* cm.dispose();
            cm.sendOk("其它职业的装备请到各个城市的装备商店购买.\r\n高级装备可以靠刷怪/BOSS/抽奖/活动/获得...\r\n祝你游戏愉快!如果有好的建议请联系管理员.");*/
            cm.dispose();
            cm.openShop(1011000);
			break;
        case 7://飞侠
          /*cm.dispose();
            cm.openShop(1033003);*/
           /* cm.dispose();
            cm.sendOk("全职业1-30级武器可点拍卖-新手装备处购买.\r\n其余100级以下装备请到各职业所在城市购买\r\n更高级装备可以靠刷怪/BOSS/抽奖/活动/获得...\r\n祝你游戏愉快!如果有好的建议请联系管理员.");*/
		    cm.dispose();
            cm.openShop(1091000);
			break;
        case 8://海盗
            cm.dispose();
            cm.openShop(1200001);
            break;
        case 9://幻影
            /*cm.dispose();
            cm.openShop(2161010);*/		
            cm.dispose();
            cm.openShop(1001000);
            break;
        case 10://双刀
           /* cm.dispose();
            cm.openShop(9310117);*/
            cm.dispose();
            cm.openShop(9120000);			
            break;
        case 11://尖兵
            /*cm.dispose();
            cm.openShop(1011101);*/
            cm.dispose();
            cm.openShop(2150001);
            break;
        case 12://萝莉
            /*cm.dispose();
            cm.openShop(9310111);*/
            cm.dispose();
            cm.openShop(2142912);
            break;
        case 13://夜光
            /*cm.dispose();
            cm.openShop(9000188);*/
            cm.dispose();
            cm.openShop(1400001);
            break;
        case 14://火炮
            cm.dispose();
            cm.openShop(1012124);
            break;
        case 15://双弩
            cm.dispose();
            cm.openShop(1100001);
            break;
        case 16://恶魔复仇者
			cm.dispose();
			cm.openShop(1033001);
            break;
        case 17://剑豪
            cm.dispose();
            cm.openShop(11100);
            break;
        case 18://阴阳师
            cm.dispose();
            cm.openShop(21000);
            break;	
        case 19://法师
            /*cm.dispose();
            cm.openShop(1012125);*/		
            cm.dispose();
            cm.openNpc(1033001,"zidandian");
            break;		
        }
    }
}