/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

    if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
	ms.sendSelfTalk("天空作美。今天天气很合适决战。");
    } else if (status == 1) {
	ms.getDirectionStatus(true);
	ms.getDirectionInfo(1, 500);
    } else if (status == 2) {
	ms.getDirectionInfo(3, 1);
	ms.getDirectionInfo(1, 120);
    } else if (status == 3) {
	ms.sendSelfTalk("下雨天可怜兮兮的等人，可不是什么好习惯。");
    } else if (status == 4) {
	ms.spawnNPCRequestController(2159353, 1210,18, 10);
	ms.setNPCSpecialAction(2159353 , "summon");
	ms.setNPCSpecialAction(2159353 , "summon");
	ms.getDirectionInfo(3, 2);
	ms.getDirectionInfo(1, 30);
    } else if (status == 5) {
	ms.getDirectionInfo(3, 0);
	ms.sendSelfTalk("你来晚了。即使是世界上最棒的怪盗，也无法偷取时间啊。");
    } else if (status == 6) {
	ms.sendSelfTalk(1, 2159353, "嗯，反正对方还没来，你这家伙算是来的早了。漫长的战斗今天就要结束了，有什么好着急的呢？怎么样。有信心吗？");
    } else if (status == 7) {
	ms.sendSelfTalk("自信不是要获胜后才能感觉的嘛。");
    } else if (status == 8) {
	ms.sendSelfTalk(1, 2159353, "这种时候还耍嘴皮子。就是因为这样，一开始才不喜欢你啊。");
    } else if (status == 9) {
	ms.sendSelfTalk("你这狡猾的家伙，还真是不会说话。");
    } else if (status == 10) {
	ms.sendSelfTalk(1, 2159353, "也是，反正我们之间唯一的共同点就是互相不顺眼了。话说回来，让我们来的弗里德那家伙究竟是怎么回事。他，是不是有什么不顺心的事啊？");
    } else if (status == 11) {
	ms.sendSelfTalk("不过是头疼怎么才能让5个人配合的最好罢了。也有可能和每个人关系都太好了，希望所有人能够高兴。");
    } else if (status == 12) {
	ms.sendSelfTalk(1, 2159353, "就算这样，弗里德不是还没分配好嘛。不过我觉得，弗里德没我想象的那么简单。");
    } else if (status == 13) {
	ms.sendSelfTalk("也许吧。闲聊到此为止。空气凝结起来了。");
    } else if (status == 14) {
	ms.sendSelfTalk(1, 2159353, "有趣的家伙。好吧，不扯闲话了。下次见的时候一起去问问弗里德吧。前提是不要在这里耽误太久。");
    } else if (status == 15) {
	ms.getDirectionInfo(1, 300);
    } else if (status == 16) {
	ms.setNPCSpecialAction(2159353 , "teleportation");
	ms.getDirectionInfo(1, 840);
    } else if (status == 17) {
	ms.removeNPCRequestController(2159353);
	ms.getDirectionInfo(1, 1000);
    } else if (status == 18) {
	ms.sendSelfTalk("现在就剩最后一步了。");
    } else if (status == 19) {
	ms.getDirectionInfo(3, 1);
	ms.getDirectionStatus(true);
	ms.spawnNPCRequestController(2159354, 128,18, 10);
	ms.setNPCSpecialAction(2159354, "summon");
	ms.sendSelfTalk(1, 2159354, "站住。这里是你我的战场。");
    } else if (status == 20) {
	ms.getDirectionInfoNew(0,450,-200,18);
    } else if (status == 21) {
	ms.getDirectionInfo(1, 1938);
    } else if (status == 22) {
	ms.getDirectionInfo(3, 1);
	ms.getDirectionStatus(true);
	ms.sendSelfTalk(1, 2159354, "你所具备的光之力量，对精灵来说就好像温暖的阳光一样。所以一想到我必须在这里干掉你，心里很不是滋味啊。");
    } else if (status == 23) {
	ms.sendSelfTalk(3, 2159354, "这话可不像是你这种给黑魔法师冲锋陷阵，破坏世界的疯狂精灵说的。");
    } else if (status == 24) {
	ms.sendSelfTalk(3, 2159354, "这话可不像是你这种给黑魔法师冲锋陷阵，破坏世界的疯狂精灵说的。");
    } else if (status == 25) {
	ms.sendSelfTalk(1, 2159354, "如果全心全意追求自己的梦想是疯了的话，那么我就是疯了。但是你，还有这世界上的一切，不是都疯了吗？");
    } else if (status == 26) {
	ms.sendSelfTalk(3, 2159354, "不要狡辩啦。 #p2159354#.");
    } else if (status == 27) {
	ms.sendSelfTalk(1, 2159354, "真是对牛弹琴。那就拿出你的本事来吧。");
    } else if (status == 28) {
	ms.getDirectionInfo(1, 500);
    } else if (status == 29) {
	ms.setNPCSpecialAction(2159355, "special");
	ms.getDirectionInfo(1, 1600);
    } else if (status == 30) {
	ms.TutInstructionalBalloon("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
	ms.getDirectionInfo(1, 2280);
    } else if (status == 31) {
	ms.spawnNPCRequestController(2159355, 0,18, 10);
	ms.setNPCSpecialAction(2159355 , "summon");
	ms.getDirectionInfo(1, 700);
    } else if (status == 32) {
	ms.removeNPCRequestController(2159354);
	ms.sendSelfTalk(9, 2159355, "你，还得感谢你让事情变得简单了呢，谢谢啊。");
    } else if (status == 33) {
	ms.sendSelfTalk(3, 2159355, "#p2159355#！连同伴都要伤害吗？");
    } else if (status == 34) {
	ms.getDirectionInfo(0, 436, 540);
	ms.getDirectionInfo("Skill/2711.img/skill/27111100/prepare", 540, -40, -25, 0, 0);
	ms.getDirectionInfo(1, 90);
    } else if (status == 35) {
	ms.setNPCSpecialAction(2159355 , "barrier");
	ms.getDirectionInfo(1, 450);
    } else if (status == 36) {
	ms.getDirectionInfo(0, 437, 3000);
	ms.getDirectionInfo("Skill/2711.img/skill/27111100/keydown", 3000, -40, -25, 0, 0);
	ms.getDirectionInfo(1, 30);
    } else if (status == 37) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 38) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 39) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 40) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 41) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 42) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 43) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 44) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 45) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 270);
    } else if (status == 46) {
	ms.getNPCDirectionEffect(2159355, "Effect/OnUserEff.img/normalEffect/lightning/guard", 0, 0, 0);
	ms.getDirectionInfo(1, 540);
    } else if (status == 47) {
	ms.getDirectionInfo("Skill/2711.img/skill/27111101/keyedownend", 0, -40, -25, 0, 0);
	ms.getDirectionInfo(1, 600);
    } else if (status == 48) {
	ms.sendSelfTalk(9, 2159355, "这种程度算什么。不过时间到了。可惜啊，只能下次再解决你这家伙了。");
    } else if (status == 49) {
	ms.sendSelfTalk(3, 2159355, "什么声音？");
    } else if (status == 50) {
	ms.sendSelfTalk(9, 2159355, "没时间和你玩了。这世界上，已经没什么我要做的了，哈哈哈。");
    } else if (status == 51) {
	ms.setNPCSpecialAction(2159355, "teleportation");
	ms.getDirectionInfo(1, 450);
    } else if (status == 52) {
	ms.removeNPCRequestController(2159355);
	ms.sendSelfTalk(3, 2159355, "吸收古瓦洛的力量后，离开战斗了……？还说什么#b'这世界'#k，一定有阴谋。不过多亏了你，我省的麻烦了。现在就集中解决黑魔法师吧。先出发的同伴们应该已经到时间神殿那头了吧。我们必须尽快与他们会合。");
    } else {
	ms.EnableUI(0);
	ms.dispose();
	ms.warp(927020010, 0);
	ms.enableActions();
    }
}

