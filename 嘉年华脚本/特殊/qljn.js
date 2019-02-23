var status;
var sel;
var eff = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#r - 满技能功能\r\n #r#e注意：新职业剑豪、阴阳师请勿使用会错乱!#n\r\n#d#e 提示：50W点卷技能全满！#n #k\r\n\r\n\r\n#L1# " + eff + "加满技能");
        } else if (status == 1) {
            cm.playerMessage("当前选择 " + selection);
            switch (selection) {
            case 0:
                cm.clearSkills();
                   cm.sendOk("恭喜你，已经成功清理技能了.");
                break;
            case 1:
               // cm.clearSkills();
                cm.maxSkillsByJob();
             cm.gainNX(1, -500000);
          cm.sendOk("恭喜你，已经成功满技能了.");
                break;
            }
            cm.dispose();
        }
    }
}