/* Dawnveil
    Cab
	Regular Cab in Victoria
    Made by Daenerys
*/
var status = 0;
var maps = Array(100000000, 101000000, 102000000, 103000000, 104000000, 105000000, 120000100);
var show;
var sCost;
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 2 && mode == 0) {
	cm.sendNext("這村莊也有很多東西可以逛喔，若想要去其它村莊或白色波浪碼頭的話請隨時利用我們計程車喔~");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("您好~！#p1012000#。想要往其他村莊安全又快速的移動嗎？如果是這樣，為了優先考量滿足顧客，請使用#b#p1012000##k。特別免費！親切的送你到想要到達的地方。");
    } else if (status == 1) {
	    var selStr = "請選擇目的地.#b";
	    for (var i = 0; i < maps.length; i++) {
		if (maps[i] != cm.getMapId()) {
		selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
		}
	    }
	cm.sendSimple(selStr);
    } else if (status == 2) {
	cm.sendYesNo("這地方應該沒有什麼可以參觀的了。確定要移動到#b#m" + maps[selection] + "##k村子嗎?價格為 #b0楓幣 #k。");
	selectedMap = selection;
    } else if (status == 3) {
	cm.warp(maps[selectedMap]);
	cm.dispose();
    }
}