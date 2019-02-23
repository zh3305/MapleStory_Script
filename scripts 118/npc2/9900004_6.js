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
        var selStr = "#r租借勋章：#b\r\n#L1#钓鱼王勋章#v1142146#\r\n#L2#2012龙年勋章#v1142371#\r\n#L3#品克缤杀手勋章#v1142008#\r\n#L4#热爱冒险岛勋章#v1142100#\r\n#L5#诚实的冒险家勋章#v1142000#\r\n#L6#组队任务狂人勋章#v1142001#\r\n#L7#冒险岛设计师勋章#v1142173#\r\n#L8#冒险岛艺术家勋章#v1142174#\r\n#L9#冒险岛漫画家勋章#v1142175#\r\n#L10#冒险岛文学家勋章#v1142176#\r\n#L11#冒险岛收藏家勋章#v1142177#\r\n#L14#暗黑龙王杀手勋章#v1142007#\r\n#L12#夏日花朵王座勋章#v1142210#\r\n#L13#皇冠王座收藏勋章#v1142211#\r\n#L15#传说中的冒险家勋章#v1142005#\r\n#L16#冒险岛偶像明星勋章#v1142006#"
 cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 1:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142146,1,7);
                cm.sendOk("获得#b钓鱼王勋章#v1142146#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(6000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 2:
            if (cm.getMeso() >= 100000000){
                cm.gainMeso( - 100000000);
		cm.gainItem(1142371,1,7);
                cm.sendOk("获得#b2012龙年勋章#v1142371#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1E)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 3:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010073) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010073,-1);
		cm.gainItem(1142008,1,30);
                cm.sendOk("获得#b品克缤杀手勋章#v1142008#x30天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)或baby品克缤!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 4:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142000,1,7);
                cm.sendOk("获得#b热爱冒险岛勋章#v1142000#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 5:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142000,1,7);
                cm.sendOk("获得#b诚实的冒险家勋章#v1142000#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 6:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142001,1,7);
                cm.sendOk("获得#b组队任务狂人勋章#v1142001#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 7:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142173,1,7);
                cm.sendOk("获得#b冒险岛设计师勋章#v1142173#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 8:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142174,1,7);
                cm.sendOk("获得#b冒险岛艺术家勋章#v1142174#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 9:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142175,1,7);
                cm.sendOk("获得#b冒险岛漫画家勋章#v1142175#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 10:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142176,1,7);
                cm.sendOk("获得#b冒险岛文学家勋章#v1142176#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 11:
            if (cm.getMeso() >= 50000000){
                cm.gainMeso( - 50000000);
		cm.gainItem(1142177,1,7);
                cm.sendOk("获得#b冒险岛收藏家勋章#v1142177#x7天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(5000W)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 12:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010123) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010123,-1);
		cm.gainItem(1142210,1,30);
                cm.sendOk("获得#b夏日花朵王座勋章#v1142210#x30天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)或夏日花朵椅子!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 13:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010119) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010119,-1);
		cm.gainItem(1142211,1,30);
                cm.sendOk("获得#b皇冠王座收藏勋章#v1142211#x30天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)或羊羊椅子!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 14:
            if (cm.getMeso() >= 20000000 && cm.itemQuantity(3010128) >=1){
                cm.gainMeso( - 20000000);
		cm.gainItem(3010128,-1);
		cm.gainItem(1142007,1,14);
                cm.sendOk("获得#b暗黑龙王杀手勋章#v1142007#x14天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(2000W)或黑龙椅子!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 15:
            if (cm.getMeso() >= 10000000 && cm.getPlayer().getFame() >= 50){
                cm.gainMeso( - 10000000);
		cm.gainFame(-50);
		cm.gainItem(1142005,1,30);
                cm.sendOk("获得#b传说中的冒险家勋章#v1142005#x30天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(100W)或人气(50)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        case 16:
            if (cm.getMeso() >= 10000000 && cm.getPlayer().getFame() >= 100){
                cm.gainMeso( - 10000000);
		cm.gainFame(-100);
		cm.gainItem(1142006,1,30);
                cm.sendOk("获得#b冒险岛偶像明星勋章#v1142006#x30天权");
        	cm.dispose();
            } else {
                cm.sendOk("#r租借失败:\r\n#b1.你没有足够的冒险币(1000W)或人气(100)!\r\n注:(装备栏3个空位以上.)");
        	cm.dispose();
            }
            break;
        }
    }
}