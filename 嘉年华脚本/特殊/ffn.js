importPackage(Packages.client.inventory);
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var status = 0;
var choose = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {


            var text = "#e你好,您需要兑换武器吗!\r\n#d在线时间可以获得#v4310110#，60分钟获得1个，120至360分钟可以获得2个，720分钟可以领10个！(一天总共15个)\n\r\n\r\n";
           text += "#r#L2#" + eff + " 我要用600个#v4000000#兑换低级贝勒#l\r\n";
            text += "#b#L3#" + eff + " 我要用600个#v4000000#兑换135级布莱克缤#l\r\n";
            text += "#r#L4#" + eff + " 我要用#v4310110#兑换150级法弗纳武器#l\r\n";
			
            cm.sendSimple(text);

        } else if (status == 1) {
           
			switch(selection){
				case 2:
					cm.dispose();
                                        cm.openNpc(9010022,"djbl");
					break;
				case 3:
					cm.dispose();
                                        cm.openNpc(9010022,"blkb");
					break;
				case 4:
					cm.sendYesNo("确定要用#v4310110#兑换150级法弗纳武器吗");
					break;
			}
			choose = selection;
        } else if (status == 2) {
            switch(choose){

				case 4:


					var text = "#e你好,您您可以兑换如下法弗纳装备!\r\n";
					text += "#d#L100# 300个 #v4310110#兑换 法弗纳皇刀正宗 #v1542063##l\r\n";
					text += "#d#L200# 300个 #v4310110#兑换 法弗纳煌扇蓝姬 #v1552063##l\r\n";
					text += "#d#L1# 300个 #v4310110#兑换 法弗纳魔力源泉杖 #v1212063##l\r\n";
					text += "#d#L2# 300个 #v4310110#兑换 法弗纳天使手铳 #v1222058##l\r\n";
					text += "#d#L3# 300个 #v4310110#兑换 法弗纳死亡使者 #v1232057##l\r\n";
					text += "#d#L4# 300个 #v4310110#兑换 法弗纳精神之刃 #v1242060##l\r\n";
					text += "#d#L5# 300个 #v4310110#兑换 法弗纳精神之刃 #v1242061##l\r\n";
					text += "#d#L6# 300个 #v4310110#兑换 法弗纳银槲之剑 #v1302275##l\r\n";
					text += "#d#L7# 300个 #v4310110#兑换 法弗纳双刃切肉斧 #v1312153##l\r\n";
					text += "#d#L8# 300个 #v4310110#兑换 法弗纳戈耳迪锤 #v1322203##l\r\n";
					text += "#d#L9# 300个 #v4310110#兑换 法弗纳大马士革剑 #v1332225##l\r\n";
					text += "#d#L10# 300个 #v4310110#兑换 法弗纳急速之刃 #v1342082##l\r\n";
					text += "#d#L11# 300个 #v4310110#兑换 法弗纳洞察手杖 #v1362090##l\r\n";
					text += "#d#L12# 300个 #v4310110#兑换 法弗纳魔力夺取者 #v1372177##l\r\n";
					text += "#d#L13# 300个 #v4310110#兑换 法弗纳魔冠之杖 #v1382208##l\r\n";
					text += "#d#L14# 300个 #v4310110#兑换 法弗纳忏悔之剑 #v1402196##l\r\n";
					text += "#d#L16# 300个 #v4310110#兑换 法弗纳战斗切肉斧 #v1412135##l\r\n";
					text += "#d#L17# 300个 #v4310110#兑换 法弗纳闪电锤 #v1422140##l\r\n";
					text += "#d#L18# 300个 #v4310110#兑换 法弗纳贯雷枪  #v1432167##l\r\n";
					text += "#d#L19# 300个 #v4310110#兑换 法弗纳半月宽刃斧 #v1442223##l\r\n";
					text += "#d#L20# 300个 #v4310110#兑换 法弗纳追风者 #v1452205##l\r\n";
					text += "#d#L21# 300个 #v4310110#兑换 法弗纳风翼弩 #v1462193##l\r\n";
					text += "#d#L22# 300个 #v4310110#兑换 法弗纳危险之手 #v1472214##l\r\n";
					text += "#d#L23# 300个 #v4310110#兑换 法弗纳巨狼之爪 #v1482168##l\r\n";
					text += "#d#L24# 300个 #v4310110#兑换 法弗纳左轮枪 #v1492179##l\r\n";
					text += "#d#L25# 300个 #v4310110#兑换 法弗纳双风翼弩 #v1522094##l\r\n";
					text += "#d#L26# 300个 #v4310110#兑换 法弗纳荣耀炮 #v1532098##l\r\n";
					text += "#d#L27# 300个 #v4310110#兑换 法弗纳北极星魔法棒 #v1252015##l\r\n";
					cm.sendSimple(text);
					break;
			}
            
        }else if(status == 3){
			switch(selection){
				case 100:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1542063,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 200:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1552063,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 1:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1212063,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 2:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1222058,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 3:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1232057,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 4:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1242060,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 5:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1242061,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 6:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1302275,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 7:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1312153,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 8:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1322203,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 9:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1332225,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 10:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1342082,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 11:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1362090,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 12:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1372177,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 13:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1382208,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 14:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1402196,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 16:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1412135,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 17:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1422140,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 18:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1432167,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 19:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1442223,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 20:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1452205,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 21:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1462193,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 22:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1472214,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 23:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1482168,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 24:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1492179,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 25:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1522094,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 26:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1532098,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
				case 27:
					if(cm.haveItem(4310110, 300)) {
						cm.gainItem(4310110,-300);
						cm.gainItem(1252015,1);
						cm.sendSimple("兑换成功");
					}else{
						cm.sendSimple("您背包没有300个#v4310110#");
					}
					cm.dispose();
					break;
			}
		}
    }
}