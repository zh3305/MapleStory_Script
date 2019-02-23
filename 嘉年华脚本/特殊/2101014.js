/*
 笔芯制作★风云工作室所有
 完成时间：2013年8月31日 12:39:02
 脚本功能：阿里安特相关
 */

var a = 0;

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
            if (cm.getMap().getId() == 980010101 || cm.getMap().getId() == 180000000) {
                cm.sendOk("#e<阿里安特竞技场:注意事项>#n\r\n#d\r\n\r\n#b1）进入竞技场后，将有五分钟的时间消灭怪物。\r\n2）在规定时间内，消灭的怪物越多，结束时获得奖励越多。\r\n#e3）如果触碰陷阱，将会有可怕的怪物出现。#n\r\n4）组队中，消灭怪物最多的将会有额外的奖励。\r\n5）从竞技场获取的积分，可以从拍卖处兑换奖励。")
            } else {
                cm.warp(910000000);
            }
            cm.dispose();
        }//a
    }//mode
}//f