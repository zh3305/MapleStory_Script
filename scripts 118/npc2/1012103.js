/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("我是美发店老板娜塔丽。只要你有万能高级美发卡，就把头发交给我吧。选择你想做的事情吧。\r\n#b#L0#更换发型(使用高级会员卡)#l\r\n#L1#染色(使用高级会员卡)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
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
            cm.askAvatar("我可以帮你换成全新的发型。你厌倦了现在的发型了吗？只要你有#b万能会员卡#k，我就可以帮你更换发型。请慢慢挑选自己喜欢的发型～", hair_Colo_new, 5150052);
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
                cm.sendOk("理发好了，怎么样？看看你的新发型吧！");
            } else {
                cm.sendOk("嗯……你好像没有美发店专用会员卡啊？不好意思，没有会员卡的话，我就不能帮你理发。");
            }
        } else {
            if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了，让朋友们赞叹你的新发色吧！");
            } else {
                cm.sendOk("嗯… 看来你没有我们美发店的会嘛！不好意思，如果没有会员卡，我们不可以给你染头发。");
            }
        }
        cm.dispose();
    }
}