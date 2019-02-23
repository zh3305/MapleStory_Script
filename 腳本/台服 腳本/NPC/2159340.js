var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    if (status == 0) {
        cm.sendNextS("什… 什麼？ 那是什麼呢？！", 5, 2159340);
    } else if (status == 1) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg2/1", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [900]);
    } else if (status == 2) {
        cm.sendNextS("(…發生什麼事了？ 力量幾乎全都消失了。 前面的這個東西… 難道就是這個東西吸走我的力量？)", 3);
    } else if (status == 3) {
        cm.sendNextPrevS("這… 我不曾聽說有這種東西！", 5, 2159341);
    } else if (status == 4) {
        cm.sendNextPrevS("這是在做什麼？ 為什麼要做出這種事？ 從你們身上感受到的那股力量… 是黑魔法師的力量？", 3);
    } else if (status == 5) {
        cm.sendNextPrevS("要抓住那小子才可以不被追究責任！", 5, 2159340);
    } else if (status == 6) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/16", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 7) {
        cm.getDirectionEffect(0, "", [366, 0]);
        cm.getDirectionEffect(2, "Skill/3112.img/skill/31121006/effect", [0, 0, 0, 0, 0]);
        cm.environmentChange("demonSlayer/31121006", 5);
        cm.getDirectionEffect(1, "", [900]);
    } else if (status == 8) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/17", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [900]);
    } else if (status == 9) {
        cm.environmentChange("demonSlayer/31121006h", 5);
        cm.setNPCSpecialAction(2159340, "die");
        cm.setNPCSpecialAction(2159341, "die");
        cm.getDirectionEffect(1, "", [900]);
    } else if (status == 10) {
        cm.removeNPCRequestController(2159340);
        cm.removeNPCRequestController(2159341);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/13", [2000, 0, -100, 0, 0]);
        cm.sendNextS("(好驚人的技術… 那個人到底是誰？)", 5, 2159342);
    } else if (status == 11) {
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 12) {
        cm.sendNextS("(嗚… 光是應付那些傢伙就消耗太多力量了… 這裡是什麼地方呢？ 至少不是對我抱持善意的地方。 快點離開這裡吧。)", 3);
    } else if (status == 13) {
        cm.getDirectionEffect(3, "", [2]);
        cm.getDirectionEffect(1, "", [990]);
    } else if (status == 14) {
        cm.getDirectionEffect(3, "", [0]);
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/12", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [990]);
    } else if (status == 15) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", [2000, 0, -100, 1, 1, 0, 0, 2159342]);
        cm.getDirectionEffect(1, "", [1200]);
    } else if (status == 16) {
        cm.sendNextS("(糟糕了。 意識逐漸變模糊了… 若是現在被攻擊就危險了！)", 3);
    } else if (status == 17) {
        cm.sendNextPrevS("等等。 冷靜點， 我並沒有打算和你交手。 你是誰呢？ 為何會在這裡？", 5, 2159342);
    } else if (status == 18) {
        cm.sendNextPrevS("(他身上感覺不到黑魔法師的氣息。)\r\n不要過來…！", 3);
    } else if (status == 19) {
        cm.sendNextPrevS("你都已經站不穩了，為何還說出那種話呢？ 你到底知道黑色翅膀對你做了什麼嗎？ 旁邊的機械是能量傳送裝置… 黑色翅膀奪走你的力量了。", 5, 2159342);
    } else if (status == 20) {
        cm.sendNextPrevS("(能量傳送裝置…？ 你是指這個東西嗎？ 不過，黑色翅膀是什麼呢？ 看來你什麼都不知道… 到底是怎麼回事呢？)", 3);
    } else if (status == 21) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/13", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(1, "", [1500]);
    } else if (status == 22) {
        cm.sendNextS("你是誰？ 怎麼會… 咳咳。 你應該知道這件事嗎？", 3);
    } else if (status == 23) {
        cm.sendNextPrevS("我末日反抗軍的成員 J.  和黑色翅膀是敵對關係。 雖然我不清楚詳細情況，但是我可沒有惡劣到會和一個傷患交手。 不過，你的狀態看起來不太好，我來幫…", 5, 2159342);
    } else if (status == 24) {
        cm.sendNextPrevS("什麼… 力量…  已經… 無法再…", 3);
    } else if (status == 25) {
        cm.getDirectionEffect(0, "", [373, 0]);
        if (cm.getPlayer().getGender() == 0) {
            cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/fallMale", [0, 0, 0, 0, 0]);
        } else {
            cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/fallFemale", [0, 0, 0, 0, 0]);
        }
        cm.getDirectionEffect(1, "", [600]);
    } else if (status == 26) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/13", [2000, 0, -100, 1, 1, 0, 0, 2159342]);
        cm.getDirectionEffect(1, "", [1500]);
    } else {
        cm.removeNPCRequestController(2159342);
        cm.dispose();
        cm.warp(931050030, 0);
    }
}