/* 
 * 2430297 - 坐骑 幻龙 永久
 */
var period = -1;
var mountSkillId = 80001198;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);//, true);
    im.dispose();
}