/* Author: aaroncsn (MapleSea Like)(Incomplete- Needs skin id)
	NPC Name: 		Laila
	Map(s): 		The Burning Road: Ariant(2600000000)
	Description: 	Skin Care Specialist
*/

var status = 0;
var skin = Array(0, 1, 2, 3, 4);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status >= 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            cm.sendNext("呵呵～你好，欢迎光临阿里安特护肤中心。这里是女王经常光顾的高级护肤中心。只要有#b万能会员卡#k的话，你随时可以到这里来接受皮肤护理。你想试试看吗？");
        } else if (status == 1) {
            cm.sendStyle("用我们护肤中心开放的机械，可以查看护肤后的效果。你想要什么样的皮肤呢？请挑选一下～", skin,5153015);
        } else if (status == 2) {
            cm.dispose();
            if (cm.haveItem(5153007) == true) {
                cm.gainItem(5153007, -1);
                cm.setSkin(skin[selection]);
                cm.sendOk("Enjoy your new and improved skin!");
            } else {
                cm.sendNext("Hmmm... I don't think you have our Skin Care coupon with you. Without it, I can't give you the treatment");
            }
        }
    }
}