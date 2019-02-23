/* 	Xan
	Lian Hua Hua Skin Care
*/
var status = -1;
var skin = [0, 1, 2, 3, 4, 9];

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendNext("噢，你好啊！欢迎光临“莲花花护肤中心”！你想让自己的皮肤变得跟我一样，紧致、健康吗？如果有#b万能会员卡#k的话，我们就能帮你打理好，让你拥有自己梦寐以求的皮肤～！");
    } else if (status == 1) {
        cm.askAvatar("我们这里专门的机器可以让你提前看到自己护理后的样子。你想要做什么样的皮肤护理？请选择…", skin, 5153015);
    } else if (status == 2) {
        if (cm.setRandomAvatar(5153015, skin) == 1) {
            cm.sendOk("完成了,让朋友们赞叹你的新肤色吧!");
        } else {
            cm.sendOk("似乎你没有护理会员卡。抱歉，但我们无法为你提供服务。");
        }
        cm.safeDispose();
    }
}