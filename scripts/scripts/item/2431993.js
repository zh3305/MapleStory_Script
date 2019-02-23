status = -1;
var itemList = Array(
// ------ 最高级贝勒德首饰 ------
Array(1113075, 400, 1, 3), //最高级贝勒德戒指
Array(1032223, 400, 1, 3), //最高级贝勒德耳环
Array(1122267, 400, 1, 3), //最高级贝勒德吊坠
Array(1132246, 400, 1, 3),  //最高级贝勒德腰带
Array(1132243, 800, 1, 3), // 低级贝勒德刻印腰带 - 雕刻着贝勒德的纹样的腰带。
Array(1132244, 700, 1, 3), // 中级贝勒德刻印腰带 - 雕刻着贝勒德的纹样的腰带。
Array(1132245, 600, 1, 3), // 高级贝勒德刻印腰带 - 雕刻着贝勒德的纹样的腰带。
Array(1122264, 800, 1, 3), // 低级贝勒德刻印吊坠 - 雕刻着贝勒德的纹样的吊坠。
Array(1122265, 700, 1, 3), // 中级贝勒德刻印吊坠 - 雕刻着贝勒德的纹样的吊坠。
Array(1122266, 600, 1, 3), // 高级贝勒德刻印吊坠 - 雕刻着贝勒德的纹样的吊坠。
Array(1032220, 800, 1, 3), // 低级贝勒德耳环 - 用贝勒德之核碎片制作而成的耳环。感觉有时会发出光芒。
Array(1032221, 700, 1, 3), // 中级贝勒德耳环 - 用贝勒德之核碎片制作而成的耳环。感觉有时会发出光芒。
Array(1032222, 600, 1, 3),  // 高级贝勒德耳环 - 用贝勒德之核碎片制作而成的耳环。感觉有时会发出光芒。
Array(1113072, 800, 1, 3), // 低级贝勒德戒指 - 用从贝勒德身上获得的核的碎片制作而成的戒指。. 
Array(1113073, 700, 1, 3),  // 中级贝勒德戒指 - 用从贝勒德身上获得的核的碎片制作而成的戒指。. 
Array(1113074, 600, 1, 3) // 高级贝勒德戒指 - 用从贝勒德身上获得的核的碎片制作而成的戒指。. 
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
        var chance = Math.floor(Math.random() * 800);
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
            item = im.gainGachaponItem(itemId, quantity, "贝勒德首饰箱", notice);
            if (item != -1) {
		im.gainItem(2431993, -1);
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