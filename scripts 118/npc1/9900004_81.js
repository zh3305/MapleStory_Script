var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
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
            var selStr = "亲爱的#r" + cm.getChar().getName() + "#k你好，这里可以查询您今天的BOSS次数#b\r\n#L0#扎昆\r\n#L1#黑龙\r\n#L2#进阶扎昆\r\n#L3#进阶黑龙\r\n#L4#狮子王·班雷昂\r\n#L5#宠物儿·品克缤\r\n#L6#骑士团·希纳斯女皇\r\n#L7#闹钟\r\n#L8#暴力熊/心疤狮王";
 	    cm.sendSimple(selStr);
    } else if (status == 1) {
      switch (selection) {
        case 0:
             cm.sendOk("一天可以打#r4#k次\r\n#b您已经打了#r"+cm.getBossLog("普通扎昆")+"#k#b次");
             cm.dispose();
             break;
        case 1:
             cm.sendOk("一天可以打#r2#k次\r\n#b您已经打了#r"+cm.getBossLog("普通黑龙")+"#k#b次");
             cm.dispose();
             break;
        case 2:
             cm.sendOk("一天可以打#r2#k次\r\n#b您已经打了#r"+cm.getBossLog("进阶扎昆")+"#k#b次");
             cm.dispose();
             break;
        case 3:
             cm.sendOk("一天可以打#r2#k次\r\n#b您已经打了#r"+cm.getBossLog("进阶黑龙")+"#k#b次");
             cm.dispose();
             break;
        case 4:
             cm.sendOk("一天可以打#r2#k次\r\n#b您已经打了#r"+cm.getBossLog("狮子王")+"#k#b次");
             cm.dispose();
             break;
        case 5:
             cm.sendOk("一天可以打#r2#k次\r\n#b您已经打了#r"+cm.getBossLog("品克缤")+"#k#b次");
             cm.dispose();
             break;
        case 6:
             cm.sendOk("一天可以打#r2#k次\r\n#b您已经打了#r"+cm.getBossLog("希纳斯")+"#k#b次");
             cm.dispose();
             break;
        case 7:
             cm.sendOk("一天可以打#r4#k次\r\n#b您已经打了#r"+cm.getBossLog("闹钟")+"#k#b次");
             cm.dispose();
             break;
        case 8:
             cm.sendOk("一天可以打#r4#k次\r\n#b您已经打了#r"+cm.getBossLog("暴力熊")+"#k#b次");
             cm.dispose();
             break;
        }
    }
}