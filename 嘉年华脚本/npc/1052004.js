var facetype;
var status = -1;
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
            var face = isSecond ? cm.getPlayer().getSecondFace() : cm.getPlayerStat("FACE");
            if (cm.getPlayerStat("GENDER") == 0) {
                facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
            } else {
                facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
            }
            for (var i = 0; i < facetype.length; i++) {
                facetype[i] = facetype[i] + face % 1000 - (face % 100);
            }
            facetype = cm.getCanFace(facetype);
            cm.askAvatar("我能把你现在的脸变成全新的脸...你不想换张新的脸吗?只要有#b#t5152057##k的话,我就给你做整容手术。慢慢挑选你喜欢的脸吧~", facetype, 5152057, isSecond);
            break;
        case 1:
            if (facetype.length == 0) {
                cm.sendOk("出现未知错误。");
            } else if (cm.setAvatar(5152057, facetype[selection]) == 1) {
                cm.sendOk("好了,你的朋友们一定认不出来是你了!");
            } else {
                cm.sendOk("嗯……看样子你没有整容券……很抱歉，没有整容券的话，我不能给你做整形手术。");
            }
            cm.dispose();
            break;
        default:
            cm.dispose();
            break;
    }
}