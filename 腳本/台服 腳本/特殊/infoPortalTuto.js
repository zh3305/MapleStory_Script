/* RED 1st impact
    Explorer tut
    Made by Daenerys
*/
var status = 0;

function action(mode, type, selection) {
	if (status == 0) {
		cm.sendNextS("透過那個縫隙好像可以看到外面.可是有鐵鍊擋著.攻擊並破壞鐵鍊吧.", 17);
		status++;
	} else {
		status = 0;
		cm.showWZEffectNew("UI/tutorial.img/22");
		cm.dispose();
	}
}