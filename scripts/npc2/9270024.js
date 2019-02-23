/* 	Kelvin
	SingaPore VIP Face changer
*/
var status = -1;
var beauty = 0;
var mface = Array(20109, 20110, 20106, 20108, 20112, 20013);
var fface = Array(21021, 21009, 21010, 21006, 21008, 21012);
var facenew = Array();

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        facenew = Array();
        if (cm.getChar().getGender() == 0) {
            for (var i = 0; i < mface.length; i++) {
                facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
            }
        }
        if (cm.getChar().getGender() == 1) {
            for (var i = 0; i < fface.length; i++) {
                facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
            }
        }
        cm.sendStyle("咱们看看…我能彻底改变你的容貌。不想尝试一下吗？有#b万能会员卡#k的话，你就可以得到自己喜欢的容貌。花点时间选择一下自己偏好的面容吧…", facenew, 5152057);
    } else if (status == 1) {
        if (cm.setAvatar(5152038, facenew[selection]) == 1) {
            cm.sendOk("好了,你的朋友们一定认不出你了!");
        } else {
            cm.sendOk("嗯…你似乎没有我们这里需要的特定会员卡…很抱歉，但没有会员卡我们就无法为你做整形手术。");
        }
        cm.safeDispose();
    }
}