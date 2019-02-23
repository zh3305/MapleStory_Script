var status = -1;
var select = -1;
var togo;

function start() {
    if (cm.getMapId() == 251000000) {
        togo = "百草堂";
        cm.sendYesNo("你好？冒险家，旅途愉快吗？没有像我一样的翅膀，是不是有些不方便？最近在帮一些没有翅膀的人直接飞往 #b武陵#k。怎样？有兴趣吗？只需要#b500 金币#k就可以。");
    } else if (cm.getMapId() == 250000100) {
        togo = "武陵";
        cm.sendSimple("你好啊，冒险家！旅行进行得愉快吗？你不像我这样有翅膀，旅途中该很多不便。最近我在帮助那些没有翅膀的人们去往别的地区，你需要帮忙吗？那么选择你要去的地方吧。#b\r\n#L0#天空之城(1500 金币)#l\r\n#L1#百草堂(500 金币)#l");
    } else if (cm.getMapId() == 200000141) {
        togo = "天空之城";
        cm.sendSimple("你好？冒险家，旅途愉快吗？没有像我一样的翅膀，是不是有些不方便？最近在帮一些没有翅膀的人移动。怎样？有兴趣吗？那么选择想去的地方。#b\r\n#L0#武陵(1500 金币)#l");
    } else {
        cm.sendNext("该地图还不支持传送，请向管理员反馈。");
        cm.dispose();
    }
}
function action(mode, type, selection) {
    if (togo == "百草堂") {
        baiCaoTang(mode, type, selection);
    } else if (togo == "武陵") {
        muLung(mode, type, selection);
    } else if (togo == "天空之城") {
        tianKong(mode, type, selection);
    }
}

function baiCaoTang(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == -2) {
        cm.sendNext("改变想法随时跟我搭话吧。");
        cm.dispose();
    } else if (status == 0) {
        if (cm.getMeso() < 500) {
            cm.sendNext("你有足够的金币吗？");
        } else {
            cm.gainMeso(-500);
            cm.warp(250000100, 0);
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function muLung(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == -1) {
        if (select == 1) {
            cm.sendNext("想好了再跟我搭话吧。");
        }
        cm.dispose();
    } else if (status == 0) {
        if (select == -1)
            select = selection;
        if (select == 0) {
            if (cm.getMeso() < 1500) {
                cm.sendNext("你有足够的金币吗？");
            } else {
                cm.gainMeso(-1500);
                cm.warp(200000100, 0);
                //cm.warp(200090310, 1);
            }
            cm.dispose();
        } else if (select == 1) {
            cm.sendYesNo("要向 #b百草堂#k移动吗？只要中途不做出危险的动作消下去，很快就能到达。价钱是#b500 金币#k。");
        }
    } else if (status == 1) {
        if (select == 1) {
            if (cm.getMeso() < 500) {
                cm.sendNext("看来你没有足够的金币。");
            } else {
                cm.gainMeso(-500);
                cm.warp(251000000, 0);
            }
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

function tianKong(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        if (cm.getMeso() < 1500) {
            cm.sendNext("你有足够的金币吗？");
        } else {
            cm.gainMeso(-1500);
            cm.warp(250000100, 1);
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}
