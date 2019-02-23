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



var xjob = Array(
//新手
0, 1,
//预备兵
3000, 1,
//战神
2000, 1,
//龙神
2001, 1,
//火炮手
501, 2,
//双弩
2002, 3,
//恶魔猎手
3001, 4,
//龙的传人
508, 5,
//幻影
2003, 6);

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
12, 222, 1200, 13, 13,
13, 224, 1300, 15, 15,
14, 226, 1400, 17, 17,
15, 228, 1500, 20, 20,
16, 230, 1600, 26, 26,
17, 232, 1700, 30, 30,
18, 234, 1800, 38, 38,
19, 236, 1900, 59, 59,
20, 238, 2000, 70, 70,
21, 240, 2100, 91, 91,
22, 243, 2200, 122, 212,
23, 246, 2300, 163, 163,
24, 249, 2400, 200, 200,
25, 252, 2500, 252, 252);


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


          texts += "目前你重修之后可以选择的职业是：\r\n";

          for (var i = 0; i <= xjob.length; i++)
          if (i % 2 == 0 && (xjob[i + 1] <= (reborns + 1))) {

            texts += "#d" + cm.getJobNameById(xjob[i]) +"  ";



         }


          texts += "#b\r\n请再次确定你的选择!\r\n#L5##e#r我愿意接受时间的洗礼!突破到枫翼重修第 " + cxs + " 重天!#l#n\r\n#d#L3#查看枫翼重修境界提升简介#l\r\n#L4#查看枫翼重修境界提升条款#l\r\n#b#L0#返回上一页#l";

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