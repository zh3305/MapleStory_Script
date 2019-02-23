/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

    if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
        ms.getDirectionInfo(9, 1);
        ms.spawnNPCRequestController(2159386, 350,30);
        ms.setNPCSpecialAction(2159386, "summon");
        ms.spawnNPCRequestController(2159382, 250,30);
        ms.setNPCSpecialAction(2159382, "summon");
        ms.spawnNPCRequestController(2159385, 480,30);
        ms.setNPCSpecialAction(2159385, "summon");
        ms.spawnNPCRequestController(2159427, 50,30);
        ms.setNPCSpecialAction(2159427, "summon");
        ms.spawnNPCRequestController(2159427, 0,30);
        ms.setNPCSpecialAction(2159427, "summon");
        ms.getDirectionInfoNew(0,150,200,22);
    } else if (status == 1) {
	ms.getDirectionStatus(true);
        ms.getDirectionInfo(1, 2100);
    } else if (status == 2) {
        ms.setNPCSpecialAction(2159427, "die");
        ms.getDirectionInfo(1, 120);
    } else if (status == 3) {
        ms.setNPCSpecialAction(2159427, "die");
        ms.getDirectionInfo(1, 1500);
    } else if (status == 4) {
        ms.removeNPCRequestController(2159427);
        ms.getDirectionInfo(1, 120);
    } else if (status == 5) {
        ms.removeNPCRequestController(2159427);
        ms.sendSelfTalk(1, 2159386, "那些家伙，真是没完没了。");
    } else if (status == 6) {
        ms.sendSelfTalk(1, 2159382, "接到报告说发现了秘密研究所，所以想潜入进来看看。看来这条鱼比想象的要大。");
    } else if (status == 7) {
        ms.sendSelfTalk(1, 2159385, "这里的防御这么强，反倒让人很想看看里面到底藏着什么东西？我一定要让他们的狐狸尾巴露出来。");
    } else if (status == 8) {
        ms.sendSelfTalk(1, 2159382, "贝尔，这都什么时候了，还说得这么轻松……");
    } else if (status == 9) {
        ms.getNPCDirectionEffect(2159382, "Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120);
        ms.getDirectionInfo(1, 900);
    } else if (status == 10) {
        ms.removeNPCRequestController(2159382);
        ms.spawnNPCRequestController(2159382, 250,30);
        ms.setNPCSpecialAction(2159382, "summon");
        ms.getNPCDirectionEffect(2159382, "Effect/Direction12.img/effect/tuto/BalloonMsg2/12", 1200, 0, -120);
        ms.setNPCSpecialAction(2159382, "catched");
        ms.getNPCDirectionEffect(2159386, "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120);
        ms.updateNPCSpecialAction(2159386, 1,30, 100);
        ms.getDirectionInfo(1, 2160);
    } else if (status == 11) {
        ms.updateNPCSpecialAction(2159386, -1,2, 100);
        ms.removeNPCRequestController(2159382);
        ms.spawnNPCRequestController(2159383, 270,30);
        ms.setNPCSpecialAction(2159383, "summon");
        ms.getDirectionInfo(9, 0);
        ms.getDirectionInfo(3, 2);
        ms.getNPCDirectionEffect(2159385, "Effect/Direction12.img/effect/tuto/BalloonMsg2/13", 900, 0, -120);
        ms.getDirectionInfo(1, 300);
    } else if (status == 12) {
        ms.getNPCDirectionEffect(2159385, "Effect/Direction12.img/effect/tuto/BalloonMsg2/13", 900, 0, -120);
        ms.getDirectionInfo(1, 900);
    } else if (status == 13) {
        ms.spawnNPCRequestController(2159377, -700, 30);
        ms.setNPCSpecialAction(2159377, "summon");
        ms.spawnNPCRequestController(2159378, -800, 30);
        ms.setNPCSpecialAction(2159378, "summon");
        ms.sendSelfTalk(3, 2159383, "按照命令，攻击目标。");
    } else if (status == 14) {
        ms.getNPCDirectionEffect(2159383, "Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120);
        ms.getDirectionInfo(1, 810);
    } else if (status == 15) {
        ms.sendSelfTalk(1, 2159385, "离开吉格蒙特！");
    } else if (status == 16) {
        ms.getDirectionInfo(0, 4, 0);
        ms.getDirectionInfo(1, 2000);
    } else if (status == 17) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 810);
    } else if (status == 18) {
        ms.sendSelfTalk(3, 2159385, "呃，头……头好痛。");
    } else if (status == 19) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/memory/0", 3900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 3900);
    } else if (status == 20) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/1", 900, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 810);
    } else if (status == 21) {
        ms.sendSelfTalk(3, 2159385, "刚才那是什么？我想起了从没见过的场面。心里这种郁闷的感觉是什么……。");
    } else if (status == 22) {
        ms.getNPCDirectionEffect(2159383, "Effect/Direction12.img/effect/tuto/BalloonMsg0/2", 900, 0, -120);
        ms.getDirectionInfo(1, 810);
    } else if (status == 23) {
        ms.updateNPCSpecialAction(2159377, 1,650, 100);
        ms.getDirectionInfo(1, 150);
    } else if (status == 24) {
        ms.updateNPCSpecialAction(2159378, 1,650, 100);
        ms.getDirectionInfoNew(0,200,-450,43);
    } else if (status == 25) {
        ms.getDirectionInfo(1, 3251);
    } else if (status == 26) {
        ms.getDirectionInfoNew(1,80);
    } else if (status == 27) {
        ms.getDirectionInfo(1, 6823);
    } else if (status == 28) {
        ms.sendSelfTalk(1, 2159377, "嗯？你在干什么？快去抓住那个……不，先把剩下的家伙全部抓回来！");
    } else if (status == 29) {
        ms.getNPCDirectionEffect(2159386, "Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 900, 0, -120);
        ms.getDirectionInfo(1, 810);
    } else if (status == 30) {
        ms.sendSelfTalk(1, 2159386, "……贝尔！现在必须先逃走。");
    } else if (status == 31) {
        ms.sendSelfTalk(1, 2159385, "吉格蒙特怎么办？");
    } else if (status == 32) {
        ms.sendSelfTalk(1, 2159386, "光靠我们的力量不行！必须召集同伴们一起过来！哎呀！");
    } else if (status == 33) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/smog", 0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 34) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg2/14", 0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 35) {
        ms.removeNPCRequestController(2159386);
        ms.removeNPCRequestController(2159385);
        ms.getNPCDirectionEffect(2159377, "Effect/Direction12.img/effect/tuto/BalloonMsg1/1", 1500, 0, -120);
        ms.getDirectionInfo(1, 840);
    } else if (status == 36) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/smogEnd",  0, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1020);
    } else if (status == 37) {
        ms.sendSelfTalk(1, 2159377, "不能放过那些家伙！");
    } else if (status == 38) {
        ms.sendSelfTalk(1, 2159377, "尖兵！抓住那个反抗者，别让他逃走！维丽尔! 你和我去追那些家伙！");
    } else if (status == 39) {
        ms.updateNPCSpecialAction(2159377, 1,600, 100);
        ms.updateNPCSpecialAction(2159378, 1,600, 100);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 40) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/tuto/BalloonMsg0/0", 0, 0, -120, 0, 0);
        ms.sendSelfTalk(3, 2159377, "刚才那个，到底是什么呢……。");
    } else {
	ms.getDirectionStatus(true);
        ms.removeNPCRequestController(2159383);
        ms.removeNPCRequestController(2159377);
        ms.removeNPCRequestController(2159378);
        ms.EnableUI(0);
        ms.dispose();
        ms.warp(931050950, 0);
        ms.enableActions();
    }
}

