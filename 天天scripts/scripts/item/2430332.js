/* 
 * ×øÆï Íæ¾ßÄ¾Âí 90Ìì
 */
var period = 90;
var mountSkillId = 30001025;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}