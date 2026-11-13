// ===== 1. Sapa User =====
function sapaUser() {
    const nama = prompt("Siapa nama lu?");
    if (nama) {
        alert(`Halo ${nama}! Selamat datang di website gue 🎉`);
    } else {
        alert("Yah gak mau kasih nama 😢");
    }
}

// ===== 2. Counter Klik =====
let count = 0;
const countBtn = document.getElementById("countBtn");
const clickCount = document.getElementById("clickCount");

countBtn.addEventListener("click", () => {
    count++;
    clickCount.textContent = count;
    countBtn.textContent = `Udah ${count}x klik!`;
});

// ===== 3. Dark/Light Mode Toggle =====
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    if (body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

// ===== 4. Form Submit =====
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    formMessage.textContent = `Makasih ${nama}! Pesan lu udah gue terima ✅`;
    contactForm.reset();
    
    setTimeout(() => {
        formMessage.textContent = "";
    }, 4000);
});

// ===== 5. Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===== 6. Animasi Munculin Section =====
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

console.log("✅ Website loaded! Semua fitur siap.");