/* 
 * [2430206] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001009

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}