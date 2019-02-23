var status = -1;

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {//如果你有#b#t05152053##k 使用皇家整容院优惠券
        cm.sendSimple("你好。我是冒险岛活动NPC。6.1儿童节，30分钟内我可以为你做脸部整形手术。怎么样？ 你想让自己的脸变得完美无瑕吗？\r\n#b#L0# 换脸(免费更换)#l");
    } else if (status == 1) {
        cm.sendYesNo("使用皇家整容院优惠券，可以随意更改脸型。但是请别担心，我的手术已经达到了艺术的境界。你真的要使用#b#t05152053##k，变换脸型吗？");
    } else if (status == 2) {
        var face = cm.getPlayerStat("FACE");
        var facetype;
        if (cm.getPlayerStat("GENDER") == 0) {
            facetype = [20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20055, 20056, 20057];
        } else {
            facetype = [21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21053, 21054, 21055];
        }
        for (var i = 0; i < facetype.length; i++) {
            facetype[i] = facetype[i] + face % 1000 - (face % 100);
        }
	    cm.gainItemPeriod(5152053,1,1);
        if (cm.setRandomAvatar(5152053, facetype) == 1) {
            cm.sendOk("好了,你的朋友们一定认不出你了!");
        } else {
            cm.sendOk("必须有皇家整容院优惠券，才能进行手术。");
        }
        cm.safeDispose();
    }
}
