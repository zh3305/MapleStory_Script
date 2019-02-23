/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：扎昆的祭坛 BOSS扎昆组队任务
 *  @Author Kent 
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
        cm.sendSimple("等一下!!你想要移动到哪个扎昆的祭坛呢?#b\r\n#L0#简单扎昆#l\r\n#L1#普通扎昆#l\r\n#L2#进阶扎昆#l");
    } else if (status == 1) {
        var channel = cm.getPlayer().getClient().getChannel();
        var level = cm.getPlayer().getLevel();
        if (selection == 0) {
            if (level < 50) {
                cm.sendNext("你的力量好像不够啊, 等你到了50级再来吧。");
            } else if (!cm.haveItem(4001796)) {
                cm.playerMessage("你没有需要献给简单扎昆的祭品，因此无法进行移动。");
            } else {
                cm.playPortalSE();
                cm.warp(211042402, "west00");
            }
        } else if (selection == 1) {
            if (level < 90) {
                cm.sendNext("你的力量好像不够啊, 等你到了90级再来吧。");
            } else if (!cm.haveItem(4001017)) {
                cm.playerMessage("你没有需要献给普通扎昆的祭品，因此无法进行移动。");
            } else {
                cm.playPortalSE();
                cm.warp(211042400, "west00");
            }
        } else if (selection == 2) {
            if (level < 90) {
                cm.sendNext("你的力量好像不够啊, 等你到了90级再来吧。");
            } else if (!cm.haveItem(4001017)) {
                cm.playerMessage("你没有需要献给进阶扎昆的祭品，因此无法进行移动。");
            } else {
                cm.playPortalSE();
                cm.warp(211042401, "west00");
            }
        }
        cm.dispose();
    }
}
