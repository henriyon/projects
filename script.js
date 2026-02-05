// Barbearia Royal - Script Principal

// Dados dos Serviços
const services = [
    {
        id: 1,
        name: "Corte de Cabelo",
        description: "Corte personalizado de acordo com seu estilo e formato de rosto, utilizando técnicas modernas e produtos premium.",
        price: 45.00,
        duration: "45 min",
        icon: "fas fa-cut",
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2083&q=80"
    },
    {
        id: 2,
        name: "Barba Completa",
        description: "Modelagem, hidratação e cuidados especiais para sua barba, incluindo toalha quente e produtos de qualidade.",
        price: 35.00,
        duration: "30 min",
        icon: "fas fa-air-freshener",
        image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 3,
        name: "Corte + Barba",
        description: "Pacote completo com corte de cabelo e cuidados com a barba para uma renovação total do visual.",
        price: 70.00,
        duration: "1h 15min",
        icon: "fas fa-spa",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 4,
        name: "Tratamento Capilar",
        description: "Tratamento especializado para couro cabeludo e fios, combatendo queda, caspa e oleosidade excessiva.",
        price: 80.00,
        duration: "1h",
        icon: "fas fa-fire",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        name: "Hidratação Facial",
        description: "Revitalização da pele do rosto com produtos especiais que renovam e rejuvenecem a aparência.",
        price: 40.00,
        duration: "40 min",
        icon: "fas fa-user-tie",
        image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 6,
        name: "Coloração",
        description: "Aplicação de tintura para cabelo e barba, com produtos de alta qualidade e durabilidade.",
        price: 60.00,
        duration: "1h 30min",
        icon: "fas fa-paint-brush",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
    }
];

// Dados dos Preços
const pricingPlans = [
    {
        id: 1,
        name: "Básico",
        description: "Perfeito para manutenção regular",
        price: 45,
        popular: false,
        icon: "fas fa-cut",
        features: [
            "Corte de cabelo",
            "Lavagem dos fios",
            "Produtos básicos",
            "Atendimento padrão"
        ]
    },
    {
        id: 2,
        name: "Premium",
        description: "O mais escolhido pelos clientes",
        price: 70,
        popular: true,
        icon: "fas fa-crown",
        features: [
            "Corte de cabelo",
            "Barba completa",
            "Produtos premium",
            "Toalha quente",
            "Atendimento VIP",
            "Bebida inclusa"
        ]
    },
    {
        id: 3,
        name: "Completo",
        description: "Experiência completa de cuidados",
        price: 120,
        popular: false,
        icon: "fas fa-star",
        features: [
            "Corte + barba",
            "Tratamento capilar",
            "Hidratação facial",
            "Produtos importados",
            "Massagem relaxante",
            "Atendimento exclusivo",
            "Bebida premium"
        ]
    }
];

// Dados dos Barbeiros
const barbers = [
    {
        id: 1,
        name: "Carlos Silva",
        role: "Barbeiro Sênior",
        experience: "12 anos",
        specialty: "Cortes clássicos e modernos",
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        social: {
            instagram: "#",
            facebook: "#",
            twitter: "#"
        }
    },
    {
        id: 2,
        name: "Ricardo Souza",
        role: "Especialista em Barba",
        experience: "8 anos",
        specialty: "Modelagem e cuidados com barba",
        image: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
        social: {
            instagram: "#",
            facebook: "#",
            twitter: "#"
        }
    },
    {
        id: 3,
        name: "Marcos Oliveira",
        role: "Estilista Capilar",
        experience: "10 anos",
        specialty: "Cortes modernos e coloração",
        image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
        social: {
            instagram: "#",
            facebook: "#",
            twitter: "#"
        }
    }
];

// Dados da Galeria
const galleryItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2083&q=80",
        category: "haircuts",
        caption: "Corte moderno com degradê"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: "beards",
        caption: "Barba bem feita e modelada"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: "place",
        caption: "Nosso ambiente sofisticado"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1519070994522-88c6b756330e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        category: "products",
        caption: "Produtos de alta qualidade"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: "haircuts",
        caption: "Corte social profissional"
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2083&q=80",
        category: "beards",
        caption: "Detalhes na finalização"
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: "place",
        caption: "Espaço de atendimento"
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
        category: "products",
        caption: "Linha completa de produtos"
    }
];

// Dados dos Depoimentos
const testimonials = [
    {
        id: 1,
        name: "João Santos",
        role: "Cliente há 5 anos",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        content: "Melhor barbearia da cidade! Atendimento impecável e profissionais extremamente qualificados. Não troco por nenhuma outra.",
        rating: 5
    },
    {
        id: 2,
        name: "Pedro Oliveira",
        role: "Cliente frequente",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        content: "Ambiente excelente, produtos de primeira e barbeiros que realmente entendem do assunto. Recomendo para todos!",
        rating: 5
    },
    {
        id: 3,
        name: "Rafael Costa",
        role: "Novo cliente",
        image: "https://randomuser.me/api/portraits/men/67.jpg",
        content: "Primeira vez que fui e já me senti em casa. Corte perfeito e atenção aos detalhes. Voltarei com certeza!",
        rating: 5
    }
];

// Horários disponíveis
const availableTimes = [
    "09:00", "10:00", "11:00", "12:00",
    "14:00", "15:00", "16:00", "17:00", "18:00"
];

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar componentes
    initNavigation();
    initHeroSlider();
    initServices();
    initPricing();
    initTeam();
    initGallery();
    initTestimonials();
    initBookingForm();
    initContactForm();
    initNewsletterForm();
    initBackToTop();
    initStatsCounter();
    initMobileMenu();

    // Configurar data mínima para agendamento
    setMinDate();
});

// ===== NAVEGAÇÃO =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Atualizar navegação ativa ao scroll
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== MENU MOBILE =====
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuToggle.innerHTML = mobileNav.classList.contains('active')
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });

        // Fechar menu ao clicar em um link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
}

// ===== HERO SLIDER =====
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Função para mostrar slide
    function showSlide(index) {
        // Remover active de todos os slides e dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Ajustar índice se necessário
        if (index >= totalSlides) currentSlide = 0;
        if (index < 0) currentSlide = totalSlides - 1;

        // Mostrar slide atual
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Event listeners para dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Event listeners para botões de navegação
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlide--;
            showSlide(currentSlide);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlide++;
            showSlide(currentSlide);
        });
    }

    // Auto slide (opcional)
    let slideInterval = setInterval(() => {
        currentSlide++;
        showSlide(currentSlide);
    }, 5000);

    // Pausar auto slide ao interagir
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        sliderContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                currentSlide++;
                showSlide(currentSlide);
            }, 5000);
        });
    }
}

// ===== SERVIÇOS =====
function initServices() {
    const servicesGrid = document.querySelector('.services-grid');

    if (!servicesGrid) return;

    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card" data-service-id="${service.id}">
            <div class="service-image">
                <img src="${service.image}" alt="${service.name}">
            </div>
            <div class="service-content">
                <div class="service-icon">
                    <i class="${service.icon}"></i>
                </div>
                <h3>${service.name}</h3>
                <p>${service.description}</p>
                <div class="service-price">
                    <span class="duration">${service.duration}</span>
                    <span class="price">R$ ${service.price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== PREÇOS =====
function initPricing() {
    const pricingGrid = document.querySelector('.pricing-grid');

    if (!pricingGrid) return;

    pricingGrid.innerHTML = pricingPlans.map(plan => `
        <div class="pricing-card ${plan.popular ? 'popular' : ''}">
            ${plan.popular ? '<span class="popular-badge">Mais Popular</span>' : ''}
            <div class="pricing-header">
                <div class="pricing-icon">
                    <i class="${plan.icon}"></i>
                </div>
                <h3>${plan.name}</h3>
                <p>${plan.description}</p>
            </div>
            <div class="price-tag">
                R$ <span>${plan.price}</span>
            </div>
            <ul class="pricing-features">
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="#booking" class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}">
                Agendar Agora
            </a>
        </div>
    `).join('');
}

// ===== BARBEIROS =====
function initTeam() {
    const teamGrid = document.querySelector('.team-grid');

    if (!teamGrid) return;

    teamGrid.innerHTML = barbers.map(barber => `
        <div class="team-member">
            <div class="member-image">
                <img src="${barber.image}" alt="${barber.name}">
            </div>
            <div class="member-info">
                <h3>${barber.name}</h3>
                <p class="member-role">${barber.role}</p>
                <p><strong>Experiência:</strong> ${barber.experience}</p>
                <p><strong>Especialidade:</strong> ${barber.specialty}</p>
                <div class="member-social">
                    <a href="${barber.social.instagram}" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="${barber.social.facebook}" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="${barber.social.twitter}" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== GALERIA =====
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('loadMoreGallery');

    if (!galleryGrid) return;

    let visibleItems = 8;
    let currentFilter = 'all';

    // Renderizar itens da galeria
    function renderGallery(itemsToShow = visibleItems) {
        const filteredItems = currentFilter === 'all'
            ? galleryItems
            : galleryItems.filter(item => item.category === currentFilter);

        const itemsToDisplay = filteredItems.slice(0, itemsToShow);

        galleryGrid.innerHTML = itemsToDisplay.map(item => `
            <div class="gallery-item" data-category="${item.category}" data-id="${item.id}">
                <img src="${item.image}" alt="${item.caption}">
                <div class="gallery-overlay">
                    <div class="overlay-content">
                        <h4>${item.caption}</h4>
                    </div>
                </div>
            </div>
        `).join('');

        // Atualizar botão "Carregar Mais"
        if (loadMoreBtn) {
            loadMoreBtn.style.display = itemsToShow < filteredItems.length ? 'block' : 'none';
        }

        // Adicionar event listeners para abrir modal
        initGalleryModal();
    }

    // Filtros da galeria
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Atualizar botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Atualizar filtro e renderizar
            currentFilter = button.getAttribute('data-filter');
            visibleItems = 8;
            renderGallery(visibleItems);
        });
    });

    // Botão "Carregar Mais"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleItems += 4;
            renderGallery(visibleItems);
        });
    }

    // Renderizar galeria inicial
    renderGallery();
}

// ===== MODAL DA GALERIA =====
function initGalleryModal() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');

    let currentImageIndex = 0;
    const galleryArray = Array.from(galleryItems);

    // Abrir modal
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const caption = item.querySelector('.overlay-content h4').textContent;

            currentImageIndex = index;
            modalImage.src = imgSrc;
            modalCaption.textContent = caption;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Fechar modal
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Fechar modal ao clicar fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Navegação no modal
    if (modalPrev) {
        modalPrev.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryArray.length) % galleryArray.length;
            updateModalImage();
        });
    }

    if (modalNext) {
        modalNext.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryArray.length;
            updateModalImage();
        });
    }

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + galleryArray.length) % galleryArray.length;
            updateModalImage();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % galleryArray.length;
            updateModalImage();
        }
    });

    function updateModalImage() {
        const currentItem = galleryArray[currentImageIndex];
        const imgSrc = currentItem.querySelector('img').src;
        const caption = currentItem.querySelector('.overlay-content h4').textContent;

        modalImage.src = imgSrc;
        modalCaption.textContent = caption;
    }
}

// ===== DEPOIMENTOS =====
function initTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');

    if (!testimonialsContainer) return;

    let currentTestimonial = 0;

    // Renderizar depoimentos
    function renderTestimonials() {
        testimonialsContainer.innerHTML = testimonials.map((testimonial, index) => `
            <div class="testimonial-slide ${index === currentTestimonial ? 'active' : ''}">
                <div class="testimonial-content">
                    <p>"${testimonial.content}"</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="${testimonial.image}" alt="${testimonial.name}">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                        <div class="author-rating">
                            ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5 - testimonial.rating)}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Navegação
    function showNextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonials();
    }

    function showPrevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        renderTestimonials();
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', showPrevTestimonial);
    if (nextBtn) nextBtn.addEventListener('click', showNextTestimonial);

    // Auto rotacionar depoimentos
    setInterval(showNextTestimonial, 8000);

    // Renderizar inicialmente
    renderTestimonials();
}

// ===== FORMULÁRIO DE AGENDAMENTO =====
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    const serviceSelect = document.getElementById('service');
    const barberSelect = document.getElementById('barber');
    const timeSelect = document.getElementById('time');
    const dateInput = document.getElementById('date');

    if (!bookingForm) return;

    // Preencher select de serviços
    if (serviceSelect) {
        serviceSelect.innerHTML = '<option value="">Selecione um serviço</option>' +
            services.map(service =>
                `<option value="${service.id}">${service.name} - R$ ${service.price.toFixed(2)}</option>`
            ).join('');
    }

    // Preencher select de barbeiros
    if (barberSelect) {
        barberSelect.innerHTML = '<option value="">Qualquer barbeiro</option>' +
            barbers.map(barber =>
                `<option value="${barber.id}">${barber.name} - ${barber.role}</option>`
            ).join('');
    }

    // Preencher select de horários
    if (timeSelect) {
        timeSelect.innerHTML = '<option value="">Selecione um horário</option>' +
            availableTimes.map(time =>
                `<option value="${time}">${time}</option>`
            ).join('');
    }

    // Configurar data mínima
    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }

    // Validação do formulário
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateBookingForm()) {
                submitBookingForm();
            }
        });
    }

    // Validação em tempo real
    const formInputs = bookingForm.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            clearError(input);
        });
    });
}

function validateBookingForm() {
    const form = document.getElementById('bookingForm');
    const inputs = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateField(field) {
    const errorId = field.id + 'Error';

    // Limpar erro anterior
    clearError(field);

    // Validar campo vazio
    if (field.type === 'checkbox') {
        if (!field.checked) {
            showError(field, 'Este campo é obrigatório');
            return false;
        }
        return true;
    }

    if (!field.value.trim()) {
        showError(field, 'Este campo é obrigatório');
        return false;
    }

    // Validações específicas
    switch(field.type) {
        case 'email':
            if (!isValidEmail(field.value)) {
                showError(field, 'E-mail inválido');
                return false;
            }
            break;

        case 'tel':
            if (!isValidPhone(field.value)) {
                showError(field, 'Telefone inválido');
                return false;
            }
            break;

        case 'date':
            const selectedDate = new Date(field.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate <= today) {
                showError(field, 'Selecione uma data futura');
                return false;
            }
            break;
    }

    return true;
}

function showError(field, message) {
    const errorId = field.id + 'Error';
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        field.classList.add('error');
    }
}

function clearError(field) {
    const errorId = field.id + 'Error';
    const errorElement = document.getElementById(errorId);

    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        field.classList.remove('error');
    }
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    // Validação simples de telefone brasileiro
    const re = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
    return re.test(phone);
}

function submitBookingForm() {
    const form = document.getElementById('bookingForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formSuccess = document.getElementById('formSuccess');

    // Mostrar loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    submitBtn.disabled = true;

    // Simular envio (substituir por chamada real à API)
    setTimeout(() => {
        // Resetar formulário
        form.reset();

        // Mostrar mensagem de sucesso
        formSuccess.style.display = 'block';

        // Resetar botão
        btnText.style.display = 'inline-flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;

        // Scroll para mensagem de sucesso
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Ocultar mensagem após 10 segundos
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 10000);
    }, 2000);
}

// ===== FORMULÁRIO DE CONTATO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (validateContactForm()) {
                // Simular envio do formulário
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
            }
        });
    }
}

function validateContactForm() {
    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    if (!name.value.trim()) {
        alert('Por favor, preencha seu nome.');
        name.focus();
        return false;
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
        alert('Por favor, preencha um e-mail válido.');
        email.focus();
        return false;
    }

    if (!subject.value) {
        alert('Por favor, selecione um assunto.');
        subject.focus();
        return false;
    }

    if (!message.value.trim()) {
        alert('Por favor, escreva sua mensagem.');
        message.focus();
        return false;
    }

    return true;
}

// ===== NEWSLETTER =====
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]');

            if (email.value && isValidEmail(email.value)) {
                // Simular inscrição
                alert('Obrigado por se inscrever em nossa newsletter!');
                email.value = '';
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }
}

// ===== VOLTAR AO TOPO =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        // Mostrar/ocultar botão
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        // Rolagem suave para o topo
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== CONTADOR DE ESTATÍSTICAS =====
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat h4');

    if (stats.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    const duration = 2000; // 2 segundos
                    const step = target / (duration / 16); // 60fps
                    let current = 0;

                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }

                        // Formatar número
                        let displayValue;
                        if (target === 98) {
                            displayValue = Math.floor(current) + '%';
                        } else if (target >= 1000) {
                            displayValue = Math.floor(current).toLocaleString('pt-BR');
                        } else {
                            displayValue = Math.floor(current);
                        }

                        stat.textContent = displayValue;
                    }, 16);
                });

                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector('.about-stats'));
}

// ===== CONFIGURAR DATA MÍNIMA =====
function setMinDate() {
    const dateInput = document.getElementById('date');

    if (dateInput) {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // Formatar para YYYY-MM-DD
        const year = tomorrow.getFullYear();
        const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const day = String(tomorrow.getDate()).padStart(2, '0');

        dateInput.min = `${year}-${month}-${day}`;

        // Definir data padrão (amanhã)
        dateInput.value = dateInput.min;
    }
}

// ===== MAPA =====
function initMap() {
    // Coordenadas da barbearia (exemplo: Av. Paulista, São Paulo)
    const barbeariaLocation = { lat: -23.563090, lng: -46.654170 };

    // Criar mapa
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: barbeariaLocation,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [{ "color": "#242f3e" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#242f3e" }]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#746855" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#d59563" }]
            }
        ]
    });

    // Adicionar marcador
    new google.maps.Marker({
        position: barbeariaLocation,
        map: map,
        title: 'Barbearia Royal',
        icon: {
            url: 'https://maps.google.com/mapfiles/ms/icons/gold-dot.png'
        }
    });
}

// Exportar função initMap para o Google Maps
window.initMap = initMap;

// ===== MASCARAS DE INPUT =====
function initInputMasks() {
    // Máscara para telefone
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }

            e.target.value = value;
        });
    }

    // Máscara para telefone de contato
    const contactPhoneInput = document.getElementById('contactPhone');
    if (contactPhoneInput) {
        contactPhoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');

            if (value.length > 10) {
                value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }

            e.target.value = value;
        });
    }
}

// Inicializar máscaras quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initInputMasks);

// ===== ANIMAÇÕES AO SCROLL =====
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .pricing-card, .team-member, .highlight-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
}

// Inicializar animações quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initScrollAnimations);
