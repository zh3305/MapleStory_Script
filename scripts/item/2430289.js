var mds;
var kitms;
var mdss;

/* 8周年礼物盒 调适脚本 */

var kongwei = 1;// 需要的空间位置
var item = 2430289;// 所使用的物品 ID


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

               mds = "#r ┈┈━═☆#i4251202##r 冒险岛8周年盒子 #i4251202# #r☆═━┈┈ \r\n";

               if ((im.getSpace(1) >= 1)&&(im.getSpace(2) >= 1)&&(im.getSpace(3) >= 1)&&(im.getSpace(4) >= 1)&&(im.getSpace(5) >= 1)) {

               kitms =  im.MaplwingSJTP(" 8周年盒子 ");

               mdss = mds + "\r\n恭喜您获得了以下物品：\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\n目前您的贡献点余额为：#e#r" + im.getMaplewing("maple") + "#n\r\n ";
              im.gainItem(2430289, -1);


              } else {

              mdss = mds + "\r\n#g获取礼物失败\r\n请将您的所有背包栏目留出一格空位以上哦！";
 
              }

              im.sendOk(mdss);
              im.dispose();

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

function start() {



               mds = "#r ┈┈━═☆#i4251202##r 冒险岛8周年盒子 #i4251202# #r☆═━┈┈ \r\n";

               if ((im.getSpace(1) >= 1)&&(im.getSpace(2) >= 1)&&(im.getSpace(3) >= 1)&&(im.getSpace(4) >= 1)&&(im.getSpace(5) >= 1)) {

               kitms =  im.MaplwingSJTP(" 冒险岛8周年盒子 ");

               mdss = mds + "\r\n恭喜您获得了以下物品：\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\n目前您的贡献点余额为：#e#r" + im.getMaplewing("maple") + "#n\r\n ";
              im.gainItem(2430289, -1);


              } else {

              mdss = mds + "\r\n#g获取礼物失败\r\n请将您的所有背包栏目留出一格空位以上哦！";
 
              }

              im.sendOk(mdss);
              im.dispose();


}

*/