const tutorialsData = [
    {
        id: 1,
        title: '旧椅子翻新上色教程',
        description: '将陈旧的木质椅子打磨翻新，重新上色，让它焕发新生。无需专业工具，新手也能轻松完成。',
        category: 'furniture',
        difficulty: 'easy',
        time: '2-3小时',
        icon: '🪑',
        hasVideo: true,
        materials: ['砂纸（180目、240目）', '木质底漆', '木器漆', '油漆刷', '无尘布', '手套'],
        steps: [
            {
                title: '准备工作',
                description: '将椅子搬到通风良好的地方，铺上旧报纸或防尘布。准备好所有工具和材料，戴上手套保护双手。'
            },
            {
                title: '打磨表面',
                description: '先用180目砂纸打磨椅子表面，去除旧油漆和污渍。注意顺着木纹方向打磨，直到表面变得光滑。然后用240目砂纸细磨一遍。'
            },
            {
                title: '清洁除尘',
                description: '用无尘布或湿抹布擦拭椅子表面，确保所有木屑和灰尘都被清除干净。等待完全干燥后再进行下一步。'
            },
            {
                title: '涂刷底漆',
                description: '均匀涂刷一层木质底漆，这有助于后续油漆更好地附着。顺着木纹方向涂刷，注意不要刷太厚，避免流挂。等待底漆完全干燥（约1-2小时）。'
            },
            {
                title: '涂刷面漆',
                description: '选择喜欢的颜色，均匀涂刷第一层面漆。等待完全干燥后，用细砂纸轻轻打磨表面，擦拭干净后再涂刷第二层面漆。建议涂刷2-3层面漆以获得更好的效果。'
            },
            {
                title: '完成与保护',
                description: '最后一层油漆干燥后，可以涂刷一层清漆作为保护层，增加耐磨性和光泽度。等待完全干燥后，椅子就可以使用了！'
            }
        ]
    },
    {
        id: 2,
        title: '旧T恤改造环保购物袋',
        description: '把不再穿的旧T恤改造成实用的环保购物袋，简单几步，零缝纫也能完成。',
        category: 'clothes',
        difficulty: 'easy',
        time: '30分钟',
        icon: '👕',
        hasVideo: true,
        materials: ['旧T恤', '剪刀', '尺子（可选）', '粉笔或笔（可选）'],
        steps: [
            {
                title: '选择T恤',
                description: '选择一件棉质或混纺的旧T恤，最好是没有明显破损的。T恤的大小决定了购物袋的容量。'
            },
            {
                title: '裁剪领口',
                description: '将T恤平铺，沿着领口弧线向下剪，剪出一个更大的开口。这个开口就是购物袋的袋口。剪的时候可以稍微往里剪一点，让袋口更美观。'
            },
            {
                title: '剪掉袖子',
                description: '沿着袖窿弧线剪掉两个袖子。剪的时候注意保持对称，可以把T恤对折后一起剪，这样两边会更对称。'
            },
            {
                title: '处理底部',
                description: '将T恤底部向上翻折约2-3厘米，然后从翻折处开始，每隔1-2厘米剪一个约1.5厘米深的切口，一直剪到T恤的底边。这些切口是用来打结的。'
            },
            {
                title: '打结固定',
                description: '将T恤翻回正面，把前后两层对应的切口一一打结。先打一个基础结，然后再打一个结加固，确保底部不会散开。'
            },
            {
                title: '完成使用',
                description: '一个环保购物袋就完成了！原来的T恤肩带就是购物袋的提手。可以在袋子上用织物颜料装饰，让它更有个性。'
            }
        ]
    },
    {
        id: 3,
        title: '玻璃瓶改造水培花瓶',
        description: '用麻绳和颜料装饰普通玻璃瓶，变身精美的水培花瓶，为家居增添绿意。',
        category: 'container',
        difficulty: 'easy',
        time: '1小时',
        icon: '🍾',
        hasVideo: false,
        materials: ['玻璃瓶', '麻绳', '热熔胶枪', '颜料（可选）', '画笔（可选）', '水培植物'],
        steps: [
            {
                title: '清洗瓶子',
                description: '将玻璃瓶彻底清洗干净，去除标签和胶水残留。可以用温水加洗洁精浸泡，然后用钢丝球轻轻擦拭。清洗后擦干水分备用。'
            },
            {
                title: '装饰设计',
                description: '决定如何装饰瓶子。可以选择：用颜料涂刷瓶身、用麻绳缠绕、或者两者结合。建议先在瓶身做个标记，确定装饰的起始位置。'
            },
            {
                title: '涂刷颜料',
                description: '如果选择涂色，可以先用砂纸轻轻打磨瓶身（增加附着力），然后均匀涂刷一层底漆。干燥后再涂刷喜欢的颜色，可以涂刷2-3层以获得更好的遮盖力。'
            },
            {
                title: '缠绕麻绳',
                description: '在瓶身需要缠绕的位置涂上热熔胶，然后将麻绳一端粘在胶水上。等胶水稍微凝固后，开始紧密缠绕麻绳，每绕一圈都可以点一点胶水固定。'
            },
            {
                title: '收尾固定',
                description: '缠绕到满意的高度后，剪断麻绳，用热熔胶将末端粘牢。可以在麻绳两端添加一些装饰，比如小珠子、蝴蝶结等，让花瓶更精致。'
            },
            {
                title: '种植植物',
                description: '在花瓶中加入适量清水，选择适合水培的植物，如绿萝、铜钱草、富贵竹等。将植物根部放入水中，定期更换清水，一个美丽的水培花瓶就完成了！'
            }
        ]
    },
    {
        id: 4,
        title: '纸箱改造收纳整理盒',
        description: '用废弃快递纸箱制作实用的收纳盒，可以分类收纳衣物、文件、杂物等。',
        category: 'container',
        difficulty: 'easy',
        time: '1-2小时',
        icon: '📦',
        hasVideo: true,
        materials: ['硬纸箱', '壁纸或包装纸', '双面胶', '剪刀', '尺子', '美工刀'],
        steps: [
            {
                title: '选择纸箱',
                description: '选择硬度较好的纸箱，根据收纳需求决定大小。快递盒、鞋盒都可以使用。将纸箱拆开，压平备用。'
            },
            {
                title: '测量裁剪',
                description: '根据需要的收纳盒尺寸，在纸板上画出裁剪线。一般包括：底部、四个侧面、盖子（可选）。用美工刀和尺子裁剪出各个部件。'
            },
            {
                title: '粘贴装饰',
                description: '选择喜欢的壁纸或包装纸，裁剪成比纸板稍大的尺寸。用双面胶将装饰纸粘贴在纸板的外侧（也就是收纳盒的外表面），注意边角要包整齐。'
            },
            {
                title: '组装盒子',
                description: '将裁剪好的纸板组装成盒子形状。在需要粘合的边缘涂上胶水或贴上双面胶，依次固定四个侧面和底部。可以用夹子或重物压住，等待胶水干燥。'
            },
            {
                title: '加固边角',
                description: '为了增加收纳盒的耐用性，可以在边角处用胶带加固。也可以在盒子内部的角落粘贴三角形的支撑片，增加结构稳定性。'
            },
            {
                title: '添加提手（可选）',
                description: '如果需要，可以在盒子两侧添加提手。可以用硬纸板剪出提手形状，粘贴装饰纸后固定在盒子上，或者直接用丝带、麻绳作为提手。'
            },
            {
                title: '完成使用',
                description: '收纳盒完成后，可以用来分类收纳衣物、袜子、文件、小物件等。可以制作多个不同大小的收纳盒，组合使用效果更好！'
            }
        ]
    },
    {
        id: 5,
        title: '旧牛仔裤改造时尚背包',
        description: '把过时的牛仔裤改造成个性十足的背包，耐磨耐用，独一无二。',
        category: 'clothes',
        difficulty: 'medium',
        time: '3-4小时',
        icon: '👖',
        hasVideo: true,
        materials: ['旧牛仔裤', '缝纫机（或手缝针）', '缝线', '剪刀', '拉链', '背带（或帆布带）', '衬布（可选）'],
        steps: [
            {
                title: '规划设计',
                description: '先确定背包的大小和样式。将牛仔裤平铺，用粉笔在裤子上画出背包的轮廓。一般背包主体可以从裤腿部分裁剪，而口袋可以利用牛仔裤原有的口袋。'
            },
            {
                title: '裁剪布料',
                description: '按照画好的轮廓裁剪牛仔裤。需要裁剪：背包前片、后片、侧面、底部各两片（表布和里布）。同时保留牛仔裤的后口袋，可以作为背包的外口袋。'
            },
            {
                title: '处理口袋',
                description: '将牛仔裤的口袋拆下或直接保留在裤片上。如果拆下，需要重新缝合到背包前片上。可以装饰口袋边缘，增加个性元素。'
            },
            {
                title: '缝合表布',
                description: '将背包的表布部分缝合在一起：先缝合侧面和底部，然后将前后片与侧面缝合。注意留出顶部开口。缝合时要注意对齐，保持针脚均匀。'
            },
            {
                title: '制作里布',
                description: '用同样的方法缝合里布，但在底部留出一个约10厘米的返口（用于后续翻包）。里布可以用旧T恤、床单等布料，或者专门购买衬布。'
            },
            {
                title: '安装拉链',
                description: '在背包顶部开口处安装拉链。可以将拉链夹在表布和里布之间缝合，或者用明线的方式缝在表面。拉链的长度根据背包开口大小决定。'
            },
            {
                title: '组合表里布',
                description: '将表布和里布正面相对套在一起，对齐顶部边缘，沿着拉链边缘缝合一圈。然后从里布的返口将整个背包翻到正面，缝合返口。'
            },
            {
                title: '安装背带',
                description: '根据需要的长度准备背带，可以用帆布带、尼龙带，或者用牛仔裤布料自制。将背带缝合在背包背面的上部和下部，确保牢固。可以加垫片增加承重。'
            },
            {
                title: '完成装饰',
                description: '最后可以在背包上添加一些装饰，比如铆钉、徽章、刺绣等，让背包更具个性。一个独一无二的牛仔背包就完成了！'
            }
        ]
    },
    {
        id: 6,
        title: '易拉罐改造创意花盆',
        description: '用废弃易拉罐制作可爱的小花盆，可以种植多肉植物或小型绿植。',
        category: 'container',
        difficulty: 'easy',
        time: '30分钟',
        icon: '🥫',
        hasVideo: false,
        materials: ['空易拉罐', '剪刀', '砂纸', '颜料', '画笔', '土壤', '小型植物'],
        steps: [
            {
                title: '清洗易拉罐',
                description: '将易拉罐彻底清洗干净，去除标签和残留胶水。确保罐内没有饮料残留，晾干水分。'
            },
            {
                title: '裁剪开口',
                description: '用剪刀在易拉罐上部约1/3处剪开，剪出一个平整的开口。剪的时候要小心，避免割伤手。可以用砂纸打磨切口边缘，防止毛刺。'
            },
            {
                title: '打磨表面',
                description: '用砂纸轻轻打磨易拉罐表面，去除光泽，这样颜料更容易附着。打磨后用湿布擦拭干净，晾干。'
            },
            {
                title: '涂刷底色',
                description: '选择喜欢的颜色作为底色，均匀涂刷在易拉罐表面。可以涂刷2-3层，每层之间等待干燥。建议使用丙烯颜料，附着力更好。'
            },
            {
                title: '绘制图案',
                description: '底色干燥后，可以在花盆上绘制喜欢的图案。可以画小动物、植物、几何图形，或者用胶带贴出条纹、格子等图案后涂色。'
            },
            {
                title: '制作排水孔',
                description: '在易拉罐底部用钉子或螺丝刀钻2-3个小排水孔，这样植物根部不会积水。钻孔时注意安全，可以垫上旧布。'
            },
            {
                title: '种植植物',
                description: '在花盆底部铺一层小石子或碎瓦片，然后加入营养土，种上喜欢的小型植物，如多肉、绿萝幼苗、铜钱草等。浇适量水，一个可爱的易拉罐花盆就完成了！'
            }
        ]
    },
    {
        id: 7,
        title: '旧轮胎改造户外沙发',
        description: '将废弃汽车轮胎改造成舒适的户外沙发，环保又有创意。',
        category: 'furniture',
        difficulty: 'medium',
        time: '4-5小时',
        icon: '🛞',
        hasVideo: true,
        materials: ['旧轮胎2-3个', '木板', '海绵垫', '防水布料', '强力胶', '电钻', '螺丝', '油漆（可选）'],
        steps: [
            {
                title: '清洗轮胎',
                description: '将旧轮胎彻底清洗干净，可以用刷子和洗洁精刷洗，去除泥土和油污。清洗后晾干水分。'
            },
            {
                title: '涂装轮胎',
                description: '如果想要改变轮胎颜色，可以用室外油漆涂刷。建议涂刷2-3层，每层干燥后再刷下一层。选择耐候性好的油漆，适合户外使用。'
            },
            {
                title: '固定轮胎',
                description: '将2-3个轮胎堆叠起来，根据需要的高度决定数量。用电钻和螺丝将轮胎固定在一起，或者用强力胶水粘合。确保堆叠稳固。'
            },
            {
                title: '制作座板',
                description: '根据轮胎的直径裁剪圆形木板，或者用方形木板（边长略大于轮胎直径）。打磨木板边缘，光滑无毛刺。可以涂刷油漆或清漆保护。'
            },
            {
                title: '制作坐垫',
                description: '裁剪与座板大小相同的海绵垫，厚度约5-10厘米。然后裁剪防水布料，将海绵包裹起来，用订书机或缝线固定。'
            },
            {
                title: '组装沙发',
                description: '将木板座板放在堆叠好的轮胎上，然后放上坐垫。可以制作几个靠垫，靠在墙上或栏杆上，增加舒适度。'
            },
            {
                title: '添加靠背（可选）',
                description: '如果需要靠背，可以再用1-2个轮胎竖直固定在沙发后面，或者用木板制作靠背框架，包裹海绵和布料。'
            },
            {
                title: '完成使用',
                description: '一个独特的轮胎沙发就完成了！放在阳台、露台或花园里，配上小茶几，享受户外时光。记得定期清洁，延长使用寿命。'
            }
        ]
    },
    {
        id: 8,
        title: '旧门板改造复古餐桌',
        description: '用废旧实木门板制作一张有故事的复古餐桌，保留岁月的痕迹。',
        category: 'furniture',
        difficulty: 'hard',
        time: '6-8小时',
        icon: '🚪',
        hasVideo: false,
        materials: ['旧实木门板', '桌腿4根', '木蜡油或清漆', '砂纸', '电钻', '螺丝', '角码'],
        steps: [
            {
                title: '检查门板',
                description: '仔细检查旧门板的状况，确保结构稳固，没有腐朽或严重损坏。实木门板是最佳选择，复合门板可能不太适合。'
            },
            {
                title: '拆除五金',
                description: '将门板上的合页、门把手、门锁等五金件拆除。如果螺丝生锈拧不动，可以喷一些除锈剂等待后再尝试。'
            },
            {
                title: '清洁打磨',
                description: '用湿布擦拭门板表面，去除灰尘和污渍。然后用砂纸打磨整个表面，可以保留一些磨损痕迹增加复古感，但要确保表面光滑无毛刺。'
            },
            {
                title: '填补缺陷',
                description: '如果门板上有钉孔、裂缝等缺陷，可以用木腻子填补。等待腻子干燥后，用砂纸打磨平整，与周围表面齐平。'
            },
            {
                title: '涂刷保护',
                description: '选择木蜡油或清漆保护桌面。木蜡油更能凸显木质纹理，清漆则能形成保护膜。建议涂刷2-3层，每层之间用细砂纸轻轻打磨并擦拭干净。'
            },
            {
                title: '安装桌腿',
                description: '确定桌腿的安装位置，一般在桌面四个角向内缩进一些。使用角码和螺丝将桌腿固定在桌面底部。确保桌腿垂直且稳固。'
            },
            {
                title: '加固稳定',
                description: '为了增加餐桌的稳定性，可以在桌腿之间加装横撑。测量好尺寸，裁剪木料，用螺丝固定在桌腿内侧。'
            },
            {
                title: '完成使用',
                description: '一张独特的复古餐桌就完成了！旧门板上的岁月痕迹就是它最美的装饰。可以搭配餐椅，放在餐厅或工作区使用。'
            }
        ]
    }
];

let currentCategory = 'all';
let currentTutorial = null;

export function initTutorialsModule() {
    renderTutorials();
    setupFilterHandlers();
    setupTutorialClick();
}

function renderTutorials() {
    const container = document.getElementById('tutorialsGrid');
    if (!container) return;

    const filteredTutorials = currentCategory === 'all' 
        ? tutorialsData 
        : tutorialsData.filter(t => t.category === currentCategory);

    if (filteredTutorials.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <span class="empty-state-icon">📚</span>
                <h4 class="empty-state-title">暂无相关教程</h4>
                <p class="empty-state-text">试试其他分类看看</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredTutorials.map(tutorial => `
        <div class="tutorial-card" data-tutorial-id="${tutorial.id}">
            <div class="tutorial-card-image">
                <span class="card-icon">${tutorial.icon}</span>
                ${tutorial.hasVideo ? '<span class="video-badge">📹 视频</span>' : ''}
            </div>
            <div class="tutorial-card-content">
                <h3 class="tutorial-card-title">${tutorial.title}</h3>
                <p class="tutorial-card-description">${tutorial.description}</p>
                <div class="tutorial-card-meta">
                    <span class="difficulty ${tutorial.difficulty}">
                        ⭐ ${getDifficultyText(tutorial.difficulty)}
                    </span>
                    <span class="time">⏱️ ${tutorial.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function getDifficultyText(difficulty) {
    const texts = {
        easy: '简单',
        medium: '中等',
        hard: '困难'
    };
    return texts[difficulty] || '简单';
}

function setupFilterHandlers() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTutorials();
        });
    });
}

function setupTutorialClick() {
    const container = document.getElementById('tutorialsGrid');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.tutorial-card');
        if (!card) return;

        const tutorialId = parseInt(card.dataset.tutorialId);
        const tutorial = tutorialsData.find(t => t.id === tutorialId);
        
        if (tutorial) {
            showTutorialDetail(tutorial);
        }
    });
}

function showTutorialDetail(tutorial) {
    currentTutorial = tutorial;
    
    const modal = document.getElementById('tutorialModal');
    const detailContainer = document.getElementById('tutorialDetail');
    
    if (!detailContainer) return;

    detailContainer.innerHTML = `
        <div class="tutorial-image">
            <span style="font-size: 80px; display: flex; align-items: center; justify-content: center; height: 100%;">${tutorial.icon}</span>
        </div>
        <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 12px;">${tutorial.title}</h2>
        <div class="tutorial-meta">
            <span class="meta-item difficulty ${tutorial.difficulty}">
                ⭐ ${getDifficultyText(tutorial.difficulty)}
            </span>
            <span class="meta-item">⏱️ ${tutorial.time}</span>
            ${tutorial.hasVideo ? '<span class="meta-item">📹 含视频教程</span>' : ''}
        </div>
        <p class="tutorial-description">${tutorial.description}</p>
        
        <div class="materials-section">
            <h3>🛠️ 所需材料</h3>
            <div class="materials-list">
                ${tutorial.materials.map(m => `<span class="material-tag">${m}</span>`).join('')}
            </div>
        </div>
        
        <div class="steps-section">
            <h3>📝 详细步骤</h3>
            <div class="steps-list">
                ${tutorial.steps.map((step, index) => `
                    <div class="step-item">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    if (modal) {
        modal.classList.add('open');
    }

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }
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

export { tutorialsData, currentCategory, currentTutorial };
