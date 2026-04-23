# Cat-TI

Cat-TI 是一个基于 Cloudflare Workers 的 15 题人格测试项目：以 MBTI 恶搞版为骨架，把结果映射成 16 种“有点不太正常的猫”。

## 特性

- 15 题固定结构，服务端随机下发题目
- 结果固定映射为 16 种猫品种
- 前端静态资源托管在 `main/`
- 前端拆分为 `index.html + styles.css + app.js`
- 支持手动明暗模式切换，仅在本地保存主题偏好
- 浏览器会在本地保存最近一段已见题目标识，用于尽量减少重复题；不上传云端
- Worker 负责题库、计分和结果返回

## 项目结构

```text
.
├── main/                 # 前端静态资源
│   ├── index.html        # 页面结构
│   ├── styles.css        # 页面样式
│   ├── app.js            # 前端交互逻辑
│   └── assets/
├── worker.js             # Cloudflare Worker API
├── wrangler.jsonc        # Workers 配置
├── README.md             # 项目说明、题库与结果逻辑
├── CLAUDE.md             # 项目协作说明
└── LICENSE               # MIT License
```

## 本地开发

```bash
wrangler dev
```

## 部署

```bash
wrangler deploy
```

## 测试逻辑

### 维度说明

每道题的选项对应一个 MBTI 维度：

| 维度 | 含义 |
|------|------|
| E / I | 外向 / 内向 |
| S / N | 实感（具体）/ 直觉（联想） |
| T / F | 理性 / 感性 |
| J / P | 计划 / 随性 |

最后 3 个题位为决胜题，分别放大 E/I、S/N、T/F，服务端按 `weight: 2` 记分。

### 题库结构

题库不直接写在 `index.html` 中，而是由 Cloudflare Workers 维护并在开始测试时下发本轮 15 题。

当前前端接口路径使用：

- `GET /api/start`
- `POST /api/finish`

其中 `/api/start` 会接收浏览器本地保存的已见题 md5 列表，优先返回未见题；若某个题位的未见候选已耗尽，则仅对该题位回退到全量候选。

当前采用**固定槽位随机**：

- E/I：4 个题位
- S/N：4 个题位
- T/F：4 个题位
- J/P：3 个题位

每个题位可配置多道候选题，Workers 每次从各题位各抽 1 题，组成一轮完整测试。

#### 当前 15 个题位

| 题序 | 槽位 | 维度 | 决胜题 |
|---|---|---|---|
| 1 | EI_1 | E / I | 否 |
| 2 | SN_1 | S / N | 否 |
| 3 | TF_1 | T / F | 否 |
| 4 | JP_1 | J / P | 否 |
| 5 | EI_2 | E / I | 否 |
| 6 | SN_2 | S / N | 否 |
| 7 | TF_2 | T / F | 否 |
| 8 | JP_2 | J / P | 否 |
| 9 | EI_3 | E / I | 否 |
| 10 | SN_3 | S / N | 否 |
| 11 | TF_3 | T / F | 否 |
| 12 | JP_3 | J / P | 否 |
| 13 | EI_4 | E / I | 是，`weight: 2` |
| 14 | SN_4 | S / N | 是，`weight: 2` |
| 15 | TF_4 | T / F | 是，`weight: 2` |

### 出题原则

- **全部使用猫的生活方式与空间感**，不走 DogTi 的原始题目骨架
- 重点围绕：领地、位置偏好、社交边界、群体相处、习惯系统、空间观察、情绪托底
- **不把题库直接暴露在前端源码里**
- 允许通过扩展同槽位候选题，实现“每次测试题目不同或尽量不重复”
- 不使用 AI 动态出题；题库由人工维护，Workers 负责抽题和计分

### 结果逻辑

```js
count = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 }

// 前12题按 1 分记；13~15 题按 weight: 2 记

e = count.E >= count.I ? "E" : "I"
s = count.S >= count.N ? "S" : "N"
t = count.T >= count.F ? "T" : "F"
j = count.J >= count.P ? "J" : "P"

type = e + s + t + j
```

Workers 根据计算出的 MBTI，映射到固定的 16 个猫品种结果。

### 16种结果

| MBTI | 结果名 | 品种 key |
|------|--------|---------|
| ENTJ | 掌控全场的缅因猫 | mainecoon |
| ENTP | 总能把话题拐出新支线的东方短毛猫 | oriental |
| ENFJ | 总想把全场情绪抱顺的布偶猫 | ragdoll |
| ENFP | 看见什么都想靠过去试试的阿比西尼亚猫 | abyssinian |
| ESTJ | 把日子过得像清单一样稳的美国短毛猫 | americanshorthair |
| ESTP | 把现场当游乐场的孟加拉豹猫 | bengal |
| ESFJ | 谁一低气压就想过去蹭一下的苏格兰折耳猫 | scottishfold |
| ESFP | 存在感自带聚光灯的暹罗猫 | siamese |
| INTJ | 安静但一直在算全局的俄罗斯蓝猫 | russianblue |
| INTP | 对着一个细节能抠半天的斯芬克斯猫 | sphynx |
| INFJ | 安静收着心事却总能看懂人的挪威森林猫 | norwegianforest |
| INFP | 能把一缕光看出完整故事的波斯猫 | persian |
| ISTJ | 把稳定感落到每一步里的英国短毛猫 | britishshorthair |
| ISTP | 上手比开口更快的德文卷毛猫 | devonrex |
| ISFJ | 记得你每一次小情绪前兆的伯曼猫 | birman |
| ISFP | 把舒服和审美都守得很真的异国短毛猫 | exoticshorthair |

### 当前部署分层

- `main/index.html`：页面 DOM 结构与静态容器
- `main/styles.css`：页面样式、主题变量与动效
- `main/app.js`：公告门禁、主题切换、拉题、答题、结果渲染；当前前端使用 `API_BASE = "/api"`
- `worker.js`：题库维护、随机抽题、服务端计分与结果映射

## 致谢

- 本项目在玩法方向与早期参考上，致谢 [diggtoli-stack/DogTi](https://github.com/diggtoli-stack/DogTi)

## 开源协议

MIT
