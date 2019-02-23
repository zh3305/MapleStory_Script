var status = 0;
var pet = null;
var theitems = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        var inv = im.getInventory(5);
        var pets = im.getPlayer().getPets(); //includes non-summon
        for (var i = 0; i <= inv.getSlotLimit(); i++) {
            var it = inv.getItem(i);
            if (it != null && it.getItemId() >= 5000000 && it.getItemId() < 5010000 && it.getExpiration() >= -1 && it.getExpiration() < im.getCurrentTime()) {
                theitems.push(it);
            }
        }
        if (theitems.length <= 0) {
            im.sendOk("你没有失去魔法的宠物.");
            im.dispose();
        } else {
            var selStr = "你想将什么宠物恢复到原来状态呢？请选择想要复原的宠物……";
            im.sendPetRevive(selStr, theitems);
        }
    } else if (status == 1) {
        if (theitems.length <= 0) {
            im.sendOk("你没有过期的宠物.");
        } else if (im.used(1)) {
            im.getPlayer().getPetByUniqueId(selection).setExpiration(im.getCurrentTime() + (45 * 24 * 60 * 60 * 1000));
            im.updatePet(im.getPlayer().getPetByUniqueId(selection));
            im.showQuestMsg("由于专属生命水的神奇力量，宠物又恢复了生机。");
        } else {
            im.sendOk("发生未知错误");
        }
        im.dispose();
    }
}
