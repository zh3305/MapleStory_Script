var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var beibao = 2;
var beibaokj = 1;



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
       //   texts += talks + "#k来自#rMapleWing世界#k的冒险家： #r " + vipname + " #k\r\n我是  #r<时间女神>伦娜 #k，很高兴能见到你!\r\n";

          if (reborns == 0) {
          texts += "你现在所见到的只是我的虚影.....\r\n#b我正在遥远的时空稳定封印黑暗魔法师的时空封印!\r\n黑暗魔法师的下属们正在准备力量破解封印!\r\n";
           }

      //    texts += "#d为了维护MapleWing世界的和平! 我可以使用 #r时间的力量 #d帮助你进行 #r枫翼重修#d !进而让你拥有更强大的力量!\r\n";


          texts += "#e#r重修二十五重天，百转成神!#n\r\n#d目前你的重修境界为：  #e#r" + reborns + "#n  重天\r\n#d具体提升要求请查看枫翼重修境界提升条款!\r\n#b请再次确定你的选择!\r\n#L1##r是的，我要接受时间的洗礼#l\r\n#L2#查看枫翼重修境界提升条款#l\r\n#b#L3#返回上一页#l";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 1:
                      cm.dispose();
                      cm.openNpc(2144000, 101);
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