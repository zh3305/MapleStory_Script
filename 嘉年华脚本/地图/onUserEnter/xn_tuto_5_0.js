/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
    status++;

   if (status == 0) {
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
	ms.getDirectionInfo(1, 1000);
	ms.getDirectionStatus(true);
    } else if (status == 1) {
	ms.spawnNPCRequestController(2159377, -180,50);
	//ms.spawnNPCRequestController(2159424, -346,83);
	ms.setNPCSpecialAction(2159424, "summon");
	ms.getDirectionInfoNew(0,100,-272,-63);
    } else if (status == 2) {
        ms.getDirectionInfo(1, 2701);
    } else if (status == 3) {
        ms.sendSelfTalk(1, 2159377, "今天的测试和调整已经进入了最后的阶段。好的，准备好了吗？");
    } else if (status == 4) {
        ms.getNPCDirectionEffect(2159377, "Effect/Direction12.img/effect/tuto/BalloonMsg2/11", 1200, 0, -120);
        ms.getDirectionInfo(1, 900);
    } else if (status == 5) {
        ms.getDirectionInfoNew(1,100);
    } else if (status == 6) {
        ms.getDirectionInfo(1, 2381);
	ms.teachSkill(30021238, 1, 1);
    /*} else {
	ms.teachSkill(30021238, 1, 1);
	ms.EnableUI(0);
	ms.dispose();
    }*/
    } else if (status == 7) {
        ms.getDirectionInfoNew(0,100,-185,-41);
    } else if (status == 8) {
        ms.getDirectionInfo(1, 2604);
    } else if (status == 9) {
        ms.sendSelfTalk(1, 2159377, "呵呵呵，非常好！非常让人满意的结果。现在只要再进行细微的调整……。");
    } else if (status == 10) {
        ms.getNPCDirectionEffect(2159377, "Effect/Direction12.img/effect/tuto/BalloonMsg1/0", 1200, 0, -120);
        ms.updateNPCSpecialAction(2159377, -1,1, 100);
        ms.getDirectionInfo(1, 90);
    } else if (status == 11) {
        ms.sendSelfTalk(1, 2159377, "入侵者？难，难道是奥尔卡？快打开监视器！");
    } else if (status == 12) {
        ms.getDirectionInfo(1, 2100);
    } else if (status == 13) {
        ms.getDirectionInfo(1, 1200);
    } else if (status == 14) {
        ms.sendSelfTalk(1, 2159377, "是反抗者吗……不过总比被奥尔卡发现要好。那些烦人的家伙，为什么偏偏要在这个时候潜入呢？");
    } else if (status == 15) {
        ms.sendSelfTalk(1, 2159377, "不过这也许是件好事。就最后再进行一次测试，用那些家伙作为对象，呵呵呵……。");
    } else {
        ms.removeNPCRequestController(2159377);
        ms.EnableUI(0);
        ms.dispose();
        ms.warp(931050940, 0);
        ms.enableActions();
    }
}

