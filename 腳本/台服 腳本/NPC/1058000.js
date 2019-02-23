/* 
 Made by dismal
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0 && !cm.haveItem(4033178)) {
        cm.gainItem(4033178, 1);
        cm.sendOk("（貓頭鷹心不甘情不願的交出一個證明，並揮舞著翅膀彷彿叫人走開...）");
        cm.dispose();
    } else {
        cm.playerMessage(5, "從貓頭鷹身上沒有可取得的東西了。");
        cm.dispose();
    }
}