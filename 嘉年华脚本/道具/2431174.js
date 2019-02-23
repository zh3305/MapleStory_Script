/*

 脚本功能：荣誉勋章 双击可以获得声望的荣誉勋章
 
 */

function start() {
    im.gainItem(2431174, -1);
    im.getPlayer().gainHonorExp(Math.floor(Math.random() * 1000) + 100);
    //im.worldMessage(0x18, "『内在能力』 : 恭喜 " + im.getChar().getName() + " 使用 <荣誉勋章> 成功提高了声望.");
    im.dispose();
}}