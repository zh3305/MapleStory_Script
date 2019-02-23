/* 星愿 调适脚本 */



function start() {
    if (cm.getMapId() == 703200400) {
        cm.dispose();
        cm.openNpc(2144020, 8888);
    } else if (cm.getMapId() == 931050431) {
        cm.dispose();
        cm.openNpc(2144000, 100);
    } else {

        cm.sendOk(" 欢迎你来到 Maplewing.....");
        cm.dispose();
      //  cm.openNpc(2144020, 999);
    }
}