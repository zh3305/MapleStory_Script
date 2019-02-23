/*
	名字: 		菲尔拉
	地图: 		婚礼村
	描述: 		离婚咨询师
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
        cm.sendSimple("看你一脸惆怅，找我有什么事？#b\r\n\r\n#L0# 我想离婚。#l\r\n#L1# 删除戒指。#l\r\n#L2# 没有…没事啊。#k#l");
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendNext("你好像还是未婚嘛…你知道离婚意味着什么吗？");
                cm.dispose();
            } else {
                cm.sendYesNo("离婚吗？你确定吗？你想离婚？确定想好要离婚了吗？");
            }
        } else if (selection == 1) {
            if (cm.getPlayer().getMarriageId() > 0) {
                cm.sendNext("你好像还是结婚状态嘛…删除戒指必须离婚后才能操作？");
                cm.dispose();
            } else {
                var selStr = "是的，我是可以删除客人不需要的结婚戒指。不过一想起这些结婚戒指都没用了…心里总会有一股凄凉的感觉。\r\n#b";
                var found = false;
                for (var i = 1112300; i < 1112312; i++) {
                    if (cm.haveItem(i)) {
                        found = true;
                        selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
                    }
                }
                if (!found) {
                    cm.sendNext("你好像没有可以删除的结婚戒指啊，不是吗？");
                    cm.dispose();
                } else {
                    cm.sendSimple(selStr);
                }
            }
        } else if (selection == 2) {
            cm.sendNext("…如果你现在还在烦恼，那请你一定要慎重考虑。");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selection == -1) {
            if (cm.getPlayer().getMarriageId() <= 0) {
                cm.sendNext("你好像还是未婚嘛…你知道离婚意味着什么吗？");
            } else {
                cm.handleDivorce();
            }
        } else {
            if (selection >= 1112300 && selection < 1112312) {
                cm.gainItem(selection, -1);
                cm.sendOk("好，戒指我会回收的。不过因为这个戒指已经失去了它原先的意义，所以很遗憾，我不能给你补偿。");
            }
        }
        cm.dispose();
    }
}