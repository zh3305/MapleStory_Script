/*
芬芬时尚潮流 118扎昆
*/

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
        var selStr = "等一下!你想要移动到那个扎昆的祭坛呢?\r\n";
        selStr += "#L0##b普通扎昆#l\r\n";
        selStr += "#L1##b进阶扎昆#l";

        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
		if (cm.getPlayer().haveItem(4001017) >= 1) {
			cm.warp(211042400);
			} else {
			cm.sendOk("请检查下 你身上是否有#z4001017##v4001017#.没有的话我是不能让你进去的");
			}
			cm.dispose();
            break;
        case 1:
		if (cm.getPlayer().haveItem(4001017) >= 1) {
			cm.warp(211042401);
			} else {
			cm.sendOk("请检查下 你身上是否有#z4001017##v4001017#.没有的话我是不能让你进去的");
			}
			cm.dispose();
            break;
		}
    }
}