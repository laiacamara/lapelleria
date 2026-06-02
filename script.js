document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. CAPÇALERA I MENÚ MÒBIL
    // ==========================================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Efecte scroll capçalera
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Toggle menú mòbil
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Canviar icona de hamburguesa a tancar en format SVG
            const isActive = navMenu.classList.contains('active');
            navToggle.innerHTML = isActive 
                ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
                : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
        });
    }
    
    // Tancar menú mòbil en clicar un enllaç
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (navToggle) {
                navToggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
            }
        });
    });

    // ==========================================
    // 2. INDICADOR DINÀMIC D'ESTAT (OBERT/TANCAT)
    // ==========================================
    function updateStatusWidget() {
        const statusDot = document.getElementById('status-dot');
        const statusText = document.getElementById('status-text');
        const statusHoursText = document.getElementById('status-hours');
        
        if (!statusDot || !statusText || !statusHoursText) return;

        try {
            // Obtenir la data i hora exactes amb la zona horària d'Espanya
            const now = new Date();
            const spainTimeStr = now.toLocaleString("en-US", { timeZone: "Europe/Madrid" });
            const spainDate = new Date(spainTimeStr);
            
            const day = spainDate.getDay(); // 0 Diumenge, 1 Dilluns...
            const hours = spainDate.getHours();
            const minutes = spainDate.getMinutes();
            const currentTimeVal = hours * 60 + minutes; // en minuts des de la mitjanit

            let isOpen = false;
            let closingTime = "";
            let nextOpeningText = "";
            let todaysHoursText = "";

            // Definim l'horari en minuts des de mitjanit:
            // Dilluns (1) i Dimarts (2): 8:00 a 16:00 (480 min a 960 min)
            // Dimecres (3), Dijous (4), Divendres (5): 8:00 a 23:00 (480 min a 1380 min)
            // Dissabte (6), Diumenge (0): 10:00 a 23:00 (600 min a 1380 min)
            const schedules = {
                1: { name: "dilluns", start: 8 * 60, end: 16 * 60, str: "08:00h – 16:00h" },
                2: { name: "dimarts", start: 8 * 60, end: 16 * 60, str: "08:00h – 16:00h" },
                3: { name: "dimecres", start: 8 * 60, end: 23 * 60, str: "08:00h – 23:00h" },
                4: { name: "dijous", start: 8 * 60, end: 23 * 60, str: "08:00h – 23:00h" },
                5: { name: "divendres", start: 8 * 60, end: 23 * 60, str: "08:00h – 23:00h" },
                6: { name: "dissabte", start: 10 * 60, end: 23 * 60, str: "10:00h – 23:00h" },
                0: { name: "diumenge", start: 10 * 60, end: 23 * 60, str: "10:00h – 23:00h" }
            };
            
            const todaySched = schedules[day];
            todaysHoursText = `Avui (${todaySched.name}): ${todaySched.str}`;
            
            // Comprovar si està en rang
            if (currentTimeVal >= todaySched.start && currentTimeVal < todaySched.end) {
                isOpen = true;
                const endHour = Math.floor(todaySched.end / 60);
                closingTime = `${endHour.toString().padStart(2, '0')}:00h`;
            } else {
                isOpen = false;
                
                // Buscar propera obertura
                let daysToSearch = 1;
                let foundNext = false;
                let nextDay = day;
                
                while (daysToSearch <= 7 && !foundNext) {
                    nextDay = (nextDay + 1) % 7;
                    const nextSched = schedules[nextDay];
                    if (nextSched) {
                        const startHour = Math.floor(nextSched.start / 60);
                        const startMin = nextSched.start % 60;
                        const startMinStr = startMin.toString().padStart(2, '0');
                        
                        let dayName = "";
                        if (daysToSearch === 1) {
                            dayName = "demà";
                        } else {
                            dayName = `el proper ${nextSched.name}`;
                        }
                        
                        nextOpeningText = `obrim ${dayName} a les ${startHour}:${startMinStr}h`;
                        foundNext = true;
                    }
                    daysToSearch++;
                }
            }
            
            if (isOpen) {
                statusDot.className = "status-dot open";
                statusText.innerHTML = `<span style="color:#2e7d32; font-weight:700;">● OBERT ARA</span> – Vine a gaudir de la carta! Tanquem a les ${closingTime}`;
            } else {
                statusDot.className = "status-dot closed";
                statusText.innerHTML = `<span style="color:var(--accent-red); font-weight:700;">● TANCAT ARA</span> – ${nextOpeningText}`;
            }
            statusHoursText.textContent = todaysHoursText;

        } catch (error) {
            console.error("Error calculating open status:", error);
            statusDot.className = "status-dot open";
            statusText.innerHTML = `<span style="color:#2e7d32; font-weight:700;">● OBERT</span> – Vine a visitar-nos!`;
            statusHoursText.textContent = "Consulta els horaris a la secció inferior.";
        }
    }
    
    updateStatusWidget();
    // Actualitzar cada minut per a màxima precisió
    setInterval(updateStatusWidget, 60000);

    // ==========================================
    // 3. FILTRE DE LA CARTA (INTERACTIU)
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Traure classe actiu
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            menuItems.forEach(card => {
                // Animació de sortida suau
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95) translateY(10px)';
                
                setTimeout(() => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = card.classList.contains('featured-card') ? 'flex' : 'block';
                        
                        // Forçar reflow i animar entrada
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1) translateY(0)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // ==========================================
    // 4. GALERIA LIGHTBOX
    // ==========================================
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    
    if (galleryItems.length > 0 && lightbox && lightboxImg) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgUrl = item.getAttribute('data-image');
                const altText = item.querySelector('img').getAttribute('alt');
                
                lightboxImg.setAttribute('src', imgUrl);
                lightboxImg.setAttribute('alt', altText);
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Evitar scroll
            });
        });
        
        // Tancar Lightbox
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                lightboxImg.setAttribute('src', '');
            }, 300);
        };
        
        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Tancar amb tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // ==========================================
    // 5. FORMULARI DE RESERVA I TOASTS
    // ==========================================
    const bookingForm = document.getElementById('booking-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    const submitBtn = document.getElementById('btn-submit-reserva');
    
    // Configurar la data mínima del formulari a avui
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    if (bookingForm && toast) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtenir dades per fer més personalitzat el missatge
            const name = document.getElementById('booking-name').value;
            const phone = document.getElementById('booking-phone').value;
            const date = document.getElementById('booking-date').value;
            const guests = document.getElementById('booking-guests').value;
            
            // Format de data més bonic en català
            let dateFormatted = date;
            try {
                const d = new Date(date);
                dateFormatted = d.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long' });
            } catch (err) {}
            
            // Canviar botó a estat de càrrega
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Processant la teva reserva...';
            }
            
            // Simulació d'enviament (1.5 segons)
            setTimeout(() => {
                // Restablir botó
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar petició de reserva';
                }
                
                // Mostrar toast exitós
                toastIcon.textContent = '✅';
                toastMessage.innerHTML = `<strong>Gràcies ${name}!</strong> Petició per a ${guests} pers. el ${dateFormatted} rebuda. Trucarem al ${phone} per confirmar.`;
                toast.className = 'toast show toast-success';
                
                // Netejar formulari
                bookingForm.reset();
                if (dateInput) {
                    const today = new Date().toISOString().split('T')[0];
                    dateInput.value = '';
                }
                
                // Ocultar toast després de 5 segons
                setTimeout(() => {
                    toast.className = 'toast';
                }, 5000);
                
            }, 1500);
        });
    }

    // ==========================================
    // 6. ENLLAÇOS DE NAVEGACIÓ ACTIUS (SCROLL)
    // ==========================================
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Activar quan la secció ocupa el centre
        threshold: 0
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
