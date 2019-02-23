var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
					Array(5062000, 900),//神奇魔方，3毛
					Array(5062002, 1800),//高级神奇魔方，6毛
					Array(5062009, 2100),//超级神奇魔方，7毛
					Array(5062500, 2400),//大师附加神奇魔方，8毛
					//Array(5062001, 1500),//混沌神奇魔方
					//Array(5062010, 2400),//终极神奇魔方
					Array(5064000, 3000),//防爆卷轴
					Array(2340000, 3000),//保护卷轴
					Array(5064003, 6000),//极真防暴	
					Array(5050000, 1500),//洗能力点
					Array(2501000, 3000),//AP初始化
					Array(2500000, 3000),//SP初始化
					Array(5220040, 200),//冒险岛转蛋券	
					Array(5062400, 30000),//神奇铁砧
					Array(4021016, 3000),//最高级
					Array(5067000, 1500),//潜能锁
					//Array(5110000, 1280),//红心巧克力
                    Array(5380000, 1880),//进化石
					Array(5570000, 3000),//金锤子70%
					Array(5050001, 3000),//1转
					Array(5050002, 3000),//2转
					Array(5050003, 5000),//3转
					Array(5050004, 5000),//4转
					Array(5156000, 3600),//变性秘药
					Array(4033999, 9000),//神之子
					Array(2048300, 2700),//银光潜能附加印章交换券	
					Array(2048301, 3000),//金光潜能附加印章交换券	
					Array(5520001, 5000),//白金宿命剪刀
					Array(5520000, 3500),//宿命剪刀
					Array(5121032, 50),//火红玫瑰
					Array(5150040, 980),//皇家美发
					Array(5152053, 980),//皇家整容
					Array(5151036, 980),//万能高级染发卡	
                    Array(5150052, 980),//万能高级美发卡
					Array(5152057, 980),//万能高级整形卡	
					Array(5249000, 300),//万能宠物食物	
					
					Array(5062800, 3000),//洗荣誉
					Array(5072000, 3000),
					Array(5073000, 3000),
					Array(5074000, 3000),
					Array(5076000, 3000),
					Array(5390000, 3000),
					Array(5390001, 3000),
					Array(5390002, 3000),
					Array(5390003, 3000),
					Array(5390004, 3000),
					Array(5390005, 3000),
					Array(5390006, 30000),
					Array(5390007, 30000),
					Array(5390008, 30000),
					Array(5079001, 3000),
					Array(5079002, 3000),
					Array(5390010, 30000),
					Array(5390018, 30000),
					Array(5080001, 6000)//告白
					);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = "亲爱的 #r#h ##k 您好，请点击图片购买物品：\r\n#b";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "##i" + itemlist[i] + ":# ";
				if (i != 0 && (i+1) % 5 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
            cm.sendGetNumber("请输入你请你输入想要购买的数量\r\n\r\n#r1个需要" + itemlist[selects][1] + "点卷", 1, 0, 999999);
        } else if (a == 2) {
            buynum = selection;
            cm.sendNext("你想购买" + buynum + "个#r#i" + itemlist[selects][0] + "##k？\r\n你将使用掉" + (buynum * itemlist[selects][1]) + "点卷。");
        } else if (a == 3) {
            if (cm.getChar().getCSPoints(1) >= buynum * itemlist[selects][1]) {
                cm.getChar().modifyCSPoints(1, -buynum * itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], buynum);
  				cm.worldSpouseMessage(0x20,"[点卷商城] ：" + "玩家 " + cm.getChar().getName() + " 用点卷购买了道具魔方,离超神更近了一步！");             
				cm.sendOk("购买成功了！");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的点卷。");
                cm.dispose();
            }
        }
    }//mode
}//f