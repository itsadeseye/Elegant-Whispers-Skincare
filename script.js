// index.html script

// Optional: Add click expand animation
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("expanded");
      });
    });

    const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const expanded = answer.style.maxHeight;

    // Collapse all answers first
    document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = null);

    // Toggle current
    if (!expanded) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

// contact.html script
const form = document.getElementById('contactForm');
    const message = document.getElementById('confirmationMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate message sending
      message.textContent = "Thanks! Your message has been sent.";
      form.reset();

      // Optional: Fade out message after a few seconds
      setTimeout(() => {
        message.textContent = "";
      }, 5000);
    });

    // chatbot script
    function toggleChatbot() {
    const window = document.getElementById('chatbot-window');
    window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
  }

  function handleChat(event) {
    if (event.key === "Enter") {
      const input = document.getElementById('chatbot-input');
      const msg = input.value.trim();
      if (!msg) return;

      const messages = document.getElementById('chatbot-messages');

      const userBubble = document.createElement('div');
      userBubble.className = 'chatbot-bubble user-msg';
      userBubble.innerText = msg;
      messages.appendChild(userBubble);

      input.value = "";
      setTimeout(() => {
        const botBubble = document.createElement('div');
        botBubble.className = 'chatbot-bubble';
        botBubble.innerText = getBotReply(msg);
        messages.appendChild(botBubble);
        messages.scrollTop = messages.scrollHeight;
      }, 600);
    }
  }

  function getBotReply(message) {
    const msg = message.toLowerCase();
    if (msg.includes("dark spot") || msg.includes("elbow")) {
      return "Yes! Our product works great on dark elbows, knees, and underarms.";
    }
    if (msg.includes("how long") || msg.includes("days")) {
      return "You’ll start seeing results in just 7 days of consistent use!";
    }
    if (msg.includes("ingredients") || msg.includes("safe")) {
      return "We use gentle, dermatologist-tested natural ingredients safe for all skin types.";
    }
    if (msg.includes("sign up") || msg.includes("assessment")) {
      return "You can sign up for a free skin assessment from the menu or homepage button!";
    }
    return "Thanks for your question! We’ll get back to you as soon as possible.";
  }


