class Calculate {
  static wpm(words, time) {
    return Math.floor(words / (time / 60));
  }
}

export default Calculate