var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        cm.forceCompleteQuest(23204);
        cm.getDirectionStatus(true);
        cm.EnableUI(1);
        cm.DisableUI(true);
        cm.getDirectionEffect(1, "", [10]);
    } else if (status == 1) {
        cm.sendNextS("不是 #h0#這個嗎？ 外出愉快嗎？ 不把命令放在眼中就跑出去，當然會很快樂吧？ 你的家人平安無事嗎？ 替我向他們問候一聲！ 哈哈哈哈！", 5, 2159308);
    } else if (status == 2) {
        cm.sendNextPrevS("…我沒時間和你鬥嘴。 快讓開！#r#p2159309##k!", 3);
    } else if (status == 3) {
        cm.sendNextPrevS("擅自離開崗位，加上不服從命令… 加上那充滿殺氣的眼神… 這樣還想見黑魔法師嗎？ 當然不行呀！", 5, 2159308);
    } else if (status == 4) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/14", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(0, "", [326, 0]);
        cm.environmentChange("demonSlayer/31111003", 5);
        cm.getDirectionEffect(2, "Skill/3111.img/skill/31111003/effect", [0, 0, 0, 0, 0]);
        cm.setNPCSpecialAction(2159309, "teleportation");
        cm.getDirectionEffect(1, "", [570]);
    } else if (status == 5) {
        cm.removeNPCRequestController(2159309);
        cm.getDirectionEffect(1, "", [1200]);
    } else if (status == 6) {
        cm.spawnNPCRequestController(2159309, 180, 50, 1);
        cm.getDirectionEffect(1, "", [360]);
    } else if (status == 7) {
        cm.sendNextS("噢噢~~這樣已經足以視為是背叛的行為。 你還無法捨棄人類的心嗎？ 竟然因為區區的家人而如此墮落，真是令人心寒呀！…", 5, 2159308);
    } else if (status == 8) {
        cm.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/15", [2000, 0, -100, 0, 0]);
        cm.getDirectionEffect(3, "", [1]);
    } else if (status == 9) {
        cm.getDirectionEffect(0, "", [365, 0]);
        cm.environmentChange("demonSlayer/31121001", 5);
        cm.getDirectionEffect(2, "Skill/3112.img/skill/31121001/effect", [0, 324, 71, 1, 1, 0, 0, 0]);
        cm.setNPCSpecialAction(2159309, "teleportation");
        cm.getDirectionEffect(1, "", [570]);
    } else if (status == 10) {
        cm.removeNPCRequestController(2159309);
        cm.getDirectionEffect(1, "", [990]);
    } else if (status == 11) {
        cm.spawnNPCRequestController(2159309, 500, 50);
        cm.sendNextS("像你這種不瞭解那個人真正的目的的愚昧之徒還真是令人失望呀！ 警衛，快來處置那個叛徒！", 5, 2159308);
    } else {
        cm.EnableUI(0);
        cm.topMsg("請擊倒所有的警衛吧！");
        cm.environmentChange("demonSlayer/summonGuard", 5);
        cm.spawnMonster(9300455, 450, 71);
        cm.spawnMonster(9300455, 400, 71);
        cm.spawnMonster(9300455, 350, 71);
        cm.forceStartQuest(23205);
        cm.ShowWZEffect("Effect/Direction6.img/DemonTutorial/Scene4");
        cm.dispose();
    }
}