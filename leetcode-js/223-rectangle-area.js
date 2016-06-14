/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    const left = Math.max(A, E);
    const right = Math.max(Math.min(C, G), left);
    const bottom = Math.max(B, F);
    const top = Math.max(Math.min(D, H), bottom);
    return (C - A) * (D - B) - (right - left) * (top - bottom) + (G - E) * (H - F);
};
