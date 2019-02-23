/* 
 * ×øÆï ÄİÄÈµÄÄ§·¨Õó 90Ìì
 */
var period = 90;
var mountSkillId = 20001118;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}