const Typewriter = () => ({
  type: (element, text, shouldClear = true) => {
    let typedText = '',
        i         = 0,
        interval  = null;
        interval  = setInterval(() => {
          typedText += text[i];
          element.hmtl(typedText);
          i++;
          if (i === text.length) {
            clearInterval(interval);
            debugger;
            if (shouldClear) { self.clear(element); } }
        });
  },

  clear: element => {
    let text     = element.html,
        i        = element.html.length,
        interval = null;
    // check textLen value;
    // debugger;
    interval = setInterval(() => {
      text = text.substring(0, i - 1);
      element.html(text);
      i--;
      if (i <= 0) { clearInterval(interval); }
    }, 50);
  }
});

export default Typewriter;
