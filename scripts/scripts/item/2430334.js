/* 
 * 坐骑 老虎只是传说 90天
 */
var period = 90;
var mountSkillId = 20011034;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}