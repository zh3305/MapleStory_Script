var status;

function start() {
    status = -1;
    action(1, 0, 0);
}
var check = 10;
function action(mode, type, selection) {

    if (mode == 0) {
        cm.sendNext("请好好享受剩下的婚礼时光吧。");
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }
    var eim = cm.getEventInstance();
    if (eim == null) {
        cm.sendOk("配置出错,请联系管理员。");
        cm.dispose();
        return;
    }

    switch (status) {
        case 0:
            var partyid = parseInt(eim.getProperty("partyID"));
            if (cm.getPartyID() <= 0 || cm.getPartyID() != partyid) {
                cm.sendYesNo("你要离开这里了吗?");
            } else {
                var marr = cm.getQuestRecord(160002);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                check = parseInt(data);
                if (check == 10) {//10 20 30
                    cm.sendYesNo("你们真像是一对儿相亲相爱的蜗牛啊！婚礼结束了，要出去吗？");
                } else if (check >= 20) {//10 20 30
                    cm.sendYesNo("你们真像是一对儿相亲相爱的蜗牛啊！婚礼结束了，是否要进入下一个环节呢？");
                }
            }
            break;
        case 1: //
            if (check == 10) {
                cm.warp(680000500, 0);
            } else if (check >= 20) {//10 20 30
                cm.warpMap(680000300, 0);
            }
            cm.dispose();//这是结束脚本，请按照实际情况使用
            break;
    }
}
