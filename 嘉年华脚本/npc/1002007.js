/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  
 *  NPC名称：明珠港中巴
 *  功能：传送
 *  @Author Kent 
 */

var status = 0;
var maps = Array(120000000, 102000000, 100000000, 103000000);
var show;
var sCost;
var selectedMap = -1;


function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 2) {
            cm.sendNext("如果你想移动到其他村庄, 请随时使用我们的出租车~");
            cm.safeDispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        cm.sendNext("你好~!我是#p1012000#。你想快速又安全地移动到其他村庄吗? 那么就请使用令客户百分百满意的#b#p1012000##k吧。这次我给你免费优待!我将会送你去想去的地方。");
    } else if (status == 1) {
        var job = cm.getJob();
        var selStr = "请选择目的地。#b";
        for (var i = 0; i < maps.length; i++) {
            selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
        }
        cm.sendSimple(selStr);
    } else if (status == 2) {
        cm.sendYesNo("看样子, 你好像已经没有什么事情需要在这里做了。确定要移动到 #b#m" + maps[selection] + "##k? ");
        selectedMap = selection;
    } else if (status == 3) {
        cm.warp(maps[selectedMap]);
        cm.dispose();
    }
}
