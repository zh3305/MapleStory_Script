/*
	名字: 		阿尔雷哥
	地图: 		婚礼村
	描述: 		戒指制作商人
*/

var status = -1;
var itemList = Array(
Array(2240004, 1000000, 1112300, "月长石戒指是用月亮上掉下来的神秘原石制作而成的，既坚硬又美丽的戒指。"), //月长石戒指
Array(2240007, 1000000, 1112303, "闪耀新星戒指是用从星星上掉落下来的闪耀原石制作而成的美丽戒指。"), //闪耀新星戒指
Array(2240010, 1000000, 1112306, "金心戒指是用代表着永恒的金子制作而成的华丽戒指。"), //金心戒指
Array(2240013, 1000000, 1112309, "银翼戒指是用代表着纯洁和纯粹的银子制作而成的简单、优雅的戒指。"), //银翼戒指
Array(2240005, 3000000, 1112301, "月长石戒指是用月亮上掉下来的神秘原石制作而成的，既坚硬又美丽的戒指。"), //月长石戒指2克拉
Array(2240008, 3000000, 1112304, "闪耀新星戒指是用从星星上掉落下来的闪耀原石制作而成的美丽戒指。"), //闪耀新星戒指2克拉
Array(2240011, 3000000, 1112307, "金心戒指是用代表着永恒的金子制作而成的华丽戒指。"), //金心戒指2克拉
Array(2240014, 3000000, 1112310, "银翼戒指是用代表着纯洁和纯粹的银子制作而成的简单、优雅的戒指。"), //银翼戒指2克拉
Array(2240006, 6000000, 1112302, "月长石戒指是用月亮上掉下来的神秘原石制作而成的，既坚硬又美丽的戒指。"), //月长石戒指3克拉
Array(2240009, 6000000, 1112305, "闪耀新星戒指是用从星星上掉落下来的闪耀原石制作而成的美丽戒指。"), //闪耀新星戒指3克拉
Array(2240012, 6000000, 1112308, "金心戒指是用代表着永恒的金子制作而成的华丽戒指。"), //金心戒指3克拉
Array(2240015, 6000000, 1112311, "银翼戒指是用代表着纯洁和纯粹的银子制作而成的简单、优雅的戒指。") //银翼戒指3克拉
);
var selectedItem = -1;
var selectedCost = -1;
var firstSelection = -1;

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        if (status == 2) {
            cm.sendNext("你可以再考虑考虑，慢慢想清楚吧。");
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("再没有什么东西比戒指更适合宣誓永恒的爱情了，蕴含着真爱的戒指就是世上最美好的东西了。你有心爱的人吗？只要你愿意，我会努力将你的心意转达给对方的。怎么样啊？\r\n#L0##b我想购买订婚戒指。#l\r\n#L2#我想退还订婚戒指。#l\r\n#L1#是吗…不过我还没有心爱的人啊。#l");
    } else if (status == 1) {
        firstSelection = selection;
        if (selection == 0) { //我想购买订婚戒指
            if (cm.getPlayer().getMarriageId() > 0) {
                cm.sendNext("你好像已经结婚了嘛…");
                cm.dispose();
            } else if (!canBuyItem()) {
                cm.sendNext("你好像已经有了求婚戒指啊，如果想买别的求婚戒指，就请先丢掉现在的那个求婚戒指吧。我也可以替你买回来。");
                cm.dispose();
            } else {
                var prompt = "我出售的戒指总有" + itemList.length + "种。你想要买哪种戒指啊？挑一个她喜欢的戒指吧。\r\n#b";
                for (var i = 0; i < itemList.length; i++) {
                    prompt += "\r\n#L" + i + "##i" + itemList[i][0] + ":##t" + itemList[i][0] + "##l";
                }
                prompt += "#k";
                cm.sendSimple(prompt);
            }
        } else if (selection == 1) { //是吗…不过我还没有心爱的人啊
            cm.sendNext("你总有一天会遇到心爱的人的，到那时候再来找我吧。");
            cm.dispose();
        } else if (selection == 2) { //我想退还订婚戒指
            var selStr = "是的，我是可以回购客人不需要的求婚戒指。不过一想起这些求婚戒指都没用了…心里总会有一股凄凉的感觉。\r\n#b";
            var found = false;
            for (var i = 0; i < itemList.length; i++) {
                if (cm.haveItem(itemList[i][0])) {
                    found = true;
                    selStr += "\r\n#L" + i + "##t" + itemList[i][0] + "##l";
                }
            }
            if (!found) {
                cm.sendNext("你好像没有可以退给我的戒指啊，不是吗？");
                cm.dispose();
            } else {
                cm.sendSimple(selStr);
            }
        }
    } else if (status == 2) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            if (firstSelection == 0) { //购买订婚戒指列表选择
                cm.sendYesNo(item[3] + "它的价格是#b" + selectedCost / 10000 + "万金币#k。现在就要购买吗？");
            } else { //退还订婚戒指
                cm.sendGetNumber("你想卖几个#t" + selectedItem + "#？", 1, 1, cm.getItemQuantity(selectedItem));
            }
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 3) {
        if (firstSelection == 0) { //购买订婚戒指列表选择
            if (selectedItem <= 0 || selectedCost <= 0) {
                cm.sendOk("购买订婚戒指出现错误...");
            } else if (cm.getMeso() < selectedCost || !cm.canHold(selectedItem)) {
                cm.sendNext("请确认消耗栏是否有1格以上空间，还有背包中是否有足够的金币。");
            } else if (!canBuyItem()) {
                cm.sendNext("你好像已经有了求婚戒指啊，如果想买别的求婚戒指，就请先丢掉现在的那个求婚戒指吧。我也可以替你买回来。");
            } else {
                cm.gainMeso( - selectedCost);
                cm.gainItem(selectedItem, 1);
                cm.sendNext("祝你求婚成功，只要有了那个戒指，肯定能成功的。");
            }
        } else { //退还订婚戒指
            if (selectedItem <= 0) {
                cm.sendOk("出现错误...");
            } else if (selection <= 0) {
                cm.sendOk("输入的退还订婚戒指数量错误...");
            } else if (cm.haveItem(selectedItem, selection)) {
                cm.gainItem(selectedItem, -selection);
                cm.sendOk("好，戒指我会回收的。不过因为这个戒指已经失去了它原先的意义，所以很遗憾，我不能给你补偿。");
            }
        }
        cm.dispose();
    }
}

function canBuyItem() {
    var complete = true;
    for (var i = 0; i < itemList.length; i++) {
        if (cm.haveItem(itemList[i][0])) {
            complete = false;
            break;
        }
    }
    return complete;
}