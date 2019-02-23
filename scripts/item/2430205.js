/* 特殊新年礼物 */

var status;

var items;
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
                   //hasEquipped(itemid) 
              if (im.getPlayer().haveItem(itemid) >= 1) {
                 im.sendSimple("所查看 装备 物品ID为：\r\n  " + itemid);
                 im.dispose();
                 } else {
                 im.sendSimple("  不存在    所查看 装备 物品ID为：\r\n  " + itemid);
                 im.dispose();
                }

            //items = cm.itemQuantity(1402096) >= 1;

/*
            var avail = "";
            for (var i = -1; i > -199; i--) {
                if (im.getInventory( - 1).getItem(i) != null) {

           // items = im.getInventory( - 1).getItem(i).getItemId();

                  //  items += "#L" + Math.abs(i) + "##t" + im.getInventory( - 1).getItem(i).getItemId() + "##l\r\n";

                }
               // slot.push(i);
            }
*/
/*

            if (im.getPlayerStat("LVL") < 0) {
                im.playerMessage("等级小于0级无法使用。");
                im.dispose();
            } else {
                im.sendSimple("所查看 装备 物品ID为：\r\n  " + items);

                //im.sendSimple("你拥有#b#i2430466:##t2430466##k ，你想要兑换成#b#i1662006:##t1662006##k和#b#i1672008:##t1672008##k么?#b\r\n#L0#我要兑换#l\r\n#L1#结束对话#l");
            }
*/







        } else if (status == 1) {
            switch (selection) {
            case 0:
                im.gainItem(1662006,1);
                im.gainItem(1672008,1);
                im.gainItem(2430466,-1);
                im.dispose(); 
                break;
            case 1:
                im.dispose(); 
                break;
            case 2:
                im.warp(102000000, 0);
                break;
            case 3:
                im.warp(103000000, 0);
                break;
            }
            im.dispose();
        }
    }
}