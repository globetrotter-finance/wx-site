document.addEventListener('DOMContentLoaded', function() {

    // --- Function to get the user's country from a free Geo-IP API ---
    const getUserCountry = async () => {
        try {
            // const response = await fetch('https://ipapi.co/country_code/');
            // if (!response.ok) {
            //     return 'default'; // Fallback if API fails
            // }
            // const countryCode = await response.text();
            // We only care about IN and US, otherwise use default
            // if (countryCode === 'IN' || countryCode === 'US') {
            //     return countryCode.toLowerCase();
            // }
            return 'defaultCountry';
        } catch (error) {
            console.error('Could not determine country, falling back to default.', error);
            return 'defaultCountry';
        }
    };

    // --- Function to load common components (Header/Footer) ---
    const loadComponent = async (url, elementSelector) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to load ${url}`);
            const content = await response.text();
            const element = document.querySelector(elementSelector);
            if (element) element.innerHTML = content;
        } catch (error) {
            console.error(error);
        }
    };

    // --- Function to load dynamic data for the index page ---
    const loadIndexData = async (country) => {
        if (!document.getElementById('hero-container')) return;
        try {
            const response = await fetch(`/data/${country}/index.json`);
            if (!response.ok) throw new Error('Failed to load index.json');
            const data = await response.json();

            // Populate Hero Section
            const heroContainer = document.getElementById('hero-container');
            if (heroContainer && data.hero) {
                heroContainer.innerHTML = `
                    <div class="container text-center">
                        <h1 class="hero-headline animate-on-scroll">${data.hero.title}</h1>
                        <p class="hero-subheadline animate-on-scroll">${data.hero.subtitle}</p>
                        <div class="hero-cta animate-on-scroll">
                            <a href="${data.hero.primary_cta.link}" class="btn btn-primary btn-lg">${data.hero.primary_cta.text}</a>
                            <a href="${data.hero.secondary_cta.link}" class="btn btn-secondary btn-lg">${data.hero.secondary_cta.text}</a>
                        </div>
                    </div>
                `;
            }

            // Populate Trusted Clients Section
            const clientsContainer = document.getElementById('clients-section-container');
            if (clientsContainer && data.trustedClients) {
                const logosHTML = data.trustedClients.logos.map(logo => `
                    <img src="${logo.path}" alt="${logo.name} Logo">
                `).join('');

                clientsContainer.innerHTML = `
                    <div class="container text-center">
                        <p class="clients-title animate-on-scroll">${data.trustedClients.title}</p>
                        <div class="clients-logos animate-on-scroll">
                            <div class="clients-logos-slider">
                                ${logosHTML}
                                ${logosHTML}
                            </div>
                        </div>
                    </div>
                `;
            }

            // Populate Features Section
            const featuresContainer = document.getElementById('features-section-container');
            if (featuresContainer && data.featuresHeader && data.features) {
                featuresContainer.innerHTML = `
                    <div class="container">
                        <div class="section-header text-center animate-on-scroll">
                            <h2>${data.featuresHeader.title}</h2>
                            <p>${data.featuresHeader.subtitle}</p>
                        </div>
                        <div class="features-grid">
                            ${data.features.map(feature => `
                                <div class="feature-item animate-on-scroll">
                                    <div class="feature-icon"><i class="${feature.icon}"></i></div>
                                    <h3>${feature.title}</h3>
                                    <p>${feature.description}</p>
                                    <a href="${feature.link}" class="learn-more">Learn More <i class="fas fa-arrow-right"></i></a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }

            // Populate Agentic Platform Section
            const agenticContainer = document.getElementById('agentic-platform-container');
            if (agenticContainer && data.agenticPlatform) {
                let scrollerHTML = '';
                if (data.agenticPlatform.scrollingUseCases && data.agenticPlatform.scrollingUseCases.length > 0) {
                    const useCasesHTML = data.agenticPlatform.scrollingUseCases.map(useCase => `
                        <div class="scroller-item">
                            <i class="fas fa-check-circle"></i> ${useCase}
                        </div>
                    `).join('');
                    scrollerHTML = `
                        <div class="use-case-scroller">
                            <div class="scroller-inner">
                                ${useCasesHTML}
                                ${useCasesHTML}
                            </div>
                        </div>
                    `;
                }

                agenticContainer.innerHTML = `
                    <div class="container">
                        <div class="agentic-grid">
                            <div class="agentic-text animate-on-scroll">
                                <span class="eyebrow">${data.agenticPlatform.eyebrow}</span>
                                <h2>${data.agenticPlatform.title}</h2>
                                <p>${data.agenticPlatform.description}</p>
                                <a href="${data.agenticPlatform.cta.link}" class="btn btn-outline">${data.agenticPlatform.cta.text}</a>
                            </div>
                            <div class="agentic-visual animate-on-scroll">
                                ${scrollerHTML}
                                <img src="${data.agenticPlatform.image}" alt="${data.agenticPlatform.title}">
                            </div>
                        </div>
                    </div>
                `;
            }
            // Populate Final CTA Section
            const finalCtaContainer = document.getElementById('final-cta-container');
            if (finalCtaContainer && data.finalCta) {
                finalCtaContainer.innerHTML = `
                    <div class="container text-center animate-on-scroll">
                        <h2>${data.finalCta.title}</h2>
                        <p>${data.finalCta.subtitle}</p>
                        <a href="${data.finalCta.cta.link}" class="btn btn-primary btn-lg">${data.finalCta.cta.text}</a>
                    </div>
                `;
            }

        } catch (error) {
            console.error(error);
        }
    };

    // --- Function to load dynamic data for the pricing page ---
    const loadPricingData = async (country) => {
        const tiersContainer = document.getElementById('pricing-tiers-container');
        const comparisonTableBody = document.getElementById('comparison-table-body');

        if (!tiersContainer || !comparisonTableBody) return;

        try {
            const response = await fetch(`/data/${country}/products/pricing.json`);
            if (!response.ok) throw new Error('Failed to load products.pricing.json');
            const data = await response.json();

            if (data.tiers) {
                tiersContainer.innerHTML = data.tiers.map(tier => `
                    <div class="pricing-card ${tier.highlight ? 'highlight' : ''}">
                        <h3>${tier.name}</h3>
                        <p class="price">${tier.price}<span>${tier.period}</span></p>
                        <p class="description">${tier.description}</p>
                        <ul class="features-list">
                            ${tier.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                        </ul>
                        <a href="/company/contact.html" class="btn ${tier.cta_class}">${tier.cta}</a>
                    </div>
                `).join('');
            }

            if (data.featureComparison) {
                comparisonTableBody.innerHTML = data.featureComparison.map(group => `
                    <tr class="group-header">
                        <th colspan="4">${group.groupName}</th>
                    </tr>
                    ${group.features.map(feature => `
                        <tr>
                            <td>${feature.name}</td>
                            <td class="${feature.tiers.basic ? 'check' : 'no-check'}">${feature.tiers.basic ? '✓' : '-'}</td>
                            <td class="${feature.tiers.premium ? 'check' : 'no-check'}">${feature.tiers.premium ? '✓' : '-'}</td>
                            <td class="${feature.tiers.enterprise ? 'check' : 'no-check'}">${feature.tiers.enterprise ? '✓' : '-'}</td>
                        </tr>
                    `).join('')}
                `).join('');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // --- Generic function to load dynamic data for product pages ---
    const loadProductPageData = async (country) => {
        const heroContainer = document.getElementById('product-hero-container');
        if (!heroContainer) return;

        const path = window.location.pathname;
        const pathParts = path.split('/');

        if (pathParts[1] === 'products' && pathParts.length >= 4) {
            const groupName = pathParts[2];
            const pageName = pathParts[3].replace('.html', '');
            const jsonPath = `/data/${country}/products/${groupName}/${pageName}.json`;

            try {
                const response = await fetch(jsonPath);
                if (!response.ok) throw new Error(`Failed to load ${jsonPath}`);
                const data = await response.json();

                if (data.hero) {
                    heroContainer.innerHTML = `
                        <div class="container text-center">
                            <span class="eyebrow animate-on-scroll">${data.hero.eyebrow}</span>
                            <h1 class="animate-on-scroll">${data.hero.title}</h1>
                            <p class="page-hero-subtitle animate-on-scroll">${data.hero.subtitle}</p>
                            <a href="/company/contact.html" class="btn btn-primary btn-lg animate-on-scroll">${data.hero.cta}</a>
                        </div>
                    `;
                }

                const featuresContainer = document.getElementById('features-section-container');
                if (featuresContainer && data.features) {
                    featuresContainer.innerHTML = `
                        <div class="container">
                            <div class="section-header text-center animate-on-scroll">
                                <h2>${data.features.title}</h2>
                                <p>${data.features.subtitle}</p>
                            </div>
                            <div class="features-grid">
                                ${data.features.items.map(item => `
                                    <div class="feature-item animate-on-scroll">
                                        <div class="feature-icon"><i class="${item.icon}"></i></div>
                                        <h3>${item.title}</h3>
                                        <p>${item.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }

                const detailContainer = document.getElementById('detail-section-container');
                if (detailContainer && data.detailSection) {
                    detailContainer.innerHTML = `
                        <div class="container">
                            <div class="agentic-grid">
                                <div class="agentic-text animate-on-scroll">
                                    <span class="eyebrow">${data.detailSection.eyebrow}</span>
                                    <h2>${data.detailSection.title}</h2>
                                    <p>${data.detailSection.description}</p>
                                </div>
                                `;
                    if (data.detailSection.image) {
                        detailContainer.innerHTML += `
                                <div class="agentic-visual animate-on-scroll">
                                    <img src="${data.detailSection.image}" alt="${data.detailSection.title}" style="max-width: 100%; width: auto; height: auto; object-fit: contain;">
                                </div>
                            </div>
                        </div>
                    `;
                    }
                    else {
                        detailContainer.innerHTML += `
                            </div>
                        </div>
                    `;
                    }
                }

                const ctaContainer = document.getElementById('cta-section-container');
                if (ctaContainer && data.cta) {
                    ctaContainer.innerHTML = `
                        <div class="container text-center animate-on-scroll">
                            <h2>${data.cta.title}</h2>
                            <p>${data.cta.subtitle}</p>
                            <a href="/company/contact.html" class="btn btn-primary btn-lg">${data.cta.buttonText}</a>
                        </div>
                    `;
                }

            } catch (error) {
                console.error(error);
            }
        }
    };

    // --- Function to load dynamic data for the contact page ---
    const loadContactData = async (country) => {
        const heroContainer = document.getElementById('contact-hero-container');
        if (!heroContainer) return;
        try {
            const response = await fetch(`/data/${country}/company/contact.json`);
            if (!response.ok) throw new Error('Failed to load contact.json');
            const data = await response.json();
            // ... (rest of contact data loading logic)
        } catch (error) {
            console.error(error);
        }
    };


    // --- Main function to initialize the page ---
    const initializePage = async () => {
        const country = await getUserCountry();

        Promise.all([
            loadComponent('/components/header.html', 'header.header'),
            loadComponent('/components/footer.html', 'footer.footer'),
            loadIndexData(country),
            // loadPricingData(country),
            loadProductPageData(country),
            loadContactData(country)
        ]).then(() => {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            if ("IntersectionObserver" in window) {
                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });
                animatedElements.forEach(el => observer.observe(el));
            } else {
                animatedElements.forEach(el => el.classList.add('is-visible'));
            }
        });
    };

    initializePage();

    // --- Smooth scrolling for anchor links ---
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetElement = document.querySelector(e.target.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });

});
