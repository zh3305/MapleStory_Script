status = -1;
var itemList = Array(
    //物品编码 几率  数量
Array(1102476, 1, 1), //诺巴西亚戴斯披风
Array(1102477, 1, 1), //诺巴赫尔梅斯披风
Array(1102478, 1, 1), //诺巴凯伦披风
Array(1102479, 1, 1), //诺巴利卡昂披风
Array(1102480, 1, 1)  //诺巴阿尔泰披风
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
            im.safeDispose();
        }
        status--;
    }
    if (status == 0) {
        var  CounJl=0;
       for (var i = itemList.length - 1; i >= 0; i--) {
           CounJl+= itemList[i][1];
        } 

        var chance = Math.floor(Math.random() * CounJl);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
                break;
            }
             chance = chance - itemList[i][1];
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            //var notice = finalitem[finalchance][3];
            item = im.gainGachaponItem(itemId, quantity, "天筹礼包", 3);
            if (item != -1) {
		im.gainItem(2430096, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.safeDispose();
        } else {
            im.sendOk("一团白云飘过,什么事都没有发生过!!");
            im.safeDispose();
        }
    }
}