/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  @Author Kent 
 */
var chat = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 /*End Chat*/ || mode == 0 && chat == 0 /*Due to no chat -1*/) {
        cm.dispose();
        return;
    }
    mode == 1 ? chat++ : chat--;
    if (chat == 0)
        cm.sendNextS("我正在等你.", 1);
    else if (chat == 1)
        cm.sendNextPrevS("发生什么事情了， I was in the middle of very important loot-related business.", 3);
    else if (chat == 2)
        cm.sendNextPrevS("联盟已经收到了一些非常令人震惊的消息。 一个以前未知的地区已经出现在林中之城北部地区。", 1);
    else if (chat == 3)
        cm.sendNextPrevS("出现了吗？", 3);
    else if (chat == 4)
        cm.sendNextPrevS("是的，很奇怪。我相信它被某种古老的魔法所隐藏。", 1);
    else if (chat == 5)
        cm.sendNextPrevS("给我带来这个信息的侦察员说，他觉得那里很邪恶。它可能与黑法师有关。", 1);
    else if (chat == 6)
        cm.sendNextPrevS("听起来好像我们需要马上去那里。", 3);
    else if (chat == 7)
        cm.sendNextPrevS("我已经派出骑士团。该地区的地形非常复杂的，大部分地区被浓雾笼罩。", 1);
    else if (chat == 8)
        cm.sendNextPrevS("...那我该做什么?", 3);
    else if (chat == 9)
        cm.sendNextPrevS("四处看看。一个探险家的损失将远比所有的骑士更容易接受。", 1);
    else if (chat == 10)
        cm.sendNextPrevS("我会把你传送到#b#e#m105010000##n#k去调查. 如果你发现了什么，立即报告。", 1);
    else if (chat == 11)
        cm.sendNextPrevS("我将用希纳斯的力量把你传送到#b#e#m105010000##n#k.", 1);
    else if (chat == 12) {
        cm.forceCompleteQuest(30000);
        cm.EnableUI(0);
        cm.DisableUI(false);
        cm.warp(105010000, 3);
        cm.dispose();
    }
}
