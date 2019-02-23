/* 
 * ×øÆï Èü³µ 30Ìì
 */
var period = 30;
var mountSkillId = 10001033 ;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}