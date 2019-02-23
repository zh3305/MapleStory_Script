/* global ms */

var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    var i = -1;
    if (status <= i++) {
        ms.dispose();
    } else if (status == i++) {
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.hidePlayer(true);
        var level = 10 - ms.getPlayerStat("LVL");
        for (var i = 0; i < level; i++) {
            ms.levelUp();
        }
        ms.forceStartQuest(14929);
        ms.changeDamageSkin(28);
        ms.spawnNPCRequestController(9072302, 3995, 115);
        ms.spawnNPCRequestController(9072304, 3700, 115);
        ms.wait(5000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "expectation2", -1, true, 5000);
        ms.playSound("Sound/SoundEff.img/PinkBean/expectation");
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs18#是第一次看到的地方！好神奇！那個爺爺也是第一次看到！", 0, 0, 1500, 3000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "worry", -1, true, 3000);
        ms.playSound("Sound/SoundEff.img/PinkBean/worry");
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#喔，但是我變得很弱。等級比之前常去的地方還要低很多？", 1, 1, 1500, 3000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072304, "say", -1, true, 1500);
        ms.getNPCBubble(9072304, "#fn歌德 ExtraBold##fs15#你看什麼看的這麼驚訝？ 最近冒險家真的很多！", 0, 0, 1500, 1500);
    } else if (status == i++) {
        ms.resetNPCController(9072304);
        ms.wait(500);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "worry", -1, true, 2000);
        ms.playSound("Sound/SoundEff.img/PinkBean/worry");
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#我看起來像是冒險家…？", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072304, "say", -1, true, 1500);
        ms.getNPCBubble(9072304, "#fn歌德 ExtraBold##fs15#你吃錯什麼藥了嗎？你看起來當然是冒險家啊，難不成看起來是菇菇寶貝嗎？", 0, 0, 1500, 1500);
    } else if (status == i++) {
        ms.resetNPCController(9072304);
        ms.wait(500);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "expectation2", -1, true, 2500);
        ms.playSound("Sound/SoundEff.img/PinkBean/expectation");
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#不知道是甚麼原因，但我好像看起來像是冒險家？", 1, 1, 1500, 3000);
    } else if (status == i++) {
        ms.playSound("Sound/SoundEff.img/PinkBean/expectation");
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#雖然變得很弱，但就一邊裝成冒險家，一邊開心的玩吧！", 1, 1, 1500, 2500);
    } else if (status == i++) {
        ms.playSound("Sound/SoundEff.img/PinkBean/expectation");
        ms.setNPCSpecialAction(9072304, "say", -1, true, 1500);
        ms.getNPCBubble(9072304, "#fn歌德 ExtraBold##fs15#最近的年輕人，嘖嘖嘖…", 1, 0, 1500, 1500);
    } else if (status == i++) {
        ms.resetNPCController(9072304);
        ms.wait(500);
    } else if (status == i++) {
        ms.removeNPCRequestController(9072302);
        ms.hidePlayer(false);
        ms.EnableUI(0);
        ms.removeNPCRequestController(9072304);
        ms.warp(100000000, 2);
        ms.dispose();
    } else {
        ms.dispose();
    }
}