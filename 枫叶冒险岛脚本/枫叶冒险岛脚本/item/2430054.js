/* 
 * ×øÆï ÄÐÄÐ»ú³µ 30Ìì
 */
var period = 30;
var mountSkillId = 80001005;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}