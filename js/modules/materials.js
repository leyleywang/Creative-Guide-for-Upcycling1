const materialsData = [
    {
        id: 1,
        name: '热熔胶枪套装',
        icon: '🔫',
        category: 'adhesive',
        categoryName: '粘合剂',
        description: '家用高粘热熔胶枪，配合胶棒使用，适合各种手工DIY粘合',
        tags: ['必备工具', '快速粘合'],
        price: 29.9,
        unit: '套'
    },
    {
        id: 2,
        name: '强力双面胶',
        icon: '📎',
        category: 'adhesive',
        categoryName: '粘合剂',
        description: '高粘度双面胶带，不留残胶，适合墙面、布料等多种材质',
        tags: ['无痕粘贴'],
        price: 12.8,
        unit: '卷'
    },
    {
        id: 3,
        name: '木工专用白胶',
        icon: '🧴',
        category: 'adhesive',
        categoryName: '粘合剂',
        description: '环保型木工胶水，粘接强度高，干燥后可打磨上漆',
        tags: ['家具修复'],
        price: 18.5,
        unit: '瓶'
    },
    {
        id: 4,
        name: '502强力胶水',
        icon: '💧',
        category: 'adhesive',
        categoryName: '粘合剂',
        description: '瞬间强力胶，适合塑料、金属、陶瓷等多种材质的快速粘接',
        tags: ['快速固化'],
        price: 8.9,
        unit: '支'
    },
    {
        id: 5,
        name: '木器漆套装',
        icon: '🎨',
        category: 'paint',
        categoryName: '涂料颜料',
        description: '环保水性木器漆，多色可选，遮盖力强，适合家具翻新',
        tags: ['家具翻新', '多色可选'],
        price: 45.0,
        unit: '罐'
    },
    {
        id: 6,
        name: '丙烯颜料套装',
        icon: '🖌️',
        category: 'paint',
        categoryName: '涂料颜料',
        description: '12色专业丙烯颜料，防水耐晒，适合布料、木材、墙面等绘画',
        tags: ['手绘装饰', '防水持久'],
        price: 32.0,
        unit: '套'
    },
    {
        id: 7,
        name: '金属防锈漆',
        icon: '🛡️',
        category: 'paint',
        categoryName: '涂料颜料',
        description: '带锈转化防锈漆，免打磨直接涂刷，适合金属家具翻新',
        tags: ['金属翻新'],
        price: 38.0,
        unit: '罐'
    },
    {
        id: 8,
        name: '墙面自喷漆',
        icon: '🎯',
        category: 'paint',
        categoryName: '涂料颜料',
        description: '自动喷漆，操作简单，适合小面积家具、工艺品改色',
        tags: ['操作简单'],
        price: 15.9,
        unit: '瓶'
    },
    {
        id: 9,
        name: '亚麻布料',
        icon: '🧵',
        category: 'fabric',
        categoryName: '布料织物',
        description: '纯色亚麻面料，质感厚实，适合椅面、抱枕、桌布等软装',
        tags: ['软装必备'],
        price: 25.0,
        unit: '米'
    },
    {
        id: 10,
        name: '牛仔布料',
        icon: '👖',
        category: 'fabric',
        categoryName: '布料织物',
        description: '加厚牛仔面料，耐磨耐用，适合包包、坐垫等创意改造',
        tags: ['耐磨耐用'],
        price: 35.0,
        unit: '米'
    },
    {
        id: 11,
        name: '碎花棉布',
        icon: '🌸',
        category: 'fabric',
        categoryName: '布料织物',
        description: '田园风碎花棉布，柔软舒适，适合抱枕、装饰、手工布艺',
        tags: ['田园风格'],
        price: 18.0,
        unit: '米'
    },
    {
        id: 12,
        name: '防水帆布',
        icon: '⛺',
        category: 'fabric',
        categoryName: '布料织物',
        description: '加厚防水帆布，适合户外家具、收纳袋、帐篷等制作',
        tags: ['户外适用'],
        price: 28.0,
        unit: '米'
    },
    {
        id: 13,
        name: '家具拉手套装',
        icon: '🚪',
        category: 'hardware',
        categoryName: '五金配件',
        description: '北欧风格柜门拉手，多款式可选，柜子翻新必备',
        tags: ['家具翻新'],
        price: 15.0,
        unit: '个'
    },
    {
        id: 14,
        name: '合页铰链',
        icon: '🔗',
        category: 'hardware',
        categoryName: '五金配件',
        description: '不锈钢阻尼铰链，柜门开合顺畅静音，安装简单',
        tags: ['柜门配件'],
        price: 8.0,
        unit: '个'
    },
    {
        id: 15,
        name: '万向轮脚轮',
        icon: '🛞',
        category: 'hardware',
        categoryName: '五金配件',
        description: '静音万向轮，带刹车功能，适合给家具加装移动功能',
        tags: ['移动家具'],
        price: 12.0,
        unit: '个'
    },
    {
        id: 16,
        name: '三角支架',
        icon: '📐',
        category: 'hardware',
        categoryName: '五金配件',
        description: '加厚铁艺支架，承重力强，适合制作搁板、置物架',
        tags: ['置物架'],
        price: 10.0,
        unit: '对'
    },
    {
        id: 17,
        name: '砂纸套装',
        icon: '🧽',
        category: 'tools',
        categoryName: '工具耗材',
        description: '多种目数砂纸套装，从粗到细，适合打磨、抛光各种材质',
        tags: ['打磨必备'],
        price: 9.9,
        unit: '套'
    },
    {
        id: 18,
        name: '美工刀套装',
        icon: '🔪',
        category: 'tools',
        categoryName: '工具耗材',
        description: '专业美工刀，配备用刀片，适合切割纸板、布料、塑料等',
        tags: ['切割工具'],
        price: 12.0,
        unit: '套'
    },
    {
        id: 19,
        name: '电钻套装',
        icon: '⚡',
        category: 'tools',
        categoryName: '工具耗材',
        description: '家用充电式电钻，多档位调节，适合钻孔、拧螺丝等操作',
        tags: ['电动工具'],
        price: 168.0,
        unit: '套'
    },
    {
        id: 20,
        name: '剪刀套装',
        icon: '✂️',
        category: 'tools',
        categoryName: '工具耗材',
        description: '多功能剪刀套装，含裁缝剪、手工剪、厨房剪等',
        tags: ['手工必备'],
        price: 25.0,
        unit: '套'
    }
];

let currentMaterialType = 'all';
let cart = [];

export function initMaterialsModule() {
    renderMaterials();
    setupFilterHandlers();
    setupCartHandlers();
    setupCheckout();
}

function renderMaterials() {
    const container = document.getElementById('materialsGrid');
    if (!container) return;

    const filteredMaterials = currentMaterialType === 'all'
        ? materialsData
        : materialsData.filter(m => m.category === currentMaterialType);

    if (filteredMaterials.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <span class="empty-state-icon">🛒</span>
                <h4 class="empty-state-title">暂无相关材料</h4>
                <p class="empty-state-text">试试其他分类看看</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredMaterials.map(material => {
        const cartItem = cart.find(item => item.id === material.id);
        const inCart = !!cartItem;
        const quantity = cartItem ? cartItem.quantity : 0;

        return `
            <div class="material-card" data-material-id="${material.id}">
                <div class="material-card-header">
                    <div class="material-icon">${material.icon}</div>
                    <div class="material-info">
                        <h4 class="material-name">${material.name}</h4>
                        <span class="material-category">${material.categoryName}</span>
                    </div>
                </div>
                <p class="material-description">${material.description}</p>
                <div class="material-tags">
                    ${material.tags.map(tag => `<span class="material-tag">${tag}</span>`).join('')}
                </div>
                <div class="material-footer">
                    <span class="material-price">
                        ¥${material.price.toFixed(2)}
                        <span class="unit">/${material.unit}</span>
                    </span>
                    <div class="material-action">
                        ${inCart ? `
                            <div class="material-quantity">
                                <button class="material-quantity-btn minus-btn" data-material-id="${material.id}">-</button>
                                <span class="material-quantity-value">${quantity}</span>
                                <button class="material-quantity-btn plus-btn" data-material-id="${material.id}">+</button>
                            </div>
                        ` : `
                            <button class="material-add-btn" data-material-id="${material.id}">+</button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    setupMaterialCardHandlers();
}

function setupMaterialCardHandlers() {
    const addBtns = document.querySelectorAll('.material-add-btn');
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');

    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const materialId = parseInt(btn.dataset.materialId);
            addToCart(materialId);
        });
    });

    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const materialId = parseInt(btn.dataset.materialId);
            updateCartQuantity(materialId, -1);
        });
    });

    plusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const materialId = parseInt(btn.dataset.materialId);
            updateCartQuantity(materialId, 1);
        });
    });
}

function setupFilterHandlers() {
    const filterBtns = document.querySelectorAll('.material-filter');
    if (!filterBtns) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMaterialType = btn.dataset.type;
            renderMaterials();
        });
    });
}

function addToCart(materialId) {
    const material = materialsData.find(m => m.id === materialId);
    if (!material) return;

    const existingItem = cart.find(item => item.id === materialId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: material.id,
            name: material.name,
            icon: material.icon,
            price: material.price,
            unit: material.unit,
            quantity: 1
        });
    }

    renderMaterials();
    updateCartUI();
    showToast(`已添加 ${material.name} 到购物清单`, 'success');
}

function updateCartQuantity(materialId, delta) {
    const cartItem = cart.find(item => item.id === materialId);
    if (!cartItem) return;

    cartItem.quantity += delta;

    if (cartItem.quantity <= 0) {
        cart = cart.filter(item => item.id !== materialId);
        const material = materialsData.find(m => m.id === materialId);
        if (material) {
            showToast(`已移除 ${material.name}`, 'info');
        }
    }

    renderMaterials();
    updateCartUI();
}

function removeFromCart(materialId) {
    const material = materialsData.find(m => m.id === materialId);
    cart = cart.filter(item => item.id !== materialId);
    
    renderMaterials();
    updateCartUI();
    
    if (material) {
        showToast(`已移除 ${material.name}`, 'info');
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    if (cartBadge) {
        if (totalItems > 0) {
            cartBadge.style.display = 'flex';
            cartBadge.textContent = totalItems;
        } else {
            cartBadge.style.display = 'none';
        }
    }

    if (cartTotal) {
        cartTotal.textContent = `¥${totalPrice.toFixed(2)}`;
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <span>🛒</span>
                    <p>购物清单为空</p>
                    <p class="cart-hint">点击材料卡片的"+"添加</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item" data-cart-id="${item.id}">
                    <div class="cart-item-icon">${item.icon}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-header">
                            <span class="cart-item-name">${item.name}</span>
                            <button class="cart-item-remove" data-cart-id="${item.id}">×</button>
                        </div>
                        <div class="cart-item-footer">
                            <span class="cart-item-price">¥${(item.price * item.quantity).toFixed(2)}</span>
                            <div class="cart-item-quantity">
                                <button class="cart-item-qty-btn minus" data-cart-id="${item.id}">-</button>
                                <span class="cart-item-qty-value">${item.quantity}</span>
                                <button class="cart-item-qty-btn plus" data-cart-id="${item.id}">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            setupCartItemHandlers();
        }
    }

    if (cartFooter) {
        cartFooter.style.display = cart.length > 0 ? 'block' : 'none';
    }
}

function setupCartItemHandlers() {
    const removeBtns = document.querySelectorAll('.cart-item-remove');
    const minusBtns = document.querySelectorAll('.cart-item-qty-btn.minus');
    const plusBtns = document.querySelectorAll('.cart-item-qty-btn.plus');

    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cartId = parseInt(btn.dataset.cartId);
            removeFromCart(cartId);
        });
    });

    minusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cartId = parseInt(btn.dataset.cartId);
            updateCartQuantity(cartId, -1);
        });
    });

    plusBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const cartId = parseInt(btn.dataset.cartId);
            updateCartQuantity(cartId, 1);
        });
    });
}

function setupCartHandlers() {
    const cartFab = document.getElementById('cartFab');
    const cartSidebar = document.getElementById('cartSidebar');

    if (cartFab && cartSidebar) {
        cartFab.addEventListener('click', () => {
            cartSidebar.classList.toggle('open');
            updateCartOverlay();
        });
    }
}

function updateCartOverlay() {
    let overlay = document.getElementById('cartOverlay');
    const cartSidebar = document.getElementById('cartSidebar');

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'cartOverlay';
        overlay.className = 'cart-overlay';
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar) {
                cartSidebar.classList.remove('open');
            }
            overlay.classList.remove('visible');
        });
    }

    if (cartSidebar && cartSidebar.classList.contains('open')) {
        overlay.classList.add('visible');
    } else {
        overlay.classList.remove('visible');
    }
}

function setupCheckout() {
    const checkoutBtn = document.getElementById('checkoutBtn');
    const confirmBtn = document.getElementById('confirmCheckoutBtn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            showCheckoutModal();
        });
    }

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            handleCheckout();
        });
    }
}

function showCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (!checkoutItems) return;

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-image">${item.icon}</div>
            <div class="checkout-item-info">
                <div class="checkout-item-name">${item.name}</div>
                <div class="checkout-item-price">¥${item.price.toFixed(2)}/${item.unit}</div>
            </div>
            <div class="checkout-item-quantity">
                <span>× ${item.quantity}</span>
            </div>
        </div>
    `).join('');

    if (checkoutTotal) {
        checkoutTotal.textContent = `¥${totalPrice.toFixed(2)}`;
    }

    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }
    updateCartOverlay();

    if (modal) {
        modal.classList.add('open');
    }
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }
}

function handleCheckout() {
    if (cart.length === 0) {
        showToast('购物清单为空', 'error');
        return;
    }

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    showToast(`采购成功！总金额：¥${totalPrice.toFixed(2)}`, 'success');
    
    cart = [];
    renderMaterials();
    updateCartUI();
    closeModal('checkoutModal');
}

function showToast(message, type = 'info') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '✕';

    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span>${message}</span>
    `;

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('open');
    }

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
    }
}

export { materialsData, cart, currentMaterialType };
