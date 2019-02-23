/*
 Made by Wubin
*/

importPackage(Packages.scripting);
importPackage(java.lang);

var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1); // IntroEnableUI
        ms.DisableUI(true);//IntroDisableUI
        ms.teachSkill(30011109, 1, 1);
        ms.teachSkill(30011110, 1, 1);
        ms.teachSkill(30010111, 1, 1);
        ms.teachSkill(30010185, 1, 1);
        ms.getDirectionInfo(3, 0);
        ms.spawnNPCRequestController(2159307, 1430, 69, 50);
        ms.setNPCSpecialAction(2159307, "summon");
        ms.sendPyramidEnergy("mastema", "31156017");
        ms.showEffect("demonSlayer/back");
        ms.showEffect("demonSlayer/text0");
        ms.getDirectionInfo(1, 500);
        ms.spawnPortal();
    } else if (status == 1) {
        ms.showEffect("demonSlayer/text1");
        ms.getDirectionInfo(1, 1000);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionInfo(1, 3000);
    } else if (status == 3) {
        ms.showEffect("demonSlayer/text2");
        ms.getDirectionInfo(1, 500);
    } else if (status == 4) {
        ms.showEffect("demonSlayer/text3");
        ms.getDirectionInfo(1, 4000);
    } else if (status == 5) {
        ms.showEffect("demonSlayer/text4");
        ms.getDirectionInfo(1, 500);
    } else if (status == 6) {
        ms.showEffect("demonSlayer/text5");
        ms.getDirectionInfo(1, 4000);
    } else if (status == 7) {
        ms.showEffect("demonSlayer/text6");
        ms.getDirectionInfo(1, 500);
    } else if (status == 8) {
        ms.showEffect("demonSlayer/text7");
        Thread.sleep(5500);
        ms.sendSelfTalk(1, 2159307, "军团长！这段时间联系都没有，你到哪儿去了？你也知道，#p2159309#老是喜欢挑我的毛病，经常为难我……");
    } else if (status == 9) {
        ms.sendSelfTalk(1, 2159307, "真让人气愤。你去时间神殿抓到了女神，他一定是在嫉妒你。哼！#p2159309#做的事情只不过是蒙蔽了女神的眼睛而已，而且还是利用原来的地位！");
    } else if (status == 10) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionStatus(true);
        ms.sendSelfTalk(1, 2159307, "嗯？……平时的话，你应该会责备我，让我别说这种废话的啊……发生什么事了吗？我现在才发现，你的脸色好像非常不好……有什么地方不舒服吗？在之前的战斗中受伤了吗？");
    } else if (status == 11) {
        ms.sendSelfTalk(3, 2159307, "……#p2151009#。你……在黑魔法师和我之中，你是谁的部下？");
    } else if (status == 12) {
        ms.sendSelfTalk(1, 2159307, "嗯？干嘛突然问这种问题……？");
    } else if (status == 13) {
        ms.sendSelfTalk(3, 2159307, "请你回答。");
    } else if (status == 14) {
        ms.sendSelfTalk(1, 2159307, "当……当然是效忠于那位伟大的人。但是自从你救了我之后，我就决定为你献出生命……！你不是知道吗？！为什么要问这个……？");
    } else if (status == 15) {
        ms.sendSelfTalk(3, 2159307, "……我想拜托你一件事。");
    } else if (status == 16) {
        ms.sendSelfTalk(3, 2159307, "请帮我把这封信……交给他们，被称为#r英雄#k的人。");
    } else if (status == 17) {
        ms.sendSelfTalk(1, 2159307, "嗯？为什么要把这个交给他们……光是你这段时间不在，可能就已经不太好了。如果和他们接触的事情被人知道，你一定会背上背叛黑魔法师的污名！一定会那样的！你在想什么啊，军团长！");
    } else if (status == 18) {
        ms.sendSelfTalk(3, 2159307, "……我已经不再是军团长了。");
    } else if (status == 19) {
        ms.sendSelfTalk(1, 2159307, "难道……你背叛了黑魔法师？！原来比谁都忠诚的你？！占领时间神殿才刚刚不久！现在应该是领取奖励的时候……为什么……为什么？");
    } else if (status == 20) {
        ms.sendSelfTalk(3, 2159307, "……没时间了。如果你觉得太为难，就算了……我不想和你战斗。");
    } else if (status == 21) {
        ms.sendSelfTalk(1, 2159307, "没什么为难的！我只是担心你……！");
    } else if (status == 21) {
        ms.sendSelfTalk(3, 2159307, "......");
    } else if (status == 22) {
        ms.sendSelfTalk(1, 2159307, "家人们你想怎么处理呢？！这样的话，家人们也许会受到危害……！");
    } else if (status == 23) {
        ms.sendSelfTalk(3, 2159307, "不要再说了！这件事就说到这里！");
    } else if (status == 24) {
        ms.sendSelfTalk(1, 2159307, "……为什么……难道……难道他们出了什么事……？");
    } else if (status == 25) {
        ms.sendSelfTalk(3, 2159307, "......");
    } else if (status == 26) {
        ms.sendSelfTalk(1, 2159307, "你又这样……不说话了……好吧，你本来就不喜欢说这些。");
    } else if (status == 27) {
        ms.sendSelfTalk(1, 2159307, "好的。我就是拼了命，也会把这封信交给他们。");
    } else if (status == 28) {
        ms.sendSelfTalk(3, 2159307, "对不起，#p2151009#……");
    } else if (status == 29) {
        ms.sendSelfTalk(1, 2159307, "用不着道歉。我的生命是为你而存在的。你能把这件事交给我，我感到很高兴。");
    } else if (status == 30) {
        ms.sendSelfTalk(1, 2159307, "既然接到了命令，我马上就走。希望你能实现自己的目标……");
    } else if (status == 31) {
        ms.setNPCSpecialAction(2159307, "teleportation");
        ms.getDirectionInfo(1, 720);
    } else if (status == 32) {
        ms.removeNPCRequestController(2159307);
        ms.enableActions();
        ms.sendSelfTalk(3, 2159307, "(真是谢谢你了，#p2151009#。)");
    } else if (status == 33) {
        ms.getDirectionInfo(3, 2);
        ms.getDirectionStatus(true);
        Thread.sleep(5500);
         ms.getDirectionStatus(true);
        ms.enableActions();
        ms.sendchangeMap(927000080);
        ms.enableActions();
        ms.dispose();
    } else {
        ms.dispose();
    }
}

