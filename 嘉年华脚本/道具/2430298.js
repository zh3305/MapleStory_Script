/* 
 * ×øÆï °µ¹âÁú 90Ìì
 */
var period = 90;
var mountSkillId = 10001148;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}