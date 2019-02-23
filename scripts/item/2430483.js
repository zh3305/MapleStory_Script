/* 金猪梦箱子 */

var status;

var kongwei = 1;// 装备栏 需要的空间位置
var item = 2430483;// 所使用的物品 ID
var items;
var itemss;
var itemid;
var viplv;

var item1 = 3700012;
var item2 = 1142263;

var lvl;
var names;
var text0 = " ";
var text1 = " ";

var zbData = Array(
//物品ID，数量，要求等级，VIP等级


//"真*觉醒的冒险之心(战士)
1122122, 1, 0, 0,
//"真*觉醒的冒险之心(魔法师)"
1122123, 1, 0, 0,
//真*觉醒的冒险之心(弓箭手)"
1122124, 1, 0, 0,
//真*觉醒的冒险之心(飞侠)
1122125, 1, 0, 0,
//真*觉醒的冒险之心(海盗)"
1122126, 1, 0, 0,

//"真·觉醒冒险之心专用潜能力卷轴
2049405, 1, 0, 0,

//"觉醒的冒险之心(战士)
1122143, 1, 0, 0,
//"觉醒的冒险之心(魔法师)"
1122144, 1, 0, 0,
//觉醒的冒险之心(弓箭手)"
1122145, 1, 0, 0,
//觉醒的冒险之心(飞侠)
1122146, 1, 0, 0,
//觉醒的冒险之心(海盗)"
1122147, 1, 0, 0,
//老公老婆戒指LV49"
1112494, 1, 0, 0,


//"旭日吊坠"
1122104, 1, 0, 0);

var itemid = 1302078;

function start() {
    status = -1;
    action(1, 0, 0);
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
                    viplv = im.getVip();
                    names = im.getVipname();
                    lvs = im.getPlayer().getLevel();

                    for (var i = 0; i <= zbData.length; i++)
                    if (i % 4 == 0 && (zbData[i + 2] <= lvs)) {
                        text0 += "\r\n#b#L" + zbData[i] + "##i" + zbData[i] + ":# #t" + zbData[i] + "##l";
                    }

       im.sendSimple("#r" + im.getVipname() + " #k 您可以选择获得 #b#i" + item + ":# #t" + item + "# #k\r\n#d里面以下的任何一件物品：\r\n" + text0 + "\r\n");



        } else if (status == 1) {

         if (im.getSpace(1) >= kongwei) {
               itemid = selection;
               items = selection;
               text1 = "#b#i" + items + ":# #t" + items + "# #k";
                for (var ii = 0; ii <= zbData.length; ii++)
                    if (ii % 4 == 0 && (zbData[ii] == items)) {
                         itemss = zbData[ii + 1]
                       // im.gainItem(items,itemss);
                    }
                   //     im.gainItem(items,itemss);
               if (im.getChar().getAccountID() > 1) {
                   im.gainItem(item, -1);
                 }
                        im.gainItem(itemid, itemss);
               im.sendOk("#d" + names + " #k ，打开物品#b#i" + item + ":# #t" + item + "# #k成功！\r\n我已经把 #b#i" + item + ":# #t" + item + "# #k 里的以下物品：\r\n\r\n" + text1 + "\r\n\r\n#k发送到您的 #r背包#k 里！\r\n#r请注意查看！ " + items);
                im.dispose();

            } else {
                im.sendOk("您的 #r装备栏#k 空间没有#r#e " + kongwei + " #n#k个空位！无法获得 #b#i" + item + ":# #t" + item + "# #k 里的以下物品:" + text0);
                im.dispose();
            }


        }
    }
}





/*

                for (var ii = 0; ii <= zbData.length; ii++)
                    if (ii % 4 == 0 && (items = zbData[ii]) && (itemss = zbData[ii + 1])) {
                        im.gainItem(items,itemss);
                    }
*/
