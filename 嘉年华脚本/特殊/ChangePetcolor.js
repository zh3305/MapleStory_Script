/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  宠物染色
 *  @Author Kent 
 */

        var status;
var temp;
var cast;
var intype;
var pets;
var str = "";
function start() {
    status = -1;
    pets = cm.getSummonedPet();
    for (var i = 0; i < pets.size(); i++) {
        if (pets.get(i) != null) {
            str += "#L" + i + "#[" + pets.get(i).getName() + "]#k\r\n";
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
    switch (status) {
        case 0:
            if (pets.size() <= 0) {
                cm.sendOk("我可以为你的宠物进行染色哟，但是我需要一些回报哟。染色是随机的哦！一次2000点卷。 \r\n#r但是你没有召唤出宠物来呀。#k.");
                cm.dispose();
            } else {
                var selStr = "我可以为你的宠物进行染色哟，但是我需要一些回报哟。染色是随机的哦！一次2000点卷。要的现在请选择你要进行染色的宠物。\r\n" + str;
                cm.sendSimple(selStr);
            }

            break;
        case 1: //4310085
            intype = selection;
            if (cm.getNX(1) < 2000) {
                cm.sendOk("请确认你有足够多的点卷.");
            } else {
                cm.changePetColor(selection);
                cm.gainNX(-2000);
                cm.sendOk("染色好啦！看看是不是你喜欢的颜色，不喜欢可以继续进行染色哟，欢迎下次再来");
            }
            cm.dispose();
            break;
        case 2:
        case 3:
            cm.dispose();
            break;
    }
}
