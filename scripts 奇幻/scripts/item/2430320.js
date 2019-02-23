/* 
 * 2430318 - ×øÆï Ð¡¹ê¹ê 90Ìì
 */
var period = 90;
var mountSkillId = 10001122;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}