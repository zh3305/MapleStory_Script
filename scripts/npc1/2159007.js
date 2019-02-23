var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() == 931000011 || cm.getPlayer().getMapId() == 931000030) {
        cm.dispose();
        return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1) {
        if (status == 0) {
            cm.sendNext("……嗯，咦？到底是怎么回事？因为刚才的震动，玻璃的强度变弱了吗……？怎么碎掉了？");
        } else if (status == 1) {
            cm.sendNextPrevS("好了，现在没有东西拦着你了？我们一起走吧！", 2);
        } else if (status == 2) {
            cm.sendNextPrev("但，但是……");
        } else if (status == 3) {
            cm.sendNextPrevS("你想继续留在这里吗？", 2);
        } else if (status == 4) {
            cm.sendNextPrev("怎么可能！我不想一辈子做实验体！");
        } else if (status == 5) {
            cm.sendNextPrevS("那我们就一起逃走吧！快！", 2);
        } else if (status == 6) {
            cm.updateInfoQuest(23007, "vel00=2;vel01=2");
            cm.warp(931000020, 1);
            cm.dispose();
        }
    } else if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1) {
        if (status == 0) {
            cm.sendNext("好，好久没到实验室外面来了……这是什么地方？");
        } else if (status == 1) {
            cm.sendNextPrevS("这是通往我们的村子埃德尔斯坦的路！在刚才那些奇怪的黑色之翼跟来之前，我们快走吧。", 2);
        } else if (status == 2) {
            cm.updateInfoQuest(23007, "vel00=2;vel01=3");
            cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
            cm.dispose();
        }
    } else {
        cm.sendOk("我真的好久没到实验室外面来了……");
        cm.dispose();
    }
}