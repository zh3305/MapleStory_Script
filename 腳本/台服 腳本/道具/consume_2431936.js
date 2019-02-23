var status = -1;

function start() {
    var menu = im.getSkillMenu(30, im.getJob());
    if (menu == "") {
        im.sendOkS("你還沒學4轉技能,或是沒有現在此精通秘笈可以套用的技能.請確認一下再使用.\r\n\r\n#r#L0# #fn字體##fs14##e取消使用精通秘笈 .#n#fs##fn##l", 4, 2080009);
        im.dispose();
    } else {
        im.sendSimpleS("你可以提升的技能清單如下.\r\n" + menu + "\r\n\r\n#r#L0# #fn字體##fs14##e取消使用精通秘笈 .#n#fs##fn##l", 5, 2080009);
    }
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (selection > 0 && im.canUseSkillBook(selection, 30) && im.haveItem(2431936)) {
            im.gainItem(2431936, -1);
            im.useSkillBook(selection, 30);
        } else if (selection != 0) {
            im.sendOkS("目前想使用精通秘笈的話,你選擇的技能等級還太低.請你提升該技能到等級15以上吧.", 4, 2080009);
        }
        im.dispose();
    } else {
        im.dispose();
    }
}