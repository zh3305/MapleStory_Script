/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：签到礼包领取
 *  @Author Kent 
 */
﻿var status = 0;
var giftContent = Array(
        Array("点券大礼包", 1, Array(
                //物品ID ，数量
                Array(5211047, 1),
                Array(5360014, 1),
                Array(1112100, 1),
                Array(5000208, 1)
                )),
        Array("公园大礼包", 3, Array(
                Array(4310020, 100),
                Array(2431987, 1),
                Array(2028079, 20),
                Array(2550000, 15),
                Array(2028080, 20)
                )),
        Array("潜能大礼包", 5, Array(
                Array(5062002, 7),
                Array(2049751, 5),
                Array(2049500, 5),
                Array(2048307, 5),
                Array(2048201, 10),
                Array(2531000, 10)
                )),
        Array("强化大礼包", 10, Array(
                Array(2049160, 12),
                Array(2049116, 6),
                Array(2340000, 3),
                Array(2470000, 3),
                Array(4001832, 200),
                Array(4001839, 200)
                )),
        Array("安卓大礼包", 16, Array(
                Array(2510173, 1),
                Array(2510174, 1),
                Array(4004001, 150),
                Array(2470000, 3),
                Array(2510407, 1),
                Array(4021021, 3)
                )),
        Array("黑天使大礼包", 23, Array(
                //物品ID ，数量
                Array(4005003, 20),
                Array(4005001, 20),
                Array(4021016, 10),
                Array(2511107, 1)
                )),
        Array("最强签到大礼包", 31, Array(
                Array(5062006, 10),
                Array(2049130, 10),
                Array(2470000, 7),
                Array(2501000, 1),
                Array(5064000, 15),
                Array(3010070, 1)
                ))
        //可以再添加一些礼包  名字后面的数字是 连续签到的天数       
        );

var giftId = -1;
var gifts = null;
var days = 999;
function start() {
    status = -1;
    action(1, 0, 0);
}
function gettime(itemid) {
    switch (itemid) {
        case 5211047:
        case 5360014:
            return 3 * 60 * 60 * 1000;
        case 1112100:
        case 5000008:
            return 30 * 24 * 60 * 60 * 1000;
        default:
            return -1;
    }
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "";
        text += "#e#b欢迎来到Funms每日签到礼包领取中心，点击可以查看礼包内的物品哦！#n\r\n";
        for (var key in giftContent) {
            var get = cm.getPQLog(giftContent[key][0], 0, 31) > 0;
            var can = cm.getSinginCount() >= giftContent[key][1];
            text += "#b#L" + key + "#领取【#r" + giftContent[key][0] + "#n#b】 #e#d" + " 需要连续签到#r" + giftContent[key][1] + "#k天(" + (can ? get ? "已领取" : "未领取" : "未达成") + ")#n#b#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        days = giftContent[giftId][1];
        gifts = giftContent[giftId][2];
        var text = "#r#e" + giftContent[giftId][0] + "#n#b：\r\n";
        for (var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text += "#i" + itemId + ":##b#z" + itemId + "##k #rx " + itemQuantity + "#k\r\n";
        }
        text += "\r\n#d#e#r是否领取签到礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId != -1 && gifts != null) {
            if (cm.getSpace(1) < 4 || cm.getSpace(2) < 4 || cm.getSpace(3) < 4 || cm.getSpace(4) < 4 || cm.getSpace(5) < 4) {
                cm.sendOk("#b您的背包空间不足，请保证每个栏位至少4格的空间，以避免领取失败。");
                cm.dispose();
                return;
            }
            if (cm.getSinginCount() < days) {
                cm.sendOk("您还没有连续签到#r" + days + "#k天呀，请再接再厉。");
                cm.dispose();
                return;
            }
            if (cm.getPQLog(giftContent[giftId][0], 0, 31) > 0) {
                cm.sendOk("你已经领取过了这个礼包了！");
                cm.dispose();
                return;
            }
            for (var key in gifts) {
                var itemId = gifts[key][0];
                var itemQuantity = gifts[key][1];
                var time = gettime(itemId);
                if (itemId == 5000208) {
                    cm.gainPetItem(itemId, itemQuantity);
                } else {
                    cm.gainItem(itemId, itemQuantity, time);
                }

            }
            cm.setPQLog(giftContent[giftId][0]);
            cm.sendOk("恭喜您，领取礼包成功！");
            cm.dispose();
        } else {
            cm.sendOk("兑换错误！请联系管理员！");
            cm.dispose();
        }
    }
}