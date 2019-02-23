/* 
 * @Author Lerk
 * 
 * Tiger Statue (990000900)
 * 
 * Guild Quest - end of boss
 */

importPackage(java.lang);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var eim = cm.getEventInstance();
    if (eim != null) {
        if (eim.getProperty("leader").equals(cm.getName())) {
            if (cm.haveItem(4001024)) {
                cm.removeAll(4001024);
                var prev = eim.setProperty("bossclear", "true", true);
                if (prev == null) {
                    var start = parseInt(eim.getProperty("entryTimestamp"));
                    var diff = System.currentTimeMillis() - start;
                    var points = 10000 - Math.floor(diff / 1000);
                    cm.gainGP(points);
                }
                eim.finishPQ();
            } else {
                cm.sendOk("这里是最后的挑战了！ 打败黑暗领主之后给我#t4001024#！");
            }
        }
    } else {
        cm.warp(990001100);
    }
    cm.dispose();
}
