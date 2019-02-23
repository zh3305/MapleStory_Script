var typed = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	var em = cm.getEventManager("Zkld");
	if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (status==0) {
		if (em.getProperty("state")=="1") {
			cm.sendYesNo("怎么了？你想现在就出去吗？现在出去会扣除次数，但不会扣除雪花币。");
			typed=1;
		} else if (em.getProperty("state")=="2") {
			cm.sendYesNo("天啦，你真的击败了克劳德，作为报答我将会送你一些好东西，#b神奇魔方x5、高级神奇魔方x1、大师附加神奇魔方x2、以及#e#r法弗纳武器箱子兑换币#nx1#k，并且你还有几率直接获得#r稀有椅子、极真系列装备、法弗纳武器#k\r\n\r\n#r（*）请确保您的包裹有足够的空间");//征服币x100
			typed=2;
		}
	} else if (status == 1) {
		if (typed==1) {
			cm.warp(910000000);
			cm.dispose();
		} else if (typed==2) {
			if (cm.getSpace(5)<5 || cm.getSpace(3)<5 || cm.getSpace(2)<5 ) {
				cm.sendOk("您的包裹满了，请保证您的包裹消耗、其他、特殊栏有至少5格的空位");
				cm.dispose();
				return;
			}
			if (cm.haveItem(4032521, 1) || cm.getPlayer().getCSPoints(1)>=5000) {
				cm.gainItem(5062000, 5);
				cm.gainItem(5062002, 1);
				cm.gainItem(5062500, 2);
			//	cm.gainItem(4310036, 100);
				cm.gainItem(4310003, 1);
				cm.gainItem(2430051, 1);
				if (!cm.haveItem(4032521)) {
					cm.gainNX(-5000);
				} else {
					cm.gainItem(4032521, -1)
				}
				var gainExp;
				if (cm.getLevel()<=200) {
					gainExp = Math.floor(cm.getPlayer().getExpNeededForLevel()*0.8);
				} else if(cm.getLevel()>200 && cm.getLevel() <=220){
					gainExp = Math.floor(cm.getPlayer().getExpNeededForLevel()*0.5);
				} else if(cm.getLevel()>220 && cm.getLevel() <=250){
					gainExp = Math.floor(cm.getPlayer().getExpNeededForLevel()*0.1);
				}
				var expNum;
				var lastExp;
				if (gainExp>=2147483647) {
						//计算分成几次
						expNum = Math.floor((gainExp / 2147483647));
						//计算余数
						lastExp = Math.floor((gainExp % 2147483647));
						//根据计算次数多次给予经验
						for(var i = 0; i<expNum; i++) {
							cm.gainExp(2147483647);
						}
						//给予余数经验
						cm.gainExp(lastExp);
					} else {
						cm.gainExp(gainExp);
					}
					cm.warp(910000000);
					cm.worldSpouseMessage(0x15, "[系统公告] : 恭喜玩家【" + cm.getChar().getName() + "】战胜了克劳德，得到丰厚的奖励！");
					cm.sendOk("送了你一个#b被封印的箱子#k，快打开看看吧。");
			} else {
				cm.warp(910000000);
				cm.sendOk("你没有5000点券或VIP邀请函，什么都没得到。");
			}
			cm.dispose();
		}
	}
}