/* Dr. Feeble
	Henesys Random Eye Change.
*/
var status = 0;
var beauty = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNext("想换换长相吗? 看来是想以新的容貌重新出生的样子? 好~ 我帮你如愿以偿.\r\n#L0##b 整形(使用整形手术普通会员卡)#l");
    } else if (status == 1) {
        cm.sendYesNo("使用普通会员卡的话,会随机变换长相... 真的想使用#b万能会员卡#k变换长相吗?");
    } else if (status == 2) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
        } else {
            facetype = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
        if (cm.setRandomAvatar(5152056, facetype) == 1) {
            cm.sendOk("好了,你的朋友们一定认不出你了!");
        } else {
            cm.sendOk("呃...你没有我们医院专用会员卡...不好意思无法帮你做整形手术噢。");
        }
        cm.dispose();
    }
}