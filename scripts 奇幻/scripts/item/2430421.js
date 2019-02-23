/* 
 * 坐骑 维京战车 7天
 */
var period = 7;
var mountSkillId = 10001129;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}