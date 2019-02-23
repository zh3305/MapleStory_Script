status = -1;
var itemList = Array(
1212095,// - 惊人的双手武器攻击力卷轴100% - 在双手武器上附加提升攻击力的属性。
1222089,// - 惊人的单手武器攻击力卷轴100% - 对单手武器增加攻击力提高属性。
1232089,
1402229,
1242095,
1302304,
1312179,
1322230,
1332254,
1362115,
1372201,
1382239,
1412158,
1422165,
1432194,
1442248,
1452232,
1462219,
1472241,
1482196,
1492205,
1522118,
1532124// - 惊人的单手武器魔力卷轴100% - 对单手武器增加魔力提高属性。
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
       if (mode == 0 && status == 0) {
			im.dispose();
			return;
		}
        status--;
    }
    if (status == 0) {
        var text = "";
		for(var i=0; i<itemList.length; i++) {
			text+="#L"+i+"##v"+itemList[i]+"##z"+itemList[i]+"##l\r\n";
		}
		im.sendSimple("请选择你要的：\r\n#r"+text);
    } else if(status == 1) {
		var itemid = itemList[selection];
		var itemnum = Math.floor(Math.random()*1+1);
		var item = im.gainGachaponItem(itemid, itemnum, "11周年神圣武器", 3);
		im.gainItem(2432709, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.dispose();
	}
}