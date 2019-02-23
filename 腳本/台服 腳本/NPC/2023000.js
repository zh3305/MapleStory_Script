var status = 0;
var togos = [[220050300, 300000100], [220000000, 211000000], [211040200, 300000100, 211060000], [211000000], [220000000], [240030000]];
var togosName = [["時間通道", "艾靈森林"], ["玩具城", "冰原雪域"], ["冰雪峽谷Ⅱ", "艾靈森林", "獅子王城"], ["冰原雪域"], ["玩具城"], ["龍森林路口"]];
var maps = [220000000, 300000100, 211000000, 211060000, 220050300, 240000000];
var cost = [25000, 55000, 45000, 45000, 35000, 55000];
var location = -1;

function start() {
    for (var i = 0; i < maps.length; i++) {
        if (cm.getMapId() == maps[i]) {
            location = i
            break;
        }
    }
    if (location == -1) {
        cm.sendNext("此地圖還不支援傳送，請向管理員反饋。");
        cm.dispose();
    } else {
        var selects = "";
        for (var i = 0; i < togos[location].length; i++) {
            selects += togosName[location][i];
            if (i != togos[location].length - 1)
                selects += "、";
        }
        cm.sendNext("你您好！不論是多麼危險的地方，只要利用艾納斯大陸危險區域專用超高速計程車，就會將您平安送達！行使的路線是從#m" + cm.getMapId() + "#到#b" + selects + "#k，使用費用為#b" + cost[location] + "楓幣#k，雖然費用稍貴，但可簡單快速地通過危險區域，因此算是物超所值的價格喔！");
    }
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    status++;

    if (status == 1) {
        var selects = "";
        for (var i = 0; i < togos[location].length; i++) {
            selects += "\r\n#L" + i + "#" + togosName[location][i] + "#l";
        }
        cm.sendSimple("#b" + cost[location] + "#k楓幣支付後，想動到到什么地區呢？#b" + selects);
    } else if (status == 2) {
        if (cm.getMeso() < cost[location]) {
            cm.sendNext("你的楓幣好像不够。非常抱歉，不支付楓幣的話，是不能使用計程車的。繼續努力打獵，獲取楓幣好再來吧。");
        } else {
            cm.warp(togos[location][selection]);
            cm.gainMeso(-cost[location]);
        }
        cm.dispose();
    }
}