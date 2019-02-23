var mds;
var name;
var maple;

var item1 = 2430289;
var gitem1 = 1;

var maples = 811;
var wmoses = 3111;

/**
魔法密林跳跳任务！
*/


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
        cm.sendOk("Alright, see you next time.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {

        mds = "#r ┈┈┈━═☆#i4251202##r  操作大挑战  #i4251202# #r☆═━┈┈┈ \r\n";
        name = cm.getVipname();
        maple = cm.getMaplewing("maple");
        cm.sendPlayerToNpc(mds + "\r\n#b终于到达顶部了！累死了、、、、！！\r\n嗯？草药丛里面好像有什么......\r\n要不要拿出来看看？\r\n(是就点击下一步吧！)");

        //   cm.dispose();
    } else if (status == 1) {
        if ((cm.getSpace(1) >= 1) && (cm.getSpace(2) >= 1) && (cm.getSpace(3) >= 1) && (cm.getSpace(4) >= 1) && (cm.getSpace(5) >= 1)) {
            cm.gainItem(item1, gitem1);
            cm.addMaplewing("maple", maples);
            cm.addMaplewing("wmose", wmoses);
            cm.warp(101000000, 0);
            cm.sendPlayerToNpc(mds + "\r\n#b额，刚把手伸进去，好像得到了一些东西，就被一股神秘的力量传送出来。\r\n#i" + item1 + ":##t" + item1 + ":#\r\n#b贡献点：#e#r" + maples + "#n     #b万级余额：#e#r" + wmoses + "#n\r\n看到上面的奖励心情很不错呐！！嘿嘿！！");

        } else {
            var mdss = mds + "\r\n\r\n先将所有背包栏目留出一格空位以上再去看看吧！";
            cm.sendPlayerToNpc(mdss);
        }
        cm.dispose();

    } //(status == 0)
}





/* NPC : A pile of pink flower
 * Location : Sleepywood, forest of patient
 */

/*
var itemSet = new Array(4010003, 4010000, 4010002, 4010005, 4010004, 4010001);
var rand = Math.floor(Math.random() * itemSet.length);


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 2 && mode == 0) {
  cm.dispose();
  return;
    }
    if (mode == 1) {
  status++;
    } else {
  status--;
    }
    if (status == 0) {
  cm.warp(105000000);

  if (cm.getQuestStatus(2052) == 1 && !cm.haveItem(4031025)) {
      cm.gainItem(4031025, 20);
  } else {
      cm.gainItem(itemSet[rand], 2);
  }
  cm.dispose();
    }
}

*/
