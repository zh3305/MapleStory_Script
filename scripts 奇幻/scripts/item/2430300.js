/* 
 * ×øÆï Ä§·¨É¨Öã 90
 */
var period = 90;
var mountSkillId = 10001149;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}