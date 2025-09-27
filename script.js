// Global Variables
let stage = 0;
let candles = [];
let balloons = [];
let musicEnabled = true;
let soundEnabled = true;
let blessingMessages = [
    "🙏 गजानन महाराजांचे आशीर्वाद तुमच्यावर राहोत 🙏",
    "सद्गुरु गजानन महाराजांचे आशीर्वाद तुमच्या जीवनात सुख, शांती आणि आनंद भरून टाको 🙏",
    "गजानन महाराजांच्या कृपेने तुमच्या प्रत्येक कार्यात यश लाभो 🌸",
    "तुमच्या आयुष्यात आरोग्य, समाधान आणि समृद्धी नांदो 🙏",
    "महाराजांच्या चरणी प्रार्थना — तुमच्या जीवनात सतत नवीन संधी आणि प्रगती येत राहो 🚀",
    "सद्गुरुंच्या कृपाशिर्वादाने तुमच्या वाटचालीत कधीही अडथळा येऊ नये 🌼",
    "गजानन महाराजांची कृपा सदैव तुमच्यावर आणि तुमच्या परिवारावर राहो 🙌",
    "महाराज तुमच्यातील सामर्थ्य जागृत करून नवे यश मिळवण्याची प्रेरणा देवोत ✨",
    "सद्गुरु गजानन महाराजांच्या आशीर्वादाने तुमच्या जीवनातील प्रत्येक दिवस मंगलमय होवो 🌺"
];
let currentBlessingIndex = 0;
let blessingShown = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    initModernEffects();
    initDynamicLighting();
    initInteractiveFireworks();
    initAdvancedBackground();
});

// Modern Effects Initialization
function initModernEffects() {
    createParticleSystem();
    initCursorTrail();
}

// Modern Particle System
function createParticleSystem() {
    const particleSystem = document.getElementById('particleSystem');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'modern-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
        
        particleSystem.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 8000);
    }, 200);
}

// Interactive Cursor Trail
function initCursorTrail() {
    let mouseX = 0, mouseY = 0;
    let trail = [];
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create cursor trail effect
        if (Math.random() > 0.7) {
            const trailDot = document.createElement('div');
            trailDot.className = 'cursor-trail';
            trailDot.style.left = mouseX + 'px';
            trailDot.style.top = mouseY + 'px';
            document.body.appendChild(trailDot);
            
            setTimeout(() => {
                trailDot.remove();
            }, 500);
        }
    });
}

// Advanced Background System
function initAdvancedBackground() {
    createGeometricPatterns();
    createBackgroundParticles();
    initParallaxEffects();
    initInteractiveBackground();
    initColorMorphing();
}

// Geometric Patterns
function createGeometricPatterns() {
    const patternsContainer = document.getElementById('geometricPatterns');
    const shapes = ['triangle', 'circle', 'square'];
    
    setInterval(() => {
        const shape = document.createElement('div');
        shape.className = `geometric-shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        shape.style.left = Math.random() * 100 + '%';
        shape.style.animationDelay = Math.random() * 2 + 's';
        shape.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        patternsContainer.appendChild(shape);
        
        setTimeout(() => {
            shape.remove();
        }, 25000);
    }, 3000);
}

// Background Particles
function createBackgroundParticles() {
    const particlesContainer = document.getElementById('bgParticles');
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'bg-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
        
        particlesContainer.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 15000);
    }, 500);
}

// Parallax Effects
function initParallaxEffects() {
    const layers = [
        document.getElementById('parallaxLayer1'),
        document.getElementById('parallaxLayer2'),
        document.getElementById('parallaxLayer3')
    ];
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        layers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5;
            const moveX = (x - 50) * speed;
            const moveY = (y - 50) * speed;
            
            layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Interactive Background
function initInteractiveBackground() {
    const dynamicBg = document.getElementById('dynamicBg');
    const interactiveEffect = document.getElementById('interactiveBgEffect');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        // Update dynamic background
        dynamicBg.style.setProperty('--mouse-x', x + '%');
        dynamicBg.style.setProperty('--mouse-y', y + '%');
        dynamicBg.style.setProperty('--mouse-x2', (100 - x) + '%');
        dynamicBg.style.setProperty('--mouse-y2', (100 - y) + '%');
        dynamicBg.style.setProperty('--mouse-x3', (x + 20) % 100 + '%');
        dynamicBg.style.setProperty('--mouse-y3', (y + 20) % 100 + '%');
        
        // Update interactive effect
        interactiveEffect.style.setProperty('--interactive-x', x + '%');
        interactiveEffect.style.setProperty('--interactive-y', y + '%');
        interactiveEffect.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        interactiveEffect.classList.remove('active');
    });
}

// Color Morphing
function initColorMorphing() {
    const colorMorph = document.getElementById('colorMorph');
    const colors = [
        ['#1e3c72', '#2a5298', '#4dabf7', '#51cf66'],
        ['#ff6b6b', '#ee5a52', '#ffd43b', '#fab005'],
        ['#da77f2', '#cc5de8', '#845ef7', '#7950f2'],
        ['#51cf66', '#40c057', '#37b24d', '#2f9e44']
    ];
    
    let currentColorIndex = 0;
    
    setInterval(() => {
        const currentColors = colors[currentColorIndex];
        colorMorph.style.setProperty('--color-1', currentColors[0]);
        colorMorph.style.setProperty('--color-2', currentColors[1]);
        colorMorph.style.setProperty('--color-3', currentColors[2]);
        colorMorph.style.setProperty('--color-4', currentColors[3]);
        
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }, 8000);
}

// Dynamic Lighting
function initDynamicLighting() {
    const lightingEffect = document.getElementById('lightingEffect');
    
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        lightingEffect.style.setProperty('--mouse-x', x + '%');
        lightingEffect.style.setProperty('--mouse-y', y + '%');
        lightingEffect.classList.add('active');
    });

    document.addEventListener('mouseleave', () => {
        lightingEffect.classList.remove('active');
    });
}

// Interactive Fireworks
function initInteractiveFireworks() {
    const fireworkContainer = document.getElementById('fireworkContainer');
    
    document.addEventListener('click', (e) => {
        if (e.target.id !== 'cakeContainer' && !e.target.closest('.cake-container') && 
            !e.target.closest('.photo-gallery')) {
            createInteractiveFirework(e.clientX, e.clientY);
        }
    });
}

function createInteractiveFirework(x, y) {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#da77f2', '#FFD700'];
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'interactive-firework';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.transform = `translate(${vx}px, ${vy}px)`;
        particle.style.transition = 'all 1s ease-out';
        particle.style.opacity = '1';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = `translate(${vx * 1.5}px, ${vy * 1.5}px) scale(0)`;
        }, 100);
        
        setTimeout(() => {
            particle.remove();
        }, 1100);
    }
}

// Memory System
const memories = [
    {
        title: "Birthday Cake Memory 🎂",
        text: "Remember the first time we celebrated your birthday? The joy in your eyes was priceless! Here's to many more amazing years ahead!"
    },
    {
        title: "Celebration Time 🎉",
        text: "Every moment with you is a celebration! Your laughter brings so much happiness to everyone around you. Keep shining bright!"
    },
    {
        title: "Magical Moments ✨",
        text: "You have this magical ability to make ordinary days feel special. Thank you for bringing so much light into our lives!"
    }
];

function showMemory(index) {
    const memoryMessage = document.getElementById('memoryMessage');
    const memoryTitle = document.getElementById('memoryTitle');
    const memoryText = document.getElementById('memoryText');
    
    if (memories[index]) {
        memoryTitle.textContent = memories[index].title;
        memoryText.textContent = memories[index].text;
        memoryMessage.classList.remove('hide');
        memoryMessage.classList.add('show');
    }
}

function hideMemory() {
    const memoryMessage = document.getElementById('memoryMessage');
    memoryMessage.classList.remove('show');
    memoryMessage.classList.add('hide');
}

// Enhanced Effects
function createHearts(x, y) {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '💖';
        heart.style.left = (x + Math.random() * 100 - 50) + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 3000);
    }
}

function createSparkles(x, y) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = '✨';
        sparkle.style.left = (x + Math.random() * 80 - 40) + 'px';
        sparkle.style.top = (y + Math.random() * 80 - 40) + 'px';
        sparkle.style.fontSize = (Math.random() * 15 + 10) + 'px';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Countdown Function
function startCountdown() {
    const countdown = document.getElementById('countdown');
    let count = 3;
    
    const countInterval = setInterval(() => {
        if (count > 1) {
            count--;
            countdown.textContent = count;
            countdown.style.animation = 'countdownPulse 1s ease-in-out';
        } else if (count === 1) {
            countdown.textContent = 'Boom!';
            countdown.className = 'countdown boom';
            count--;
        } else {
            countdown.style.display = 'none';
            clearInterval(countInterval);
            startMatrixEffect();
        }
    }, 1000);
}

// Matrix Effect
function startMatrixEffect() {
    const matrix = document.getElementById('matrix');
    matrix.style.opacity = '1';
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = Math.random() * 100 + '%';
            char.style.animationDelay = Math.random() * 1 + 's';
            matrix.appendChild(char);
            
            setTimeout(() => {
                char.remove();
            }, 2500);
        }, i * 80);
    }
    
    setTimeout(() => {
        matrix.style.opacity = '0';
        startTypingAnimation();
    }, 1000);
}

// Typing Animation
function startTypingAnimation() {
    const container = document.getElementById('typingContainer');
    const textElement = document.getElementById('typedText');
    const text = 'Happy Birthday Ankita 🎉';
    
    container.style.opacity = '1';
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
            // Add rainbow effect to the text
            textElement.classList.add('rainbow');
            setTimeout(() => {
                startFireworks();
                createBalloons();
                startEmojiAnimation();
                showCake();
                showBlessing();
            }, 500);
        }
    }, 150);
}

// Fireworks
function startFireworks() {
    setInterval(() => {
        createFirework();
    }, 800);
}

function createFirework() {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#da77f2'];
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.6;
    
    for (let i = 0; i < 12; i++) {
        const spark = document.createElement('div');
        spark.className = 'firework';
        spark.style.left = x + 'px';
        spark.style.top = y + 'px';
        spark.style.background = colors[Math.floor(Math.random() * colors.length)];
        spark.style.animation = `fireworkExplode 1s ease-out forwards`;
        spark.style.transform = `rotate(${i * 30}deg) translateX(100px)`;
        
        document.body.appendChild(spark);
        
        setTimeout(() => {
            spark.remove();
        }, 1000);
    }
}

// Balloons
function createBalloons() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = `balloon ${colors[Math.floor(Math.random() * colors.length)]}`;
            balloon.style.left = Math.random() * (window.innerWidth - 80) + 'px';
            balloon.style.top = window.innerHeight + 'px';
            balloon.style.animation = `balloonFloat 4s ease-in-out infinite, balloonRise 3s ease-out forwards`;
            
            balloon.onclick = () => popBalloon(balloon);
            
            document.body.appendChild(balloon);
            balloons.push(balloon);
            
            // Animate balloon rising
            setTimeout(() => {
                balloon.style.top = Math.random() * (window.innerHeight * 0.3) + 100 + 'px';
            }, 100);
        }, i * 300);
    }
}

function popBalloon(balloon) {
    balloon.className += ' balloon-pop';
    
    // Create pop effect
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.textContent = '🎉';
        particle.style.position = 'absolute';
        particle.style.left = balloon.offsetLeft + 'px';
        particle.style.top = balloon.offsetTop + 'px';
        particle.style.fontSize = '2rem';
        particle.style.animation = `confettiFall 2s ease-out forwards`;
        particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 2000);
    }
    
    setTimeout(() => balloon.remove(), 500);
}

// Emoji Animation
function startEmojiAnimation() {
    const emojis = ['🎂', '🎈', '🎉', '🎁', '✨', '🌟', '💖', '🎊'];
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + 'px';
        emoji.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 6000);
    }, 1000);
}

// Show Cake
function showCake() {
    const cakeContainer = document.getElementById('cakeContainer');
    const cakeHint = document.getElementById('cakeHint');
    cakeContainer.style.opacity = '1';
    
    // Show hint after a delay
    setTimeout(() => {
        cakeHint.style.opacity = '1';
    }, 2000);
    
    cakeContainer.onclick = () => blowCandles();
}

// Blow Candles
function blowCandles() {
    const cakeHint = document.getElementById('cakeHint');
    cakeHint.style.opacity = '0'; // Hide hint when cake is clicked
    
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        setTimeout(() => {
            candle.classList.add('blown-out');
            createFirework(); // Extra fireworks when candles are blown
        }, index * 200);
    });
    
    setTimeout(() => {
        showModal();
    }, 2000);
}

// Show Blessing with Typing Animation
function showBlessing() {
    setTimeout(() => {
        const blessing = document.getElementById('blessing');
        blessing.style.opacity = '1';
        blessingShown = true;
        startBlessingTyping();
    }, 1000); // Reduced from 3000ms to 1000ms
}

// Auto-cycle through blessing messages with typing effect
function startBlessingTyping() {
    let currentMessageIndex = 0;
    
    function typeNextMessage() {
        const blessing = document.getElementById('blessing');
        const message = blessingMessages[currentMessageIndex];
        
        // Clear previous message
        blessing.textContent = '';
        
        // Type the message character by character
        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < message.length) {
                blessing.textContent += message.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(typeInterval);
                
                // Wait 1 second, then move to next message
                setTimeout(() => {
                    currentMessageIndex = (currentMessageIndex + 1) % blessingMessages.length;
                    typeNextMessage();
                }, 1000); // Reduced from 2000ms to 1000ms
            }
        }, 50); // Typing speed - increased from 100ms to 50ms
    }
    
    // Start the first message
    typeNextMessage();
}

// Enhanced Click Effects with Modern Animations
document.body.addEventListener('click', (e) => {
    if (e.target.id !== 'cakeContainer' && !e.target.closest('.cake-container')) {
        createConfetti(e.clientX, e.clientY);
        createHearts(e.clientX, e.clientY);
        createSparkles(e.clientX, e.clientY);
        createModernRipple(e.clientX, e.clientY);
    }
});

// Modern Ripple Effect
function createModernRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'radial-gradient(circle, rgba(255,107,107,0.3), transparent)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1000';
    ripple.style.animation = 'rippleExpand 0.6s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleExpand {
        0% {
            width: 0px;
            height: 0px;
            opacity: 1;
        }
        100% {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

function createConfetti(x, y) {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#da77f2', '#FFD700'];
    
    for (let i = 0; i < 15; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animation = `confettiFall 3s linear forwards`;
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Modal Functions
function showModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    showFinalScene();
}

// Final Scene
function showFinalScene() {
    // Hide all elements
    document.getElementById('typingContainer').style.opacity = '0';
    document.getElementById('cakeContainer').style.opacity = '0';
    document.getElementById('blessing').style.opacity = '0';
    
    // Stop all animations
    document.querySelectorAll('.floating-emoji, .balloon, .confetti').forEach(el => {
        el.style.animationPlayState = 'paused';
    });
    
    // Show final message
    setTimeout(() => {
        document.getElementById('finalMessage').style.opacity = '1';
    }, 1000);
}
