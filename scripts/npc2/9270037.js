/* 	Jimmy
	Singa Random Hair/Color Changer
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
        cm.sendSimple("你好，我是这里的助理。别担心，我很擅长这个工作。如果你有#b万能会员卡#k的话，那么就让我帮你打理发型吧，好吗？\r\n#b#L0#改变发型(常规会员卡)#l\r\n#L1#染发(常规会员卡)#l");
    } else if (status == 1) {
        if (selection == 0) {
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
            cm.sendYesNo("如果你使用常规会员卡，那么你的发型将会随机变成其他新的发型。你确定要使用#b万能会员卡#k并改变发型吗？");
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.sendYesNo("我能彻底给你的头发变个颜色。你是准备改变一下了吧？有#b万能会员卡#k的话，我就可以帮你打理好。选择一下你喜欢的发型吧！");
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setRandomAvatar(5150032, hair_Colo_new) == 1) {
                cm.sendOk("这，镜子。你觉得新发型如何？这并非是最靓丽的，但它相当漂亮，不是吗？如果你以后想再次改变发型的话，来找我。");
            } else {
                cm.sendOk("嗯…你似乎没有我们指定的会员卡…这样的话，恐怕我就不能为你剪头发了。抱歉。");
            }
        } else {
            if (cm.setRandomAvatar(5151027, hair_Colo_new) == 1) {
                cm.sendOk("好了,让朋友们赞叹你的新发色吧!");
            } else {
                cm.sendOk("嗯…你似乎没有我们指定的会员卡…这样的话，恐怕我就不能为你剪头发了。抱歉。");
            }
        }
        cm.dispose();
    }
}