/*
 Made by Kent
 */

var status = -1;

function action(mode, type, selection) {
        status++;

    if (status == 0) {
        ms.spawnNPCRequestController(2159385, 41, 58);
        ms.spawnNPCRequestController(2159386, -248, 58);
        ms.spawnNPCRequestController(2159384, -50,58);
        ms.spawnNPCRequestController(2159387, -340, 58);
        ms.spawnNPCRequestController(2159388, 121, 58);
        ms.spawnNPCRequestController(2159381, -171,58);
	ms.getDirectionStatus(true);
	ms.EnableUI(1);
	ms.DisableUI(true);
        ms.getDirectionInfo(3, 0);
        ms.getDirectionInfo(1, 30);
    } else if (status == 1) {
        ms.getDirectionInfo(3, 1);
        ms.getDirectionInfo(1, 30);
    } else if (status == 2) {
        ms.getDirectionInfo(3, 0);
        ms.sendSelfTalk(1, 2159385, "吉格蒙特！还好你没事。你不知道我有多担心。");
    } else if (status == 3) {
        ms.sendSelfTalk(1, 2159384, "谢谢你，贝尔。");
    } else if (status == 4) {
        ms.sendSelfTalk(1, 2159388, "但是……这家伙是谁？从刚才的情况看，好像不是敌人，所以也把他带来了。");
    } else if (status == 5) {
        ms.sendSelfTalk(1, 2159386, "应该是格里梅尔的部下。刚见到的时候，他还想攻击吉格蒙特。……这段时间到底发生了什么事？刚才的情况真是让人看不懂。");
    } else if (status == 6) {
        ms.sendSelfTalk(1, 2159384, "我也搞不太清楚，但他不是个坏人。他是我的救命恩人。不仅如此，他好像失去了记忆，被关在格里梅尔的研究所里。");
    } else if (status == 7) {
        ms.sendSelfTalk(1, 2159387, "话虽这么说，但之前你不也看见了吗？我看这个人好像受到了格里梅尔的操纵。让他进入秘密广场真的没关系吗？要是他再次受到操纵，那该怎么办？");
    } else if (status == 8) {
        ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg0/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 9) {
        ms.sendSelfTalk(1, 2159380, "那个装置，我应该可以拆除……");
    } else if (status == 10) {
	ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo("Effect/Direction12.img/effect/story/BalloonMsg1/1", 1200, 0, -120, 0, 0);
        ms.getDirectionInfo(1, 1200);
    } else if (status == 11) {
        ms.sendSelfTalk(1, 2159388, "那就马上拆除。总不能把那种危险的东西一直带在身上。");
    } else if (status == 12) {
        ms.sendSelfTalk(1, 2159380, "但是这好像不是单纯用于操纵的装置……好像还包含有战斗系统。如果把它拆掉，系统就会失效，#h0#你会变得比现在弱得多。格里梅尔随时可能派出追踪者，那样做太危险了。");
    } else if (status == 13) {
        ms.sendSelfTalk(3, 2159380, "没关系，鲁提。能拆掉的话，就拆掉吧。");
    } else if (status == 14) {
        ms.sendSelfTalk(1, 2159380, "真的？你不后悔？");
    } else if (status == 15) {
        ms.sendSelfTalk(3, 2159380, "系统只要慢慢修复就行，虽然会花费一点时间……。但是如果被操纵，那就完蛋了。所以带着那种装置反而更危险。我不想再被人操纵了。");
    } else if (status == 16) {
        ms.sendSelfTalk(1, 2159380, "既然你这么说，明白了，我马上帮你拆除。");
    } else if (status == 17) {
        ms.sendSelfTalk(1, 2159380, "好的，拆掉了。刚开始会不太熟悉，可能会感觉有点困难。");
    } else {
        while (ms.getLevel() < 10) {
            ms.getLevelup();
        }
	ms.teachSkill(30021238, -1, -1);
        ms.EnableUI(0);
	ms.DisableUI(false);
        ms.dispose();
        ms.warp(310010000, 0);
        ms.enableActions();
    }
}

