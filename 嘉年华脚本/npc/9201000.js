var status = -1;
var firstSelection = -1;
var secondSelection = -1;
var ingredients_0 = Array(4011004, 4021007);
var ingredients_1 = Array(4011006, 4021007);
var ingredients_2 = Array(4011007, 4021007);
var ingredients_3 = Array(4021009, 4021007);
var mats = Array();
var mesos = Array(10000000, 20000000, 30000000, 50000000);
var info = Array("月长石戒指是用月亮上掉下来的神秘原石制作而成的，既坚硬又美丽的戒指。",
        "闪耀新星戒指是用从星星上掉落下来的闪耀原石制作而成的美丽戒指。",
        "金心戒指是用代表着永恒的金子制作而成的华丽戒指。",
        "银翼戒指是用代表着纯洁和纯粹的银子制作而成的简单、优雅的戒指。");

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getMarriageId() > 0) {
            cm.sendNext("祝贺你订婚！");
        } else {
            cm.sendSimple("再没有什么东西比戒指更适合宣誓永恒的爱情了，蕴含着真爱的戒指就是世上最美好的东西了。你有心爱的人吗？只要你愿意，我会努力将你的心意转达给对方的。怎么样啊？\r\n#b#L0#制作月长石戒指#l\r\n#L1#制作闪耀新星戒指#l\r\n#L2#制作金心戒指#l\r\n#L3#制作银翼戒指#l#k");//\r\n#L4#求婚遇到问题了.#l
        }
    } else if (status == 1) {
        if (selection > 3) {
            status = 3;
            action(mode, type, selection);
            return;
        }
        firstSelection = selection;
        cm.sendSimple(info[selection] + "那么你要什么品质的戒指呢?\r\n#b#L0#1 克拉#l\r\n#L1#2 克拉#l\r\n#L2#3 克拉#l" + (cm.isGMS() ? "\r\n#L3#4 Karat#l" : "") + "#k");
    } else if (status == 2) {
        secondSelection = selection;
        var prompt = "现在,我需要一些材料来制作它. 且确认你有足够的背包空间!#b";
        switch (firstSelection) {
            case 3:
                mats = ingredients_0;
                break;
            case 2:
                mats = ingredients_1;
                break;
            case 1:
                mats = ingredients_2;
                break;
            case 0:
                mats = ingredients_3;
                break;
            default:
                cm.dispose();
                return;
        }
        for (var i = 0; i < mats.length; i++) {
            prompt += "\r\n#i" + mats[i] + "##t" + mats[i] + "# x 1";
        }
        prompt += "\r\n#i4031138# " + mesos[secondSelection];
        +" meso";
		prompt += "\r\n还需要 点卷:#r1314520#k";
        cm.sendYesNo(prompt);
    } else if (status == 3) {
		if (cm.getPlayer().getCSPoints(1)<1314520){
			cm.sendOk("你好像没有足够的1314520点卷哟!");
			cm.dispose();
			return;
		}
        if (cm.getMeso() < mesos[secondSelection]) {
            cm.sendOk("你好像没有足够的金币哟!");
        } else {
            var complete = true;
            for (var i = 0; i < mats.length; i++) {
                if (!cm.haveItem(mats[i], 1)) {
                    complete = false;
                    break;
                }
            }
            if (!complete) {
                cm.sendOk("没有足够的材料.");
            } else if (!cm.canHold(secondSelection == 3 ? (2240000 + firstSelection) : (2240004 + (firstSelection * 3) + secondSelection), 1)) {
                cm.sendOk("Please make room in USE.");
            } else {
                cm.sendOk("祝你求婚成功，只要有了那个戒指，肯定能成功的。");
                cm.gainMeso(-mesos[secondSelection]);
                for (var i = 0; i < mats.length; i++) {
                    cm.gainItem(mats[i], -1);
                }
				cm.gainNX(1,-1314520);
                cm.gainItem(secondSelection == 3 ? (2240000 + firstSelection) : (2240004 + (firstSelection * 3) + secondSelection), 1);
            }
        }
        cm.dispose();
    } else if (status == 4) {
        var found = false;
        var selStr = "请选择求婚戒指.";
        for (var i = 2240000; i < 2240016; i++) {
            if (cm.haveItem(i)) {
                found = true;
                selStr += "\r\n#L" + i + "##v" + i + "##t" + i + "##l";
            }
        }
        if (!found) {
            cm.sendOk("在你的消耗栏没有发现任何的戒指.");
            cm.dispose();
        } else {
            cm.sendSimple(selStr);
        }
    } else if (status == 5) {
        firstSelection = selection;
        cm.sendGetText("现在请输入你想求婚对象的名字：");
    } else if (status == 6) {
        cm.doRing(cm.getText(), firstSelection);
        cm.dispose();
    }
}
