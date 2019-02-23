/*
 * 斯乌11关超级副本
 * 菜菜制作 天天冒险岛工作室所有
 * 联系QQ：537050710
 * 欢迎定制各种脚本
 */

var rewardItem = 2433007;
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMap().getId() == 350060160) {
                if (cm.getSpace(2) < 1) {
                    cm.sendPlayerToNpc("一束光照耀着我，浑身感觉很舒服。\r\n打败了斯乌，现在领取奖励传送出去吧！");
                } else {
                    cm.sendOk("背包好像装不下东西了，清理些出来吧！")
                    cm.dispose();
                }
            } else {
                cm.dispose();
            }

        } else if (status == 1) {
            cm.gainItem(rewardItem, 1);
            cm.warp(910000000, 0)
            cm.spouseMessage(0x25, "" + cm.getPlayer().getName() + "  消灭了斯乌，你们才是真正的冒险岛勇士！");
            cm.dispose();
        }
    }
}