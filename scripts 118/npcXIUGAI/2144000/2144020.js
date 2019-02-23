/* 时间女神 调适脚本 */



function start() {
    if (cm.getMapId() == 272020200) {
        cm.dispose();
        cm.openNpc(2144020, 80);
    } else if (cm.getMapId() == 931050431) {
        cm.dispose();
        cm.openNpc(2144000, 100);
    } else {
        cm.dispose();
        cm.openNpc(2144020, 999);
    }
}