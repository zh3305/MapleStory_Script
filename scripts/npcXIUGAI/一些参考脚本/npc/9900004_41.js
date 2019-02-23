
var status = 0;

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
		var v = getVIP(cm);
		if(cm.getBossLog("每日签到")>0){
			cm.sendOk("今天您已经签到过了,一天只能签到一次");
			cm.dispose();
			return;
		}
		var cz = 0;
		if(cm.itemQuantity(1012098)>0){
			cz = 1;
		} else {
            		for (var i = -1; i >= -199; i--) {
                		if (cm.getInventory(-1).getItem(i) != null) {//遍历用户使用中的装备
					if (cm.getInventory(-1).getItem(i).getItemId() == 1012098){
						cz = 1;
						break;
					}
				}
			}
		}
		if (cz == 0) {
			//第一次签到，获得：
			//脸饰：枫叶（全属性3000）
			//套装：蓝浴巾（全属性3000）
			//套装：红浴巾（全属性3000）
			//武器：滑雪板（全属性3000）
			//消耗：1小时内经验值2倍
			//其他：VIP1证明书
			//设置：枫树下
			if (cm.getSpace(1)<4||cm.getSpace(2)<1||cm.getSpace(4)<1||cm.getSpace(3)<1){
				cm.sendOk("请在装备栏留4个空格,消耗、其它、设置栏留1个空格");
			} else {
				cm.setBossLog("每日签到");
				cm.gainItem(1012098,1);//枫叶脸部饰品
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1012098){
				cm.setLock(cm.getInventory(1).getItem(i));//锁定
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
				cm.gainItem(1050100,1);//蓝浴巾
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1050100){
				cm.setLock(cm.getInventory(1).getItem(i));//锁定
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
				cm.gainItem(1051098,1);//红浴巾
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1051098){
				cm.setLock(cm.getInventory(1).getItem(i));//锁定
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
				cm.gainItem(1442012,1);//天空雪板
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1442012){
				cm.setLock(cm.getInventory(1).getItem(i));//锁定
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				cm.getInventory(1).getItem(i).watk = 99;
				cm.getInventory(1).getItem(i).matk = 99;
				break;
			}
		}
            }
				cm.gainItem(2450022,1);//1小时经验值2倍
				if (v == 0) cm.gainItem(4031332,1);//VIP1证明书
				cm.gainItem(3010061,1);//枫树下(椅子)
				cm.fakeRelog();//刷新数据
				cm.sendOk("这是您的第一次签到\r\n#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v1012098##z1012098#(全属性3000)#r1#k个" + "\r\n#v1050100##z1050100#(全属性3000)#r1#k个" + "\r\n#v1051098##z1051098#(全属性3000)#r1#k个" + "\r\n#v1442012##z1442012#(全属性3000，攻击力99，魔法力99)#r1#k个" + "\r\n#v2450022##z2450022##r1#k个" + "\r\n#v4031332##z4031332##r1#k个" + "\r\n#v3010061##z3010061##r1#k个");

			}
		} else {
			switch (v) {
			case 0:
			case 1://国庆纪念币+圣杯
				//if (cm.getSpace(1)<4||cm.getSpace(2)<1||cm.getSpace(4)<1||cm.getSpace(3)<1){
				if (cm.getSpace(4)<2){
					cm.sendOk("请在其它栏留2个空格");
					cm.dispose();
					return;
				}
				cm.setBossLog("每日签到");
				cm.gainItem(4000463,1);//国庆纪念币
				cm.gainItem(4031454,1);//圣杯
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r1#k个" + "\r\n#v4031454##z4031454##r1#k个");
				break;
			case 2:
			case 3://国庆纪念币+圣杯+枫叶*20+1小时1.5倍经验增益+1000抵用卷
				if (cm.getSpace(2)<1||cm.getSpace(4)<3){
					cm.sendOk("请在消耗栏留1个空格，其它栏留3个空格");
					cm.dispose();
					return;
				}
				cm.setBossLog("每日签到");
				cm.gainItem(4000463,1);//国庆纪念币
				cm.gainItem(4031454,1);//圣杯
				cm.gainItem(4001126,20);//枫叶*20
				cm.gainItem(02450021,1);//1小时1.5倍经验增益
				cm.gainNX(2,1000);//1000抵用卷
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r1#k个" + "\r\n#v4031454##z4031454##r1#k个" + "\r\n#v4001126##z4001126##r20#k个" + "\r\n#v2450022##z2450021##r1#k个" + "\r\n抵用卷#r1000#k点");
				break;
			case 4:
			case 5://国庆纪念币2+圣杯2+枫叶*50+1小时2倍经验增益+2000抵用卷+20元宝
				if (cm.getSpace(2)<1||cm.getSpace(4)<3){
					cm.sendOk("请在消耗栏留1个空格，其它栏留3个空格");
					cm.dispose();
					return;
				}
				cm.setBossLog("每日签到");
				cm.gainItem(4000463,2);//国庆纪念币*2
				cm.gainItem(4031454,2);//圣杯*2
				cm.gainItem(4001126,50);//枫叶*50
				cm.gainItem(2450022,1);//1小时2倍经验增益
				cm.gainNX(2,2000);//2000抵用卷
				cm.addHyPay(-20);//20元宝
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r2#k个" + "\r\n#v4031454##z4031454##r2#k个" + "\r\n#v4001126##z4001126##r50#k个" + "\r\n#v2450022##z2450022##r1#k个" + "\r\n抵用卷#r2000#k点" + "\r\n元宝#r20#k点");
				break;
			case 6://国庆纪念币3+圣杯3+枫叶*100+1小时3倍经验增益+5000抵用卷+50元宝
				if (cm.getSpace(2)<1||cm.getSpace(4)<3){
					cm.sendOk("请在消耗栏留1个空格，其它栏留3个空格");
					cm.dispose();
					return;
				}
				cm.setBossLog("每日签到");
				cm.gainItem(4000463,3);//国庆纪念币*3
				cm.gainItem(4031454,3);//圣杯*3
				cm.gainItem(4001126,100);//枫叶*100
				cm.gainItem(2450023,1);//1小时3倍经验增益
				cm.gainNX(2,5000);//5000抵用卷
				cm.addHyPay(-50);//50元宝
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r3#k个" + "\r\n#v4031454##z4031454##r3#k个" + "\r\n#v4001126##z4001126##r100#k个" + "\r\n#v2450023##z2450023##r1#k个" + "\r\n抵用卷#r5000#k点" + "\r\n元宝#r50#k点");
				break;
			case 7://国庆纪念币5+圣杯5+枫叶*200+1小时3倍经验增益*2+8000抵用卷+80元宝
				if (cm.getSpace(2)<2||cm.getSpace(4)<3){
					cm.sendOk("请在消耗栏留2个空格，其它栏留3个空格");
					cm.dispose();
					return;
				}
				cm.setBossLog("每日签到");
				cm.gainItem(4000463,5);//国庆纪念币*5
				cm.gainItem(4031454,5);//圣杯*5
				cm.gainItem(4001126,200);//枫叶*200
				cm.gainItem(2450023,2);//1小时3倍经验增益*2
				cm.gainNX(2,8000);//8000抵用卷
				cm.addHyPay(-80);//80元宝
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r5#k个" + "\r\n#v4031454##z4031454##r5#k个" + "\r\n#v4001126##z4001126##r200#k个" + "\r\n#v2450023##z2450023##r2#k个" + "\r\n抵用卷#r8000#k点" + "\r\n元宝#r80#k点");
				break;
			}
		}
		cm.dispose();
    }
}

//获得VIP等级
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
