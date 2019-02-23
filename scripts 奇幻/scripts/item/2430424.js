/* 
 * [2430424] - []½»»»È¯
 */
var period = 7;
var mountSkillId = 80001003;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}