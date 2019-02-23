//笔心

var status;

var prizeIdScroll = Array(2040502, 2040505, 2040802, 2040002, 2040402, 2040602);//卷轴
var prizeIdUse = Array(2000001, 2000002, 2000003, 2000006, 2000004, 2022000, 2022003);//药水
var prizeQtyUse = Array(80, 80, 80, 50, 5, 15, 15);//药水的对应个数
var prizeIdEquip = Array(1032004, 1032005, 1032009, 1032006, 1032007, 1032010);//装备获取					
var prizeIdEtc = Array(4010000, 4010001, 4010002, 4010003);//其他道具获取
var prizeQtyEtc = Array(1, 1, 1, 1);//其他道具的对应数量

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNext("我一直在等你！你终于来到了这里！请收下我的礼物！");
    } else if (status == 1) {
        getPrize();
        cm.dispose();
    }
}






function getPrize() {
    var itemSetSel = Math.random();
    var itemSet;
    var itemSetQty;
    var hasQty = false;
    if (itemSetSel < 0.3)
        itemSet = prizeIdScroll;
    else if (itemSetSel < 0.6)
        itemSet = prizeIdEquip;
    else if (itemSetSel < 0.9) {
        itemSet = prizeIdUse;
        itemSetQty = prizeQtyUse;
        hasQty = true;
    } else {
        itemSet = prizeIdEtc;
        itemSetQty = prizeQtyEtc;
        hasQty = true;
    }
    var sel = Math.floor(Math.random() * itemSet.length);
    var qty = 1;
    if (hasQty)
        qty = itemSetQty[sel];
    if (cm.canHold(itemSet[sel])) { // 检查背包空间
        cm.gainItem(itemSet[sel], qty);
        cm.warp(910000000);
    } else {
        cm.sendNext("请检查你的装备栏、消耗栏、其它栏是否有一个栏目以上的空格。");
    }
}
