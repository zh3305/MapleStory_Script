/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

   if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
        ms.spawnNPCRequestController(2159384, 700, 193);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.spawnNPCRequestController(2159380, 450,180);
        ms.setNPCSpecialAction(2159380, "summon");
        ms.getDirectionInfo(1, 300);
    } else if (status == 3) {
        ms.getDirectionInfo(3, 2);
        ms.sendSelfTalk(1, 2159380, "#h0#，#h0#，你在这里干什么？");
    } else if (status == 4) {
        ms.sendSelfTalk(3, 2159380, "鲁提，有件事我想问问那个俘虏。你能帮我保密吗？");
    } else if (status == 5) {
        ms.sendSelfTalk(1, 2159380, "我看你刚才见到那个人的时候好像呆了一下。#h0#，你记起来了吗？你的过去……。");
    } else if (status == 6) {
        ms.sendSelfTalk(3, 2159380, "记忆？过去？你在说什么啊？鲁提，你是怎么知道的？");
    } else if (status == 7) {
        ms.sendSelfTalk(1, 2159380, "你先拿着这个。");
    } else if (status == 8) {
        ms.getDirectionInfo(1, 4200);
    } else if (status == 9) {
        ms.sendSelfTalk(1, 2159380, "这是那个人的东西。我想那个人一定是你找回记忆的重要线索。你们好好谈谈吧。我去看看格里梅尔有没有回来。");
    } else if (status == 10) {
        ms.updateNPCSpecialAction(2159380, 1,700, 100);
        ms.getDirectionInfo(1, 1500);
    } else if (status == 11) {
        ms.sendSelfTalk(3, 2159380, "鲁提，谢谢你。");
    } else if (status == 12) {
        ms.getDirectionInfo(1, 2100);
    } else if (status == 13) {
        ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(1, 1500);
    } else if (status == 14) {
        ms.removeNPCRequestController(2159380);
        ms.sendSelfTalk(3, 2159384, "喂……。我想问你。");
    } else if (status == 15) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/2",  0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 810);
    } else if (status == 16) {
        ms.sendSelfTalk(1, 2159384, "你！是黑色之翼的……！");
    } else if (status == 17) {
        ms.sendSelfTalk(3, 2159384, "(果然……一看到那个人，就有一种奇怪的感觉。明明是今天第一次见到，但却感觉好像认识这个人。)");
    } else if (status == 18) {
        ms.sendSelfTalk(3, 2159384, "(还有，这个人的这把短剑，感觉好像是我的东西。)");
    } else if (status == 19) {
        ms.sendSelfTalk(3, 2159384, "这，这个。");
    } else if (status == 20) {
        ms.getDirectionInfo(1, 4200);
    } else if (status == 21) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 810);
    } else if (status == 22) {
        ms.sendSelfTalk(1, 2159384, "这是我的短剑！");
    } else if (status == 23) {
        ms.sendSelfTalk(3, 2159384, "这是你的东西吧？这个有什么特别的力量吗？你是从哪里得到的？");
    } else if (status == 24) {
        ms.sendSelfTalk(1, 2159384, "黑色之翼的成员为什么要问这个？");
    } else if (status == 25) {
        ms.sendSelfTalk(3, 2159384, "看到它的瞬间，我好像想起了什么，但是却记不太清楚。鲁提说这个东西和你好像跟我的记忆和过去有关……。如果你知道我的过去，请你告诉我。");
    } else if (status == 26) {
        ms.sendSelfTalk(1, 2159384, "(这个人到底在说什么啊？记忆？)");
    } else if (status == 27) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/1",  0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 28) {
        ms.sendSelfTalk(1, 2159384, "等等，你说那把短剑很眼熟？难道你是……！");
    } else if (status == 29) {
        ms.spawnNPCRequestController(2159381, 1200,180);
        ms.setNPCSpecialAction(2159381, "summon");
        ms.updateNPCSpecialAction(2159381, -1,350, 100);
        ms.sendSelfTalk(1, 2159381, "#h0#，#h0#！");
    } else if (status == 30) {
        ms.sendSelfTalk(1, 2159381, "不好了，格里梅尔马上就要回来了！你从那个人那里知道什么了吗？");
    } else if (status == 31) {
        ms.sendSelfTalk(3, 2159381, "不，什么都没有。我也想不起刚才那个场面了。");
    } else if (status == 32) {
        ms.sendSelfTalk(1, 2159381, "哎呀……果然光是这样是无法恢复记忆的。");
    } else if (status == 33) {
        ms.sendSelfTalk(3, 2159381, "记忆？你在说什么啊，鲁提？");
    } else if (status == 34) {
        ms.sendSelfTalk(1, 2159381, "现在不是说这些的时候，#h0#。我看这是最后的机会了。你快和这个人一起逃走。不然的话，你好不容易恢复的记忆又会被格里梅尔清除掉。");
    } else if (status == 35) {
        ms.sendSelfTalk(3, 2159381, "记忆，清除掉？");
    } else if (status == 36) {
        ms.sendSelfTalk(1, 2159381, "是的，你一定不知道我在说什么……事实上，过去我曾经答应过。一定要让你从这里逃出去。");
    } else if (status == 37) {
        ms.sendSelfTalk(3, 2159381, "答应？答应谁？");
    } else if (status == 38) {
        ms.sendSelfTalk(1, 2159381, "……失去记忆之前的你。");
    } else if (status == 39) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 0, 0, -120, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 40) {
        ms.sendSelfTalk(1, 2159381, "你也许已经不记得了。那是因为格里梅尔把你的记忆全部清除了。但是在记忆被清除掉之前，你想离开这里。我就是那时候答应你的。答应一定要把你从这里救出去。");
    } else if (status == 41) {
        ms.sendSelfTalk(1, 2159381, "所以我一直装作是格里梅尔的忠实部下……。\n\r为了等待今天这个机会。");
    } else if (status == 42) {
        ms.sendSelfTalk(1, 2159381, "这个人一定和你的过去有关。所以你在见到这个人的瞬间好像想起了什么……");
    } else if (status == 43) {
        ms.sendSelfTalk(1, 2159381, "你快和她一起逃走。不然的话，你好不容易恢复的记忆就又要失去了。");
    } else if (status == 44) {
        ms.sendSelfTalk(3, 2159381, "记忆……刚才浮现在眼前的那个场面是我过去的记忆吗？");
    } else if (status == 45) {
        ms.sendSelfTalk(1, 2159381, "是的。没时间了。格里梅尔马上就会回来。n\r那样的话，他一定会清除掉你的记忆，这个人也会有危险。你决定怎么办？");
    } else if (status == 46) {
        ms.sendSelfTalk(3, 2159381, "我想找回我的记忆。");
    } else if (status == 47) {
        ms.sendSelfTalk(3, 2159381, "事实上我也不知道那是什么。但是我有种感觉，我必须找回我的记忆。而这个人，虽然我不认识，但我觉得不能让她受伤。");
    } else if (status == 48) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/1",  0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 900);
    } else if (status == 49) {
        ms.sendSelfTalk(1, 2159381, "好的，既然决定了，就在格里梅尔回来之前赶快逃走。后面的事情就交给我吧……。");
    } else if (status == 50) {
        ms.sendSelfTalk(3, 2159381, "鲁提，你也一起逃走吧。要是格里梅尔知道我逃走了，你一定会受到牵连。");
    } else if (status == 51) {
        ms.sendSelfTalk(1, 2159381, "但我不是战斗型机械人。带我走只会成为你的累赘。");
    } else if (status == 52) {
        ms.sendSelfTalk(3, 2159381, "那样的话，我就更不能把你留在这里了。跟我一起逃走吧。");
    } else if (status == 53) {
        ms.sendSelfTalk(1, 2159381, "……好吧，现在我们没时间站在这里多说了。我和你一起走。快点吧！");
    } else {
        ms.removeNPCRequestController(2159381);
	ms.getDirectionStatus(true);
        ms.EnableUI(0);
        ms.dispose();
        ms.warp(931050970, 0);
        ms.enableActions();
    }
}

