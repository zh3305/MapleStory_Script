
var status = 0;

var fsName = Array(
"",
"圣人",
"仙人",
"神王",
"终结者"
)

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var f = getFSdj(cm);
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
	var selStr = "尊敬的" + ((f==0)?"玩家":"#r"+fsName[f]+":#k") + "#r#h ##k您好,请选择您所需要的功能\r\n元宝：#r" + cm.getHyPay(1) + " #k转生次数：#r" + getZScs(cm) + "\r\n#b#L1#立地成圣" + "\r\n#L2#立地成仙" + "\r\n#L3#立地成神" + "\r\n#L4##b变身终结者";
	cm.sendSimple(selStr);
    } else if(status == 1) {
	for (var i = 1;i <= 4;i++){
		if (cm.getSpace(i)<1){
			cm.sendOk("请在装备、消耗、其他、设置栏中各留1个空格");
			cm.dispose();
			return;
		}
	}
	var z = getZScs(cm);
	switch (selection){
	case 1:
		if (f!=0) {
			cm.sendOk("只有凡人才能飞升成圣人");
		} else if (z < 50) {
			cm.sendOk("角色需要达到50转之后才能飞升成圣人");
		} else {
			if (cm.itemQuantity(4032515) >= 50) {
				cm.gainItem(4032515,-50);//删除50个灵魂碎片
			} else {
				cm.gainItem(4032516,-1);//删除1个灵魂容器
				cm.gainItem(4032515,50);//获得50个灵魂碎片
			}
			cm.gainItem(4032517,1);//获得圣人的魂魄
			//奖励
			cm.gainItem(2450022,1);//1小时经验值2倍
			cm.gainNX(2,100000);//10W抵用卷
			setZS(cm);
		}
		break;
	case 2:
		if (f!=1) {
			cm.sendOk("只有圣人才能飞升成仙人");
		} else if (z < 100) {
			cm.sendOk("角色需要达到100转之后才能飞升成仙人");
		} else {
			if (cm.itemQuantity(4032515) >= 50) {
				cm.gainItem(4032515,-50);//删除50个灵魂碎片
			} else {
				cm.gainItem(4032516,-1);//删除1个灵魂容器
				cm.gainItem(4032515,50);//获得50个灵魂碎片
			}
			cm.gainItem(4032517,-1);//删除圣人的魂魄
			cm.gainItem(4032518,1);//获得仙人的魂魄
			//奖励
			cm.gainItem(2450022,1);//1小时经验值2倍
			cm.addHyPay(-2000);//2000元宝
			cm.gainItem(1102368,1);//落英飞天丝带
			setZS(cm);
		}
		break;
	case 3:
		if (f!=2) {
			cm.sendOk("只有仙人才能飞升成神王");
		} else if (z < 200) {
			cm.sendOk("角色需要达到200转之后才能飞升成神王");
		} else {
			cm.gainItem(4032516,-1);//删除1个灵魂容器
			cm.gainItem(4032518,-1);//删除仙人的魂魄
			cm.gainItem(4032519,1);//获得神王的魂魄
			//奖励
			cm.gainItem(2450023,1);//1小时经验值3倍
			cm.addHyPay(-5000);//5000元宝
			cm.gainItem(3010307,1);//品克缤椅子
	    //10000属性点装
	    cm.gainItem(1032024,1);//透明耳环
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1032024){//透明耳环
				cm.setLock(cm.getInventory(1).getItem(i));//锁定
				cm.getInventory(1).getItem(i).str = 10000;
				cm.getInventory(1).getItem(i).dex = 10000;
				cm.getInventory(1).getItem(i).setInt(10000);
				cm.getInventory(1).getItem(i).luk = 10000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
			setZS(cm);
		}
		break;
	case 4:
		if (f!=3) {
			cm.sendOk("只有神王才能飞升成终结者");
		} else if (z < 400) {
			cm.sendOk("角色需要达到400转之后才能飞升成终结者");
		} else {
			cm.gainItem(4032516,-2);//删除2个灵魂容器
			cm.gainItem(4032519,-1);//删除神王的魂魄
			cm.gainItem(4032520,1);//获得终结者的魂魄
			//奖励
			cm.gainItem(2450023,1);//1小时经验值3倍
			cm.addHyPay(-10000);//1w元宝
			cm.gainItem(3010070,1);//巨无霸品克缤椅子
	    //20000属性点装
	    cm.gainItem(1022048,1);//透明眼饰
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1022048){//透明眼饰
				cm.setLock(cm.getInventory(1).getItem(i));//锁定
				cm.getInventory(1).getItem(i).str = 20000;
				cm.getInventory(1).getItem(i).dex = 20000;
				cm.getInventory(1).getItem(i).setInt(20000);
				cm.getInventory(1).getItem(i).luk = 20000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
			setZS(cm);
		}
		break;
	}
	cm.dispose();
    }
}

function setZS(cm){
		var z = getZScs(cm);//转生次数
		var f = getFSdj(cm);//飞升等级
		cm.getPlayer().changeJob(0);//新手职业
		cm.clearSkills();//删除技能
      		cm.getPlayer().level = 2;//等级1
      		cm.getPlayer().exp = 0;//经验值0
		cm.getPlayer().getStat().setInfo(50,50,50,50);
		var ap = 0;
		switch (f){
		case 0:
			ap = z * 100;
			cm.resetStats(4,4,4,4);
			break;
		case 1:
			cm.resetStats(5000,5000,5000,5000);
			ap = z * 20;
			break;
		case 2:
			cm.resetStats(10000,10000,10000,10000);
			ap = z * 40;
			break;
		case 3:
			cm.resetStats(15000,15000,15000,15000);
			ap = z * 60;
			break;
		case 4:
			cm.resetStats(20000,20000,20000,20000);
			ap = z * 80;
			break;
		}
		cm.gainAp(ap-cm.getPlayer().getRemainingAp());
		cm.fakeRelog();//刷新数据
}

//转生次数
function getZScs(cm){
return (cm.itemQuantity(4032515) + cm.itemQuantity(4032516) * 100 + cm.itemQuantity(4032517) * 50 + cm.itemQuantity(4032518) * 100 + cm.itemQuantity(4032519) * 200 + cm.itemQuantity(4032520) * 400);
}

//飞升等级
function getFSdj(cm){
	var f_p = 4032516;
	for (var i = 4;i >= 1;i--){
		if (cm.itemQuantity(f_p + i)!=0) return i;
	}
	return 0;
}
