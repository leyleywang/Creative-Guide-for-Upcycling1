import { initRecognitionModule } from './modules/recognition.js';
import { initTutorialsModule, closeModal as closeTutorialModal } from './modules/tutorials.js';
import { initCommunityModule, closeModal as closeCommunityModal } from './modules/community.js';
import { initMaterialsModule, closeModal as closeMaterialsModal } from './modules/materials.js';

let currentSection = 'recognition';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    initNavigation();
    initModalOverlay();
    
    initRecognitionModule();
    initTutorialsModule();
    initCommunityModule();
    initMaterialsModule();

    console.log('旧物改造创意指南应用已启动');
}

function initNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSection = btn.dataset.section;
            if (!targetSection) return;

            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });

            currentSection = targetSection;

            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar && cartSidebar.classList.contains('open')) {
                cartSidebar.classList.remove('open');
                const cartOverlay = document.getElementById('cartOverlay');
                if (cartOverlay) {
                    cartOverlay.classList.remove('visible');
                }
            }
        });
    });
}

function initModalOverlay() {
    let overlay = document.querySelector('.modal-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);
    }

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeAllModals();
        }
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('open');
    });

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
    }
}

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('open');
    }

    const openModals = document.querySelectorAll('.modal.open');
    if (openModals.length === 0) {
        const overlay = document.querySelector('.modal-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
        }
    }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

export { currentSection, closeAllModals };
