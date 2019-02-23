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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.")
            cm.dispose();
        } 
    else if (status == 0) {

      if (cm.getMapId() == 272020200) {

           cm.sendSimple("#b打败阿卡伊勒的勇士，我向你表示敬意！#k\r\n感谢你把我唤醒，等下我送你一些#r小礼物并送你离开这里#k.#d\r\n\r\n#L0#这是我们的义务!#l"); 

      } else {
          cm.sendOk("你好！我是时间女神伦娜！"); 
          cm.dispose();
         }
     

    } else if (status == 1) {
        switch (selection) {
        case 0:
         if (cm.getSpace(4) < 3) {
            cm.sendOk("打败阿卡伊勒的勇士，你背包的“其它”空间没有3个空间以上,请清理下背包.");
            cm.dispose();
       } else {
            cm.dispose();
            cm.warp(272020110);
            cm.gainItem(4021010, 1);
            cm.gainItem(4021020, 1);
            cm.gainItem(4020009, 5);
            cm.worldMessage("<时间女神>伦娜 ：错乱的时空，到底是否会平复...但愿不会波及到那被永恒封印的时空... ");
            cm.sendOk("\r\n(#b 错乱的时空，要尽快将它平复...但愿不会波及到那被永恒封印的时空... #k)"); 
     }
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2144020, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2144020, 3);
            break;

        case 3:
            cm.removeNpc(272020200, 2144020);
            cm.sendOk("成功.........");
            cm.dispose();
            break;
        case 4:
            cm.spawnNpc(2144016, 9, -270);
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9030000);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("充值网站.\r\n本服充值比例为1:3000.\r\n更多活动详情请见官网.\r\n如果有什么问题请咨询管理员.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("已经将你传送到活动地图.请向上跳寻找到管管!有丰富的奖励哦!\r\n#r祝你游戏愉快!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    //cm.openWeb("http://www.5ifly.com");
            cm.sendOk("已经为你打开新职业技能书的暴率清单.\r\n#r祝你游戏愉快!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}