/* Andre
	Kerning Random Hair/Hair Color Change.
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
        cm.sendSimple("我是美发店助理安德里亚～大家都叫我昂德莱，那是我的小名。只要你有万能一般美发卡，就把头发交给我吧。\r\n#b#L0#更换发型(使用普通会员卡)#l\r\n#L1#染色(使用普通会员卡)#l");
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30130, 30350, 30190, 30110, 30180, 30050, 30040, 30160, 30770, 30620, 30550, 30520];
            } else {
                hair_Colo_new = [31060, 31090, 31020, 31130, 31120, 31140, 31330, 31010, 31520, 31440, 31750, 31620];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.sendYesNo("如果使用一般会员卡，你就不能自己选择发型，你真的想用#b#t5150002##k换发型吗？");
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.sendYesNo("如果使用一般会员卡，你不能指定你想要的发型，你真的想用#b万能会员卡#k换发型吗？");
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setRandomAvatar(5150002, hair_Colo_new) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
            } else {
                cm.sendOk("嗯…不会是你没有我们美发店的会员卡吧？不好意思，如果没有会员卡，我们不可以给你修剪头发。");
            }
        } else {
            if (cm.setRandomAvatar(5151002, hair_Colo_new) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发色吧!");
            } else {
                cm.sendOk("嗯…你不会使没有我们美发店的会员卡吧？不好意思，如果没有会员卡，我们不可以给你染头发。");
            }
        }
        cm.dispose();
    }
}