var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getPlayer().getMapId() == 931000011) {
        cm.dispose();
        return;
    }
    if (cm.getInfoQuest(23007).indexOf("vel00=1") == -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
        if (status == 0) {
            cm.sendNext("不许再继续靠近了……！");
        } else if (status == 1) {
            cm.sendNextPrev("你是怎么到这里来的？这里是禁止出入地区……");
        } else if (status == 2) {
            cm.sendNextPrevS("你是谁?!", 2);
        } else if (status == 3) {
            cm.sendNextPrev("我……在这里。看上面。");
        } else if (status == 4) {
            cm.updateInfoQuest(23007, "vel00=1");
            cm.showWZEffect("Effect/Direction4.img/Resistance/ClickVel");
            cm.dispose();
        }
    } else if (cm.getInfoQuest(23007).indexOf("vel00=1") != -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
        if (status == 0) {
            cm.sendNext("我……是#r格里梅尔博士#k的实验体。名字叫#b贝比蒂#k……虽然不知道你是怎么到这里来的，不过请你快点出去!要是被格里梅尔发现的话就完了!");
        } else if (status == 1) {
            cm.sendNextPrevS("实验体？格里梅尔？你到底在说什么啊？这里到底……是什么地方？你为什么在那个里面？", 2);
        } else if (status == 2) {
            cm.sendNextPrev("你不知道格里梅尔？格里梅尔博士……是黑色之翼的疯狂科学家!这里是格里梅尔的实验室。格里梅尔在这里进行人体实验……");
        } else if (status == 3) {
            cm.sendNextPrevS("人体……实验？", 2);
        } else if (status == 4) {
            cm.sendNextPrev("是的，人体实验。要是你也被抓住，说不定会被当作实验材料!快点逃走吧!");
        } else if (status == 5) {
            cm.sendNextPrevS("什么？逃，逃走……？但是你……!", 2);
        } else if (status == 6) {
            cm.updateInfoQuest(23007, "vel00=2");
            cm.warp(931000011, 0);
            cm.dispose();
        }
    } else if (cm.getInfoQuest(23007).indexOf("vel01=1") != -1) {
        if (status == 0) {
            cm.sendNext("呼……格里梅尔好像去做别的事情了……好了，趁这个时候，你快逃走吧。");
        } else if (status == 1) {
            cm.sendNextPrevS("我一个人逃走？那你呢……？", 2);
        } else if (status == 2) {
            cm.sendNextPrev("我不能逃走。格里梅尔博士记得自己所有的实验体……如果有一个不见了，他一定会发现的……你快逃吧。");
        } else if (status == 3) {
            cm.sendNextPrevS("不行!我们一起逃吧!", 2);
        } else if (status == 4) {
            cm.gainExp(60);
            cm.warp(931000013, 0);
            cm.dispose();
        }
    }
}