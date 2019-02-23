var status = -1;
var beauty = 0;
var hair_Colo_new;
var isSecond = false;
var isAngel;
function start() {
    isAngel = cm.getBeginner() == 6001;
    if (isAngel) {
        cm.sendChoiceAngle();
        return;
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            if (isAngel) {
                isSecond = selection != 0;
            }
            cm.sendSimple("我是美发店店长娜塔丽。如果你有#b#t5150052##k或#b#t5151036##k，就来我这里做个头发吧？请选择你要做的项目。\r\n#b#L0#更换发型（使用高级理发券）#l\r\n#L1#染色（使用高级染色卡）#l");
            break;
        case 1:
            if (selection == 0) {
                var hair = isSecond ? cm.getPlayer().getSecondHair() : cm.getPlayerStat("HAIR");
                hair_Colo_new = [];
                beauty = 1;

                if (cm.getPlayerStat("GENDER") == 0) {
                    hair_Colo_new = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
                } else {
                    hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
                }
                for (var i = 0; i < hair_Colo_new.length; i++) {
                    hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
                }
                hair_Colo_new = cm.getCanHair(hair_Colo_new);
                cm.askAvatar("我能把你现在的发型变成全新的发型。你对现在的发型不厌倦吗?只要你有#b#t5150053##k,我就帮你换发型。慢慢挑选你想要的发型吧~", hair_Colo_new, 5150053, isSecond != 0);
            } else if (selection == 1) {
                var hairColor = isSecond ? cm.getPlayer().getSecondHair() : cm.getPlayerStat("HAIR");
                var currenthaircolo = Math.floor((hairColor / 10)) * 10;
                hair_Colo_new = [];
                beauty = 2;

                for (var i = 0; i < 8; i++) {
                    hair_Colo_new[i] = currenthaircolo + i;
                }
                hair_Colo_new = cm.getCanHair(hair_Colo_new);
                cm.askAvatar("我能把你现在的头发换个颜色。你对现在的发色不厌倦吗? 只要你有#b#t5151036##k,我就帮你染发。慢慢挑选你想要的发色吧！", hair_Colo_new, 5151036, isSecond != 0);
            }
            break;
        case 2:
            if (hair_Colo_new.length == 0) {
                cm.sendOk("出现未知错误。");
            } else if (beauty == 1) {
                if (cm.setAvatar(5150053, hair_Colo_new[selection], isSecond) == 1) {
                    cm.sendNext("享受你的新发型吧!");
                } else {
                    cm.sendNext("呃……你好像没有我们美发店的专用理发卡啊？很抱歉，没有理发券的话，我不能给你做头发。");
                }
            } else {

                if (cm.setAvatar(5151036, hair_Colo_new[selection], isSecond) == 1) {
                    cm.sendNext("享受你的新发色吧!");
                } else {
                    cm.sendNext("呃……你没有我们美发店的专用染色卡啊？很抱歉，没有染色卡的话，我不能给你染色。");
                }
            }
            break;
        case 3:
        default:
            cm.dispose();
            break;
    }
}