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
        //Array(2431298, 1, 500, -1), 
        Array(2049419, 1, 1000, -1), //特殊潜能附加古卷
        Array(2048306, 1, 500, -1), //特殊附加潜能附加古卷
        Array(2049500, 1, 600, -1), //金色刻印之印
        Array(2049612, 1, 500, -1), //还原卷轴X1
        Array(2049752, 1, 100, -1),
        Array(2048700, 1, 100, -1), //涅槃火焰
        Array(2048701, 1, 150, -1),
        Array(2048702, 1, 200, -1),
        Array(2048703, 1, 250, -1),
        Array(2048704, 1, 800, -1),
        Array(2048724, 1, 1000, -1),
        Array(2048723, 1, 1200, -1) //涅槃火焰
        );


function start() {
    for (var i = 0; i < itemList.length; i++) {
        var itemId = itemList[i][0];
        str += "#L" + i + "#[我要兑换#v" + itemId + "##b#t" + itemId + "##k需要#r" + itemList[i][2] + "#k个枫叶]#k\r\n";
    }
    cm.sendSimple("#e你现在拥有 " + cm.getItemQuantity(4001126) + " 个枫叶#n\n\r\n" + str);
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
            cm.gainItem(4001126, -use);
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

