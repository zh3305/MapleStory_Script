/* Dawnveil
 PvP(enis)
 Maximus
 Made by Daenerys
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendOk("大亂鬥的入場方式已變更了。透過次元之門的傳點就可移動到戰鬥廣場來入場。快去看看新的大亂鬥  #b大激鬥#k");
    } else if (status == 1) {
        cm.dispose();
    }
}	