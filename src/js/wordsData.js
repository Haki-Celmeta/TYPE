class Words {
  static currendId = 0;

  /**
   * All words array
   */
  static words = [
    'hello', 'let', 'done', 'govern', 'be', 'conversation', 'foreign', 'world', 'know', 'little',
    'big', 'small', 'fire', 'water', 'park', 'smile', 'cook', 'queue', 'stack', 'people', 'persons',
    'coordinate', 'google', 'xerox', 'expert', 'maximum', 'minimum', 'mix', 'yes', 'you', 'yacht', 'yank',
    'bug', 'knob', 'club', 'bee', 'busy', 'bus', 'about', 'pen', 'pit', 'plate', 'photo', 'pick', 'promise',
    'pure', 'private', 'powerful', 'picture', 'olive', 'ocean', 'off', 'on', 'odd', 'occur', 'obey', 'queen',
    'question', 'quick', 'quiet', 'quiz', 'quote', 'wage', 'waiter', 'waive', 'wall', 'warn', 'watch', 'we',
    'weak', 'zero', 'zoo', 'above', 'about', 'access', 'able', 'cake', 'cage', 'call', 'can', 'cap', 'candy',
    'capital', 'car', 'dad', 'danger', 'dark', 'day', 'deal', 'deaf', 'death', 'eat', 'ear', 'edge', 'face',
    'fact', 'fail', 'fake', 'fall', 'fame', 'fan', 'gain', 'gas', 'generate', 'gentle', 'get', 'garden',
    'hard', 'harm', 'if', 'image', 'idea', 'ill', 'jet', 'job', 'join', 'judge', 'juice', 'join'
  ]

  static getWord(index) {
    return this.words[index];
  }

  static getLength() {
    return this.words.length;
  }

  static getId() {
    return this.currendId;
  }

  static incrementId() {
    this.currendId += 1;
  }

  static randomWordArray(allowedWords) {
    let words = [];
    for (let i = 0; i < allowedWords; i++) {
      const index = Math.floor(Math.random() * Words.getLength());
      const word = this.getWord(index);
      words.push(word);
    }
    return words;
  }
}

export default Words;