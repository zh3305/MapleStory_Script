status = -1;
var itemList = Array(
    //物品编码 几率  数量
Array(01012314,1,1),//暗影双刀面巾
Array(01032217,1,1),//逆转宝石耳环
Array(01152156,1,1),//逆转金属护肩
Array(01162018,1,1),//逆转法典
Array(1202026,1,1),//木·乔图腾
Array(1202025,1,1),//银·乔图腾
Array(1202024,1,1),//金·乔图腾
Array(1202023,1,1),//真·乔图腾
Array(01022058,1,1),//狸猫（眼饰）
Array(01022073,1,1),//划痕眼镜
Array(01022175,1,1)//坎特的新潜水镜
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
		im.gainItem(2431106, -1);
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
