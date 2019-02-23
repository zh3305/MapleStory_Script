status = -1;
var itemList = Array(
// ------ 狮心宝物箱 ------
 Array(1102275,500, 1, 3),
	Array(1152108,500, 1, 3),
	Array(1082295,500, 1, 3),
	Array(1052314,500, 1, 3),
	Array(1302152,500, 1, 3),
	Array(1542015,500, 1, 3),
	Array(1442116,500, 1, 3),
	Array(1322096,500, 1, 3),
	Array(1232014,500, 1, 3),
	Array(1422066,500, 1, 3),
	Array(1312065,500, 1, 3),
        Array(1412065,500, 1, 3),
        Array(1412065,500, 1, 3),
        Array(1402095,500, 1, 3),
        Array(1003172,500, 1, 3),
	Array(1072485,500, 1, 3)
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
            item = im.gainGachaponItem(itemId, quantity, "狮心宝物箱", notice);
            if (item != -1) {
		im.gainItem(2430516, -1);
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