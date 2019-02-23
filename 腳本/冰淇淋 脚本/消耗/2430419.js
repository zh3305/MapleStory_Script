/* 
 * ×øÆï ÎÞ¹¼Ë®Å£ 7Ìì
 */
var period = 7;
var mountSkillId = 10001123;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}