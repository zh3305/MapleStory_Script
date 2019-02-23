/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：高级搜索
 *  @Author Kent 
 */


var cashitem;
var status = -1;
var select = -1;
var time;

var itemList = Array(
        Array(2450085, 1, 1, -1), //幸运礼物: 双倍经验
        Array(2430578, 1, 2, -1), //蝙蝠魔骑宠卷
        Array(2022709, 1, 3, -1), //幸运礼物: 双倍爆率增益
        Array(4001126, 50, 4, -1), //枫叶
        Array(5211047, 1, 5, 3 * 3600000),
        Array(5152053, 1, 6, -1), //经验卡
        Array(2022800, 10, 7, -1), //
        Array(4001839, 300, 8, -1) //星星
        );


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    time = 15;
    if (status == 0) {
        cm.sendNext("想领取在线奖励么？\n\r 今日在线时间为：#e" + parseInt(cm.getOnlineTime()) + "#n 分钟。\n\r 共有 #r" + itemList.length + "#k 次奖励，当前已经领取了：#r" + cm.getPQLog("OnlineBonus") + "#k 次奖励！");
    } else if (status == 1) {
        var checktime = parseInt(cm.getOnlineTime() / time);
        if (cm.getPQLog("OnlineBonus") + 1 <= checktime && cm.getPQLog("OnlineBonus") < itemList.length) {
            var finalitem = Array();
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i][2] == cm.getPQLog("OnlineBonus") + 1) {
                    finalitem.push(itemList[i]);
                }
            }
            var itemId = finalitem[0][0];
            var quantity = finalitem[0][1];
            var period = finalitem[0][3];
            if (cm.canHold(itemId, quantity)) {
                if (period > 0) {
                    cm.gainItemPeriod(itemId, quantity, period);
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.setPQLog("OnlineBonus");
                cm.sendOk("恭喜你获得在线奖励！请" + time + "分钟后再来领取下一个奖励");
                cm.dispose();
            } else {
                cm.sendOk("请清理背包,以获得在线奖励!!");
                cm.dispose();

            }
        } else if (cm.getPQLog("OnlineBonus") >= itemList.length) {
            cm.sendOk("你已经领取完了今天的奖励了,请明天再来吧!");
            cm.dispose();
        } else {
            cm.sendOk("你还没有满足条件，只在线满一定时间就能来领取丰厚的奖励啦！！");
            cm.dispose();
        }
    } else {
        cm.dispose();
    }
}

