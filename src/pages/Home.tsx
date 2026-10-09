import '../App.css'

const tests = [
  {
    key: 'interest',
    name: '兴趣',
    question: '我喜欢做什么？',
    have: '拥有它 → 快乐感',
    lack: '缺了它 → 厌倦',
    color: '#2E75B6',
    bg: 'rgba(46,117,182,0.08)',
    testName: '霍兰德职业兴趣测试',
    testSub: 'SDS 60 题版 · 测出你的 RIASEC 三字母代码',
    href: '/tests/holland.html',
  },
  {
    key: 'ability',
    name: '能力',
    question: '我擅长做什么？',
    have: '拥有它 → 掌控感',
    lack: '缺了它 → 焦虑',
    color: '#548235',
    bg: 'rgba(84,130,53,0.08)',
    testName: '盖洛普优势测试',
    testSub: '34 项才干主题 · 找到你最强的前 5 项',
    href: '/tests/gallup.html',
  },
  {
    key: 'value',
    name: '价值观',
    question: '我看重什么？',
    have: '拥有它 → 满足感',
    lack: '缺了它 → 失落',
    color: '#BF8F00',
    bg: 'rgba(191,143,0,0.08)',
    testName: '职业锚测试',
    testSub: '8 种职业锚 · 找到你绝不让步的那个核',
    href: '/tests/career-anchor.html',
  },
]

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#F7F8FA', fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '24px 16px 48px' }}>
        {/* 头图 */}
        <img
          src="/images/banner-long.png"
          alt="非正式职场对谈"
          style={{ width: '100%', borderRadius: 14, display: 'block', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
        />

        {/* 引言 */}
        <div style={{ textAlign: 'center', margin: '36px 0 8px' }}>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: '#1F4E79', margin: 0 }}>
            理想工作 = 兴趣 + 能力 + 价值
          </h1>
          <p style={{ color: '#666', fontSize: 15, marginTop: 12, lineHeight: 1.8, maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
            模型来源：生涯规划师古典「生涯三叶草」。<br />
            你的难受是厌倦、焦虑还是失落？它指向的，就是缺的那片叶子。
          </p>
        </div>

        {/* 三张测评卡 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 18, marginTop: 32 }}>
          {tests.map((t) => (
            <div
              key={t.key}
              style={{
                background: '#fff',
                borderRadius: 16,
                padding: '24px 22px',
                borderTop: `5px solid ${t.color}`,
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: t.color }}>{t.name}</span>
                <span style={{ fontSize: 13, color: '#888' }}>{t.question}</span>
              </div>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 13, color: '#2F6B2F', background: t.bg, borderRadius: 8, padding: '6px 10px' }}>{t.have}</span>
                <span style={{ fontSize: 13, color: '#A02020', background: t.bg, borderRadius: 8, padding: '6px 10px' }}>{t.lack}</span>
              </div>
              <div style={{ marginTop: 18, paddingTop: 16, borderTop: '1px dashed #E2E8F0' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#2D3748' }}>{t.testName}</div>
                <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>{t.testSub}</div>
              </div>
              <a
                href={t.href}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: t.color,
                  color: '#fff',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 10,
                  padding: '12px 0',
                  marginTop: 20,
                }}
              >
                开始测试 →
              </a>
            </div>
          ))}
        </div>

        {/* 提醒 */}
        <div style={{ marginTop: 40, background: '#FFF8F0', border: '1px solid #F0D9B8', borderRadius: 14, padding: '20px 22px', color: '#7A5C2E', fontSize: 13.5, lineHeight: 2 }}>
          <strong>测试前，两个提醒：</strong><br />
          一、挑一个状态平稳的时间测。连续熬夜、刚在工作上吵完架、正处于焦虑或低落期时，答案会明显偏向消极。先让自己缓过来，再找 20 分钟不受打扰的时间认真作答。<br />
          二、测评只是参考地图。它帮你把"我到底哪里不舒服"看清楚，但不会替你做决定——换不换工作、转不转行，永远在你自己手里。建议隔一段时间重测一次，对照两次结果的变化，比单次结果更有参考价值。<br /><br />
          <strong>免责声明：</strong>本站测评仅供自我探索与参考，不构成职业指导、心理诊断或治疗建议。测评结果可能受当下状态、作答方式等因素影响，请勿将其作为重大决定的唯一依据。如因职业发展或情绪问题感到持续困扰，建议寻求持证心理咨询师或专业生涯规划机构的帮助。
        </div>

        {/* 三叶草 */}
        <div style={{ marginTop: 40, background: '#fff', borderRadius: 14, padding: '28px 20px 20px', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}>
          <h2 style={{ textAlign: 'center', fontSize: 19, fontWeight: 800, color: '#1F4E79', margin: 0 }}>
            生涯三叶草：用情绪定位你的职业缺口
          </h2>
          <p style={{ textAlign: 'center', color: '#888', fontSize: 13, marginTop: 8 }}>
            情绪是信号——它指向的，就是缺的那片叶子
          </p>
          <img
            src="/images/clover.png"
            alt="生涯三叶草：理想工作 = 兴趣 + 能力 + 价值"
            style={{ width: '100%', maxWidth: 560, margin: '16px auto 0', display: 'block' }}
          />
        </div>

        <p style={{ textAlign: 'center', color: '#AAA', fontSize: 12, marginTop: 32 }}>
          非正式职场对谈 · 致迷茫的你：先搞清楚问题，再决定怎么走。
        </p>
      </div>
    </div>
  )
}
