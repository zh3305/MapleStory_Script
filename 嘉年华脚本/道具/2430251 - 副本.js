/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  寻宝便签
 *  每日寻宝任务
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
        if (im.isQuestActive(200100)) {
            var mapid = im.getMapId();
            var qinfo = im.getCustomData(200102);
            im.sendPlayerToNpc("\t\t\t\t#e金利奇给我的线索#n\r\n\r\n宝藏可能藏在这些地方：\n\r " + qinfo);
        } else {
            im.sendPlayerToNpc("#好像并没有开始寻宝任务哦#n");
            im.used(1);
        }
        im.dispose();
    }
}
