/* 
 * [2430432] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001005;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}