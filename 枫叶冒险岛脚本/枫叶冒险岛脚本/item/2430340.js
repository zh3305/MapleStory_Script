/* 
 * ×øÆï ÅÜ³µ 90Ìì
 */
var period = 90;
var mountSkillId = 80001032;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}