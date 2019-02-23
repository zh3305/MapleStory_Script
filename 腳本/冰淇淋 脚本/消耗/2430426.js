/* 
 * 2430426 - 莱格斯的豺犬7天使用券
 */
var period = 7;
var mountSkillId = 80001118;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period,true);
    im.dispose();
}