/* 
 * ×øÆï ÄÃÆÆÂØµÄ°×Âí 90Ìì
 */
var period = 90;
var mountSkillId = 10001139;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}