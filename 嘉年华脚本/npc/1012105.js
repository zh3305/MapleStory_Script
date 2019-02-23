var status = -1;
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13);
var isSecond = false;
var isAngel;
function start() {
    isAngel = cm.getBeginner() == 6001;
    if (isAngel) {
        cm.sendChoiceAngle();
        return;
    } else {
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {

    if (mode == 0) {
        cm.dispose();
        return;
    } else if (mode == 1) {
        status++;
    } else {
        status--;
    }

    switch (status) {
        case 0:
            if (isAngel) {
                isSecond = selection != 0;
            }
            cm.sendNext("你好！欢迎光临射手村护肤中心。你想获得和我一样健康紧绷的皮肤吗？只要有#b万能护肤券#k的话，我就可以按照你的要求为你护理皮肤。你想尝试一下吗？");
            break;
        case 1:
            cm.askAvatar("用我们护肤中心开放的机械，可以查看护肤后的效果。你想要什么样的皮肤呢？请挑选一下～", skin, 5153015, isSecond);
            break;
        case 2:
            if (cm.setAvatar(5153015, skin[selection], isSecond) == 1) {
                cm.sendOk("完成了,让朋友们赞叹你的新肤色吧!");
            } else {
                cm.sendOk("嗯……你好像没有万能护肤券啊。对不起，没有万能护肤券的话，我就不能帮你护理皮肤。");
            }
            cm.dispose();
        default:
            cm.dispose();
            break;
    }
}