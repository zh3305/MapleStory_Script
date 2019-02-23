status = -1;
var itemList = Array(
// ------ 卷轴 ------
Array(2431646, 400, 1, 3), // 星星
Array(3015097, 200, 1, 3), // 金鱼
Array(4032521, 100, 1, 3), // VIP邀请券
Array(3015098, 400, 1, 3), // 花蘑菇伪装椅子
Array(3015099, 400, 1, 3), // 扎纳罗非伪装椅子
Array(3015015, 400, 1, 3), // 白羊座椅子
Array(3015016, 400, 1, 3), // 金牛座椅子
Array(3015017, 400, 1, 3), // 双鱼座椅子
Array(3015018, 400, 1, 3), // 双子座椅子 
Array(3015019, 400, 1, 3), // 巨蟹座椅子
Array(3015020, 400, 1, 3), // 狮子座椅子 
Array(3015021, 400, 1, 3), // 天秤座椅子  
Array(3015022, 400, 1, 3), // 天蝎座椅子 
Array(3015023, 400, 1, 3), // 处女座椅子
Array(3015024, 400, 1, 3), // 射手座椅子
Array(3015025, 400, 1, 3), // 山羊座椅子
Array(3015026, 400, 1, 3), // 水瓶座椅子 
Array(3015027, 400, 1, 3), // 安德洛墨达椅子
Array(3012007, 400, 1, 3), // 石狮椅子
Array(3012008, 300, 1, 3), // 稻荷神社椅子
Array(3010967, 400, 1, 3), // 假面绅士海报椅子
Array(3010968, 300, 1, 3), // 假面绅士抱枕椅子
Array(3010973, 300, 1, 3), // 蝙蝠椅子
Array(3010853, 100, 1, 3), // 心花怒放椅子
Array(3015106, 300, 1, 3), // 罗曼蒂克天文台
Array(3015076, 300, 1, 3), // 雏祭娃娃4
Array(3015077, 300, 1, 3), // 雏祭娃娃5
Array(3015078, 300, 1, 3), // 雏祭娃娃6
Array(3015088, 300, 1, 3), // 元宵烟花椅
Array(3015093, 300, 1, 3), // 烟花绽放椅子
Array(3012027, 300, 1, 3), // 羊羊热气球椅子
Array(3012023, 300, 1, 3), // mPhone椅子
Array(3010756, 300, 1, 3), // 新年招财猫椅子
Array(3010980, 300, 1, 3), // 兔子箱椅子
Array(3010751, 200, 1, 3), // 鲸鱼椅子
Array(3015080, 200, 1, 3), // 被蛋卷椅子
Array(1162018, 10, 1, 3), //逆转
Array(1162017, 10, 1, 3),
Array(1032217, 10, 1, 3),
Array(1152156, 10, 1, 3),
Array(1003541, 20, 1, 3),
Array(1132174, 30, 1, 3),
Array(1132175, 30, 1, 3),
Array(1132176, 30, 1, 3),
Array(1132177, 30, 1, 3),
Array(1132178, 30, 1, 3),
Array(1102481, 30, 1, 3),
Array(1102482, 30, 1, 3),
Array(1102483, 30, 1, 3),
Array(1102484, 30, 1, 3),
Array(1102485, 30, 1, 3),
Array(1082543, 30, 1, 3),
Array(1082544, 30, 1, 3),
Array(1082545, 30, 1, 3),
Array(1082546, 30, 1, 3),
Array(1082547, 30, 1, 3),
Array(1072743, 30, 1, 3),
Array(1072744, 30, 1, 3),
Array(1072745, 30, 1, 3),
Array(1072746, 30, 1, 3),
Array(1072747, 30, 1, 3),
Array(1542063, 40, 1, 3),
Array(1552063, 40, 1, 3),
Array(1212063, 40, 1, 3),
Array(1222058, 40, 1, 3),
Array(1232057, 40, 1, 3),
Array(1242060, 40, 1, 3),
Array(1242061, 40, 1, 3),
Array(1302275, 40, 1, 3),
Array(1312153, 40, 1, 3),
Array(1412135, 40, 1, 3),
Array(1322203, 40, 1, 3),
Array(1332225, 40, 1, 3),
Array(1342082, 40, 1, 3),
Array(1362090, 40, 1, 3),
Array(1372177, 40, 1, 3),
Array(1382208, 40, 1, 3),
Array(1402196, 40, 1, 3),
Array(1422140, 40, 1, 3),
Array(1432167, 40, 1, 3),
Array(1442223, 40, 1, 3),
Array(1452205, 40, 1, 3),
Array(1462193, 40, 1, 3),
Array(1472214, 40, 1, 3),
Array(1482168, 40, 1, 3),
Array(1492179, 40, 1, 3),
Array(1522094, 40, 1, 3),
Array(1532098, 40, 1, 3),
Array(1252015, 40, 1, 3),
Array(1003797, 80, 1, 3),
Array(1003798, 80, 1, 3),
Array(1003799, 80, 1, 3),
Array(1003800, 80, 1, 3),
Array(1003801, 80, 1, 3),
Array(1042254, 80, 1, 3),
Array(1042255, 80, 1, 3),
Array(1042256, 80, 1, 3),
Array(1042257, 80, 1, 3),
Array(1042258, 80, 1, 3),
Array(1062165, 80, 1, 3),
Array(1062166, 80, 1, 3),
Array(1062167, 80, 1, 3),
Array(1062168, 80, 1, 3),
Array(1062169, 80, 1, 3)
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
            item = im.gainGachaponItem(itemId, quantity, "极品装备抽奖箱子", notice);
            if (item != -1) {
		im.gainItem(2431645, -1);
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