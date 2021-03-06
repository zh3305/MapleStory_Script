/* 洗装备潜能 */

var status = -1;
var potList = Array(
Array(40603, "攻击BOSS时伤害：+40%", 5000),
Array(40292, "无视怪物40%的防御率", 5000),
Array(42051, "攻击力：+12%", 5000),
Array(60001, "总伤害：+12% (不能修改附加潜能)", 5000),
Array(60002, "所有属性：+20% (不能修改附加潜能)", 5000),
Array(60007, "MaxHP : +10% (不能修改附加潜能)", 5000),
Array(60008, "攻击力/魔力：+10% (不能修改附加潜能)", 5000),
Array(40055, "爆击率 12%", 5000));
var potId = -1; //潜能的ID
var depict = ""; //潜能的描述
var points = -1; //每次的价格
var potline = 1; //修改的潜能是第几条
var oldEquip;
var newEquip;
var count = -1; //定义洗到那个属性的次数
var slot = 1; //定义需要修改的装备在背包的位置
var potline = 1 //定义需要修改的是第几条潜能 [1-3] 为普通 [4-6] 为附加
var Nx = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好!想选择什么样的潜能:\r\n\r\n   #k#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#当前拥有点卷: #r" + cm.getNX(1) + "#k #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#当前拥有抵用卷: #r" + cm.getNX(2) + "#k\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#";
        for (var i = 0; i < potList.length; i++) {
            selStr += "\r\n#L" + i + "##b#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#" + potList[i][1] + "#k  (价格： #r" + potList[i][2] + "#k #k 点卷每次)#l";
        }
        cm.sendSimple(selStr + " \r\n ");
    } else if (status == 1) {
        oldEquip = cm.getEquipBySlot(slot);
        if (oldEquip == null || oldEquip.getState() != 0x14) { //oldEquip.getState() != 0x14 检测装备普通潜能是否 SS
            cm.sendOk("出现错误: \r\n背包栏第1个位置的装备为空 或者 装备的潜能等级不为 SS");
            cm.dispose();
            return; //出现错误直接返回 不执行下面的操作 这个必须注意
        }
        var pot = potList[selection];
        if (pot != null) {
            potId = pot[0];
            depict = pot[1];
            points = pot[2];
            cm.sendYesNo("您是否要将#b装备栏第一格装备\r\n第一条潜能属性(不会改变其它潜能属性)#k一键洗潜能属性为 #b" + depict + "#k？\r\n#b注：本次操作需要扣除5点充值校园币!!!#k");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
	if(cm.getHyPay(1) < 5) {
	    cm.sendOk("你的充值校园币不足5点,请充值!!!");
	    cm.dispose();
	    return;
	} else {
	    if(cm.addHyPay( 5 ) > 0) {
		cm.gainNX(+ 15000);
	        cm.gainNX(- 15000);
	    } else {
		cm.sendOk("出现错误...");
	    }
	}
        if (potId <= 0 || depict == "" || points <= 0) {
            cm.sendOk("购买道具出现错误...");
            cm.dispose();
            return;
        }
       	 count = cm.getRandomPotential(slot, potId);
	 count = Math.floor(Math.random() * 80) + 80;
        if (count > 0) {
	    Nx = points * count;
            cm.sendYesNo("洗出潜能属性为 #b" + depict + "#k 用了 #b" + count + "#k 次 本次保留该属性需要: #r" + Nx + "#k 点卷.是否保留该属性？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 3) {
        newEquip = cm.getEquipBySlot(slot);
        if (oldEquip == newEquip) { //这个地方还需要检测点卷数量
	    if(cm.getPlayer().getCSPoints(1) >= Nx) {
                if (cm.changePotential(slot, potline, potId, true)) { //[装备位置] [潜能位置] [潜能ID] [是否公告]
                    //todo 扣点卷
		    cm.gainNX( - Nx);
                    cm.sendOk("恭喜您成功洗出潜能属性....");
		    cm.getPlayer().saveToDB(false, false);
		    cm.dispose();
		    return;
                } else {
                    cm.sendOk("出现错误...");
		    cm.dispose();
                }
            } else {
		cm.sendYesNo("您的点卷不足是否要使用充值金额?");
	    }
        } else {
            cm.sendOk("出现错误...");
	    cm.dispose();
        }
    } else if (status == 4) {
	if(cm.getHyPay(1) * 3000 >= Nx) {
		var pay = Nx/3000 + ((Nx % 3000 > 0) ? 1 : 0);
		var temp = ((pay * 10 % 10 > 0) ? (pay * 10 % 10) : 0 );
		pay = pay - temp/10;
		if(cm.addHyPay( pay ) > 0) {
		    cm.gainNX( + pay * 3000);
        	    if(cm.getPlayer().getCSPoints(1) >= Nx && cm.changePotential(slot, potline, potId, true)) {
		    	cm.gainNX( - Nx);
           	        cm.sendOk("恭喜您成功洗出潜能属性....");
			cm.getPlayer().saveToDB(false, false);
		        cm.dispose();
		    } else {
                        cm.sendOk("出现错误...");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("兑换出错 请联系管理员");
		    cm.dispose();
		}
	} else {
	    cm.sendYesNo("您的充值金额不足是否要进行充值?");
	}
    } else if (status == 5) {
	cm.openWeb("http://www.libaopay.com/buy/?wid=37438");
	cm.sendYesNo("充值完成请点击是!\r\n退出请点击否");
	status = 3;
    }
}
