/*
 Author: Pungin
 */
        var status = -1;
var jobSelect = -1;
function start() {
    if (ms.getJob() != 3001) {
        ms.dispose();
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.getDirectionStatus(true);
        ms.getDirectionInfo(3, 2);
    } else if (status == 1) {
        ms.getDirectionInfo(3, 0);
        ms.sendNextS("#b腦袋一團混亂...", 3);
    } else if (status == 2) {
        ms.sendNextPrevS("#b但是我的力量將近都消失是無法改變的事實。", 3);
    } else if (status == 3) {
        ms.sendNextPrevS("#b哈哈哈。我到底再說什麼?這力量是用在黑魔法師的力量。", 3);
    } else if (status == 4) {
        ms.sendNextPrevS("#b這受到詛咒的力量消失，說不定是在告訴我該往其他路走。", 3);
    } else if (status == 5) {
        ms.sendNextPrevS("#b我竟然在說這種迷信的話，我對自己真是心寒。", 3);
    } else if (status == 6) {
        ms.sendNextPrevS("#b嗯…決定一下該怎樣做 。#h0#。要使用對黑魔法師所使用過的力量，還是朝黑魔法師使用憤怒的力量。", 3);
    } else if (status == 7) {
        ms.getDemonSelection();
    } else if (status == 8) {
        if (jobSelect == -1) {
            jobSelect = selection;
            while (ms.getLevel() < 10) {
                ms.levelUp();
            }
            ms.unequip(1322123, true); //1322123 - 不幸的復仇
            if (jobSelect == 0) {
                ms.changeJob(3101);
                var gender = ms.getPlayerStat("GENDER");
                ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/avenger/" + gender, 2820, -283, -120, 1, 1);
                if (gender == 0) {
                    ms.unequip(1050191, true); //1050191 - 黑暗惡魔套裝
                    ms.unequip(1072518, true); //1072518 - 黑暗惡魔鞋子
                    ms.equip(1050249, -5); //1050249 - 惡魔經典套裝
                    ms.equip(1070029, -7); //1070029 - 惡魔經典鞋
                } else {
                    ms.unequip(1051236, true); //1051236 - 黑暗惡魔套裝
                    ms.unequip(1072518, true); //1072518 - 黑暗惡魔鞋子
                    ms.equip(1051305, -5); //1050249 - 惡魔經典禮服
                    ms.equip(1071046, -7); //1070029 - 惡魔經典長靴
                }
                ms.equip(1102505, -9); //1102505 - 惡魔經典披肩
                //STR 4
                //DEX 4
                ms.gainAp(23); //AVAILABLEAP 23
                ms.addHP(1550); //MAXHP 1744
                //MAXMP 10
                ms.gainSp(2); //AVAILABLESP [2] 
                ms.teachSkill(30010242, 1, 1);
                ms.teachSkill(30010230, 1, 1);
                ms.teachSkill(30010231, 1, 1);
                ms.teachSkill(31011000, 1, 20);
                ms.teachSkill(31011001, 1, 20);
                ms.teachSkill(31010002, 1, 10);
                ms.equip(1232001, -11); //1232001 - 藍色復仇者
                ms.gainItem(1142553, 1); //1142553 - 憤怒的先驅
                if (gender == 0) {
                    ms.setHair(36460); //36460 - 黑色復仇惡魔造型
                    ms.setFace(20284); //20284 - 紅色孤獨的臉型
                } else {
                    ms.setHair(37450); //37450 - 黑色復仇惡魔造型
                    ms.setFace(21280); //20284 - 紅色憂愁的臉型
                }
            } else {
                ms.equip(1322122, -11); //1322122 - 不幸的復仇
                ms.changeJob(3100);
                ms.teachSkill(30010111, 1, 1);
                ms.getDirectionInfo("Effect/BasicEff.img/JobChangedDemon", 0, 0, 0, 0, 0);
            }
            ms.environmentChange("tutoCommon/JobChanged", 5);
        }
        if (jobSelect == 0) {
            ms.sendNextS("#b對黑魔法師憤怒心和憤怒牽引著我。我的身體這樣告訴我!!", 3);
        } else {
            ms.sendNextS("#b為了對黑魔法師復仇的話，要再次使用軍團長時期所使用過的力量!!", 3);
        }
    } else if (status == 9) {
        ms.sendNextPrevS("#b離開之前，打開道具欄，確認消耗欄的物品。按道具欄 #r'I'#b可打開。", 3);
    } else {
        ms.EnableUI(0);
        ms.dispose();
    }
}