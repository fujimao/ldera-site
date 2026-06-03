import { IntroSplash } from "@/components/IntroSplash";
import Image from "next/image";

const services = [
  {
    title: "映像制作",
    copy: "会社紹介、採用、商品紹介、広告動画まで。伝えたいことを、最後まで見たくなる物語にします。",
    outcome: "商談前の説明コストを減らす",
    image: "/legacy/photos/service-1.jpg",
  },
  {
    title: "Web制作",
    copy: "コーポレートサイト、LP、採用サイトを設計から実装まで。見た目の驚きと問い合わせ導線を両立します。",
    outcome: "初回接触の信頼をつくる",
    image: "/legacy/photos/service-5.jpg",
  },
  {
    title: "クリエイティブ設計",
    copy: "企画、コピー、導線、SNS展開まで。映像とWebが同じ方向を向くように整理します。",
    outcome: "伝える順番を整える",
    image: "/legacy/photos/service-3.jpg",
  },
];

const transformations = [
  ["説明が長い", "30秒で伝わる"],
  ["サイトが静か", "営業が動き出す"],
  ["採用がぼんやり", "応募者の記憶に残る"],
  ["魅力が社内用語", "顧客の言葉になる"],
];

const oddPromises = [
  "会議室で眠っている魅力を起こします",
  "資料の3ページ目に隠れた主役を発見します",
  "真面目な会社ほど、少し変に見せます",
  "問い合わせボタンまで迷子にしません",
];

const missions = [
  "MISSION 01: 説明資料を動画に変身",
  "MISSION 02: 無口なサイトに営業トークを注入",
  "MISSION 03: 採用ページへ体温を追加",
  "MISSION 04: 社内用語を顧客語へ翻訳",
  "MISSION 05: 問い合わせボタンを目立たせる",
];

const legacyMedia = [
  {
    title: "旧サイトのトップ映像",
    src: "/legacy/home-movie.webm",
    fallback: "/legacy/home-movie.mp4",
    copy: "すでにあるルデラらしさを、新サイトの第一印象へ移植します。",
  },
  {
    title: "会社紹介モーション",
    src: "/legacy/company-movie.webm",
    fallback: "/legacy/company-movie.mp4",
    copy: "旧サイトの空気感を残しながら、より強い導線へ組み替えます。",
  },
  {
    title: "ロゴモーション",
    src: "/legacy/logo.webm",
    fallback: "/legacy/logo.mp4",
    copy: "ブランドの動きは、記憶に残る小さな合図として使います。",
  },
];

const photoFragments = [
  {
    src: "/legacy/photos/company-top.jpg",
    alt: "旧サイトの会社紹介ビジュアル",
    label: "Company mood",
  },
  {
    src: "/legacy/photos/contact-top.jpg",
    alt: "旧サイトの問い合わせセクションビジュアル",
    label: "Contact signal",
  },
  {
    src: "/legacy/photos/home-sec2.png",
    alt: "旧サイトのホームセクション画像",
    label: "Home fragment",
  },
  {
    src: "/legacy/photos/service-2.jpg",
    alt: "旧サイトのサービス紹介写真",
    label: "Service scene",
  },
  {
    src: "/legacy/photos/service-4.jpg",
    alt: "旧サイトのサービス紹介素材",
    label: "Making piece",
  },
  {
    src: "/legacy/photos/service-6.jpg",
    alt: "旧サイトの制作素材",
    label: "Production bit",
  },
  {
    src: "/legacy/photos/service-7.jpg",
    alt: "旧サイトの制作写真",
    label: "Visual proof",
  },
  {
    src: "/legacy/photos/legacy-image.jpg",
    alt: "旧サイトから引き継いだ写真素材",
    label: "Archive",
  },
];

const process = [
  {
    title: "聞く",
    copy: "事業、営業、採用、広報の課題をほどきます。まだ整理されていなくて大丈夫です。",
  },
  {
    title: "企む",
    copy: "映像にする部分、Webで受け止める部分、問い合わせへつなぐ順番を設計します。",
  },
  {
    title: "作る",
    copy: "撮影、編集、デザイン、実装を進め、初期公開できる形まで持っていきます。",
  },
  {
    title: "育てる",
    copy: "公開後の反応を見ながら、コピー、導線、見せ方を改善します。",
  },
];

const works = [
  "採用応募を増やすための企業紹介動画と採用LP",
  "展示会で会話が生まれるサービス紹介ムービー",
  "問い合わせ導線を整えたBtoBコーポレートサイト",
];

const voices = [
  "会議で説明していた30分が、動画1本で伝わるようになりました。",
  "ふざけているのに、ちゃんと成果に向かっている。不思議と社内決裁が進みました。",
  "公開後、初対面のお客様から『あのサイト見ました』と言われるようになりました。",
];

const faqs = [
  {
    q: "映像とWebをまとめて相談できますか？",
    a: "できます。企画段階から同時に設計することで、動画、サイト、問い合わせ導線のズレを減らします。",
  },
  {
    q: "まだ内容が固まっていなくても相談できますか？",
    a: "問題ありません。事業内容、ターゲット、営業課題を聞きながら、必要な制作物を一緒に整理します。",
  },
  {
    q: "急ぎの公開にも対応できますか？",
    a: "初期公開を優先した構成で進められます。まずは必要最小限で公開し、改善を重ねる進め方も可能です。",
  },
];

export default function Home() {
  return (
    <>
      <IntroSplash />
      <main>
        <header className="site-header">
        <a href="#top" className="brand" aria-label="株式会社ルデラ トップへ">
          Ldera
        </a>
        <nav aria-label="主要ナビゲーション">
          <a href="#services">サービス</a>
          <a href="#works">実績</a>
          <a href="#company">会社概要</a>
          <a href="#contact">問い合わせ</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-orbit" aria-hidden="true">
          <span>REC</span>
          <span>WEB</span>
          <span>WOW</span>
          <span>ROI</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Video production / Web production</p>
          <h1>株式会社ルデラ</h1>
          <p className="lead">
            映像とWebで、会社の魅力を「なんか忘れられない」に変える制作会社です。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              相談する
            </a>
            <a className="secondary-button" href="#services">
              何ができるか見る
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="映像制作とWeb制作を表すビジュアル">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/legacy/kv.jpg"
            aria-label="旧サイトから引き継いだルデラの映像素材"
          >
            <source src="/legacy/home-movie.webm" type="video/webm" />
            <source src="/legacy/home-movie.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="mission-belt" aria-label="制作ミッション">
        <div>
          {missions.concat(missions).map((mission, index) => (
            <span key={`${mission}-${index}`}>{mission}</span>
          ))}
        </div>
      </section>

      <section className="ticker" aria-label="ルデラの特徴">
        <span>企画する</span>
        <span>撮る</span>
        <span>編集する</span>
        <span>設計する</span>
        <span>公開する</span>
        <span>思い出される</span>
      </section>

      <section className="odd-strip" aria-label="ルデラの制作姿勢">
        {oddPromises.map((promise) => (
          <span key={promise}>{promise}</span>
        ))}
      </section>

      <section className="section transform-section">
        <div className="section-heading">
          <p className="eyebrow">Transform</p>
          <h2>伝わらないものを、伝わってしまうものへ。</h2>
        </div>
        <div className="transform-grid">
          {transformations.map(([before, after]) => (
            <article className="transform-card" key={before}>
              <p>{before}</p>
              <span aria-hidden="true">→</span>
              <strong>{after}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section chaos-lab">
        <div className="chaos-copy">
          <p className="eyebrow">Creative Lab</p>
          <h2>ふざける前に、ちゃんと企画しています。</h2>
          <p>
            ルデラの遊びは、思いつきの飾りではありません。誰に、何を、どの順番で伝えるかを決めたあと、
            そこに忘れにくいひっかかりを混ぜます。
          </p>
        </div>
        <div className="lab-board" aria-label="制作アイデアのボード">
          <span className="lab-note note-a">真面目</span>
          <span className="lab-note note-b">違和感</span>
          <span className="lab-note note-c">記憶</span>
          <span className="lab-note note-d">問い合わせ</span>
          <span className="lab-note note-e">変</span>
          <span className="lab-note note-f">でも効く</span>
          <span className="lab-core">成果</span>
        </div>
      </section>

      <section className="section legacy-media">
        <div className="section-heading">
          <p className="eyebrow">Legacy Assets</p>
          <h2>旧サイトの素材も、ちゃんと暴れさせます。</h2>
        </div>
        <div className="legacy-grid">
          {legacyMedia.map((media) => (
            <article key={media.title}>
              <div className="legacy-video">
                <video autoPlay loop muted playsInline>
                  <source src={media.src} type="video/webm" />
                  <source src={media.fallback} type="video/mp4" />
                </video>
              </div>
              <h3>{media.title}</h3>
              <p>{media.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section weird-console" aria-label="ルデラ制作コンソール">
        <div className="console-screen">
          <p className="eyebrow">Ldera Console</p>
          <h2>普通の提案書では、事件が起きない。</h2>
          <div className="console-lines">
            <span>入力: 会社の魅力が伝わらない</span>
            <span>解析: 言葉がまじめすぎます</span>
            <span>処理: 映像 + Web + 少し変</span>
            <span>出力: 覚えられる会社</span>
          </div>
        </div>
        <div className="console-dials" aria-hidden="true">
          <span>まじめ 72%</span>
          <span>違和感 41%</span>
          <span>成果 100%</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>まじめな成果に、少し変なエンジンを。</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-photo">
                <Image
                  src={service.image}
                  alt={`${service.title}の旧サイト素材`}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              </div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <strong>{service.outcome}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section photo-fragments">
        <div className="section-heading">
          <p className="eyebrow">Photo Fragments</p>
          <h2>写真素材を、まじめに並べずに使います。</h2>
        </div>
        <div className="photo-grid">
          {photoFragments.map((photo, index) => (
            <figure key={photo.src} className={`photo-piece piece-${index + 1}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 900px) 100vw, 25vw" />
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>進め方は、意外とちゃんとしています。</h2>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="section split-section">
        <div>
          <p className="eyebrow">Works</p>
          <h2>実績は、まだ仮です。態度は本気です。</h2>
        </div>
        <div className="work-list">
          {works.map((work) => (
            <p key={work}>{work}</p>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Voice</p>
          <h2>お客様の声</h2>
        </div>
        <div className="voice-grid">
          {voices.map((voice) => (
            <blockquote key={voice}>{voice}</blockquote>
          ))}
        </div>
      </section>

      <section id="company" className="section company">
        <div>
          <p className="eyebrow">Company</p>
          <h2>会社概要</h2>
        </div>
        <dl>
          <div>
            <dt>会社名</dt>
            <dd>株式会社ルデラ</dd>
          </div>
          <div>
            <dt>代表者</dt>
            <dd>佐藤麻央</dd>
          </div>
          <div>
            <dt>所在地</dt>
            <dd>宮城県仙台市太白区西中田三丁目11-13</dd>
          </div>
          <div>
            <dt>事業内容</dt>
            <dd>映像制作、Web制作、クリエイティブ企画</dd>
          </div>
          <div>
            <dt>対象</dt>
            <dd>法人担当者、経営者、採用・広報・マーケティング担当者</dd>
          </div>
        </dl>
      </section>

      <section className="section faq">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>よくある質問</h2>
        </div>
        {faqs.map((faq) => (
          <details key={faq.q}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">Contact</p>
        <h2>まだ言葉になっていない相談も、持ってきてください。</h2>
        <p>
          映像にするべきか、Webにするべきか、そもそも何から始めるべきか。そこから一緒に整理します。
        </p>
        <a className="primary-button" href="mailto:contact@ldera.co.jp">
          contact@ldera.co.jp
        </a>
      </section>
      </main>
    </>
  );
}
