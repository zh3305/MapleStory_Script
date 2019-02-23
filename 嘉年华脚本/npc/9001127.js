/*
 *			钓鱼场工作人员
 *
 */


var fff3 = "#fUI/Basic/BtHide3/mouseOver/0#";
 
var mChar = function(client) {

    this.db = cm.getConnection();
    //获取积分
    this.getFishIntegral = function(player) {
        var ps = this.db.prepareStatement("SELECT dyjf FROM `characters` WHERE `id` = ?");
        ps.setInt(1, player.getId());
        var rs = ps.executeQuery();
        var key = 0;
        if (!rs.next()) return false;
        key = rs.getInt(1);
        rs.close();
        ps.close();
        return (key == '' || key == null) ? 0 : key;
    }
    //增加积分
    this.updateFishIntegral = function(numbers, player) {
        if (this.getFishIntegral(player) == false) {
            //原来无积分
            var ps = this.db.prepareStatement("UPDATE `characters` SET dyjf = ? WHERE `id` = ?");
            ps.setInt(1, 0);
            ps.setInt(2, player.getId());
            ps.executeUpdate();
            ps.close();
        }
        var ps = this.db.prepareStatement("UPDATE `characters` SET dyjf = ? WHERE `id` = ?");
        ps.setInt(1, numbers + this.getFishIntegral(player));
        ps.setInt(2, player.getId());
        ps.executeUpdate();
        ps.close();
        return;
    };
    this.get_Ranks = function(numbers, player) {
        var ps = this.db.prepareStatement("SELECT `name`,`dyjf`  FROM characters ORDER BY dyjf DESC LIMIT 0,30");
        var rs = ps.executeQuery();
        var result = "钓鱼排行榜前 #r#e" + numbers + " #n#k 名玩家:\r\n\r\n";
        var i = 1;
        while (rs.next() && i <= numbers) {
            result += "#b第 " + i + " 名：" + rs.getString(1) + "\t\t\t积分：" + rs.getString(2) + ".";
            result += "\r\n";
            i++;
        }
        if (!i) {
            result += "\r\n#b抱歉，暂时无玩家排行.";
        }
        rs.close();
        ps.close();
        return result;
    };
    //debug
    this.debug = function(str) {
        org.slf4j.LoggerFactory.getLogger(this).info(str);
    };
};

//importPackage(net.sf.odinms.server);
//importPackage(java.util);
//importPackage(net.sf.odinms.client);
var status;
var price1 = 4 * 50000; //鱼饵价格 (冒险币)
var price2 = 200; //高级鱼饵价格 (元宝)
var price_st = -1;
var choose = -1;
var chooses = -1;
var str_name = '';
var num = -1;
var db;
var player;
function start() {
    status = -1;
    db = new mChar(cm.getC());
    action(1, 0, 0);
}

function action(mode, type, selection) {
    player = cm.getC().getPlayer();
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
    }
    if (status == 0) {
        var str = db.getFishIntegral(player)+"#r#b" + fff3 + "钓鱼能获得什么？#l#k\r\n" ;
        str += "#r#L6#钓鱼能获得什么？#b#l\r\n";
        //str += "#L9#购买钓竿(500000／冒险币)#l\r\n";
	str += "#L15##r#b" + fff3 + "购买高级钓竿#l#k       #L100##r【领取上月排名奖励】#l#k\r\n";//
		if(cm.getChar().getMapId() == 741000201){
		//	str += "#L10#购买双倍爆率卡(1天_1W金币)#l\r\n";
		//	str += "#L11#购买双倍爆率卡(永久_20W金币)#l\r\n";
		}
		if(cm.getChar().getMapId() == 741000202){
		//	str += "#L12#购买双倍爆率频道票(1天_1W金币)#l\r\n";
		//	str += "#L13#购买双倍爆率频道票(永久_20W金币)#l\r\n";
		//	str += "#L14#购买高级鱼竿(1天_2W金币)#l\r\n";
		//	str += "#L15#购买高级鱼竿(永久_25W金币)#l\r\n";
		}
        str += "#L1##b" + fff3 + "购买鱼饵（买时注意自己包袱能装下不）#l#k\r\n";
        str += "#L2##r" + fff3 + "购买高级鱼饵#d（高级鱼饵5倍概率获得好东西！）#n#l#k\r\n";
        str += "#L3##r" + fff3 + "【使用各种鱼兑换成积分】#l#k\r\n#b#L8#" + fff3 + "使用#r#z2431690##b兑换稀有物品#l#k\r\n";
        str += "#L7##b" + fff3 + "【每月钓鱼排行榜大赛奖励】#k\r\n";
        str += "#L4##b" + fff3 + "本次比赛积分排名#b#l\r\n";
       // str += "#L888##r智能领取上个月钓鱼奖励#b#l\r\n";
        //str += "#L5#退出钓鱼场#l\r\n";
        cm.sendSimple(str);
    } else if (status == 1) {
        choose = selection;
        if (selection == 0) { //买鱼竿
            cm.sendYesNo("钓鱼竿的样子是 #v5340000# ,使用钓鱼竿，可以在钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 5W/杆/1天;");
        }
		if (selection == 9) { //买鱼竿
            cm.sendYesNo("钓鱼竿的样子是 #v5340000# ,使用钓鱼竿，可以在钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b50W冒险币/杆/永久;");
        }
		if (selection == 10) { //买双倍爆率卡
            cm.sendYesNo("双倍爆率卡的样子是 #v5360015# ,使用双倍爆率卡，可以在高级钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 1W金币/张/1天;");
        }
		if (selection == 11) { //买双倍爆率卡
            cm.sendYesNo("双倍爆率卡的样子是 #v5360015# ,使用双倍爆率卡，可以在高级钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 20W金币/张/永久;");
        }
		if (selection == 12) { //买双倍爆率频道票
            cm.sendYesNo("双倍爆率频道票的样子是 #v4110002# ,使用双倍爆率频道票，可以在极速钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 1W金币/张/1天;");
        }
		if (selection == 13) { //买双倍爆率频道票
            cm.sendYesNo("双倍爆率频道票的样子是 #v4110002# ,使用双倍爆率频道票，可以在极速钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 20W金币/张/永久;");
        }
		if (selection == 14) { //买高级鱼竿
            cm.sendYesNo("高级鱼竿的样子是 #v5340001# ,使用高级鱼竿，可以在极速钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 2W金币/杆/1天;");
        }
		if (selection == 15) { //买高级鱼竿
            cm.sendYesNo("高级鱼竿的样子是 #v5340001# ,使用高级鱼竿，可以在极速钓鱼场里钓鱼哦！当然，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 15W点卷/杆/永久;");
        }
        if (selection == 1) {
            cm.sendGetNumber("鱼饵的样子是 #v2300000# ,每 #b" + price1 + "/金币1条#k您需要(#b请输入条数#k):",1,1,9999);
        }
        if (selection == 2) {
            cm.sendGetNumber("高级鱼饵的样子是 #v2300001# ,鱼类最爱吃的鱼饵，可以大幅度增加收获量.\r\n 每 " + price2 + "点卷/1条.\r\n您需要(#b请输入条数#k):",1,1,9999);
        }
        if (selection == 3) {
            cm.sendNext("该操作是将所有钓到的鱼换成积分,是否继续？");
        }
        if (selection == 4) { //排名
            cm.sendOkS(db.get_Ranks(30, player), 2);
            cm.dispose();
        }
        if (selection == 5) {
            cm.sendNext("真的要退出钓鱼场吗？");
        }
        if (selection == 6) {
            cm.sendNext("钓鱼可以获得的东西：各种稀有椅子、各种必成卷轴、绝版玩具、魔方、更多好东西即将加入.");
            cm.dispose();
        }
        if (selection == 7) {
            cm.sendNext("#e钓鱼大赛活动：#n每月进行钓鱼大赛活动，钓鱼前10名将会获得以下大礼哦！\r\n#r[注意：每月底进行清零积分统计,每月1号统计发奖]\r\n#b第1名奖励：#v1142610#×1、80000点卷、80000抵用、8个#v2430608#超级卷轴箱、5个#v2430612#超级椅子箱。\r\n\r\n第2名-4名奖励：#v1142146#×1、50000点卷、50000抵用、3个#v2430608#超级卷轴箱、2个#v2430612#超级椅子箱。\r\n\r\n第5名-10名奖励：#v1142146#×1、20000点卷、20000抵用、1个#v2430608#超级卷轴箱、1个#v2430612#超级椅子箱。\r\n\r\n");
            cm.dispose();
        }
        if (selection == 888) {
            cm.dispose();
            cm.openNpc(9330110,1);
        }
        if (selection == 8) {
            cm.dispose();
            cm.openNpc(9330110);
        }
        if (selection == 100) {
            cm.dispose();
            cm.openNpc(9330109,1);
        }
    } else if (status == 2) {
        if (choose == 0) {//普通鱼竿 1天
            if (cm.getMeso() >= 50000 && cm.canHold(5340000)) {
                cm.gainMeso( - 50000);
                cm.gainItem(5340000,1,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("冒险币不足.");
            }
            cm.dispose();
        }
		if (choose == 9) {//普通鱼竿 永久
            if (cm.getMeso() >= 500000 && cm.canHold(5340000)) {
                //cm.addHyPay(500000,true);
                cm.gainMeso( - 500000);
                cm.gainItem(5340000,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("冒险币不足.");
            }
            cm.dispose();
        }
		if (choose == 10) {//双倍爆率卡 1天
            if (cm.getHyPay(1) >= 10000 && cm.canHold(5360015)) {
                cm.addHyPay(10000,true);
                cm.gainItem(5360015,1,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("你的金币不足1W.");
            }
            cm.dispose();
        }
		if (choose == 11) {//双倍爆率卡 永久
            if (cm.getHyPay(1) >= 200000 && cm.canHold(5360015)) {
                cm.addHyPay(200000,true);
                cm.gainItem(5360015,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("你的金币不足20W.");
            }
            cm.dispose();
        }
		if (choose == 12) {//双倍爆率频道票 1天
            if (cm.getHyPay(1) >= 10000 && cm.canHold(4110002)) {
                cm.addHyPay(10000,true);
                cm.gainItem(4110002,1,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("你的金币不足1W.");
            }
            cm.dispose();
        }
		if (choose == 13) {//双倍爆率频道票 永久
            if (cm.getHyPay(1) > 200000 && cm.canHold(4110002)) {
                cm.addHyPay(200000,true);
                cm.gainItem(4110002,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("你的金币不足20W.");
            }
            cm.dispose();
        }
		if (choose == 14) {//高级鱼竿 1天
            if (cm.getNX(1) > 50000 && cm.canHold(5340001)) {
                cm.getPlayer().modifyCSPoints(1, 50000, true);
                cm.gainItem(5340001,1,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("你的点券不足1W.");
            }
            cm.dispose();
        }
		if (choose == 15) {//高级鱼竿 永久
            if (cm.getPlayer().getCSPoints(1) > 150000 && cm.canHold(5340001)) {
                //cm.getPlayer().modifyCSPoints(1, 1000000, true);
                cm.gainNX(1, -150000);
                cm.gainItem(5340001,1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("你的点券不足15W.");
            }
            cm.dispose();
        }
        if (choose == 1) {
            num = selection;
            Space = cm.getSpace(2);
            if (num <= 0 || isNaN(num)) {
                cm.sendOk("输入非法,您至少购买1条鱼饵.");
                cm.dispose();
                return;
            }
            if (Space <= (num - (num % 120)) / 120 + (num % 120 > 0) ? 1 : 0) {
                var NeedSpace = (num - (num % 120)) / 120;
                NeedSpace += (num % 120 > 0) ? 1 : 0;
                NeedSpace -= Space;
                cm.sendOk("您的消耗栏目的格子不够,请检查后在购买\r\n总共需要" + NeedSpace + "个格子...");
                cm.dispose();
                return;
            }
            cm.sendYesNo("购买 #b" + num + " #k条 鱼饵需要：#b" + (num * price1) + " 冒险币.您确定购买吗？");
        }
        if (choose == 2) {
            num = selection;
            Space = cm.getSpace(2);
            if (num <= 0 || isNaN(num)) {
                cm.sendOk("输入非法,您至少购买1条鱼饵.");
                cm.dispose();
                return;
            }
            if (Space <= (num - (num % 120)) / 120 + (num % 120 > 0) ? 1 : 0) {
                var NeedSpace = (num - (num % 120)) / 120;
                NeedSpace += (num % 120 > 0) ? 1 : 0;
                NeedSpace -= Space;
                cm.sendOk("您的消耗栏目的格子不够,请检查后在购买\r\n总共需要" + NeedSpace + "个格子...");
                cm.dispose();
                return;
            }
            cm.sendYesNo("购买 #b" + num + " #k条 高级鱼饵需要：#b" + (num * price2) + " 点卷.您确定购买吗？");
        }
        if (choose == 3) {
            price_st = calculate();
            if (price_st) {

                cm.sendYesNo("计算如下：\r\n" + calculate_text() + "\r\n\r\n#k共计：#b " + price_st + "#k 积分,是否兑换?");
            } else {
                cm.sendOk("你还没有一点产品喔.");
                cm.dispose();
            }
        }
        if (choose == 5) {
            cm.warp(910000000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        if (choose == 1) {
            if (cm.getMeso() >= num * price1 && cm.canHold(2300000)) {
                cm.gainMeso( - num * price1);
                cm.gainItem(2300000, num);
                cm.sendOk("购买成功.");
                cm.dispose();
            } else {
                cm.sendOk("冒险币不足或背包空间不足.");
                cm.dispose();
            }
        }
        if (choose == 2) {
            if (cm.getPlayer().getCSPoints(1) >= num * price2 && cm.canHold(2300001)) {
		cm.gainNX(1,  - num * price2);
                cm.gainItem(2300001, num);
                cm.sendOk("购买成功.");
                cm.dispose();
            } else {
                cm.sendOk("金币不足或背包空间不足.");
                cm.dispose();
            }
        }
        if (choose == 3) {
            db.updateFishIntegral(price_st, player);
            calculate_del();
            cm.sendOk("成功增加积分.");
            cm.dispose();
        }
    }
}

var fish = [
//能钓上来的鱼，价格
[4031627, 1], [4031628, 1], [4031630, 1], [4031631, 1], [4031633, 1], [4031634, 1], [4031635, 1], [4031636, 1], [4031637, 1], [4031638, 1], [4031639, 1], [4031640, 1], [4031641, 1], [4031642, 2], [4031643, 2], [4031644, 2], [4031645, 2], [4031646, 2], [4031647, 2], [4031648, 2]];

function calculate_text() {
    var str = '';
    for (var i = 0; i < fish.length; i++) {
        if (cm.itemQuantity(fish[i][0])) {
            str += "\t#b>>#z" + fish[i][0] + "# x " + cm.itemQuantity(fish[i][0]) + ",换取：" + cm.itemQuantity(fish[i][0]) * fish[i][1] + " 积分.\r\n";
        }
    }
    return (str == '') ? "暂时无.": str;
}
function calculate_del() {
    for (var i = 0; i < fish.length; i++) {
        cm.gainItem(fish[i][0], -cm.itemQuantity(fish[i][0]));
    }
    return true;
}
function calculate() {
    var count = 0;

    for (var i = 0; i < fish.length; i++) {
        count += cm.itemQuantity(fish[i][0]) * fish[i][1];
    }
    return count;
}
