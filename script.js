document.addEventListener('DOMContentLoaded', () => {

    // --- Data Source (Parsed from Resume) ---
    const timelineData = [
        {
            year: "Fev 2023 - Jun 2023",
            title: "Chef de Cozinha - O Camponês",
            location: "Portugal",
            summary: "Liderança de cozinha e controle de qualidade em terras lusitanas.",
            details: "Responsável pela organização da equipe, treinamento dos funcionários, controle de qualidade dos produtos e chefia da cozinha do início ao fim dos eventos.",
            type: "experience"
        },
        {
            year: "Jan 2022 - Jan 2023",
            title: "Chef de Eventos - D’Tortugo",
            location: "Brasil",
            summary: "Gestão completa de eventos gastronômicos.",
            details: "Coordenação e execução de eventos, garantindo a excelência no serviço e na apresentação dos pratos.",
            type: "experience"
        },
        {
            year: "Mar 2021 - Jan 2022",
            title: "Chef Executivo - Brasa Sul",
            location: "Brasil",
            summary: "Desenvolvimento de cardápio e introdução do American BBQ.",
            details: "Desenvolvimento da cozinha, montagem e treinamento de equipe, preparação de estoque, criação e renovação de cardápio, com foco na introdução do American BBQ. Chefiava a cozinha diariamente.",
            type: "experience"
        },
        {
            year: "Mai 2020 - Fev 2021",
            title: "Empreendedor - Rhonkus Burger",
            location: "Brasil",
            summary: "Proprietário de hamburgueria artesanal.",
            details: "Gestão completa do negócio, desde a criação dos blends, molhos e técnica smash, até a precificação e operação.",
            type: "experience"
        },
        {
            year: "2019",
            title: "BBQ FEST",
            location: "Brasil",
            summary: "Chef de Estação: Porco inteiro e Cordeiro Patagônico.",
            details: "Participação como Chef de estação em um dos maiores festivais de churrasco, responsável por assar porco inteiro e cordeiro patagônico.",
            type: "event"
        },
        {
            year: "Set 2017 - Nov 2019",
            title: "Pitmaster - Restaurante Braseiro",
            location: "Brasil",
            summary: "Especialista em defumação.",
            details: "Atuação como Pitmaster e chef de defumação, aplicando técnicas de Low & Slow em carnes nobres.",
            type: "experience"
        },
        {
            year: "2019",
            title: "Graduação em Gastronomia",
            location: "Faculdade FACID",
            summary: "Formação Superior Completa.",
            details: "Conclusão do curso superior de Gastronomia, consolidando a base teórica com a prática adquirida.",
            type: "education"
        },
        {
            year: "2018",
            title: "Evento BBRock",
            location: "Brasil",
            summary: "Chef de Estação pela Escola Bons de Fogo.",
            details: "Responsável pelas estações de Parrilla, Fogo de Chão e Varal.",
            type: "event"
        },
        {
            year: "2018",
            title: "Viva La Carne 2018",
            location: "Brasil",
            summary: "Sous Chef de Mario Portela e Auxiliar de Daniel Lee.",
            details: "Atuou como Sous Chef na estação de Boi Inteiro (+20 horas) com Mario Portela e auxiliar na estação de defumação do renomado Chef Daniel Lee.",
            type: "event"
        },
        {
            year: "2016 - Presente",
            title: "Personal Chef",
            location: "Brasil / Portugal",
            summary: "Eventos particulares exclusivos.",
            details: "Atuação em eventos particulares focados em cozinha nacional, regional e churrasco em geral, proporcionando experiências personalizadas.",
            type: "experience"
        },
        {
            year: "Cursos & Especializações",
            title: "Formação Contínua",
            location: "Vários",
            summary: "Especializações com grandes nomes do churrasco.",
            details: "Cursos realizados: Cura e defumação (Paula Labaki), Carnes e Dry Aged (Rogerio de Betti), Charcutaria (Mario Portela), Defumação (Bruno Salomão), Hambúrguer (Tadeu Rango), Fogo de Chão (Chef Marcão), Parrilla e Varal (Romulo Morente).",
            type: "education"
        }
    ];

    // --- Timeline Rendering ---
    const timelineContainer = document.getElementById('timeline-container');
    const modal = document.getElementById('event-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDesc = document.getElementById('modal-description');
    const modalWhatsapp = document.getElementById('modal-whatsapp');
    const closeModal = document.querySelector('.close-modal');

    function renderTimeline() {
        if (!timelineContainer) return;

        timelineContainer.innerHTML = ''; // Clear existing

        timelineData.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = `timeline-item`; // Animation class added via observer later
            div.style.transitionDelay = `${index * 0.1}s`;

            div.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${item.year}</span>
                    <h3>${item.title}</h3>
                    <h4><i class="fas fa-map-marker-alt"></i> ${item.location}</h4>
                    <p>${item.summary}</p>
                    <button class="read-more-btn" data-index="${index}">Ver Detalhes</button>
                </div>
            `;
            timelineContainer.appendChild(div);
        });

        // Re-attach event listeners to new buttons
        document.querySelectorAll('.read-more-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                openModal(timelineData[index]);
            });
        });

        // Refresh observer for new items
        updateObserver();
    }

    // --- Modal Logic ---
    function openModal(item) {
        modalTitle.textContent = item.title;
        modalDate.textContent = item.year;
        modalDesc.innerHTML = item.details + '<br><br>' + (item.type === 'education' ? '' : '<strong>Interessado em um evento como este?</strong>');

        // Dynamic WhatsApp Message
        const message = `Olá Chef Pedro! Vi no seu portfólio sobre "${item.title}" (${item.year}) e gostaria de saber mais informações.`;
        const encodedMessage = encodeURIComponent(message);
        modalWhatsapp.href = `https://api.whatsapp.com/send?phone=351910556946&text=${encodedMessage}`;

        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // --- Initial Render ---
    renderTimeline();


    // --- Existing Effects (Preserved) ---
    // Parallax effect for Hero Background
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    function updateObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elementsToAnimate = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .timeline-item');
        elementsToAnimate.forEach(el => observer.observe(el));
    }

    // Initial observer call
    updateObserver();

    // Custom Cursor Movement
    const cursor = document.querySelector('.cursor-glow');
    document.addEventListener('mousemove', (e) => {
        if (cursor) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        }
    });
});
