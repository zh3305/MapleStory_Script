var status;
var text;
var taskid = 140001;
var package1 = 2431091; //基础超值礼包礼物箱
var package2 = 2431092; //特殊超值礼包礼物箱
var waitMap = 310030210; // 等待地图
var changeJobMap = 913051200;   // 转职地图
var payurl = "http://www.baidu.com";
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

var package1_list = new Array(
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100)
						);
var package2_list = new Array(
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100),
						Array(2431091, 100)
						);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
        	cm.dispose();
        	return;
        }

        if (cm.getBossLog("新手向导") > 0) {
        	cm.dispose();
        	return;
        }

        if (status == 0 && cm.getBossLog("新手踩蜗牛副本") > 0) {
        	status = 1;
        }

        if (status == 0) {
			var rank = cm.getRanking("踩蜗牛副本").iterator();
			text = head + "- 踩蜗牛副本排行榜 -\r\n\r\n";
			//text += "名次\t玩家名\t\t分数\r\n";
			var i = 1;
			while(rank.hasNext()) {
				var cid = rank.next();
				var light = cid.name == cm.getPlayer().getName();
				text += (light ? "#g" : "第") + i + "名\t" + cid.name + "\t\t" + cid.value + (light ? "分#k\r\n" : "分\r\n");
				i++;
			}
			//cm.setBossLog("新手踩蜗牛副本", true);
			cm.sendNextS(text, 1);
        } else if (status == 1) {
        	/*//text = "恭喜你已经初步成为我们的一员，接下来送你#b#z" + package1 + "##k，祝你游戏愉快！另外仅需充值一元即可获得#r#z" + package2 + "##k。\r\n\r\n#b";
        	text = head + "恭喜你已经初步成为我们的一员，接下来 #e#r你敢充1块钱吗？敢充我就敢送宇宙级大礼包！！！#k#n\r\n\r\n";
        	for (var i = 0; i < 2; i++) {
        		if (i != 1) {
        			text += "#L" + i + "#" + icon + "#r#e接受挑战充值1块钱！#l#n\r\n";
        		} else {
        			text += "#L" + i + "#" + icon + "#b不接受挑战#l\r\n";
        		}
        	}
        	cm.sendSimpleS(text, 1);
        } else if (status == 2) {
    		//cm.gainItem(package1, 1);
    		//cm.gainItem(package2, 1);
        	//cm.setBossLog("新手向导", true);
        	if (selection != 1) {
        		cm.openWeb(payurl);
        		cm.sendNextS("正在跳转充值页面，充值完毕后点击下一步……", 1);
        	} else {
        		cm.sendYesNo("那么是否准备前往转职地图呢？");
        	}*/
			cm.sendYesNo("恭喜你已经初步成为我们的一员,是否准备前往转职地图呢？");
        } else if (status == 2) {
        	cm.warp(waitMap);
			cm.getPlayer().startMapTimeLimitTask(10, cm.getMap(changeJobMap));
        	cm.dispose();
        	/*if (cm.getRMB() > 1) {
        		cm.gainRMB(-1);
        		cm.setBossLog("首充一元礼包", true);
	            cm.worldBrodcastEffect(5121037, "[系统公告] : 玩家[" + cm.getName() + "]领取了1元首充礼包~");
	            cm.worldMessageYellow("[系统公告] : 玩家[" + cm.getName() + "]领取了1元首充礼包~");
        		cm.sendOk(head + "感谢您的慷慨解囊，可以打开背包使用礼包了！现在正在前往转职地图。");
        	} else {
        		cm.sendOk(head + "礼包已发送，请在背包里查收！现在正在前往转职地图。");
        	}*/
        } else {
			cm.sendOk("那你可以点击拍卖进行转职...");
			cm.dispose();
		}
    }
}