/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：签到
 *  @Author Kent 
 */

var a = 0;
var luckyItem = Array();
var selectedItem;
var needOnlineTime = 20;//需要在线时间


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            if (cm.getOnlineTime() < needOnlineTime) {
                cm.sendNextS("当前在线时间不足#r" + needOnlineTime + "#k分钟,无法进行签到,\r\n 请#r" + (needOnlineTime - cm.getOnlineTime()) + "#k分钟后再试.", 3);
                cm.dispose();
                return;
            } else if (!cm.Singin()) {
                cm.sendNextS("今天已经签到过啦。\r\n当前已经连续签到：" + cm.getSinginCount() + "天。\r\n记得明天再来签到哟。连续签到可以领取特别的礼包哟", 3);
                cm.dispose();
                return;
            }
            cm.sendOk("OK，你已经签到好啦！");
            cm.dispose();
        }
    }
}