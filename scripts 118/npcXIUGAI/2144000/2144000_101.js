var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;
var lvs;

var cxs;

var nitem1 = 4021010;//时间之石
var nitem2 = 4021022;//太初精髓
var haveitem1 = -1;
var haveitem2 = -1;




var chongxiu1 = Array(
1, 200, 100, 1, 1,
2, 202, 200, 2, 2,
3, 204, 30, 3, 3,
4, 206, 400, 4, 4,
5, 208, 500, 5, 5,
6, 210, 600, 6, 6,
7, 212, 700, 7, 7,
8, 214, 800, 8, 8,
9, 216, 900, 9, 9,
10, 218, 1000, 10, 10,
11, 220, 1100, 11, 11,
12, 222, 1200, 12, 12,
13, 224, 1300, 13, 13,
14, 226, 1400, 14, 14,
15, 228, 1500, 15, 15,
16, 230, 1600, 16, 16,
17, 232, 1700, 17, 17,
18, 234, 1800, 18, 18,
19, 236, 1900, 19, 19,
20, 238, 2000, 20, 20,
21, 240, 2100, 21, 21,
22, 243, 2200, 22, 22,
23, 246, 2300, 23, 23,
24, 249, 2400, 24, 24,
25, 252, 2500, 25, 25);


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
          lvs = cm.getPlayer().getLevel();
          haveitem1 = cm.getItemQuantity(nitem1);
          haveitem2 = cm.getItemQuantity(nitem2);

          talks = "#r ┈┈┈━═☆#i" + titems + "##r   枫翼重修   #i" + titems + "# #r☆═━┈┈┈ \r\n";
          texts += talks;

          if (reborns == 0) {
          texts += "你现在所见到的只是我的虚影.....\r\n#b我正在遥远的时空稳定封印黑暗魔法师的时空封印!\r\n黑暗魔法师的下属们正在准备力量破解封印!\r\n";
           }


          texts += "#k目前你的重修境界为: #r第  #e" + reborns + "#n  重天  #k等级为:  #e#r" + lvs + " #n\r\n";
          cxs = reborns + 1;

          texts += "#k拥有贡献点#r#e " + cm.getMaplewing("maple") + "#n #b||#i" + nitem1 + ":##e#r" + haveitem1 + "#n#b个 ||#i" + nitem2 + ":##e#r" + haveitem2 + "#n#b个\r\n提升到下一重天的要求为:\r\n";


          for (var i = 0; i <= chongxiu1.length; i++)
          if (i % 5 == 0 && (chongxiu1[i] == (reborns + 1))) {
          texts += "#b等级 #e#r" + chongxiu1[i + 1] + " #n#b以上 || 贡献点#r#e " + chongxiu1[i + 2] + "#n #b||#i" + nitem1 + ":##e#r" + chongxiu1[ i + 3] + "#n#b个 ||#i" + nitem2 + ":##e#r" + chongxiu1[i + 4] + "#n#b个\r\n";
          }


          texts += "#b请再次确定你的选择!\r\n#L5##e#r我愿意接受时间的洗礼!突破到枫翼重修第 " + cxs + " 重天!#l#n\r\n#d#L3#查看枫翼重修境界提升简介#l\r\n#L4#查看枫翼重修境界提升条款#l\r\n#b#L0#返回上一页#l";

          cm.sendSimple(texts);
         // cm.dispose();
          

     } else if (status == 1) {
         switch (selection) {
               case 5:
                      cm.dispose();
                      cm.openNpc(2144000, 105);
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
               case 0:
                      cm.dispose();
                      cm.openNpc(2144000, 100);
                      break;
          }

       }


  }