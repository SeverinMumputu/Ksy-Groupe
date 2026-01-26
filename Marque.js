 // --- DONNÉES ---
        const data = {
            brands: [
                { id: 'hyundai', name: 'HYUNDAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg' },
                { id: 'kia', name: 'KIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kia_logo.svg/2560px-Kia_logo.svg' },
                { id: 'peugeot', name: 'PEUGEOT', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Peugeot_Logo.svg' },
                { id: 'suzuki', name: 'SUZUKI', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg' },
                { id: 'jetour', name: 'JETOUR', logo: 'https://upload.wikimedia./1200px-Jetour_logo.svg.png' }, // Placeholder logo
                { id: 'baic', name: 'BAIC', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/BAIC_Motor_Logo.svg' },
                { id: 'changan', name: 'CHANGAN', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Changan_Automobile_logo.svg' }
            ],
            models: {
                hyundai: ['Tucson', 'Santa Fe', 'Palisade', 'Elantra', 'Kona', 'Sonata'],
                kia: ['Sportage', 'Sorento', 'Seltos', 'Picanto', 'Rio'],
                suzuki: ['Vitara', 'Swift', 'Alto', 'Ciaz', 'Baleno', 'Fronx', 'Spresso'],
                peugeot: ['208', '308', '2008', '3008', '508', 'Partner', 'Expert', 'Rifter', 'Boxer'],
                jetour: ['X50', 'X70', 'T2', 'Dashing Dasheng'],
                baic: ['X35', 'X55II', 'X7'],
                changan: ['CS55', 'Alsvin']
            },
            categories: [
                { id: 'freinage', name: 'Freinage', icon: 'fa-compact-disc' },
                { id: 'suspension', name: 'Suspension', icon: 'fa-springs' }, // fa-springs n'existe pas, using custom or similar
                { id: 'electricite', name: 'Electricité', icon: 'fa-bolt' },
                { id: 'filtration', name: 'Filtration', icon: 'fa-filter' },
                { id: 'carrosserie', name: 'Carrosserie', icon: 'fa-car-side' },
                { id: 'refroidissement', name: 'Refroidissement', icon: 'fa-snowflake' }
            ],
            // Mapping Catégories -> Produits de base
            productsMap: {
                'freinage': ['Plaquettes de frein AR', 'Plaquettes de frein AV'],
                'suspension': ['Amortisseur AV', 'Amortisseur AR'],
                'electricite': ['Bougies', 'Alternateur', 'Démarreur', 'Phare avant', 'Feu arrière'],
                'filtration': ['Filtre à air', 'Filtre à carburant'],
                'carrosserie': ['Rétroviseur'], // Ajouté Rétroviseur basé sur l'exemple
                'refroidissement': ['Radiateur', 'Compresseur de clim']
            }
        };

        // Images placeholders par type de produit
        const productImages = {
            'Filtre à air': 'Filtre  air HYUNDAI Kona.webp',
            'Feu arrière': 'feu_arriere.jpg',
            'Filtre à carburant': 'Filtre  carburant HYUNDAI Kona.webp',
            'Bougies': 'Bougies KIA Picanto.webp',
            'Alternateur': 'Alternateur HYUNDAI Palisade.webp', // Générique moteur
            'Démarreur': 'Demarreur HYUNDAI Kona.webp',
            'Compresseur de clim': 'Compresseur de climatisation KIA Picanto.webp',
            'Phare avant': 'Phare avant HYUNDAI Elantra.webp',
            'Radiateur': 'Radiateur HYUNDAI Kona.webp',
            'Plaquettes de frein AR': 'Plaquettes de frein AV HYUNDAI Kona.webp',
            'Amortisseur AV': 'Amortisseurs avant KIA Sorento.webp',
            'Amortisseur AR': 'Amortisseurs arriere KIA Sportage.webp',
            'Plaquettes de frein AV': 'Plaquettes de frein AV HYUNDAI Kona.webp',
            'Rétroviseur': 'Rétroviseur gauche KIA Picanto.webp'
        };

        // --- ÉTAT ---
        let state = {
            brand: null,
            model: null,
            category: null
        };

        // --- DOM ELEMENTS ---
        const brandGrid = document.getElementById('brand-grid');
        const modelSection = document.getElementById('model-section');
        const modelGrid = document.getElementById('model-grid');
        const categorySection = document.getElementById('category-section');
        const categoryGrid = document.getElementById('category-grid');
        const productSection = document.getElementById('product-section');
        const productGrid = document.getElementById('product-grid');

        // --- INITIALISATION ---
        function init() {
            renderBrands();
            setupSearch();
        }

        // --- RENDERING FUNCTIONS ---

        function renderBrands() {
            brandGrid.innerHTML = data.brands.map(brand => `
                <div onclick="selectBrand('${brand.id}')" 
                     class="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer hover:bg-white hover:border-ksy-gold transition-all duration-500 flex items-center justify-center aspect-[4/3] relative overflow-hidden">
                    <div class="absolute inset-0 bg-ksy-gold/0 group-hover:bg-ksy-gold/5 transition duration-500"></div>
                    <img src="${brand.logo}" 
                         alt="${brand.name}" 
                         class="max-w-[80%] max-h-[60%] object-contain filter grayscale brightness-200 contrast-0 group-hover:filter-none transition-all duration-500 transform group-hover:scale-110"
                         onerror="this.src='https://placehold.co/100x50/0B1F3B/C9A24D?text=${brand.name}'">
                    <div class="absolute bottom-2 text-[10px] text-gray-400 group-hover:text-ksy-blue font-bold tracking-widest opacity-0 group-hover:opacity-100 transition duration-500 uppercase">
                        Sélectionner
                    </div>
                </div>
            `).join('');
        }

        function selectBrand(brandId) {
            state.brand = data.brands.find(b => b.id === brandId);
            state.model = null;
            state.category = null;

            // UI Updates
            document.getElementById('selected-brand-name').innerText = state.brand.name;
            
            // Hide subsequent sections
            categorySection.classList.add('hidden');
            productSection.classList.add('hidden');
            
            // Render Models
            renderModels(brandId);
            
            // Reveal Model Section
            modelSection.classList.remove('hidden');
            setTimeout(() => {
                modelSection.classList.add('reveal-visible');
                modelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function renderModels(brandId) {
            const models = data.models[brandId];
            modelGrid.innerHTML = models.map(model => `
                <div onclick="selectModel('${model}')" 
                     class="bg-[#0f2a4f] border border-white/5 p-6 rounded-lg cursor-pointer hover:border-ksy-gold group card-hover relative overflow-hidden">
                    <div class="absolute right-0 top-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full"></div>
                    <h4 class="text-xl font-bold text-white group-hover:text-ksy-gold transition">${model}</h4>
                    <p class="text-xs text-gray-400 mt-2 uppercase tracking-wide">Voir les pièces</p>
                    <i class="fas fa-arrow-right absolute bottom-6 right-6 text-white/10 group-hover:text-ksy-gold transform group-hover:translate-x-1 transition"></i>
                </div>
            `).join('');
        }

        function resetToBrand() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                modelSection.classList.remove('reveal-visible');
                setTimeout(() => modelSection.classList.add('hidden'), 500);
            }, 500);
        }

        function selectModel(modelName) {
            state.model = modelName;
            state.category = null;

            // UI Updates
            document.getElementById('breadcrumb-brand').innerText = state.brand.name;
            document.getElementById('breadcrumb-model').innerText = modelName;
            
            productSection.classList.add('hidden');

            renderCategories();
            
            categorySection.classList.remove('hidden');
            setTimeout(() => {
                categorySection.classList.add('reveal-visible');
                categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function resetToModel() {
            modelSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            categorySection.classList.remove('reveal-visible');
            setTimeout(() => categorySection.classList.add('hidden'), 500);
        }

        function renderCategories() {
            categoryGrid.innerHTML = data.categories.map(cat => `
                <div onclick="selectCategory('${cat.id}')"
                     class="bg-[#0B1F3B] border border-white/10 p-8 rounded-xl cursor-pointer hover:bg-[#112a4d] hover:border-ksy-gold transition-all duration-300 text-center group">
                    <div class="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-ksy-gold group-hover:text-ksy-blue transition-colors duration-300">
                        <i class="fas ${cat.icon || 'fa-cogs'} text-2xl text-ksy-gold group-hover:text-ksy-blue"></i>
                    </div>
                    <h4 class="text-lg font-bold text-white tracking-wide">${cat.name}</h4>
                </div>
            `).join('');
        }

        function selectCategory(catId) {
            state.category = data.categories.find(c => c.id === catId);
            
            renderProducts();
            
            productSection.classList.remove('hidden');
            setTimeout(() => {
                productSection.classList.add('reveal-visible');
                productSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function resetToCategory() {
            categorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            productSection.classList.remove('reveal-visible');
            setTimeout(() => productSection.classList.add('hidden'), 500);
        }

        function renderProducts() {
            // Logique de génération des produits
            // Format: [Nom Produit] [Marque] [Modèle]
            
            const baseProducts = data.productsMap[state.category.id];
            
            productGrid.innerHTML = baseProducts.map(baseName => {
                const fullName = `${baseName} ${state.brand.name} ${state.model}`;
                const imgUrl = productImages[baseName] || 'https://placehold.co/300x300/f3f4f6/0B1F3B?text=KSY+Part';
                
                return `
                <div class="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-ksy-gold transition-all duration-300 group flex flex-col">
                    <div class="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                        <img src="${imgUrl}" alt="${fullName}" class="w-full h-full object-cover group-hover:scale-105 transition duration-700">
                        <div class="absolute top-2 right-2 bg-ksy-gold text-ksy-blue text-[10px] font-bold px-2 py-1 rounded">ORIGINE</div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col">
                        <div class="mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">${state.brand.name} / ${state.model}</div>
                        <h3 class="text-lg font-bold text-ksy-blue mb-2 leading-tight group-hover:text-ksy-gold transition">${fullName}</h3>
                        <p class="text-sm text-gray-500 mb-4 line-clamp-2">Pièce certifiée conforme aux normes constructeur ${state.brand.name}. Garantie qualité KSY.</p>
                        
                        <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                            <span class="text-xs font-semibold text-green-600 flex items-center gap-1">
                                <i class="fas fa-check-circle"></i> Compatible
                            </span>
                            <button onclick="openModal('${fullName.replace(/'/g, "\\'")}', '${imgUrl}', '${state.brand.name} ${state.model}')" 
                                    class="text-ksy-blue font-bold text-sm hover:text-ksy-gold transition flex items-center gap-2">
                                DÉTAILS <i class="fas fa-chevron-right text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
            
            document.getElementById('result-context').innerText = `Affichage des pièces ${state.category.name.toLowerCase()} pour ${state.brand.name} ${state.model}`;
        }

        // --- SEARCH LOGIC (Barre de recherche dynamique) ---
        function setupSearch() {
            const input = document.getElementById('global-search');
            const resultsBox = document.getElementById('search-results-dropdown');
            const inputMobile = document.getElementById('mobile-search'); // Minimal hook for mobile

            const performSearch = (query) => {
                if (query.length < 2) {
                    resultsBox.classList.add('hidden');
                    return;
                }

                // Générer une liste plate de tous les produits possibles (virtuellement)
                // C'est lourd, mais pour une démo c'est parfait pour montrer la logique
                let matches = [];
                
                // On cherche d'abord les correspondances Marque/Modèle pour orienter l'utilisateur
                data.brands.forEach(b => {
                    if (b.name.toLowerCase().includes(query.toLowerCase())) {
                        matches.push({ type: 'brand', text: `Pièces pour ${b.name}`, id: b.id });
                    }
                    
                    const models = data.models[b.id];
                    models.forEach(m => {
                        if (m.toLowerCase().includes(query.toLowerCase())) {
                            matches.push({ type: 'model', text: `Pièces pour ${b.name} ${m}`, brandId: b.id, model: m });
                        }
                    });
                });

                // On cherche des noms de produits génériques
                Object.keys(data.productsMap).forEach(catId => {
                    data.productsMap[catId].forEach(prodName => {
                        if (prodName.toLowerCase().includes(query.toLowerCase())) {
                            matches.push({ type: 'product_generic', text: `${prodName} (Toutes marques)`, term: prodName });
                        }
                    });
                });

                renderSearchResults(matches.slice(0, 6)); // Limite à 6 résultats
            };

            input.addEventListener('input', (e) => performSearch(e.target.value));

            function renderSearchResults(results) {
                if (results.length === 0) {
                    resultsBox.innerHTML = '<div class="p-4 text-sm text-gray-500">Aucun résultat trouvé. Essayez "Tucson" ou "Filtre"...</div>';
                } else {
                    resultsBox.innerHTML = results.map(r => `
                        <div class="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 border-b border-gray-100 last:border-0" onclick="handleSearchResultClick('${r.type}', '${r.id || ''}', '${r.brandId || ''}', '${r.model || ''}')">
                            <div class="w-8 h-8 bg-ksy-blue/10 rounded-full flex items-center justify-center text-ksy-blue">
                                <i class="fas ${r.type === 'brand' ? 'fa-car' : (r.type === 'model' ? 'fa-car-side' : 'fa-cog')}"></i>
                            </div>
                            <span class="text-sm font-medium text-gray-700">${r.text}</span>
                        </div>
                    `).join('');
                }
                resultsBox.classList.remove('hidden');
            }
        }

        function handleSearchResultClick(type, id, brandId, model) {
             const resultsBox = document.getElementById('search-results-dropdown');
             resultsBox.classList.add('hidden');
             
             // Simulation de redirection intelligente
             if (type === 'brand') {
                 selectBrand(id);
                 document.getElementById('brand-section').scrollIntoView();
             } else if (type === 'model') {
                 selectBrand(brandId);
                 setTimeout(() => selectModel(model), 800);
             } else {
                 // Générique : on scroll juste vers les marques pour inciter à choisir
                 alert("Veuillez sélectionner votre véhicule pour voir la compatibilité de : " + event.target.innerText);
                 window.scrollTo({ top: 300, behavior: 'smooth' });
             }
        }

        // --- MODAL LOGIC ---
        function openModal(title, image, subtitle) {
            document.getElementById('modal-title').innerText = title;
            document.getElementById('modal-subtitle').innerText = subtitle;
            document.getElementById('modal-image').src = image;
            document.getElementById('modal-desc').innerText = `Ceci est une pièce de rechange de haute qualité pour ${subtitle}. Fabriquée selon les normes OEM pour garantir une performance optimale et une longévité accrue.`;
            document.getElementById('modal-compat').innerText = `Compatible avec toutes les versions de ${subtitle} (Années 2018-2024). Veuillez vérifier le numéro de châssis pour confirmation.`;
            
            document.getElementById('product-modal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('product-modal').classList.add('hidden');
        }

        // --- SEARCH VISIBILITY ---
        // Fermer la recherche si on clique ailleurs
        document.addEventListener('click', function(event) {
            const searchBox = document.getElementById('search-results-dropdown');
            const searchInput = document.getElementById('global-search');
            if (!searchInput.contains(event.target) && !searchBox.contains(event.target)) {
                searchBox.classList.add('hidden');
            }
        });

        // Start
        init();