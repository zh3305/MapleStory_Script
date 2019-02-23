/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：新手剧情相关
 *  @Author Kent 
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendNext("准备好离开的话，再和我说话吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("托你的福，出航准备已经全部完成了。现在上船吗？");
    } else if (status == 1) {
        cm.warp(4000032, 0);
        cm.dispose();
    } else {
        cm.dispose();
    }
}
