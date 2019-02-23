/* RED 1st impact
    Sugar (Maple Return skill)
    Made by Daenerys
*/

var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
        cm.sendNext("Having fun?");
		cm.dispose();
    }
}