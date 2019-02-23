status = -1;
var maps = [500000000, 702000000, 800000000, 600000000, 540000000, 550000000];
var townText = [["#b泰国的水上市场#k是最佳的旅游胜地。水上市场坐落在凉风爽爽的河边。热带雨林和泰国的传统建筑相结合，画出了优美的异国风情。", "尤其引人注目的是，可以坐在小舟里穿越水上市场，形成了一道独特的风景。那好我们出发去自然和传统的胜地 #b泰国的水上市场#k！"], ["#b少林寺#k在中国乃至世界声名远扬。。。学武之人梦寐以求的摇篮。少林功夫天下无敌，拳脚，兵器样样精通。", "多少习武之人跨洋过海讨教武学。。。少林寺坐落在嵩山山顶，耸立在云海之中，美不胜收。。。准备好了吧 #b少林寺#k等着你呢！"], ["#b日本古代神社#k在日本有悠久的历史，朴素勤劳的村民维护着村落的和平。", "等了好久终于可以到日本游览一番别具特色的文化。 #b日本古代神社#k等着你呢！"], ["#b新叶城市#k以欧式风情著名，现代化的建筑群，独特的异国风光。", "与泰国，日本相比具有完全不同的异国风情。 快去#b新叶城#k继续新的旅程吧！"], ["您想游览一下#b新加坡的中心商务区#k吗？", "新加坡空气怡人，人民友善。你可以同时领略城市娱乐及自然美景。如果去了那里，那么最好是周游全国，例如中心商务区、泊船码头及乌鲁城！"], ["你想去#b马来西亚#k做一次欢乐的旅行么？","马来西亚 空气怡人，人民友善。据说还有豪华的主题乐园噢。祝你旅途愉快！"]];
var selectedMap = -1;
var sCost;

function start() {
    action(1,0,0);
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (mode == 0 && status == 4) {
            status -= 3;
        } else {
            cm.dispose();
            return;
        }
    }
    if (cm.getPlayer().getMapId() != 950000000 && cm.getPlayer().getMapId() != 701000000) {
        if (status == 0) {
            cm.sendSimple("还满意冒险游程吗?\r\n#b#L0# 已经游览了，想回到旅游集散中心。#l");
        } else if (status == 1) {
            if (selection == 0) {
                var map = cm.getSavedLocation("WORLDTOUR");
                if (map == undefined)  {
                    map = 950000000;
                }
            cm.clearSavedLocation("WORLDTOUR");
            cm.warp(map, parseInt(Math.random() * 5));
            cm.dispose();
            }
        }
    } else {
        if (status == 0) { 
            var selStr = "为了从繁忙的日常中解脱，去享受一趟旅游怎么样？不仅可以体验新颖的异国文化，还能学到不少东西的机会！我们冒险岛旅游公司为您准备了，丰富有趣的#b世界旅游#k套餐。谁说环游世界很贵？请放一万个心。";
            if (cm.isBeginnerJob()) {
                selStr += "我们特别为新手打折，只要#b300金币#k就能享乐全程。";
            } else {
                selStr += "我们的#b冒险岛世界旅游套餐#k只需要#b3000金币#k就可以享乐全程。";
            }
            cm.sendNext(selStr);
        } else if (status == 1) { 
            cm.sendSimple("现在就可以去往 #b世界各地充满冒险岛特色的景点#k游览一番。在每个旅游地我都会为大家提供满意热诚的服务。那么请准备好，我们出发去\r\n#b#L0# 水上市场（泰国）#l\r\n#L1# 少林寺（中国）#l\r\n#L2# 古代神社（日本）#l\r\n#L3# 新叶城（欧美）#l\r\n#b#L4# 中心商务区（新加坡）#l\r\n#b#L5# 吉隆大都市（马来西亚）#l");
        } else if (status == 2) {
            if (selectedMap == -1) {
                selectedMap = selection;
            }
            townText[selectedMap][status-2] == undefined ? cm.dispose() : cm.sendNext(townText[selectedMap][status-2]);
        } else if (status == 3) {
            townText[selectedMap][status-2] == undefined ? cm.dispose() : cm.sendNextPrev(townText[selectedMap][status-2]);
        } else if (status == 4) {
            sCost = (cm.isBeginnerJob() ? 300 : 3000);
            if (cm.getMeso() < sCost) {
                cm.sendNext("你好象没有足够的金币，这样的话，我不能为你服务。");
                cm.dispose();
                return;
            }
            cm.gainMeso(- sCost);
            cm.saveLocation("WORLDTOUR");
            cm.warp(maps[selectedMap]);
            cm.dispose();
        }
    }
}