/* 
 * [2430363] - []½»»»È¯
 */
var period = 10;
var mountSkillId = 80001019

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}