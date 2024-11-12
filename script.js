// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button Functionality
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.textContent = 'Top';
backToTopButton.style.display = 'none';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.padding = '10px 20px';
backToTopButton.style.backgroundColor = 'blue';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Product Search Filter
document.getElementById('productSearch').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
        const productName = card.querySelector('.card-title').textContent.toLowerCase();
        card.style.display = productName.includes(searchValue) ? 'block' : 'none';
    });
});

// Highlight active nav-link on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Hover effect for product cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = 'none';
    });
});

// Carousel auto-slide and pause on hover
const carousel = document.querySelector('#carouselExampleIndicators');
let autoSlide = setInterval(() => {
    const nextButton = carousel.querySelector('.carousel-control-next');
    nextButton.click();
}, 3000);

carousel.addEventListener('mouseenter', () => clearInterval(autoSlide));
carousel.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        const nextButton = carousel.querySelector('.carousel-control-next');
        nextButton.click();
    }, 3000);
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    
    // Efek Parallax dengan Kecepatan dan Zoom
    parallax.style.transform = `translateY(${scrollPosition * 0.3}px) scale(1.1)`;
    parallax.style.opacity = `${1 - scrollPosition / 800}`; // Menambahkan efek opacity saat scroll
  });

  
  window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.scrollY;
    
    // Efek Parallax dengan Kecepatan dan Zoom
    parallax.style.transform = `translateY(${scrollPosition * 0.3}px) scale(1.1)`;
    parallax.style.opacity = `${1 - scrollPosition / 800}`; // Menambahkan efek opacity saat scroll
  });
  
  
// Efek Parallax dan animasi scroll
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const parallaxContainer = document.querySelector('.parallax-container');
    const scrollPosition = window.scrollY;
  
    // Zoom out dan blur parallax pada scroll
    if (scrollPosition > 100) {
      parallaxContainer.classList.add('scrolled');
    } else {
      parallaxContainer.classList.remove('scrolled');
    }
    
    // Animasi scroll untuk konten di parallax
    parallax.style.transform = `translateY(${scrollPosition * 0.3}px) scale(1.1)`;
    parallax.style.opacity = `${1 - scrollPosition / 800}`;
  });
  
  // Efek sentuhan untuk kartu produk pada layar sentuh
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('touchstart', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('touchend', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
  });

  // Script untuk mengaktifkan fungsi accordion
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        // Tutup accordion lainnya
        accordions.forEach(item => {
            if (item !== this) {
                item.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle display konten accordion saat ini
        const content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});


function filterProvider(provider) {
    // Dapatkan semua baris tabel
    const rows = document.querySelectorAll("#priceTableBody tr");

    // Loop melalui semua baris tabel
    rows.forEach(row => {
        // Jika baris cocok dengan provider yang dipilih, tampilkan; jika tidak, sembunyikan
        if (row.classList.contains(provider)) {
            row.classList.remove("hidden");
        } else {
            row.classList.add("hidden");
        }
    });
}

// Fungsi untuk menampilkan semua data ketika pertama kali memuat halaman
function showAllData() {
    const rows = document.querySelectorAll("#priceTableBody tr");
    rows.forEach(row => row.classList.remove("hidden"));
}

// Panggil fungsi untuk menampilkan semua data saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", showAllData);


