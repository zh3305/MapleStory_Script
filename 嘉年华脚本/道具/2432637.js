/*
    Made by XiaoBin and Kent
*/
var status = -1;

function start() {
    var getCustomData = im.getCustomData(7291);
    var getDamageHpCustomData = im.getDamageHpCustomData();
    if (getCustomData == getDamageHpCustomData) {
        im.topMsg("无法重复使用相同伤害皮肤道具");
        im.enableActions();
        im.dispose();
    } else {
        im.topMsg("使用伤害皮肤道具成功。");
        im.ShowDamageHp();
        im.enableActions();
        im.DeleteItem();
        im.enableActions();
        im.dispose();
    }
}
