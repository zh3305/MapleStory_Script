/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(true);
        ms.spawnNPCRequestController(3000107, -600, 6, 20);
        ms.setNPCSpecialAction(3000107, "summon"); 
        ms.spawnNPCRequestController(3000106, 500, 6, 20);
        ms.setNPCSpecialAction(3000106, "summon");
        ms.sendSelfTalk(1, 3000107, "糟糕了！！");
    } else if (status == 1) {
        ms.getDirectionEffect(3, "", 1, 0, 0, 0, 0, 0, 0, 0);//移动
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 2) {
        ms.getDirectionEffect(3, "", 0, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 3) {
        ms.getDirectionEffect(5, "", 0, 300, -400, 27, 0, 0, 0, 0);
    } else if (status == 4) {
        ms.getDirectionEffect(1, "", 2501, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 5) {
        ms.getDirectionEffect(2, "Effect/Direction9.img/effect/tuto/BalloonMsg1/0", 7000, 0, -150, 1, 1, 0, 0, 3000107);
        ms.updateNPCSpecialAction(3000107, 1,600, 100);
        ms.getDirectionEffect(5, "", 1, 100, 0, 0, 0, 0, 0, 0);
    } else if (status == 6) {
        ms.getDirectionEffect(1, "", 8339, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 7) {
        ms.sendSelfTalk(1, 3000107, "树精族的首都沦陷了！");
    } else if (status == 6) {
        ms.sendSelfTalk(3, 3000107, "(达勒摩尔终于惹出事端了……)");
    } else if (status == 7) {
        ms.sendSelfTalk(1, 3000106, "现在格兰蒂斯里几乎没有任何势力能抵抗达勒摩尔了。");
    } else if (status == 8) {
        ms.sendSelfTalk(1, 3000107, "还剩下阿尼玛族……");
    } else if (status == 9) {
        ms.sendSelfTalk(3, 3000107, "阿尼玛族和我们一样，原本就不是太大的势力。加上他们本性亲善，只要不受到攻击，绝对不会想要主动对抗达勒摩尔的。");
    } else if (status == 10) {
        ms.sendSelfTalk(1, 3000107, "这么说来现在……");
    } else if (status == 11) {
        ms.sendSelfTalk(3, 3000107, "没错，达勒摩尔下一个攻击目标就是我们的首都赫里希安。我这就前往赫里希安，准备抵抗达勒摩尔的侵略。");
    } else if (status == 12) {
        ms.sendSelfTalk(1, 3000106, "我们有没有什么办法打败达勒摩尔？现在的达勒摩尔拥有能和神一较高下的力量，连时间之超越者克洛尼卡都被他打败，还被夺去了力量。");
    } else if (status == 13) {
        ms.getDirectionEffect(3, "", 2, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 14) {
        ms.getDirectionEffect(3, "", 0, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 15) {
        ms.sendSelfTalk("赫里希安的防御膜还算坚固，达勒摩尔没那么容易攻进来，只守不攻应该没太大问题。虽然力量的差异显著，但绝对不能放弃希望。");
    } else if (status == 16) {
        ms.getDirectionEffect(3, "", 1, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 17) {
        ms.getDirectionEffect(3, "", 0, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 18) {
        ms.sendSelfTalk(3, 3000106, "卡塔利安，请你留在这里进行防守。");
    } else if (status == 19) {
        ms.sendSelfTalk(1, 3000107, "比起留在这里干着急，我更愿意出去战斗。我也是堂堂的诺巴战士啊。");
    } else if (status == 20) {
        ms.sendSelfTalk(3, 3000107, "为了以防万一，万神殿里也得建立防御膜。另外，建成后的防御膜也有可能会从内部被破坏，所以得有人负责防止这一切的发生。你应该清楚，以现在的情况，你是不二人选。");
    } else if (status == 21) {
        ms.sendSelfTalk(1, 3000107, "...");
    } else if (status == 22) {
        ms.sendSelfTalk(1, 3000106, "狂龙战士，你多保重。");
    } else if (status == 23) {
        ms.getDirectionEffect(3, "", 2, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 24) {
        ms.getDirectionEffect(3, "", 0, 0, 0, 0, 0, 0, 0, 0);
        ms.getDirectionEffect(1, "", 30, 0, 0, 0, 0, 0, 0, 0);
    } else if (status == 25) {
        ms.sendSelfTalk("别担心，狼牙。我可是狂龙战士。");
    } else if (status == 26) {
        ms.sendSelfTalk(1, 3000106, "(狂龙战士……)");
    } else {
	ms.removeNPCRequestController(3000107);
        ms.removeNPCRequestController(3000106);
	ms.EnableUI(false);
        ms.dispose();
	ms.warp(940001010, 0);
        ms.enableActions();
    }

}

