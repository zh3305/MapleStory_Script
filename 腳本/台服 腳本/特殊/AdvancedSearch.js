var status, str, select, list;

function start() {
    status = -1;
    str = "";
    select = -1;
    str += "================#e高級檢索工具#n================";
    str += "\r\n#L1#道具#l";
    str += "\r\n#L2#NPC#l";
    str += "\r\n#L3#地圖#l";
    str += "\r\n#L4#怪物#l";
    str += "\r\n#L5#任務#l";
    str += "\r\n#L6#技能#l";
    str += "\r\n#L7#職業#l";
    str += "\r\n#L8#伺服器包頭#l";
    str += "\r\n#L9#用戶端包頭#l";
    str += "\r\n#L10#髮型#l";
    str += "\r\n#L11#臉型#l";
//    str += "\r\n#L12#膚色#l";
    cm.sendSimple(str);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
        return;
    }
    switch (status) {
        case 0:
            str = selection;
            cm.sendGetText("請輸入需要檢索的訊息:");
            break;
        case 1:
            switch (str) {
                case 10:
                case 11:
                case 12:
                    list = cm.getSearchData(str, cm.getText());
                    if (list == null) {
                        cm.sendOk("搜尋不到訊息");
                        cm.dispose();
                        return;
                    }
                    cm.sendStyle("", list);
                    break;
                default:
                    cm.sendOk(cm.searchData(str, cm.getText()));
            }
            break;
        case 2:
            if (!cm.foundData(str, cm.getText())) {
                cm.dispose();
                return;
            }
            if (select == -1) {
                select = selection;
            }
            switch (str) {
                case 1:
                    if (select < 1000000) {
                        if (select / 10000 == 2) {
                            cm.setFace(select);
                        } else if (select / 10000 == 3) {
                            cm.setHair(select);
                        }
                        cm.dispose();
                    } else if (select < 2000000) {
                        if (cm.canHold(select)) {
                            cm.gainItem(select, 1);
                        }
                        cm.dispose();
                    } else if (select >= 5000000 && select < 5010000) {
                        cm.sendGetNumber("選中的寵物為#i" + select + ":# #z" + select + "#\r\n請輸入生命時間(天):", 1, 1, 92);
                    } else {
                        cm.sendGetNumber("選中的道具為#i" + select + ":# #z" + select + "#\r\n請輸入製作數量:", 1, 1, 92);
                    }
                    break;
                case 2:
                    cm.dispose();
                    cm.playerMessage(5, "打開NPC,ID:" + select);
                    cm.openNpc(select);
                    break;
                case 3:
                    cm.playerMessage(5, "傳送到地圖,ID:" + select);
                    cm.warp(select, 0);
                    cm.dispose();
                    break;
                case 4:
                    cm.sendGetNumber("選中的怪物為#o" + select + "#\r\n請輸入召喚數量:", 1, 1, 100);
                    break;
                case 5:
                    cm.sendSimple("選中的任務ID為" + select + "\r\n請選擇需要執行的操作:\r\n#L0#開始任務#l\r\n#L1#完成任務#l");
                    break;
                case 6:
                    cm.sendGetNumber("選中的技能ID為" + select + "\r\n請輸入使用等級:", 1, 1, 30);
                    break;
                case 7:
                    cm.playerMessage(5, "轉職,職業代碼:" + select);
                    cm.changeJob(select);
                    cm.dispose();
                    break;
                case 8:
                case 9:
                    cm.dispose();
                    break;
                case 10:
                    cm.playerMessage(5, "更變髮型, 髮型代碼:" + list[select]);
                    cm.setHair(list[select]);
                    cm.dispose();
                    break;
                case 11:
                    cm.playerMessage(5, "更變臉型, 臉型代碼:" + list[select]);
                    cm.setFace(list[select]);
                    cm.dispose();
                    break;
                case 12:
                    cm.playerMessage(5, "更變膚色, 膚色代碼:" + list[select]);
                    cm.setSkin(list[select]);
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
            }
            break;
        case 3:
            switch (str) {
                case 1:
                    if (select < 2000000) {
                        if (cm.canHold(select)) {
                            cm.gainItem(select, 1);
                        }
                    } else if (select >= 5000000 && select < 5010000) {
                        if (cm.canHold(select)) {
                            cm.gainItem(select, 1, selection);
                        }
                    } else {
                        for (var i = 0; i < selection; i++) {
                            if (cm.canHold(select)) {
                                cm.gainItem(select, 1);
                            }
                        }
                    }
                    cm.dispose();
                    break;
                case 4:
                    cm.spawnMonster(select, selection);
                    cm.dispose();
                    break;
                case 5:
                    cm.dispose();
                    switch (selection) {
                        case 0:
                            cm.startQuest(select);
                            break;
                        case 1:
                            cm.completeQuest(select);
                            break;
                    }
                    break;
                case 6:
                    cm.useSkill(select, selection);
                    cm.dispose();
                    break;
                default:
                    cm.dispose();
            }
        default:
            cm.dispose();
    }
}