function saveScore(initials, topScore) {
  localStorage.setItem("initials", initials);
  localStorage.setItem("topScore", topScore);
}
function getScore() {
    const initials = localStorage.getItem('initials') || '';
    const topScore = localStorage.getItem('topScore') || 0;
    return { initials, topScore };
  }