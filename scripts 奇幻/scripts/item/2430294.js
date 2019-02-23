/* 
 * ×øÆï ·É´¬ 90Ìì
 */
var period = 90;
var mountSkillId = 10001146;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}