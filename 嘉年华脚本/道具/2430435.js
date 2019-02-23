/* 
 * ×øÆï ¾ŞÎŞ°ÔÍÃ×Ó 7Ìì
 */
var period = 7;
var mountSkillId = 10001096;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}