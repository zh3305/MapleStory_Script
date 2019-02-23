var status = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon1 = "#fEffect/CharacterEff/1042176/0/0#";
var iconHR = "#fEffect/CharacterEff/1082565/0/0#"
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var icon3 = "#fEffect/CharacterEff/1082565/4/0#";
var icon4 = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var giftContent = Array(
  //Array("余额兑换点卷：1余额=1500点",   1, Array(
     //   Array(-1, 1500)
   //)), 
 // Array("余额兑换点卷：10余额=15000点",   10, Array(
     //   Array(-10, 1500)
 //  )), 
  // Array("神秘椅子箱子（50）",   50, Array(
      //     Array(2431256, 1)
   // )), 
  // Array("名片戒指箱子（20）",  20, Array(
   //        Array(2432228, 1)
  //  )),  
    Array("充值大礼包（100）",  100, Array(
	Array(4310014, 88),
	Array(4310036, 1000),
        Array(2049124, 10),           //正向混沌卷轴
        Array(2049701, 2),           //A级潜能卷轴
        Array(2049300, 10),           //高级装备强化卷轴
        Array(2431945, 1),           //女皇防具
        Array(2431944, 1),           //女皇武器
        Array(4001839, 300),           //星星
        Array(-1, 300000)
    )),
    Array("充值大礼包（300）",  300, Array(
	//Array(3994417, 1),
	Array(4310036, 2000),
	Array(4310014, 110),
        Array(2049124, 20),           //正向混沌卷轴
        Array(2049701, 4),           //A级潜能卷轴
        Array(2049300, 20),           //高级装备强化卷轴
        Array(2431988, 1),           //FFN自选防具
        Array(2431944, 1),           //女皇武器
		Array(2431046, 1),           //随机称号椅子
        Array(4001839, 400),           //星星
        Array(-1, 900000)
    )),
    Array("充值大礼包（500）", 500, Array(
	//Array(3994417, 1),
	//Array(3994420, 1),
	Array(1666000, 1),
	Array(1672019, 1),
	Array(4310014, 150),
	Array(4310036, 3000),
        Array(2049124, 30),           //正向混沌卷轴
        Array(2049701, 6),           //A级潜能卷轴
        Array(2049300, 30),           //高级装备强化卷轴
        Array(2431988, 2),           //FFN自选防具
        Array(2431509, 1),           //FFN随机
        Array(5062024, 5),           //闪炫魔方
		Array(5062501, 5),           //[MS特价]潜能变化魔方
		Array(2431046, 3),           //随机称号椅子
		Array(2612061, 2),//X双手武器攻击力卷轴
		Array(2616061, 2),//X防具攻击力卷轴
		Array(2616062, 2),//X防具魔力卷轴
        Array(4001839, 600),           //星星
        Array(-1, 1800000)
    )),
    Array("充值大礼包（1000）", 1000, Array(
	//Array(3994417, 1),
	//Array(3994418, 1),
	//Array(3994419, 1),
	//Array(3994420, 1),
	//Array(3994421, 1),
	//Array(3994422, 1),
	Array(4310014, 200),
	Array(4310036, 6000),
        Array(2049323, 20),           //无损
        Array(2431988, 3),           //FFN自选防具
        Array(2431509, 1),           //FFN自选
		Array(2047818, 5),           //惊人的双手武器攻击力卷轴100%
		Array(2612059, 5),           //惊人的双手武器魔力卷轴100%
		Array(2046996, 5),           //惊人的单手武器攻击力卷轴100%
		Array(2046997, 5),           //惊人的单手武器魔力卷轴100%
        Array(5062024, 10),           //闪炫魔方
		Array(5062501, 10),           //[MS特价]潜能变化魔方
		Array(2431046, 5),           //随机称号椅子
        Array(4001839, 2000),           //星星
        Array(-1, 3000000)
    )),
    Array("充值大礼包（3000）", 3000, Array(
	//Array(3994417, 3),
	//Array(3994418, 3),
	//Array(3994419, 3),
	//Array(3994420, 3),
	//Array(3994421, 3),
	//Array(3994422, 3),
	Array(4310014, 300),
	Array(4310036, 10000),
        Array(2049323, 60),           //无损
        Array(2431988, 6),           //FFN自选防具
        Array(2431509, 2),           //FFN自选
		Array(2432069, 1),           //暴君
		Array(2047818, 15),           //惊人的双手武器攻击力卷轴100%
		Array(2612059, 15),           //惊人的双手武器魔力卷轴100%
		Array(2046996, 15),           //惊人的单手武器攻击力卷轴100%
		Array(2046997, 15),           //惊人的单手武器魔力卷轴100%
        Array(5062024, 30),           //闪炫魔方
		Array(5062501, 30),           //[MS特价]潜能变化魔方
		Array(2431046, 15),           //随机称号椅子
        Array(4001839, 5000),           //星星
        Array(-1, 9000000)
    )),
    Array("充值大礼包（4000）", 4000, Array(
	Array(3994417, 4),
	Array(3994418, 4),
	Array(3994419, 4),
	Array(3994420, 4),
	Array(3994421, 4),
	Array(3994422, 4),
	Array(4310014, 400),
	Array(4310036, 15000),
        Array(2049323, 80),           //无损
        Array(2431988, 6),           //FFN自选防具
        Array(2431509, 2),           //FFN自选
		Array(2432069, 2),           //暴君
		Array(2047818, 20),           //惊人的双手武器攻击力卷轴100%
		Array(2612059, 20),           //惊人的双手武器魔力卷轴100%
		Array(2046996, 20),           //惊人的单手武器攻击力卷轴100%
		Array(2046997, 20),           //惊人的单手武器魔力卷轴100%
        Array(5062024, 50),           //闪炫魔方
		Array(5062501, 50),           //[MS特价]潜能变化魔方
		Array(2431046, 20),           //随机称号椅子
        Array(4001839, 10000),           //星星
        Array(-1, 12000000)
    ))
);
var giftId = -1;
var gifts = null;
var price = 999;
var column = new Array("装备", "消耗", "设置", "其他", "商城");
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
		text = ""+iconHR+"尊敬的玩家#b#h ##k，欢迎来到#b#e充值礼包商城，点击可以查看礼包内容哦！购买礼包前，请确认背包是否有足够的空格。#n#k\r\n";
        //text += "#e#b欢迎来到充值礼包商城，点击可以查看礼包内容哦！\r\n";
		text += ""+icon2+"您当前余额为：#r"+cm.getHyPay(1)+"#k "+"\t\t"+icon2+"累计充值：#r"+cm.getHyPay(3)+"#k\r\n";
        for(var key in giftContent) {
            text+="#b#L"+key+"#购买【#r#e"+giftContent[key][0]+"#n#b】 #e#d需要"+giftContent[key][1]+"余额#n#b#l#k\r\n";
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        giftId = parseInt(selection);
        price = giftContent[giftId][1];
        gifts = giftContent[giftId][2];
        var text="#r#e"+giftContent[giftId][0]+"#n#b内容：\r\n";
        for(var key in gifts) {
            var itemId = gifts[key][0];
            var itemQuantity = gifts[key][1];
            text+="#i"+itemId+":##b" + (itemId == -1 ? "赠送点券" : "#z" + itemId + "#") + "#k #rx "+itemQuantity+"#k\r\n";
        }
        text+="\r\n#d是否花费#e#r"+price+"#n#d余额购买该礼包？#k";
        cm.sendYesNo(text);
    } else if (status == 2) {
        if (giftId!=-1 && gifts != null) {
            var needslot = new Array(0, 0, 0, 0, 0);
            for (var i in gifts) {
                var type = Math.floor(gifts[i][0] / 1000000);
                if (type == -1) {
                    continue;
                }
                needslot[type - 1] = needslot[type - 1] + 1;
            }
            for (var i = 0; i < 5; i++) {
                if (cm.getSpace(i + 1) < needslot[i]) {
                    cm.sendOk("您的" + column[i] + "栏位空间不足" + needslot[i] + "格，请清理后再来。");
                    cm.dispose();
                    return;
                }
            }
            if (cm.getHyPay(1) < price) {
                cm.sendOk("您的余额不足，请先充值后再购买。");
                cm.dispose();
                return ;
            }
            for(var key in gifts) {
                var itemId = gifts[key][0];
                var itemQuantity = gifts[key][1];
                if (itemId == -1) {
                    cm.gainNX(itemQuantity);
                } else {
                    cm.gainItem(itemId, itemQuantity);
                }
            }
            cm.addHyPay(price);
            cm.sendOk("恭喜您，购买成功！");
            cm.dispose();
        } else {
            cm.sendOk("购买错误！请联系管理员！");
            cm.dispose();
        }
    }
}