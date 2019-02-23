var status = 0;

var mapid = 749050502;
var mapids = 0;
var jobid = 0;
var jobs = 0;
var lvs = 0;
var npcid = 9000086;
var fengye = 1;//快捷转职所需要物品数量
var items = 4001126;//快捷转职所需要物品

var mapidms = 0;
var nowmapid = 0;

var vipname;
var topsn;

//var jobs = cm.getJob();
//var lvs = cm.getPlayer().getLevel();

var text0 = "#d感谢您对MapleWing的支持！\r\n#b下面为您介绍下转职向导这个系统：\r\n#k当您达到一定专职条件转职时，您可以通过  #r转职向导 #k 来选择转职为自己喜欢的职业！\r\n#b具体转职条件为：#r\r\n①   等级要求   ①#d\r\n冒险家  反抗者  骑士团  战神  要求为：  #b\r\n一转10级   二转30级   三转70级   四转120级 #r\r\n②   特别注明   ②#k\r\n#e1. #n#r双弩精灵 火炮手 恶魔猎手 怪盗幻影 #d新英雄#k 职业到达一定等级后会自动转职!\r\n#e2. #n#r冒险家 新手#k 转职为#r 魔法师#k 只需要达到#r 8 级#k 就可以进行转职！\r\n暗影双刀一转为飞侠，20级后转成双刀职业群！\r\n共5转：1+转 20级 2转 30级 2+转 50级 3转 70级 4转 120级 ";//转职向导说明

var text1 = "您可以在那里找到 #b转职教官 ";

var text2 = "\r\n#k您可以选择所需要的 #r转职快捷服务 #k：\r\n";

var text3 = "MapleWing3";
var text4 = "MapleWing4";
var text5 = "MapleWing5";
var text6 = "MapleWing6";
var text7 = "MapleWing7";
var text8 = "MapleWing8";
var text9 = "MapleWing9";

var noAdvance = "#r\r\n注意：如果您建的角色是属于冒险家只能转职成冒险家类的职业！不然会无法正常游戏！\r\n#k您现在的等级还不需要 #d转职向导服务 #k如果您是 #b冒险家#k 或者 #b骑士团 #k和 #b反抗者 #k达到#e#r ";

var advance = "Maplewing";//第一主对话

var unable = "#r您已经完成所以的转职！\r\n加油吧！ #b<时间女神>伦娜  #k在等着你！";

//var unable = "好像你已经通过了全部的转职了，你的冒险生活怎么样？如果遇到不开心的事，笑笑就过了。以后还有很多事情等着你去面对。";

var noThanks = "#d\r\n#L1#查看转职向导说明#l";
var check = "你确定你想成为一个 ";
var congrats = "你想成为一个 ";
var jobDir;
var status;
var newJob;
var newJobName;
var Sp;
var a=1;
var jobData = Array(
"新手", 0, 0, 1022000, 
"战士", 100, 102000003, 1022000, 
"剑客", 110, 102000003, 1022000, 
"勇士", 111, 211000001, 2020008, 
"英雄", 112, 240010501, 2081100, 
"准骑士", 120, 102000003, 1022000, 
"骑士", 121, 102000003, 2020008, 
"圣骑士", 122, 240010501, 2081100, 
"枪战士", 130, 102000003, 1022000, 
"龙骑士", 131, 211000001, 2020008, 
"黑骑士", 132, 240010501, 2081100, 
"魔法师", 200, 101000003, 1032001, 
"火毒法师", 210, 101000003, 1032001, 
"火毒巫师", 211, 211000001, 2020009, 
"火毒魔导士", 212, 240010501, 2081200, 
"冰雷法师", 220, 101000003, 1032001, 
"冰雷巫师", 221, 211000001, 2020009, 
"冰雷魔导士", 222, 240010501, 2081200, 
"牧师", 230, 101000003, 1032001, 
"祭司", 231, 211000001, 2020009, 
"主教", 232, 240010501, 2081200, 
"弓箭手", 300, 100000201, 1012100, 
"猎人", 310, 100000201, 1012100, 
"射手", 311, 211000001, 2020010, 
"神射手", 312, 240010501, 2081300, 
"弩弓手", 320, 100000201, 1012100, 
"游侠", 321, 211000001, 2020010, 
"箭神", 322, 240010501, 2081300, 
"飞侠", 400, 103000003, 1052001, 
"刺客", 410, 103000003, 1052001, 
"无影人", 411, 211000001, 2020011, 
"隐士", 412, 240010501, 2081400, 
"侠客", 420, 103000003, 1052001, 
"独行客", 421, 211000001, 2020011, 
"侠盗", 422, 240010501, 2081400, 
"见习刀客", 430, 103050101, 1056000,
"双刀客", 431, 103050101, 1056000,
"双刀侠", 432, 103050101, 1056000,
"血刀", 433, 103050101, 1056000,
"暗影双刀", 434, 103050101, 1056000,
"海盗", 509, 120000101, 1090000, 
"拳手", 580, 120000101, 1090000, 
"斗士", 581, 211000001, 2020013, 
"冲锋队长", 582, 240010501, 2081500, 
"火枪手", 590, 120000101, 1090000, 
"大副", 591, 211000001, 2020013, 
"船长", 592, 240010501, 2081500, 
"战童", 2000, 140000000, 1201002, 
"预备兵", 3000, 310010000, 2151003, 
"唤灵法师（一转）", 3200, 310010000, 2151001, 
"唤灵法师（二转）", 3210, 310010000, 2151001, 
"唤灵法师（三转）", 3211, 310010000, 2151001, 
"唤灵法师（四转）", 3212, 310010000, 2151001, 
"豹弩游侠（一转）", 3300, 310010000, 2151002, 
"豹弩游侠（二转）", 3310, 310010000, 2151002, 
"豹弩游侠（三转）", 3311, 310010000, 2151002, 
"豹弩游侠（四转）", 3312, 310010000, 2151002, 
"机械师（一转）", 3500, 310010000, 2151004, 
"机械师（二转）", 3510, 310010000, 2151004, 
"机械师（三转）", 3511, 310010000, 2151004, 
"机械师（四转）", 3512, 310010000, 2151004,
"初心者", 1000, 130000000, 
"魂骑士（一转）", 1100, 130000000, 1101003, 
"魂骑士（二转）", 1110, 130000000, 1101003, 
"魂骑士（三转）", 1111, 130000000, 1101003, 
"炎术士（一转）", 1200, 130000000, 1101004, 
"炎术士（二转）", 1210, 130000000, 1101004, 
"炎术士（三转）", 1211, 130000000, 1101004, 
"风灵使者（一转）", 1300, 130000000, 1101005, 
"风灵使者（二转）", 1310, 130000000, 1101005, 
"风灵使者（三转）", 1311, 130000000, 1101005, 
"夜行者（一转）", 1400, 130000000, 1101006, 
"夜行者（二转）", 1410, 130000000, 1101006, 
"夜行者（三转）", 1411, 130000000, 1101006, 
"奇袭者（一转）", 1500, 130000000, 1101007, 
"奇袭者（二转）", 1510, 130000000, 1101007, 
"奇袭者（三转）", 1511, 130000000, 1101007
/*"游戏管理员", 800, 749050502, 2144000,
"游戏管理员", 900, 749050502, 2144000, 
"超级游戏管理员", 910, 749050502, 2144000, 
"恶魔猎手(一转) ", 3100,
"恶魔猎手(二转) ", 3110,
"恶魔猎手(三转) ", 3111,
"恶魔猎手(四转) ", 3112,
"双弩精灵(一转) ", 3200,
"双弩精灵(二转) ", 3210,
"双弩精灵(三转) ", 3211,
"双弩精灵(四转) ", 3212,
"战神（一转）", 2100, 130000000, 1201002, 
"战神（二转）", 2110, 130000000, 1201002, 
"战神（三转）", 2111, 130000000, 1201002, 
"战神（四转）", 2112, 130000000, 1201002, 
"火枪手(一转) ", 520,
"火枪手(二转) ", 530,
"火枪手(三转) ", 531,
"火枪手(四转) ", 532*/);

var first;
var sd;
var status = 0;
var job;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 2) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        if (status < 0){
	cm.dispose();
        }
    }

    if (status == 0) {

        nowmapid = cm.getPlayer().getMapId();
        vipname = cm.getVipname();
        jobs = cm.getJob();
        lvs = cm.getPlayer().getLevel();
        topsn = "#r ┈┈┈━═☆#i4251201##r   转职向导   #i4251201# #r☆═━┈┈┈ \r\n";

     advance = "#r ┈┈┈━═☆#i4251201##r   转职向导   #i4251201# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + " #k您现在的职业是 #r" + cm.getJobNameById(jobs) +"  \r\n#k恭喜您达到 #e#r" + lvs + " #n#k级!\r\n请选择您需要的下一步 #b转职向导服务 #k：#b";   
    

     if ((cm.getJob() != 400) && (cm.getJob() != 430) && (cm.getJob() != 431) && (cm.getJob() != 432)) {

//双刀过度位置

            if (cm.getJob() % 100 == 0) {

               noAdvance += cm.getJob() % 1000 == 0 ? "10#n#k ": "30#n#k ";

            } else {
               noAdvance += cm.getJob() % 10 == 0 ? "70": "120";
              noAdvance += " #n#k 级 才需要 #d转职向导服务#k.";
            }

        } else if (cm.getPlayerStat("LVL") <= 20) {//是飞侠的下一步

              noAdvance = topsn + "#k您现在的职业是 #r" + cm.getJobNameById(jobs) + " \r\n#r注意：如果想要玩暗影双刀，必须是在建角色时是选择暗影双刀才能转职，不然无法带双刀的武器！#b\r\n暗影双刀职业群要到 20#n#k 级 、飞侠职业群要到30级 才需要 #d转职向导服务#k \r\n.";

        } else if ((cm.getPlayerStat("LVL") < 70) && (cm.getJob() == 432)) {

             noAdvance = topsn + "#k您现在的职业是 #r" + cm.getJobNameById(jobs) + " \r\n暗影双刀职业群要到 70#n#k 级  才需要 #d转职向导服务#k  进行第3次转职！此后 4转 120级！.";


        } else if ((cm.getPlayerStat("LVL") < 120) && (cm.getJob() == 433)) {

             noAdvance = topsn + "#k您现在的职业是 #r" + cm.getJobNameById(jobs) + " \r\n暗影双刀职业群要到 120#n#k 级  才需要 #d转职向导服务#k  进行第4次转职！！";


        } else if ((cm.getPlayerStat("LVL") < 50) && (cm.getJob() == 431)) {

             noAdvance = topsn + "#k您现在的职业是 #r" + cm.getJobNameById(jobs) + " \r\n暗影双刀职业群要到 55#n#k 级  才需要 #d转职向导服务#k  进行第2+次转职！此后3转70级 4转 120级！.";

         }






    }


    if ((cm.getJob() % 10 == 2 && !cm.getJob() >= 435 && !cm.getJob() <= 436) || cm.getJob() == 900 || cm.getJob() == 910 || cm.getJob() == 800 || (cm.getJob() > 1000 && cm.getJob() < 1500 && cm.getJob() % 10 == 1)) {
        cm.sendOk(topsn + " " + vipname + "  " + unable);
        cm.dispose();
        return;
    } else {

        if (status == 0) {

            if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) {

                if ((cm.getPlayerStat("LVL") == 8 || cm.getPlayerStat("LVL") == 9) && cm.getJob() != 2000) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0 && (jobData[i + 1] == (200 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                   //上面是魔法师

                } else if (cm.getPlayerStat("LVL") >= 10) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0) if ((jobData[i + 1] % 100 == 0) && (jobData[i + 1] > cm.getJob()) && (jobData[i + 1] < (600 + cm.getJob()))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

/*
                   if (cm.getJob() == 3000) {  //预备兵

                   advance += "\r\n\r\n#d注意：预备兵！"

                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0) 
                       if ((jobData[i + 1] - 3200 == 0) || (jobData[i + 1] - 3300 == 0) || (jobData[i + 1] - 3500 == 0)) 
                           advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";


                   }
*/

                   advance += "\r\n\r\n#d注意：暗影双刀一转为飞侠，暗影双刀2转为20级！"


                } else if ((cm.getPlayerStat("LVL") >= 20) && (cm.job == 400)) {

               
                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 430 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                     
                } else {

                    cm.sendOk("" + advance +  "\r\n" + noAdvance + " 级  才需要 #d转职向导服务#k. " + noThanks + "");
                    cm.dispose();
                    return;
                }

                first = true;

            } else if ((cm.getJob() % 100 == 0) || (cm.getJob() == 430) || (cm.getJob() == 431)) { 

//第二次转职


                 if ((cm.getPlayerStat("LVL") >= 30) && (cm.job == 430)) {//双刀2转

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 431 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  }


                if ((cm.getPlayerStat("LVL") >= 55) && (cm.job == 431)) {//双刀2+转

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 432 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  }



                if (cm.getPlayerStat("LVL") >= 30) {

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0 && (jobData[i + 1] % 10 == 0 && jobData[i + 1] % 100 != 0)) && (jobData[i + 1] > cm.getJob() && jobData[i + 1] <= (cm.getJob() + 40))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";


           } else if ((cm.getPlayerStat("LVL") >= 30) && (cm.job == 430)) {

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 431 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";


            } else if ((cm.getPlayerStat("LVL") >= 20) && (cm.job == 400)) {

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 430 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";



                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }




                } else if ((cm.getPlayerStat("LVL") >= 70) && (cm.job == 432)) {//双刀3转

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 433 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  


                } else if ((cm.getPlayerStat("LVL") >= 120) && (cm.job == 433)) {//双刀4转

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] - 434 == 0)) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";



            } else if ((cm.getPlayerStat("LVL") >= 30) && (cm.job == 509)) {//海盗2转

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && ((jobData[i + 1] - 580 == 0) || (jobData[i + 1] - 590 == 0))) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";

                  



            } else if (((cm.getJob() % 10 == 0) || (cm.getJob() % 10 == 1)) && (cm.getJob() != 432) && (cm.getJob() != 433)) { // 第三次\4次转职


                if ((cm.getPlayerStat("LVL")) >= (cm.getJob() % 10 == 1 ? 120 : 70)) {
                    for (var i = 0; i <= jobData.length; i++)
                    if (i % 4 == 0 && (jobData[i + 1] - 1 == cm.getJob())) advance += "\r\n#b#L" + jobData[i + 1] + "#" + jobData[i] + "#l";
                } else {
                    cm.sendOk(noAdvance);
                    cm.dispose();
                    return;
                }


            } else {//不符合条件3、4转条件

             //双刀3转后，有点问题、、直接跳过前面，懒得看了！

             if ((cm.getPlayerStat("LVL") < 120) && ((cm.getJob() == 433) || (cm.getJob() == 432))) {

             unable = "#k您现在的职业是 #r" + cm.getJobNameById(jobs) + " \r\n暗影双刀职业群转职说明：\r\n70级#b进行第3次转职 成为血刀！！\r\n#r120级#b进行第4次转职 成为真正的暗影双刀！";

             }

                cm.sendOk(topsn + "\r\n" + vipname + " " + unable);
                cm.dispose();
                return;
            }



            advance += noThanks;
            cm.sendSimple(advance);


        } else if (status == 1) {

            if (selection == 1) {
                cm.sendOk(topsn + "#r" + vipname + "   " + text0);
                cm.dispose();

            } else {

                    newJob = selection;

                    for (var i = 0; i <= jobData.length; i++)
                    if ((i % 4 == 0) && (jobData[i + 1] == newJob) && (mapid = jobData[i + 2]) && (npcid = jobData[i + 3])) newJobName = jobData[i];
        //   mapid = jobData[i + 2];

                  if (mapid == nowmapid) {

                   text8 = "\r\n#r"+ vipname +" #k您已经在  #r#m" + mapid + "# #k 了！ \r\n您可以在这里找到 #r#p" + npcid + "# #k 进行转职！\r\n您也可以选择以下快捷转职服务：\r\n#b#L3#与转职教官 #r#p" + npcid + "# #b对话#l  \r\n#L2##b直接转职为  #r" + newJobName + "#b (需要手续费：#r#e" + fengye + " #n#b个 #i" + items + ":##t" + items + "#) #l";

                   } else {

                   text8 = "您选择了 #r" + newJobName + "#k 的 #b转职向导服务！#k\r\n请选择您要的服务：\r\n#b#L1#传送到  #r#m" + mapid + "# #l #k\r\n\r\n 您可以在  #r#m" + mapid + "#  找到 #r#p" + npcid + "# #k 进行转职\r\n#L2##b直接转职为  #r" + newJobName + "#b (需要手续费：#r#e" + fengye + " #n#b个 #i" + items + ":##t" + items + "#) #l";


                 }

                 cm.sendSimple(text8);//发送的第2个对话框，具体内容看上面一段

                  //  cm.sendYesNo("您是否选择 #r" + newJobName + "#k 的 #b转职向导服务#k ?\r\n#b如果是我将传送您到 #r#m" + mapid + "# #k\r\n" + text1 + " #r#p" + npcid + "# #k 进行转职！");

            } //selection

          } else if (status == 2) {
                  if (selection == 1) {
                     cm.warp(mapid);

                     cm.sendSimple("我已经将您传送到了#m" + mapid + "# " + text2 + "#b#L1#与转职教官 #r#p" + npcid + "# #b对话#l \r\n#L2#直接转职   #r" + newJobName + "#k (需要手续费：#r#e" + fengye + " #n#b个 #i" + items + ":##t" + items + "#) #l");

                  } else if (selection == 2) {
                      if (cm.itemQuantity(items) >= 1) {
                         cm.changeJob(newJob);
                         cm.sendOk("恭喜您已经成功转职为 #r" + newJobName + "#k 。\r\n#b加油吧！ #b<时间女神>#r伦娜#k 在等着你！ ");
                         cm.dispose();
                      } else {
                         cm.sendOk("对不起，您没有 ：#r#e" + fengye + " #n#k个 #i" + items + ":##t" + items + "# #d\r\n所以我不能帮您进行快速转职！");
                         cm.dispose();
                       }

                  } else if (selection == 3) {
                      cm.dispose();
                      cm.openNpc(npcid, 0);

                   }


             } else if (status == 3) {

                  if (selection == 1) {
                      cm.dispose();
                      cm.openNpc(npcid, 0);
                  } else if (selection == 2) {
                      if (cm.itemQuantity(1402096) >= 1) {
                         cm.changeJob(newJob);
                         cm.sendOk("恭喜您已经成功转职为 #r" + newJobName + "#k 。\r\n#b加油吧！ #b<时间女神>#r伦娜#k 在等着你！ ");
                         cm.dispose();
                      } else {
                         cm.sendOk("对不起，您没有 ：#r#e" + fengye + " #n#k个 #i" + items + ":##t" + items + "# #d\r\n所以我不能帮您进行快速转职！");
                         cm.dispose();
                       }
                   }









                  // cm.changeJob(newJob); //转职语句
            // 还没有给予SP的函数。giveSp()//T050 超过等级就给少了的Sp

        /*
            } else if (status == 3) {
            if (!cm.MissionStatus(cm.getPlayer().getId(),110414000, 0, 2)){//查看时间间隔到了没
		cm.sendOk("#r非法的操作，为了确保注意事项您有仔细观看，请5秒后再点击下一步。")
		cm.MissionDelete(cm.getPlayer().getId(), 110414000);//放弃任务，重新计数
				cm.dispose();
		}else{
			*/


            if (newJob == 2100) { //如果是战神第一转
               // cm.teachSkill(21000000, 0, 10); //矛连击强化
                //cm.teachSkill(21001003, 0, 10); //快速矛
            } else if (newJob == 2110) { //战神第二转
               /* cm.teachSkill(21100000, 0, 10);
                cm.teachSkill(21100002, 0, 10);
                cm.teachSkill(21100004, 0, 10);
                cm.teachSkill(21100005, 0, 10);*/
            } else if (newJob == 2111) { //战神第三转
              //  cm.teachSkill(21110002, 0, 10);
            } else if (newJob == 2112) { //战神第四转
              /*  cm.teachSkill(21120001, 0, 10); //攻击策略
                cm.teachSkill(21120002, 0, 10); //战神之舞
                cm.teachSkill(21121003, 0, 10); //战神的意志
                cm.teachSkill(21121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(21120004, 0, 10); //2280014[技能册]防守策略
                cm.teachSkill(21120005, 0, 10); //2280013[技能册]巨熊咆哮
                cm.teachSkill(21120006, 0, 10); //2280015[技能册]钻石星辰
                cm.teachSkill(21120007, 0, 10); //2280016[技能册]战神之盾*/
            } else if (newJob == 431) {
               /* cm.teachSkill(4311003, 0, 10);*/
            } else if (newJob == 432) {
               /* cm.teachSkill(4321000, 0, 10);
                cm.teachSkill(4321001, 20, 20);*/
            } else if (newJob == 434) {
               /* cm.teachSkill(4331002, 0, 10);
                cm.teachSkill(4331005, 0, 10);*/
            } else if (newJob == 434) {
             /*   cm.teachSkill(4341000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(4340001, 0, 10); //武器用毒液
                cm.teachSkill(4341002, 0, 10); //2280030[技能册]终极斩 
                cm.teachSkill(4341003, 0, 10); //怪物炸弹
                cm.teachSkill(4341004, 0, 10); //忍者箭雨
                cm.teachSkill(4341005, 0, 10); //2280031[技能册]地狱锁链
                cm.teachSkill(4341006, 0, 10); //傀儡召唤
                cm.teachSkill(4341007, 0, 10); //荆棘*/
            } else if (newJob == 1111) { //魂骑士
               /* cm.teachSkill(11111004, 0, 10); //轻舞飞扬
                cm.teachSkill(11110005, 0, 10); //进阶斗气*/
            } else if (newJob == 1211) { //炎术士
                /*cm.teachSkill(12111003, 0, 10); //天降落星
                cm.teachSkill(12111004, 0, 10); //火魔兽*/
            } else if (newJob == 1311) { //风灵使者
               /* cm.teachSkill(13111002, 0, 10); //暴风箭雨
                cm.teachSkill(13110003, 0, 10); //神箭手*/
            } else if (newJob == 1411) { //夜行者
            /*    cm.teachSkill(14111005, 0, 10); //三连环光击破
                cm.teachSkill(14110004, 0, 10); //武器用毒液*/
            } else if (newJob == 1511) { //奇袭者
              /*  cm.teachSkill(15111004, 0, 10); //光速拳
                cm.teachSkill(15111005, 0, 10); //极速领域*/
            } else if (newJob == 412) { //隐士
              /*  cm.teachSkill(4120002, 0, 10); //假动作
                cm.teachSkill(4120005, 0, 10); //武器用毒液
                cm.teachSkill(4121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(4121003, 0, 10); //2280006[技能册]挑衅
                cm.teachSkill(4121004, 0, 10); //忍者伏击
                cm.teachSkill(4121006, 0, 10); //暗器伤人
                cm.teachSkill(4121007, 0, 10); //2280010[技能册]三连环光击破
                cm.teachSkill(4121008, 0, 10); //忍者冲击*/
            } else if (newJob == 422) { //侠盗
              /*  cm.teachSkill(4220002, 0, 10); //假动作
                cm.teachSkill(4220005, 0, 10); //武器用毒液
                cm.teachSkill(4221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(4221001, 0, 10); //暗杀
                cm.teachSkill(4221003, 0, 10); //2280006[技能册]挑衅
                cm.teachSkill(4221004, 0, 10); //忍者伏击
                cm.teachSkill(4221006, 0, 10); //烟幕弹
                cm.teachSkill(4221007, 0, 10); //一出双击*/
            } else if (newJob == 312) { //神射手
               /* cm.teachSkill(3120005, 0, 10); //神箭手
                cm.teachSkill(3121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(3121002, 0, 10); //火眼晶晶
                cm.teachSkill(3121003, 0, 10); //2280005[技能册]飞龙冲击波
                cm.teachSkill(3121004, 0, 10); //暴风箭雨
                cm.teachSkill(3121006, 0, 10); //火凤凰
                cm.teachSkill(3121007, 0, 10); //击退箭
                cm.teachSkill(3121008, 0, 10); //集中精力*/
            } else if (newJob == 322) { //
               /* cm.teachSkill(3221003, 0, 10); //2280005[技能册]飞龙冲击波
                cm.teachSkill(3220004, 0, 10); //神弩手
                cm.teachSkill(3221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(3221001, 0, 10); //穿透箭
                cm.teachSkill(3221002, 0, 10); //火眼金睛
                cm.teachSkill(3221005, 0, 10); //冰凤凰
                cm.teachSkill(3221006, 0, 10); //刺眼箭
                cm.teachSkill(3221007, 0, 10); //一击要害箭*/
            } else if (newJob == 212) { //火毒
             /*   cm.teachSkill(2121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(2121001, 0, 10); //创世之破
                cm.teachSkill(2121002, 0, 10); //魔法反击
                cm.teachSkill(2121003, 0, 10); //火凤球
                cm.teachSkill(2121004, 0, 10); //2280004[技能册]终极无限
                cm.teachSkill(2121005, 0, 10); //冰破魔兽
                cm.teachSkill(2121006, 0, 10); //连环爆破
                cm.teachSkill(2121007, 0, 10); //天降落星*/
            } else if (newJob == 222) { //冰雷
              /*  cm.teachSkill(2221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(2221001, 0, 10); //创世之破
                cm.teachSkill(2221002, 0, 10); //魔法反击
                cm.teachSkill(2221003, 0, 10); //冰凤球
                cm.teachSkill(2221004, 0, 10); //2280004[技能册]终极无限
                cm.teachSkill(2221005, 0, 10); //火魔兽
                cm.teachSkill(2221006, 0, 10); //链环闪电
                cm.teachSkill(2221007, 0, 10); //落霜冰破*/
            } else if (newJob == 232) { //主教
               /* cm.teachSkill(2321000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(2321001, 0, 10); //创世之破
                cm.teachSkill(2321002, 0, 10); //魔法反击
                cm.teachSkill(2321003, 0, 10); //强化圣龙
                cm.teachSkill(2321004, 0, 10); //2280004[技能册]终极无限
                cm.teachSkill(2321005, 0, 10); //圣灵之盾
                cm.teachSkill(2321006, 0, 10); //复活术
                cm.teachSkill(2321007, 0, 10); //2280009[技能册]光芒飞箭
                cm.teachSkill(2321008, 0, 10); //圣光普照*/
            } else if　 (newJob == 112) {
             /*   cm.teachSkill(1121001, 0, 10); //磁石
                cm.teachSkill(1121002, 0, 10); //稳如泰山
                cm.teachSkill(1121006, 0, 10); //2280012[技能册]突进
                cm.teachSkill(1121008, 0, 10); //勇猛劈砍
                cm.teachSkill(1121010, 0, 10); //葵花宝典
                //cm.teachSkill(1121009,0,10);//英雄之斧
                cm.teachSkill(1120003, 0, 10); //2280007[技能册]万佛归一破
                cm.teachSkill(1120004, 0, 10); //阿基里斯
                cm.teachSkill(1121000, 0, 10); //2280003[技能册]冒险岛勇士*/
            } else if (newJob == 122) {
               /* cm.teachSkill(1220005, 0, 10); //阿基里斯
                cm.teachSkill(1220006, 0, 10); //寒冰掌
                cm.teachSkill(1220010, 0, 10); //2280008[技能册]万佛归一破
                cm.teachSkill(1221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(1221001, 0, 10); //磁石
                cm.teachSkill(1221002, 0, 10); //稳定如山
                cm.teachSkill(1221003, 0, 10); //圣灵之剑
                cm.teachSkill(1221004, 0, 10); //圣灵之锤
                cm.teachSkill(1221007, 0, 10); //2280012[技能册]突进
                cm.teachSkill(1221009, 0, 10); //连环环破
                cm.teachSkill(1221011, 0, 10); //圣域*/
            } else if (newJob == 132) {
               /* cm.teachSkill(1320005, 0, 10); //阿基里斯
                cm.teachSkill(1320006, 0, 10); //恶龙附身
                cm.teachSkill(1320008, 0, 10); //灵魂治愈
                cm.teachSkill(1320009, 0, 10); //灵魂祝福
                cm.teachSkill(1321000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(1321001, 0, 10); //磁石
                cm.teachSkill(1321002, 0, 10); //稳如泰山
                cm.teachSkill(1321003, 0, 10); //2280012[技能册]突进
                cm.teachSkill(1321007, 0, 10); //灵魂助力*/
            } else if (newJob == 512) {
               /* cm.teachSkill(5121000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(5121002, 0, 10); //超能量
                cm.teachSkill(5121003, 0, 10); //超级变身
                cm.teachSkill(5121004, 0, 10); //金手指
                cm.teachSkill(5121005, 0, 10); //索命
                // cm.teachSkill(5121006,0,10);
                cm.teachSkill(5121007, 0, 10); //光速拳
                //cm.teachSkill(5121008,0,5);
                cm.teachSkill(5121009, 0, 10); //极速领域
                cm.teachSkill(5121010, 0, 10); //伺机待发
                cm.teachSkill(5121001, 0, 10); //潜龙出渊*/
            } else if (newJob == 522) {
                /*cm.teachSkill(5220001, 0, 10); //属性强化
                cm.teachSkill(5220011, 0, 10); //导航辅助
                cm.teachSkill(5220002, 0, 10); //超级章鱼炮台
                cm.teachSkill(5221000, 0, 10); //2280003[技能册]冒险岛勇士
                cm.teachSkill(5221003, 0, 10); //地毯式空袭
                cm.teachSkill(5221004, 0, 10); //金属风暴
                cm.teachSkill(5221009, 0, 10); //心灵控制
                cm.teachSkill(5221006, 0, 10); //武装*/
                //cm.teachSkill(5221007, 0, 10); //急速射
                //cm.teachSkill(5221008, 0, 10); //重量炮击
            } //newjob
            if (first) {
                //cm.resetAp();
            } //如果是一转，重置AP

/*

            if (newJob == 100 || newJob == 1100) {
                cm.gainItem(1302007, 1)
            } else if (newJob == 110 || newJob == 1110) {
                cm.gainItem(1402002, 1)
            } else if (newJob == 111 || newJob == 1111) {
                cm.gainItem(1402003, 1)
            } else if (newJob == 112) {
                cm.gainItem(1402004, 1)
            } else if (newJob == 120) {
                cm.gainItem(1422004, 1)
            } else if (newJob == 121) {
                cm.gainItem(1422005, 1)
            } else if (newJob == 122) {
                cm.gainItem(1422027, 1)
            } else if (newJob == 130) {
                cm.gainItem(1432002, 1)
            } else if (newJob == 131) {
                cm.gainItem(1432004, 1)
            } else if (newJob == 132) {
                cm.gainItem(1432007, 1)
            } else if (newJob == 200 || newJob == 1200) {
                cm.gainItem(1372063, 1)
            } else if (newJob == 210 || newJob == 220 || newJob == 230 || newJob == 1210) {
                cm.gainItem(1372066, 1)
            } else if (newJob == 211 || newJob == 221 || newJob == 231 || newJob == 1211) {
                cm.gainItem(1372069, 1)
            } else if (newJob == 212 || newJob == 222 || newJob == 232) {
                cm.gainItem(1372072, 1)
            } else if (newJob == 300 || newJob == 1300 || newJob == 3300) {
                cm.gainItem(1452093, 1);
                cm.gainItem(1462078, 1);
            } else if (newJob == 310 || newJob == 1310 || newJob == 3310) {
                cm.gainItem(1452096, 1);
            } else if (newJob == 311 || newJob == 1311 || newJob == 3311) {
                cm.gainItem(1452099, 1);
            } else if (newJob == 312 || newJob == 3312) {
                cm.gainItem(1452101, 1);
            } else if (newJob == 320) {
                cm.gainItem(1462081, 1);
            } else if (newJob == 321) {
                cm.gainItem(1462084, 1);
            } else if (newJob == 322) {
                cm.gainItem(1462086, 1);
            } else if (newJob == 400 || newJob == 1400) {
                cm.gainItem(1332104, 1);
                cm.gainItem(1472104, 1);
            } else if (newJob == 410 || newJob == 1410) {
                cm.gainItem(1472107, 1);
            } else if (newJob == 411 || newJob == 1411) {
                cm.gainItem(1472110, 1);
            } else if (newJob == 412) {
                cm.gainItem(1472112, 1);
            } else if (newJob == 420) {
                cm.gainItem(1332107, 1);
            } else if (newJob == 421) {
                cm.gainItem(1332110, 1);
            } else if (newJob == 422) {
                cm.gainItem(1332115, 1);
            } else if (newJob == 500 || newJob == 1500 || newJob == 3500) {
                cm.gainItem(1482066, 1);
                cm.gainItem(1492066, 1)
            } else if (newJob == 510 || newJob == 1510 || newJob == 3510) {
                cm.gainItem(1482069, 1);
            } else if (newJob == 511 || newJob == 1511 || newJob == 3511) {
                cm.gainItem(1482072, 1);
            } else if (newJob == 512 || newJob == 3512) {
                cm.gainItem(1482074, 1);
            } else if (newJob == 520) {
                cm.gainItem(1492069, 1);
            } else if (newJob == 521) {
                cm.gainItem(1492072, 1);
            } else if (newJob == 522) {
                cm.gainItem(1492074, 1);
            } else if (newJob == 2100) {
                cm.gainItem(1442096, 1);
            } else if (newJob == 2110) {
                cm.gainItem(1442099, 1);
            } else if (newJob == 2111) {
                cm.gainItem(1442102, 1);
            } else if (newJob == 2112) {
                cm.gainItem(1442105, 1);
            } else if (newJob == 3200) {
                cm.gainItem(1382085, 1);
            } else if (newJob == 3210) {
                cm.gainItem(1382088, 1);
            } else if (newJob == 3211) {
                cm.gainItem(1382091, 1);
            } else if (newJob == 3212) {
                cm.gainItem(1382094, 1);
            }


            if (Sp) {
                cm.sendNext("经过小助手的辛苦培养。从现在开始你已经是#b" + newJobName + "#k了！\r\n我给了你一些小礼物~请到道具栏查收~\r\n\r\n目前你的等级是" + cm.getPlayerStat("LVL") + "，超过了等级转职。系统为你补上了" + (cm.getPlayerStat("LVL") - 10) * 3 + "点SP。")
                cm.dispose();
            } else {
                cm.sendOk("经过小助手的辛苦培养。从现在开始你已经是#b" + newJobName + "#k了！\r\n我给了你一些小礼物~请到道具栏查收~");
                cm.dispose();
            }

*/
        }	
    }
}

function giveSp() { //要放在转职职业代码 后面
    if (cm.getJob() == 200 && cm.getPlayerStat("LVL") > 8) { //如果是魔法师，且超过了转职等级 8
        Sp = true;
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 8) * 3)
    } else if (cm.getJob() % 1000 == 0 || cm.getJob() == 0 || cm.getJob() == 3000) { //第一次转职，且超过了转职等级 10
        Sp = true
        cm.setRemainingSp((cm.getPlayerStat("LVL") - 10) * 3)
    }
}

