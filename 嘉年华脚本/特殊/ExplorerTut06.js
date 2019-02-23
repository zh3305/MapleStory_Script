/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：新手剧情相关
 *  @Author Kent 
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("刚刚那个女孩是谁呢？为什么一见到我就逃走了呢？");
    } else if (status == 1) {
        cm.sendNext("我也朝着那个方向过去看看吧。");
    } else if (status == 2) {
        status = -1;
        cm.EnableUI(0);
        cm.DisableUI(false);
        cm.dispose();
    }
}
