/* 
 * 坐骑 打豆豆机器人 90天
 */
var period = 90;
var mountSkillId = 10001130;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}