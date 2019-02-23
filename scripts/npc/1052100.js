/* Don Giovanni
	Kerning VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("我是美发店的钱老板！只要你有万能高级美发卡，愿意让我为你理发吗？不管在哪个村庄，只要有高级理发券，就可以理发。\r\n#b#L0#更换发型(使用高级会员卡)#l\r\n#L1#染色(使用高级会员卡)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30030, 30020, 30000, 30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160];
            } else {
                hair_Colo_new = [31050, 31040, 31000, 31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("我可以帮你换成全新的发型。你厌倦了现在的发型了吗？只要你有#b万能会员卡#k，我就可以帮你更换发型。请慢慢挑选自己喜欢的发型！", hair_Colo_new, 5150052);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("我们可以为你改变头发的颜色。是不是已经厌倦了头发的颜色啊？如果你有#b万能会员卡#k，我就可以给你染发，慢慢挑选你喜欢的颜色吧！", hair_Colo_new, 5151036);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
            } else {
                cm.sendOk("嗯…看来你没有我美容店的会员卡。如果你没有会员卡，我们不能为你修剪头发！");
            }
        } else {
            if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发色吧!");
            } else {
                cm.sendOk("嗯… 看来你没有我们美容店的会员卡。如果你没有会员卡，我们不能为你染头发！");
            }
        }
        cm.safeDispose();
    }
}