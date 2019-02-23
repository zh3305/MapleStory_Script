var status = 0;

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
            var selStr = "#r租借装备：#b\r\n#L1#扎昆头盔#v1002357#\r\n#L2#进阶扎昆头盔#v1003112#\r\n#L3#恐怖鬼娃的伤口#v1012170#\r\n#L4#斯塔切的黄金铲#v1502003#\r\n#L5#诺布的黄金十字镐#v1512003#\r\n#L11#黑天使的祝福戒指#v1112586#\r\n#L6#希望之树之传说戒指#v1112688#\r\n#L7#希望之树之传说耳环#v1032129#\r\n#L8#希望之树之传说项链#v1122185#\r\n#L9#希望之树之传说腰带#v1132135#\r\n#L10#希望之树之传说肩部#v1152077#\r\n#L12#传说撕裂者#v1482109#\r\n#L13#传说飞龙巨剑#v1402118#\r\n#L14#传说金龙轰天锤#v1422078#\r\n#L15#传说炼狱魔龙斧#v1412076#\r\n#L16#传说金龙振翅弓#v1452136#\r\n#L17#传说清月刀#v1342046#\r\n#L18#传说枫叶手杖#v1362059#\r\n#L19#传说半月龙鳞裂#v1332157#\r\n#L20#传说枭龙#v1492108#\r\n#L21#传说金龙弩枪#v1522027#\r\n#L22#传说神龙火炮#v1532044#\r\n#L23#传说寒木升龙拳#v1472148#\r\n#L24#传说黑精灵王杖#v1382131#\r\n#L25#传说黄金飞龙弩#v1462125#\r\n#L26#传说狂龙地锤#v1322112#\r\n#L27#传说佘太君龙杖#v1372106#\r\n#L28#传说血龙神斧#v1442143#\r\n#L29#传说盘龙七冲枪#v1432106#\r\n#L30#传说狂龙怒斩#v1312077#\r\n#L31#传说狂龙闪电剑#v1302179#";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 1:
            if (cm.getMeso() >= 2500000){
                cm.gainMeso( - 2500000);
		cm.gainItem(1002357,1,1);
                cm.sendOk("获得#b扎昆头盔#v1002357#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(250W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 6000000){
                cm.gainMeso( - 6000000);
		cm.gainItem(1003112,1,1);
                cm.sendOk("获得#b进阶扎昆头盔#v1003112#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(600W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1012170,1,2);
                cm.sendOk("获得#b恐怖鬼娃的伤口#v1012170#x2天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(1502003,1,1);
                cm.sendOk("获得#b斯塔切的黄金铲#v1502003#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1000W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 10000000){
                cm.gainMeso( - 10000000);
		cm.gainItem(1512003,1,1);
                cm.sendOk("获得#b诺布的黄金十字镐#v1512003#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1000W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1112688,1,3);
                cm.sendOk("获得#b希望之树之传说戒指#v1112688#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1032129,1,3);
                cm.sendOk("获得#b希望之树之传说耳环#v1032129#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1122185,1,3);
                cm.sendOk("获得#b希望之树之传说项链#v1122185#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 9:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1132135,1,3);
                cm.sendOk("获得#b希望之树之传说腰带#v1132135#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 10:
            if (cm.getMeso() >= 5000000){
                cm.gainMeso( - 5000000);
		cm.gainItem(1152077,1,3);
                cm.sendOk("获得#b希望之树之传说肩部#v1152077#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 11:
            if (cm.getMeso() >= 8000000){
                cm.gainMeso( - 8000000);
		cm.gainItem(1112586,1,1);
                cm.sendOk("获得#b黑天使的祝福戒指#v1112586#x1天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(800W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 12:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1482109,1,3);
                cm.sendOk("获得#b传说撕裂者#v1482109#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 13:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1402118,1,3);
                cm.sendOk("获得#b传说飞龙巨剑#v1402118#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 14:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1422078,1,3);
                cm.sendOk("获得#b传说金龙轰天锤#v1422078#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 15:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1412076,1,3);
                cm.sendOk("获得#b传说炼狱魔龙斧#v1412076#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 16:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1452136,1,3);
                cm.sendOk("获得#b传说金龙振翅弓#v1452136#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 17:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1342046,1,3);
                cm.sendOk("获得#b传说清月刀#v1342046#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 18:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1362059,1,3);
                cm.sendOk("获得#b传说枫叶手杖#v1362059#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 19:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1332157,1,3);
                cm.sendOk("获得#b传说半月龙鳞裂#v1332157#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 20:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1492108,1,3);
                cm.sendOk("获得#b传说枭龙#v1492108#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 21:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1522027,1,3);
                cm.sendOk("获得#b传说金龙弩枪#v1522027#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 22:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1532044,1,3);
                cm.sendOk("获得#b传说神龙火炮#v1532044#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 23:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1472148,1,3);
                cm.sendOk("获得#b传说寒木升龙拳#v1472148#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 24:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1382131,1,3);
                cm.sendOk("获得#b传说黑精灵王杖#v1382131#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 25:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1462125,1,3);
                cm.sendOk("获得#b传说黄金飞龙弩#v1462125#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 26:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1322112,1,3);
                cm.sendOk("获得#b传说狂龙地锤#v1322112#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 27:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1372106,1,3);
                cm.sendOk("获得#b传说佘太君龙杖#v1372106#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 28:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1442143,1,3);
                cm.sendOk("获得#b传说血龙神斧#v1442143#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 29:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1432106,1,3);
                cm.sendOk("获得#b传说盘龙七冲枪#v1432106#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 30:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1312077,1,3);
                cm.sendOk("获得#b传说狂龙怒斩#v1312077#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 31:
            if (cm.getMeso() >= 25000000){
                cm.gainMeso( - 25000000);
		cm.gainItem(1302179,1,3);
                cm.sendOk("获得#b传说狂龙闪电剑#v1302179#x3天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2500W)!\r\n注:(装备栏栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        }
    }
}