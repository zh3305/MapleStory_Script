/*  20级武器箱 */

var status;

var kongwei;
var itemss;
var text0 = " ";
var zbDataA = Array(
        Array(1402121, 1, 11), //英雄
        Array(1302184, 1, 11), //英雄
        Array(1312080, 1, 11), //英雄
        Array(1412079, 1, 11), //英雄

        Array(1402121, 1, 12), //英雄
        Array(1302184, 1, 12), //英雄
        Array(1322115, 1, 12), //圣骑士
        Array(1422081, 1, 12), //圣骑士

        Array(1432024, 1, 13), //黑骑士
        Array(1442092, 1, 13), //黑骑士

        Array(1382134, 1, 21), //火毒
        Array(1372022, 1, 21), //火毒

        Array(1382134, 1, 22), //冰雷
        Array(1372022, 1, 22), //冰雷

        Array(1382134, 1, 23), //主教
        Array(1372022, 1, 23), //主教

        Array(1452139, 1, 31), //弓箭手
        Array(1462028, 1, 32), //弩手
        Array(1472800, 1, 41), //标飞
        Array(1332033, 1, 42), //刀飞
        Array(1332033, 1, 43), //暗影双刀
        Array(1482053, 1, 51), //拳手
        Array(1492053, 1, 52), //火枪手
        Array(1532047, 1, 53), //火炮手
        Array(1492053, 1, 57)//龙的传人
        );
var zbDataB = Array(
        Array(1402121, 1, 11), //魂骑士
        Array(1302184, 1, 11), //魂骑士

        Array(1382134, 1, 12), //炎术士
        Array(1372022, 1, 12), //炎术士

        Array(1452139, 1, 13), //风灵使者

        Array(1472800, 1, 14), //夜行者

        Array(1482053, 1, 15), //奇袭者

        Array(1442092, 1, 21), //战神

        Array(1382134, 1, 22), //龙神
        Array(1372022, 1, 2), //龙神

        Array(1522030, 1, 23), //双弩精灵

        Array(1362048, 1, 24), //幻影

        Array(1482053, 1, 25), //隐月

        Array(1212081, 1, 27), //夜光法师

        Array(1382134, 1, 32), //唤灵斗师

        Array(1462028, 1, 33), //豹弩游侠

        Array(1492053, 1, 35), //机械师

        Array(1242082, 1, 36), //尖兵
        Array(1542050, 1, 41), //剑豪
        Array(1552050, 1, 42), //阴阳师
        Array(1302184, 1, 51), //米哈尔
        Array(1402121, 1, 61), //狂龙战士
        Array(1222076, 1, 65), //爆莉萌天使
        //Array(4001714, 1, 101), //神之子
        Array(1252049, 1, 112), //林之灵
        Array(1402121, 1, 131), //品克缤
        Array(1302184, 1, 131) //品克缤
        );
var zbDataN = Array();

function start() {
    status = -1;
    item = im.getItemId();
    action(1, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (mode == 0) {
            im.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            lvs = im.getPlayer().getLevel();
            var jobs = parseInt(im.getJobId() < 1000 ? im.getJobId() / 10 : im.getJobId() / 100);
            if (im.getJobId() >= 1000) {
                for (var i = 0; i < zbDataB.length; i++) {
                    if (zbDataB[i][2] == jobs) {
                        zbDataN.push(zbDataB[i]);
                        text0 += "\r\n#b#i" + zbDataB[i][0] + ":# #t" + zbDataB[i][0] + "#";
                    }
                }
            } else {
                for (var i = 0; i < zbDataA.length; i++) {
                    if (zbDataA[i][2] == jobs) {
                        zbDataN.push(zbDataA[i]);
                        text0 += "\r\n#b#i" + zbDataA[i][0] + ":# #t" + zbDataA[i][0] + "#";
                    }
                }
            }
            im.sendYesNo("#r#d#h ##k您是否要打开 #b#i" + item + ":# #t" + item + "# #k?\r\n#d您将会获得以下其中一个物品：\r\n" + text0 + "\r\n");
        } else if (status == 1) {
            kongwei = 1;
            if (im.getSpace(1) >= kongwei && im.used()) {
                var random = new java.util.Random();
                var finalchance = random.nextInt(zbDataN.length);
                var itemID = zbDataN[finalchance][0];
                var count = zbDataN[finalchance][1];
                im.gainItem(itemID, count);
                im.sendOk("#d#h ##k 我已经把 #b#i" + item + ":# #t" + item + "# #k 里的物品：\r\n#b#i" + itemID + ":# #t" + itemID + "#\r\n#k发送到您的 #r背包#k 里！\r\n#r请注意查看！ ");
                im.dispose();
            } else {
                im.sendOk("您的 #r装备栏#k 空间没有#r#e " + kongwei + " #n#k个空位！无法获得 #b#i" + item + ":# #t" + item + "# #k 里的以下物品:" + text0);
                im.dispose();
            }
        }
    }
}
/*var status = 0;
 
 function start() {
 status = -1;
 action(1, 0);
 }
 
 function action(mode, type, selection) {
 if (mode == 0) {
 im.dispose();
 return;
 } else {
 status++;
 }
 if (status == 0) {
 if (im.giveWeaponByLevel(20)) {
 im.used(1);
 }
 im.dispose();
 }
 }*/
