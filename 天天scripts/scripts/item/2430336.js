/* 
 * 坐骑 莱格斯的豺犬 90天
 */
var period = 90;
var mountSkillId = 10001136;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}