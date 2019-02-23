status = -1;
var itemList = Array(
// ------ 黄金椅子袋 ------
        Array(3015400,500, 1, 3),
	Array(3015451,500, 1, 3),
	Array(3015382,500, 1, 3),
	Array(3015378,500, 1, 3),
	Array(3015395,500, 1, 3),
	Array(3015342,500, 1, 3),
	Array(3015331,500, 1, 3),
	Array(3015330,500, 1, 3),
	Array(3015329,500, 1, 3),
	Array(3015257,500, 1, 3),
	Array(3015263,500, 1, 3),
        Array(3015236,500, 1, 3),
        Array(3015272,500, 1, 3),
        Array(3015227,500, 1, 3),
        Array(3015262,500, 1, 3),
	Array(3015225,500, 1, 3),
        Array(3015182,500, 1, 3),
        Array(3012028,500, 1, 3),
        Array(3015211,500, 1, 3),
        Array(3015193,500, 1, 3),
        Array(3015183,500, 1, 3),
        Array(3015143,500, 1, 3),
        Array(3015161,500, 1, 3),
        Array(3015120,500, 1, 3),
        Array(3015118,500, 1, 3),
        Array(3015111,500, 1, 3),
        Array(3015078,500, 1, 3),
        Array(3015015,500, 1, 3),
        Array(3015016,500, 1, 3),
        Array(3015017,500, 1, 3),
        Array(3015018,500, 1, 3),
        Array(3015019,500, 1, 3),
        Array(3015020,500, 1, 3),
        Array(3015021,500, 1, 3),
        Array(3015022,500, 1, 3),
        Array(3015024,500, 1, 3),
        Array(3015025,500, 1, 3),
        Array(3015026,500, 1, 3),
        Array(3015096,500, 1, 3),
        Array(3012027,500, 1, 3),
        Array(3015080,500, 1, 3),
        Array(3015092,500, 1, 3),
        Array(3015091,500, 1, 3),
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
        Array(03015228,500, 1, 3),
        Array(03015229,500, 1, 3),
        Array(03015493,500, 1, 3),
        Array(03015494,500, 1, 3),
        Array(03015495,500, 1, 3),
        Array(03015482,500, 1, 3),
        Array(03012031,500, 1, 3),
        Array(3015277,500, 1, 3),
        Array(3010528,500, 1, 3),
        Array(3010145,500, 1, 3),
        Array(3010522,500, 1, 3),
        Array(3015023,500, 1, 3)
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
            item = im.gainGachaponItem(itemId, quantity, "黄金椅子袋", notice);
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