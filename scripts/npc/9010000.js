var status = -1;
var items = new Array(2290246, 2290247, 2290244, 2290131, 2290135, 2290129);
var selector;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
if(cm.getMapId() == 910000000){
cm.dispose();
cm.openNpc(9010000,2);
} else {
        cm.sendSimple("您好。在冒险岛旅行的这段日子快乐吗？\r\n\r\n#b#L0# 结束对话.#l\r\n#L1# 可以交换无法使用的能手册.#l");
    } else if (status == 1) {
        if (selection == 0) {
            cm.sendOk("我一直努力着给大家带来最好的服务，如果你旅行累了，请来找我吧。");
            cm.dispose();
        } else if (selection == 1) {
            selStr = "您好 #b#h0##k, 更新后无法使用的能手册，可以换为可使用的能手册。你拿来了什么能手册呢？\r\n#b";
            for (var i = 0; i < items.length; i++) {
                selStr += "\r\n#L" + items[i] + "# #t" + items[i] + "##l";
            }
            cm.sendSimple(selStr);
        }
}
    } else if (status == 2) {
        cm.sendOk("本技能官方上限已改为20,技能书无法使用,请丢弃.");
        cm.dispose();
    }
}
