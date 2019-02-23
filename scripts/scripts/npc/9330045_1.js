/*
 *			钓鱼场工作人员
 *			垛垛 2015.1.29
 */

var status;
var price1 = 100; //鱼饵价格 (抵用卷)
var price2 = 150; //高级鱼饵价格 (点卷)
var price3 = 1  ;       //高级鱼饵校园币购买
var price_st = -1;
var choose = -1;
var chooses = -1;
var str_name = '';
var num = -1;
var db;
var player;
var bbb = "#fUI/UIWindow.img/Shop/meso#";

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    //player = cm.getPlayer();
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
        var str = "很高兴来到我们的钓鱼场，请问你需要什么服务：\r\n"+getTimeNow()+"\r\n#b"+ bbb +" 钓鱼积分: #r#e"+getJF()+"#n#k #b点#k "+ bbb +" #b校园币点: #r#e" + cm.getHyPay(1) + "#n#k #b点#k\r\n";
        str += "#b"+ bbb +" 点卷: #r#e"+cm.getPlayer().getCSPoints(1)+"#n#k #b张#k "+ bbb +" #b抵用卷: #r#e" + cm.getPlayer().getCSPoints(2) + "#n#k #b张#k\r\n";
        //str += "#L15#购买#z4033507#（永久权）#l\r\n";
        str += "#L0#购买普通钓竿#b[15日权]#k#l\r\n";
		//str += "#L9#购买普通钓竿（永久权）#l\r\n";
        str += "#L1#购买普通鱼饵#k#l #L2#购买高级鱼饵#b[点卷购买]#k#l\r\n";
		str += "#L12#购买高级鱼饵#b[校园币购买]#r[优惠60%]#k\r\n";
        //str += "#L10#购买#z3011000#（永久权坐下后增加1.3倍钓鱼概率）#l\r\n";
		//str += "#L11#购买高级双倍钓鱼卡（永久权）#l\r\n"";
        str += "#L3#使用各种鱼兑换成积分#r（更多积分）#k\r\n#L8#使用#r#z2431690##k兑换稀有物品#l#L55##r#e钓鱼积分比赛获奖名单#n#l\r\n";
		str += "#L7#每月钓鱼排行榜大赛奖励#k#l";
        str += "#L4##k本次比赛积分排名#b#l\r\n";
        //str += "#L5#退出钓鱼场#l\r\n";
        cm.sendSimple(str);
    } else if (status == 1) {
        choose = selection;
        if (selection == 0) {//买鱼竿
            cm.sendYesNo("钓鱼竿的样子是 #v1432039#（15天权） ,使用钓鱼竿（15天权），可以在钓鱼场里钓鱼哦！当然，在高级钓鱼场中，钓鱼竿，专用椅子，双倍钓鱼卡，高级鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 5E/杆（15天权）;");
        }
        if (selection == 9) {
            cm.sendYesNo("钓鱼竿的样子是 #v1432039#（永久权） ,使用钓鱼竿（永久权），可以在钓鱼场里钓鱼哦！当然，在高级钓鱼场中，钓鱼竿，专用椅子，双倍钓鱼卡，高级鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 20000校园币点/杆（永久权）;");
        }
        if (selection == 10) {
            cm.sendYesNo("#z3011000#的样子是 #v3011000# ,#v3011000#，可以在钓鱼场里钓鱼哦！当然，在高级钓鱼场中，钓鱼竿，专用椅子，双倍钓鱼卡，高级鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 30000校园币点/#r#z3011000#（永久权）");
        }
        if (selection == 12) {
            cm.sendGetText("高级鱼饵的样子是 #v2300001# ，鱼类最爱吃的鱼饵，可以大幅度增加收获量。#b每 " + price3 + " 点校园币/ #r50#b 条#k。\r\n您需要多少校园币的鱼饵:#b[注意保留足够的空格，否则无法补偿]");
        }
        if (selection == 11) {
            cm.sendYesNo("高级双倍钓鱼卡的样子是 #v5220002# ,#v5220002#，可以在钓鱼场里钓鱼哦！当然，在高级钓鱼场中，钓鱼竿，专用椅子，双倍钓鱼卡，高级鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 250000校园币点/#r#z5220002#（永久权）");
        }
        if (selection == 15) {
            cm.sendYesNo("#z4033507#的样子是 #v4033507# ,#v4033507#，传言可以在自由市场进行钓鱼！不过由于异地钓鱼，速度可能会慢2倍，当然钓鱼竿，鱼饵也是必要的！\r\n\r\n\r\n你是否需要买？\r\n\r\n价格：#b 50000校园币点/#r#z4033507#（永久权）");
        }
        if (selection == 1) {
            cm.sendGetText("鱼饵的样子是 #v2300000# ，每 #b" + price1 + " 抵用卷/1条#k\r\n您需要(#b请输入条数#k):");
        }
        if (selection == 2) {
            cm.sendGetText("高级鱼饵的样子是 #v2300001# ，鱼类最爱吃的鱼饵，可以大幅度增加收获量。#b每 " + price2 + " 点卷/1条#k。您需要#b[注意保留足够的空格，否则无法补偿]:");
        }
        if (selection == 3) {
            cm.sendNext("该操作是将所有钓到的鱼换成积分,是否继续？");
        }
        if (selection == 4) { //排名
			var m = "#r本月的钓鱼排行榜如下，请大家在月底结束之前，留意自己的排名，以免被人最后反超哦！#k\r\n";
			var getPM = cm.getConnection().prepareStatement("SELECT name,dyjf FROM characters where gm<6 ORDER by dyjf desc LIMIT 20").executeQuery();
			var i = 0;
			while(getPM.next()){
				i++;
				var name = getPM.getString("name");
				var jf = getPM.getInt("dyjf");
				m+= "#e第"+i+"名\t\t#r"+jf+"#k积分\t\t\t#b"+name+"#k#n\r\n";
			}
            cm.sendOkS(m,2);
            cm.dispose();
        }
        if (selection == 5) {
            cm.sendNext("真的要退出钓鱼场吗？");
        }
        if (selection == 6) {
            cm.sendOk("普通钓鱼场概率一般，需要购买普通鱼竿、鱼饵，累积收获钓到的鱼，提交积分参与每月钓鱼大奖，丰富奖励等你来袭！还有稀有的金龙鱼系列兑换，好东西等你发现！");
            cm.dispose();
        }
        if (selection == 7) {
cm.sendOk("#e钓鱼大赛活动：#n\r\n每月进行钓鱼大赛活动，钓鱼前20名将会获得以下大礼哦！\r\n#r[注意：每月底进行清零积分统计,每月1号统计发奖]\r\n#e#rNo.1：\r\n#n#e#b#v3994577#iPodtouch，#v2430453#传说红宝石*5, #v2340000#祝福卷轴*5，#v2432971#夏季限量椅子箱*2#k\n\r\n#e#rNo.2-4：\r\n#n#e#b99999点卷，#v2430453#传说红宝石*3，#v2340000#祝福卷轴*3\r\n\r\n#r#eNo.5-10：\r\n#n#e#b58888点卷，#v2430453#传说红宝石*2，#v2340000#祝福卷轴*2\r\n\r\n#r#eNo.11-20：\r\n#n#e#b9999点卷，#v2430453#传说红宝石*1，#v2340000#祝福卷轴*1\r\n\r\##k#e#v2430453##b传说红宝石#k：双击即可增加武器的突破上限，突破数值范围是#r[#b5W-20W#r]#k不等\r\n#v2432971##b夏季限量椅子箱#k：双击即可开出各种精美稀有的#r[#b椅子#r]#k哦，更有机会获得#r[#b稀有道具#r]#k\r\n#v3994577##g#k#biPodtouch#k：#g#k土豪黑金概念版，开启“#g#e神秘箱子#k”必备的极品#r[#kiPodtouch#r]#k");
            cm.dispose();
        }
        if (selection == 8) {
            //cm.sendNext("暂时维护兑换，敬请期待！");
           cm.dispose();
            cm.openNpc(9310025);
        }
        if (selection == 55) {
            //cm.sendNext("暂时维护兑换，敬请期待！");
           cm.dispose();
            cm.openNpc(9330045,3);
        }
    } else if (status == 2) {
               if (choose == 0) {
            if (cm.getMeso() >= 500000000) {
                cm.gainMeso( - 500000000);
                cm.gainItem(1432039, 1,15);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("冒险币不足或背包空间不足.");
            }
            cm.dispose();
        }
        if (choose == 15) {
            if (cm.getHyPay(1) >= 50000) {
	    cm.addHyPay(50000);
                cm.gainItem(4033507, 1);
               //giveitem(4033507,0,24*1);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("校园币点不足或背包空间不足.");
            }
            cm.dispose();
        }
   if (choose == 10) {
               if (cm.getHyPay(1) >= 30000) {
				cm.addHyPay(30000);
                cm.gainItem(3011000, 1);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("校园币点不足或背包空间不足.");
            }
            cm.dispose();
        }
   if (choose == 12) {
                num = parseInt(cm.getText());
            if (num < 0 || isNaN(num)) {
                cm.sendOk("输入非法.");
                cm.dispose();
            }
            cm.sendYesNo("你输入的是： #b" + num + " #k点 校园币，可以换购到 #b" + (num * 50) + " 条#k #v2300001#\r\n确定要购买吗？#b[注意保留足够的空格，否则无法补偿]");
            }
   if (choose == 11) {
               if (cm.getHyPay(1) >= 250000) {
	    cm.addHyPay(250000);
                cm.gainItem(5220002, 1);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("校园币点不足或背包空间不足.");
            }
            cm.dispose();
        }
  if (choose == 9) {
            if (cm.getHyPay(1) >= 20000) {
	    cm.addHyPay(20000);
                cm.gainItem(1432039, 1);
                //cm.giveitem(1432039,1,12);
                cm.sendOk("成功购买.");
            } else {
                cm.sendOk("校园币点不足或背包空间不足.");
            }
            cm.dispose();
        }
        if (choose == 1) {
            num = parseInt(cm.getText());
            if (num < 0 || isNaN(num)) {
                cm.sendOk("输入非法.");
                cm.dispose();
            }
            cm.sendYesNo("购买 #b" + num + " #k条 #v2300000#鱼饵需要：#b" + (num * price1) + " 抵用卷#k，确定购买吗？");
        }
        if (choose == 2) {
            num = parseInt(cm.getText());
            if (num < 0 || isNaN(num)) {
                cm.sendOk("输入非法.");
                cm.dispose();
            }
            cm.sendYesNo("购买 #b" + num + " #k条 #v2300001#高级鱼饵需要：#b" + (num * price2) + " 点 #k点卷\r\n确定要购买吗？#b[注意保留足够的空格，否则无法补偿]");
        }
        if (choose == 3) {
            price_st = calculate();
            if (price_st) {

                cm.sendYesNo("计算如下：\r\n" + calculate_text() + "\r\n\r\n#k共计：#b " + price_st + "#k 积分,是否兑换?");
            } else {
                cm.sendOk("你还没有一点收获喔.");
                cm.dispose();
            }
        }
        if (choose == 5) {
            cm.warp(910000000, 0);
            cm.dispose();
        }
    } else if (status == 3) {
        if (choose == 1) {
            if (cm.getPlayer().getCSPoints(2) >= num * price1 && cm.canHold(2300000) && cm.getSpace(2) > num/121 && cm.getSpace(2) > num/121) {
                cm.gainNX(2, - num * price1);
                cm.gainItem(2300000, num);
                cm.sendOk("购买成功.");
                cm.dispose();
            } else {
                cm.sendOk("抵用卷不足或背包空间不足。");
                cm.dispose();
            }
        }
        if (choose == 2) {
            if (cm.getPlayer().getCSPoints(1) >= num * price2 && cm.canHold(2300001) && cm.getSpace(2) > num/121 && cm.getSpace(2) > num/121) {
                cm.gainNX( - num * price2);
                cm.gainItem(2300001, num);
                cm.sendOk("购买成功.");
                cm.dispose();
            } else {
                cm.sendOk("点卷不足或背包空间不足。");
                cm.dispose();
            }
        }
        if (choose == 3) {
            addjf(price_st);
            calculate_del();
            cm.sendOk("成功增加积分。");
			cm.playerMessage("[积分兑换]：增加 " + price_st + " 点钓鱼积分。");
            cm.dispose();
        }
		if (choose == 12) {
            if (cm.getHyPay(1) < num || !cm.canHold(2300001) || cm.getSpace(2) < (num * 50) /121) {
				cm.sendOk("校园币点不足或背包空间不足.");
                cm.dispose();
            } else if (cm.addHyPay(num) > 0 ) {
                cm.gainItem(2300001, num * 50);
				cm.playerMessage(- 1,"您消耗了 "+ num +" 点校园币。");
                cm.sendOk("购买成功。");
				cm.worldMessage(0x19, "【鱼饵购买】" + " : " + "玩家 " + cm.getChar().getName() + " 购买了 "+ num * 50 +" 条极品爆率高级鱼饵，钓鱼榜排名雄起。");
                cm.dispose();
            }
        }
    }
}

var fish = [
//能钓上来的鱼，价格
[4031627, 1], [4031628, 1], [4031630, 1], [4031631, 1], [4031633, 1], [4031634, 1], [4031635, 1], [4031636, 1], [4031637, 1], [4031638, 1], [4031639, 1], [4031640, 1], [4031641, 1], [4031642, 2], [4031643, 2], [4031644, 2], [4031645, 3], [4031646, 3], [4031647, 3], [4031648, 4]];
function getTimeNow(){
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('0 5=3.2.4.t();0 7=5.6(3.2.4.e);0 8=5.6(3.2.4.h)+1;0 g=5.6(3.2.4.f);0 9=5.6(3.2.4.l);0 d=5.6(3.2.4.j);0 c=5.6(3.2.4.i);0 a=5.6(3.2.4.s);0 p="u：#b"+7+"v"+8+"r"+9+"n "+d+"m"+c+"o"+a+"q#k";',32,32,'var||util|java|Calendar|ca|get|year|month|day|sec||min|hour|YEAR|DAY_OF_WEEK|weekday|MONTH|MINUTE|HOUR_OF_DAY||DATE|时|日|分|str|秒|月|SECOND|getInstance|目前服务器时间为|年'.split('|'),0,{}));
	return str;
}

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('7 5(){6 5=4.m().k("s g,8 v h A K 8 E C F").y();9 5}7 G(){6 j=D;6 5=4.m().k("s 8 v h u g = ?");5.o(1,4.q());5=5.y();p(5.H()){j=5.L("8")}9 j}7 I(w){6 d=4.m().k("J h B 8 = 8 + ? u g = ?");d.U(1,w);d.o(2,4.q());d.T()}7 V(){6 e=\'\';l(6 i=0;i<3.f;i++){p(4.a(3[i][0])){e+="\\t#b>>#z"+3[i][0]+"# x "+4.a(3[i][0])+",O："+4.a(3[i][0])*3[i][1]+" N.\\r\\n"}}9(e==\'\')?"M.":e}7 P(){l(6 i=0;i<3.f;i++){4.S(3[i][0],-4.a(3[i][0]))}9 R}7 Q(){6 c=0;l(6 i=0;i<3.f;i++){c+=4.a(3[i][0])*3[i][1]}9 c;c}',58,58,'|||fish|cm|getPM|var|function|dyjf|return|itemQuantity||count|add|str|length|name|characters||rs|prepareStatement|for|getConnection||setString|if|getName||SELECT||where|FROM|jf||executeQuery||ORDER|set|LIMIT|999|desc|20|getJF|next|addjf|UPDATE|by|getInt|暂时无|积分|换取|calculate_del|calculate|true|gainItem|executeUpdate|setInt|calculate_text'.split('|'),0,{}))
