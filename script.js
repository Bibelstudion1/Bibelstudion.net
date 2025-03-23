// JavaScript för Bibelstudion


// Funktion för att hantera popup-fönster för profilikonen
function togglePopup() {
    const popupMenu = document.getElementById("popupMenu");
    popupMenu.style.display = popupMenu.style.display === "block" ? "none" : "block";
}


// Funktion för att hantera navigeringslänkar (smidig scroll)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetID = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Hero-knapp interaktion
const heroButton = document.querySelector('#hero .btn-primary');
if (heroButton) {
    heroButton.addEventListener('click', () => {
        alert("Välkommen till Bibelstudion! Utforska mer nedan.");
    });
}


// Produktgalleri: lägg till hover-effekter
const productItems = document.querySelectorAll('.product-gallery div');
productItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});


// Reorder-form: Hantering av formulärinlämning
const reorderForm = document.querySelector('.reorder-form');
if (reorderForm) {
    reorderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert("Din beställning har tagits emot! Tack för ditt stöd.");
    });
}


// Popup för användarsektion
const profileIcon = document.querySelector('.profile-icon .icon');
if (profileIcon) {
    profileIcon.addEventListener('click', togglePopup);
}


// Stäng-popup-knapp
const closeButton = document.querySelector('.popup-menu .close-btn');
if (closeButton) {
    closeButton.addEventListener('click', togglePopup);
}
function searchContent() {
    const query = document.getElementById('search').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Tömmer gamla resultat om de finns


    if (!query) {
        resultsContainer.innerHTML = '<p>Vänligen skriv in en sökterm.</p>';
        return;
    }


    // Hitta relevanta resultat genom att söka igenom alla textinnehåll på sidan
    const allElements = document.body.getElementsByTagName('*');
    const results = [];


    for (let element of allElements) {
        const elementText = element.innerText.toLowerCase();


        // Kollar om elementets text innehåller sökterm
        if (elementText.includes(query)) {
            // Om det finns en URL i elementet (t.ex. i länkar), fånga upp den
            let url = '';
            if (element.tagName === 'A' && element.href) {
                url = element.href;
            } else {
                url = window.location.href + '#' + element.id; // Om det inte finns någon länk, skapa en länk till elementets ID (om det finns)
            }


            // Sparar elementet som innehåller sökterm
            results.push({
                text: elementText,
                url: url
            });
        }
    }


    // Om vi har några resultat
    if (results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.url; // Länken leder till den relevanta platsen
            a.textContent = result.text.substring(0, 100) + '...'; // Visar de första 100 tecknen
            li.appendChild(a);
            ul.appendChild(li);
        });
        resultsContainer.appendChild(ul);
    } else {
        resultsContainer.innerHTML = '<p>Inga relevanta resultat hittades.</p>';
    }
}
document.getElementById('accept-btn').addEventListener('click', function () {
    var banner = document.getElementById('cookie-banner');
    banner.style.display = 'none'; // Döljer bannern
});
// DOM Elements
const menuToggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const chatboxToggleButton = document.querySelector('.chatbox-toggle');
const chatbox = document.querySelector('.chatbox');
const searchInput = document.querySelector('.search-bar input');




// Konfiguration för mörkt läge
const darkModeToggleButton = document.querySelector('.dark-mode-toggle');
const body = document.body;




// 1. Toggla meny
function toggleMenu() {
    menu.classList.toggle('open');
    menuToggleButton.classList.toggle('active');
}




// 2. Toggla chattbox
function toggleChatbox() {
    chatbox.classList.toggle('open');
    chatboxToggleButton.classList.toggle('active');
}
// Funktion för att stänga reklamen
function closeAd() {
    document.getElementById('ad-container').classList.add('hidden');
}


// Spela upp videon direkt när sidan laddas
window.onload = function () {
    const iframe = document.getElementById('tiktok-ad');
    iframe.src = iframe.src + "?autoplay=1";
}
// Hämta formuläret
const orderForm = document.getElementById("order-form");


// Lyssna efter formulärets inlämning
orderForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Förhindra sidomladdning vid inlämning


    // Hämta formulärdata
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;


    // Validera formulärfälten
    if (!name || !email || !product || !quantity) {
        alert("Vänligen fyll i alla fält innan du skickar in.");
        return;
    }


    if (!validateEmail(email)) {
        alert("Vänligen ange en giltig e-postadress.");
        return;
    }


    if (quantity <= 0) {
        alert("Antal måste vara minst 1.");
        return;
    }


    // Skicka data (du kan här lägga till en AJAX/Fetch-förfrågan för att skicka till servern)
    console.log("Beställningsinformation:");
    console.log(`Namn: ${name}`);
    console.log(`E-post: ${email}`);
    console.log(`Produkt: ${product}`);
    console.log(`Antal: ${quantity}`);


    // Visa bekräftelsemeddelande
    alert(`Tack ${name}! Din beställning av ${quantity} x ${product} har skickats.`);


    // Rensa formuläret
    orderForm.reset();
});


// Funktion för att validera e-postadress
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
// Hantera knappval och visa betalningsmodalen
document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', () => {
        const planName = button.closest('.plan').querySelector('h3').textContent;
        alert(`Du har valt ${planName}-medlemskap!`);


        // Visa betalningsmodalen
        document.getElementById('payment-modal').style.display = 'block';
    });
});
// Hantera knappval och visa betalningsmodalen
document.querySelectorAll('.select-plan').forEach(button => {
    button.addEventListener('click', () => {
        const planName = button.closest('.plan').querySelector('h3').textContent;
        alert(`Du har valt ${planName}-medlemskap!`);


        // Visa betalningsmodalen
        document.getElementById('payment-modal').style.display = 'block';
    });
});


// Hantera betalningsmetod
document.getElementById('swish').addEventListener('click', () => {
    window.location.href = 'https://www.swish.nu'; // Länk till Swish betalning
});


document.getElementById('paypal').addEventListener('click', () => {
    window.location.href = 'https://www.paypal.com'; // Länk till PayPal betalning
});


document.getElementById('credit-card').addEventListener('click', () => {
    window.location.href = 'https://www.stripe.com'; // Länk till Stripe eller annan kortbetalning
});
// Hantera klick på knapparna och visa/dölja formuläret
document.getElementById('contact-us-btn').addEventListener('click', function () {
    document.getElementById('contact-form').style.display = 'block';
});


// Stäng kontaktformuläret
document.getElementById('close-form-btn').addEventListener('click', function () {
    document.getElementById('contact-form').style.display = 'none';
});


// Live chat-knapp - visa meddelande för demoändamål
document.getElementById('live-chat-btn').addEventListener('click', function () {
    alert('Live Chat är tillgänglig. Vi kontaktar dig omedelbart.');
});


// FAQ-knapp - om du har en FAQ-sektion
document.getElementById('faq-btn').addEventListener('click', function () {
    window.location.href = '#faq'; // Länk till FAQ-sektionen på din webbplats
});
// Klick på donera-knapparna
document.getElementById('donate-basic').addEventListener('click', function () {
    window.location.href = '/betalning?amount=100';  // Här kan du länka till betalningssidan för grundläggande donation
});


document.getElementById('donate-premium').addEventListener('click', function () {
    window.location.href = '/betalning?amount=500';  // Här kan du länka till betalningssidan för premiumdonation
});


document.getElementById('donate-vip').addEventListener('click', function () {
    window.location.href = '/betalning?amount=1000';  // Här kan du länka till betalningssidan för VIP-donation
});
// Objekt med antal kapitel och verser för varje bok
const bibleData = {
    "genesis": { chapters: 50, versesPerChapter: 31 },
    "exodus": { chapters: 40, versesPerChapter: 38 },
    "leviticus": { chapters: 27, versesPerChapter: 34 },
    // Lägg till fler böcker här
};


// Funktion för att ladda kapitel baserat på vald bok
function loadChapters() {
    const book = document.getElementById('book-select').value;
    const chapterSelect = document.getElementById('chapter-select');
    const verseSelect = document.getElementById('verse-select');
    const verseDiv = document.getElementById('bible-verse');


    // Rensa gamla alternativ
    chapterSelect.innerHTML = '<option value="">Välj ett kapitel</option>';
    verseSelect.innerHTML = '<option value="">Välj en vers</option>';


    if (book) {
        const chapters = bibleData[book]?.chapters || 0;
        for (let i = 1; i <= chapters; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Kapitel ${i}`;
            chapterSelect.appendChild(option);
        }


        // Aktivera kapitel dropdown
        chapterSelect.disabled = false;
    } else {
        chapterSelect.disabled = true;
        verseSelect.disabled = true;
        verseDiv.innerHTML = '';
    }
}


// Funktion för att ladda verser baserat på valt kapitel
function loadVerses() {
    const book = document.getElementById('book-select').value;
    const chapter = document.getElementById('chapter-select').value;
    const verseSelect = document.getElementById('verse-select');
    const verseDiv = document.getElementById('bible-verse');


    // Rensa gamla verser
    verseSelect.innerHTML = '<option value="">Välj en vers</option>';


    if (book && chapter) {
        const verses = bibleData[book]?.versesPerChapter || 0;
        for (let i = 1; i <= verses; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Vers ${i}`;
            verseSelect.appendChild(option);
        }


        // Aktivera vers dropdown
        verseSelect.disabled = false;
    } else {
        verseSelect.disabled = true;
        verseDiv.innerHTML = '';
    }
}


// Funktion för att visa vald vers
document.getElementById('verse-select').addEventListener('change', function () {
    const book = document.getElementById('book-select').value;
    const chapter = document.getElementById('chapter-select').value;
    const verse = this.value;
    const verseDiv = document.getElementById('bible-verse');


    if (book && chapter && verse) {
        // Här skulle vi normalt hämta versen från en databas eller API
        verseDiv.innerHTML = `<strong>${book.charAt(0).toUpperCase() + book.slice(1)} ${chapter}:${verse}</strong><p>Denna vers kommer här.</p>`;
    } else {
        verseDiv.innerHTML = '';
    }
});
document.getElementById('add-saldo').addEventListener('click', () => {
    let saldoElement = document.getElementById('user-saldo');
    let currentSaldo = parseInt(saldoElement.textContent.replace('Ditt saldo: ', '').replace(' poäng', ''));
    let newSaldo = currentSaldo + 100; // Lägg till 100 poäng
    saldoElement.textContent = `Ditt saldo: ${newSaldo} poäng`;
});


const playButtons = document.querySelectorAll('.play-btn');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Spelet laddas...');
    });
});


// Lägg till en klick-händelse på logotypen
document.getElementById("logo").addEventListener("click", function () {
    window.location.href = "/";  // Byt ut "/" till den URL du vill länka till
});
let score = 0;

function nextQuestion(currentQuestionId, nextQuestionId) {
  const selectedOption = document.querySelector(`input[name="${currentQuestionId}"]:checked`);
  
  if (selectedOption) {
    // Check the answer
    if (selectedOption.value === 'a' && currentQuestionId === 'question1') {
      score++;
    } else if (selectedOption.value === 'b' && currentQuestionId === 'question2') {
      score++;
    } else if (selectedOption.value === 'b' && currentQuestionId === 'question3') {
      score++;
    }

    // Hide the current question and show the next one
    document.getElementById(currentQuestionId).style.display = 'none';
    document.getElementById(nextQuestionId).style.display = 'block';
  } else {
    alert('Vänligen välj ett alternativ innan du går vidare.');
  }
}

function calculateScore() {
  const selectedOption1 = document.querySelector('input[name="question1"]:checked');
  const selectedOption2 = document.querySelector('input[name="question2"]:checked');
  const selectedOption3 = document.querySelector('input[name="question3"]:checked');

  if (selectedOption1 && selectedOption2 && selectedOption3) {
    const result = document.getElementById('result');
    const scoreResult = document.getElementById('score-result');

    // Show the result
    result.style.display = 'block';
    scoreResult.textContent = `Du fick ${score} av 3 rätt!`;

    // Hide the quiz form
    document.getElementById('quiz-form').style.display = 'none';
  } else {
    alert('Vänligen svara på alla frågor innan du skickar in quizet.');
  }
}

function restartQuiz() {
  score = 0;
  document.getElementById('result').style.display = 'none';
  document.getElementById('quiz-form').style.display = 'block';

  // Reset all radio buttons
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach(radio => radio.checked = false);

  // Show the first question again
  document.getElementById('question1').style.display = 'block';
  document.getElementById('question2').style.display = 'none';
  document.getElementById('question3').style.display = 'none';
}
const express = require('express');
const stripe = require('stripe')('sk_test_51QlDJ3P3sNmUUuAG...'); // Använd din hemliga nyckel

const app = express();
app.use(express.json());

app.post('/create-subscription', async (req, res) => {
  try {
    const { paymentMethodId, customerEmail } = req.body;

    // 1. Skapa kund
    const customer = await stripe.customers.create({
      email: customerEmail,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    // 2. Skapa prenumeration
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: 'price_123456789' }], // Ersätt med ditt pris-ID
      expand: ['latest_invoice.payment_intent'],
    });

    res.json({ 
      status: 'success',
      subscriptionId: subscription.id
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));

document.getElementById('paymentForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumber,
    });
  
    if (error) {
      alert(`Betalningsfel: ${error.message}`);
      return;
    }
  
    // Skicka till servern
    try {
      const response = await fetch('http://localhost:3000/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          customerEmail: 'kund@email.com' // Hämta från formulär
        })
      });
  
      const result = await response.json();
      if (result.status === 'success') {
        // Uppdatera användarens status
        localStorage.setItem('premium', 'true');
        attempts = 999;
        updateAttempts();
        alert('Premium aktiverat! 🎉');
      }
    } catch (error) {
      alert('Betalning misslyckades: ' + error.message);
    }
  });














  