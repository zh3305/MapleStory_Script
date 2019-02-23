status = -1;
var itemList = Array(
// ------ 卷轴 ------
Array(1112144, 500, 1, 3), //祥龙单手武器攻击卷99% 
Array(1112101, 500, 1, 3), //祥龙单手武器魔力卷99% 
Array(1112103, 500, 1, 3),
Array(1112110, 500, 1, 3),
Array(1112118, 500, 1, 3),
Array(1112135, 500, 1, 3),
Array(1112136, 500, 1, 3),
Array(1112141, 500, 1, 3),
Array(1112142, 500, 1, 3),
Array(1112145, 500, 1, 3),
Array(1112146, 500, 1, 3),
Array(1112148, 500, 1, 3),//祥龙双手武器攻击卷99%
Array(1112149, 500, 1, 3),
Array(1112150, 500, 1, 3),
Array(1112154, 500, 1, 3),
Array(1112151, 500, 1, 3),
Array(1112152, 500, 1, 3),
Array(1112153, 500, 1, 3),
Array(1112157, 500, 1, 3),
Array(1112156, 500, 1, 3),
Array(1112158, 500, 1, 3),
Array(1112159, 500, 1, 3),
Array(1112160, 500, 1, 3),
Array(1112161, 500, 1, 3),
Array(1112170, 500, 1, 3),
Array(1112162, 500, 1, 3),
Array(1112163, 500, 1, 3),
Array(1112164, 500, 1, 3),
Array(1112165, 500, 1, 3),
Array(1112166, 500, 1, 3),
Array(1112171, 500, 1, 3),
Array(1112172, 500, 1, 3),
Array(1112173, 500, 1, 3),
Array(1112176, 500, 1, 3),
Array(1112178, 500, 1, 3),
Array(1112179, 500, 1, 3),
Array(1112178, 500, 1, 3),
Array(1112181, 500, 1, 3)
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
            item = im.gainGachaponItem(itemId, quantity, "卡特琳的礼物", notice);
            if (item != -1) {
		im.gainItem(2432228, -1);
                im.sendOk("恭喜你获得了 #b#t" + item + "##k ");
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