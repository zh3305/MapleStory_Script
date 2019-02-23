var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.getDirectionStatus(true);
        cm.EnableUI(1);
        cm.DisableUI(true);
        cm.showEffect(false, "JPKanna/magicCircle2");
        cm.getDirectionEffect(1, "", [7000]);
    } else if (status == 1) {
        cm.sendNextS("小友馬好像也成功了，結界倒下去了。", 3);
    } else if (status == 2) {
        cm.sendNextPrevS("我也趕緊去本堂地下阻止儀式吧。", 3);
    } else {
        cm.EnableUI(0);
        cm.teachSkill(40021183, -1, 0);
        cm.teachSkill(40021184, -1, 0);
        cm.teachSkill(40021185, -1, 0);
        cm.teachSkill(40021186, -1, 0);
        cm.dispose();
        cm.warp(807100103, 0);
    }
}