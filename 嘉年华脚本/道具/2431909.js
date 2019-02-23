/*  70级武器箱 */
var status;

var kongwei;
var itemss;
var text0 = " ";
var dis = 3;
var 双头杖 = 1212082;
var 灵魂手铳 = 1222077;
var 亡命剑 = 1232077;
var 能量剑 = 1242083;
var 驯兽魔法棒 = 1252051;
var 单手剑 = 1302188;
var 单手斧 = 1312084;
var 单手钝器 = 1322118;
var 短刀 = 1332164;
var 手杖 = 1362052;
var 短杖 = 1372113;
var 长杖 = 1382138;
var 双手斧 = 1412083;
var 双手剑 = 1402125;
var 双手钝器 = 1422085;
var 枪 = 1432112;
var 矛 = 1442150;
var 弓 = 1452143;
var 弩 = 1462132;
var 拳套 = 1472155;
var 指节 = 1482116;
var 短枪 = 1492115;
var 双弩枪 = 1522034;
var 手持火炮 = 1532051;
var 武士刀 = 1542052;
var 折扇 = 1552052;
var ESP限制器 = 1262004;
var zbDataA = Array(
        Array(双手剑 + dis, 1, 11), //英雄 OK
        Array(单手剑 + dis, 1, 11), //英雄 OK
        Array(单手斧 + dis, 1, 11), //英雄 OK
        Array(双手斧 + dis, 1, 11), //英雄 OK
        Array(双手剑 + dis, 1, 12), //圣骑士 OK
        Array(单手剑 + dis, 1, 12), //圣骑士 OK
        Array(单手钝器 + dis, 1, 12), //圣骑士 OK
        Array(双手钝器 + dis, 1, 12), //圣骑士 OK
        Array(枪 + dis, 1, 13), //黑骑士
        Array(矛 + dis, 1, 13), //黑骑士 OK
        Array(长杖 + dis, 1, 21), //火毒 OK
        Array(短杖 + dis, 1, 21), //火毒 OK
        Array(长杖 + dis, 1, 22), //冰雷
        Array(短杖 + dis, 1, 22), //冰雷
        Array(长杖 + dis, 1, 23), //主教
        Array(短杖 + dis, 1, 23), //主教
        Array(弓 + dis, 1, 31), //弓箭手 OK
        Array(弩 + dis, 1, 32), //弩手 OK
        Array(拳套 + dis, 1, 41), //标飞 OK
        Array(短刀 + dis, 1, 42), //刀飞 OK
        Array(短刀 + dis, 1, 43), //暗影双刀 OK
        Array(指节 + dis, 1, 51), //拳手 OK
        Array(短枪 + dis, 1, 52), //火枪手 OK
        Array(手持火炮 + dis, 1, 53), //火炮手 OK
        Array(短枪 + dis, 1, 57)//龙的传人 OK
        );
var zbDataB = Array(
        Array(双手剑 + dis, 1, 11), //魂骑士 OK
        Array(单手剑 + dis, 1, 11), //魂骑士 OK
        Array(长杖 + dis, 1, 12), //炎术士 OK
        Array(短杖 + dis, 1, 12), //炎术士 OK
        Array(弓 + dis, 1, 13), //风灵使者 OK
        Array(拳套 + dis, 1, 14), //夜行者 OK
        Array(指节 + dis, 1, 15), //奇袭者 OK
        Array(矛 + dis, 1, 21), //战神 OK
        Array(长杖 + dis, 1, 22), //龙神 OK
        Array(短杖 + dis, 1, 2), //龙神 OK
        Array(双弩枪 + dis, 1, 23), //双弩精灵 OK
        Array(手杖 + dis, 1, 24), //幻影 OK
        Array(指节 + dis, 1, 25), //隐月 OK
        Array(双头杖 + dis, 1, 27), //夜光法师  25 30 没有武器
        Array(长杖 + dis, 1, 32), //唤灵斗师
        Array(弩 + dis, 1, 33), //豹弩游侠
        Array(短枪 + dis, 1, 35), //机械师
        Array(能量剑 + dis, 1, 36), //尖兵 25 30 没有武器
        Array(武士刀 + dis, 1, 41), //剑豪 
        Array(折扇 + dis, 1, 42), //阴阳师
        Array(单手剑 + dis, 1, 51), //米哈尔
        Array(双手剑 + dis, 1, 61), //狂龙战士
        Array(灵魂手铳 + dis, 1, 65), //爆莉萌天使  25 30 没有武器
        //Array(4001714 + dis, 1, 101), //神之子
        Array(驯兽魔法棒 + dis, 1, 112), //林之灵 30 
        Array(双手剑 + dis, 1, 131), //品克缤 OK
        Array(单手剑 + dis, 1, 131), //品克缤 OK
        Array(单手斧 + dis, 1, 131), //品克缤 OK
        Array(双手斧 + dis, 1, 131), //品克缤 OK
        Array(双手剑 + dis, 1, 131), //品克缤 OK
        Array(单手剑 + dis, 1, 131), //品克缤 OK
        Array(单手钝器 + dis, 1, 131), //品克缤 OK
        Array(双手钝器 + dis, 1, 131), //品克缤 OK
        Array(ESP限制器, 1, 142) //凯内西斯 OK
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