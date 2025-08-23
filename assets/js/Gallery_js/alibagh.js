        // Sample gallery data
        const galleryData = [
            { category: "nature", title: "Mountain View", desc: "Beautiful mountain landscape", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
            { category: "cities", title: "New York Skyline", desc: "Skyline of New York City", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9" },
            { category: "animals", title: "Majestic Lion", desc: "Lion in the wild", img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d" },
            { category: "food", title: "Gourmet Pizza", desc: "Delicious homemade pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591" },
            { category: "nature", title: "Tropical Beach", desc: "White sand beach with palm trees", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
            { category: "cities", title: "Paris at Night", desc: "Eiffel Tower illuminated at night", img: "https://images.unsplash.com/photo-1431274172761-fca41d930114" },
            { category: "animals", title: "Cute Penguin", desc: "Penguin in Antarctica", img: "https://images.unsplash.com/photo-1584555136174-efb30f9e6fe2" },
            { category: "food", title: "Fresh Salad", desc: "Healthy vegetable salad", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
            { category: "nature", title: "Northern Lights", desc: "Aurora borealis in Iceland", img: "https://images.unsplash.com/photo-1519817650390-64a93db51149" },
            { category: "cities", title: "Tokyo Streets", desc: "Busy streets of Tokyo", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf" },
            { category: "animals", title: "Tropical Fish", desc: "Colorful fish in coral reef", img: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00" },
            { category: "food", title: "Chocolate Cake", desc: "Decadent chocolate dessert", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
            { category: "nature", title: "Waterfall", desc: "Waterfall in the jungle", img: "https://images.unsplash.com/photo-1512273222628-4daea6e55abb" },
            { category: "cities", title: "London Bridge", desc: "Tower Bridge in London", img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383" },
            { category: "animals", title: "Elephant Family", desc: "Elephants in their natural habitat", img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46" },
            { category: "food", title: "Sushi Platter", desc: "Fresh Japanese sushi", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351" },
            { category: "nature", title: "Desert Landscape", desc: "Sand dunes in the desert", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35" },
            { category: "cities", title: "Dubai Skyscrapers", desc: "Modern architecture in Dubai", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c" },
            { category: "animals", title: "Colorful Parrot", desc: "Exotic bird in the rainforest", img: "https://images.unsplash.com/photo-1520596926274-bce75a898ad0" },
            { category: "food", title: "Coffee Art", desc: "Latte with heart pattern", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d" },
            { category: "nature", title: "Autumn Forest", desc: "Fall colors in the forest", img: "https://images.unsplash.com/photo-1448375240586-882707db888b" },
            { category: "cities", title: "Venice Canals", desc: "Gondolas in Venice", img: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0" },
            { category: "animals", title: "Playful Dolphins", desc: "Dolphins jumping in the ocean", img: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8" },
            { category: "food", title: "BBQ Grill", desc: "Summer barbecue with friends", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1" }
        ];

        // Function to generate gallery items
        function generateGallery() {
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = '';
            
            galleryData.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-md-4 col-lg-3 gallery-item';
                col.dataset.category = item.category;
                
                col.innerHTML = `
                    <div class="position-relative">
                        <img src="${item.img}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" class="gallery-img" alt="${item.title}">
                        <div class="img-overlay">
                            <h4 class="img-title">${item.title}</h4>
                            <p class="img-desc">${item.desc}</p>
                            <div class="mt-2">
                                <button class="btn btn-sm btn-outline-light"><i class="fas fa-search-plus"></i> View</button>
                            </div>
                        </div>
                    </div>
                `;
                
                gallery.appendChild(col);
            });
        }

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.dataset.filter;
                
                // Show/hide items based on filter
                document.querySelectorAll('.gallery-item').forEach(item => {
                    if (filter === 'all' || item.dataset.category === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Back to top button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Initialize gallery on page load
        document.addEventListener('DOMContentLoaded', generateGallery);
