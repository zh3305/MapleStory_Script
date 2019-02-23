status = -1;
var itemList = Array(
// ------ 绳质椅子袋 ------
        Array(3010717,500, 1, 3),
	Array(3010718,500, 1, 3),
	Array(3010730,500, 1, 3),
	Array(3010739,500, 1, 3),
	Array(3012018,500, 1, 3),
	Array(3010737,500, 1, 3),
	Array(3010779,500, 1, 3),
	Array(3010804,500, 1, 3),
	Array(3010810,500, 1, 3),
	Array(3010812,500, 1, 3),
	Array(3010815,500, 1, 3),
        Array(3010837,500, 1, 3),
        Array(3010854,500, 1, 3),
        Array(3010795,500, 1, 3),
        Array(3010794,500, 1, 3),
	Array(3010714,500, 1, 3),
        Array(3010732,500, 1, 3),
        Array(3010831,500, 1, 3),
        Array(3010830,500, 1, 3),
        Array(3010829,500, 1, 3),
        Array(3010828,500, 1, 3),
        Array(3010827,500, 1, 3),
        Array(3010826,500, 1, 3),
        Array(3010825,500, 1, 3),
	Array(3010824,500, 1, 3),
	Array(3010813,500, 1, 3),
	Array(3010806,500, 1, 3),
	Array(3010754,500, 1, 3),
	Array(3010751,500, 1, 3),
	Array(3012024,500, 1, 3),
	Array(3012025,500, 1, 3),
	Array(3015058,500, 1, 3),
	Array(3015023,500, 1, 3),
	Array(3015024,500, 1, 3),
        Array(3015060,500, 1, 3),
	Array(3015026,500, 1, 3),
	Array(3010968,500, 1, 3),
        Array(3012027,500, 1, 3),
	Array(3015080,500, 1, 3),
	Array(3015092,500, 1, 3),
	Array(3015106,500, 1, 3),
	Array(3015047,500, 1, 3),
	Array(3015034,500, 1, 3),
	Array(3010939,500, 1, 3),
	Array(3010938,500, 1, 3),
	Array(3010937,500, 1, 3),
        Array(3010964,500, 1, 3),
        Array(3012026,500, 1, 3),
        Array(3010936,500, 1, 3),
        Array(3010879,500, 1, 3),
        Array(3010843,500, 1, 3),
        Array(3010842,500, 1, 3),
        Array(3010838,500, 1, 3),
        Array(3010783,500, 1, 3),
        Array(3010715,500, 1, 3),
        Array(3010620,500, 1, 3),
        Array(3010528,500, 1, 3),
        Array(3010145,500, 1, 3),
        Array(3010522,500, 1, 3),		
        Array(3015078,500, 1, 3)
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
            item = im.gainGachaponItem(itemId, quantity, "绳质椅子袋", notice);
            if (item != -1) {
		im.gainItem(2430514, -1);
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