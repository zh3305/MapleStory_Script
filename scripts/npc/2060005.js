/* 
 *   NPC   : Kenta
 *   Map   : Aquariun - Zoo
 */
function start() {
    if (cm.haveItem(4031509)) {
        cm.sendOk("1");
    } else {
        cm.warp(922200000);
        cm.sendOk("请找到小猪 用武力征服他 带回它拿我的香水.");
    }
    cm.dispose();
}