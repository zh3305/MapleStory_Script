status = -1;
var itemList = Array(
// ------ 150装备 ------
Array(1542063,500,1,3),  //
Array(1552063,500,1,3),  //
Array(1212063,500,1,3),  //
Array(1222058,500,1,3),  //
Array(1242060,500,1,3),  //
Array(1242061,500,1,3),  //
Array(1302275,500,1,3),  //
Array(1312153,500,1,3),  //
Array(1412135,500,1,3),  //
Array(1322203,500,1,3),  //
Array(1332225,500,1,3),  //
Array(1342082,500,1,3),  //
Array(1362090,500,1,3),  //
Array(1372177,500,1,3),  //
Array(1382208,500,1,3),  //
Array(1402196,500,1,3),  //
Array(1422140,500,1,3),  //
Array(1432167,500,1,3),  //
Array(1442223,500,1,3),  //
Array(1452205,500,1,3),  //
Array(1462193,500,1,3),  //
Array(1472214,500,1,3),  //
Array(1482168,500,1,3),  //
Array(1492179,500,1,3),  //
Array(1522094,500,1,3),  //
Array(1532098,500,1,3),  //
Array(1252015,500,1,3)  //
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            im.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            im.dispose();
        }
        status--;
    }
    if (status == 0) {
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "150武器箱", notice);
            if (item != -1) {
		im.gainItem(2431509, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的运气可真差，什么都没有拿到。");
            im.safeDispose();
        }
    }
}