status = -1;
var itemList = Array(
1212065,// - 惊人的双手武器攻击力卷轴100% - 在双手武器上附加提升攻击力的属性。
1222060,// - 惊人的单手武器攻击力卷轴100% - 对单手武器增加攻击力提高属性。
1232058,
1242062,
1242063,
1302276,
1312154,
1322204,
1332226,
1342083,
1362091,
1372178,
1382209,
1402197,
1412136,
1422141,
1432168,
1442224,
1452206,
1462194,
1472215,
1482169,
1492180,
1522095,
1532099// - 惊人的单手武器魔力卷轴100% - 对单手武器增加魔力提高属性。
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
		var item = im.gainGachaponItem(itemid, itemnum, "真红武器", 3);
		im.gainItem(2431941, -1);
		im.sendOk("恭喜您，获得了"+itemnum+"个#b#z"+itemid+"#");
		im.dispose();
	}
}