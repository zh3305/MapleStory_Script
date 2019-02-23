status = -1;
var itemList;
var random = java.lang.Math.floor(Math.random() * 7 + 1);
if(random == 1){
itemList = Array(
// ------ 卷轴 ------
Array(3994059, 500, 1, 3), //A级潜能卷轴
Array(3994060, 500, 1, 3), //S级潜能卷轴 30%
Array(3994061, 500, 1, 3), //盾牌攻击诅咒卷轴30%
Array(3994062, 500, 1, 3), //盾牌魔力诅咒卷轴30%
Array(3994063, 500, 1, 3), //品克缤手套攻击力卷轴
Array(3994064, 500, 1, 3), //品克缤手套攻击力卷轴
Array(3994065, 500, 1, 3), //惊人混沌卷轴30%
Array(3994066, 500, 1, 3), //白医卷轴—仙
Array(3994067, 500, 1, 3), //白医卷轴—神
Array(3994068, 500, 1, 3), //诅咒白医卷轴
Array(3994069, 500, 1, 3), //白医卷轴
Array(3994070, 500, 1, 3), //白医卷轴
Array(3994071, 500, 1, 3), //白医卷轴
Array(3994079, 500, 1, 3), //品克缤手套攻击力卷轴
Array(3994080, 500, 1, 3), //品克缤手套攻击力卷轴
Array(3994081, 500, 1, 3), //惊人混沌卷轴30%
Array(3994082, 500, 1, 3), //白医卷轴—仙
Array(3994083, 500, 1, 3), //白医卷轴—神
Array(3994084, 500, 1, 3), //诅咒白医卷轴
Array(3994070, 500, 1, 3), //白医卷轴
Array(3994072, 500, 1, 3)  //正向混沌卷
);
} else if(random == 2){
itemList = Array(
// ------ 药品 ------
Array(3994073, 500, 1, 3)  //迎春花花语
);
} else if(random == 3){
itemList = Array(
// ------ 坐骑 ------
Array(3994074, 500, 1, 3)  //蝙蝠怪1天使用券
);
} else if(random == 4){
itemList = Array(
// ------ 称号 ------
Array(3994075, 500, 1, 3)  //恶魔复仇者成就达成
);
} else if(random == 5){
itemList = Array(
// ------ 椅子 ------
Array(3994076, 500, 1, 3)  //大黄风
);
} else if(random == 6){
itemList = Array(
// ------ 装备 ------
Array(3994077, 500, 1, 3)  //黑龙传说指环
);
} else if(random == 7){
itemList = Array(
// ------ 特殊 ------
Array(3994078, 500, 1, 3)  //突破一万之石 50%
);
}

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
        var chance = Math.floor(Math.random() * 1100);
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
            item = im.gainGachaponItem(itemId, quantity, "每日礼物箱", notice);
            if (item != -1) {
		im.gainItem(2430781, -1);
                im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            im.dispose();
        } else {
	    im.gainItem(2430781, -1);
            im.sendOk("今天的运气可真差，什么都没有拿到。");
            im.dispose();
        }
    }
}