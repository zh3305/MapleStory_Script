var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendNextS("#h0#，怎么这么晚～快到这边来！", 8);
    } else if (status == 1) {
        cm.sendNextPrevS("What was the hold up? You scared or something?", 4, 2159002);
    } else if (status == 2) {
        cm.sendNextPrevS("我没害怕。", 2);
    } else if (status == 3) {
        cm.sendNextPrevS("真，真的吗？我可有点害怕……大人们不让我们到#莱班矿山#k这边来。这里有#r黑色之翼的人#k守着……", 4, 2159000);
    } else if (status == 4) {
        cm.sendNextPrevS("所以我特地绕过了监视者，才能来到这里。如果不是趁这种时候，我们什么时候能从#b埃德尔斯坦#k出来呢。哎呀，胆小鬼。", 4, 2159002);
    } else if (status == 5) {
        cm.sendNextPrevS("但是……要是被大人骂该怎么办？", 4, 2159000);
    } else if (status == 6) {
        cm.sendNextPrevS("都已经到了这里了，还能怎么办？就算到时会被骂，该玩的时候还是要玩。我们来玩捉迷藏吧！", 8);
    } else if (status == 7) {
        cm.sendNextPrevS("嗯？捉迷藏！", 2);
    } else if (status == 8) {
        cm.sendNextPrevS("真幼稚……", 4, 2159002);
    } else if (status == 9) {
        cm.sendNextPrevS("什么幼稚！这里还能玩什么？有你就说啊！#h0#，你来抓我们！因为你迟到了。好了，我们去藏起来了？数到10之后，你来找我们！", 8);
    } else if (status == 10) {
        cm.warp(931000001, 1);
        cm.dispose();
    }
}