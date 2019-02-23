var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;
var lvs;

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

          vipname = cm.getVipname();
          lvs = cm.getPlayer().getLevel();
          reborns = cm.getPlayer().getReborns();
          talks = "#r ┈┈┈━═☆#i" + titems + "##r   枫翼重修   #i" + titems + "# #r☆═━┈┈┈ \r\n";
          texts += talks + "#k我们  #rMapleWing世界#k  的冒险家： #r " + vipname + " #k\r\n您是否已经厌倦满级的生活了么、是否上线无所事事？可曾想过时光可以倒流，一切可以从头来过。如今，我们Maplewing便满足你渺小的愿望！推荐你进行 #e#r枫翼重修#n#b\r\n您是否很激动呢？\r\n";


          texts += "#d我可以将您传送到#e#r<时间女神>伦娜#n#d的所在的神殿! 她可以使用 #r时间的力量 #d帮助您进行 #r枫翼重修#d !进而让您拥有更强大的力量!\r\n";


          texts += "#e#r重修二十五重天，百转成神!#n\r\n#d目前你的重修境界为：  #e#r" + reborns + "#n  重天\r\n#b你现在想做什么呢?\r\n#e#b注意：第一次重修需要200级以上！目前您的等级为：#r" + lvs + " \r\n\r\n#L1##r寻找<时间女神>伦娜接受时间的力量提升枫翼重修境界#l\r\n";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:

                 if (lvs => 200) {
                      cm.warp(931050431);
                      cm.sendOk("#r ┈┈┈━═☆#i" + titems + "##r   枫翼重修   #i" + titems + "# #r☆═━┈┈┈ \r\n#d我已经将您送到了  #e#r<时间女神>伦娜#n#d  所在的地方！她就在前面等着您！！！");
            
                      cm.dispose();
                     // cm.openNpc(2144000, 101);
                      break;
               case 2:
                      cm.dispose();
                      cm.openNpc(2144000, 102);
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



