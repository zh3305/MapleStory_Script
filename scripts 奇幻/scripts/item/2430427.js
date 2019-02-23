/* 
 * [2430337] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001015

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}