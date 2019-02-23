var status = 0;

var beibao = 2;
var beibaokj = 1;

var xiaoxi = " .... ";
var zfid = 5120037;     // 5120043  为希纳斯女皇类型祝福


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
        } else if (status == 0) {

              if(cm.getChar().getAccountID()==1){
              var selStr = "尊贵的 #e#r#h ##k #n 您好！请您选择您需要测试的功能:\r\n\r\n#r#L0#终极服务#l\r\n#L1#发送全世界祝福#l\r\n#L2#点播音乐#l\r\n\r\n#L3#Maplewing贡献系统#l\r\n#L4#Maplewing重修#l\r\n#L5#测试 发送世界祝福消息(远征队任务类)#l\r\n#L6#测试 发送全世界消息 #l";
        cm.sendSimple(selStr);
      } else {
          cm.sendOk("你好！我是时间女神伦娜！"); 
          cm.dispose();
         }
     

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2144020, 1);
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
            cm.dispose();
            cm.openNpc(2144020, 4);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(2144020, 5);
            break;
        case 5:
            cm.dispose();
            cm.Maplewingx(xiaoxi, zfid);
            //cm.openNpc(2144020, 6);
            break;
        case 6:
         //   cm.removeNpc(272020110, 2144020);
       //     cm.spawnNpc(2144016, 9, -270);
            //cm.sendOk("成功.........");
	    cm.worldMessage("<时间女神>伦娜 ：错乱的时空，到底是否会平复...但愿不会波及到那被永恒封印的时空... ");
            cm.dispose();
            break;
        case 7:
        if (cm.getSpace(beibao) > beibaokj) {

             cm.sendOk("打败阿卡伊勒的勇士，你背包 " + beibao + "   大于   " + beibaokj + "  个空余空间 .");
            cm.dispose();
      } else  {
            cm.sendOk("\r\n无关.....请修改"); 
            cm.dispose();
     }
            break;
        case 8:
        if (cm.getSpace(4) < 3) {
            cm.sendOk("打败阿卡伊勒的勇士，你背包的“其它”空间没有3个空间以上,请清理下背包.");
            cm.dispose();
       } else {
            cm.dispose();
            cm.warp(272020110);
            cm.gainItem(4021010, 1);
            cm.gainItem(4021020, 1);
            cm.gainItem(4020009, 5);
            cm.sendOk("\r\n(#b  错乱的时空，到底是否会平复...但愿不会波及到那被永恒封印的时空... #k)"); 
     }
            break;

        case 9:
           // cm.showlayGuildRanks();
            cm.dispose();
            break;
		}
    }
}