/* 	Eric
	Singapore VIP Hair/Color Changer
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
        cm.sendSimple("欢迎，热烈欢迎，欢迎来到“快手发型屋”！那么，你有#b万能会员卡#k吗？如果有的话，那么我来帮你打理头发，如何？说说你想怎么做。\r\n#b#L1#改变发型（VIP 会员卡）#l\r\n#L2#染发（VIP 会员卡）#l");
    } else if (status == 1) {
        if (selection == 1) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30110, 30290, 30230, 30260, 30320, 30190, 30240, 30350, 30270, 30180];
            } else {
                hair_Colo_new = [31260, 31090, 31220, 31250, 31140, 31160, 31100, 31120, 31030, 31270, 31810];
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("我能彻底给你的头发变个样。你是准备改变一下了吧？有#b万能会员卡#k的话，我就可以帮你打理好。选择一下你喜欢的发型吧！", hair_Colo_new, 5150052);
        } else if (selection == 2) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("我能彻底给你的头发变个颜色。你是准备改变一下了吧？有#b万能会员卡#k的话，我就可以帮你打理好。选择一下你喜欢的发型吧！", hair_Colo_new, 5151036);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150052, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
            } else {
                cm.sendOk("嗯…你似乎没有我们指定的会员卡…这样的话，恐怕我就不能为你剪头发了。抱歉。");
            }
        } else {
            if (cm.setAvatar(5151036, hair_Colo_new[selection]) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发色吧!");
            } else {
                cm.sendOk("嗯…你似乎没有我们指定的会员卡…这样的话，恐怕我就不能为你剪头发了。抱歉。");
            }
        }
        cm.dispose();
    }
}