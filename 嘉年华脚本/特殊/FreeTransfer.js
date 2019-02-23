/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：自由转职
 *  @Author Kent 
 */
var cashitem;
var status = -1;
var select = -1;
var isok;
var str = "";
function start() {
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
        if (cm.getPQLog("FreeTransfer") == 0) {
            cm.sendYesNo("自由转职一天只能一次,你是否现在就要进行选择？");
        } else {
            cm.sendOk("你今天已经使用自由转职过了.请明天再试!");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.FreeTransfer();
        cm.dispose();
    } else {
        cm.dispose();
    }
}

