var status = 0;


var vipname;
var texts = "#r";
var talks;
var titems = 4251202;
var reborns;

var beibao = 2;
var beibaokj = 1;


var cx1d = Array(
1, 150, 100, 0,
2, 325, 200, 0,
3, 525, 300, 0,
4, 750, 400, 0,
5, 1000, 500, 0,
6, 1250, 600, 0,
7, 1525, 700, 0,
8, 1825, 800, 0,
9, 2150, 900, 0,
10, 2500, 1000, 0,
11, 2850, 1100, 0,
12, 3225, 1200, 0,
13, 3625, 1300, 0,
14, 4050, 1400, 0,
15, 4500, 1500, 0,
16, 4950, 1600, 0,
17, 5425, 1700, 0,
18, 5925, 1800, 0,
19, 6450, 1900, 0,
20, 7000, 2000, 0,
21, 7550, 2100, 0,
22, 8125, 2200, 0,
23, 8725, 2300, 0,
24, 9350, 2400, 0,
25, 9999, 3333, 0);

var chongxiu2 = Array(
1, 200, 10, 1, 0,
2, 202, 20, 0,
3, 204, 30, 0,
4, 206, 40, 0,
5, 208, 50, 0,
6, 210, 60, 0,
7, 212, 70, 0,
8, 214, 80, 0,
9, 216, 90, 0,
10, 218, 100, 0,
11, 220, 110, 0,
12, 222, 120, 0,
13, 224, 130, 0,
14, 226, 140, 0,
15, 228, 150, 0,
16, 230, 160, 0,
17, 232, 170, 0,
18, 234, 180, 0,
19, 236, 190, 0,
20, 238, 10, 0,
21, 240, 10, 0,
22, 243, 20, 0,
23, 246, 30, 0,
24, 249, 40, 0,
25, 252, 50, 0);



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
          talks = "#r┈┈┈━═☆#i" + titems + "##r 枫翼重修境界简介 #i" + titems + "# #r☆═━┈┈┈ \r\n";
          texts += talks;

          texts += "#e#r重修二十五重天，百转成神!#n\r\n#d" + vipname + ",目前您的境界属于: #r枫翼重修第#e " + reborns + "#n 重天\r\n#b以下是枫翼重修境界简介:\r\n";
          texts += "#d提升 #r#e枫翼重修境界#n#d 后，#r等级初始为 1 级 \r\n职业初始为 1 转职业!  角色的 #r#e2个主要属性#n#d 将得到提升!\r\n例如：职业为战士类的2个主要属性为：#e#r力量 敏捷#n \r\n#d其中 #r#e#n力量为第一属性 敏捷为第二属性#n\r\n#b以下为提升枫翼重修境界后相应属性具体增加初始值:";

                    for (var i = 0; i <= cx1d.length; i++)
                    if (i % 4 == 0 && (cx1d[i + 3] >= 0)) {
                        texts += "\r\n#r枫翼重修 #d第 #e#r " + cx1d[i] + "#n #d重天:\r\n#b第一属性初始为: #e#r" + cx1d[i + 1] +" #n#d  第二属性初始为:  #e#r" + cx1d[i + 2] + " #n";
                    }


           texts += "\r\n#L1#返回上一页#l";

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