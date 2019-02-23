/* 
 * 2430929 - 巨无霸兔子(7天权) - 双击后可以在7天内使用骑乘技能[巨无霸兔子]。 
 */
var period = 30;
var mountSkillId = 80001185;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}