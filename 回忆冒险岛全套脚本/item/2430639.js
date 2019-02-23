status = -1;
var itemList = Array(
// ------ 椅子 ------
Array(5062000, 700, 10, 1), //同一红伞下
Array(5062002, 700, 10, 1), //浴桶
Array(5064000, 700, 10, 1), //爱心椅子
Array(5062500, 700, 10, 1), //爱心椅子
Array(5062010, 700, 10, 1), //魔女的飞扫把
Array(2340000, 700, 10, 1), //红龙椅
Array(2049323, 350, 10, 1), //无损
Array(2049325, 700, 10, 1), //圣诞树椅子
Array(2049136, 500, 10, 1), //公主凳
Array(2049137, 700, 10, 1),
Array(2614017, 300, 2, 1),
Array(2431354, 700, 1, 1)
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
        var chance = Math.floor(Math.random() * 700);
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
            item = im.gainGachaponItem(itemId, quantity, "明日礼物箱子(银)", notice);
            if (item != -1) {
            im.gainItem(2430639, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：运动会币 x3。)");
            im.gainItem(4310030, 3);
            im.safeDispose();
        }
    }
}