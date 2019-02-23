/* 
 * Sharen III's Soul, Sharenian: Sharen III's Grave (990000700)
 * Guild Quest - end of stage 4
 */

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getEventInstance().getProperty("leader").equals(cm.getPlayer().getName())) {
            if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
                cm.sendOk("在我经过长久的等待后，中终于找到有人可以拯救这座古堡了，我终于可以安眠了！");
                cm.safeDispose();
            } else {
                var prev = cm.getEventInstance().setProperty("stage4clear", "true", true);
                if (prev == null) {
                    cm.sendNext("在我经过长久的等待后，中终于找到有人可以拯救这座古堡了，我终于可以安眠了！现在让我来为你打开大门。");
                } else { //if not null, was set before, and Gp already gained
                    cm.sendOk("在我经过长久的等待后，中终于找到有人可以拯救这座古堡了，我终于可以安眠了！");
                    cm.safeDispose();
                }
            }
        } else {
            if (cm.getEventInstance().getProperty("stage4clear") != null && cm.getEventInstance().getProperty("stage4clear").equals("true")) {
                cm.sendOk("在我经过长久的等待后，中终于找到有人可以拯救这座古堡了，我终于可以安眠了！");
            } else {
                cm.sendOk("请让你的队长跟我说话，我不跟以外的人说……。");
            }
            cm.safeDispose();
        }
    } else if (status == 1) {
        cm.gainGP(180);
        cm.getMap().getReactorByName("ghostgate").forceHitReactor(1);
        cm.showEffect(true, "quest/party/clear");
        cm.playSound(true, "Party1/Clear");
        cm.dispose();
    }
}
