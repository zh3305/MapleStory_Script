
var status = 0;
var diff;
var time;
var sel;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

// 每个礼包所需的在线时长
//var condition = new Array(1440, 500, 500, 30, 30);


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

     var diff =  cm.getOnlineTime() - cm.getPQLog("在线时间奖励");

		if (status == 0) {
        var selStr = "请选择您要兑换的道具：\r\n你目前共有在线时间点数： #r" + diff + "#k #b点#n#r#e\r\n请注意，某些道具兑换以后无法交易！\r\n#n";
        selStr += "#L13##r1#b个 #v3010863# #z3010863#   #r800#b在线时间点数#l\r\n";
        selStr += "#L0##r1#b个 #v2432306# #z2432306#   #r700#b在线时间点数#l\r\n";
        selStr += "#L12##r1#b个 #v2432353# #z2432353#   #r500#b在线时间点数#l\r\n";
        selStr += "#L1##r1000#b 个#v4001839# #z4001839#   #r500#b在线时间点数#l\r\n";
        selStr += "#L2##r500#b个 #v4310036# #z4310036#   #r500#b在线时间点数#l\r\n";
        selStr += "#L3##r1#b个 #v2048300# #z2048300#   #r30#b在线时间点数#l\r\n";
        selStr += "#L4##r1#b个 #v2048301# #z2048301#   #r60#b在线时间点数#l\r\n";
        //selStr += "#L5##r1#b个 #v4001760# #z4001760#   #r300#b在线时间点数#l\r\n";
        selStr += "#L6##r1#b个 #v2614010# #z2614010#   #r90#b在线时间点数#l\r\n";
        selStr += "#L7##r1#b个 #v2614008# #z2614008#   #r180#b在线时间点数#l\r\n";
        selStr += "#L8##r1#b个 #v5000403# #z5000403#   #r1000#b在线时间点数#l\r\n";
        selStr += "#L9##r1#b个 #v5000404# #z5000404#   #r1000#b在线时间点数#l\r\n";
        selStr += "#L10##r1#b个 #v5000402# #z5000402#   #r1000#b在线时间点数#l\r\n";
       //selStr += "#L11##r1100#b 个#v2460003# #z2460003#   #r500#b在线时间点数#l\r\n";
        selStr += "#L14##r1#b个 #v1372041# #z1372041#   #r700#b在线时间点数#l\r\n";
        selStr += "#L15##r1#b个 #v1372042# #z1372042#   #r700#b在线时间点数#l\r\n";
        selStr += "#L16##r1#b个 #v1382049# #z1382049#   #r1440#b在线时间点数#l\r\n";
        selStr += "#L17##r1#b个 #v1382050# #z1382050#   #r1440#b在线时间点数#l\r\n";
        selStr += "#L18##r1#b个 #v1382051# #z1382051#   #r1440#b在线时间点数#l\r\n";
        selStr += "#L19##r1#b个 #v1382052# #z1382052#   #r1440#b在线时间点数#l\r\n";
        selStr += "#L20##r1#b个 #v1302150# #z1302150#   #r600#b在线时间点数#l\r\n";
        selStr += "#L21##r1#b个 #v1402044# #z1402044#   #r600#b在线时间点数#l\r\n";
        selStr += "#L22##r1#b个 #v1702092# #z1702092#   #r700#b在线时间点数#l\r\n";
        selStr += "#L23##r1#b个 #v1402014# #z1402014#   #r1440#b在线时间点数#l\r\n";


		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
	if (cm.getOnlineTime() >= 700 && diff > 700) {
            cm.gainItem(2432306, 1);
            cm.setPQLog("在线时间奖励",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间700点奖励，给予冒险岛游戏箱作为奖励");
            cm.sendOk("#r - 700分钟奖励 >> \r\n#d领取成功#k\r\n获得#v2432306#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有700分钟在线点.");
			cm.dispose();
			}
			break;
		case 1:
	if (cm.getOnlineTime() >= 500 && diff > 500) {
            cm.gainItem(4001839, 1000);
            cm.setPQLog("在线时间奖励",0,500)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间500点奖励，给予1000个星星作为奖励");
            cm.sendOk("#r - 500分钟奖励 >> \r\n#d领取成功#k\r\n获得1000个星星！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有500分钟在线点.");
			cm.dispose();
			}
			break;
		case 2:
	if (cm.getOnlineTime() >= 500 && diff > 500) {
            cm.gainItem(4310036, 500);
            cm.setPQLog("在线时间奖励",0,500)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  领取在线时间500点奖励，给予500个征服者币作为奖励");
            cm.sendOk("#r - 500分钟奖励 >> \r\n#d领取成功#k\r\n获得500个#v4310036#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有500分钟在线点.");
			cm.dispose();
			}
			break;
		case 3:
	if (cm.getOnlineTime() >= 30 && diff > 30) {
            cm.gainItem(2048300, 1);
            cm.setPQLog("在线时间奖励",0,30)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  领取在线时间30点奖励，给予1个银光潜能附加印章作为奖励");
            cm.sendOk("#r - 30分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z2048300#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有30分钟在线点.");
			cm.dispose();
			}
			break;
		case 4:
	if (cm.getOnlineTime() >= 60 && diff > 60) {
            cm.gainItem(2048301, 1);
            cm.setPQLog("在线时间奖励",0,60)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  领取在线时间60点奖励，给予1个金光潜能附加印章作为奖励");
            cm.sendOk("#r - 60分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z2048301#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有60分钟在线点.");
			cm.dispose();
			}
			break;
		case 5:
	if (cm.getOnlineTime() >= 300 && diff > 300) {
            cm.gainItem(4001839, 1);
            cm.setPQLog("在线时间奖励",0,300)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间300点奖励，给予1个极限门票作为奖励");
            cm.sendOk("#r - 300分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z4001760#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有300分钟在线点.");
			cm.dispose();
			}
			break;
		case 6:
	if (cm.getOnlineTime() >= 90 && diff > 90) {
            cm.gainItem(2614010, 1);
            cm.setPQLog("在线时间奖励",0,90)
        cm.worldSpouseMessage(0x15,"" + cm.getChar().getName() + "  领取在线时间90点奖励，给予1个突破十万之石 50%作为奖励");
            cm.sendOk("#r - 90分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z2614010#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有90分钟在线点.");
			cm.dispose();
			}
			break;
		case 7:
	if (cm.getOnlineTime() >= 180 && diff > 180) {
            cm.gainItem(2614008, 1);
            cm.setPQLog("在线时间奖励",0,180)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间180点奖励，给予1个突破百万之石 30%作为奖励");
            cm.sendOk("#r - 180分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z2614008#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有180分钟在线点.");
			cm.dispose();
			}
			break;
		case 8:
	if (cm.getOnlineTime() >= 1000 && diff > 1000) {
           // cm.gainItem(5000403, 1);
            cm.gainPetItem(5000403, 1);  
            cm.setPQLog("在线时间奖励",0,1000)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1000点奖励，给予1个小士兵阿红作为奖励");
            cm.sendOk("#r - 1000分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z5000403#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1000分钟在线点.");
			cm.dispose();
			}
			break;
		case 9:
	if (cm.getOnlineTime() >= 1000 && diff > 1000) {
           // cm.gainItem(5000404, 1);
          cm.gainPetItem(5000404, 1);
            cm.setPQLog("在线时间奖励",0,1000)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1000点奖励，给予1个小士兵阿蓝作为奖励");
            cm.sendOk("#r - 1000分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z5000404#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1000分钟在线点.");
			cm.dispose();
			}
			break;
		case 10:
	if (cm.getOnlineTime() >= 1000 && diff > 1000) {
           cm.gainItem(5000402, 1);
            cm.setPQLog("在线时间奖励",0,1000)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1000点奖励，给予1个芭蕾舞女孩丽恩作为奖励");
            cm.sendOk("#r - 1000分钟奖励 >> \r\n#d领取成功#k\r\n获得100个#z5000402#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1000分钟在线点.");
			cm.dispose();
			}
			break;
		case 11:
	if (cm.getOnlineTime() >= 500 && diff > 500) {
           cm.gainItem(2460003, 1100);

            cm.setPQLog("在线时间奖励",0,500)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间500点奖励，给予1100个鉴定放大镜(特级)作为奖励");
            cm.sendOk("#r - 500分钟奖励 >> \r\n#d领取成功#k\r\n获得1100个#z2460003#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有500分钟在线点.");
			cm.dispose();
			}
			break;
		case 12:
	if (cm.getOnlineTime() >= 500 && diff > 500) {
           cm.gainItem(2432353, 1);
            cm.setPQLog("在线时间奖励",0,500)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间500点奖励，给予1个开心！转盘箱子作为奖励");
            cm.sendOk("#r - 500分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z2432353#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有500分钟在线点.");
			cm.dispose();
			}
			break;
		case 13:
	if (cm.getOnlineTime() >= 800 && diff > 800) {
           cm.gainItem(3010863, 1);
            cm.setPQLog("在线时间奖励",0,800)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间800点奖励，给予1个愤怒的美发师椅子作为奖励");
            cm.sendOk("#r - 800分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z3010863#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有800分钟在线点.");
			cm.dispose();
			}
			break;
		case 14:
	if (cm.getOnlineTime() >= 700 && diff > 700) {
           cm.gainItem(1372041, 1);
            cm.setPQLog("在线时间奖励",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间700点奖励，给予1个寒冰之杖作为奖励");
            cm.sendOk("#r - 700分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1372041#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有700分钟在线点.");
			cm.dispose();
			}
			break;
		case 15:
	if (cm.getOnlineTime() >= 700 && diff > 700) {
           cm.gainItem(1372042, 1);
            cm.setPQLog("在线时间奖励",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间700点奖励，给予1个狂雷之杖作为奖励");
            cm.sendOk("#r - 700分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1372042#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有700分钟在线点.");
			cm.dispose();
			}
			break;
		case 16:
	if (cm.getOnlineTime() >= 1440 && diff > 1440) {
            cm.gainItem(1382049, 1);
            cm.setPQLog("在线时间奖励",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1440点奖励，给予1个朱雀长杖作为奖励");
            cm.sendOk("#r - 1440分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1382049#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1440分钟在线点.");
			cm.dispose();
			}
			break;
		case 17:
	if (cm.getOnlineTime() >= 1440 && diff > 1440) {
            cm.gainItem(1382050, 1);
            cm.setPQLog("在线时间奖励",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1440点奖励，给予1个玄武长杖作为奖励");
            cm.sendOk("#r - 1440分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1382050#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1440分钟在线点.");
			cm.dispose();
			}
			break;
		case 18:
	if (cm.getOnlineTime() >= 1440 && diff > 1440) {
            cm.gainItem(1382051, 1);
            cm.setPQLog("在线时间奖励",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1440点奖励，给予1个白虎长杖作为奖励");
            cm.sendOk("#r - 1440分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1382051#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1440分钟在线点.");
			cm.dispose();
			}
			break;
		case 19:
	if (cm.getOnlineTime() >= 1440 && diff > 1440) {
            cm.gainItem(1382052, 1);
            cm.setPQLog("在线时间奖励",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1440点奖励，给予1个青龙长杖作为奖励");
            cm.sendOk("#r - 1440分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1382052#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1440分钟在线点.");
			cm.dispose();
			}
			break;
		case 20:
	if (cm.getOnlineTime() >= 600 && diff > 600) {
            cm.gainItem(1302150, 1);
            cm.setPQLog("在线时间奖励",0,600)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间600点奖励，给予1个魔女的扫把作为奖励");
            cm.sendOk("#r - 600分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1302150#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有600分钟在线点.");
			cm.dispose();
			}
			break;
		case 21:
	if (cm.getOnlineTime() >= 600 && diff > 600) {
            cm.gainItem(1402044, 1);
            cm.setPQLog("在线时间奖励",0,600)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间600点奖励，给予1个南瓜灯笼作为奖励");
            cm.sendOk("#r - 600分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1402044#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有600分钟在线点.");
			cm.dispose();
			}
			break;
		case 22:
	if (cm.getOnlineTime() >= 700 && diff > 700) {
            cm.gainItem(1702092, 1);
            cm.setPQLog("在线时间奖励",0,700)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间700点奖励，给予1个南瓜拐杖作为奖励");
            cm.sendOk("#r - 700分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1702092#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有700分钟在线点.");
			cm.dispose();
			}
			break;
		case 23:
	if (cm.getOnlineTime() >= 1440 && diff > 1440) {
            cm.gainItem(1402014, 1);
            cm.setPQLog("在线时间奖励",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1440点奖励，给予1个温度计作为奖励");
            cm.sendOk("#r - 1440分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1402014#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1440分钟在线点.");
			cm.dispose();
			}
			break;
		case 24:
	if (cm.getOnlineTime() >= 1440 && diff > 1440) {
            cm.gainItem(1382050, 1);
            cm.setPQLog("在线时间奖励",0,1440)
        cm.worldSpouseMessage(0x20,"" + cm.getChar().getName() + "  领取在线时间1440点奖励，给予1个玄武长杖作为奖励");
            cm.sendOk("#r - 1440分钟奖励 >> \r\n#d领取成功#k\r\n获得1个#z1382050#！");
			cm.dispose();
			} else {
			cm.sendOk("你还没有1440分钟在线点.");
			cm.dispose();
			}
			break;


	}
    }
}