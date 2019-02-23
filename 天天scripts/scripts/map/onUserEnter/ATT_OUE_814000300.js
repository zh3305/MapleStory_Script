/*
 Made by Pungin
 */

        var status = -1;

function action(mode, type, selection) {
    if (mode > 0) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1, 0);
        ms.DisableUI(true);
        ms.sendNextSNew("到底是什麼什麼事情了？吃人的巨人!! 而且還赤裸裸…不，這不是重點…現在我要去哪裡才好呢？", 0x39, 1);
    } else if (status == 1) {
        ms.getDirectionStatus(true);
        ms.getDirectionInfo(1, 1000);
    } else if (status == 2) {
        ms.getDirectionInfoNew(0, 4000, -320, 0);
    } else if (status == 3) {
        ms.getDirectionInfo(1, 3000);
    } else if (status == 4) {
        ms.getDirectionInfoNew(1, 2000);
    } else if (status == 5) {
        ms.sendNextSNew("阿! 在那裡一群人在坐船! 好像是搭上那個船離開這村莊的樣子. 很好，我也要搭上那艘船離開這裡! 竟然說會是個有趣的冒險，根本就騙人的嘛!!!", 0x39, 1);
    } else if (status == 6) {
        ms.EnableUI(0);
        ms.DisableUI(false);
        ms.dispose();
    } else {
        ms.dispose();
    }
}