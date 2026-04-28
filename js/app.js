let currentSection = 'recognition';

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
            { icon: '🎨', title: '翻新上色', description: '用砂纸打磨后重新刷漆，选择复古白色或明亮的彩色，让椅子焕然一新' },
            { icon: '🧵', title: '换布翻新', description: '更换椅面布料，选择自己喜欢的花纹，搭配不同风格的抱枕' },
            { icon: '🪴', title: '植物花架', description: '将椅子改造成多层花架，在椅面上摆放绿植，靠背用来悬挂小花盆' }
        ]
    },
    table: {
        name: '旧木桌',
        icon: '🪵',
        description: '实木材质的旧桌子，桌面可能有划痕和磨损，但结构完好',
        confidence: 92,
        suggestions: [
            { icon: '🎨', title: '桌面翻新', description: '使用木蜡油或清漆翻新桌面，保留木质纹理，增加复古感' },
            { icon: '🪟', title: '玻璃台面', description: '在桌面加装一块钢化玻璃，既保护桌面又增加现代感' },
            { icon: '✂️', title: '拆分改造', description: '将桌面拆分改造成墙面置物架，桌腿改造成小边几' }
        ]
    },
    cabinet: {
        name: '旧柜子',
        icon: '🗄️',
        description: '年代感十足的储物柜，收纳功能完好但外观过时',
        confidence: 90,
        suggestions: [
            { icon: '🎨', title: '改色换门', description: '重新涂刷柜子主体，更换或重新设计柜门，添加新的五金配件' },
            { icon: '📚', title: '开放式书柜', description: '拆除柜门，添加隔板，改造成开放式展示书架' },
            { icon: '🌿', title: '植物收纳柜', description: '将柜子改造成植物生长柜，增加补光灯和加湿器' }
        ]
    },
    clothes: {
        name: '旧衣物',
        icon: '👔',
        description: '款式过时但面料完好的衣物，可以改造再利用',
        confidence: 88,
        suggestions: [
            { icon: '🧵', title: '重新剪裁', description: '将长款改短、宽松改合身，或添加装饰元素' },
            { icon: '👜', title: '布艺包包', description: '用旧衣物的面料制作包包、笔袋、零钱包等小物件' },
            { icon: '🛏️', title: '家居用品', description: '改造成抱枕、靠垫、坐垫、桌布等家居装饰' },
            { icon: '🧸', title: '手作玩偶', description: '用不同颜色和材质的布料制作布艺玩偶或公仔' }
        ]
    },
    bottle: {
        name: '玻璃瓶',
        icon: '🍾',
        description: '各种形状的玻璃瓶，透明或有色，可以创意改造',
        confidence: 96,
        suggestions: [
            { icon: '🪴', title: '水培花瓶', description: '清洗干净后直接作为水培植物容器，或用麻绳、油漆装饰' },
            { icon: '💡', title: '创意灯具', description: '加装LED灯串，做成温馨的小夜灯或装饰灯' },
            { icon: '🧂', title: '收纳容器', description: '改造成调料瓶、储物罐，添加创意标签' },
            { icon: '🎨', title: '艺术装饰', description: '用颜料、贴纸等装饰，做成独特的艺术品摆件' }
        ]
    },
    can: {
        name: '易拉罐',
        icon: '🥫',
        description: '铝制易拉罐，质轻易加工，适合创意手工',
        confidence: 94,
        suggestions: [
            { icon: '🪴', title: '创意花盆', description: '裁剪上半部分，涂上颜色，做成可爱的小花盆' },
            { icon: '🕯️', title: '烛台笔筒', description: '改造为烛台、笔筒或文具收纳盒' },
            { icon: '🎨', title: '金属工艺', description: '展开易拉罐制作金属画、风铃等手工艺品' }
        ]
    },
    carton: {
        name: '纸箱纸板',
        icon: '📦',
        description: '各种尺寸的纸箱和硬纸板，可塑性强',
        confidence: 93,
        suggestions: [
            { icon: '📦', title: '收纳整理', description: '制作收纳盒、文件架、鞋架等收纳用品' },
            { icon: '🏠', title: '儿童玩具', description: '制作玩具屋、汽车、城堡等儿童手工玩具' },
            { icon: '🖼️', title: '装饰画框', description: '制作相框、画框、展示架等装饰用品' },
            { icon: '🎭', title: '道具模型', description: '制作舞台道具、建筑模型、角色扮演装备' }
        ]
    },
    tires: {
        name: '旧轮胎',
        icon: '🛞',
        description: '橡胶轮胎，耐磨耐用，适合户外改造',
        confidence: 91,
        suggestions: [
            { icon: '🪴', title: '轮胎花园', description: '涂刷颜色后堆叠种植，做成轮胎花坛或垂直花园' },
            { icon: '🛋️', title: '创意家具', description: '添加坐垫和靠背，做成舒适的户外沙发或座椅' },
            { icon: '🛝', title: '儿童游乐', description: '制作秋千、攀爬架、沙池边缘等游乐设施' },
            { icon: '🎾', title: '运动器材', description: '改造为健身器材、篮球架底座等' }
        ]
    },
    pallet: {
        name: '木托盘',
        icon: '🪚',
        description: '标准物流木托盘，结构规整，易于改造',
        confidence: 92,
        suggestions: [
            { icon: '🛋️', title: '沙发床架', description: '堆叠组合做成沙发、床架，搭配舒适的床垫和靠垫' },
            { icon: '📚', title: '置物架', description: '竖放或横放做成书架、鞋架、收纳架' },
            { icon: '🪴', title: '户外家具', description: '打磨刷漆后做成户外茶几、长椅、花架' },
            { icon: '🎨', title: '墙面装饰', description: '拆成木板做成背景墙、装饰画框、挂衣架' }
        ]
    },
    door: {
        name: '旧门板',
        icon: '🚪',
        description: '实木或复合门板，面积大且平整',
        confidence: 89,
        suggestions: [
            { icon: '🍽️', title: '餐桌台面', description: '加装桌腿做成餐桌、书桌、工作台' },
            { icon: '🪴', title: '花园门廊', description: '改造成花园拱门、花架、爬藤架' },
            { icon: '🖼️', title: '装饰画板', description: '打磨上色做成黑板、公告板、装饰画' },
            { icon: '🛏️', title: '床头板', description: '直接或改造后作为床的床头板' }
        ]
    },
    ladder: {
        name: '旧梯子',
        icon: '🪜',
        description: '木质或金属梯子，有独特的层次感',
        confidence: 90,
        suggestions: [
            { icon: '📚', title: '书架置物架', description: '靠墙放置做成开放式书架、植物架、毛巾架' },
            { icon: '🪴', title: '植物花架', description: '每层摆放不同的绿植，打造立体花园' },
            { icon: '🛋️', title: '边几茶几', description: '加装木板做成边几、床头柜、小茶几' },
            { icon: '🎨', title: '装饰元素', description: '刷漆后作为墙面装饰、照片展示架' }
        ]
    },
    suitcase: {
        name: '旧行李箱',
        icon: '🧳',
        description: '复古行李箱，有独特的造型和质感',
        confidence: 87,
        suggestions: [
            { icon: '🛋️', title: '复古边几', description: '加装桌腿或堆叠做成边几、床头柜' },
            { icon: '📦', title: '收纳展示', description: '打开放置物品，做成展示柜、收纳盒' },
            { icon: '💡', title: '灯具装饰', description: '内部加装灯串，做成温馨的装饰灯' },
            { icon: '🐱', title: '宠物用品', description: '改造成猫窝、狗窝，添加舒适的垫子' }
        ]
    }
};

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
            { title: '准备工作', description: '将椅子搬到通风良好的地方，铺上旧报纸或防尘布。准备好所有工具和材料，戴上手套保护双手。' },
            { title: '打磨表面', description: '先用180目砂纸打磨椅子表面，去除旧油漆和污渍。注意顺着木纹方向打磨，直到表面变得光滑。然后用240目砂纸细磨一遍。' },
            { title: '清洁除尘', description: '用无尘布或湿抹布擦拭椅子表面，确保所有木屑和灰尘都被清除干净。等待完全干燥后再进行下一步。' },
            { title: '涂刷底漆', description: '均匀涂刷一层木质底漆，这有助于后续油漆更好地附着。顺着木纹方向涂刷，注意不要刷太厚，避免流挂。等待底漆完全干燥（约1-2小时）。' },
            { title: '涂刷面漆', description: '选择喜欢的颜色，均匀涂刷第一层面漆。等待完全干燥后，用细砂纸轻轻打磨表面，擦拭干净后再涂刷第二层面漆。建议涂刷2-3层面漆以获得更好的效果。' },
            { title: '完成与保护', description: '最后一层油漆干燥后，可以涂刷一层清漆作为保护层，增加耐磨性和光泽度。等待完全干燥后，椅子就可以使用了！' }
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
            { title: '选择T恤', description: '选择一件棉质或混纺的旧T恤，最好是没有明显破损的。T恤的大小决定了购物袋的容量。' },
            { title: '裁剪领口', description: '将T恤平铺，沿着领口弧线向下剪，剪出一个更大的开口。这个开口就是购物袋的袋口。剪的时候可以稍微往里剪一点，让袋口更美观。' },
            { title: '剪掉袖子', description: '沿着袖窿弧线剪掉两个袖子。剪的时候注意保持对称，可以把T恤对折后一起剪，这样两边会更对称。' },
            { title: '处理底部', description: '将T恤底部向上翻折约2-3厘米，然后从翻折处开始，每隔1-2厘米剪一个约1.5厘米深的切口，一直剪到T恤的底边。这些切口是用来打结的。' },
            { title: '打结固定', description: '将T恤翻回正面，把前后两层对应的切口一一打结。先打一个基础结，然后再打一个结加固，确保底部不会散开。' },
            { title: '完成使用', description: '一个环保购物袋就完成了！原来的T恤肩带就是购物袋的提手。可以在袋子上用织物颜料装饰，让它更有个性。' }
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
            { title: '清洗瓶子', description: '将玻璃瓶彻底清洗干净，去除标签和胶水残留。可以用温水加洗洁精浸泡，然后用钢丝球轻轻擦拭。清洗后擦干水分备用。' },
            { title: '装饰设计', description: '决定如何装饰瓶子。可以选择：用颜料涂刷瓶身、用麻绳缠绕、或者两者结合。建议先在瓶身做个标记，确定装饰的起始位置。' },
            { title: '涂刷颜料', description: '如果选择涂色，可以先用砂纸轻轻打磨瓶身（增加附着力），然后均匀涂刷一层底漆。干燥后再涂刷喜欢的颜色，可以涂刷2-3层以获得更好的遮盖力。' },
            { title: '缠绕麻绳', description: '在瓶身需要缠绕的位置涂上热熔胶，然后将麻绳一端粘在胶水上。等胶水稍微凝固后，开始紧密缠绕麻绳，每绕一圈都可以点一点胶水固定。' },
            { title: '收尾固定', description: '缠绕到满意的高度后，剪断麻绳，用热熔胶将末端粘牢。可以在麻绳两端添加一些装饰，比如小珠子、蝴蝶结等，让花瓶更精致。' },
            { title: '种植植物', description: '在花瓶中加入适量清水，选择适合水培的植物，如绿萝、铜钱草、富贵竹等。将植物根部放入水中，定期更换清水，一个美丽的水培花瓶就完成了！' }
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
            { title: '选择纸箱', description: '选择硬度较好的纸箱，根据收纳需求决定大小。快递盒、鞋盒都可以使用。将纸箱拆开，压平备用。' },
            { title: '测量裁剪', description: '根据需要的收纳盒尺寸，在纸板上画出裁剪线。一般包括：底部、四个侧面、盖子（可选）。用美工刀和尺子裁剪出各个部件。' },
            { title: '粘贴装饰', description: '选择喜欢的壁纸或包装纸，裁剪成比纸板稍大的尺寸。用双面胶将装饰纸粘贴在纸板的外侧（也就是收纳盒的外表面），注意边角要包整齐。' },
            { title: '组装盒子', description: '将裁剪好的纸板组装成盒子形状。在需要粘合的边缘涂上胶水或贴上双面胶，依次固定四个侧面和底部。可以用夹子或重物压住，等待胶水干燥。' },
            { title: '加固边角', description: '为了增加收纳盒的耐用性，可以在边角处用胶带加固。也可以在盒子内部的角落粘贴三角形的支撑片，增加结构稳定性。' },
            { title: '添加提手（可选）', description: '如果需要，可以在盒子两侧添加提手。可以用硬纸板剪出提手形状，粘贴装饰纸后固定在盒子上，或者直接用丝带、麻绳作为提手。' },
            { title: '完成使用', description: '收纳盒完成后，可以用来分类收纳衣物、袜子、文件、小物件等。可以制作多个不同大小的收纳盒，组合使用效果更好！' }
        ]
    }
];

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
    }
];

const materialsData = [
    { id: 1, name: '热熔胶枪套装', icon: '🔫', category: 'adhesive', categoryName: '粘合剂', description: '家用高粘热熔胶枪，配合胶棒使用，适合各种手工DIY粘合', tags: ['必备工具', '快速粘合'], price: 29.9, unit: '套' },
    { id: 2, name: '强力双面胶', icon: '📎', category: 'adhesive', categoryName: '粘合剂', description: '高粘度双面胶带，不留残胶，适合墙面、布料等多种材质', tags: ['无痕粘贴'], price: 12.8, unit: '卷' },
    { id: 3, name: '木工专用白胶', icon: '🧴', category: 'adhesive', categoryName: '粘合剂', description: '环保型木工胶水，粘接强度高，干燥后可打磨上漆', tags: ['家具修复'], price: 18.5, unit: '瓶' },
    { id: 4, name: '502强力胶水', icon: '💧', category: 'adhesive', categoryName: '粘合剂', description: '瞬间强力胶，适合塑料、金属、陶瓷等多种材质的快速粘接', tags: ['快速固化'], price: 8.9, unit: '支' },
    { id: 5, name: '木器漆套装', icon: '🎨', category: 'paint', categoryName: '涂料颜料', description: '环保水性木器漆，多色可选，遮盖力强，适合家具翻新', tags: ['家具翻新', '多色可选'], price: 45.0, unit: '罐' },
    { id: 6, name: '丙烯颜料套装', icon: '🖌️', category: 'paint', categoryName: '涂料颜料', description: '12色专业丙烯颜料，防水耐晒，适合布料、木材、墙面等绘画', tags: ['手绘装饰', '防水持久'], price: 32.0, unit: '套' },
    { id: 7, name: '亚麻布料', icon: '🧵', category: 'fabric', categoryName: '布料织物', description: '纯色亚麻面料，质感厚实，适合椅面、抱枕、桌布等软装', tags: ['软装必备'], price: 25.0, unit: '米' },
    { id: 8, name: '牛仔布料', icon: '👖', category: 'fabric', categoryName: '布料织物', description: '加厚牛仔面料，耐磨耐用，适合包包、坐垫等创意改造', tags: ['耐磨耐用'], price: 35.0, unit: '米' },
    { id: 9, name: '家具拉手套装', icon: '🚪', category: 'hardware', categoryName: '五金配件', description: '北欧风格柜门拉手，多款式可选，柜子翻新必备', tags: ['家具翻新'], price: 15.0, unit: '个' },
    { id: 10, name: '砂纸套装', icon: '🧽', category: 'tools', categoryName: '工具耗材', description: '多种目数砂纸套装，从粗到细，适合打磨、抛光各种材质', tags: ['打磨必备'], price: 9.9, unit: '套' }
];

let currentMaterialType = 'all';
let cart = [];
let posts = [...initialPosts];
let postIdCounter = 5;
let imageSlotCount = 1;
let currentItem = null;
let currentTutorial = null;
let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', function() {
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

    navBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetSection = btn.dataset.section;
            if (!targetSection) return;

            navBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');

            sections.forEach(function(section) {
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

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeAllModals();
        }
    });
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
        modal.classList.remove('open');
    });

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
    }
}

function closeModal(modalId) {
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
}

window.closeModal = closeModal;

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

function initRecognitionModule() {
    renderQuickItems();
    setupUploadHandler();
    setupQuickItemClick();
    setupUploadOptionModal();
}

function renderQuickItems() {
    const container = document.getElementById('quickItems');
    if (!container) return;

    container.innerHTML = quickItems.map(function(item) {
        return '<div class="quick-item" data-item-id="' + item.id + '">' +
            '<span class="quick-item-icon">' + item.icon + '</span>' +
            '<span class="quick-item-name">' + item.name + '</span>' +
            '</div>';
    }).join('');
}

function setupUploadHandler() {
    const uploadArea = document.getElementById('uploadArea');
    const imageInputUpload = document.getElementById('imageInputUpload');
    const imageInputCamera = document.getElementById('imageInputCamera');

    if (!uploadArea) return;

    uploadArea.addEventListener('click', function() {
        showUploadOptionModal();
    });

    if (imageInputUpload) {
        imageInputUpload.addEventListener('change', function(e) {
            handleImageSelect(e);
        });
    }

    if (imageInputCamera) {
        imageInputCamera.addEventListener('change', function(e) {
            handleImageSelect(e);
        });
    }
}

function setupUploadOptionModal() {
    const btnGallery = document.getElementById('btnUploadGallery');
    const btnCamera = document.getElementById('btnUploadCamera');

    if (btnGallery) {
        btnGallery.addEventListener('click', function() {
            closeModal('uploadOptionModal');
            const input = document.getElementById('imageInputUpload');
            if (input) input.click();
        });
    }

    if (btnCamera) {
        btnCamera.addEventListener('click', function() {
            closeModal('uploadOptionModal');
            const input = document.getElementById('imageInputCamera');
            if (input) input.click();
        });
    }
}

function showUploadOptionModal() {
    const modal = document.getElementById('uploadOptionModal');
    if (modal) {
        modal.classList.add('open');
    }
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }
}

function handleImageSelect(e) {
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
    reader.onload = function(event) {
        const previewImage = document.getElementById('previewImage');
        const uploadPlaceholder = document.getElementById('uploadPlaceholder');
        const uploadArea = document.getElementById('uploadArea');

        if (previewImage) {
            previewImage.src = event.target.result;
            previewImage.style.display = 'block';
        }
        if (uploadPlaceholder) {
            uploadPlaceholder.style.display = 'none';
        }
        if (uploadArea) {
            uploadArea.classList.add('has-image');
        }
        
        simulateRecognition();
    };
    reader.readAsDataURL(file);
}

function setupQuickItemClick() {
    const container = document.getElementById('quickItems');
    if (!container) return;

    container.addEventListener('click', function(e) {
        const quickItem = e.target.closest('.quick-item');
        if (!quickItem) return;

        const itemId = quickItem.dataset.itemId;
        if (itemId && itemDatabase[itemId]) {
            showRecognitionResult(itemDatabase[itemId]);
        }
    });
}

function simulateRecognition() {
    const loadingContainer = document.getElementById('loadingContainer');
    const previewImage = document.getElementById('previewImage');
    const uploadPlaceholder = document.getElementById('uploadPlaceholder');

    if (previewImage) {
        previewImage.style.display = 'none';
    }
    if (uploadPlaceholder) {
        uploadPlaceholder.style.display = 'none';
    }
    if (loadingContainer) {
        loadingContainer.style.display = 'flex';
    }

    setTimeout(function() {
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
    const loadingContainer = document.getElementById('loadingContainer');
    const previewImage = document.getElementById('previewImage');

    if (loadingContainer) {
        loadingContainer.style.display = 'none';
    }
    if (previewImage) {
        previewImage.style.display = 'block';
    }

    if (confidenceValue) {
        confidenceValue.textContent = item.confidence + '%';
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
        suggestionsGrid.innerHTML = item.suggestions.map(function(suggestion) {
            return '<div class="suggestion-card" data-suggestion="' + suggestion.title + '">' +
                '<span class="suggestion-icon">' + suggestion.icon + '</span>' +
                '<div class="suggestion-content">' +
                '<h5>' + suggestion.title + '</h5>' +
                '<p>' + suggestion.description + '</p>' +
                '</div>' +
                '</div>';
        }).join('');

        suggestionsGrid.querySelectorAll('.suggestion-card').forEach(function(card) {
            card.addEventListener('click', function() {
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

    setTimeout(function() {
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

        const targetFilter = Array.from(filterBtns).find(function(btn) {
            return btn.dataset.category === category;
        });
        if (targetFilter) {
            targetFilter.click();
        }
    }, 100);
}

function showToast(message, type) {
    if (type === undefined) type = 'info';
    
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    
    let icon = 'ℹ️';
    if (type === 'success') icon = '✓';
    if (type === 'error') icon = '✕';

    toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span>' + message + '</span>';

    document.body.appendChild(toast);

    setTimeout(function() { toast.classList.add('show'); }, 10);

    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

function initTutorialsModule() {
    renderTutorials();
    setupFilterHandlers();
    setupTutorialClick();
}

function renderTutorials() {
    const container = document.getElementById('tutorialsGrid');
    if (!container) return;

    const filteredTutorials = currentCategory === 'all' 
        ? tutorialsData 
        : tutorialsData.filter(function(t) { return t.category === currentCategory; });

    if (filteredTutorials.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;">' +
            '<span class="empty-state-icon">📚</span>' +
            '<h4 class="empty-state-title">暂无相关教程</h4>' +
            '<p class="empty-state-text">试试其他分类看看</p>' +
            '</div>';
        return;
    }

    container.innerHTML = filteredTutorials.map(function(tutorial) {
        return '<div class="tutorial-card" data-tutorial-id="' + tutorial.id + '">' +
            '<div class="tutorial-card-image">' +
            '<span class="card-icon">' + tutorial.icon + '</span>' +
            (tutorial.hasVideo ? '<span class="video-badge">📹 视频</span>' : '') +
            '</div>' +
            '<div class="tutorial-card-content">' +
            '<h3 class="tutorial-card-title">' + tutorial.title + '</h3>' +
            '<p class="tutorial-card-description">' + tutorial.description + '</p>' +
            '<div class="tutorial-card-meta">' +
            '<span class="difficulty ' + tutorial.difficulty + '">⭐ ' + getDifficultyText(tutorial.difficulty) + '</span>' +
            '<span class="time">⏱️ ' + tutorial.time + '</span>' +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');
}

function getDifficultyText(difficulty) {
    const texts = { easy: '简单', medium: '中等', hard: '困难' };
    return texts[difficulty] || '简单';
}

function setupFilterHandlers() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!filterBtns) return;

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderTutorials();
        });
    });
}

function setupTutorialClick() {
    const container = document.getElementById('tutorialsGrid');
    if (!container) return;

    container.addEventListener('click', function(e) {
        const card = e.target.closest('.tutorial-card');
        if (!card) return;

        const tutorialId = parseInt(card.dataset.tutorialId);
        const tutorial = tutorialsData.find(function(t) { return t.id === tutorialId; });
        
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

    detailContainer.innerHTML = '<div class="tutorial-image">' +
        '<span style="font-size: 80px; display: flex; align-items: center; justify-content: center; height: 100%;">' + tutorial.icon + '</span>' +
        '</div>' +
        '<h2 style="font-size: 24px; font-weight: 600; margin-bottom: 12px;">' + tutorial.title + '</h2>' +
        '<div class="tutorial-meta">' +
        '<span class="meta-item difficulty ' + tutorial.difficulty + '">⭐ ' + getDifficultyText(tutorial.difficulty) + '</span>' +
        '<span class="meta-item">⏱️ ' + tutorial.time + '</span>' +
        (tutorial.hasVideo ? '<span class="meta-item">📹 含视频教程</span>' : '') +
        '</div>' +
        '<p class="tutorial-description">' + tutorial.description + '</p>' +
        '<div class="materials-section">' +
        '<h3>🛠️ 所需材料</h3>' +
        '<div class="materials-list">' +
        tutorial.materials.map(function(m) { return '<span class="material-tag">' + m + '</span>'; }).join('') +
        '</div>' +
        '</div>' +
        '<div class="steps-section">' +
        '<h3>📝 详细步骤</h3>' +
        '<div class="steps-list">' +
        tutorial.steps.map(function(step, index) {
            return '<div class="step-item">' +
                '<div class="step-number">' + (index + 1) + '</div>' +
                '<div class="step-content">' +
                '<h4>' + step.title + '</h4>' +
                '<p>' + step.description + '</p>' +
                '</div>' +
                '</div>';
        }).join('') +
        '</div>' +
        '</div>';

    if (modal) {
        modal.classList.add('open');
    }

    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }
}

function initCommunityModule() {
    renderPosts();
    setupCreatePost();
    setupPostActions();
    setupImageUpload();
}

function renderPosts() {
    const container = document.getElementById('communityFeed');
    if (!container) return;

    if (posts.length === 0) {
        container.innerHTML = '<div class="empty-state">' +
            '<span class="empty-state-icon">🏠</span>' +
            '<h4 class="empty-state-title">还没有分享作品</h4>' +
            '<p class="empty-state-text">快来发布你的第一个改造作品吧！</p>' +
            '</div>';
        return;
    }

    container.innerHTML = posts.map(function(post) {
        return '<div class="post-card" data-post-id="' + post.id + '">' +
            '<div class="post-header">' +
            '<div class="post-avatar">' + post.avatar + '</div>' +
            '<div class="post-user-info">' +
            '<div class="post-username">' + post.username + '</div>' +
            '<div class="post-time">' + post.time + '</div>' +
            '</div>' +
            '<span class="post-difficulty-badge ' + post.difficulty + '">⭐ ' + getDifficultyText(post.difficulty) + '</span>' +
            '</div>' +
            '<h3 class="post-title">' + post.title + '</h3>' +
            '<p class="post-description">' + post.description + '</p>' +
            (post.images.length > 0 ? '<div class="post-images">' +
                post.images.map(function(img) { return '<div class="post-image-item">' + img + '</div>'; }).join('') +
                '</div>' : '') +
            (post.materials.length > 0 ? '<div class="post-materials">' +
                '<div class="post-materials-label">使用材料：</div>' +
                '<div class="post-materials-tags">' +
                post.materials.map(function(m) { return '<span class="post-material-tag">' + m + '</span>'; }).join('') +
                '</div>' +
                '</div>' : '') +
            '<div class="post-actions">' +
            '<button class="post-action-btn like-btn ' + (post.isLiked ? 'liked' : '') + '" data-post-id="' + post.id + '">' +
            '<span class="action-icon">' + (post.isLiked ? '❤️' : '🤍') + '</span>' +
            '<span class="action-count">' + post.likes + '</span>' +
            '</button>' +
            '<button class="post-action-btn comment-btn" data-post-id="' + post.id + '">' +
            '<span class="action-icon">💬</span>' +
            '<span class="action-count">' + post.comments + '</span>' +
            '</button>' +
            '<button class="post-action-btn share-btn">' +
            '<span class="action-icon">🔗</span>' +
            '<span>分享</span>' +
            '</button>' +
            '</div>' +
            '</div>';
    }).join('');
}

function setupCreatePost() {
    const createBtn = document.getElementById('createPostBtn');
    const form = document.getElementById('createPostForm');
    
    if (createBtn) {
        createBtn.addEventListener('click', function() {
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
        form.addEventListener('submit', function(e) {
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
            ? materialsInput.value.split(',').map(function(m) { return m.trim(); }).filter(function(m) { return m; })
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
    
    slots.forEach(function(slot) {
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
        imageGrid.innerHTML = '<div class="upload-slot" id="uploadSlot1">' +
            '<input type="file" id="postImage1" accept="image/*" capture="environment">' +
            '<span class="slot-placeholder">+</span>' +
            '</div>';
        imageSlotCount = 1;
    }
}

function setupPostActions() {
    const container = document.getElementById('communityFeed');
    if (!container) return;

    container.addEventListener('click', function(e) {
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
    const post = posts.find(function(p) { return p.id === postId; });
    if (!post) return;

    post.isLiked = !post.isLiked;
    post.likes += post.isLiked ? 1 : -1;

    renderPosts();
}

function showCommentsModal(postId) {
    const post = posts.find(function(p) { return p.id === postId; });
    if (!post) return;

    let modal = document.getElementById('commentsModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'commentsModal';
        modal.className = 'modal comment-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = '<div class="modal-content">' +
        '<button class="modal-close" onclick="closeModal(\'commentsModal\')">&times;</button>' +
        '<h3>💬 评论 (' + post.comments + ')</h3>' +
        '<div class="comments-list">' +
        (post.commentList.length > 0 ? post.commentList.map(function(comment) {
            return '<div class="comment-item">' +
                '<div class="comment-header">' +
                '<span class="comment-username">' + comment.username + '</span>' +
                '<span class="comment-time">' + comment.time + '</span>' +
                '</div>' +
                '<p class="comment-text">' + comment.text + '</p>' +
                '</div>';
        }).join('') : '<div class="empty-state" style="padding: 40px 20px;">' +
            '<span class="empty-state-icon">💭</span>' +
            '<p class="empty-state-text">还没有评论，快来抢沙发吧！</p>' +
            '</div>') +
        '</div>' +
        '<div class="comment-input-section">' +
        '<input type="text" id="commentInput" placeholder="写下你的评论...">' +
        '<button class="btn-primary" id="submitCommentBtn" data-post-id="' + postId + '">发送</button>' +
        '</div>' +
        '</div>';

    modal.classList.add('open');
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.classList.add('visible');
    }

    const submitBtn = document.getElementById('submitCommentBtn');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            handleSubmitComment(postId);
        });
    }

    const commentInput = document.getElementById('commentInput');
    if (commentInput) {
        commentInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSubmitComment(postId);
            }
        });
    }
}

function handleSubmitComment(postId) {
    const input = document.getElementById('commentInput');
    if (!input || !input.value.trim()) return;

    const post = posts.find(function(p) { return p.id === postId; });
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
        addImageBtn.addEventListener('click', function() {
            if (imageSlotCount >= 9) {
                showToast('最多只能上传9张图片', 'error');
                return;
            }
            
            imageSlotCount++;
            const newSlot = document.createElement('div');
            newSlot.className = 'upload-slot';
            newSlot.id = 'uploadSlot' + imageSlotCount;
            newSlot.innerHTML = '<input type="file" id="postImage' + imageSlotCount + '" accept="image/*" capture="environment">' +
                '<span class="slot-placeholder">+</span>';
            imageGrid.appendChild(newSlot);
            
            setupSlotUpload(newSlot);
        });
    }

    const existingSlots = document.querySelectorAll('.upload-slot');
    existingSlots.forEach(function(slot) { setupSlotUpload(slot); });
}

function setupSlotUpload(slot) {
    const input = slot.querySelector('input[type="file"]');
    if (!input) return;

    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showToast('请选择图片文件', 'error');
            return;
        }

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
    });
}

function initMaterialsModule() {
    renderMaterials();
    setupFilterHandlersMaterials();
    setupCartHandlers();
    setupCheckout();
}

function renderMaterials() {
    const container = document.getElementById('materialsGrid');
    if (!container) return;

    const filteredMaterials = currentMaterialType === 'all'
        ? materialsData
        : materialsData.filter(function(m) { return m.category === currentMaterialType; });

    if (filteredMaterials.length === 0) {
        container.innerHTML = '<div class="empty-state" style="grid-column: 1 / -1;">' +
            '<span class="empty-state-icon">🛒</span>' +
            '<h4 class="empty-state-title">暂无相关材料</h4>' +
            '<p class="empty-state-text">试试其他分类看看</p>' +
            '</div>';
        return;
    }

    container.innerHTML = filteredMaterials.map(function(material) {
        const cartItem = cart.find(function(item) { return item.id === material.id; });
        const inCart = !!cartItem;
        const quantity = cartItem ? cartItem.quantity : 0;

        return '<div class="material-card" data-material-id="' + material.id + '">' +
            '<div class="material-card-header">' +
            '<div class="material-icon">' + material.icon + '</div>' +
            '<div class="material-info">' +
            '<h4 class="material-name">' + material.name + '</h4>' +
            '<span class="material-category">' + material.categoryName + '</span>' +
            '</div>' +
            '</div>' +
            '<p class="material-description">' + material.description + '</p>' +
            '<div class="material-tags">' +
            material.tags.map(function(tag) { return '<span class="material-tag">' + tag + '</span>'; }).join('') +
            '</div>' +
            '<div class="material-footer">' +
            '<span class="material-price">' +
            '¥' + material.price.toFixed(2) +
            '<span class="unit">/' + material.unit + '</span>' +
            '</span>' +
            '<div class="material-action">' +
            (inCart ? '<div class="material-quantity">' +
                '<button class="material-quantity-btn minus-btn" data-material-id="' + material.id + '">-</button>' +
                '<span class="material-quantity-value">' + quantity + '</span>' +
                '<button class="material-quantity-btn plus-btn" data-material-id="' + material.id + '">+</button>' +
                '</div>' :
                '<button class="material-add-btn" data-material-id="' + material.id + '">+</button>') +
            '</div>' +
            '</div>' +
            '</div>';
    }).join('');

    setupMaterialCardHandlers();
}

function setupMaterialCardHandlers() {
    const addBtns = document.querySelectorAll('.material-add-btn');
    const minusBtns = document.querySelectorAll('.minus-btn');
    const plusBtns = document.querySelectorAll('.plus-btn');

    addBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const materialId = parseInt(btn.dataset.materialId);
            addToCart(materialId);
        });
    });

    minusBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const materialId = parseInt(btn.dataset.materialId);
            updateCartQuantity(materialId, -1);
        });
    });

    plusBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const materialId = parseInt(btn.dataset.materialId);
            updateCartQuantity(materialId, 1);
        });
    });
}

function setupFilterHandlersMaterials() {
    const filterBtns = document.querySelectorAll('.material-filter');
    if (!filterBtns) return;

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterBtns.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentMaterialType = btn.dataset.type;
            renderMaterials();
        });
    });
}

function addToCart(materialId) {
    const material = materialsData.find(function(m) { return m.id === materialId; });
    if (!material) return;

    const existingItem = cart.find(function(item) { return item.id === materialId; });
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
    showToast('已添加 ' + material.name + ' 到购物清单', 'success');
}

function updateCartQuantity(materialId, delta) {
    const cartItem = cart.find(function(item) { return item.id === materialId; });
    if (!cartItem) return;

    cartItem.quantity += delta;

    if (cartItem.quantity <= 0) {
        cart = cart.filter(function(item) { return item.id !== materialId; });
        const material = materialsData.find(function(m) { return m.id === materialId; });
        if (material) {
            showToast('已移除 ' + material.name, 'info');
        }
    }

    renderMaterials();
    updateCartUI();
}

function removeFromCart(materialId) {
    const material = materialsData.find(function(m) { return m.id === materialId; });
    cart = cart.filter(function(item) { return item.id !== materialId; });
    
    renderMaterials();
    updateCartUI();
    
    if (material) {
        showToast('已移除 ' + material.name, 'info');
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartBadge = document.getElementById('cartBadge');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce(function(sum, item) { return sum + item.quantity; }, 0);
    const totalPrice = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);

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
        cartTotal.textContent = '¥' + totalPrice.toFixed(2);
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="cart-empty">' +
                '<span>🛒</span>' +
                '<p>购物清单为空</p>' +
                '<p class="cart-hint">点击材料卡片的"+"添加</p>' +
                '</div>';
        } else {
            cartItems.innerHTML = cart.map(function(item) {
                return '<div class="cart-item" data-cart-id="' + item.id + '">' +
                    '<div class="cart-item-icon">' + item.icon + '</div>' +
                    '<div class="cart-item-info">' +
                    '<div class="cart-item-header">' +
                    '<span class="cart-item-name">' + item.name + '</span>' +
                    '<button class="cart-item-remove" data-cart-id="' + item.id + '">×</button>' +
                    '</div>' +
                    '<div class="cart-item-footer">' +
                    '<span class="cart-item-price">¥' + (item.price * item.quantity).toFixed(2) + '</span>' +
                    '<div class="cart-item-quantity">' +
                    '<button class="cart-item-qty-btn minus" data-cart-id="' + item.id + '">-</button>' +
                    '<span class="cart-item-qty-value">' + item.quantity + '</span>' +
                    '<button class="cart-item-qty-btn plus" data-cart-id="' + item.id + '">+</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            }).join('');

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

    removeBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const cartId = parseInt(btn.dataset.cartId);
            removeFromCart(cartId);
        });
    });

    minusBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const cartId = parseInt(btn.dataset.cartId);
            updateCartQuantity(cartId, -1);
        });
    });

    plusBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
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
        cartFab.addEventListener('click', function() {
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

        overlay.addEventListener('click', function() {
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
        checkoutBtn.addEventListener('click', function() {
            showCheckoutModal();
        });
    }

    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            handleCheckout();
        });
    }
}

function showCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutTotal = document.getElementById('checkoutTotal');

    if (!checkoutItems) return;

    const totalPrice = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);

    checkoutItems.innerHTML = cart.map(function(item) {
        return '<div class="checkout-item">' +
            '<div class="checkout-item-image">' + item.icon + '</div>' +
            '<div class="checkout-item-info">' +
            '<div class="checkout-item-name">' + item.name + '</div>' +
            '<div class="checkout-item-price">¥' + item.price.toFixed(2) + '/' + item.unit + '</div>' +
            '</div>' +
            '<div class="checkout-item-quantity">' +
            '<span>× ' + item.quantity + '</span>' +
            '</div>' +
            '</div>';
    }).join('');

    if (checkoutTotal) {
        checkoutTotal.textContent = '¥' + totalPrice.toFixed(2);
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

    const totalPrice = cart.reduce(function(sum, item) { return sum + (item.price * item.quantity); }, 0);
    
    showToast('采购成功！总金额：¥' + totalPrice.toFixed(2), 'success');
    
    cart = [];
    renderMaterials();
    updateCartUI();
    closeModal('checkoutModal');
}
