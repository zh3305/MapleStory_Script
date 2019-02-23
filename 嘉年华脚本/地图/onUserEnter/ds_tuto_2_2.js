/*
 Author: Pungin
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        status--;
    } else {
        status++;
    }

    if (status == 0) {
        ms.spawnNPCRequestController(2159309, 500, 50);
        ms.setNPCSpecialAction(2159309, "summon");
        ms.getDirectionStatus(true);
        ms.EnableUI(1);
        ms.DisableUI(true);
        ms.getDirectionInfo(1, 30);
        ms.getDirectionStatus(true);
    } else if (status == 1) {
        ms.sendNextS("鏋滅劧鎿佹湁鐩哥暥浜嗗緱鐨勫鍔涒�� 閫欎笉鏄ソ姗熸渻鍡庯紵 鎴戞棭灏辨兂瑕佷竴杓冮珮涓嬶紝鐪嬬湅瑾版槸鏈�寮风殑杌嶅湗闀枫�� 濂戒簡锛屽氨渚嗙湅鐪嬩綘鐨勫姏閲忓挤鍛紵閭勬槸鎴戠殑榄旀硶寮凤紵", 5, 2159308);
    } else if (status == 2) {
        ms.topMsg("璜嬮�ｇ簩鎸変笅鎺у埗閸碉紝闃绘搵闃垮崱浼婅静鐨勬敾鎿婁笖閫茶鍙嶆搳銆�");
        ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/guide1/0", 5010, 150, -300, 0, 0);
        ms.setNPCSpecialAction(2159309, "alert");
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/arkyrimAttack", 0, 0, -7, 1, 1, 0, 0, 5406110);
        ms.getDirectionInfo(1, 2010);
    } else if (status == 3) {
        ms.environmentChange("demonSlayer/arkAttack0", 5);
        ms.getDirectionEffect(4, "17#17#17#", 4, 2, 3000, 0, 0, 0, 0, 0);
    } else if (status == 4) {
        ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/9", 5010, 150, -300, 0, 0);
        ms.getDirectionInfo(0, 370, 0);
        ms.getDirectionEffect(2, "Skill/3112.img/skill/31121000/effect", 0, 323, 83, 1, 1, 0, 0, 0);
        ms.environmentChange("demonSlayer/31121000", 5);
        ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/9", 2000, 0, -100, 0, 0);
        ms.getDirectionInfo(1, 900);
    } else if (status == 5) {
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/4", 1000, 0, -150, 1, 1, 0, 0, 5406110);
        ms.environmentChange("demonSlayer/31121000h", 5);
        ms.setNPCSpecialAction(2159309, "teleportation");
        ms.getDirectionInfo(1, 570);
    } else if (status == 6) {
        ms.removeNPCRequestController(2159309);
        ms.spawnNPCRequestController(2159309, 108, 50, 1);
        ms.setNPCSpecialAction(2159309, "summon");
        ms.getDirectionInfo(1, 1000);
    } else if (status == 7) {
        ms.sendNextS("鏋滅劧寰堟湁涓�濂椻�� 鐪熸槸鏈夎叮銆� 鍝堝搱鍝堝搱锛�", 5, 2159308);
    } else if (status == 8) {
        ms.setNPCSpecialAction(2159309, "resolve");
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg1/10", 2000, 0, -150, 1, 1, 0, 0, 5406917);
        ms.getDirectionInfo(1, 1500);
    } else if (status == 9) {
        ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/11", 2000, 0, -100, 0, 0);
        ms.getDirectionInfo(1, 1500);
    } else if (status == 10) {
        ms.getDirectionEffect(2, "Skill/3112.img/skill/31121005/effect", 0, 323, 71, 1, 1, 1, 1, 0);
        ms.getDirectionEffect(2, "Skill/3112.img/skill/31121005/effect0", 0, 323, 71, 1, 1, -1, 1, 0);
        ms.environmentChange("demonSlayer/31121005", 5);
        ms.getDirectionInfo(0, 364, 0);
        ms.getDirectionInfo(1, 1980);
    } else if (status == 11) {
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/gateOpen/0", 2100, 918, -195, 1, 1, 0, 0, 0);//?
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/gateLight/0", 2100, 926, -390, 1, 1, 0, 0, 0);//?
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/gateStair/0", 2100, 879, 30, 1, 1, 1, 0, 0);//?
        ms.environmentChange("demonSlayer/openGate", 5);
        ms.getDirectionInfo(1, 1950);
    } else if (status == 12) {
        ms.forceStartQuest(23203);
        ms.getDirectionEffect(2, "Effect/Direction6.img/effect/tuto/balloonMsg0/0", 2000, 0, -150, 1, 1, 0, 0, 5406917);//?
        ms.getDirectionInfo(1, 1200);
    } else if (status == 13) {
        ms.sendNextS("鈥﹀櫌锛岄粦榄旀硶甯Κ鑷締杩庢帴浣犱簡銆� 闆栫劧寰堝彲鎯滐紝灏卞埌姝ょ偤姝㈠惂锛� 閭ｉ杭锛屾垜寰楀幓瑕嬭閭ｄ簺琚ū鐐鸿嫳闆勭殑浜洪暦浠�楹兼ǎ瀛愩��", 5, 2159308);
    } else if (status == 14) {
        ms.sendNextPrevS("宸茬稉涓嶆渻鍐嶈闈簡锛� #h0# 閫欐槸浣犵殑姒垢銆� 鍥犵偤鍙互姝诲湪閭ｅ�嬩汉鐨勬墜涓紒 鍝堝搱鍝堝搱锛�", 5, 2159308);
    } else if (status == 15) {
        ms.setNPCSpecialAction(2159309, "teleportation");
        ms.getDirectionInfo(1, 570);
    } else if (status == 16) {
        ms.removeNPCRequestController(2159309);
        ms.getDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg2/2", 2000, 0, -100, 0, 0);
        ms.getDirectionInfo(3, 2);
    } else if (status == 17) {
        ms.environmentChange("demonSlayer/whiteOut", 13);
        ms.getDirectionInfo(1, 1950);
    } else {
        ms.forceCompleteQuest(23203);
        ms.getDirectionStatus(true);
        ms.dispose();
        ms.warp(931050300, 0);
    }
}


