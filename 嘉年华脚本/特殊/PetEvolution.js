/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：宠物进化
 *  @Author Kent 
 */
var Pet;
var status = -1;
var select = -1;
var str = "";

function start() {

    Pet = cm.getChar().getCanevlPets();
    if (Pet != null) {
        for (var i = 0; i < Pet.size(); i++) {
            str += "#L" + i + "#" + Pet.get(i).getName() + "#k\r\n";
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
        cm.sendNext("你好，我是迦尔努斯宠物专家。你听说过宠物进化吗？");
    } else if (status == 1) {
        cm.sendYesNo("如果你的宠物达到了15级,那么就可以进化哟,那么你想让你的宠物进化么?");
    } else if (status == 2) {
        if (Pet.size() == 0) {
            cm.sendOk("抱歉,你没有可以进化的宠物!!");
            cm.dispose();
        } else {
            cm.sendSimple("请选择想进化的宠物。\r\n" + str);
        }
    } else if (status == 3) {
        if (cm.getItemQuantity(5380000) > 0) {
            cm.getChar().Petevolution(Pet.get(selection));
            cm.removeItem(5380000);
            cm.sendOk("您的宠物[" + Pet.get(selection).getName() + "]已经成功进化!!");
        } else {
            cm.sendOk("抱歉,你没有进化之石,请移动到商场进行购买!!");
        }
        cm.dispose();
    } else {
        cm.dispose();
    }

}

