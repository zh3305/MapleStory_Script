var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var beibao = 2;
var beibaokj = 1;

var md2 = "\r\n#b但愿那被波及的时空不会被打破！\r\nMaplewing世界任需要人守护.....\r\n冒险家你愿意帮助我么？";

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

          vipname = cm.getVipname();
          reborns = cm.getPlayer().getReborns();
          talks = "#r ┈┈┈━═☆#i" + titems + "##r   枫翼重修   #i" + titems + "# #r☆═━┈┈┈ \r\n";
          texts += talks + "#k来自#rMapleWing世界#k的冒险家： #r " + vipname + " #k\r\n我是  #r<时间女神>伦娜 #k，很高兴能见到你!\r\n";

          if (reborns == 0) {
          texts += "你现在所见到的只是我的虚影.....\r\n#b我正在遥远的时空稳定封印黑暗魔法师的时空封印!\r\n而黑暗魔法师的下属们正在积蓄力量想要破解封印!\r\n";
           }

          texts += "#d为了维护MapleWing世界的和平! 我可以使用 #r时间的力量 #d帮助你进行 #r枫翼重修#d !进而让你拥有更强大的力量!\r\n";


          texts += "#e#r重修二十五重天，百转成神!#n\r\n#d目前你的重修境界为：  #e#r" + reborns + "#n  重天\r\n#b选择的权利在你的手中！！\r\n#L1##r接受时间的力量提升枫翼重修境界#l\r\n#L2#女神的担忧#l\r\n#d#L3#查看枫翼重修境界简介#l\r\n#L4#查看枫翼重修提升条款#l";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
                      break;
               case 2:


                      cm.sendOk(md2);
                      cm.dispose();
                      //cm.openNpc(2144000, 102);
                      break;
               case 3:
                      cm.dispose();
                      cm.openNpc(2144000, 103);
                      break;
               case 4:
                      cm.dispose();
                      cm.openNpc(2144000, 104);
                      break;
          }

       }


  }







/*

      if (cm.getMapId() == 272020200) {

           if (cm.haveMonster(8860004)) {

        if (cm.getSpace(4) < 1) {
            cm.sendOk("打败阿卡伊勒的勇士，你背包的“其它”空间没有1个空间以上，无法容纳我送给你的一些小礼物，请清理下背包.");
            cm.dispose();
       } else {
           cm.removeNpc(272020200, 2144020);
           cm.spawnNpc(2144016, 9, -270);
           cm.gainItem(4020009, 5);
           cm.killAllMob();
           cm.sendOk("#b打败阿卡伊勒的勇士，我向你表示敬意！");
           cm.dispose();
          // cm.sendSimple("#b打败阿卡伊勒的勇士，我向你表示敬意！#k\r\n为了感谢你的付出，等下我会送你一点#r小礼物#k.#d\r\n\r\n#L5#这是我们的义务!#l"); 

         }



         } else {

           cm.sendOk("#b冒险家们 一定要阻止 阿卡伊勒 的计划\r\n#k请打败他......再来唤醒我...."); 
           cm.dispose();

     }


       } else {
              if(cm.getChar().getAccountID()==1){
              var selStr = "尊贵的 #e#r#h ##k #n 您好！请您选择您需要测试的功能:\r\n\r\n#r#L0#终极服务#l\r\n#L1#发送全世界祝福#l\r\n#L2#点播音乐#l\r\n\r\n#L3#Maplewing贡献系统#l\r\n#L4#Maplewing重修#l\r\n#L5#测试 发送世界祝福消息(远征队任务类)#l\r\n#L6#测试 发送全世界消息 #l";
        cm.sendSimple(selStr);
      } else {
          cm.sendOk("你好！我是时间女神伦娜！"); 
          cm.dispose();
         }
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

*/