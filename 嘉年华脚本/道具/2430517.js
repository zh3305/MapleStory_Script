status = -1;
var itemList = Array(
// ------ 钻石椅子袋 ------
        Array(3010696,500, 1, 3),
	Array(3015482,500, 1, 3),
	Array(3015439,500, 1, 3),
	Array(3015443,500, 1, 3),
	Array(3015338,500, 1, 3),
	Array(3015002,500, 1, 3),
	Array(3015224,500, 1, 3),
	Array(3015155,500, 1, 3),
	Array(3015075,500, 1, 3),
	Array(3010070,500, 1, 3),
	Array(3010519,500, 1, 3),
        Array(3010520,500, 1, 3),
        Array(3015181,500, 1, 3),
        Array(3015328,500, 1, 3),
        Array(3016101,500, 1, 3),
	Array(3015315,500, 1, 3),
        Array(3015157,500, 1, 3),
        Array(3015131,500, 1, 3),
        Array(3010853,500, 1, 3),
        Array(3010658,500, 1, 3),
        Array(3010621,500, 1, 3),
        Array(3015051,500, 1, 3),
        Array(3010788,500, 1, 3),
        Array(3010670,500, 1, 3)
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
            item = im.gainGachaponItem(itemId, quantity, "钻石椅子袋", notice);
            if (item != -1) {
		im.gainItem(2430517, -1);
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