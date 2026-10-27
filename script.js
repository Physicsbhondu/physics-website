function checkAnswer(button, isCorrect) {
  const message = document.getElementById("answer-message");

  if (isCorrect) {
    message.textContent = "সঠিক উত্তর! বেগের SI একক হলো মিটার/সেকেন্ড।";
    message.style.color = "green";
    button.style.background = "#dcfce7";
  } else {
    message.textContent = "উত্তরটি সঠিক নয়। আবার চেষ্টা করো।";
    message.style.color = "crimson";
    button.style.background = "#fee2e2";
  }
}

function showMessage(chapterName) {
  alert(chapterName + " এর প্রশ্নগুলো শীঘ্রই যোগ করা হবে।");
}

function checkSecondAnswer(button, isCorrect) {
  const message = document.getElementById("second-answer-message");

  if (isCorrect) {
    message.textContent =
      "সঠিক উত্তর! দূরত্ব = বেগ × সময় = ২০ × ৫ = ১০০ মিটার।";
    message.style.color = "green";
    button.style.background = "#dcfce7";
  } else {
    message.textContent =
      "উত্তরটি সঠিক নয়। সূত্রটি মনে রাখো: দূরত্ব = বেগ × সময়।";
    message.style.color = "crimson";
    button.style.background = "#fee2e2";
  }
}