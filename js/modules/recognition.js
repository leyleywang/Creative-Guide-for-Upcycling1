const quickItems = [
    { id: 'chair', icon: '🪑', name: '旧椅子' },
    { id: 'table', icon: '🪵', name: '旧桌子' },
    { id: 'cabinet', icon: '🗄️', name: '旧柜子' },
    { id: 'clothes', icon: '👔', name: '旧衣服' },
    { id: 'bottle', icon: '🍾', name: '玻璃瓶' },
    { id: 'can', icon: '🥫', name: '易拉罐' },
    { id: 'carton', icon: '📦', name: '纸箱' },
    { id: 'tires', icon: '🛞', name: '旧轮胎' },
    { id: 'pallet', icon: '🪚', name: '木托盘' },
    { id: 'door', icon: '🚪', name: '旧门板' },
    { id: 'ladder', icon: '🪜', name: '旧梯子' },
    { id: 'suitcase', icon: '🧳', name: '旧行李箱' }
];

const itemDatabase = {
    chair: {
        name: '木质旧椅子',
        icon: '🪑',
        description: '这是一把有年代感的实木椅子，结构稳固但外观陈旧，可以通过翻新改造赋予新生命',
        confidence: 95,
        suggestions: [
            {
                icon: '🎨',
                title: '翻新上色',
                description: '用砂纸打磨后重新刷漆，选择复古白色或明亮的彩色，让椅子焕然一新'
            },
            {
                icon: '🧵',
                title: '换布翻新',
                description: '更换椅面布料，选择自己喜欢的花纹，搭配不同风格的抱枕'
            },
            {
                icon: '🪴',
                title: '植物花架',
                description: '将椅子改造成多层花架，在椅面上摆放绿植，靠背用来悬挂小花盆'
            }
        ]
    },
    table: {
        name: '旧木桌',
        icon: '🪵',
        description: '实木材质的旧桌子，桌面可能有划痕和磨损，但结构完好',
        confidence: 92,
        suggestions: [
            {
                icon: '🎨',
                title: '桌面翻新',
                description: '使用木蜡油或清漆翻新桌面，保留木质纹理，增加复古感'
            },
            {
                icon: '🪟',
                title: '玻璃台面',
                description: '在桌面加装一块钢化玻璃，既保护桌面又增加现代感'
            },
            {
                icon: '✂️',
                title: '拆分改造',
                description: '将桌面拆分改造成墙面置物架，桌腿改造成小边几'
            }
        ]
    },
    cabinet: {
        name: '旧柜子',
        icon: '🗄️',
        description: '年代感十足的储物柜，收纳功能完好但外观过时',
        confidence: 90,
        suggestions: [
            {
                icon: '🎨',
                title: '改色换门',
                description: '重新涂刷柜子主体，更换或重新设计柜门，添加新的五金配件'
            },
            {
                icon: '📚',
                title: '开放式书柜',
                description: '拆除柜门，添加隔板，改造成开放式展示书架'
            },
            {
                icon: '🌿',
                title: '植物收纳柜',
                description: '将柜子改造成植物生长柜，增加补光灯和加湿器'
            }
        ]
    },
    clothes: {
        name: '旧衣物',
        icon: '👔',
        description: '款式过时但面料完好的衣物，可以改造再利用',
        confidence: 88,
        suggestions: [
            {
                icon: '🧵',
                title: '重新剪裁',
                description: '将长款改短、宽松改合身，或添加装饰元素'
            },
            {
                icon: '👜',
                title: '布艺包包',
                description: '用旧衣物的面料制作包包、笔袋、零钱包等小物件'
            },
            {
                icon: '🛏️',
                title: '家居用品',
                description: '改造成抱枕、靠垫、坐垫、桌布等家居装饰'
            },
            {
                icon: '🧸',
                title: '手作玩偶',
                description: '用不同颜色和材质的布料制作布艺玩偶或公仔'
            }
        ]
    },
    bottle: {
        name: '玻璃瓶',
        icon: '🍾',
        description: '各种形状的玻璃瓶，透明或有色，可以创意改造',
        confidence: 96,
        suggestions: [
            {
                icon: '🪴',
                title: '水培花瓶',
                description: '清洗干净后直接作为水培植物容器，或用麻绳、油漆装饰'
            },
            {
                icon: '💡',
                title: '创意灯具',
                description: '加装LED灯串，做成温馨的小夜灯或装饰灯'
            },
            {
                icon: '🧂',
                title: '收纳容器',
                description: '改造成调料瓶、储物罐，添加创意标签'
            },
            {
                icon: '🎨',
                title: '艺术装饰',
                description: '用颜料、贴纸等装饰，做成独特的艺术品摆件'
            }
        ]
    },
    can: {
        name: '易拉罐',
        icon: '🥫',
        description: '铝制易拉罐，质轻易加工，适合创意手工',
        confidence: 94,
        suggestions: [
            {
                icon: '🪴',
                title: '创意花盆',
                description: '裁剪上半部分，涂上颜色，做成可爱的小花盆'
            },
            {
                icon: '🕯️',
                title: '烛台笔筒',
                description: '改造为烛台、笔筒或文具收纳盒'
            },
            {
                icon: '🎨',
                title: '金属工艺',
                description: '展开易拉罐制作金属画、风铃等手工艺品'
            }
        ]
    },
    carton: {
        name: '纸箱纸板',
        icon: '📦',
        description: '各种尺寸的纸箱和硬纸板，可塑性强',
        confidence: 93,
        suggestions: [
            {
                icon: '📦',
                title: '收纳整理',
                description: '制作收纳盒、文件架、鞋架等收纳用品'
            },
            {
                icon: '🏠',
                title: '儿童玩具',
                description: '制作玩具屋、汽车、城堡等儿童手工玩具'
            },
            {
                icon: '🖼️',
                title: '装饰画框',
                description: '制作相框、画框、展示架等装饰用品'
            },
            {
                icon: '🎭',
                title: '道具模型',
                description: '制作舞台道具、建筑模型、角色扮演装备'
            }
        ]
    },
    tires: {
        name: '旧轮胎',
        icon: '🛞',
        description: '橡胶轮胎，耐磨耐用，适合户外改造',
        confidence: 91,
        suggestions: [
            {
                icon: '🪴',
                title: '轮胎花园',
                description: '涂刷颜色后堆叠种植，做成轮胎花坛或垂直花园'
            },
            {
                icon: '🛋️',
                title: '创意家具',
                description: '添加坐垫和靠背，做成舒适的户外沙发或座椅'
            },
            {
                icon: '🛝',
                title: '儿童游乐',
                description: '制作秋千、攀爬架、沙池边缘等游乐设施'
            },
            {
                icon: '🎾',
                title: '运动器材',
                description: '改造为健身器材、篮球架底座等'
            }
        ]
    },
    pallet: {
        name: '木托盘',
        icon: '🪚',
        description: '标准物流木托盘，结构规整，易于改造',
        confidence: 92,
        suggestions: [
            {
                icon: '🛋️',
                title: '沙发床架',
                description: '堆叠组合做成沙发、床架，搭配舒适的床垫和靠垫'
            },
            {
                icon: '📚',
                title: '置物架',
                description: '竖放或横放做成书架、鞋架、收纳架'
            },
            {
                icon: '🪴',
                title: '户外家具',
                description: '打磨刷漆后做成户外茶几、长椅、花架'
            },
            {
                icon: '🎨',
                title: '墙面装饰',
                description: '拆成木板做成背景墙、装饰画框、挂衣架'
            }
        ]
    },
    door: {
        name: '旧门板',
        icon: '🚪',
        description: '实木或复合门板，面积大且平整',
        confidence: 89,
        suggestions: [
            {
                icon: '🍽️',
                title: '餐桌台面',
                description: '加装桌腿做成餐桌、书桌、工作台'
            },
            {
                icon: '🪴',
                title: '花园门廊',
                description: '改造成花园拱门、花架、爬藤架'
            },
            {
                icon: '🖼️',
                title: '装饰画板',
                description: '打磨上色做成黑板、公告板、装饰画'
            },
            {
                icon: '🛏️',
                title: '床头板',
                description: '直接或改造后作为床的床头板'
            }
        ]
    },
    ladder: {
        name: '旧梯子',
        icon: '🪜',
        description: '木质或金属梯子，有独特的层次感',
        confidence: 90,
        suggestions: [
            {
                icon: '📚',
                title: '书架置物架',
                description: '靠墙放置做成开放式书架、植物架、毛巾架'
            },
            {
                icon: '🪴',
                title: '植物花架',
                description: '每层摆放不同的绿植，打造立体花园'
            },
            {
                icon: '🛋️',
                title: '边几茶几',
                description: '加装木板做成边几、床头柜、小茶几'
            },
            {
                icon: '🎨',
                title: '装饰元素',
                description: '刷漆后作为墙面装饰、照片展示架'
            }
        ]
    },
    suitcase: {
        name: '旧行李箱',
        icon: '🧳',
        description: '复古行李箱，有独特的造型和质感',
        confidence: 87,
        suggestions: [
            {
                icon: '🛋️',
                title: '复古边几',
                description: '加装桌腿或堆叠做成边几、床头柜'
            },
            {
                icon: '📦',
                title: '收纳展示',
                description: '打开放置物品，做成展示柜、收纳盒'
            },
            {
                icon: '💡',
                title: '灯具装饰',
                description: '内部加装灯串，做成温馨的装饰灯'
            },
            {
                icon: '🐱',
                title: '宠物用品',
                description: '改造成猫窝、狗窝，添加舒适的垫子'
            }
        ]
    }
};

let currentItem = null;

export function initRecognitionModule() {
    renderQuickItems();
    setupUploadHandler();
    setupQuickItemClick();
}

function renderQuickItems() {
    const container = document.getElementById('quickItems');
    if (!container) return;

    container.innerHTML = quickItems.map(item => `
        <div class="quick-item" data-item-id="${item.id}">
            <span class="quick-item-icon">${item.icon}</span>
            <span class="quick-item-name">${item.name}</span>
        </div>
    `).join('');
}

function setupUploadHandler() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInput = document.getElementById('imageInput');
    const previewImage = document.getElementById('previewImage');

    if (!uploadArea || !imageInput) return;

    uploadArea.addEventListener('click', () => {
        imageInput.click();
    });

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showToast('请选择图片文件', 'error');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showToast('文件大小不能超过5MB', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            previewImage.src = event.target.result;
            previewImage.style.display = 'block';
            uploadArea.classList.add('has-image');
            
            simulateRecognition();
        };
        reader.readAsDataURL(file);
    });
}

function setupQuickItemClick() {
    const container = document.getElementById('quickItems');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const quickItem = e.target.closest('.quick-item');
        if (!quickItem) return;

        const itemId = quickItem.dataset.itemId;
        if (itemId && itemDatabase[itemId]) {
            showRecognitionResult(itemDatabase[itemId]);
        }
    });
}

function simulateRecognition() {
    const resultContainer = document.getElementById('recognitionResult');
    const uploadArea = document.getElementById('uploadArea');
    
    uploadArea.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p class="loading-text">正在识别中...</p>
        </div>
    `;

    setTimeout(() => {
        const randomItems = Object.keys(itemDatabase);
        const randomItemId = randomItems[Math.floor(Math.random() * randomItems.length)];
        const item = itemDatabase[randomItemId];
        
        showRecognitionResult(item);
    }, 1500);
}

function showRecognitionResult(item) {
    currentItem = item;
    
    const resultContainer = document.getElementById('recognitionResult');
    const confidenceValue = document.getElementById('confidenceValue');
    const itemName = document.getElementById('itemName');
    const itemDescription = document.getElementById('itemDescription');
    const suggestionsGrid = document.getElementById('suggestionsGrid');
    const identifiedItem = document.querySelector('.identified-item');

    if (confidenceValue) {
        confidenceValue.textContent = `${item.confidence}%`;
    }

    if (itemName) {
        itemName.textContent = item.name;
    }

    if (itemDescription) {
        itemDescription.textContent = item.description;
    }

    if (identifiedItem) {
        const iconElement = identifiedItem.querySelector('.item-icon');
        if (iconElement) {
            iconElement.textContent = item.icon;
        }
    }

    if (suggestionsGrid) {
        suggestionsGrid.innerHTML = item.suggestions.map(suggestion => `
            <div class="suggestion-card" data-suggestion="${suggestion.title}">
                <span class="suggestion-icon">${suggestion.icon}</span>
                <div class="suggestion-content">
                    <h5>${suggestion.title}</h5>
                    <p>${suggestion.description}</p>
                </div>
            </div>
        `).join('');

        suggestionsGrid.querySelectorAll('.suggestion-card').forEach(card => {
            card.addEventListener('click', () => {
                const suggestionTitle = card.dataset.suggestion;
                navigateToTutorials(suggestionTitle);
            });
        });
    }

    if (resultContainer) {
        resultContainer.style.display = 'block';
    }
}

function navigateToTutorials(suggestionTitle) {
    const tutorialsNav = document.querySelector('.nav-btn[data-section="tutorials"]');
    if (tutorialsNav) {
        tutorialsNav.click();
    }

    setTimeout(() => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        let category = 'all';
        
        if (suggestionTitle.includes('沙发') || suggestionTitle.includes('家具') || 
            suggestionTitle.includes('桌') || suggestionTitle.includes('椅')) {
            category = 'furniture';
        } else if (suggestionTitle.includes('衣服') || suggestionTitle.includes('布艺') ||
                   suggestionTitle.includes('剪裁') || suggestionTitle.includes('包包')) {
            category = 'clothes';
        } else if (suggestionTitle.includes('花盆') || suggestionTitle.includes('花瓶') ||
                   suggestionTitle.includes('收纳') || suggestionTitle.includes('容器')) {
            category = 'container';
        } else if (suggestionTitle.includes('灯具') || suggestionTitle.includes('灯')) {
            category = 'electronic';
        }

        const targetFilter = Array.from(filterBtns).find(btn => btn.dataset.category === category);
        if (targetFilter) {
            targetFilter.click();
        }
    }, 100);
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

export { itemDatabase, quickItems, currentItem };
