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
        ms.spawnNPCRequestController(9072302, -3, -30);
        ms.darkEnv(1, 200, 1300);
        ms.wait(1600);
    } else if (status == i++) {
        ms.sendTellStory("今天又是和平的皮卡啾世界…", true);
    } else if (status == i++) {
        ms.darkEnv(0, 0, 1300);
        ms.wait(1600);
    } else if (status == i++) {
        ms.wait(3000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "yawn", 1800, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/yawn");
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#今天也好無聊…要玩什麼呢…", 1, 0, 1500, 3000);
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#不然就先繼續玩上次玩的那個好了?", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "fan", 2880, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/fan");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "pogoStick", 2400, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/pogostick");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "moving", 1440, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/beanmoving");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "rCcar", 3600, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/rccar");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "guitar", 1200, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/guitar");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "headSet", 2400, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/headset2");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "yoyo", 1680, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/yoyo");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "juice", 2400, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/juice");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "yawn", 1800, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/yawn");
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#現在沒什麼好做了耶…", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#好無聊喔，要繼續玩上次玩的那個嗎…", 1, 0, 1500, 3000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "moving2", 720, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/all");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "rCcar2", 540, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "fan2", 420, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "yoyo2", 300, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "guitar2", 540, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "pogoStick2", 720, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "headSet2", 810, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "juice2", 720, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "rCcar3", 270, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "headSet3", 270, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "moving3", 240, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "guitar3", 180, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "moving4", 240, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "yoyo3", 150, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "pogoStick3", 240, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "moving5", 240, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "juice3", 240, true);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "yawn", 1800, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/yawn");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "Rolling", 2000, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/rolling");
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs20#好無聊！好無聊！", 0, 0, 1500, 2000);
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs20#根本就沒有新的東西啊！", 0, 0, 1500, 2500);
    } else if (status == i++) {
        ms.resetNPCController(9072302);
        ms.spawnNPCRequestController(9072300, -116, -25);
        ms.wait(1000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "discovery2", 2500, true, -1);
        ms.playSound("Sound/SoundEff.img/PinkBean/discovery");
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "worry", 1000, true, -1);
        ms.playSound("Sound/SoundEff.img/PinkBean/worry");
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#唉…想說要做什麼，結果還是去了一樣的地方啊？", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#我本來想說去那邊玩一下，結果有奇怪的冒險家看到我就打…", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#我到別的世界的話就會變得很弱。", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#哼，我現在也漸漸的不耐煩了… ", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.spawnNPCRequestController(9072303, 720, -25);
        ms.setNPCSpecialAction(9072303, "moving", 8640, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/blackbeanmoving");
    } else if (status == i++) {
        ms.resetNPCController(9072303);
        ms.removeNPCRequestController(9072303);
        ms.spawnNPCRequestController(9072303, 389, -25);
        ms.getNPCBubble(9072303, "#fn歌德 ExtraBold##fs15#你還是看起來傻傻的啊。", 1, 1, 2000, 2500);
    } else if (status == i++) {
        ms.getNPCBubble(9072303, "#fn歌德 ExtraBold##fs15#這個黑皮卡啾\r\n還是沒有察覺到的樣子？", 1, 1, 1500, 1500);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072303, "giggle", -1, true, 1000);
        ms.playSound("Sound/SoundEff.img/PinkBean/giggle");
    } else if (status == i++) {
        ms.getNPCBubble(9072303, "#fn歌德 ExtraBold##fs15#那今天要不要來逗弄一下皮卡啾啊？", 1, 1, 1500, 2000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072303, "potal", 1680, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/potal");
    } else if (status == i++) {
        ms.spawnNPCRequestController(9072301, 112, -25);
        ms.wait(360);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072303, "giggle", -1, true, 2500);
        ms.playSound("Sound/SoundEff.img/PinkBean/giggle");
        ms.getNPCBubble(9072303, "#fn歌德 ExtraBold##fs15#通過的話，會準備受到『等級狂跌』詛咒\r\n的特別傳點！", 1, 1, 2000, 2500);
    } else if (status == i++) {
        ms.getNPCBubble(9072303, "#fn歌德 ExtraBold##fs15#你就去沒去過的地方受苦看看吧。", 1, 1, 2000, 3000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072303, "moving2", 10000, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/blackbeanmoving");
    } else if (status == i++) {
        ms.removeNPCRequestController(9072303);
        ms.wait(1000);
    } else if (status == i++) {
        ms.wait(500);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "discovery", 500, true, -1);
        ms.playSound("Sound/SoundEff.img/PinkBean/discovery");
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#喔？那邊傳點裡有地方是我從來沒看過的耶？", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.setNPCSpecialAction(9072302, "expectation", 2000, true, -1);
        ms.playSound("Sound/SoundEff.img/PinkBean/expectation");
    } else if (status == i++) {
        ms.getNPCBubble(9072302, "#fn歌德 ExtraBold##fs15#要去嗎… #fs18#要去嗎…#fs20#要去嗎！", 1, 0, 1500, 2000);
    } else if (status == i++) {
        ms.removeNPCRequestController(9072301);
        ms.setNPCSpecialAction(9072302, "jumpIn", 2280, true);
        ms.playSound("Sound/SoundEff.img/PinkBean/jumpin");
    } else if (status == i++) {
        ms.removeNPCRequestController(9072300);
        ms.spawnNPCRequestController(9072301, 112, -25);
        ms.hidePlayer(false);
        ms.EnableUI(0);
        ms.removeNPCRequestController(9072302);
        ms.removeNPCRequestController(9072301);
        ms.warp(927030091, 0);
        ms.dispose();
    } else {
        ms.dispose();
    }
}