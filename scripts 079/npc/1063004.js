
importPackage(net.sf.odinms.server);
importPackage(java.util);
importPackage(net.sf.odinms.client);

var slot;
var item;
var qty;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status <= 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("为了帮助更多的人管理好自己的装备,我非常的忙！");
            cm.dispose();
            return;
        }
    if (mode == 1)
            status++;
    else
            status--;
        if (status == 0) {
            cm.sendGetNumber("请输入装备的顺序数字,我将为你锁定它.\r\n#b装备锁定后装备无法交易,无法丢弃.就算帐号密码被别人知道也不怕.\r\n#r[注意:此功能只可使用与装备栏!]",1,1,100);
        } else if (status == 1) {
            slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);

cm.sendYesNo("你确定要加锁下面这件装备吗?\r\n")
        } else if (status == 2) {
           var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
cm.getChar().lockitem(slot,true)
cm.dispose();
}
    }
}  
