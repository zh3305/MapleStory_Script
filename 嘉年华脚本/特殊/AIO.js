/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  @Author Kent 
 */

var v1;

function start() {
    v1 = 0;
    cm.sendSimple("#L100#帽子#l#L101#脸型#l");
}

function action(mode, type, selection) {
    cm.dispose();
    cm.openShop(selection);
}
