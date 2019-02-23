var status;
var sel;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getPlayerStat("LVL") < 10) {
                cm.playerMessage("没有可以通过次元之镜移动的地方。");
                cm.dispose();
            } else {
                var selStr = "";
                if (cm.getPlayerStat("LVL") >= 10) {
                    selStr += "#801#海外旅游#800#中式结婚";
                }
                //if (cm.getPlayerStat("LVL") >= 25) {
                    //selStr += "#1#武陵道院";
                //}
                if (cm.getPlayerStat("LVL") >= 25 && cm.getPlayerStat("LVL") <= 30) {
                    selStr += "#9#月秒的年糕#10#组队训练场";
                }
                if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayerStat("LVL") <= 50) {
                    selStr += "#2#怪物嘉年华1";
                }
                if (cm.getPlayerStat("LVL") >= 51 && cm.getPlayerStat("LVL") <= 70) {
                    selStr += "#3#怪物嘉年华2";
                }
                if (cm.getPlayerStat("LVL") >= 60 && cm.getPlayerStat("LVL") <= 109) {
                    selStr += "#5#奈特的金字塔";
                }
                if (cm.getPlayerStat("LVL") >= 20) {
                    selStr += "#11#时空裂缝";
                }
                if (cm.getPlayerStat("LVL") >= 70) {
                    selStr += "#12#冰骑士的诅咒#13#女神的痕迹#14#老海盗#15#罗密欧和朱丽叶";
                }
                if (cm.getPlayerStat("LVL") >= 120) {
                    selStr += "#16#侏儒怪皇帝的复活#17#御龙魔";
                }
                if (cm.getPlayerStat("LVL") >= 120) {
                    selStr += "#21#陷入危险的坎特#22#逃脱";
                }
                cm.askMapSelection(selStr);
            }
        } else if (status == 1) {
            //cm.playerMessage("当前选择 " + selection);
            cm.saveReturnLocation("MULUNG_TC");
            switch (selection) {
            case 1:
                cm.warp(925020000, 0); //武陵道场入口
                break;
            case 2:
                cm.warp(980000000, 4); //怪物嘉年华1
                break;
            case 3:
                cm.warp(980030000, 4); //怪物嘉年华2
                break;
            case 4:
                cm.warp(923020000, 0);
                break;
            case 5:
                cm.warp(926010000, 4);
                break;
            case 6:
                cm.warp(910320000, 2);
                break;
            case 7:
                cm.warp(209000000, 0);
                break;
            case 8:
                cm.warp(950100000, 9);
                break;
            case 9:
                cm.warp(910010500, 0); //月秒的年糕
                break;
            case 10:
                cm.warp(910340700, 0); //组队训练场
                break;
            case 11:
                cm.warp(221023300, 0); //时空裂缝
                break;
            case 12:
                cm.warp(300030100, 0); //冰骑士的诅咒
                break;
            case 13:
                cm.warp(200080101, 0); //女神的痕迹
                break;
            case 14:
                cm.warp(251010404, 0); //老海盗
                break;
            case 15:
                cm.warp(261000021, 0); //罗密欧和朱丽叶
                break;
            case 16:
                cm.warp(211000002, 0); //侏儒怪皇帝的复活
                break;
            case 17:
                cm.warp(240080000, 0); //御龙魔
                break;
            case 19:
                cm.warp(229010000, 0);
                break;
            case 21:
                cm.warp(923040000, 0); //陷入危险的坎特
                break;
            case 22:
                cm.warp(921160000, 0); //逃脱
                break;
            case 23:
                cm.warp(932000000, 0);
                break;
            case 98:
                cm.warp(677000010, 0);
                break;
            case 521:
                cm.warp(520000000, 0);
                break;
            case 522:
                cm.warp(610010000, 0);
                break;
            case 523:
                cm.warp(800000000, 0);
                break;
            case 524:
                cm.warp(600000000, 0);
                break;
            case 800:
                cm.warp(700000000, 0); //红鸾宫入口
                break;
            case 801:
                cm.warp(950000000, 0); //旅游集散中心
                break;
            default:
                cm.playerMessage("没有找到当前选择的传送点。");
                cm.clearSavedLocation("MULUNG_TC");
                break;
            }
            cm.dispose();
        }
    }
}