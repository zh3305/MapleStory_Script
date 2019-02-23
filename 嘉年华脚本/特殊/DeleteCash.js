/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  点装回收
 *  @Author Kent 
 */

var cashitem;
var status = -1;
var select = -1;
var isok;
var str = "";
function start() {
    cashitem = cm.getCashItemlist();
    if (cashitem != null) {
        for (var i = 0; i < cashitem.size(); i++) {
            str += "#L" + i + "##i" + cashitem.get(i).getItemId() + "##t" + cashitem.get(i).getItemId() + "##k\r\n";
        }
    }
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        if (cashitem == null) {
            cm.sendOk("你没有需要回收的衣服呀！");
            cm.dispose();
        }
        cm.sendYesNo("衣服收集箱。好像可以把不想穿的衣服丢在里面。有衣服要丢掉吗？");
    } else if (status == 1) {
        cm.sendSimple("请选择想要丢弃的衣服……丢弃的衣服将无法找回。如果有多件相同的衣服，会最先丢掉背包最前面的东西。\r\n" + str);
    } else if (status == 2) {
        select = selection;
        isok = cm.removeItem(cashitem.get(select).getItemId());
        if (isok) {
            cm.sendOk("该衣服已经放入衣服收集箱！");
        } else {
            cm.sendOk("删除失败，请报告管理员。");
        }
        cm.dispose();

    } else {
        cm.dispose();
    }
}

