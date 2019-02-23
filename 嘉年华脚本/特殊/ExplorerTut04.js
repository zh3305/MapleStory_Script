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
            cm.sendNext("你准备好要去消灭怪物的话，再和我说话吧。");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("我现在就把你送进去，请你把在船内制造骚乱的怪物消灭掉吧！");
    } else if (status == 1) {
        cm.warp(4000033, 0);
        cm.dispose();
    } else {
        cm.dispose();
    }
}
