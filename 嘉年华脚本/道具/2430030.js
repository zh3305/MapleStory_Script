/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  金利奇的寻宝任务
 *  金利奇的黄金罗盘
 *  @Author Kent 
 */


var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        im.sendYesNo("是否要使用黄金罗盘直接找到宝藏的位置？");
    } else if (status == 1) {
        if (im.isQuestActive(200100) && im.haveItem(2430251)) {
            var mapid = im.getCustomData(200100);
            im.used(1);
            im.dispose();
            im.warp(mapid);
        } else {
            im.sendOk("你并没有开始寻宝任务呀？");
            im.dispose();
        }
    }
}
