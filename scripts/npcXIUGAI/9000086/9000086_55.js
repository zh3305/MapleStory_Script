importPackage(java.lang);

var status = 0;


var dsd;
var itemss;
var slot = Array();

var names;
var rws = 1024;
var kongwei = 1;
var dsa = "";
var selStr = "";
var mmd = "";


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
        cm.dispose();
    }
    if (status == 0) {

       names = cm.getVipname();
       dsa += "#r ┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + "#k ";

       mmd = "#b#L0#传送到市场#l       #L2#查看怪物掉物#l\r\n#L3#转职向导#l         #L5#快捷传送#l\r\n#L20#万能商店#l         #L21#金融专区#l\r\n#L22#贡献专区#l         #L23#枫翼重修#l \r\n\r\n #r#L1013#委托任务 (无聊？就来做做委托任务吧！奖励多多哦！)#l\r\n#b";

       if(cm.getChar().getAccountID()==1){
    selStr += mmd + "\r\n#L1#快捷NPC服务#l      #L555#BOSS地图传送#l\r\n#L7##rGM专用NPC#l \r\n#L556#测试任务函数#l\r\n#L12345#领取#i2430471:# #b#t2430471##l";

       } else {
         selStr += mmd + "\r\n#L1#快捷NPC服务#l      #L555#BOSS地图传送#l\r\n#L12345#领取#i2430471:# #b#t2430471##l";

     } 


        var mids = "#r ┈┈┈━═☆#i4251202##r   MapleWing   #i4251202# #r☆═━┈┈┈ \r\n#r" + cm.getVipname() + "#k  #n您好! 欢迎您来到 #rMaplewing#k !\r\n请选择您需要的服务:\r\n";

         selStr += "\r\n#L995#学习群宠技能#l     #L996#学习骑兽技能#l \r\n#L99400#清除背包指定物品#l"

        if ((cm.getJob() >= 432) && (cm.getJob() <= 434)) {

        selStr += "\r\n#L588#学习暗影飞跃斩到20级#l\r\n";

          if (cm.getJob() >= 433) {

             selStr += "\r\n#L587#学习影子闪避到20级#l\r\n#L586#学习地狱锁链到20级#l\r\n";
          }

       }

        // mids +=  cm.getVipname() + "#k  #n您好! 欢迎您来到 #rMaplewing#k !\r\n请选择您需要的服务:\r\n";


        cm.sendSimple(mids + selStr);

        } else if (status == 1) { 

        switch (selection) {
        case 0:
            if (cm.getPlayer().getMapId() >= 910000000 && cm.getPlayer().getMapId() <= 910000022) {
                cm.sendOk(dsa + " 您已经在市场了哦！！！");
            } else {
                cm.saveReturnLocation("FREE_MARKET");
                cm.warp(910000000, "st00");
            }
            cm.dispose();
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9900004, 0);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9010000, 1);
            break;

        case 588:
            cm.dispose();

            if (cm.getPlayer().getSkillLevel(4321006) == 5) {

            cm.teachSkill(4321006, 5, 20);
                cm.sendOk(dsa + " 学习成功！！！");

             } else {
                cm.sendOk(dsa + " \r\n对不起哦，这个技能要5级才能提高最高等级到20级，或者你已经学习过了！！！");

             }


            break;

        case 587:
            cm.dispose();

            if (cm.getPlayer().getSkillLevel(4330009) == 10) {

            cm.teachSkill(4330009, 10, 20);
                cm.sendOk(dsa + " 学习成功！！！");

             } else {
                cm.sendOk(dsa + " \r\n对不起哦，这个技能要10级才能提高最高等级到20级，或者你已经学习过了！！！");

             }


            break;


        case 586:
            cm.dispose();

            if (cm.getPlayer().getSkillLevel(4330006) >= 0) {

            cm.teachSkill(4331006, 20, 20);
                cm.sendOk(dsa + " 学习成功！！！");

             } else {
                cm.sendOk(dsa + " \r\n对不起哦，这个技能要0级才能提高到20级，或者你已经学习过了！！！");

             }


            break;

        case 1013:

            cm.dispose();
            cm.openNpc(9000086, 1013);
            break;

        case 3:
            //cm.maxSkillsByJob();
            cm.dispose();
            cm.openNpc(9000086, 1002);
            break;
        case 4:
            if (cm.getPlayer().getLevel() < 10) {
                cm.warp(50000);
            } else {
		cm.sendOk(dsa + "你的等级大于10,不能在新手地图练级.");
            }
            cm.dispose();
            break;
        case 5:
            cm.dispose();
	    cm.openNpc(9000086, 1000);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(1012117);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9300011);
            break;


        case 555:
            cm.dispose();
            cm.openNpc(9000086, 1020);
            break;


        case 20:
            cm.dispose();
	    cm.openNpc(9000086, 1001);
            break;
        case 21:
            cm.dispose();
            cm.openNpc(9000086, 1005);
            break;
        case 22:
            cm.dispose();
            cm.openNpc(9000086, 1008);
            break;


        case 23:
            cm.dispose();
            cm.openNpc(9000086, 1003);
            break;


        case 99400:

            dsd = 400;

            var avail = "";

            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(4).getItem(i) != null) {
                    avail += "#L" + cm.getInventory(4).getItem(i).getItemId() + "##i" + cm.getInventory(4).getItem(i).getItemId() + ":##l";
                }
                slot.push(i);
            }

            for (var i = 0; i < 96; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
                    avail += "#L" + cm.getInventory(1).getItem(i).getItemId() + "##i" + cm.getInventory(1).getItem(i).getItemId() + ":##l";
                }
                slot.push(i);
            }



            cm.sendSimple(dsa + "请选择您需要清除的物品:\r\n#b" + avail);

            break;

        case 995:
            if (cm.getPlayer().getSkillLevel(8) > 0 || cm.getPlayer().getSkillLevel(10000018) > 0 || cm.getPlayer().getSkillLevel(20000024) > 0 || cm.getPlayer().getSkillLevel(20011024) > 0) {
                cm.sendOk("您已经学习过这个技能。");
            } else {
                if (cm.getJob() == 2001 || (cm.getJob() >= 2200 && cm.getJob() <= 2218)) {
                    cm.teachSkill(20011024, 1, 0); // 龙神 - 群宠
                } else if (cm.getJob() == 2000 || (cm.getJob() >= 2100 && cm.getJob() <= 2112)) {
                    cm.teachSkill(20000024, 1, 0); // 战神 - 群宠
                } else if (cm.getJob() >= 1000 && cm.getJob() <= 1512) {
                    cm.teachSkill(10000018, 1, 0); // 骑士团 - 群宠
                } else {
                    cm.teachSkill(8, 1, 0); // 冒险家 - 群宠
                }
                cm.sendOk(dsa + "恭喜您学习技能成功。");
            }
            cm.dispose();
            break;
        case 996:
            if (cm.getPlayer().getSkillLevel(80001000) > 0) {
                cm.sendOk(dsa + "您已经学习过这个技能。");
            } else {
                if (cm.getJob() >= 3000) {
                    cm.sendOk(dsa + "对不起！该职业暂时无法学习这个技能。");
                    cm.dispose();
                    return;
                }
                cm.teachSkill(80001000 ,  1, 1);
                cm.sendOk(dsa + "恭喜您学习技能成功。");
            }
            cm.dispose();
            break;





        case 12345:

              if (cm.getPlayer().haveItem(2430471) >= 1) {
                 cm.sendOk(dsa + "#r" + names + "  #k您已经拥有：#b#i2430471:# #b#t2430471#.\r\n\r\n#r无法重复获得此物品！");
                 cm.dispose();

             } else {

         if (cm.getSpace(1) >= kongwei) {
            cm.gainItem(2430471, 1);
            cm.sendOk(dsa + "#d" + names + " #k ，我已经把 #b#i2430471:# #b#t2430471# #k \r\n发送到您的 #r背包#k 里！\r\n#r请注意查看！ ");
            cm.dispose();
            } else {
                cm.sendOk(dsa + "您的 #r消耗栏#k 空间没有#r#e " + kongwei + " #n#k个空位！无法获得 #b#i2430471:# #b#t2430471#\r\n#d请清理后再来领取！");
                cm.dispose();
            }
       }
            break;

        case 55:
/*
            while(rws <= 1030) {
            cm.forceStartQuest(rws);
            rws++;
         }

*/
            cm.dispose();
            break;


        }//switch



        } else if (status == 2) { 

              itemss = selection;

             if (dsd == 400) {

               var shul = cm.getPlayer().getItemQuantity(itemss);

               cm.gainItem(itemss, -shul);

                cm.sendOk(dsa + "我已经将您背包里的 #d#i" + itemss + ":# #t" + itemss + ":# 数量：#e#r" + shul + "#n#b\r\n从你的背包删除！");
                cm.dispose();


             }




    }//(status == 2) 



}
