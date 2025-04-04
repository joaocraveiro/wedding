// Language switching functionality
let currentLang = 'pt';

// Define translations directly in the script
const translations = {
    pt: {
        home: "Início",
        venue: "Local",
        accommodation: "Onde Ficar",
        gift: "Presentes",
        schedule: "Programação",
        rsvp: "Confirmar Presença",
        invitation: "Convite",
        venueTitle: "Local",
        venueSubtitle: "Cerimónia",
        venueText1: "A cerimónia será na Igreja Matriz do Fundão pelas 15:00h do dia 7 de Junho de 2025.",
        venueSubtitle2: "Copo de Água",
        venueText2: "De seguida juntem-se a nós para celebrar na ",
        venueText3: "Estacionamento disponível no local. Serviço de taxi disponível para regresso aos hotéis.",
        accommodationTitle: "Onde Ficar",
        accommodationSubtitle: "Hotéis Recomendados",
        accommodationText1: "Para sua conveniência, reservamos blocos de quartos nos seguintes hotéis próximos ao local do casamento:",
        accommodationHotel1: "Hotel Convento do Seixo",
        accommodationHotel1Desc: "Localizado no centro da cidade, a 5 minutos da igreja. Oferece quartos confortáveis e um restaurante no local.",
        accommodationHotel2: "Hotel Alambique",
        accommodationHotel2Desc: "Situado nas montanhas, a 10 minutos do local da recepção. Oferece quartos confortáveis e um restaurante no local.",
        accommodationNote: "Por favor, mencione 'Casamento B&J' ao fazer sua reserva para obter as tarifas especiais do grupo.",
        storyTitle: "Nossa História",
        storySubtitle: "Como Nos Conhecemos",
        storyText1: "Nossa história começou há cinco anos quando nos conhecemos em uma festa de aniversário de um amigo em comum. O que começou como uma conversa casual sobre nossa paixão compartilhada por caminhadas se transformou em uma conexão profunda que tem crescido mais forte a cada dia.",
        storyText2: "Após três anos de aventuras juntos, nos comprometemos durante uma viagem às montanhas onde dissemos \"eu te amo\" pela primeira vez.",
        storyText3: "Estamos animados para começar o próximo capítulo de nossas vidas juntos e ficamos felizes em ter você conosco nesta celebração.",
        scheduleTitle: "Programação do Dia",
        scheduleSubtitle: "O Grande Dia",
        scheduleItems: {
            ceremony: "Início da Cerimônia",
            cocktail: "Coquetel",
            reception: "Recepção e Jantar",
            firstDance: "Primeira Dança",
            cake: "Corte do Bolo",
            farewell: "Despedida"
        },
        scheduleDressCode: "Traje: Traje social. A cerimônia será ao ar livre (dependendo do clima), então por favor escolha calçados apropriados.",
        rsvpTitle: "Confirmar Presença",
        rsvpSubtitle: "Por Favor, Junte-se a Nós",
        rsvpFormTitle: "Por favor confirme a sua presença. Adicione uma entrada por pessoa, incluindo crianças, no formulário abaixo.",
        rsvpFormDeadline: "Agradecemos uma resposta até ao dia",
        rsvpFormDeadlineDate: "16 de Abril de 2025.",
        rsvpFormAttendance: "Vou estar presente?",
        rsvpFormYes: "Sim",
        rsvpFormNo: "Não",
        rsvpFormNameLabel: "Nome Completo:",
        rsvpFormAddGuest: "Adicionar convidado",
        rsvpFormSubmit: "Submeter",
        rsvpFormSuccessTitle: "Obrigado!",
        rsvpFormSuccessMessage: "A sua resposta foi enviada com sucesso.",
        rsvpFormSending: "A enviar...",
        rsvpFormSuccessToast: "A sua resposta foi enviada com sucesso!",
        rsvpFormErrorToast: "Desculpe, ocorreu um erro. Por favor, tente novamente.",
        footerText: "Obrigado por fazer parte do nosso dia especial!"
    },
    en: {
        home: "Home",
        venue: "Venue",
        accommodation: "Where to Stay",
        gift: "Gifts",
        schedule: "Schedule",
        rsvp: "RSVP",
        invitation: "Invitation",
        venueTitle: "Venue",
        venueSubtitle: "Ceremony",
        venueText1: "The ceremony will be at Igreja Matriz do Fundão at 3:00 PM on June 7th, 2025.",
        venueSubtitle2: "Reception",
        venueText2: "Join us to celebrate at ",
        venueText3: "Parking available on site. Taxi service available for return to hotels.",
        accommodationTitle: "Where to Stay",
        accommodationSubtitle: "Recommended Hotels",
        accommodationText1: "For your convenience, we have reserved room blocks at the following hotels near the wedding venue:",
        accommodationHotel1: "Hotel Fundão",
        accommodationHotel1Desc: "Located in the city center, 5 minutes from the church. Offers comfortable rooms and an on-site restaurant.",
        accommodationHotel2: "Hotel Serra da Gardunha",
        accommodationHotel2Desc: "Situated in the mountains, 10 minutes from the reception venue. Offers stunning views and a spa.",
        accommodationNote: "Please mention 'B&J Wedding' when making your reservation to receive our group rates.",
        storyTitle: "Our Story",
        storySubtitle: "How We Met",
        storyText1: "Our story began five years ago when we met at a mutual friend's birthday party. What started as a casual conversation about our shared passion for hiking turned into a deep connection that has grown stronger each day.",
        storyText2: "After three years of adventures together, we got engaged during a mountain trip where we said \"I love you\" for the first time.",
        storyText3: "We are excited to begin the next chapter of our lives together and are happy to have you with us in this celebration.",
        scheduleTitle: "Day Schedule",
        scheduleSubtitle: "The Big Day",
        scheduleItems: {
            ceremony: "Ceremony Begins",
            cocktail: "Cocktail Hour",
            reception: "Reception & Dinner",
            firstDance: "First Dance",
            cake: "Cake Cutting",
            farewell: "Farewell"
        },
        scheduleDressCode: "Dress Code: Formal attire. The ceremony will be outdoors (weather permitting), so please choose appropriate footwear.",
        giftTitle: "Gifts",
        giftText: "Dear Family and Friends,",
        giftText2: "Thank you so much for being part of our special day!",
        giftText3: 'You may be thinking, "What would they really like to receive for their wedding?" To make it easier for you, instead of worrying about choosing the perfect gift (which, we admit, can be quite difficult), we would love a contribution towards our future together!',
        giftText4: "Whether it's for our dream honeymoon or helping us moving to a new home, any amount you can offer will be greatly appreciated.",
        giftText5: "Thank you for celebrating this moment with us!",
        giftText6: "Bem haja",
        rsvpTitle: "RSVP",
        rsvpSubtitle: "Please Join Us",
        rsvpFormTitle: "Please confirm your attendance. Add one entry per person, including children, in the form below.",
        rsvpFormDeadline: "Please respond by",
        rsvpFormDeadlineDate: "16th of April 2025.",
        rsvpFormAttendance: "Will you be attending?",
        rsvpFormYes: "Yes",
        rsvpFormNo: "No",
        rsvpFormNameLabel: "Full Name:",
        rsvpFormAddGuest: "Add guest",
        rsvpFormSubmit: "Submit",
        rsvpFormSuccessTitle: "Thank you!",
        rsvpFormSuccessMessage: "Your response has been sent successfully.",
        rsvpFormSending: "Sending...",
        rsvpFormSuccessToast: "Your response has been sent successfully!",
        rsvpFormErrorToast: "Sorry, an error occurred. Please try again.",
        footerText: "Thank you for being part of our special day!"
    }
};

// Make switchLanguage globally available
function switchLanguage(lang) {
    currentLang = lang;
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            console.log("translations", translations[lang][key], key, lang);
            if (element.tagName === 'P' && element.querySelector('a')) {
                // Preserve the link while updating the text
                const link = element.querySelector('a');
                const text = translations[lang][key].replace(/<a[^>]*>.*?<\/a>/, '');
                element.innerHTML = text + link.outerHTML;
            } else if (element.tagName === 'SPAN') {
                console.log("span", translations[lang][key], key, lang, element.textContent);
                // Handle span elements (like in radio buttons)
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'LABEL') {
                // Handle label elements
                element.textContent = translations[lang][key];
            } else if (element.tagName === 'BUTTON') {
                // Handle button elements
                if (element.querySelector('i')) {
                    // If button has an icon, preserve it
                    const icon = element.querySelector('i');
                    element.innerHTML = icon.outerHTML + ' ' + translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update navigation links
    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
        const key = link.getAttribute('data-translate') || link.getAttribute('href').substring(1);
        if (translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });

    // Update section titles
    document.querySelectorAll('.section-title').forEach(title => {
        const section = title.closest('section');
        if (section) {
            const sectionId = section.id;
            if (translations[lang][sectionId + 'Title']) {
                title.textContent = translations[lang][sectionId + 'Title'];
            }
        }
    });

    // Update accommodation section
    const accommodationSection = document.querySelector('#accommodation');
    if (accommodationSection) {
        const subtitle = accommodationSection.querySelector('h3');
        if (subtitle) {
            subtitle.textContent = translations[lang].accommodationSubtitle;
        }
        
        const paragraphs = accommodationSection.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = translations[lang].accommodationText1;
        if (paragraphs[1]) paragraphs[1].textContent = translations[lang].accommodationHotel1Desc;
        if (paragraphs[2]) paragraphs[2].textContent = translations[lang].accommodationHotel2Desc;
        if (paragraphs[3]) paragraphs[3].textContent = translations[lang].accommodationNote;
        
        // Update hotel names
        const hotelNames = accommodationSection.querySelectorAll('h4');
        if (hotelNames[0]) hotelNames[0].textContent = translations[lang].accommodationHotel1;
        if (hotelNames[1]) hotelNames[1].textContent = translations[lang].accommodationHotel2;
    }

    // Update schedule section
    const scheduleSection = document.querySelector('#schedule');
    if (scheduleSection) {
        const subtitle = scheduleSection.querySelector('h3');
        if (subtitle) {
            subtitle.textContent = translations[lang].scheduleSubtitle;
        }
        
        const scheduleItems = scheduleSection.querySelectorAll('p strong');
        scheduleItems.forEach(item => {
            const time = item.textContent.split(' - ')[0];
            const key = item.nextSibling.textContent.trim().toLowerCase().replace(/\s+/g, '');
            if (translations[lang].scheduleItems[key]) {
                item.nextSibling.textContent = ' - ' + translations[lang].scheduleItems[key];
            }
        });
        
        const dressCode = scheduleSection.querySelector('p:last-child');
        if (dressCode) {
            dressCode.textContent = translations[lang].scheduleDressCode;
        }
    }

    // Update RSVP section
    const rsvpSection = document.querySelector('#rsvp');
    if (rsvpSection) {
        const subtitle = rsvpSection.querySelector('h3');
        if (subtitle) {
            subtitle.textContent = translations[lang].rsvpSubtitle;
        }
        
        const paragraphs = rsvpSection.querySelectorAll('p');
        if (paragraphs[0]) paragraphs[0].textContent = translations[lang].rsvpFormTitle;
        if (paragraphs[1]) paragraphs[1].innerHTML = `${translations[lang].rsvpFormDeadline} <b>${translations[lang].rsvpFormDeadlineDate}</b>`;
        
        // Update form elements
        const form = rsvpSection.querySelector('#rsvpForm');
        if (form) {
            const label = form.querySelector('label');
            if (label) label.textContent = translations[lang].rsvpFormAttendance;
            
            const radioLabels = form.querySelectorAll('.radio-group label span');
            if (radioLabels[0]) radioLabels[0].textContent = translations[lang].rsvpFormYes;
            if (radioLabels[1]) radioLabels[1].textContent = translations[lang].rsvpFormNo;
            
            const nameLabel = form.querySelector('label[for="fullName1"]');
            if (nameLabel) nameLabel.textContent = translations[lang].rsvpFormNameLabel;
            
            const addPersonBtn = form.querySelector('#addPersonBtn');
            if (addPersonBtn) {
                const icon = addPersonBtn.querySelector('i');
                addPersonBtn.innerHTML = icon ? icon.outerHTML + ' ' + translations[lang].rsvpFormAddGuest : translations[lang].rsvpFormAddGuest;
            }
            
            const submitBtn = form.querySelector('.submit-btn');
            if (submitBtn) submitBtn.textContent = translations[lang].rsvpFormSubmit;
        }
        
        // Update success message
        const successMessage = rsvpSection.querySelector('.success-message');
        if (successMessage) {
            const successTitle = successMessage.querySelector('h3');
            const successText = successMessage.querySelector('p');
            if (successTitle) successTitle.textContent = translations[lang].rsvpFormSuccessTitle;
            if (successText) successText.textContent = translations[lang].rsvpFormSuccessMessage;
        }
    }

    // Update footer
    const footer = document.querySelector('footer');
    if (footer) {
        const footerText = footer.querySelector('p');
        if (footerText) {
            footerText.textContent = translations[lang].footerText;
        }
    }
}

// Initialize everything when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with Portuguese language
    switchLanguage('pt');

    // Mobile Menu Toggle
    document.querySelector('.mobile-menu').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Add guest functionality
    const addPersonBtn = document.getElementById('addPersonBtn');
    const namesContainer = document.getElementById('namesContainer');
    let guestCount = 1;

    if (addPersonBtn && namesContainer) {
        addPersonBtn.addEventListener('click', function() {
            guestCount++;
            const newFormGroup = document.createElement('div');
            newFormGroup.className = 'form-group';
            newFormGroup.innerHTML = `
                <label for="fullName${guestCount}" data-translate="rsvpFormNameLabel">Nome Completo:</label>
                <div class="name-input-group">
                    <input type="text" id="fullName${guestCount}" name="fullName[]" required>
                    <button type="button" class="remove-name-btn" onclick="this.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            namesContainer.appendChild(newFormGroup);
        });
    }

    // Card Flip Animation
    const flipCardInner = document.querySelector('.flip-card-inner');
    let isFront = true;
    let isAnimating = false;

    // Function to switch images
    window.switchImage = function() {
        if (isAnimating) return; // Prevent multiple clicks during animation
        isAnimating = true;
        
        if (isFront) {
            // If on front, flip to back and stay there
            flipCardInner.classList.add('flip-active');
            setTimeout(() => {
                isFront = false;
                isAnimating = false;
            }, 400);
        } else {
            // If on back, flip to front, wait 2 seconds, then flip back
            flipCardInner.classList.remove('flip-active');
            setTimeout(() => {
                isFront = true;
                isAnimating = false;
                
                // After showing front for 2 seconds, flip to back
                setTimeout(() => {
                    flipCardInner.classList.add('flip-active');
                    setTimeout(() => {
                        isFront = false;
                        isAnimating = false;
                    }, 400);
                }, 2000);
            }, 400);
        }
    };

    // Initial automatic switch after 2 seconds
    //setTimeout(window.switchImage, 2000);

    // Add click handler to switch images
    flipCardInner.addEventListener('click', window.switchImage);

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Accounting for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');

                // If clicking hero link or invitation link, trigger flip card animation
                if (targetId === '#hero' || targetId === '#invitation') {
                    window.switchImage();
                }
            }
        });
    });

    // Form submission handling
    document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const form = this;
        const submitBtn = form.querySelector('.submit-btn');
        const successMessage = form.nextElementSibling;
        const currentLang = document.documentElement.lang;
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = translations[currentLang].rsvpFormSending;
        
        try {
            const formData = new FormData(form);
            const names = formData.getAll('fullName[]');
            const attendance = formData.get('attendance');

            // Send each name as a separate request
            for (const name of names) {
                const data = {
                    name: name,
                    attendance: attendance === 'yes' ? 'Sim' : 'Não'
                };

                const response = await fetch('https://script.google.com/macros/s/AKfycbysAxG6bY03CXIpPMwxhP0qDGtrkLxwdmwMNG_c_Esyuwt_ooUCgp0__KvBVE4aOdSI/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
            }

            // Show success toast
            showToast(translations[currentLang].rsvpFormSuccessToast, 'success');
            
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.classList.add('show');
            
        } catch (error) {
            // Show error toast
            showToast(translations[currentLang].rsvpFormErrorToast, 'error');
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = translations[currentLang].rsvpFormSubmit;
        }
    });
});

// Toast notification function
function showToast(message, type = 'success') {
    const toastContainer = document.querySelector('.toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger reflow
    toast.offsetHeight;
    
    // Show toast
    toast.classList.add('show');
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, 3000);
} 