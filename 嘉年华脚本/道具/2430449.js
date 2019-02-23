/*  40级装备箱 */
var status;

var kongwei;
var itemss;
var text0 = " ";
var dis = 0;

var 帽子 = 1003326;
var 上衣男 = 1040177;//1040169
var 上衣女 = 1041180;//1040169
var 裤裙男 = 1060165;
var 裤裙女 = 1061189;
var 鞋子 = 1072589;

var zbData = Array(
        Array(帽子, 1, -1, 1),
        Array(上衣男, 1, 0, 1),
        Array(上衣女, 1, 1, 1),
        Array(裤裙男, 1, 0, 1),
        Array(裤裙女, 1, 1, 1),
        Array(鞋子, 1, -1, 1), //


        Array(帽子 + 1, 1, -1, 2),
        Array(1050200, 1, 0, 2),
        Array(1051244, 1, 1, 2),
        Array(鞋子 + 1, 1, -1, 2), //

        Array(帽子 + 2, 1, -1, 3),
        Array(1040178, 1, 0, 3),
        Array(1041181, 1, 1, 3),
        Array(1060166, 1, 0, 3),
        Array(1061190, 1, 1, 3),
        Array(鞋子 + 2, 1, -1, 3), //

        Array(帽子 + 3, 1, -1, 4),
        Array(1040179, 1, 0, 4),
        Array(1041182, 1, 1, 4),
        Array(1060167, 1, 0, 4),
        Array(1061191, 1, 1, 4),
        Array(鞋子 + 3, 1, -1, 4), //

        Array(帽子 + 4, 1, -1, 5),
        Array(1052395, 1, -1, 5),
        Array(鞋子 + 4, 1, -1, 5), //

        Array(帽子 + 4, 1, -1, 6),
        Array(1052395, 1, -1, 6),
        Array(鞋子 + 4, 1, -1, 6)
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
            var jobGrade = parseInt(im.getTrueJobGrade());
            for (var i = 0; i < zbData.length; i++) {
                if (zbData[i][3] == jobGrade && (zbData[i][2] == im.getPlayerStat("GENDER") || zbData[i][2] == -1)) {
                    zbDataN.push(zbData[i]);
                    text0 += "\r\n#b#i" + zbData[i][0] + ":# #t" + zbData[i][0] + "#";
                }
            }
            im.sendYesNo("#r#d#h ##k您是否要打开 #b#i" + item + ":# #t" + item + "# #k?\r\n#d您将会获得以下物品：\r\n" + text0 + "\r\n");
        } else if (status == 1) {
            kongwei = zbDataN.length;
            if (im.getSpace(1) >= kongwei && im.used()) {
                for (var ii = 0; ii < zbDataN.length; ii++) {
                    var itemID = zbDataN[ii][0];
                    var count = zbDataN[ii][1];
                    im.gainItem(itemID, count);
                }
                im.sendOk("#d#h ##k 我已经把 #b#i" + item + ":# #t" + item + "# #k 里的物品：\r\n" + text0 + "#\r\n#k发送到您的 #r背包#k 里！\r\n#r请注意查看！ ");
                im.dispose();
            } else {
                im.sendOk("您的 #r装备栏#k 空间没有#r#e " + kongwei + " #n#k个空位！无法获得 #b#i" + item + ":# #t" + item + "# #k 里的以下物品:" + text0);
                im.dispose();
            }
        }
    }
}