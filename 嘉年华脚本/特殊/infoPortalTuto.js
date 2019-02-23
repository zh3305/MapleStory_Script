/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：新手引导相关
 *  @Author Kent 
 */
var status = 0;

function action(mode, type, selection) {
    if (status == 0) {
        cm.sendNextS("好像可以通过那个缝隙到外面去，不过有铁链挡着。尝试打断铁链吧。", 17);
        status++;
    } else {
        status = 0;
        cm.TutInstructionalBalloon("UI/tutorial.img/22");
        cm.dispose();
    }
}
