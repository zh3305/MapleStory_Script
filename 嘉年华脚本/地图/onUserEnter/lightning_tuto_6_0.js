/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {

        status++;

    if (status == 0) {
	ms.spawnNPCRequestController(2159359, 0,-499, -499);
	ms.spawnNPCRequestController(2159358, -153,-308, -508);
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
	ms.spawnNPCRequestController(2159357, 300,-423, -80);
	ms.setNPCSpecialAction(2159357, "summon");
	ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/6", 0, 0, -160, 0, 0);
	ms.getDirectionInfo(1, 1200);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
	ms.getDirectionInfoNew(0,300,0,-500);
    } else if (status == 2) {
	ms.getDirectionInfo(1, 2322);
    } else if (status == 3) {
	ms.getDirectionInfo(1, 4000);
    } else if (status == 4) {
	ms.getDirectionInfoNew(0,300,300,-100);
    } else if (status == 5) {
	ms.getDirectionInfo(1, 1667);
    } else if (status == 6) {
	ms.getNPCDirectionEffect(2159357, "Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", 0, 0, -90);
	ms.getDirectionInfo(1, 2100);
    } else if (status == 7) {
	ms.sendSelfTalk("弗里德!... 双弩精灵!");
    } else if (status == 8) {
	ms.getDirectionInfo(1, 300);
    } else if (status == 9) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionInfoNew(1,180);
    } else if (status == 10) {
	ms.getDirectionInfo(3, 0);
	ms.sendSelfTalk(1, 2159357, "来啦。我们已经尽力了，但还是不行。");
    } else if (status == 11) {
	ms.sendSelfTalk(17, 2159357, "双弩精灵怎么啦？");
    } else if (status == 12) {
	ms.sendSelfTalk(1, 2159357, "只是暂时晕过去了。关键是黑魔法师比我们想的厉害得多。现在只能靠这个了。");
    } else if (status == 13) {
	ms.getNPCDirectionEffect(2159357, "Effect/Direction6.img/effect/tuto/balloonMsg0/10", 0, 0, -90);
	ms.getDirectionInfo(1, 1800);
    } else if (status == 14) {
	ms.getNPCDirectionEffect(2159357, "Skill/2218.img/skill/22181003/affected", 0, 0, 0);
	ms.getDirectionInfo(1, 1500);
    } else if (status == 15) {
	ms.sendSelfTalk(1, 2159357, "#b(听好。从现在开始我说的话你绝不可以告诉其他人。之前提过的封印，你还记得吗？)#k");
    } else if (status == 16) {
	ms.sendSelfTalk(17, 2159357, "#b(嗯。你和阿弗利埃研究了好长时间嘛。)#k");
    } else if (status == 17) {
	ms.sendSelfTalk(1, 2159357, "#b(那个封印可以逆转黑魔法师从伦娜那里抢来的时间力量。因此，无论黑魔法师有多么厉害，都绝不可能逃脱。只是，要启动封印的话，必须将黑魔法师的时间的力量牵引出来。)#k");

    } else if (status == 18) {
	ms.sendSelfTalk(1, 2159357, "#b(我发现战局不利时，就偷偷在这间房间设置了封印。但是光靠我和双弩精灵，无法引出黑魔法师的时间力量。现在你是我们唯一的希望。)#k");

    } else if (status == 19) {
	ms.sendSelfTalk(17, 2159357, "#b(我应该怎么做？)#k");

    } else if (status == 20) {
	ms.sendSelfTalk(1, 2159357, "#b(首先要激活设置好的封印。我会用仅剩的力量，使时间暂时停滞，以防黑魔法师发现。你就趁机去把五个封印全部激活。)#k");

    } else if (status == 21) {
	ms.sendSelfTalk(1, 2159357, "#b(右方应该留有第一个封印的痕迹。你走近就能看到封印。你只要将所有封印激活就行。)#k");

    } else if (status == 22) {
	ms.sendSelfTalk(17, 2159357, "#b(知道了。交给我吧。)#k");
    } else if (status == 23) {
	ms.sendSelfTalk(1, 2159357, "(#b封印全部激活后，停滞的时间就会恢复正常。拜托了。时间女神啊，赐予我力量……！！#k)");

    } else {
	ms.EnableUI(0);
	ms.removeNPCRequestController(2159357);
	ms.dispose();
	ms.warp(927020071, 0);
	ms.enableActions();
    }
}

