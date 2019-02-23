var status;
var sel;

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
            cm.sendSimple("#r - GM清理和满技能功能 #k\r\n #L0# 清理技能 #L1# 加满技能  #L2#满属性");
        } else if (status == 1) {
            cm.playerMessage("当前选择 " + selection);
            switch (selection) {
            case 0:
                cm.clearSkills();
                break;
            case 1:
                cm.clearSkills();
                cm.maxSkillsByJob();
                break;
			case 2:
                cm.maxStats();
                break;
            }
            cm.dispose();
        }
    }
}