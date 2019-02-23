/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  NPC名称：次元传送口
 *  功能：传送
 *  @Author Kent 
 */
function start() {
    cm.sendYesNo("要通过#p1002105#移动到万神殿吗？");
}

function action(mode, type, selection) {
    if (mode == 1) {
        cm.warp(400000001, 1);
    }
    cm.dispose();
}
