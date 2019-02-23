/*
 完成时间：2013年8月11日 13:05:43
 脚本功能：大陆移动卷轴
 */
var isopenvip = false;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var tiaotiaomaps = Array(
        Array(100000202,"射手跳跳#r[300点卷]#b"),
        Array(220000006,"玩具城跳跳#r[300点卷]#b"),
        Array(280020000,"火山的心脏#r[500点卷]#b"),
        //Array(109040001,"共4阶段"),
        Array(910130000,"忍苦树林#r[500点卷]#b"),
        //Array(109030001,"上楼找出口"),
        Array(109040001,"高地第1阶段#r[500点卷]#b"),
        Array(910360000,"地铁B1#r[1000点卷]#b"),
        Array(910360100,"地铁B2#r[1000点卷]#b"),
        Array(910360200,"地铁B3#r[1000点卷]#b")
        ); 

var a = 0;
var selects = 0;
var MapType;

function start() {
    a = -1;
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else {
			cm.dispose();
			return;
        }
        if (a == -1) {
            cm.dispose();
		}
        if (a == 0) {
            var text = "请选择你要挑战的地图：\r\n#b\r\n#r每个跳跳地图每日可以完成1次，并且等级达到180级才有奖励。#b\r\n"
           for (var i = 0; i < tiaotiaomaps.length; i++) {
                       text += "#L" + i + "# "+icon+" #m" + tiaotiaomaps[i][0] + "# (" + tiaotiaomaps[i][1] + ")\r\n"
                    }
                    MapType = 3
                    needMoney = true;
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            cm.sendYesNo("在这里的事情办完了吗？确定要去你像要去的地方了吗？");
        } else if (a == 2) {
			cm.warp(tiaotiaomaps[selects][0],0);
            cm.dispose();
        }//a
    }//mode
}//f