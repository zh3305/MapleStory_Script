/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：等级送礼
 *  @Author Kent 
 */

var status = 0;
var bossid = "等级礼包";
var giftLevel = Array(10, 30, 60, 100, 120, 140, 160, 180, 200, 210, 220, 230, 240, 250);
var giftContent = Array(
        //Array(4032521, 1, 0), //VIP邀请卷
        Array(4001714, 1, 0), //定居金100W
        Array(2431902, 1, 0), //20级武器箱
        Array(2430445, 1, 0), //20级装备箱

        Array(2615002, 5, 1), //低级贝勒德卷轴
        //Array(2431098, 1, 1), //低级贝勒德随机
        //Array(2431097, 1, 1), //伤害皮肤箱子
        Array(5062000, 2, 1), //神奇魔方
        Array(2431906, 1, 1), //40级武器箱
        Array(2430449, 1, 1), //40级装备箱



        Array(5150040, 3, 2), //皇家理发卷
        Array(5152053, 3, 2), //皇家整容卷
        Array(2431741, 1, 2), //抵用券3000
        Array(5062000, 5, 2), //神奇魔方
        Array(2431909, 1, 2),
        Array(2431909, 1, 2), //70级武器箱
        Array(2430452, 1, 2), //70级装备箱

        Array(2430226, 1, 3), //乱斗翅膀
        Array(5062000, 5, 3),
        Array(2049122, 2, 3), //正向
        Array(2049135, 2, 3), //惊人正义20%2340000
        Array(2431741, 1, 3), //抵用券3000
        //Array(4310030, 200, 3), //运动会币
        //Array(4000082, 30, 3), //僵尸金牙
        Array(4021012, 3, 3), //强烈灵魂的净水
        Array(4021011, 3, 3), //春节灵魂的火花
        Array(4021010, 3, 3), //时间之石
        //160级
        Array(2431741, 1, 4), //抵用券3000
        //Array(4310129, 10, 4), //冬季限量硬币
        Array(5062002, 5, 4), //高级魔方
        Array(5064000, 5, 4), //防爆
        Array(2049116, 2, 4), //强化
        //Array(4033356, 5, 4), //正义火种1
        //Array(4000124, 5, 4), //战甲泡泡鱼内存卡
        //Array(4310030, 200, 4), //运动会币
        //Array(4000082, 30, 4), //僵尸金牙
        Array(4021012, 3, 4), //强烈灵魂的净水
        Array(4021011, 3, 4), //春节灵魂的火花
        Array(4021010, 3, 4), //时间之石
        //180级
        Array(2431944, 1, 5), //140级武器箱子
        Array(2431945, 1, 5), //140防具箱子
        Array(2431741, 1, 5), //抵用券3000
        //Array(4310129, 10, 5), //冬季限量硬币
        //Array(4000517, 1, 5), //黄金鱼，提升15%
        Array(4033924, 2, 5), //神话耳环蓝图
        //Array(4033356, 5, 5), //正义火种1
        //Array(4000124, 5, 5), //战甲泡泡鱼内存卡
        //Array(4310030, 300, 5), //运动会币
        //Array(4000082, 40, 5), //僵尸金牙
        Array(4021012, 3, 5), //强烈灵魂的净水
        Array(4021011, 3, 5), //春节灵魂的火花
        Array(4021010, 3, 5), //时间之石
        //200级
        Array(2431945, 1, 6), //140防具箱子
        Array(2431741, 1, 6), //抵用券3000
        Array(4002000, 1, 6), //蜗牛邮票，兑换点卷使用
        Array(5062000, 5, 6),
        Array(5062002, 5, 6),
        Array(5062500, 5, 6),
        Array(2049323, 2, 6), //无损
        Array(2049752, 2, 6), //S 潜能 30%
        Array(2049116, 2, 6), //惊人正义20%2340000
        Array(2049122, 2, 6), //惊人正义20%2340000
        Array(2049135, 2, 6), //惊人正义20%2340000
        //Array(4310030, 300, 6), //运动会币
        //Array(4033356, 5, 6), //正义火种1
        //Array(4000124, 5, 6), //战甲泡泡鱼内存卡
        //Array(4000082, 50, 6), //僵尸金牙
        Array(4021012, 3, 6), //强烈灵魂的净水
        Array(4021011, 3, 6), //春节灵魂的火花
        Array(4021010, 3, 6), //时间之石
        Array(4310015, 1, 6), //斗神证物
        Array(4021019, 1, 6), //梦之石
        Array(2049135, 2, 7), //惊人正义20%2340000
        Array(4002000, 1, 7), //蜗牛邮票，兑换点卷使用
        Array(5062000, 5, 7),
        Array(5062002, 5, 7),
        //Array(5062500, 5, 7),
        //Array(5064000, 2, 7),
        //Array(2431987, 1, 7), //惊人卷轴箱子
        //Array(2431725, 1, 7), //热力四射蜡笔箱子
        //Array(4310036, 3000, 7), //征服者
        //Array(4033356, 10, 7), //正义火种1
        //Array(4000124, 10, 7), //战甲泡泡鱼内存卡
        //Array(4000082, 50, 7), //僵尸金牙
        //Array(4021012, 3, 7), //强烈灵魂的净水
        //Array(4021011, 3, 7), //春节灵魂的火花
        //Array(4021010, 3, 7), //时间之石
        //Array(4310015, 2, 7) //斗神证物
        //5062010 - 终极神奇魔方
        //5062024 - 六角魔方
        //200
        Array(2049122, 5, 8), //正向
        Array(5062500, 5, 8),
        Array(5064000, 2, 8),
        Array(2048723, 5, 8),
        //210
        Array(1113056, 1, 9),
        Array(2048723, 10, 9),
        Array(2049122, 10, 9), //正向
        Array(5062010, 5, 9),
        //220
        Array(1032201, 1, 10),
        Array(2048723, 15, 10),
        Array(2049122, 15, 10), //正向
        Array(2046996, 1, 11),
        Array(2046997, 1, 11),
        Array(2047818, 1, 11),
        Array(2612059, 1, 11),
        Array(5062010, 6, 10),
        //230
        Array(1122259, 1, 11),
        Array(2048723, 20, 11),
        Array(2046996, 2, 11),
        Array(2046997, 2, 11),
        Array(2047818, 2, 11),
        Array(2612059, 2, 11),
        Array(5062010, 20, 11),
        Array(5062024, 20, 11),
        //240
        Array(1012414, 1, 12),
        Array(2048723, 25, 12),
        Array(2049122, 20, 12), //正向
        Array(2046996, 3, 12),
        Array(2046997, 3, 12),
        Array(2047818, 3, 12),
        Array(2612059, 3, 12),
        Array(5062010, 35, 12),
        Array(5062024, 35, 12),
        //250
        Array(1022195, 1, 13),
        Array(1142742, 1, 13),
        Array(2048723, 30, 13),
        Array(2049122, 20, 13), //正向
        Array(2046996, 5, 13),
        Array(2046997, 5, 13),
        Array(2047818, 5, 13),
        Array(2612059, 5, 13),
        Array(5062010, 50, 13),
        Array(5062024, 50, 13)
        /*
         2046996 - 惊人的单手武器攻击力卷轴100%
         2046997 - 惊人的单手武器魔力卷轴100%
         2047818 - 惊人的双手武器攻击力卷轴100%
         2612059 - 惊人的双手武器魔力卷轴100% 
         */
        );
var giftId = -1;
var giftToken = Array();
var gifts = null;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var text = "";
        text += "嘿，我为你准备了许多宝贝，等你达到相应等级的时候就可以领取了，另外点击可以查看礼包内容呢，快抢先看看吧！\r\n";
        for (var key in giftLevel) {
            var tips = "";
            giftToken[key] = false;
            if (cm.getChar().getLevel() >= giftLevel[key]) {
                if (cm.getPQLog(bossid + key, 1) == 0) {
                    tips = "(可领取)";
                    giftToken[key] = true;
                } else {
                    tips = "#g(已领取)#b";
                }
            } else {
                tips = "#r(等级不足)#b";
            }
            text += "#b#L" + (parseInt(key)) + "#领取#r#e" + giftLevel[key] + "#n#b级等级礼包 " + tips + "#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        var text = "#r#e" + giftLevel[giftId] + "#n#b级礼包内容：\r\n";
        gifts = getGift(giftId);
        for (var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text += "#v" + itemId + "##b#t" + itemId + "##k #rx " + itemQuantity + "#k\r\n";
        }
        text += "\r\n#d是否现在就领取该礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId != -1 && gifts != null) {
            if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
                cm.sendOk("您的背包空间不足，请保证每个栏位至少8格的空间，以避免领取失败。");
                cm.dispose();
                return;
            }
            var job = cm.getChar().getJob();
            if ((job == 10000 || job == 10100 || job == 10110 || job == 10111 || job == 10112) && cm.getChar().getLevel() < 140) {
                cm.sendOk("神之子需要到140才能领取！");
                cm.dispose();
                return;
            }
            if (giftToken[giftId] && cm.getPQLog(bossid + key, 1) == 0) {
                cm.setPQLog(bossid + (giftId), 1, 1);
                for (var key in gifts) {
                    var itemId = gifts[key][0];
                    var itemQuantity = gifts[key][1];
                    cm.gainItem(itemId, itemQuantity);
                }
                cm.sendOk("恭喜您，领取成功！快打开包裹看看吧！");
                cm.dispose();
            } else {
                status = -1;
                cm.sendSimple("您已经领过了该礼包或者等级未达到要求，无法领取。");
            }
        } else {
            cm.sendOk("领取错误！请联系管理员！");
            cm.dispose();
        }
    }
}
function getGift(id) {
    var lastGiftContent = Array();
    for (var key in giftContent) {
        if (giftContent[key][2] == id)
            lastGiftContent.push(giftContent[key]);
    }
    return lastGiftContent;
}