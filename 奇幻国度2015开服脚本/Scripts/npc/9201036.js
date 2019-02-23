/*
	名字: 		安琪莉可
	地图: 		婚礼村
	描述: 		结婚礼物管理人
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("需要我帮忙吗？\r\n#b#L0##b我想查看结婚礼物。#l#k");
    } else if (status == 1) {
        cm.sendNext("只有结婚的夫妻才能查看收到的结婚礼物，想收到结婚礼物的话，先去结婚吧？");
        cm.dispose();
    }
}