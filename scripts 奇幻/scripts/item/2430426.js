/* 
 * [2430426] - [莱格斯的豺犬]交换券
 */
var period = 7;
var mountSkillId = 80001319;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}