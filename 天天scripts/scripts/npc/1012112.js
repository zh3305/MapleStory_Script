var status = -1;
var minLevel = 10; // 35
var maxLevel = 255; // 65

var minPartySize = 1;
var maxPartySize = 6;

var mds = "#r ┈┈━═☆#i4251202##r 月妙组队任务 #i4251202# #r☆═━┈┈ \r\n#r";;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
            return;
        }
        status--;
            cm.dispose();
    }
    if (cm.getPlayer().getMapId() != 910010500) {
        if (status == 0) {
            cm.sendYesNo("你想要到 月妙组队任务 入场地么？");
        } else {
            cm.saveLocation("MULUNG_TC");
            cm.warp(910010500, 0);
            cm.dispose();
        }
        return;
    }

    if (status == 0) {

               cm.sendSimple(mds + cm.getVipname() + " #d你好哦！我是 #r月妙组队任务#d 入场大使哦！\r\n里面有许多神秘有趣的东西哦！\r\n\r\n#b#L0#开始任务 #l \r\n#L1#了解入场说明 #l \r\n#L2#使用#i4001101:#兑换物品#l");


   } else if (status == 1) {

         if (selection == 0) {

        if (cm.getParty() == null) { // No Party

            cm.sendSimple("你没有一个队伍哦！\r\n #r入场条件:  队伍人数 " + minPartySize + " 以上, 所有队员的等级必须达到最低等级 " + minLevel + "  和不超过最高等级 " + maxLevel + ".#b\r\n#L0#额，我懂了~~~我看看....#l");

        } else if (!cm.isLeader()) { // Not Party Leader

            cm.sendSimple("你不是队长哦！请让你的队长来找我！.#b\r\n#L0#额，我知道了。#l");

        } else {

            // Check if all party members are within PQ levels
            var party = cm.getParty().getMembers();
            var mapId = cm.getMapId();
            var next = true;
            var levelValid = 0;
            var inMap = 0;
            var it = party.iterator();

            while (it.hasNext()) {
                var cPlayer = it.next();
                if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                    levelValid += 1;
                } else {
                    next = false;
                }
                if (cPlayer.getMapid() == mapId) {
                    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
                }
            }

            if (party.size() > maxPartySize || inMap < minPartySize) {
                next = false;
            }


            if (next) {

                var em = cm.getEventManager("HenesysPQ");
                if (em == null) {
                    cm.sendSimple("执行副本任务 HenesysPQ 事件不存在，请联系MapleWing 修复！！");
                } else {
                    var prop = em.getProperty("state");
                    if (prop.equals("0") || prop == null) {
                        em.startInstance(cm.getParty(), cm.getMap(), 70);
                        cm.removeAll(4001101);
                        cm.dispose();
                        return;
                    } else {
                        cm.sendSimple("已经有队伍在里面进行组队任务了！\r\n你需要在这里等下么？.#b\r\n#L0#好的，我知道了！.#");
                    }
                }


            } else {//if (next)

                cm.sendSimple("你的队伍不符合入场条件哦！\r\n #r入场条件:  队伍人数 " + minPartySize + " 以上, 所有队员的等级必须达到最低等级 " + minLevel + "  和不超过最高等级 " + maxLevel + ".#b\r\n#L0#额，我懂了~~~.#l");
            }


        }//while (it.hasNext())


        } else if (selection == 1) {

              cm.sendok(mds + "\r\n不解释....里面会有神奇的物品哦...");
              cm.dispose();

        } else if (selection == 2) {

               if (cm.getSpace(1) >= 1) {
             cm.sendSimple(mds + "请选择你需要兑换的物品：\r\n#L0##i1003266:# #t1003266:# 需要 #i4001101:# 20 个#l  \r\n#L1##i1002798:# #t1002798:# 需要 #i4001101:# 10 个 #l");

               } else {

               cm.sendOk(mds + "请在您的 装备栏留出1个空位以上哦！");
               cm.dispose();

               }

        }


    } else if (status == 2) { //broken glass


                 if (selection == 0) {

                      if (cm.haveItem(4001101, 20)) {
                         cm.gainItem(1003266, 1);
                         cm.gainItem(4001101, -20);
                         cm.sendOk(mds + "兑换成功！\r\n我已经把#i1003266:# #t1003266:# 放入你的背包！");
                      } else {

                       cm.sendOk(mds + "对不起哦！你没有 20 个 #i1003266:# #t1003266:# ");
                      }

                  } else {

                      if (cm.haveItem(4001101, 10)) {
                         cm.gainItem(1002798, 1);
                         cm.gainItem(4001101, -10);
                         cm.sendOk(mds + "兑换成功！\r\n我已经把#i1002798:# #t1002798:# 放入你的背包！");
                      } else {

                       cm.sendOk(mds + "对不起哦！你没有 10 个 #i1003266:# #t1003266:# ");
                      }


                  }


/*

        if (cm.haveItem(1002798, 1)) {

            if (!cm.canHold(1003266, 1)) {

                cm.sendOk("Make room for this Hat.");

            } else if (cm.haveItem(4001101, 20) && cm.isGMS()) { //TODO JUMP
                cm.gainItem(1003266, 1);
                cm.gainItem(4001101, -20);
            } else {
                cm.sendOk("当你拿到20个#i4001101:# 再回来找我吧.");
            }
        } else if (!cm.canHold(1002798, 1)) {
            cm.sendOk("对不起你没有 #i4001101:# .");
        } else if (cm.haveItem(4001101, 10)) {
            cm.gainItem(4001101, -10); //should handle automatically for "have"
            cm.gainItem(1002798, 1);
        } else {
            cm.sendOk("当你拿到10个#i4001101:# 再回来找我吧.");
        }
        cm.dispose();

*/



    }//(status == 2)


}