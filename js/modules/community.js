const initialPosts = [
    {
        id: 1,
        username: '创意小达人',
        avatar: '🎨',
        time: '2小时前',
        title: '旧椅子大变身！复古白太美了',
        description: '家里这把老椅子陪了我十年，终于下定决心翻新一下。用砂纸打磨了两个小时，然后刷了复古白色的木器漆，效果真的惊艳到我了！现在放在阳台上，配上几盆绿植，完美！',
        images: ['🪑', '🎨', '✨'],
        difficulty: 'easy',
        materials: ['砂纸', '木器漆', '油漆刷'],
        likes: 128,
        comments: 23,
        isLiked: false,
        commentList: [
            { username: '手工爱好者', time: '1小时前', text: '效果太棒了！请问用的什么牌子的漆？' },
            { username: '环保达人', time: '45分钟前', text: '我也有一把类似的椅子，正愁怎么处理呢，学到了！' }
        ]
    },
    {
        id: 2,
        username: '牛仔控',
        avatar: '👖',
        time: '5小时前',
        title: '三条旧牛仔裤做了个背包，太能装了！',
        description: '整理衣柜翻出三条穿不下的牛仔裤，扔了可惜，干脆动手改个背包。用了两条裤子的裤腿做主体，另一条的口袋做装饰。成品容量超大，上班通勤刚刚好！',
        images: ['👖', '🎒', '✂️'],
        difficulty: 'medium',
        materials: ['旧牛仔裤', '缝纫机', '拉链', '背带'],
        likes: 256,
        comments: 45,
        isLiked: true,
        commentList: [
            { username: '时尚妈咪', time: '3小时前', text: '太厉害了！能出个详细教程吗？' },
            { username: '学生党', time: '2小时前', text: '这个背包好有个性，我也想试试！' },
            { username: 'DIY新手', time: '1小时前', text: '没有缝纫机可以手缝吗？' }
        ]
    },
    {
        id: 3,
        username: '花园精灵',
        avatar: '🌿',
        time: '1天前',
        title: '废轮胎变花园沙发，邻居都来问链接',
        description: '修车行免费拿的旧轮胎，刷了米白色的漆，配了厚厚的坐垫和靠枕。放在花园里，下午茶时光变得特别惬意！成本不到100块，效果比买的还好！',
        images: ['🛞', '🛋️', '🌺'],
        difficulty: 'medium',
        materials: ['旧轮胎', '油漆', '海绵垫', '防水布料'],
        likes: 512,
        comments: 89,
        isLiked: false,
        commentList: [
            { username: '阳台党', time: '18小时前', text: '请问轮胎是怎么固定在一起的？' },
            { username: '租房改造', time: '12小时前', text: '太适合出租屋了！不用的时候还能收纳' },
            { username: '手工小白', time: '8小时前', text: '这个难度大吗？新手能做吗？' },
            { username: '设计师', time: '5小时前', text: '配色太好看了！很有ins风' }
        ]
    },
    {
        id: 4,
        username: '玻璃瓶收集者',
        avatar: '🍾',
        time: '2天前',
        title: '10个玻璃瓶打造阳台小花园',
        description: '收集了几个月的玻璃瓶，终于派上用场了！有的用麻绳缠绕，有的用颜料涂色，种上绿萝、铜钱草、多肉，阳台瞬间变成小森林。每天看着心情都好！',
        images: ['🍾', '🌿', '🪴'],
        difficulty: 'easy',
        materials: ['玻璃瓶', '麻绳', '颜料', '热熔胶'],
        likes: 345,
        comments: 67,
        isLiked: false,
        commentList: [
            { username: '植物杀手', time: '1天前', text: '请问这些植物好养吗？' },
            { username: '租房一族', time: '20小时前', text: '太治愈了！我也要开始收集瓶子' }
        ]
    }
];

let posts = [...initialPosts];
let postIdCounter = 5;
let imageSlotCount = 1;

export function initCommunityModule() {
    renderPosts();
    setupCreatePost();
    setupPostActions();
    setupImageUpload();
}

function renderPosts() {
    const container = document.getElementById('communityFeed');
    if (!container) return;

    if (posts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-state-icon">🏠</span>
                <h4 class="empty-state-title">还没有分享作品</h4>
                <p class="empty-state-text">快来发布你的第一个改造作品吧！</p>
            </div>
        `;
        return;
    }

    container.innerHTML = posts.map(post => `
        <div class="post-card" data-post-id="${post.id}">
            <div class="post-header">
                <div class="post-avatar">${post.avatar}</div>
                <div class="post-user-info">
                    <div class="post-username">${post.username}</div>
                    <div class="post-time">${post.time}</div>
                </div>
                <span class="post-difficulty-badge ${post.difficulty}">
                    ⭐ ${getDifficultyText(post.difficulty)}
                </span>
            </div>
            
            <h3 class="post-title">${post.title}</h3>
            <p class="post-description">${post.description}</p>
            
            ${post.images.length > 0 ? `
                <div class="post-images">
                    ${post.images.map(img => `
                        <div class="post-image-item">${img}</div>
                    `).join('')}
                </div>
            ` : ''}
            
            ${post.materials.length > 0 ? `
                <div class="post-materials">
                    <div class="post-materials-label">使用材料：</div>
                    <div class="post-materials-tags">
                        ${post.materials.map(m => `<span class="post-material-tag">${m}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="post-actions">
                <button class="post-action-btn like-btn ${post.isLiked ? 'liked' : ''}" data-post-id="${post.id}">
                    <span class="action-icon">${post.isLiked ? '❤️' : '🤍'}</span>
                    <span class="action-count">${post.likes}</span>
                </button>
                <button class="post-action-btn comment-btn" data-post-id="${post.id}">
                    <span class="action-icon">💬</span>
                    <span class="action-count">${post.comments}</span>
                </button>
                <button class="post-action-btn share-btn">
                    <span class="action-icon">🔗</span>
                    <span>分享</span>
                </button>
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

function setupCreatePost() {
    const createBtn = document.getElementById('createPostBtn');
    const form = document.getElementById('createPostForm');
    
    if (createBtn) {
        createBtn.addEventListener('click', () => {
            const modal = document.getElementById('createPostModal');
            if (modal) {
                modal.classList.add('open');
            }
            const overlay = document.querySelector('.modal-overlay');
            if (overlay) {
                overlay.classList.add('visible');
            }
        });
    }
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleCreatePost();
        });
    }
}

function handleCreatePost() {
    const titleInput = document.getElementById('postTitle');
    const descriptionInput = document.getElementById('postDescription');
    const materialsInput = document.getElementById('postMaterials');
    const difficultyInput = document.querySelector('input[name="difficulty"]:checked');
    
    if (!titleInput || !titleInput.value.trim()) {
        showToast('请输入作品标题', 'error');
        return;
    }
    
    const newPost = {
        id: postIdCounter++,
        username: '我',
        avatar: '😊',
        time: '刚刚',
        title: titleInput.value.trim(),
        description: descriptionInput ? descriptionInput.value.trim() : '',
        images: collectUploadedImages(),
        difficulty: difficultyInput ? difficultyInput.value : 'easy',
        materials: materialsInput && materialsInput.value.trim() 
            ? materialsInput.value.split(',').map(m => m.trim()).filter(m => m)
            : [],
        likes: 0,
        comments: 0,
        isLiked: false,
        commentList: []
    };
    
    posts.unshift(newPost);
    renderPosts();
    
    closeModal('createPostModal');
    resetCreateForm();
    showToast('作品发布成功！', 'success');
}

function collectUploadedImages() {
    const slots = document.querySelectorAll('.upload-slot.has-image');
    const images = [];
    
    slots.forEach(slot => {
        const preview = slot.querySelector('.slot-preview');
        if (preview) {
            images.push('📷');
        }
    });
    
    if (images.length === 0) {
        images.push('✨');
    }
    
    return images;
}

function resetCreateForm() {
    const titleInput = document.getElementById('postTitle');
    const descriptionInput = document.getElementById('postDescription');
    const materialsInput = document.getElementById('postMaterials');
    const easyRadio = document.querySelector('input[name="difficulty"][value="easy"]');
    
    if (titleInput) titleInput.value = '';
    if (descriptionInput) descriptionInput.value = '';
    if (materialsInput) materialsInput.value = '';
    if (easyRadio) easyRadio.checked = true;
    
    const imageGrid = document.getElementById('imageUploadGrid');
    if (imageGrid) {
        imageGrid.innerHTML = `
            <div class="upload-slot" id="uploadSlot1">
                <input type="file" id="postImage1" accept="image/*" capture="environment">
                <span class="slot-placeholder">+</span>
            </div>
        `;
        imageSlotCount = 1;
    }
}

function setupPostActions() {
    const container = document.getElementById('communityFeed');
    if (!container) return;

    container.addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.like-btn');
        const commentBtn = e.target.closest('.comment-btn');
        const shareBtn = e.target.closest('.share-btn');

        if (likeBtn) {
            const postId = parseInt(likeBtn.dataset.postId);
            handleLike(postId);
        }

        if (commentBtn) {
            const postId = parseInt(commentBtn.dataset.postId);
            showCommentsModal(postId);
        }

        if (shareBtn) {
            showToast('链接已复制到剪贴板', 'info');
        }
    });
}

function handleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;

    renderPosts();
}

function showCommentsModal(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    let modal = document.getElementById('commentsModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'commentsModal';
        modal.className = 'modal comment-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeModal('commentsModal')">&times;</button>
            <h3>💬 评论 (${post.comments})</h3>
            <div class="comments-list">
                ${post.commentList.length > 0 ? post.commentList.map(comment => `
                    <div class="comment-item">
                        <div class="comment-header">
                            <span class="comment-username">${comment.username}</span>
                            <span class="comment-time">${comment.time}</span>
                        </div>
                        <p class="comment-text">${comment.text}</p>
                    </div>
                `).join('') : `
                    <div class="empty-state" style="padding: 40px 20px;">
                        <span class="empty-state-icon">💭</span>
                        <p class="empty-state-text">还没有评论，快来抢沙发吧！</p>
                    </div>
                `}
            </div>
            <div class="comment-input-section">
                <input type="text" id="commentInput" placeholder="写下你的评论...">
                <button class="btn-primary" id="submitCommentBtn" data-post-id="${postId}">发送</button>
            </div>
        </div>
    `;

    modal.classList.add('open');
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }

    const submitBtn = document.getElementById('submitCommentBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            handleSubmitComment(postId);
        });
    }

    const commentInput = document.getElementById('commentInput');
    if (commentInput) {
        commentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSubmitComment(postId);
            }
        });
    }
}

function handleSubmitComment(postId) {
    const input = document.getElementById('commentInput');
    if (!input || !input.value.trim()) return;

    const post = posts.find(p => p.id === postId);
    if (!post) return;

    const newComment = {
        username: '我',
        time: '刚刚',
        text: input.value.trim()
    };

    post.commentList.push(newComment);
    post.comments++;

    renderPosts();
    showCommentsModal(postId);
    showToast('评论发表成功！', 'success');
}

function setupImageUpload() {
    const addImageBtn = document.getElementById('addImageBtn');
    const imageGrid = document.getElementById('imageUploadGrid');
    
    if (addImageBtn && imageGrid) {
        addImageBtn.addEventListener('click', () => {
            if (imageSlotCount >= 9) {
                showToast('最多只能上传9张图片', 'error');
                return;
            }
            
            imageSlotCount++;
            const newSlot = document.createElement('div');
            newSlot.className = 'upload-slot';
            newSlot.id = `uploadSlot${imageSlotCount}`;
            newSlot.innerHTML = `
                <input type="file" id="postImage${imageSlotCount}" accept="image/*" capture="environment">
                <span class="slot-placeholder">+</span>
            `;
            imageGrid.appendChild(newSlot);
            
            setupSlotUpload(newSlot);
        });
    }

    const existingSlots = document.querySelectorAll('.upload-slot');
    existingSlots.forEach(slot => setupSlotUpload(slot));
}

function setupSlotUpload(slot) {
    const input = slot.querySelector('input[type="file"]');
    if (!input) return;

    input.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showToast('请选择图片文件', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            slot.classList.add('has-image');
            const placeholder = slot.querySelector('.slot-placeholder');
            if (placeholder) {
                placeholder.remove();
            }
            
            let preview = slot.querySelector('.slot-preview');
            if (!preview) {
                preview = document.createElement('span');
                preview.className = 'slot-preview';
                slot.appendChild(preview);
            }
            preview.textContent = '📷';
        };
        reader.readAsDataURL(file);
    });
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

export { posts, initialPosts };
