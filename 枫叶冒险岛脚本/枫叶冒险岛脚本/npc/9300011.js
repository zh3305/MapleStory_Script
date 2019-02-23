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
		cm.sendYesNo("#r开服乐欢天，冲级送豪礼#k，当您等级达到相应级别时，可以分别在我这里领取一份精美的礼包，每个角色只能参与一次\r\n#r(*) 领取前请确保包裹每栏至少5个空位. #k\r\n\r\n#b#L1#领取120级新手大礼包#l\r\n#L3#领取150级冲级大礼包#l#k\r\n#b#L4#领取200级初成大礼包#l#k\r\n#b#L2#领取250级圆满大礼包#l#k");
    } else if (status == 1) {
		switch(selection) {
			case 1:
				if (cm.getLevel() >= 120) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110001) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110001, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110001,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142263, 1),
							Array(1112918, 1, 3)  //回归戒指
							//Array(5062000, 10, 1)
						);
						for(var i=0; i<libaoList.length; i++) {
							if (libaoList[i][2]==null) {
								cm.gainItem(libaoList[i][0], libaoList[i][1]);
							} else {
								cm.gainItem(libaoList[i][0], libaoList[i][1], libaoList[i][2]);
							}
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						
						if (cm.getBossLogAcc("财神礼包120")!=-1){
							text+="#b抵用券#k - #rx10000#k\r\n";
							cm.gainNX(2, 10000);
							cm.setBossLogAcc("财神礼包120",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110001);
						cm.sendOk('恭喜您，您成功获取了120级新人大礼包！礼品如下:\r\n'+text);
						cm.worldSpouseMessage(0x20, "真不可思议，玩家【" + cm.getChar().getName() + "】达到120级，在财神处成功领取了新人大礼包！");
						//cm.worldSpouseMessage(0x20, "『满级大礼包』 : 恭喜 " + cm.getChar().getName() + " 成功在自由市场财神处领取满级大礼包.");
						cm.dispose();
					} else {
						cm.sendOk('您已经领取过礼物了，亲！');
						cm.dispose();
					}
				} else {
					cm.sendOk('您的等级还没有达到要求，继续加油吧！');
					cm.dispose();
				}
			break;
			case 2:
				if (cm.getLevel() >= 250) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110002) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110002, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110002,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142100, 1),
							Array(2049137, 10),
							Array(2431725, 1),
							//Array(2431988,1),
							//Array(3994421,1),
							Array(5062000,150),
							Array(5062002,150),
							Array(5062500,100),
							Array(5062010, 50)
							//Array(4310036, 15000),
							//Array(2049750, 3)
						);
						for(var i=0; i<libaoList.length; i++) {
							cm.gainItem(libaoList[i][0], libaoList[i][1]);
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						
						if (cm.getBossLogAcc("财神礼包250")!=-1){
							text+="#bVIP随身包#k - #r三天权#k\r\n";
							text+="#b点卷#k - #rx15000#k\r\n";
							cm.gainItem(2430865,1,3); //VIP随身包
							cm.gainNX(15000);
							cm.setBossLogAcc("财神礼包250",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110002);
						cm.sendOk('恭喜您，您成功获取了满级大礼包！礼品如下:\r\n'+text);
						cm.worldSpouseMessage(0x20, "真不可思议，玩家【" + cm.getChar().getName() + "】终于突破考验，达到满级，在财神处成功领取了满级大礼包！");
						//cm.worldSpouseMessage(0x20, "『满级大礼包』 : 恭喜 " + cm.getChar().getName() + " 成功在自由市场财神处领取满级大礼包.");
						cm.dispose();
					} else {
						cm.sendOk('您已经领取过礼物了，亲！');
						cm.dispose();
					}
				} else {
					cm.sendOk('您的等级还没有达到要求，继续加油吧！');
					cm.dispose();
				}
			break;
			case 3:
				if (cm.getLevel() >= 150) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110003) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110003, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110003,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142264, 1),
							//Array(1112918, 1, 3),  //回归戒指
							Array(5062000, 10, 1)
							//Array(5062002,10, 1) //高级魔方
						);
						for(var i=0; i<libaoList.length; i++) {
							if (libaoList[i][2]==null) {
								cm.gainItem(libaoList[i][0], libaoList[i][1]);
							} else {
								cm.gainItem(libaoList[i][0], libaoList[i][1], libaoList[i][2]);
							}
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						
						if (cm.getBossLogAcc("财神礼包150")!=-1){
							text+="#b点券#k - #rx1000#k\r\n";
							cm.gainNX(1, 1000);
							cm.setBossLogAcc("财神礼包150",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110003);
						cm.sendOk('恭喜您，您成功获取了满级大礼包！礼品如下:\r\n'+text);
						cm.worldSpouseMessage(0x20, "真不可思议，玩家【" + cm.getChar().getName() + "】以惊人的速度达到150级，在财神处成功领取了冲级大礼包！");
						//cm.worldSpouseMessage(0x20, "『满级大礼包』 : 恭喜 " + cm.getChar().getName() + " 成功在自由市场财神处领取满级大礼包.");
						cm.dispose();
					} else {
						cm.sendOk('您已经领取过礼物了，亲！');
						cm.dispose();
					}
				} else {
					cm.sendOk('您的等级还没有达到要求，继续加油吧！');
					cm.dispose();
				}
			break;
			case 4:
				if (cm.getLevel() >= 200) {
					if (cm.MissionGetFinish(cm.getPlayer().getId(), 1110004) < 1) {
						if (cm.MissionStatus(cm.getPlayer().getId(), 1110004, 0, 4) == false) {
							cm.MissionMake(cm.getPlayer().getId(), 1110004,  0, 0, 0, 0);
						}
						var text = "";
						var libaoList = Array(
							Array(1142265, 1),  //惊人正义卷
							//Array(2431988,1),  //
							//Array(3994421,1),
							Array(5062000,10) //神奇魔方
							//Array(5062002,10), //高级魔方
							//Array(5062500,20) //大师魔方
							//Array(5062010, 5) //终极魔方
							//Array(4310036, 3000),
							//Array(2049750, 1)
						);
						for(var i=0; i<libaoList.length; i++) {
							cm.gainItem(libaoList[i][0], libaoList[i][1]);
							text+="#b#t"+libaoList[i][0]+"##k - #rx"+libaoList[i][1]+"#k\r\n";
						}
						//text+="#bVIP随身包#k - #r三天权#k\r\n";
						
						if (cm.getBossLogAcc("财神礼包200")!=-1){
							text+="#b点券#k - #rx1000#k\r\n";
							//cm.gainItem(2430865,1,3); //VIP随身包
							cm.gainNX(1, 1000);
							cm.setBossLogAcc("财神礼包200",-2);
						}
						cm.MissionFinish(cm.getPlayer().getId(), 1110004);
						cm.sendOk('恭喜您，您成功获取了满级大礼包！礼品如下:\r\n'+text);
						cm.worldSpouseMessage(0x20, "真不可思议，玩家【" + cm.getChar().getName() + "】以惊人的速度达到200级，在财神处成功领取了冲级大礼包！");
						//cm.worldSpouseMessage(0x20, "『满级大礼包』 : 恭喜 " + cm.getChar().getName() + " 成功在自由市场财神处领取满级大礼包.");
						cm.dispose();
					} else {
						cm.sendOk('您已经领取过礼物了，亲！');
						cm.dispose();
					}
				} else {
					cm.sendOk('您的等级还没有达到要求，继续加油吧！');
					cm.dispose();
				}
			break;
			default:
				cm.sendOk("What's wrong with you?");
		}
		cm.dispose();
	}
}