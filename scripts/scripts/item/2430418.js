/* 
 * [2430418] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001060;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}