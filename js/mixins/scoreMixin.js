export default function(score=100) {
  return function(SuperClass) {
    return class extends SuperClass {
      get score() {
        return score;
      }
    }
  }
}
