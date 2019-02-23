/* RED 1st impact
 Maple Leaf
 Made by Daenerys
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendNextS("這楓葉是什麼? 這麼看來在楓之島上有巨大的楓樹吧. 這楓葉是一路跟著我到這的嗎?", 17);
    } else if (status == 1) {
        cm.sendNextPrevS("這個也算是紀念，我會好好保存的. 夾在#b 冒險之書#k中間就不會變皺了.", 17);
    } else if (status == 2) {
        cm.sendNextPrevS("點選鍵盤設定鈕設定劇情書熱鍵後,打開書櫃確認#e#b'冒險之書'#k#n吧.", 17);
    } else if (status == 3) {
        cm.topMsg("獲得了冒險之書.");
        cm.openUI(191);
        cm.dispose();
    }
}