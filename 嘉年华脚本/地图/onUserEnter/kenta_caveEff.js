/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    if (mode >= 1) {
        status++;
    } else {
        status--;
    }
    var em = ms.getEventManager("Kenta");
    var eim = ms.getEventInstance();
    if (em != null && eim != null) {
        var state = em.getProperty("Kenta");
        if (eim.getProperty("caveBreak").equals("0")) {
            if (status == 0) {
                ms.EnableUI(1);
                ms.showPQEffect(3, "cave1", "0");
                ms.sendDirectionStatus(1, 100, true);
            } else if (status == 1) {
                ms.showScreenShaking(ms.getMapId(), false);
                ms.getDirectionInfo(1, 2000);
            } else if (status == 2) {
                ms.showScreenShaking(ms.getMapId(), true);
                ms.topMsg("洞窟堵上了。我们必须找到上去的方法。如果装满水……能够上去吗？");
                ms.getDirectionInfo(1, 1500);
            } else if (status == 3) {
                ms.EnableUI(0);
                ms.startMapEffect("我们合力推一下石头吧。在洞窟入口集合后，队长请和我对话。", 5120052);
                ms.dispose();
            }
        } else if (eim.getProperty("caveBreak").equals("1")) {
            if (status == 0) {
                ms.showSetAction("start", "WaterLevelUp_WaterUp");
                ms.showSetAction("wait", "WaterLevelUp_Timing");
                ms.showSetAction("maxWater", "kenta_batAttack");
                ms.getDirectionStatus(true);
                ms.EnableUI(1);
                ms.topMsg("我们必须同时推石头！一！二!?");
                ms.getDirectionEffect(0x11, null, 2, 0, 0, 0, 0, 0, 0, 0);
            } else if (status == 1) {
                ms.EnableUI(0);
                var c = parseInt(eim.getProperty("timing")) + 1;
                eim.setProperty("timing", String(c));
                ms.showSetAction("timing", eim.getProperty("timing"));
                if (c >= ms.getParty().getMembers().size()) {
                    ms.showPQEffect(3, "cave1", "1");
                    ms.showSetAction("waterUp", "1");
                    ms.startMapEffect("洞窟里正在进水！在怪物们进来之前，我们快上去吧！！！", 5120052);
                    ms.removeNpc(9020004);
                    eim.schedule("waterLevelUp", 100);
                }
                ms.dispose();
            }
        }
    }
}
