/*  70级装备箱 */
var status;

var kongwei;
var itemss;
var text0 = " ";
var dis = 0;

var 帽子 = 1003341;
var 上衣男 = 1040184;
var 上衣女 = 1041187;
var 裤裙男 = 1060172;
var 裤裙女 = 1061196;
var 鞋子 = 1072604;

var zbData = Array(
        Array(帽子, 1, -1, 1),
        Array(1040184, 1, 0, 1),
        Array(1041187, 1, 1, 1),
        Array(1060172, 1, 0, 1),
        Array(1061196, 1, 1, 1),
        Array(鞋子, 1, -1, 1), //OK


        Array(帽子 + 1, 1, -1, 2),
        Array(1050205, 1, 0, 2),
        Array(1051249, 1, 1, 2),
        Array(鞋子 + 1, 1, -1, 2), //OK

        Array(帽子 + 2, 1, -1, 3),
        Array(1050206, 1, 0, 3),
        Array(1051250, 1, 1, 3),
        Array(鞋子 + 2, 1, -1, 3), //OK

        Array(帽子 + 3, 1, -1, 4),
        Array(1040185, 1, 0, 4),
        Array(1041188, 1, 1, 4),
        Array(1060173, 1, 0, 4),
        Array(1061197, 1, 1, 4),
        Array(鞋子 + 3, 1, -1, 4), //OK

        Array(帽子 + 4, 1, -1, 5),
        Array(1052337, 1, -1, 5),
        Array(鞋子 + 4, 1, -1, 5), //

        Array(帽子 + 4, 1, -1, 6),
        Array(1052337, 1, -1, 6),
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