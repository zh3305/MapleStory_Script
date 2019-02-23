var status = 0;
var typed=0;

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
		else
			status--;
		if (status == 0) {
			cm.sendSimple(" >活动资格：#b120级以上角色\r\n\r\n#k >活动目标：#b<快乐的冒险岛春季运动会>\r\n\r\n#k >活动奖励：#b#v4310030#运动会币：#k" + cm.itemQuantity(4310030) + " #b枚\r\n#b#L1#活动介绍#l #L2#天天运动#l #L10#奖励兑换#l #L16#冒险之心#l\r\n\r\n			  #fUI/UIWindow2.img/UtilDlgEx/list5#\r\n#L6#枫之校园高手#l  #L5#运动币兑换#l\r\n#L12#解锁密码宝箱#l  #L8#中介币换运动币#l \r\n#L11#快乐收集活动#l\r\n#L7#老公老婆戒指必成卷兑换");
		} else if (status == 1) {
			if (selection == 1) {
                    cm.dispose();
			cm.sendYesNo("#b#e冒险岛热运动会\r\n（第一期）#n#b\r\n               春天！万物苏醒的日！\r\n 1，每日领取 2，废弃任务 3，梦碎片兑换 4，枫之校园 5，各种抽奖 6，朵朵理财！\r\n是不是在冬天里有点懒懒的呢？吃的有点多了？胖子也没问题！春风吹，战鼓擂，冒险岛热血运动会拉开序幕咯~！"); 
			}
			if (selection == 2) {
                    	typed=1;
			cm.sendYesNo("你好，#h #！在#b2014年6月4日到2020年6月4日 #k之间将会举行冒险岛春季运动会。那是所有人一起畅想欢乐的节日，每天登陆一次，就可以获得#r运动会币#k 你想现在领取今天的运动会币吗？");
			}
			if (selection == 3) {
                    cm.dispose();
		    cm.openNpc(9000093,3);
			}
			if (selection == 4) {
                    cm.dispose();
		    cm.openNpc(9000093,4);
			}
			if (selection == 5) {
                    cm.dispose();
		    cm.openNpc(9310111);
			}
			if (selection == 6) {
                    cm.dispose();
		    cm.warp(744000000);
			}
			if (selection == 7) {
                    cm.dispose();
		    cm.openNpc(9120033,2);
			}
			if (selection == 9) {
                    cm.dispose();
		    cm.openNpc(9000093,6);
			}
			if (selection == 8) {
                    cm.dispose();
		    cm.openNpc(9072100);
			}
			if (selection == 10) {
                    cm.dispose();
		    cm.openNpc(9000093,7);
			}
			if (selection == 11) {
                    cm.dispose();
		    cm.openNpc(9000093,8);
			}
			if (selection == 12) {
                    cm.dispose();
		    cm.openNpc(9000008);
			}
			if (selection == 13) {
                    cm.dispose();
		    cm.openNpc(2085001);
			}
			if (selection == 14) {
                    cm.dispose();
		    cm.openNpc(2112003,1);
			}
			if (selection == 15) {
                    cm.dispose();
		    cm.openNpc(2094000);
			}
			if (selection == 16) {
                    cm.dispose();
		    cm.openNpc(9000093,9);
			}
		} else if (status == 2) {
			if(typed==1){
                if (cm.getBossLog("天天运动") == 0) {
                    cm.gainItem(4310030,1);
                    cm.setBossLog("天天运动");
		    cm.worldMessage(cm.getChar().getName() + "从天天运动活动中获得运动会币x1。");
                    cm.dispose();
                } else {
                    cm.sendOk("你今天已经领取过。");
                    cm.dispose();
                }
			}
		}
	}
}
