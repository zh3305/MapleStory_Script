/*
 	Cassandra
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("不知道今天水晶球里会出现什么。\r\n\r\n#b#L0#我想知道最近正在进行的活动。#l");
    } else if (status == 1) {
        cm.sendEventWindow();
        cm.dispose();
    }
}