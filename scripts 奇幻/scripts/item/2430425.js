/* 
 * [2430425] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001010

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}