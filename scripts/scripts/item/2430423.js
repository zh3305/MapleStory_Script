/* 
 * [2430329] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001018

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}