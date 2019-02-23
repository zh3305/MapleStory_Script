/* 
 * ×øÆï Íæ¾ßÌ¹¿Ë 7Ìì
 */
var period = 7;
var mountSkillId = 10001124;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}