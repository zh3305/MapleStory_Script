/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：枫叶交换
 *  @Author Kent 
 */
var cashitem;
var status = -1;
var select = -1;
var time;
var itemId;
var quantity;
var x = 0;
var id;
var str = "";
var itemList = Array(
        Array(3015344, 1, 60, -1), //捕获僵尸拍立得 
        Array(3014010, 1, 100, -1), //捕获僵尸拍立得 
        Array(1162037, 1, 70, -1), //
        Array(1152192, 1, 70, -1), //
        Array(1132294, 1, 70, -1), //
        Array(1122322, 1, 70, -1), //
        Array(1032258, 1, 70, -1),
        Array(1022255, 1, 70, -1), //
        Array(1012545, 1, 70, -1), //
        Array(1182175, 1, 70, -1), //
        Array(1113210, 1, 70, -1) //
        );


function start() {
    for (var i = 0; i < itemList.length; i++) {
        var itemId = itemList[i][0];
        str += "#L" + i + "##v" + itemId + "##b#z" + itemId + "##k需要#r" + itemList[i][2] + "#k个豫园铜钱#k\r\n";
    }
    cm.sendSimple("#b你现在拥有 #r" + cm.getItemQuantity(4310177) + " #b个豫园铜钱#n\n\r\n" + str);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var limit = itemList[selection][3];
        if (limit > 0 && cm.getPQLog("领取：" + itemList[selection][0]) >= limit) {
            cm.sendOk("你今天已经不能再兑换这个物品了！");
            cm.dispose();
        } else if (cm.getItemQuantity(4001126) >= itemList[selection][2] && cm.getSpace(1) >= 1 && cm.getSpace(2) >= 1 && cm.getSpace(3) >= 1 && cm.getSpace(4) >= 1 && cm.getSpace(5) >= 1) {
            var id = itemList[selection][0];
            var quantity = itemList[selection][1];
            var use = itemList[selection][2];
            cm.gainItem(itemList[selection][0], quantity, id == 5211047 ? 1000 * 60 * 180 : -1);
            cm.gainItem(4310177, -use);
            if (limit > 0) {
                cm.setPQLog("领取：" + itemList[selection][0]);
            }
            cm.sendOk("兑换成功！");
            cm.dispose();
        } else {
            cm.sendOk("你还没有满足条件，请确认你有足够的枫叶或者背包空间不足(每一栏都必须要有1格以上的空间)！！");
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}

