status = -1;
var itemList = Array(
// ------ 卷轴 ------
	Array(1032216, 50, 1, 3), //真红耳环
	Array(1152155, 50, 1, 3),  //真红护肩
	Array(1113070, 50, 1, 3), //真红之环
	Array(1412136, 300, 1, 3),  //真红崩溃
	Array(1532099, 300, 1, 3),  //终极魔方
	Array(1472215, 300, 1, 3),  //神话耳环
	Array(1362091, 300, 1, 3),  //星火幸运箱子
	Array(1242063, 300, 1, 3),  //正义火种
	Array(1242062, 300, 1, 3), 
	Array(1362019, 300, 1, 3), 
	Array(1432168, 300, 1, 3), 
	Array(1302276, 300, 1, 3), 
	Array(1492180, 300, 1, 3), // 迷你神兽椅子, 300), /
	Array(1522095, 300, 1, 3), // 摆钟椅子, 300), // 
	Array(1372178, 300, 1, 3), // 宝石枫叶椅子, 300), 
	Array(1212065, 300, 1, 3), // 热情的红色药水椅子, 300), /
	Array(1222060, 300, 1, 3), // 新鲜的蓝色药水椅子, 300), 
	Array(1442224, 300, 1, 3), // 兔子椅子, 300), // 
	Array(1462194, 300, 1, 3), // 椰子树沙滩椅, 300), 
	Array(1232058, 300, 1, 3), // 柿子树鞦韆, 300), 
	Array(1422141, 300, 1, 3), // 云朵洗手间椅子, 300), // 
	Array(1382209, 300, 1, 3), // 公沙沙兔靠垫, 300), // 
	Array(1332226, 300, 1, 3), // 海蓝天鹅绒沙发, 300), // 
	Array(1402197, 300, 1, 3), // 红色设计师椅子, 300), // 
	Array(1322204, 300, 1, 3), // 艾莉珍椅子, 300), // 
	Array(1482169, 300, 1, 3), // 红帽月妙抱枕椅, 300), 
	Array(1452206, 300, 1, 3), // 蓝帽月妙抱枕椅, 300), 
	Array(1312154, 300, 1, 3), // 扇子月妙抱枕椅, 300), 
	Array(1342083, 300, 1, 3) // 太平萧月妙抱枕椅, 300),
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
        var chance = Math.floor(Math.random() * 300);
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
            item = im.gainGachaponItem(itemId, quantity, "冒险勇士箱", notice);
            if (item != -1) {
		im.gainItem(2431878, -1);
               // im.warp(910000000, 0);
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