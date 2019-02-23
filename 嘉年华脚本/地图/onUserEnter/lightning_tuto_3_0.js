/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    if (mode >= 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
	ms.getDirectionInfo(3, 0);
	ms.spawnNPCRequestController(2159356, 1500,60, 50);
	ms.setNPCSpecialAction(2159356 , "summon");
	ms.spawnNPCRequestController(2159360, 1350,60, 50);
	ms.setNPCSpecialAction(2159360 , "summon");
	ms.spawnNPCRequestController(2159361, 1300,60, 50);
	ms.setNPCSpecialAction(2159361 , "summon");
	ms.getDirectionInfo("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0", 1000, 0, 0, 0, 0);
	ms.getDirectionInfo(1, 1200);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
	ms.setNPCSpecialAction(2159356, "attack");
	ms.getDirectionInfo(1, 450);
    } else if (status == 2) {
	ms.getDirectionInfo("Effect/Direction8.img/effect/tuto/BalloonMsg0/5", 0, 0, -120, 0, 0);
	ms.setNPCSpecialAction(2159360, "hit");
	ms.setNPCSpecialAction(2159361, "hit");
	ms.getNPCDirectionEffect(2159360, "Skill/2112.img/skill/21120005/hit/0", 0, -5, -50);
	ms.getNPCDirectionEffect(2159361, "Skill/2112.img/skill/21120005/hit/0", 0, -5, -50);
	ms.getDirectionInfo(1, 270);
    } else if (status == 3) {
	ms.getNPCDirectionEffect(2159360, "Skill/2112.img/skill/21120005/hit/0", 0, -5, -50);
	ms.getNPCDirectionEffect(2159361, "Skill/2112.img/skill/21120005/hit/0", 0, -5, -50);
	ms.getDirectionInfo(1, 900);
    } else if (status == 4) {
	ms.setNPCSpecialAction(2159360, "die");
	ms.setNPCSpecialAction(2159361, "die");
	ms.getNPCDirectionEffect(2159360, "Skill/2112.img/skill/21120005/hit/0", 0, -5, -50);
	ms.getNPCDirectionEffect(2159361, "Skill/2112.img/skill/21120005/hit/0", 0, -5, -50);
	ms.getDirectionInfo(1, 2200);
    } else if (status == 5) {
	ms.getDirectionInfo(3, 2);
	ms.removeNPCRequestController(2159360);
	ms.removeNPCRequestController(2159361);
	ms.sendSelfTalk(1, 2159356, "他们也不是省油的灯，来的挺快啊。果然是光之守护者。");
    } else if (status == 6) {
	ms.sendSelfTalk(17, 2159356, "你怎么会一个人在这？弗里德和双弩精灵呢？怎么还受伤了？");
    } else if (status == 7) {
	ms.sendSelfTalk(1, 2159356, "他们先出发了。也许已经和黑魔法师交手了。我有点事，所以迟了。");
    } else if (status == 8) {
	ms.sendSelfTalk(17, 2159356, "战神，一起走吧？");
    } else if (status == 9) {
	ms.sendSelfTalk(1, 2159356, "你是在担心我吗？人真好。不过我没事。这点小伤算不了什么。你还是快跟上去吧。就算弗里德和双弩精灵合作默契，也无法抵挡黑魔法师。");
    } else if (status == 10) {
	ms.sendSelfTalk(17, 2159356, "…知道了。你也别太勉强自己。");
    } else if (status == 11) {
	ms.getDirectionInfo(3, 2);
	ms.getDirectionStatus(true);
	ms.getDirectionInfo("Effect/Direction8.img/effect/tuto/BalloonMsg0/7", 4000, 0, -100, 0, 0);
	ms.getDirectionInfo(1, 1500);
    } else if (status == 12) {
	ms.getNPCDirectionEffect(2159356, "Effect/Direction8.img/effect/tuto/BalloonMsg0/6", 2500, 0, -100);
	ms.getDirectionInfo(1, 1500);
    } else {
	ms.EnableUI(0);
	ms.removeNPCRequestController(2159356);
	ms.dispose();
	ms.warp(927020060, 0);
	ms.enableActions();
    }
}

