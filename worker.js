const SLOT_ORDER = [
  "EI_1",
  "SN_1",
  "TF_1",
  "JP_1",
  "EI_2",
  "SN_2",
  "TF_2",
  "JP_2",
  "EI_3",
  "SN_3",
  "TF_3",
  "JP_3",
  "EI_4",
  "SN_4",
  "TF_4"
];

const QUESTION_BANK = {
  EI_1: [
    {
      id: "ei1-cushion-center",
      md5: "880533548bb5f4657cb97ac8a16753e1",
      slot: "EI_1",
      text: "最舒服的垫子突然空出来，你会怎么做？",
      hint: "看你是自然进场，还是先在旁边等一等。",
      art: "territory",
      options: [
        { key: "A", text: "直接过去坐下，顺便和旁边几只打个招呼", dim: "E" },
        { key: "B", text: "先看看有没有人在看，等没那么热闹再过去", dim: "I" },
        { key: "C", text: "绕一圈再靠近，让自己加入得自然一点", dim: "E" }
      ]
    },
    {
      id: "ei1-sofa-presence",
      md5: "265e3ae20c78be7ff98d96274c68281f",
      slot: "EI_1",
      text: "大家都挤在同一个大沙发上，你通常会坐哪里？",
      hint: "热闹里的站位，往往最能暴露社交习惯。",
      art: "orbit",
      options: [
        { key: "A", text: "坐到容易被看见的位置，方便接上大家的话题", dim: "E" },
        { key: "B", text: "贴边坐着就好，舒服比被注意更重要", dim: "I" },
        { key: "C", text: "在几只猫之间换位置，哪里热闹就去哪边", dim: "E" }
      ]
    },
    {
      id: "ei1-blanket-ring",
      md5: "487bc9c4efdd8cf483d1bea9f1ee00e5",
      slot: "EI_1",
      text: "一圈猫都趴在毯子边，你更像哪一种？",
      hint: "你会补进人群，还是给自己留一点空位。",
      art: "huddle",
      options: [
        { key: "A", text: "直接挤进最暖的地方，一起趴着才有氛围", dim: "E" },
        { key: "B", text: "挑边上一小块，不想被大家围得太近", dim: "I" },
        { key: "C", text: "先靠近试试，合适就顺势加入", dim: "E" }
      ]
    },
    {
      id: "ei1-box-doorway",
      md5: "74a13b2a5f23e00a84cf3ee926b4f16c",
      slot: "EI_1",
      text: "一个新纸箱被放在客厅中间，你最可能？",
      hint: "公开出场，还是等大家看腻了再试。",
      art: "territory",
      options: [
        { key: "A", text: "马上进去试坐，让大家知道这个箱子我先看上了", dim: "E" },
        { key: "B", text: "等围观的人少一点，再悄悄进去", dim: "I" },
        { key: "C", text: "先围着箱子转两圈，再很自然地坐进去", dim: "E" }
      ]
    },
    {
      id: "ei1-corridor-traffic",
      md5: "3371bc72263e80646888fd21f4682e88",
      slot: "EI_1",
      text: "走廊里正好很热闹，你会怎么通过？",
      hint: "你会顺着热闹走，还是避开人流。",
      art: "orbit",
      options: [
        { key: "A", text: "直接穿过去，顺便看看大家在忙什么", dim: "E" },
        { key: "B", text: "先等一等，等不那么挤了再走", dim: "I" },
        { key: "C", text: "在热闹里停一下，看看能不能加入点什么", dim: "E" }
      ]
    },
    {
      id: "ei1-sunspot-shared",
      md5: "d7ddec5fa9040566f85693db9b5129a9",
      slot: "EI_1",
      text: "阳光正好落在大家常待的地方，你会选哪儿晒？",
      hint: "晒太阳时，你也会顺便选择社交距离。",
      art: "sunspot",
      options: [
        { key: "A", text: "去中间晒，和大家待在一起更有感觉", dim: "E" },
        { key: "B", text: "找旁边安静一点的光，暖和就够了", dim: "I" },
        { key: "C", text: "一边晒一边留意谁从旁边经过", dim: "E" }
      ]
    },
    {
      id: "ei1-shelf-crowd",
      md5: "69e0d90e72bdbce4d1e1d7dfcf2533ea",
      slot: "EI_1",
      text: "高处平台已经有猫在了，你会怎么办？",
      hint: "好位置有人时，你会共享还是换地方。",
      art: "perch",
      options: [
        { key: "A", text: "照样上去一起待着，好地方本来就可以共享", dim: "E" },
        { key: "B", text: "换个没人的位置，不想硬挤进别人的空间", dim: "I" },
        { key: "C", text: "先靠过去试探一下，气氛合适再留下", dim: "E" }
      ]
    },
    {
      id: "ei1-room-heat",
      md5: "33d3822a5644e80d8d59c053025469cf",
      slot: "EI_1",
      text: "今天屋里特别热闹，你的第一反应是？",
      hint: "热闹会给你充电，还是让你想先退开。",
      art: "orbit",
      options: [
        { key: "A", text: "想进去看看发生了什么，热闹会让我有精神", dim: "E" },
        { key: "B", text: "想去安静角落待着，别把我也卷进去", dim: "I" },
        { key: "C", text: "先靠近看一眼，再决定要不要留下", dim: "E" }
      ]
    },
    {
      id: "ei1-public-toy",
      md5: "8461a044d39a7d82bb373ae99a73eabc",
      slot: "EI_1",
      text: "公共玩具被摆在大家都看得到的地方，你会？",
      hint: "你会先把局带起来，还是先观察。",
      art: "territory",
      options: [
        { key: "A", text: "先过去碰一下，让大家都注意到它", dim: "E" },
        { key: "B", text: "观察一会儿，等没人盯着再上前", dim: "I" },
        { key: "C", text: "边玩边带动旁边的猫一起看", dim: "E" }
      ]
    },
    {
      id: "ei1-lounge-passage",
      md5: "68d78efaffced42f3d669328fb8f543d",
      slot: "EI_1",
      text: "休息区和主通道之间，你更爱待在哪？",
      hint: "一个方便接触，一个方便保留自己。",
      art: "route",
      options: [
        { key: "A", text: "靠近通道，随时知道外面在发生什么", dim: "E" },
        { key: "B", text: "选偏一点的安静位置，舒服最重要", dim: "I" },
        { key: "C", text: "选能看到大家、也能随时加入的位置", dim: "E" }
      ]
    }
  ],
  SN_1: [
    {
      id: "sn1-resting-spot",
      md5: "22d4b0b7405a8afd070a3cf9cd2a3623",
      slot: "SN_1",
      text: "挑一个长期休息的位置，你最先看什么？",
      hint: "你更重视实际条件，还是整体感觉。",
      art: "perch",
      options: [
        { key: "A", text: "风从哪来、晒多久、垫子够不够软", dim: "S" },
        { key: "B", text: "这个位置待起来有没有对味", dim: "N" },
        { key: "C", text: "它是不是有种今天就该待在这里的感觉", dim: "N" }
      ]
    },
    {
      id: "sn1-window-focus",
      md5: "6666b400c6f272eaf9310d9df8ce208c",
      slot: "SN_1",
      text: "面对同一扇窗，你最容易注意到什么？",
      hint: "有人先看细节，有人先开始联想。",
      art: "radar",
      options: [
        { key: "A", text: "光线角度、温度变化、外面看不看得清", dim: "S" },
        { key: "B", text: "窗外好像正在发生一个小故事", dim: "N" },
        { key: "C", text: "外面哪些动静一直重复出现", dim: "S" }
      ]
    },
    {
      id: "sn1-bed-edge",
      md5: "643973ddc1ea1af7eeed7c0ecb7f2c36",
      slot: "SN_1",
      text: "选床边的位置时，你会先判断什么？",
      hint: "你是先试舒不舒服，还是先看气氛对不对。",
      art: "perch",
      options: [
        { key: "A", text: "软硬、温度和离光线远不远", dim: "S" },
        { key: "B", text: "这个角落今天看起来顺不顺眼", dim: "N" },
        { key: "C", text: "脚下稳不稳，身体有没有支撑", dim: "S" }
      ]
    },
    {
      id: "sn1-stack-blankets",
      md5: "f1b8da538f6a752bc2d837f131715d97",
      slot: "SN_1",
      text: "一摞毯子放在面前，你最先想选哪张？",
      hint: "选择时，你靠手感还是靠直觉。",
      art: "stash",
      options: [
        { key: "A", text: "更厚、更暖、摸起来更舒服的那张", dim: "S" },
        { key: "B", text: "看起来最像今天该用的那张", dim: "N" },
        { key: "C", text: "边缘整不整齐、贴身感好不好那张", dim: "S" }
      ]
    },
    {
      id: "sn1-looking-down",
      md5: "3784c000c7382fb57ebf1f5fd36aa16c",
      slot: "SN_1",
      text: "从高处往下看房间，你先看到什么？",
      hint: "你先看现实布局，还是看人和事的关系。",
      art: "perch",
      options: [
        { key: "A", text: "距离、路线、哪里最好落脚", dim: "S" },
        { key: "B", text: "谁和谁之间的气氛好像变了", dim: "N" },
        { key: "C", text: "哪个角落像藏着别人没注意到的事", dim: "N" }
      ]
    },
    {
      id: "sn1-shelf-choice",
      md5: "cfddcad98e2ac7b2d6edcebe23bc788c",
      slot: "SN_1",
      text: "几层架子都能待，你会怎么选？",
      hint: "你更相信参数，还是相信那一下感觉。",
      art: "perch",
      options: [
        { key: "A", text: "看高度稳不稳、上下方不方便", dim: "S" },
        { key: "B", text: "哪个位置看起来最像属于我", dim: "N" },
        { key: "C", text: "看视野好不好、跳上去顺不顺", dim: "S" }
      ]
    },
    {
      id: "sn1-curtain-light",
      md5: "a5e41441a8f8d52fc337ff2d2b8acc8e",
      slot: "SN_1",
      text: "一道光从窗帘边漏进来，你更会注意什么？",
      hint: "你会先看它落在哪，还是想它像什么。",
      art: "sunspot",
      options: [
        { key: "A", text: "光落在哪里、亮不亮、会不会晒到身上", dim: "S" },
        { key: "B", text: "这个画面好像在提醒我什么", dim: "N" },
        { key: "C", text: "光线移动得快不快，温度有没有变", dim: "S" }
      ]
    },
    {
      id: "sn1-room-smell",
      md5: "f3b5a9ead0b23e0d3955ad0dfb06ee55",
      slot: "SN_1",
      text: "空气味道有一点变化，你第一反应是？",
      hint: "你先找来源，还是先判断是不是有事要发生。",
      art: "radar",
      options: [
        { key: "A", text: "具体是什么味道，从哪里飘来的", dim: "S" },
        { key: "B", text: "这变化会不会预示后面有动静", dim: "N" },
        { key: "C", text: "整个房间的感觉好像突然变了", dim: "N" }
      ]
    },
    {
      id: "sn1-perch-vibe",
      md5: "d2930c3328ecb2c01e5cbc11f6ff2715",
      slot: "SN_1",
      text: "两个地方都能坐，你会被什么打动？",
      hint: "你选的是实用舒服，还是整体气质。",
      art: "perch",
      options: [
        { key: "A", text: "脚感、支撑和角度都刚刚好", dim: "S" },
        { key: "B", text: "那个位置的感觉最对", dim: "N" },
        { key: "C", text: "附近适不适合久坐和观察", dim: "S" }
      ]
    },
    {
      id: "sn1-floor-pattern",
      md5: "4996187efacd491629fbe66433772938",
      slot: "SN_1",
      text: "地面上有一点变化，你会先看什么？",
      hint: "你先确认差异，还是先猜背后的事。",
      art: "route",
      options: [
        { key: "A", text: "纹理、痕迹、到底哪里被动过", dim: "S" },
        { key: "B", text: "它是不是说明这里发生过什么", dim: "N" },
        { key: "C", text: "今天具体哪里和昨天不一样", dim: "S" }
      ]
    }
  ],
  TF_1: [
    {
      id: "tf1-comfy-spot",
      md5: "0048b934689a0bc9ce9c1cbdb7b25c98",
      slot: "TF_1",
      text: "几只猫都想要同一块舒服位置，你会先想什么？",
      hint: "你先想怎么分清楚，还是谁会难受。",
      art: "huddle",
      options: [
        { key: "A", text: "先定个简单办法，别让大家一直僵着", dim: "T" },
        { key: "B", text: "先让今天状态最差的那只去休息", dim: "F" },
        { key: "C", text: "谁先来、谁更适合，就按规则来", dim: "T" }
      ]
    },
    {
      id: "tf1-public-resource",
      md5: "54574f7f5c28ea65542d79371d6ea199",
      slot: "TF_1",
      text: "公共东西不够用时，你更相信哪种处理？",
      hint: "你要的是清楚，还是照顾到情绪。",
      art: "territory",
      options: [
        { key: "A", text: "先把顺序和标准说清楚", dim: "T" },
        { key: "B", text: "先照顾最容易委屈的那只", dim: "F" },
        { key: "C", text: "让大家都舒服一点，比绝对公平更重要", dim: "F" }
      ]
    },
    {
      id: "tf1-sun-share",
      md5: "77d09ab951f45fc97dbde3e9d2d5ae3b",
      slot: "TF_1",
      text: "一块太阳地只能容两只猫，你会先考虑？",
      hint: "你先排方案，还是先看谁最需要。",
      art: "sunspot",
      options: [
        { key: "A", text: "怎么轮流最省事、最少争", dim: "T" },
        { key: "B", text: "谁今天最没精神，就先让谁晒", dim: "F" },
        { key: "C", text: "先照顾最容易因为这事失落的那只", dim: "F" }
      ]
    },
    {
      id: "tf1-grooming-mat",
      md5: "263a49e4576b1fd38c314d52f5b51ed8",
      slot: "TF_1",
      text: "梳理垫一次只能一只猫用，你会怎么安排？",
      hint: "你更信先后顺序，还是当下需要。",
      art: "routine",
      options: [
        { key: "A", text: "按先后顺序来，大家都省心", dim: "T" },
        { key: "B", text: "先让最紧张、最需要安定的那只用", dim: "F" },
        { key: "C", text: "先让情绪最容易炸的那只缓下来", dim: "F" }
      ]
    },
    {
      id: "tf1-hallway-conflict",
      md5: "c11eb0881124f72e874bb13f3f7f2f1b",
      slot: "TF_1",
      text: "两只猫都要过同一条窄道，你更想怎么处理？",
      hint: "你先解决通行问题，还是先降低不舒服。",
      art: "route",
      options: [
        { key: "A", text: "讲清谁先谁后，别在这里堵着", dim: "T" },
        { key: "B", text: "先别让任何一只觉得自己被硬顶住", dim: "F" },
        { key: "C", text: "让更急躁的那只先过，气氛会松一点", dim: "F" }
      ]
    },
    {
      id: "tf1-favorite-perch",
      md5: "428bca1fd154bacd89c8bf16a7a59b21",
      slot: "TF_1",
      text: "大家都想要高处那个位置，你会先做什么？",
      hint: "先定规则，还是先看谁更需要安稳。",
      art: "perch",
      options: [
        { key: "A", text: "先定一个清楚标准，别来回拉扯", dim: "T" },
        { key: "B", text: "看谁今天更需要一个能安心待着的地方", dim: "F" },
        { key: "C", text: "先别让任何一只明显受伤或尴尬", dim: "F" }
      ]
    },
    {
      id: "tf1-shared-tool",
      md5: "a8b6cb4b714e92758c3a88f33f88a4b3",
      slot: "TF_1",
      text: "共用的小东西不够时，你最重视什么？",
      hint: "你先保规则清楚，还是保关系舒服。",
      art: "stash",
      options: [
        { key: "A", text: "标准明确，谁先谁后都说得通", dim: "T" },
        { key: "B", text: "别因为一件小事让关系变别扭", dim: "F" },
        { key: "C", text: "让场面舒服一点，比每一步都公平更重要", dim: "F" }
      ]
    },
    {
      id: "tf1-rest-conflict",
      md5: "95047c0bb6a2999807081fe62fa56556",
      slot: "TF_1",
      text: "一只猫刚被吵到，另一只又真的需要那个角落，你先做什么？",
      hint: "你先分情况，还是先安抚不舒服。",
      art: "territory",
      options: [
        { key: "A", text: "快速判断情况，别让问题继续扩大", dim: "T" },
        { key: "B", text: "先安抚被吵到的那只，让它别一直绷着", dim: "F" },
        { key: "C", text: "先让场面没那么难受，再谈怎么分", dim: "F" }
      ]
    },
    {
      id: "tf1-turn-taking",
      md5: "0168bd8baee1d476d4969f8fd4ae29fd",
      slot: "TF_1",
      text: "说到轮流，你最在意哪件事？",
      hint: "秩序和体贴，你更自然先抓哪边。",
      art: "route",
      options: [
        { key: "A", text: "逻辑清楚，别让大家反复猜", dim: "T" },
        { key: "B", text: "每只猫的感受有没有被照顾到", dim: "F" },
        { key: "C", text: "规则别太硬，要给情绪留点余地", dim: "F" }
      ]
    },
    {
      id: "tf1-common-comfort",
      md5: "8196ce1d63f14d021e32248a9dbca488",
      slot: "TF_1",
      text: "想让公共区域顺起来，你更依赖什么？",
      hint: "你让空间变好的方式，也会暴露性格。",
      art: "routine",
      options: [
        { key: "A", text: "规则清楚，谁进谁出一目了然", dim: "T" },
        { key: "B", text: "大家愿意多体谅彼此一点", dim: "F" },
        { key: "C", text: "别让谁在这个空间里一直觉得被顶着", dim: "F" }
      ]
    }
  ],
  JP_1: [
    {
      id: "jp1-patrol-route",
      md5: "270430427269d2e399ddd90c6d388334",
      slot: "JP_1",
      text: "你平时的巡逻路线通常是什么样？",
      hint: "你喜欢固定路线，还是想到哪走到哪。",
      art: "route",
      options: [
        { key: "A", text: "大体固定，改也不会随便乱改", dim: "J" },
        { key: "B", text: "想到哪走到哪，路线活一点才舒服", dim: "P" },
        { key: "C", text: "可以微调，但心里有一条主线", dim: "J" }
      ]
    },
    {
      id: "jp1-comfort-setup",
      md5: "bac333798a506936d2114f855e184e2d",
      slot: "JP_1",
      text: "想让自己待得舒服，你会先做什么？",
      hint: "你是先摆顺，还是边过边调。",
      art: "routine",
      options: [
        { key: "A", text: "先把位置、节奏和常用东西摆顺", dim: "J" },
        { key: "B", text: "边待边调，舒服了就算对", dim: "P" },
        { key: "C", text: "不想太早定死，留点临场空间", dim: "P" }
      ]
    },
    {
      id: "jp1-sun-shift",
      md5: "28e8abadb34d942469ca28870403d9f7",
      slot: "JP_1",
      text: "太阳慢慢挪走了，你会怎么做？",
      hint: "你会提前换位置，还是不舒服了再说。",
      art: "sunspot",
      options: [
        { key: "A", text: "预判下一块光，提前挪过去", dim: "J" },
        { key: "B", text: "等真的不舒服再动，没必要太早安排", dim: "P" },
        { key: "C", text: "心里早就知道下一站大概去哪", dim: "J" }
      ]
    },
    {
      id: "jp1-favorite-corner",
      md5: "446eed0d8d80726fe5d2cab09a9cdb27",
      slot: "JP_1",
      text: "一个角落准备长期使用，你会怎么整理？",
      hint: "你会先建立固定摆法，还是先用起来。",
      art: "territory",
      options: [
        { key: "A", text: "先把周围调顺，再开始正式使用", dim: "J" },
        { key: "B", text: "先待着，哪里不顺以后再改", dim: "P" },
        { key: "C", text: "至少先定一个不会乱的基本摆法", dim: "J" }
      ]
    },
    {
      id: "jp1-house-loop",
      md5: "a82d0a5ed22afa5467b3af28359ea0ee",
      slot: "JP_1",
      text: "你在屋里走一圈时，更像哪种节奏？",
      hint: "你的行动有顺序感，还是更像随意逛。",
      art: "route",
      options: [
        { key: "A", text: "有固定顺序，知道怎么走最顺", dim: "J" },
        { key: "B", text: "今天想先看哪就先看哪", dim: "P" },
        { key: "C", text: "大方向固定，细节按当下调整", dim: "J" }
      ]
    },
    {
      id: "jp1-settle-down",
      md5: "7786e8dee2a868f175a319b78b43516a",
      slot: "JP_1",
      text: "刚找到舒服状态时，你接下来会？",
      hint: "舒服以后，你还会继续安排后面吗。",
      art: "routine",
      options: [
        { key: "A", text: "顺手把后面的节奏也安排顺", dim: "J" },
        { key: "B", text: "先享受现在，后面怎样再说", dim: "P" },
        { key: "C", text: "先想好几个备用位置，免得等会儿慌", dim: "J" }
      ]
    },
    {
      id: "jp1-layout-change",
      md5: "6e5093257316b3e947287962b79e40ca",
      slot: "JP_1",
      text: "屋里摆设换了位置，你第一反应是？",
      hint: "你会先重建秩序，还是先走走看。",
      art: "stash",
      options: [
        { key: "A", text: "先重新找一条稳定动线", dim: "J" },
        { key: "B", text: "先随便走几圈，感觉到了再调整", dim: "P" },
        { key: "C", text: "先把最关键的几个点定住", dim: "J" }
      ]
    },
    {
      id: "jp1-rest-rhythm",
      md5: "04c3b5e918891f085ee646cd35bbaa01",
      slot: "JP_1",
      text: "你对休息节奏更像哪一种？",
      hint: "休息这件事，你心里有没有大概的谱。",
      art: "drift",
      options: [
        { key: "A", text: "最好心里有个大概安排，别太散", dim: "J" },
        { key: "B", text: "困了就睡，醒了再说", dim: "P" },
        { key: "C", text: "大致有框架，细节看当下", dim: "J" }
      ]
    },
    {
      id: "jp1-spot-maintenance",
      md5: "494b2771489274a38ec88a2865512f92",
      slot: "JP_1",
      text: "一个舒服位置定下来后，你会怎么对待它？",
      hint: "你更像维持型，还是常换型。",
      art: "territory",
      options: [
        { key: "A", text: "尽量维持它，这样每天都省心", dim: "J" },
        { key: "B", text: "看心情常换，今天舒服不代表明天也舒服", dim: "P" },
        { key: "C", text: "核心不变，小地方可以顺手调", dim: "J" }
      ]
    },
    {
      id: "jp1-daily-pass",
      md5: "beacdb8093123f61258a53725c6f8931",
      slot: "JP_1",
      text: "面对新的一天，你更自然的开局是？",
      hint: "你的舒服感来自结构，还是来自弹性。",
      art: "route",
      options: [
        { key: "A", text: "先给今天一个大概框架，后面不容易乱", dim: "J" },
        { key: "B", text: "边走边决定，过得活一点更重要", dim: "P" },
        { key: "C", text: "至少先知道大概顺序，别全靠撞", dim: "J" }
      ]
    }
  ],
  EI_2: [
    {
      id: "ei2-good-energy",
      md5: "2686d913cbf2d229d3a2fc871032332c",
      slot: "EI_2",
      text: "你状态最好的那一小段时间，最想用来做什么？",
      hint: "好电量是往外用，还是先留给自己。",
      art: "orbit",
      options: [
        { key: "A", text: "去有动静的地方晃晃，看谁在干嘛", dim: "E" },
        { key: "B", text: "找个安稳角落独处，把状态留给自己", dim: "I" },
        { key: "C", text: "先加入现场，再决定要不要久留", dim: "E" }
      ]
    },
    {
      id: "ei2-room-placement",
      md5: "1b4fe393e3e30bbb1834ebfb7681f2b1",
      slot: "EI_2",
      text: "一屋子都在活动时，你会把自己放在哪？",
      hint: "你离热闹近，还是离自己近。",
      art: "territory",
      options: [
        { key: "A", text: "靠近热闹中心，方便知道大家在干嘛", dim: "E" },
        { key: "B", text: "离人群一步远，能看见也能撤退", dim: "I" },
        { key: "C", text: "哪里有互动就往哪里挪，不想错过", dim: "E" }
      ]
    },
    {
      id: "ei2-after-nap",
      md5: "d0283c37e72eb9c3645a8971229c9496",
      slot: "EI_2",
      text: "刚睡醒但状态不错，你第一步更像什么？",
      hint: "醒来后，你先找人气还是先找安静。",
      art: "drift",
      options: [
        { key: "A", text: "去看看外面什么情况，让自己彻底醒过来", dim: "E" },
        { key: "B", text: "先自己缓一缓，在安静里恢复", dim: "I" },
        { key: "C", text: "边醒边往有猫的地方挪，电量会更快上线", dim: "E" }
      ]
    },
    {
      id: "ei2-multi-window",
      md5: "5d38557175881d676cd2ea41fbcfbe77",
      slot: "EI_2",
      text: "几个窗口都有人在看，你更可能去哪？",
      hint: "你会去人多那边，还是找自己的空窗。",
      art: "perch",
      options: [
        { key: "A", text: "去人多那边，一起围观更有意思", dim: "E" },
        { key: "B", text: "找一扇空窗，自己看完整段风景", dim: "I" },
        { key: "C", text: "几个窗口来回串，哪里有反应就停哪里", dim: "E" }
      ]
    },
    {
      id: "ei2-grooming-circle",
      md5: "212bf5aeef878f6c74c691c3bb1da439",
      slot: "EI_2",
      text: "别的猫围成小圈互相整理毛，你会？",
      hint: "你会自然靠近，还是看一会儿就够。",
      art: "huddle",
      options: [
        { key: "A", text: "自然靠过去，这种互动挺舒服", dim: "E" },
        { key: "B", text: "看一会儿就好，不一定要加入", dim: "I" },
        { key: "C", text: "先待在近处，找到时机再接上", dim: "E" }
      ]
    },
    {
      id: "ei2-long-afternoon",
      md5: "cf19fddf553ef65e32f049bf6a21113a",
      slot: "EI_2",
      text: "一个很长的下午，你更想把精神放在哪里？",
      hint: "你需要流动感，还是自己的节奏。",
      art: "sunspot",
      options: [
        { key: "A", text: "放在有变化、有接触的地方", dim: "E" },
        { key: "B", text: "放在自己的节奏里，不被外面牵着走", dim: "I" },
        { key: "C", text: "在人群边缘来回过渡，想接就接", dim: "E" }
      ]
    },
    {
      id: "ei2-house-full",
      md5: "33fc85980bf4b94918635e9b0af5b1d3",
      slot: "EI_2",
      text: "今天屋里满员，你通常会怎么待？",
      hint: "环境一热闹，你的站位就很明显。",
      art: "orbit",
      options: [
        { key: "A", text: "哪里有猫就往哪里绕，越满越有意思", dim: "E" },
        { key: "B", text: "保留一个只属于自己的点", dim: "I" },
        { key: "C", text: "在几个小局之间来回切换", dim: "E" }
      ]
    },
    {
      id: "ei2-common-table",
      md5: "58f54dd55bf6329c70ea4d1d0a737b6b",
      slot: "EI_2",
      text: "大家都围着同一块区域时，你会？",
      hint: "你靠近中心，还是给自己留外圈。",
      art: "territory",
      options: [
        { key: "A", text: "靠近中心，最容易掌握现场", dim: "E" },
        { key: "B", text: "守在外围舒服距离，知道发生什么就够", dim: "I" },
        { key: "C", text: "时不时凑上去接两下，不想完全错过", dim: "E" }
      ]
    },
    {
      id: "ei2-energy-check",
      md5: "3ae9aeef121108c4d40f72239bc8dfce",
      slot: "EI_2",
      text: "今天电量刚刚好时，你更容易？",
      hint: "你会把电量拿去互动，还是先存起来。",
      art: "radar",
      options: [
        { key: "A", text: "想找点互动，越用越有劲", dim: "E" },
        { key: "B", text: "想把电量留给自己，别太早被打散", dim: "I" },
        { key: "C", text: "先看看外面有没有值得加入的动静", dim: "E" }
      ]
    },
    {
      id: "ei2-sound-layer",
      md5: "93c8c519fa724398e3f0316a02432b89",
      slot: "EI_2",
      text: "背景里一直有别的猫声音，你通常会怎样？",
      hint: "有人被声音点亮，有人想先降噪。",
      art: "radar",
      options: [
        { key: "A", text: "觉得有生活气，反而更提神", dim: "E" },
        { key: "B", text: "想找安静角落，让脑子休息一下", dim: "I" },
        { key: "C", text: "如果声音有意思，我会慢慢被吸过去", dim: "E" }
      ]
    }
  ],
  SN_2: [
    {
      id: "sn2-old-thing-new-place",
      md5: "dd7cdfe9f00a7c22e2df0beb675a2759",
      slot: "SN_2",
      text: "一个旧东西被挪到新位置，你先在意什么？",
      hint: "你先检查好不好用，还是先想为什么。",
      art: "stash",
      options: [
        { key: "A", text: "它现在稳不稳、拿起来顺不顺手", dim: "S" },
        { key: "B", text: "换了位置后，整个房间感觉都不一样了", dim: "N" },
        { key: "C", text: "这是不是说明有什么新安排要开始", dim: "N" }
      ]
    },
    {
      id: "sn2-daily-route",
      md5: "90d59ac1498418071be2fdeafbb1dbf0",
      slot: "SN_2",
      text: "每天都走的路线，你最容易注意到什么？",
      hint: "你先发现具体变化，还是发现气氛变了。",
      art: "route",
      options: [
        { key: "A", text: "哪块地更滑、哪道缝更窄", dim: "S" },
        { key: "B", text: "今天这条路的感觉和平时不一样", dim: "N" },
        { key: "C", text: "哪些东西被挪动过", dim: "S" }
      ]
    },
    {
      id: "sn2-moved-bowl",
      md5: "4dae6809cdf0c969d7e0a76c2c88be37",
      slot: "SN_2",
      text: "常用东西换了位置，你第一反应是？",
      hint: "你先想使用方不方便，还是想背后原因。",
      art: "stash",
      options: [
        { key: "A", text: "现在拿取还顺不顺，路线会不会受影响", dim: "S" },
        { key: "B", text: "为什么偏偏今天挪到这里", dim: "N" },
        { key: "C", text: "这会不会带来一串新的变化", dim: "N" }
      ]
    },
    {
      id: "sn2-same-corner",
      md5: "1aaa14ea2e33a3fd015a07855981f7c7",
      slot: "SN_2",
      text: "熟悉的角落今天有点不一样，你先抓到什么？",
      hint: "你先看条件变了，还是感觉变了。",
      art: "perch",
      options: [
        { key: "A", text: "光线、温度或摆放哪里变了", dim: "S" },
        { key: "B", text: "这个角落整体感觉突然不一样", dim: "N" },
        { key: "C", text: "具体哪些表面或位置被动过", dim: "S" }
      ]
    },
    {
      id: "sn2-scratch-mark",
      md5: "235d59bc81797ca0cae2c5cad8cad2b1",
      slot: "SN_2",
      text: "看到新的抓痕，你更在意什么？",
      hint: "你先看事实，还是先读信号。",
      art: "radar",
      options: [
        { key: "A", text: "抓痕深浅、新旧和具体位置", dim: "S" },
        { key: "B", text: "这像不像谁在留下边界提醒", dim: "N" },
        { key: "C", text: "它是不是说明关系里有变化", dim: "N" }
      ]
    },
    {
      id: "sn2-route-block",
      md5: "8f63d4861a789778ec96d86eed9c175d",
      slot: "SN_2",
      text: "平常路线多了个小障碍，你先处理什么？",
      hint: "你先算怎么绕，还是先想怎么会这样。",
      art: "route",
      options: [
        { key: "A", text: "判断大小、位置和怎么绕过去", dim: "S" },
        { key: "B", text: "想这是不是新的情况要开始", dim: "N" },
        { key: "C", text: "看它会影响哪一段日常路线", dim: "S" }
      ]
    },
    {
      id: "sn2-same-view",
      md5: "82b22638d53ec599eeff4b21d4fad99b",
      slot: "SN_2",
      text: "每天看同一个方向，你最先感觉到什么变了？",
      hint: "你抓具体变动，还是抓整体氛围。",
      art: "radar",
      options: [
        { key: "A", text: "哪一处实物细节变了", dim: "S" },
        { key: "B", text: "今天这个画面好像多了一层意思", dim: "N" },
        { key: "C", text: "哪些重复出现的节奏不一样了", dim: "S" }
      ]
    },
    {
      id: "sn2-stored-item",
      md5: "5cff7d058a52a4479ec3e5011d2c0cc9",
      slot: "SN_2",
      text: "常放在那里的东西不见了，你第一反应是？",
      hint: "你先排查现实，还是先觉得有剧情。",
      art: "stash",
      options: [
        { key: "A", text: "先想它最可能被移到哪里", dim: "S" },
        { key: "B", text: "这背后好像有新的安排在发生", dim: "N" },
        { key: "C", text: "先排查最近有哪些具体改动", dim: "S" }
      ]
    },
    {
      id: "sn2-familiar-sound",
      md5: "016f2ae35fbc62cfffc0c877815e4266",
      slot: "SN_2",
      text: "熟悉的声音今天有点不同，你先判断什么？",
      hint: "你先听变化，还是先猜含义。",
      art: "radar",
      options: [
        { key: "A", text: "音量、频率和来源变了哪里", dim: "S" },
        { key: "B", text: "它背后的情绪或意图是不是变了", dim: "N" },
        { key: "C", text: "这动静是不是代表有事要靠近", dim: "N" }
      ]
    },
    {
      id: "sn2-old-path-new-feel",
      md5: "71735db536a7e591a100bf9215bd5e9b",
      slot: "SN_2",
      text: "老路线突然有新鲜感，你会怎么理解？",
      hint: "你先找具体原因，还是先接住感觉。",
      art: "route",
      options: [
        { key: "A", text: "一定是某些实际条件变了", dim: "S" },
        { key: "B", text: "这条路今天像有了新故事", dim: "N" },
        { key: "C", text: "先找出到底是哪一个点不同", dim: "S" }
      ]
    }
  ],
  TF_2: [
    {
      id: "tf2-mouth-says-fine",
      md5: "cddac25b9539393078268a7723b3cf14",
      slot: "TF_2",
      text: "同住的猫明显别扭，但嘴上说没事，你会？",
      hint: "你先拆问题，还是先接住情绪。",
      art: "huddle",
      options: [
        { key: "A", text: "先找出它到底卡在哪", dim: "T" },
        { key: "B", text: "先陪着，让它不用马上解释清楚", dim: "F" },
        { key: "C", text: "给几个能执行的办法，让它有抓手", dim: "T" }
      ]
    },
    {
      id: "tf2-weird-for-days",
      md5: "cfe968e7bf272d8a06ee9688228b5d00",
      slot: "TF_2",
      text: "有猫连续几天状态怪怪的，你通常会？",
      hint: "你的关心是先查原因，还是先陪着。",
      art: "radar",
      options: [
        { key: "A", text: "观察最近变了什么，排查原因", dim: "T" },
        { key: "B", text: "先把陪伴感补上，再慢慢看", dim: "F" },
        { key: "C", text: "先让它别一个人憋着", dim: "F" }
      ]
    },
    {
      id: "tf2-silent-withdrawn",
      md5: "15ce73d655d0e27ee5c9533aefe6c3cc",
      slot: "TF_2",
      text: "有猫突然不怎么靠近大家了，你会？",
      hint: "你会先找原因，还是先给安全感。",
      art: "drift",
      options: [
        { key: "A", text: "先看最近有哪些变量变了", dim: "T" },
        { key: "B", text: "先给它足够空间，不逼它解释", dim: "F" },
        { key: "C", text: "先让它知道不用一个人扛着", dim: "F" }
      ]
    },
    {
      id: "tf2-awkward-after-conflict",
      md5: "31a51435249b4e91b31b24b2cacb3176",
      slot: "TF_2",
      text: "两只猫之间气氛僵着，你第一步更像？",
      hint: "你先找卡点，还是先让气氛松一点。",
      art: "territory",
      options: [
        { key: "A", text: "先找出到底卡在什么问题上", dim: "T" },
        { key: "B", text: "先把紧绷感降下来，不然谁都听不进", dim: "F" },
        { key: "C", text: "先给双方一个台阶，别越顶越硬", dim: "F" }
      ]
    },
    {
      id: "tf2-upset-without-words",
      md5: "5c353562c6f7b1a44f3eaed1108edda8",
      slot: "TF_2",
      text: "对方明显不顺，但不想解释，你更倾向？",
      hint: "你更像给办法，还是给空间。",
      art: "huddle",
      options: [
        { key: "A", text: "给几个可行方向，让它至少有得选", dim: "T" },
        { key: "B", text: "先让它不用说话也能被理解", dim: "F" },
        { key: "C", text: "先陪着，等它自己松一点再说", dim: "F" }
      ]
    },
    {
      id: "tf2-repeated-spiral",
      md5: "46e05221aafad6d52227b2c68caebde9",
      slot: "TF_2",
      text: "有人又陷入同样的情绪循环，你更想做什么？",
      hint: "你先拆模式，还是先减轻难受。",
      art: "radar",
      options: [
        { key: "A", text: "指出这个循环是怎么转起来的", dim: "T" },
        { key: "B", text: "先减轻它现在的不好受", dim: "F" },
        { key: "C", text: "先告诉它不是一个人在面对", dim: "F" }
      ]
    },
    {
      id: "tf2-small-offense",
      md5: "e191a15c4e112b4e3f1bce909174e470",
      slot: "TF_2",
      text: "别人一句话说重了，你更常先做什么？",
      hint: "你的本能是校正问题，还是照顾受伤的人。",
      art: "routine",
      options: [
        { key: "A", text: "先分析到底哪个点说错了", dim: "T" },
        { key: "B", text: "先看受伤那边有没有被接住", dim: "F" },
        { key: "C", text: "先修补气氛，别让一句话滚大", dim: "F" }
      ]
    },
    {
      id: "tf2-unsure-sad",
      md5: "f425978cf3a7e327aba13c2438bbe1f2",
      slot: "TF_2",
      text: "对方连自己为什么难受都说不清，你会？",
      hint: "有人先帮理清，有人先让它好受一点。",
      art: "drift",
      options: [
        { key: "A", text: "帮它理线索，看看具体卡在哪里", dim: "T" },
        { key: "B", text: "先让它被理解，不急着定义原因", dim: "F" },
        { key: "C", text: "先补安全感，再慢慢谈是什么", dim: "F" }
      ]
    },
    {
      id: "tf2-support-style",
      md5: "cea061871ac11937a8e8c7e051badd97",
      slot: "TF_2",
      text: "你安慰别人时，最自然的方式是？",
      hint: "这题很接近你的关心语言。",
      art: "huddle",
      options: [
        { key: "A", text: "帮忙拆问题，让局面没那么失控", dim: "T" },
        { key: "B", text: "先把陪伴感放到位", dim: "F" },
        { key: "C", text: "先减轻那种只有我一个人的感觉", dim: "F" }
      ]
    },
    {
      id: "tf2-long-low-energy",
      md5: "0398b261116c849001371f2c24eabe87",
      slot: "TF_2",
      text: "有人低能量很久时，你第一步往往是？",
      hint: "你是先找原因，还是先保住它的状态。",
      art: "radar",
      options: [
        { key: "A", text: "先判断原因和能改变的地方", dim: "T" },
        { key: "B", text: "先补稳定感，让它别继续耗下去", dim: "F" },
        { key: "C", text: "先保护它，别再被外界继续推着掉电", dim: "F" }
      ]
    }
  ],
  JP_2: [
    {
      id: "jp2-hide-treasure",
      md5: "c32b633a6260dc91aec7a57df7b83563",
      slot: "JP_2",
      text: "如果要藏一点小宝贝，你会怎么藏？",
      hint: "你靠固定系统，还是靠当下手感。",
      art: "stash",
      options: [
        { key: "A", text: "固定一个稳妥地点，自己记得清楚", dim: "J" },
        { key: "B", text: "哪天顺手哪天藏，灵感到了再说", dim: "P" },
        { key: "C", text: "准备两三个备选点，免得临时抓瞎", dim: "J" }
      ]
    },
    {
      id: "jp2-blank-afternoon",
      md5: "42edbe2b3b071c23a91abdd5a3c427d7",
      slot: "JP_2",
      text: "面对一个空白下午，你更像哪种状态？",
      hint: "这段时间要不要先有一点安排。",
      art: "drift",
      options: [
        { key: "A", text: "先给它分出几个明确段落", dim: "J" },
        { key: "B", text: "谁规定下午一定要有结构", dim: "P" },
        { key: "C", text: "先空着，感觉到了再决定", dim: "P" }
      ]
    },
    {
      id: "jp2-little-supplies",
      md5: "9de9c3e3536da57650a4b75c40bb2b88",
      slot: "JP_2",
      text: "你收小东西的方式更像哪一种？",
      hint: "你会归位，还是随手放。",
      art: "stash",
      options: [
        { key: "A", text: "各有固定位置，用的时候不乱找", dim: "J" },
        { key: "B", text: "想到哪放哪也能活，别搞太复杂", dim: "P" },
        { key: "C", text: "至少分几个固定区域，别完全随机", dim: "J" }
      ]
    },
    {
      id: "jp2-comfort-items",
      md5: "34b0f8a0a6722bc6b233eb8a8b4f2023",
      slot: "JP_2",
      text: "让你舒服的几样东西，你通常会怎么放？",
      hint: "你喜欢随手可取，还是随缘流动。",
      art: "routine",
      options: [
        { key: "A", text: "放在固定能拿到的位置，省得临时烦", dim: "J" },
        { key: "B", text: "经常凭直觉乱放，到用时再找也行", dim: "P" },
        { key: "C", text: "常用的固定，不常用的随意一点", dim: "J" }
      ]
    },
    {
      id: "jp2-free-slot",
      md5: "ccb081e91e001fec5d114993db675874",
      slot: "JP_2",
      text: "突然多出一小段空档，你会怎么用？",
      hint: "时间空出来后，你会不会立刻安排它。",
      art: "route",
      options: [
        { key: "A", text: "立刻放进一个合适安排，不让它散掉", dim: "J" },
        { key: "B", text: "先空着，临场再说", dim: "P" },
        { key: "C", text: "先想几个可能，再看哪个最顺", dim: "J" }
      ]
    },
    {
      id: "jp2-nap-window",
      md5: "9e24552ada6d78013b284bdd97fb108c",
      slot: "JP_2",
      text: "一个很适合休息的时段出现了，你会？",
      hint: "你会顺手接住它，还是先看状态。",
      art: "drift",
      options: [
        { key: "A", text: "按预想接进去，让整天更顺", dim: "J" },
        { key: "B", text: "看当下状态再说，不想提前写死", dim: "P" },
        { key: "C", text: "先给它留个窗口，别被别的事挤掉", dim: "J" }
      ]
    },
    {
      id: "jp2-tool-placement",
      md5: "d3e7f0e600037bd121d26418bf71524b",
      slot: "JP_2",
      text: "你对常用东西的放法更像哪一种？",
      hint: "放东西很能暴露真实秩序感。",
      art: "stash",
      options: [
        { key: "A", text: "固定好，少找一次是一次", dim: "J" },
        { key: "B", text: "经常边用边挪，反正大概知道在哪", dim: "P" },
        { key: "C", text: "主要那几样固定，其他可以灵活一点", dim: "J" }
      ]
    },
    {
      id: "jp2-open-time",
      md5: "27dfbe201a72e80d0983954d37fd9275",
      slot: "JP_2",
      text: "面对一整段开放时间，你最舒服的是？",
      hint: "你爱可调度，还是彻底开放。",
      art: "route",
      options: [
        { key: "A", text: "先决定一个大概结构，心会更定", dim: "J" },
        { key: "B", text: "彻底开放最好，别太早封住可能性", dim: "P" },
        { key: "C", text: "至少先定个起点，后面再看", dim: "J" }
      ]
    },
    {
      id: "jp2-plan-with-gaps",
      md5: "723b6a138c2a439d228186065e5fc545",
      slot: "JP_2",
      text: "你对留白的态度更像哪一种？",
      hint: "留白也分有安排和完全放空。",
      art: "drift",
      options: [
        { key: "A", text: "留白也要放在合适位置，不然会乱", dim: "J" },
        { key: "B", text: "留白本来就不该被安排太满", dim: "P" },
        { key: "C", text: "有框架地留空最舒服", dim: "J" }
      ]
    },
    {
      id: "jp2-easy-day",
      md5: "1f0313dbed5d0948bc5f5b943ca36f91",
      slot: "JP_2",
      text: "你所谓轻松的一天，更像什么？",
      hint: "轻松不一定等于完全没结构。",
      art: "drift",
      options: [
        { key: "A", text: "放松也有节奏，这样才真省心", dim: "J" },
        { key: "B", text: "轻松就是不用对今天交代太多", dim: "P" },
        { key: "C", text: "先定主线再散开，会更轻松", dim: "J" }
      ]
    }
  ],
  EI_3: [
    {
      id: "ei3-physical-closeness",
      md5: "3d7abb844c0c65090e3269ffd1bcfe70",
      slot: "EI_3",
      text: "别人主动来和你贴贴时，你更像哪种反应？",
      hint: "你的边界是先打开，还是先留一点。",
      art: "huddle",
      options: [
        { key: "A", text: "气氛不奇怪的话，通常会顺势接上", dim: "E" },
        { key: "B", text: "先保持一点距离，舒服了再靠近", dim: "I" },
        { key: "C", text: "先看对方有没有分寸，再决定靠多近", dim: "I" }
      ]
    },
    {
      id: "ei3-free-night",
      md5: "f346bddd46e999dc3b3d5d3f5b74ff90",
      slot: "EI_3",
      text: "一个完全自由的夜晚，你更想怎么过？",
      hint: "你会走向热闹，还是守住安静。",
      art: "drift",
      options: [
        { key: "A", text: "在几个空间来回逛，看哪里有意思", dim: "E" },
        { key: "B", text: "守住一个最舒服的位置，别被打扰", dim: "I" },
        { key: "C", text: "等别人都散了，再自己慢慢活动", dim: "I" }
      ]
    },
    {
      id: "ei3-shared-ledge",
      md5: "3ed1a331434beef60ba52f8f546c6e24",
      slot: "EI_3",
      text: "长窗台上还剩一点空位，你会？",
      hint: "你会自然补进去，还是宁愿留点距离。",
      art: "perch",
      options: [
        { key: "A", text: "直接补进去，并排看风景也挺好", dim: "E" },
        { key: "B", text: "换个独处点，不想距离太近", dim: "I" },
        { key: "C", text: "先靠近试试，不舒服就立刻撤开", dim: "I" }
      ]
    },
    {
      id: "ei3-side-by-side-rest",
      md5: "63e7dff5db5b6618e757b58313f040c1",
      slot: "EI_3",
      text: "有人想和你并排趴着休息，你更可能？",
      hint: "安静陪伴对你是加分，还是要再等等。",
      art: "huddle",
      options: [
        { key: "A", text: "气氛对的话，安静并排也很舒服", dim: "E" },
        { key: "B", text: "更想保留半个身位，别太快贴实", dim: "I" },
        { key: "C", text: "先让出一点距离，再看要不要靠近", dim: "I" }
      ]
    },
    {
      id: "ei3-after-being-sought",
      md5: "0fbad56ff1cf48914d292669f7bb5e9f",
      slot: "EI_3",
      text: "连续被几只猫找过以后，你第一反应是？",
      hint: "被需要会让你更亮，还是更想退。",
      art: "orbit",
      options: [
        { key: "A", text: "觉得状态不错，还能继续接别的互动", dim: "E" },
        { key: "B", text: "想去安静处，把剩下的力气守住", dim: "I" },
        { key: "C", text: "换个现场继续，但不想被同一拨一直缠住", dim: "E" }
      ]
    },
    {
      id: "ei3-late-night-movement",
      md5: "0106740acfdcb70080c07211ec897faf",
      slot: "EI_3",
      text: "夜深了还有别的猫在活动，你更可能？",
      hint: "你会被流动吸走，还是回到自己那里。",
      art: "drift",
      options: [
        { key: "A", text: "跟着那股动静再去晃晃", dim: "E" },
        { key: "B", text: "守着自己的安静区，不想再被带动", dim: "I" },
        { key: "C", text: "靠近听两下，但多数时候还是回自己那边", dim: "I" }
      ]
    },
    {
      id: "ei3-quiet-companion",
      md5: "51b7d1888b6671ba3e96199e9604cadc",
      slot: "EI_3",
      text: "有人安静地待在你附近，不说话也不打扰，你会？",
      hint: "这种陪伴让你想靠近，还是保持刚好距离。",
      art: "huddle",
      options: [
        { key: "A", text: "慢慢主动靠过去，觉得这样挺好", dim: "E" },
        { key: "B", text: "现在这样就刚好，不必再拉近", dim: "I" },
        { key: "C", text: "保持现在距离，别把舒服感打破", dim: "I" }
      ]
    },
    {
      id: "ei3-one-seat-gap",
      md5: "aa7081390c9b12e298f43e5940f38d68",
      slot: "EI_3",
      text: "你和别人之间只剩一个身位，你通常会？",
      hint: "那一格空位，你会补上还是留下。",
      art: "territory",
      options: [
        { key: "A", text: "自然补上，近一点也没什么", dim: "E" },
        { key: "B", text: "习惯把那格留出来，空气比较舒服", dim: "I" },
        { key: "C", text: "看心情，但多数时候会先留空", dim: "I" }
      ]
    },
    {
      id: "ei3-shared-watch",
      md5: "966b8de8576f3adfb75159d21fbfe504",
      slot: "EI_3",
      text: "一起盯着同一个方向发呆时，你更像？",
      hint: "你享受并排同频，还是更爱一个人沉进去。",
      art: "perch",
      options: [
        { key: "A", text: "会享受并排同频的感觉", dim: "E" },
        { key: "B", text: "更喜欢独自沉进去，不想被并排影响", dim: "I" },
        { key: "C", text: "如果被太早打断，会立刻抽离", dim: "I" }
      ]
    },
    {
      id: "ei3-end-of-day",
      md5: "42999e447f6ea05a8a113ac1c161ec7d",
      slot: "EI_3",
      text: "一天快结束时，你更需要什么？",
      hint: "尾声里你要陪伴感，还是完整退场。",
      art: "sunspot",
      options: [
        { key: "A", text: "一点缓慢、安静但有人在的陪伴", dim: "E" },
        { key: "B", text: "完整独处作为收尾，别再有人进来", dim: "I" },
        { key: "C", text: "先把外界音量关小，再回到自己里面", dim: "I" }
      ]
    }
  ],
  SN_3: [
    {
      id: "sn3-corner-staring",
      md5: "7687f664ab8d23fb04be6d6ce82407bc",
      slot: "SN_3",
      text: "你盯着一个角落看很久时，更像在做什么？",
      hint: "你在找实际信息，还是已经开始脑补。",
      art: "radar",
      options: [
        { key: "A", text: "确认里面到底有没有具体动静", dim: "S" },
        { key: "B", text: "脑子里已经给它编出背景故事", dim: "N" },
        { key: "C", text: "它越安静，我越觉得不简单", dim: "N" }
      ]
    },
    {
      id: "sn3-first-catch",
      md5: "55768ed38031bb1d0b9c10fa02fe148c",
      slot: "SN_3",
      text: "看到一件小事，你更容易先抓到什么？",
      hint: "你先抓能确认的细节，还是它可能代表什么。",
      art: "perch",
      options: [
        { key: "A", text: "能说清楚、能验证的细节", dim: "S" },
        { key: "B", text: "它可能代表的别的东西", dim: "N" },
        { key: "C", text: "重复出现的规律", dim: "S" }
      ]
    },
    {
      id: "sn3-repeated-shadow",
      md5: "2b2fde830d4c5519177c7cf4a8636684",
      slot: "SN_3",
      text: "同一个影子来回晃，你会先想什么？",
      hint: "你先找来源，还是先给它加戏。",
      art: "radar",
      options: [
        { key: "A", text: "确认它的方向、规律和真实来源", dim: "S" },
        { key: "B", text: "开始把它当成一条隐藏线索", dim: "N" },
        { key: "C", text: "越看越觉得它像某种预告", dim: "N" }
      ]
    },
    {
      id: "sn3-quiet-room",
      md5: "94b37bfd86a7aff32725f68c724ecf7b",
      slot: "SN_3",
      text: "一个房间安静得过头，你更容易注意到什么？",
      hint: "你先查少了什么，还是先觉得不对劲。",
      art: "drift",
      options: [
        { key: "A", text: "具体少了哪种声音或动静", dim: "S" },
        { key: "B", text: "这种安静不太正常，像藏着事", dim: "N" },
        { key: "C", text: "哪一块安静得最反常", dim: "S" }
      ]
    },
    {
      id: "sn3-little-noise",
      md5: "865486dc7932585afd5c18a0387619b0",
      slot: "SN_3",
      text: "一声很轻的小动静出现时，你先抓哪边？",
      hint: "你先听材质方向，还是想后面会发生什么。",
      art: "radar",
      options: [
        { key: "A", text: "声音的材质、方向和距离", dim: "S" },
        { key: "B", text: "这动静背后会不会还有别的可能", dim: "N" },
        { key: "C", text: "它像不像在提示后面还有一幕", dim: "N" }
      ]
    },
    {
      id: "sn3-same-object-long-look",
      md5: "728767f72f188ba8850974340dc0014e",
      slot: "SN_3",
      text: "盯着同一个物件看久了，你更会怎样？",
      hint: "注意力会变成观察，还是变成联想。",
      art: "perch",
      options: [
        { key: "A", text: "开始看清它的结构、边缘和细节", dim: "S" },
        { key: "B", text: "开始给它加上一层意义", dim: "N" },
        { key: "C", text: "联想到一串不在眼前的画面", dim: "N" }
      ]
    },
    {
      id: "sn3-trace-reading",
      md5: "b2e044f37c704f9aada4cbcf73a7df3b",
      slot: "SN_3",
      text: "看见一点模糊痕迹时，你更像哪一种？",
      hint: "你先判断它是什么，还是它说明了什么。",
      art: "route",
      options: [
        { key: "A", text: "先辨认它到底是什么留下的", dim: "S" },
        { key: "B", text: "先觉得背后可能还有别的信息", dim: "N" },
        { key: "C", text: "检查前后痕迹能不能串起来", dim: "S" }
      ]
    },
    {
      id: "sn3-pause-between-events",
      md5: "2c804c7ad34031cc3e64cca2495daf41",
      slot: "SN_3",
      text: "两件小事之间的停顿，你更在意什么？",
      hint: "停顿对你来说，是信息还是气氛。",
      art: "drift",
      options: [
        { key: "A", text: "停了多久、顺序怎样、有没有规律", dim: "S" },
        { key: "B", text: "这个停顿本身像藏了信息", dim: "N" },
        { key: "C", text: "它让整个事情突然有了故事感", dim: "N" }
      ]
    },
    {
      id: "sn3-room-scan",
      md5: "a1323a3fb71ed1e4883f0eccd9482a55",
      slot: "SN_3",
      text: "你扫一圈房间时，更容易被什么绊住？",
      hint: "有人被具体异常绊住，有人被感觉绊住。",
      art: "radar",
      options: [
        { key: "A", text: "能指出来的异常和真实不对劲", dim: "S" },
        { key: "B", text: "说不清但很有感觉的地方", dim: "N" },
        { key: "C", text: "具体重复出现的模式", dim: "S" }
      ]
    },
    {
      id: "sn3-almost-nothing",
      md5: "8b2d9df2c12fe6c44ca31fadeef8d7f9",
      slot: "SN_3",
      text: "表面看起来没事时，你通常怎么判断？",
      hint: "你先找证据，还是先信直觉警报。",
      art: "radar",
      options: [
        { key: "A", text: "先找有没有实质变化能指出来", dim: "S" },
        { key: "B", text: "越平静越觉得事情没这么简单", dim: "N" },
        { key: "C", text: "从几个小信号推后面可能发生什么", dim: "N" }
      ]
    }
  ],
  TF_3: [
    {
      id: "tf3-shared-space",
      md5: "362b2a3c98decefe720ebd77c3ec75c3",
      slot: "TF_3",
      text: "大家挤在一个空间里时，你更在意什么？",
      hint: "你想让局面顺，还是先让人舒服。",
      art: "territory",
      options: [
        { key: "A", text: "怎么安排才不会互相碍事", dim: "T" },
        { key: "B", text: "谁现在最需要被留出余地", dim: "F" },
        { key: "C", text: "先把秩序稳住，大家自然会舒服一点", dim: "T" }
      ]
    },
    {
      id: "tf3-small-annoying-problem",
      md5: "f6a44c4483e922d5f31cf8490b7c7c51",
      slot: "TF_3",
      text: "遇到一件很小但一直烦人的问题，你更像？",
      hint: "你先解决根源，还是先减少不舒服。",
      art: "routine",
      options: [
        { key: "A", text: "想办法一次性解决根因", dim: "T" },
        { key: "B", text: "先减少这件事给人的不舒服", dim: "F" },
        { key: "C", text: "如果有人已经很烦了，就先安抚", dim: "F" }
      ]
    },
    {
      id: "tf3-messy-zone",
      md5: "7f6ba9d0aaf19eba2428b41a1d115735",
      slot: "TF_3",
      text: "公共区域越来越乱时，你先想到什么？",
      hint: "你先想理顺它，还是想谁已经被耗到了。",
      art: "territory",
      options: [
        { key: "A", text: "怎么一把理顺，别继续拖效率", dim: "T" },
        { key: "B", text: "谁已经被这份乱弄得不舒服", dim: "F" },
        { key: "C", text: "先别让气氛因为这点乱更糟", dim: "F" }
      ]
    },
    {
      id: "tf3-rule-break",
      md5: "a8a96b2f5b3bf2a1d3870fecd2366b81",
      slot: "TF_3",
      text: "有人总是踩公共边界，你更倾向怎么做？",
      hint: "你会直说规则，还是先考虑表达方式。",
      art: "route",
      options: [
        { key: "A", text: "直接讲清规则和后果，别继续模糊", dim: "T" },
        { key: "B", text: "先想它是不是最近状态不好", dim: "F" },
        { key: "C", text: "找个不太刺人的说法，让它听得进去", dim: "F" }
      ]
    },
    {
      id: "tf3-repair-after-mistake",
      md5: "e9d9cafb88ed23a1a93eb7cd4d16fcf9",
      slot: "TF_3",
      text: "有人弄砸了一件小事，你第一反应是？",
      hint: "你先修事情，还是先照顾人。",
      art: "routine",
      options: [
        { key: "A", text: "先把问题本身修好，别让影响扩大", dim: "T" },
        { key: "B", text: "先别让人太难堪，后面再慢慢收", dim: "F" },
        { key: "C", text: "先看它有没有被自己吓到", dim: "F" }
      ]
    },
    {
      id: "tf3-recurring-friction",
      md5: "03c05c9956906c7dc5dd6a5002840b6b",
      slot: "TF_3",
      text: "同一个摩擦点一直复发，你更会怎么做？",
      hint: "你会改规则，还是先修关系里的不舒服。",
      art: "route",
      options: [
        { key: "A", text: "直接改机制，别让同一坑反复出现", dim: "T" },
        { key: "B", text: "先把情绪磨损补回来，再谈机制", dim: "F" },
        { key: "C", text: "先帮关系别继续变硬", dim: "F" }
      ]
    },
    {
      id: "tf3-cleanup-call",
      md5: "d8401be81a18015e89f146043a1227b2",
      slot: "TF_3",
      text: "该收拾但谁都没动时，你更容易先做什么？",
      hint: "你先起步骤，还是先顾大家状态。",
      art: "routine",
      options: [
        { key: "A", text: "直接定步骤，让事情开始动起来", dim: "T" },
        { key: "B", text: "先看谁已经很累了，别一刀切", dim: "F" },
        { key: "C", text: "先让大家别互相埋怨，再谈谁来收", dim: "F" }
      ]
    },
    {
      id: "tf3-shared-boundary",
      md5: "06b0e3a79ed3e15b4faa588874ee963e",
      slot: "TF_3",
      text: "别人无意间压到你的边界时，你更会？",
      hint: "你会清楚指出，还是先顾表达温度。",
      art: "territory",
      options: [
        { key: "A", text: "清楚指出哪里不行，别留误会", dim: "T" },
        { key: "B", text: "先看对方是不是根本没意识到", dim: "F" },
        { key: "C", text: "尽量用不刺人的方式说，让关系还能走", dim: "F" }
      ]
    },
    {
      id: "tf3-low-grade-chaos",
      md5: "9f9de18d1b44057a71f010f064432d1d",
      slot: "TF_3",
      text: "环境一直有点乱时，你最受不了什么？",
      hint: "你的烦点是效率下降，还是情绪磨人。",
      art: "territory",
      options: [
        { key: "A", text: "效率一直被拖慢，什么都卡一层", dim: "T" },
        { key: "B", text: "大家都被这股乱慢慢耗掉", dim: "F" },
        { key: "C", text: "气氛越来越不舒服，却没人先开口", dim: "F" }
      ]
    },
    {
      id: "tf3-final-adjustment",
      md5: "40a23d8ae3b069814a108af4142dc1aa",
      slot: "TF_3",
      text: "要把一件小事真正收住，你习惯先做什么？",
      hint: "你的收法更偏结构，还是更偏感受。",
      art: "routine",
      options: [
        { key: "A", text: "把结构改对，后面自然少出事", dim: "T" },
        { key: "B", text: "把人的感觉放回去，后面才不留刺", dim: "F" },
        { key: "C", text: "先让紧张关系缓下来，再谈怎么固定", dim: "F" }
      ]
    }
  ],
  JP_3: [
    {
      id: "jp3-daily-rhythm",
      md5: "6e5ee64870cc98b5cb6dfb4615fad4eb",
      slot: "JP_3",
      text: "你理想中的日常节奏是什么样？",
      hint: "你需要先有框架，还是更想随时调整。",
      art: "routine",
      options: [
        { key: "A", text: "有一个稳定框架，心里会踏实", dim: "J" },
        { key: "B", text: "别管框架，今天顺哪边就哪边", dim: "P" },
        { key: "C", text: "最好随时能改，不想被早上的安排绑住", dim: "P" }
      ]
    },
    {
      id: "jp3-off-expectation",
      md5: "6029a3d2aa9ab75123ee1987c294488c",
      slot: "JP_3",
      text: "一天一开始就不按预期，你更容易？",
      hint: "你会重排节奏，还是干脆换条路。",
      art: "route",
      options: [
        { key: "A", text: "尽快重新排个顺序，把节奏接回来", dim: "J" },
        { key: "B", text: "那就换条路走，也许更有意思", dim: "P" },
        { key: "C", text: "先保住最重要的几件事", dim: "J" }
      ]
    },
    {
      id: "jp3-small-disruption",
      md5: "78cf0b9eb748a57c06d7c7da140cd364",
      slot: "JP_3",
      text: "一个小变动打断了原来的节奏，你会？",
      hint: "你先把顺序接回去，还是顺势改道。",
      art: "route",
      options: [
        { key: "A", text: "马上重接顺序，别让整天掉线", dim: "J" },
        { key: "B", text: "那就顺势改，今天可能本来就该这样", dim: "P" },
        { key: "C", text: "先保住主线，别让整天都散掉", dim: "J" }
      ]
    },
    {
      id: "jp3-open-evening",
      md5: "b25f165625da7d56edb7512eb964382e",
      slot: "JP_3",
      text: "今晚突然完全自由，你更像哪一种？",
      hint: "自由来了以后，你会不会先安排一个起点。",
      art: "drift",
      options: [
        { key: "A", text: "先想怎么把这段时间过得最舒服", dim: "J" },
        { key: "B", text: "看心情走，别太快排满", dim: "P" },
        { key: "C", text: "至少先决定一个起点，免得浪费", dim: "J" }
      ]
    },
    {
      id: "jp3-interrupted-rest",
      md5: "d96edd5157ea582bb508849abbe1710b",
      slot: "JP_3",
      text: "休息被打断后，你通常会怎么办？",
      hint: "你习惯把节奏接回来，还是换轨。",
      art: "sunspot",
      options: [
        { key: "A", text: "尽快把原来的节奏接回去", dim: "J" },
        { key: "B", text: "当场改计划，别硬拉回去", dim: "P" },
        { key: "C", text: "先确认最重要的那段还能不能保住", dim: "J" }
      ]
    },
    {
      id: "jp3-long-process",
      md5: "48e4efcac2069b072882db1c5351d237",
      slot: "JP_3",
      text: "一件事要拖很久时，你更舒服哪种状态？",
      hint: "长期相处时，你需要清楚阶段吗。",
      art: "route",
      options: [
        { key: "A", text: "阶段清楚，知道现在进行到哪里", dim: "J" },
        { key: "B", text: "随时可变，别太早把自己定死", dim: "P" },
        { key: "C", text: "先有几个关键点，后面再灵活调整", dim: "J" }
      ]
    },
    {
      id: "jp3-self-management",
      md5: "ec7b3f2dd5d4b6372719fd37c007e6c5",
      slot: "JP_3",
      text: "你和自我管理的关系更像哪一种？",
      hint: "你需要一个架子，还是更怕被架子管住。",
      art: "routine",
      options: [
        { key: "A", text: "需要稳定结构，不然心会浮", dim: "J" },
        { key: "B", text: "别把自己管太死，保持活气更重要", dim: "P" },
        { key: "C", text: "先定底线，其他按状态调整", dim: "J" }
      ]
    },
    {
      id: "jp3-switched-plans",
      md5: "65f8cf204ea4ba09737eb9e0386b8ad4",
      slot: "JP_3",
      text: "原本想好的安排突然不成立，你更可能？",
      hint: "你是替代方案派，还是新路派。",
      art: "route",
      options: [
        { key: "A", text: "立刻换出替代方案，别让这块空掉", dim: "J" },
        { key: "B", text: "那就看看新路会把我带去哪", dim: "P" },
        { key: "C", text: "先守住关键几步，别全盘塌掉", dim: "J" }
      ]
    },
    {
      id: "jp3-ordinary-day",
      md5: "8e1dc9edb9d76e70c6b8f57e83e983f3",
      slot: "JP_3",
      text: "普通一天里，什么最让你安心？",
      hint: "安心感来自可预期，还是来自能随时改。",
      art: "drift",
      options: [
        { key: "A", text: "事情大致在预期内推进", dim: "J" },
        { key: "B", text: "随时能改，也不会焦虑", dim: "P" },
        { key: "C", text: "至少有一条主线把我拉住", dim: "J" }
      ]
    },
    {
      id: "jp3-closing-day",
      md5: "39b3ffe1a68802d899945845b337fd91",
      slot: "JP_3",
      text: "准备给一天收尾时，你更像哪一种？",
      hint: "你会先收口，还是让今天自然结束。",
      art: "routine",
      options: [
        { key: "A", text: "把该归位的先归一下，明天会更轻", dim: "J" },
        { key: "B", text: "明天的事明天再说，今天先结束", dim: "P" },
        { key: "C", text: "至少把主线收好，别留太多尾巴", dim: "J" }
      ]
    }
  ],
  EI_4: [
    {
      id: "ei4-charge-scene",
      md5: "d5e6bc8fde1fed73630174d747fbf829",
      slot: "EI_4",
      weight: 2,
      text: "真正能把你电量拉满的场景是什么？",
      hint: "这题会放大你最真实的充电方式。",
      art: "sunspot",
      options: [
        { key: "A", text: "周围有人来有回，气氛是活的", dim: "E" },
        { key: "B", text: "空间安静完整，没人一直打扰我", dim: "I" },
        { key: "C", text: "最好连脚步声都少一点", dim: "I" }
      ]
    },
    {
      id: "ei4-raise-yourself",
      md5: "5739770729cf997a6b08b58c9cbb5ee1",
      slot: "EI_4",
      weight: 2,
      text: "如果今天要把自己养舒服，你更需要什么？",
      hint: "别选中间答案，想想你最靠什么回血。",
      art: "orbit",
      options: [
        { key: "A", text: "一点热闹、一点互动，最好还能来回切换", dim: "E" },
        { key: "B", text: "一整块完全属于自己的安静", dim: "I" },
        { key: "C", text: "空间里有人在流动，我才比较有精神", dim: "E" }
      ]
    },
    {
      id: "ei4-best-morning",
      md5: "02785eb07f8570d3954fb34297c652a9",
      slot: "EI_4",
      weight: 2,
      text: "一早最能给你续命的是什么？",
      hint: "你靠现场启动，还是靠安静启动。",
      art: "sunspot",
      options: [
        { key: "A", text: "有人来来回回，空气是活的", dim: "E" },
        { key: "B", text: "世界安静到像只剩自己", dim: "I" },
        { key: "C", text: "没有多余声音时，脑子最舒服", dim: "I" }
      ]
    },
    {
      id: "ei4-drained-reset",
      md5: "be48ebfc5738a1edc4aac637ca0294d1",
      slot: "EI_4",
      weight: 2,
      text: "电量掉到底时，你最需要哪种恢复？",
      hint: "这题很接近你的真实补能姿势。",
      art: "drift",
      options: [
        { key: "A", text: "有人气但不吵的互动，让我慢慢亮回来", dim: "E" },
        { key: "B", text: "彻底关门式安静，别再有输入", dim: "I" },
        { key: "C", text: "能完整一个人待着，不被谁持续打扰", dim: "I" }
      ]
    },
    {
      id: "ei4-mood-lift",
      md5: "83657f9f1e14b0c252674ba5818595cd",
      slot: "EI_4",
      weight: 2,
      text: "把心情抬起来最有效的方式是什么？",
      hint: "你靠接触被点亮，还是靠退开归位。",
      art: "orbit",
      options: [
        { key: "A", text: "去有回应的地方待一会儿，心情会自己升起来", dim: "E" },
        { key: "B", text: "先远离持续输入，让脑子回到自己", dim: "I" },
        { key: "C", text: "和外界断开一段时间，别继续被打扰", dim: "I" }
      ]
    },
    {
      id: "ei4-full-comfort",
      md5: "5c8079a8619dd2d69844a998a973e496",
      slot: "EI_4",
      weight: 2,
      text: "最完整的舒服感，对你来说更像什么？",
      hint: "舒服到位时，你要人气还是安静。",
      art: "sunspot",
      options: [
        { key: "A", text: "空间里有人在活动，我会更有精神", dim: "E" },
        { key: "B", text: "空气平平静静，没人一直来碰我", dim: "I" },
        { key: "C", text: "只有自己和安静时，才像真正放下来", dim: "I" }
      ]
    },
    {
      id: "ei4-recover-evening",
      md5: "fcf16e5690185292a8d06e8014872335",
      slot: "EI_4",
      weight: 2,
      text: "什么样的傍晚最能把你救回来？",
      hint: "傍晚想要什么，通常很诚实。",
      art: "drift",
      options: [
        { key: "A", text: "能时不时接上几句，不至于完全断线", dim: "E" },
        { key: "B", text: "没人持续进入我的空间，我才开始放松", dim: "I" },
        { key: "C", text: "安静到能忘记时间，会更舒服", dim: "I" }
      ]
    },
    {
      id: "ei4-natural-recharge",
      md5: "6089befa89548c7e0a5e708777625751",
      slot: "EI_4",
      weight: 2,
      text: "不需要努力就能回血的方式是？",
      hint: "有人越接触越亮，有人越抽离越稳。",
      art: "orbit",
      options: [
        { key: "A", text: "在有互动的氛围里慢慢亮起来", dim: "E" },
        { key: "B", text: "独自待着，电量会自己回来", dim: "I" },
        { key: "C", text: "把世界音量关到最低就会好很多", dim: "I" }
      ]
    },
    {
      id: "ei4-weekend-core",
      md5: "c087956ff4c81b89addba4cae1eb9652",
      slot: "EI_4",
      weight: 2,
      text: "理想周末的核心补给是什么？",
      hint: "周末最容易暴露你的回血来源。",
      art: "sunspot",
      options: [
        { key: "A", text: "和别人有流动、有接触、有点小热闹", dim: "E" },
        { key: "B", text: "拥有整块独处时间，不被分走", dim: "I" },
        { key: "C", text: "最好没人安排我，也没人一直打扰我", dim: "I" }
      ]
    },
    {
      id: "ei4-best-state",
      md5: "6303b1bc3ff871058585616473c0d4f6",
      slot: "EI_4",
      weight: 2,
      text: "你状态最好的时候，通常在什么环境里？",
      hint: "最佳状态会提示你真正的充电方式。",
      art: "orbit",
      options: [
        { key: "A", text: "有外界交流，能接能退，整个人更亮", dim: "E" },
        { key: "B", text: "先守住自己的安静范围，脑子才清楚", dim: "I" },
        { key: "C", text: "安静到能听见自己在想什么的时候", dim: "I" }
      ]
    }
  ],
  SN_4: [
    {
      id: "sn4-daydream-path",
      md5: "bf05744aadae0637902e7a73a486074d",
      slot: "SN_4",
      weight: 2,
      text: "一整段发呆时间，最容易把你带去哪？",
      hint: "这题会放大你默认的观察习惯。",
      art: "drift",
      options: [
        { key: "A", text: "回到眼前的声音、触感和具体变化", dim: "S" },
        { key: "B", text: "滑进联想、比喻和看不见的故事", dim: "N" },
        { key: "C", text: "从一个小细节一路想到很远", dim: "N" }
      ]
    },
    {
      id: "sn4-scene-hook",
      md5: "976456758f2ecf0da8398d1bdeebda38",
      slot: "SN_4",
      weight: 2,
      text: "你被一个场景吸住时，更像被什么打中？",
      hint: "你被现实细节抓住，还是被背后的意思抓住。",
      art: "perch",
      options: [
        { key: "A", text: "它具体得刚刚好，细节都很清楚", dim: "S" },
        { key: "B", text: "它像在暗示别的什么", dim: "N" },
        { key: "C", text: "它的顺序、结构和实际反馈很清楚", dim: "S" }
      ]
    },
    {
      id: "sn4-stare-out",
      md5: "1d329d37236c9b1ba5b140685f4b6976",
      slot: "SN_4",
      weight: 2,
      text: "你望出去很久后，脑子更容易停在哪？",
      hint: "这题会放大你的注意力走向。",
      art: "drift",
      options: [
        { key: "A", text: "光线、层次、移动和真实变化", dim: "S" },
        { key: "B", text: "象征、故事和看不见的延伸", dim: "N" },
        { key: "C", text: "从一个小点慢慢连到很远", dim: "N" }
      ]
    },
    {
      id: "sn4-tiny-change",
      md5: "f5b20bec02691a7b1a0650c6e4a13d4b",
      slot: "SN_4",
      weight: 2,
      text: "最能抓住你的，通常是哪类变化？",
      hint: "有人被事实抓住，有人被感觉抓住。",
      art: "radar",
      options: [
        { key: "A", text: "能被指出来的现实细节变化", dim: "S" },
        { key: "B", text: "说不清，但像在暗示什么的变化", dim: "N" },
        { key: "C", text: "一个小信号带出很多联想的变化", dim: "N" }
      ]
    },
    {
      id: "sn4-long-silence",
      md5: "b31b8f7f3de1f025ca2d6177137cba9f",
      slot: "SN_4",
      weight: 2,
      text: "一段很长的安静，最容易把你带去哪？",
      hint: "安静时，你的脑子会回到当下还是跑远。",
      art: "drift",
      options: [
        { key: "A", text: "回到呼吸、声音、触感和当下", dim: "S" },
        { key: "B", text: "滑进意义、想象和很多画面", dim: "N" },
        { key: "C", text: "从某个点开始在心里连成一张网", dim: "N" }
      ]
    },
    {
      id: "sn4-scene-memory",
      md5: "535aa32db7b9982f498ebe7768e08342",
      slot: "SN_4",
      weight: 2,
      text: "一个场景会留在你心里，通常因为什么？",
      hint: "你记住的是摸得到的东西，还是说不清的余味。",
      art: "perch",
      options: [
        { key: "A", text: "它细节扎实，质感真实，能重新想起来", dim: "S" },
        { key: "B", text: "它意味很重，像在心里多留了一层", dim: "N" },
        { key: "C", text: "它让我从一处想到很多别的东西", dim: "N" }
      ]
    },
    {
      id: "sn4-natural-focus",
      md5: "d5f2accd9433f7185ed658de400c2a6c",
      slot: "SN_4",
      weight: 2,
      text: "不刻意观察时，你的注意力最常去哪里？",
      hint: "默认模式最能说明你偏好的信息。",
      art: "radar",
      options: [
        { key: "A", text: "眼前真实发生的变化和反馈", dim: "S" },
        { key: "B", text: "背后可能藏着的关系和线索", dim: "N" },
        { key: "C", text: "一个小细节能带出的更大联想", dim: "N" }
      ]
    },
    {
      id: "sn4-absorbing-moment",
      md5: "9f0148fe912cf7e6c4332984b0cf8d80",
      slot: "SN_4",
      weight: 2,
      text: "什么样的瞬间最容易让你愣住？",
      hint: "你是被现实打中，还是被意义打中。",
      art: "sunspot",
      options: [
        { key: "A", text: "质感、温度、声音都刚刚好的现实瞬间", dim: "S" },
        { key: "B", text: "像世界突然对你眨了一下眼的瞬间", dim: "N" },
        { key: "C", text: "普通一幕突然带出很大联想的瞬间", dim: "N" }
      ]
    },
    {
      id: "sn4-best-observation",
      md5: "5a0dc5c54f315db2fffd1fa9a6188e5a",
      slot: "SN_4",
      weight: 2,
      text: "你最擅长的观察更像哪一种？",
      hint: "这题会把你的真正强项放大。",
      art: "radar",
      options: [
        { key: "A", text: "抓住事实、顺序和真实反馈", dim: "S" },
        { key: "B", text: "看出别人没说出来的线索", dim: "N" },
        { key: "C", text: "从碎片里拼出潜台词", dim: "N" }
      ]
    },
    {
      id: "sn4-mind-default",
      md5: "9176156e7742988dffded872c71dbdba",
      slot: "SN_4",
      weight: 2,
      text: "脑子自动开着的时候，更像在做什么？",
      hint: "默认后台最能说明你的信息偏好。",
      art: "drift",
      options: [
        { key: "A", text: "不断校正现实细节和眼前反馈", dim: "S" },
        { key: "B", text: "不断展开看不见的故事和关系", dim: "N" },
        { key: "C", text: "总能从一个点连到很多层", dim: "N" }
      ]
    }
  ],
  TF_4: [
    {
      id: "tf4-group-chaos",
      md5: "701ba9d525da0f3f972fb0d8d4a3e7b1",
      slot: "TF_4",
      weight: 2,
      text: "群体节奏开始乱掉时，你第一反应是什么？",
      hint: "这题会放大你面对混乱时的本能。",
      art: "huddle",
      options: [
        { key: "A", text: "先拆问题，找最有效的处理办法", dim: "T" },
        { key: "B", text: "先稳住大家的感受，不然谁都听不进去", dim: "F" },
        { key: "C", text: "先让最慌的那几个有安全感", dim: "F" }
      ]
    },
    {
      id: "tf4-ending-style",
      md5: "41190a0e63f1850732570f0b1dcbc924",
      slot: "TF_4",
      weight: 2,
      text: "你天生更像哪种收场方式？",
      hint: "你更像先处理事情，还是先照顾人。",
      art: "routine",
      options: [
        { key: "A", text: "把事讲清楚、摆平", dim: "T" },
        { key: "B", text: "把人接住、缓下来", dim: "F" },
        { key: "C", text: "先定一个能执行的办法", dim: "T" }
      ]
    },
    {
      id: "tf4-conflict-wave",
      md5: "0610754a5a1bab0377f8654ef0ec8e60",
      slot: "TF_4",
      weight: 2,
      text: "冲突一上来，你第一句更像什么？",
      hint: "第一句通常最接近本能。",
      art: "huddle",
      options: [
        { key: "A", text: "先停一下，我们看问题到底在哪里", dim: "T" },
        { key: "B", text: "先别互相顶了，情绪放下来一点", dim: "F" },
        { key: "C", text: "先让最慌的那只稳住再说", dim: "F" }
      ]
    },
    {
      id: "tf4-broken-routine",
      md5: "b987c269130ced6d3fb11e10d29cefdc",
      slot: "TF_4",
      weight: 2,
      text: "一切乱成一团时，你本能会先做什么？",
      hint: "你先抓关键问题，还是先照顾现场情绪。",
      art: "routine",
      options: [
        { key: "A", text: "抓主因，先找最关键的处理点", dim: "T" },
        { key: "B", text: "先缓和现场，不然解决不了问题", dim: "F" },
        { key: "C", text: "先照顾最容易被压垮的那几只", dim: "F" }
      ]
    },
    {
      id: "tf4-urgent-repair",
      md5: "f3185a237903784753ea9a521f679f7c",
      slot: "TF_4",
      weight: 2,
      text: "需要立刻收尾时，你最像哪一种？",
      hint: "你先定方案，还是先稳情绪。",
      art: "route",
      options: [
        { key: "A", text: "快速定方案，把局面按住", dim: "T" },
        { key: "B", text: "先稳人心，别让场面继续往下掉", dim: "F" },
        { key: "C", text: "先处理大家被惊到的那部分", dim: "F" }
      ]
    },
    {
      id: "tf4-pressure-peak",
      md5: "3f3bf13e9f0af39156a6131ade70492a",
      slot: "TF_4",
      weight: 2,
      text: "压力顶上来时，你第一反应更偏哪边？",
      hint: "压力一来，真实偏好就很难装。",
      art: "radar",
      options: [
        { key: "A", text: "理清顺序，至少先有一个可执行入口", dim: "T" },
        { key: "B", text: "先看谁快撑不住，别让人先塌了", dim: "F" },
        { key: "C", text: "先把受影响最大的人接住", dim: "F" }
      ]
    },
    {
      id: "tf4-tense-room",
      md5: "f6cda5d7afd597d013cecfd694907ca7",
      slot: "TF_4",
      weight: 2,
      text: "一屋子都紧起来时，你更像哪种角色？",
      hint: "你天然会站到哪个位置上。",
      art: "territory",
      options: [
        { key: "A", text: "拿出结构的人，让大家知道下一步", dim: "T" },
        { key: "B", text: "让气氛降温的人，别让它继续炸", dim: "F" },
        { key: "C", text: "挨个托住的人，先保证没有谁掉队", dim: "F" }
      ]
    },
    {
      id: "tf4-final-decision",
      md5: "650bb017490186c50452eeb4efaa1d20",
      slot: "TF_4",
      weight: 2,
      text: "必须做一个决定时，你更相信什么？",
      hint: "你对好决定的定义是什么。",
      art: "routine",
      options: [
        { key: "A", text: "清楚、有效、能落地", dim: "T" },
        { key: "B", text: "大家能接受，关系不至于裂", dim: "F" },
        { key: "C", text: "情绪得先放平，不然决定也只是表面", dim: "F" }
      ]
    },
    {
      id: "tf4-crash-stop",
      md5: "7976c3d4ba5abf1d8cc39d82944ae90e",
      slot: "TF_4",
      weight: 2,
      text: "要把一场快失控的局停下来，你先做什么？",
      hint: "你的刹车方式，是抓问题还是接情绪。",
      art: "route",
      options: [
        { key: "A", text: "找最关键的开关，先把事情按住", dim: "T" },
        { key: "B", text: "先别让人继续互相受伤", dim: "F" },
        { key: "C", text: "先把最乱的那股情绪接住", dim: "F" }
      ]
    },
    {
      id: "tf4-your-first-instinct",
      md5: "7e784c423153eb373dc75eddc85010c8",
      slot: "TF_4",
      weight: 2,
      text: "你最本能的出手方式更像哪一种？",
      hint: "最后这题，很接近你的默认操作。",
      art: "huddle",
      options: [
        { key: "A", text: "先处理事情，把局面理出顺序", dim: "T" },
        { key: "B", text: "先照顾人，把关系接回来", dim: "F" },
        { key: "C", text: "先照顾心情，别让谁继续掉下去", dim: "F" }
      ]
    }
  ]
};

const RESULTS = {
  ENTJ: {
    code: "ENTJ",
    breed: "缅因猫",
    name: "掌控全场的缅因猫",
    subname: "块头是气场的一部分，安排才是本体",
    quote: "你可以先乱，但最后最好还是按我这个来。",
    traits: ["统筹欲强", "出场有压迫感", "判断快", "懒得废话"],
    desc: "你像那种只是往高处一坐，房间秩序就自动重排的猫。很多人以为你强势，其实你只是对混乱的容忍度很低。你很会看局面，也很会接管局面，区别只是你懒不懒得亲自出手。",
    art: "mainecoon"
  },
  ENTP: {
    code: "ENTP",
    breed: "东方短毛猫",
    name: "总能把话题拐出新支线的东方短毛猫",
    subname: "脑子先冲出去，嘴巴只是负责追上",
    quote: "我不是非要换方向，我只是先看到了更好玩的那条。",
    traits: ["点子密", "反应快", "爱抬新杠", "不耐无聊"],
    desc: "你像那种本来只是在路过，结果顺手把整个场子聊出了第二宇宙的猫。你不是故意让事情偏航，你只是很难对更有趣的可能性装作没看见。别人和你待久了，会发现日子很少无聊，但也很少完全按原计划进行。",
    art: "oriental"
  },
  ENFJ: {
    code: "ENFJ",
    breed: "布偶猫",
    name: "总想把全场情绪抱顺的布偶猫",
    subname: "看起来软，管起氛围一点都不含糊",
    quote: "你先别硬撑，我先把这屋的情绪压下来。",
    traits: ["共情高", "照顾型", "气氛管理员", "容易操心"],
    desc: "你像那种自己明明也累，却还是会下意识先把别人情绪接住的猫。你对关系的流动非常敏感，常常在别人自己都还没整理清楚前，就已经感到哪里不对了。温柔是你的本能，但你也很容易把别人的事背到自己身上。",
    art: "ragdoll"
  },
  ENFP: {
    code: "ENFP",
    breed: "阿比西尼亚猫",
    name: "看见什么都想靠过去试试的阿比西尼亚猫",
    subname: "世界只要一动，它的兴趣就已经起跑",
    quote: "先别定义我，我可能下一秒又被别的东西点亮。",
    traits: ["好奇心高", "热情快", "转向快", "感染力强"],
    desc: "你像那种总能被新鲜感瞬间点亮的猫，眼睛和脑子同时转得飞快。你不是三分钟热度，你只是很难拒绝任何一个看起来值得体验的东西。和你在一起的人常常会被你拖进新节奏里，然后边累边觉得还挺好玩。",
    art: "abyssinian"
  },
  ESTJ: {
    code: "ESTJ",
    breed: "美国短毛猫",
    name: "把日子过得像清单一样稳的美国短毛猫",
    subname: "不是古板，是不想把简单事情搞复杂",
    quote: "能先排好的事，为什么要等它乱了再收。",
    traits: ["执行稳", "有条理", "能兜底", "讲标准"],
    desc: "你像那种不会故意强调自己可靠，但大家最后总是自然把事交给你的猫。你对秩序和效率有近乎肌肉记忆的偏好，很多人嫌麻烦的事，在你这里反而会越做越顺。你不一定温吞，可你确实很能让人放心。",
    art: "americanshorthair"
  },
  ESTP: {
    code: "ESTP",
    breed: "孟加拉豹猫",
    name: "把现场当游乐场的孟加拉豹猫",
    subname: "局面越在动，它越像回到主场",
    quote: "计划写在纸上很体面，但现在冲一下更对。",
    traits: ["行动快", "胆子大", "现场型", "会整活"],
    desc: "你像那种只要空气一热起来，整只猫就会突然变得特别有精神的人。你对当下的反应速度很快，也很会从眼前的缝里抓机会。你偶尔会让别人觉得你太敢了，但说实话，很多局也确实是你一冲才活起来的。",
    art: "bengal"
  },
  ESFJ: {
    code: "ESFJ",
    breed: "苏格兰折耳猫",
    name: "谁一低气压就想过去蹭一下的苏格兰折耳猫",
    subname: "温柔不是副业，是默认模式",
    quote: "你先别说没事，我看得出来你今天不对。",
    traits: ["会照顾人", "重关系", "不忍心冷场", "有安抚感"],
    desc: "你像那种总能在气氛要掉下去之前，先过去垫一下的猫。你很会让人舒服，也很会记住什么会让别人难受。只是你常常忙着照顾关系里的所有细节，最后才想起来自己其实也会累。",
    art: "scottishfold"
  },
  ESFP: {
    code: "ESFP",
    breed: "暹罗猫",
    name: "存在感自带聚光灯的暹罗猫",
    subname: "只要它在线，场子就不太可能彻底冷掉",
    quote: "我不是非要高调，我只是刚好很会出现。",
    traits: ["会带气氛", "镜头感强", "直给", "快乐制造机"],
    desc: "你像那种哪怕只是从门口走过去，也会让人下意识看两眼的猫。你很知道什么时候该让自己发亮一点，好让现场别那么无聊。你不一定永远稳定，但你确实很会给周围的人提供一种“活着真热闹”的提醒。",
    art: "siamese"
  },
  INTJ: {
    code: "INTJ",
    breed: "俄罗斯蓝猫",
    name: "安静但一直在算全局的俄罗斯蓝猫",
    subname: "看着像没参与，其实已经把走势看完了",
    quote: "我先不说，不代表我没结论。",
    traits: ["判断稳", "观察先行", "边界强", "脑内系统在线"],
    desc: "你像那种平时很安静，但只要一开口就像已经在脑子里走完三轮推演的猫。你不爱把所有反应都摆到脸上，更喜欢先把结构看清，再决定要不要参与。很多人会误会你冷，其实你只是对无效投入没什么兴趣。",
    art: "russianblue"
  },
  INTP: {
    code: "INTP",
    breed: "斯芬克斯猫",
    name: "对着一个细节能抠半天的斯芬克斯猫",
    subname: "看起来像放空，其实在后台拆结构",
    quote: "先别打断，我刚把这个问题拆到好玩的地方。",
    traits: ["爱研究", "思路跳", "跑神", "解释欲随机"],
    desc: "你像那种盯着空气半天，别人以为你神游，其实你已经把事情拆到骨架层的猫。你对复杂和奇怪的东西天然有耐心，也不太怕一个人待着慢慢想。现实节奏经常嫌你慢，但很多人没看到的是，你只是把思考放得更深。",
    art: "sphynx"
  },
  INFJ: {
    code: "INFJ",
    breed: "挪威森林猫",
    name: "安静收着心事却总能看懂人的挪威森林猫",
    subname: "不抢话，但经常最先看透气氛",
    quote: "我不是没在乎，我只是习惯先把感受处理完。",
    traits: ["感受深", "观察细", "边界清", "心软"],
    desc: "你像那种不会一直围着谁转，但总能在关键时候出现一下的猫。你看人和看氛围都很准，只是习惯先自己消化，再决定表达多少。很多人只看到你的克制，却没看到你对关系其实投入得很深。",
    art: "norwegianforest"
  },
  INFP: {
    code: "INFP",
    breed: "波斯猫",
    name: "能把一缕光看出完整故事的波斯猫",
    subname: "不是戏多，是世界进来以后会待很久",
    quote: "别人看到一个场景，我看到它在心里留下来的回音。",
    traits: ["感受深", "审美高", "脑补强", "不爱将就"],
    desc: "你像那种很容易被细小美感击中的猫，一点声音、一点光线都能在你心里停很久。你不一定总是把感受说出来，但你对喜欢、不喜欢、真诚和敷衍都有极高辨识度。很多人觉得你慢，其实你只是活得比别人更认真。",
    art: "persian"
  },
  ISTJ: {
    code: "ISTJ",
    breed: "英国短毛猫",
    name: "把稳定感落到每一步里的英国短毛猫",
    subname: "不热闹，但让人天然觉得靠谱",
    quote: "该归位的东西就归位，日子才会顺。",
    traits: ["稳定", "规则感", "耐扛", "少掉链子"],
    desc: "你像那种不会主动制造存在感，但总能把很多事情稳稳托住的猫。你对流程、承诺和细节都很认真，也很少轻易答应自己做不到的事。很多关系之所以不至于散，全靠你在背后把该记的、该扛的、该补的都接住了。",
    art: "britishshorthair"
  },
  ISTP: {
    code: "ISTP",
    breed: "德文卷毛猫",
    name: "上手比开口更快的德文卷毛猫",
    subname: "能自己拆明白的事，不想开两轮会",
    quote: "先让我摸一下结构，八成比讨论快。",
    traits: ["动手快", "冷静", "讨厌空话", "问题导向"],
    desc: "你像那种遇到问题先凑过去看看结构、试试手感，而不是先喊人的猫。你不太爱被情绪拖着跑，也不喜欢冗长空转的沟通。平时你可能不吵不闹，但真有事时，往往是最早拿出有效动作的那个。",
    art: "devonrex"
  },
  ISFJ: {
    code: "ISFJ",
    breed: "伯曼猫",
    name: "记得你每一次小情绪前兆的伯曼猫",
    subname: "很多照顾不出声，但永远在场",
    quote: "你没说，我也知道你今天和平时不一样。",
    traits: ["体贴", "记忆细", "可靠", "不爱邀功"],
    desc: "你像那种会默默记住别人每一次情绪起伏前兆的猫。你对人的变化很敏感，而且不是看见就算，你会真心把这些细节放在心上。你不太抢主角位，但很多人之所以会安心，就是因为知道你一直都在。",
    art: "birman"
  },
  ISFP: {
    code: "ISFP",
    breed: "异国短毛猫",
    name: "把舒服和审美都守得很真的异国短毛猫",
    subname: "外表软，内里其实很清楚自己不要什么",
    quote: "我可以慢，但不是谁都能改我的节奏。",
    traits: ["活在当下", "审美敏感", "温和但倔", "不爱被催"],
    desc: "你像那种看起来软乎乎、很好说话，其实对自己节奏很有主意的猫。你很会感受眼前，也很会分辨什么是真的舒服、什么只是被硬塞给你的安排。你不一定高调表达边界，但边界这件事，你心里一直很清楚。",
    art: "exoticshorthair"
  }
};

const NORMALIZED_QUESTION_BANK = Object.fromEntries(
  Object.entries(QUESTION_BANK).map(([slot, questions]) => [
    slot,
    questions.map(question => ({
      ...question,
      slug: question.id,
      id: question.md5
    }))
  ])
);

const QUESTION_LOOKUP = new Map(
  Object.values(NORMALIZED_QUESTION_BANK)
    .flat()
    .map(question => [question.id, question])
);

function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(data), { ...init, headers });
}

const rateLimitStore = new Map();

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getClientIp(request) {
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const forwardedIp = xForwardedFor.split(",")[0]?.trim();
    if (forwardedIp) return forwardedIp;
  }

  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  return "unknown";
}

function cleanupRateLimitBucket(bucket, now) {
  for (const [key, entry] of bucket.entries()) {
    if (entry.resetAt <= now) {
      bucket.delete(key);
    }
  }
}

function parsePositiveInteger(value) {
  if (typeof value !== "string" || value.trim() === "") return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function getRateLimitWindows(env) {
  const startLimit = parsePositiveInteger(env.RATE_LIMIT_START_LIMIT);
  const finishLimit = parsePositiveInteger(env.RATE_LIMIT_FINISH_LIMIT);
  const windowSeconds = parsePositiveInteger(env.RATE_LIMIT_WINDOW_SECONDS);

  if (!startLimit || !finishLimit || !windowSeconds) {
    return null;
  }

  return {
    start: {
      limit: startLimit,
      windowSeconds
    },
    finish: {
      limit: finishLimit,
      windowSeconds
    }
  };
}

function rateLimit(request, env, action) {
  const windows = getRateLimitWindows(env);
  if (!windows) return null;

  const rule = windows[action];
  if (!rule) return null;

  const now = Date.now();
  cleanupRateLimitBucket(rateLimitStore, now);

  const ip = getClientIp(request);
  const bucketKey = `${action}:${ip}`;
  const entry = rateLimitStore.get(bucketKey);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(bucketKey, {
      count: 1,
      resetAt: now + rule.windowSeconds * 1000
    });
    return null;
  }

  if (entry.count >= rule.limit) {
    const retryAfter = Math.max(1, Math.ceil((entry.resetAt - now) / 1000));
    return json(
      { error: "Too Many Requests" },
      {
        status: 429,
        headers: {
          "retry-after": String(retryAfter)
        }
      }
    );
  }

  entry.count += 1;
  return null;
}

function toPublicQuestion(question) {
  return {
    id: question.id,
    text: question.text,
    hint: question.hint,
    art: question.art,
    options: question.options.map(option => ({ key: option.key, text: option.text }))
  };
}

function sanitizeSeenQuestionIds(input) {
  if (!Array.isArray(input)) return [];

  return [...new Set(
    input.filter(id => typeof id === "string" && QUESTION_LOOKUP.has(id))
  )];
}

function pickQuestionForSlot(slot, seenQuestionIds) {
  const questions = NORMALIZED_QUESTION_BANK[slot] || [];
  const unseenQuestions = questions.filter(question => !seenQuestionIds.has(question.id));
  return pickRandom(unseenQuestions.length ? unseenQuestions : questions);
}

function buildQuiz(seenIds = []) {
  const seenQuestionIds = new Set(seenIds);
  return SLOT_ORDER.map(slot => pickQuestionForSlot(slot, seenQuestionIds));
}

function calculateType(count) {
  const e = count.E >= count.I ? "E" : "I";
  const s = count.S >= count.N ? "S" : "N";
  const t = count.T >= count.F ? "T" : "F";
  const j = count.J >= count.P ? "J" : "P";
  return `${e}${s}${t}${j}`;
}

function validateAnswers(answers) {
  if (!Array.isArray(answers) || answers.length !== SLOT_ORDER.length) {
    return "答案数量不正确";
  }

  const seenQuestionIds = new Set();
  const seenSlots = new Set();

  for (const answer of answers) {
    if (!answer || typeof answer.questionId !== "string" || typeof answer.optionKey !== "string") {
      return "答案格式不正确";
    }

    if (seenQuestionIds.has(answer.questionId)) {
      return "题目重复提交";
    }
    seenQuestionIds.add(answer.questionId);

    const question = QUESTION_LOOKUP.get(answer.questionId);
    if (!question) {
      return "存在无效题目";
    }

    if (seenSlots.has(question.slot)) {
      return "同一题位重复作答";
    }
    seenSlots.add(question.slot);

    const option = question.options.find(item => item.key === answer.optionKey);
    if (!option) {
      return "存在无效选项";
    }
  }

  if (seenSlots.size !== SLOT_ORDER.length) {
    return "题位不完整";
  }

  return null;
}

function scoreAnswers(answers) {
  const count = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (const answer of answers) {
    const question = QUESTION_LOOKUP.get(answer.questionId);
    const option = question.options.find(item => item.key === answer.optionKey);
    const weight = question.weight || 1;
    count[option.dim] += weight;
  }

  return count;
}

async function handleStart(request) {
  const url = new URL(request.url);
  const seenQuery = url.searchParams.get("seen");
  let seenIds = [];

  if (seenQuery) {
    try {
      seenIds = sanitizeSeenQuestionIds(JSON.parse(seenQuery));
    } catch {
      seenIds = [];
    }
  }

  const questions = buildQuiz(seenIds).map(toPublicQuestion);
  return json({
    questions,
    total: questions.length,
    mode: "manual-bank"
  });
}

async function handleFinish(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "请求体不是合法 JSON" }, { status: 400 });
  }

  const answers = body?.answers;
  const validationError = validateAnswers(answers);
  if (validationError) {
    return json({ error: validationError }, { status: 400 });
  }

  const count = scoreAnswers(answers);
  const code = calculateType(count);
  const result = RESULTS[code] || RESULTS.INTJ;

  return json({
    result,
    scores: count
  });
}

const BLOCKED_ASSET_PATHS = new Set([
  "/worker.js",
  "/wrangler.jsonc",
  "/CLAUDE.md",
  "/README.md"
]);

const BLOCKED_PATH_PREFIXES = ["/TEMLATE", "/BACKUP", "/.wrangler"];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (BLOCKED_ASSET_PATHS.has(url.pathname) || BLOCKED_PATH_PREFIXES.some(prefix => url.pathname.startsWith(prefix))) {
      return new Response("Not Found", { status: 404 });
    }

    if (url.pathname === "/api/start") {
      if (request.method !== "GET") {
        return json({ error: "Method Not Allowed" }, { status: 405 });
      }

      const limited = rateLimit(request, env, "start");
      if (limited) return limited;
      return handleStart(request);
    }

    if (url.pathname === "/api/finish") {
      if (request.method !== "POST") {
        return json({ error: "Method Not Allowed" }, { status: 405 });
      }

      const limited = rateLimit(request, env, "finish");
      if (limited) return limited;
      return handleFinish(request);
    }

    if (url.pathname.startsWith("/api/")) {
      return json({ error: "Not Found" }, { status: 404 });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not Found", { status: 404 });
  }
};
