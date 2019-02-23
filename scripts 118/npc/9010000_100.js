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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {
        var selStr = " #e#r#h ##n#k 你好！你需要#b#i4032922:##t4032922##k 来进入骑士团要塞 么?:\r\n\r\n#b#L0#嗯，请送我一个#l\r\n#L1#结束对话#l";
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
          if (cm.getSpace(4) > 2) {
            cm.dispose();
            cm.gainItem(4032922, 1);
            cm.sendOk("已经发送到你的背包.")
          } else {
            cm.sendOk("你的背包“其它”空间不足!请至少有2个空间以上.");
            cm.dispose();
             }

            break;
        case 1:
            cm.dispose();
            break;
		}
    }
}