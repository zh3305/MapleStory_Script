/* 
 * ×øÆï ¸ÖÌú±äĞÎÏÀ 7Ìì
 */
var period = 7;
var mountSkillId = 10001053;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period, true);
    im.dispose();
}