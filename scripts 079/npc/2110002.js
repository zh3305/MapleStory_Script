/* Cloto
 * 
 * Hidden Street : 1st Accompaniment <1st Stage> (103000800)
 ~ 2nd, 3rd, 4th (801, 802, 803)
 * Hidden Street : 1st Accompaniment <Last Stage> (103000804)
 * 
 * Kerning City Party Quest NPC 
*/
var status=0;
			
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0)
            cm.dispose();
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0){
            cm.showEffect("quest/party/clear");
//            cm.sendOk("The previous coder is now shamed with this message.");
            cm.dispose();
        }
    }
}