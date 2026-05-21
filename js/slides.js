// js/slides.js — 任用試験 学習スライド（全50枚）
// Part 1: slide01〜slide25

function slide01Cover() {
  return `<section class="slide slide-cover" data-notes="このスライドは任用試験の勉強をサポートするために作りました。初めて仏法を学ぶ方でも安心して読めるよう、むずかしい言葉にはすべてフリガナをつけています。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; position: relative; overflow: hidden;">
    <svg style="position: absolute; right: 2cqw; top: 50%; transform: translateY(-50%); width: 38cqw; height: 38cqw; opacity: 0.15;" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <!-- Lotus petals -->
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(0 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(40 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(80 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(120 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(160 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(200 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(240 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(280 100 100)"/>
      <ellipse cx="100" cy="60" rx="12" ry="28" fill="white" transform="rotate(320 100 100)"/>
      <!-- Center circle -->
      <circle cx="100" cy="100" r="18" fill="white" stroke="white" stroke-width="2"/>
      <!-- Stem -->
      <line x1="100" y1="118" x2="100" y2="170" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <!-- Leaves -->
      <ellipse cx="82" cy="150" rx="18" ry="8" fill="white" transform="rotate(-30 82 150)"/>
      <ellipse cx="118" cy="155" rx="18" ry="8" fill="white" transform="rotate(30 118 155)"/>
    </svg>
    <div style="position: relative; z-index: 1;">
      <div class="slide-h1" style="font-size: 6cqw; line-height: 1.2; margin-bottom: 2cqw;">
        <ruby>仏法<rt>ぶっぽう</rt></ruby>入門<br>学習スライド
      </div>
      <div class="slide-h3" style="font-size: 3cqw; margin-bottom: 4cqw; opacity: 0.9;">
        <ruby>任用試験<rt>にんようしけん</rt></ruby>に向けてともに学ぼう
      </div>
      <div class="flex-row gap-2" style="flex-wrap: wrap;">
        <span class="slide-small" style="background: rgba(255,255,255,0.2); border-radius: 999px; padding: 0.4cqw 1.6cqw; font-size: 1.8cqw;">全50スライド</span>
        <span class="slide-small" style="background: rgba(255,255,255,0.2); border-radius: 999px; padding: 0.4cqw 1.6cqw; font-size: 1.8cqw;">フリガナ付き</span>
        <span class="slide-small" style="background: rgba(255,255,255,0.2); border-radius: 999px; padding: 0.4cqw 1.6cqw; font-size: 1.8cqw;">確認クイズ入り</span>
      </div>
    </div>
  </div>
</section>`;
}

function slide02BridgeCh1() {
  return `<section class="slide slide-bridge" data-notes="第1章では、御書と諸法実相抄について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">1</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第１章</div>
    <div class="slide-h1" style="font-size: 6.5cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>御書<rt>ごしょ</rt></ruby>と<ruby>諸法実相抄<rt>しょほうじっそうしょう</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      <ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>の教えの根本
    </div>
  </div>
</section>`;
}

function slide03Gosho() {
  return `<section class="slide" data-notes="御書は約700編が現存しています。創価学会では御書を信仰実践の基本として大切にしています。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第１章</div>
    <h2 class="slide-h2"><ruby>御書<rt>ごしょ</rt></ruby>とは何か？</h2>
    <p class="slide-body">
      <ruby>御書<rt>ごしょ</rt></ruby>とは、<ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>が書き残した<ruby>手紙<rt>てがみ</rt></ruby>や<ruby>論文<rt>ろんぶん</rt></ruby>のことです。弟子や<ruby>信者<rt>しんじゃ</rt></ruby>への励ましの言葉、仏法の<ruby>真髄<rt>しんずい</rt></ruby>が詰まっています。
    </p>
    <div class="highlight-box" style="font-size: 1.8cqw;">
      御書には約700編の<ruby>手紙<rt>てがみ</rt></ruby>や<ruby>論文<rt>ろんぶん</rt></ruby>が現存しています。<ruby>創価学会<rt>そうかがっかい</rt></ruby>では御書を信仰実践の根本として大切にしています。
    </div>
    <div class="icon-row" style="margin-top: 1cqw;">
      <div class="icon-item card">
        <div class="slide-accent" style="font-size: 3cqw;">📜</div>
        <div class="slide-small">①<ruby>手紙<rt>てがみ</rt></ruby>・<ruby>論文集<rt>ろんぶんしゅう</rt></ruby></div>
      </div>
      <div class="icon-item card">
        <div class="slide-accent" style="font-size: 3cqw;">💌</div>
        <div class="slide-small">②弟子への励まし</div>
      </div>
      <div class="icon-item card">
        <div class="slide-accent" style="font-size: 3cqw;">📖</div>
        <div class="slide-small">③仏法の根本</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide04Shohojisso() {
  return `<section class="slide" data-notes="諸法実相抄は文永10年（1273年）に書かれました。すべての現象にありのままの真実の姿があるという教えです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第１章</div>
    <h2 class="slide-h2"><ruby>諸法実相抄<rt>しょほうじっそうしょう</rt></ruby>のポイント</h2>
    <div class="gosho-quote">
      <div class="gosho-text">「<ruby>一閻浮提第一<rt>いちえんぶだいだいいち</rt></ruby>の<ruby>御本尊<rt>ごほんぞん</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じさせ<ruby>給<rt>たま</rt></ruby>え。あいかまえて、あいかまえて、<ruby>信心<rt>しんじん</rt></ruby>つよく<ruby>候<rt>そうろう</rt></ruby>いて、<ruby>三仏<rt>さんぶつ</rt></ruby>の<ruby>守護<rt>しゅご</rt></ruby>をこうむらせ<ruby>給<rt>たま</rt></ruby>うべし」</div>
      <div class="gosho-source">— <ruby>諸法実相抄<rt>しょほうじっそうしょう</rt></ruby>（新1793・全1361）</div>
    </div>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="highlight-box flex-1">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw;"><ruby>一念三千<rt>いちねんさんぜん</rt></ruby></div>
        <div class="slide-small">一瞬の心に宇宙のすべてが含まれる</div>
      </div>
      <div class="highlight-box flex-1">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw;"><ruby>十界互具<rt>じっかいごぐ</rt></ruby></div>
        <div class="slide-small">どんな人も仏になれる可能性を持つ</div>
      </div>
      <div class="highlight-box flex-1">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw;"><ruby>己心<rt>こしん</rt></ruby>の仏</div>
        <div class="slide-small"><ruby>仏界<rt>ぶっかい</rt></ruby>は自分の心の中にある</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide05Ichinen() {
  return `<section class="slide" data-notes="一念三千は天台大師が法華経から導いた理論です。日蓮大聖人はこれを実践法として南無妙法蓮華経の題目に凝縮しました。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第１章</div>
    <h2 class="slide-h2"><ruby>一念三千<rt>いちねんさんぜん</rt></ruby>って何？</h2>
    <p class="slide-body">
      「<ruby>一念<rt>いちねん</rt></ruby>」とは今この瞬間の<ruby>心<rt>こころ</rt></ruby>のこと。その一瞬の心に、<ruby>三千<rt>さんぜん</rt></ruby>もの<ruby>世界<rt>せかい</rt></ruby>が含まれています。
    </p>
    <div class="flex-row gap-3 items-center" style="flex: 1;">
      <div style="flex: 1; display: flex; justify-content: center;">
        <svg viewBox="0 0 220 120" style="width: 100%; max-width: 28cqw;" aria-label="一念から三千世界への図">
          <!-- 一念 circle -->
          <circle cx="50" cy="60" r="32" fill="#e8f4fd" stroke="#3b82f6" stroke-width="2.5"/>
          <text x="50" y="55" text-anchor="middle" font-size="10" fill="#1e40af" font-weight="bold"><tspan x="50" dy="0">一念</tspan></text>
          <text x="50" y="70" text-anchor="middle" font-size="7.5" fill="#3b82f6">（心の一瞬）</text>
          <!-- Arrow -->
          <line x1="85" y1="60" x2="130" y2="60" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
          <polygon points="130,54 143,60 130,66" fill="#f59e0b"/>
          <!-- 三千世界 circle -->
          <circle cx="178" cy="60" r="38" fill="#fef9e7" stroke="#f59e0b" stroke-width="2.5"/>
          <text x="178" y="54" text-anchor="middle" font-size="10" fill="#92400e" font-weight="bold">三千世界</text>
          <text x="178" y="68" text-anchor="middle" font-size="7.5" fill="#b45309">（宇宙のすべて）</text>
        </svg>
      </div>
      <div class="card flex-1" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 1cqw;">三千とは？</div>
        <div class="slide-small" style="line-height: 1.8;">
          10（<ruby>十界<rt>じっかい</rt></ruby>）<br>
          × 10（<ruby>互具<rt>ごぐ</rt></ruby>）<br>
          × 10（<ruby>如是<rt>にょぜ</rt></ruby>）<br>
          × 3（<ruby>三世間<rt>さんせけん</rt></ruby>）<br>
          <strong style="font-size: 2.2cqw; color: var(--accent, #3b82f6);">＝ 3,000</strong>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function slide06QuizCh1() {
  return `<section class="slide slide-quiz" data-notes="答えは①です。御書は日蓮大聖人の直筆の手紙や論文をまとめたものです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第１章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      「<ruby>御書<rt>ごしょ</rt></ruby>」とは何のことでしょうか？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        <ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>が書いた手紙や論文
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        仏教の<ruby>経典<rt>きょうてん</rt></ruby>（お経）のこと
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        <ruby>創価学会<rt>そうかがっかい</rt></ruby>の会則
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        日本の古典文学
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ <ruby>御書<rt>ごしょ</rt></ruby>とは<ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>が書き残した手紙や論文のことです。約700編が現存し、<ruby>創価学会<rt>そうかがっかい</rt></ruby>では信仰実践の基本として大切にしています。
    </div>
  </div>
</section>`;
}

function slide07BridgeCh2() {
  return `<section class="slide slide-bridge" data-notes="第2章では一生成仏と広宣流布について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">2</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第２章</div>
    <div class="slide-h1" style="font-size: 6.5cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>一生成仏<rt>いっしょうじょうぶつ</rt></ruby>と<ruby>広宣流布<rt>こうせんるふ</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      この一生で必ず幸福になれる
    </div>
  </div>
</section>`;
}

function slide08Issho() {
  return `<section class="slide" data-notes="一生成仏は法華経・日蓮仏法の核心です。難しい修行をしなくても、この一生で成仏できるという教えです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第２章</div>
    <h2 class="slide-h2"><ruby>一生成仏<rt>いっしょうじょうぶつ</rt></ruby>とは？</h2>
    <div class="text-center" style="padding: 2cqw 0;">
      <div class="slide-accent" style="font-size: 4cqw; font-weight: 800; line-height: 1.3;">「この一生で<br><ruby>仏<rt>ほとけ</rt></ruby>に<ruby>成<rt>な</rt></ruby>ること」</div>
    </div>
    <div class="flex-row gap-2">
      <div class="card flex-1 text-center" style="padding: 2cqw 1cqw;">
        <div style="font-size: 3cqw; margin-bottom: 1cqw;">🌱</div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw;">今世で</div>
        <div class="slide-small">何度も生まれ変わらなくてよい</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw 1cqw;">
        <div style="font-size: 3cqw; margin-bottom: 1cqw;">🙏</div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw;">誰でも</div>
        <div class="slide-small">特別な修行不要</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw 1cqw;">
        <div style="font-size: 3cqw; margin-bottom: 1cqw;">✨</div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw;">必ず</div>
        <div class="slide-small"><ruby>南無妙法蓮華経<rt>なむみょうほうれんげきょう</rt></ruby>で実現</div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 1cqw;">
      <svg viewBox="0 0 80 90" style="width: 14cqw;" aria-label="人物と後光のイラスト">
        <!-- Halo/glow -->
        <circle cx="40" cy="22" r="20" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.5"/>
        <circle cx="40" cy="22" r="26" fill="none" stroke="#f59e0b" stroke-width="1" opacity="0.25"/>
        <!-- Head -->
        <circle cx="40" cy="22" r="12" fill="#fed7aa" stroke="#d97706" stroke-width="1.5"/>
        <!-- Body -->
        <path d="M24 52 Q40 44 56 52 L58 82 H22 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Arms -->
        <line x1="24" y1="56" x2="12" y2="70" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/>
        <line x1="56" y1="56" x2="68" y2="70" stroke="#fed7aa" stroke-width="5" stroke-linecap="round"/>
      </svg>
    </div>
  </div>
</section>`;
}

function slide09Honzon() {
  return `<section class="slide" data-notes="本門の本尊は日蓮大聖人が末法の衆生のために顕された御本尊のことです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第２章</div>
    <h2 class="slide-h2"><ruby>本門<rt>ほんもん</rt></ruby>の<ruby>本尊<rt>ほんぞん</rt></ruby></h2>
    <div class="highlight-box" style="font-size: 1.8cqw;">
      身延において大聖人は、<ruby>三大秘法<rt>さんだいひほう</rt></ruby>（<ruby>本門<rt>ほんもん</rt></ruby>の<ruby>本尊<rt>ほんぞん</rt></ruby>・<ruby>本門<rt>ほんもん</rt></ruby>の<ruby>戒壇<rt>かいだん</rt></ruby>・<ruby>本門<rt>ほんもん</rt></ruby>の<ruby>題目<rt>だいもく</rt></ruby>）を明らかにされました。
    </div>
    <div class="highlight-box" style="font-size: 2.2cqw; text-align: center;">
      <ruby>御本尊<rt>ごほんぞん</rt></ruby>は「<ruby>南無妙法蓮華経<rt>なむみょうほうれんげきょう</rt></ruby>」と<ruby>刻<rt>きざ</rt></ruby>まれた<ruby>曼荼羅<rt>まんだら</rt></ruby>のことです
    </div>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.8cqw;">① 信仰の対象</div>
        <div class="slide-small"><ruby>御本尊<rt>ごほんぞん</rt></ruby>に向かって<ruby>題目<rt>だいもく</rt></ruby>を唱えます</div>
      </div>
      <div class="card flex-1" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.8cqw;">② 自分の仏界を呼び覚ます鏡</div>
        <div class="slide-small">御本尊は外にあるものではなく、自分の<ruby>仏界<rt>ぶっかい</rt></ruby>を映す鏡です</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide10Daimoku() {
  return `<section class="slide" data-notes="南無妙法蓮華経を唱えることを「題目を唱える」といいます。これが日蓮仏法の根本的な実践です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第２章</div>
    <h2 class="slide-h2"><ruby>本門<rt>ほんもん</rt></ruby>の<ruby>題目<rt>だいもく</rt></ruby></h2>
    <div class="text-center" style="padding: 1.5cqw 0;">
      <div class="slide-h1 slide-accent" style="font-size: 5.5cqw; font-weight: 900; letter-spacing: 0.05em;">
        <ruby>南無妙法蓮華経<rt>なむみょうほうれんげきょう</rt></ruby>
      </div>
    </div>
    <div class="slide-body text-center" style="font-size: 2.2cqw; line-height: 1.7;">
      「<ruby>南無<rt>なむ</rt></ruby>」＝<ruby>帰命<rt>きみょう</rt></ruby>（命がけで従う）　「<ruby>妙法蓮華経<rt>みょうほうれんげきょう</rt></ruby>」＝<ruby>法華経<rt>ほけきょう</rt></ruby>
    </div>
    <div class="flex-row gap-2">
      <div class="card flex-1 text-center" style="padding: 1.8cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.5cqw;">🙏</div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700;">唱える</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 1.8cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.5cqw;">💛</div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700;">信じる</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 1.8cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.5cqw;">🌟</div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700;">実践する</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide11Kaidan() {
  return `<section class="slide" data-notes="戒壇とは御本尊を安置し、題目を唱える場所のことです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第２章</div>
    <h2 class="slide-h2"><ruby>本門<rt>ほんもん</rt></ruby>の<ruby>戒壇<rt>かいだん</rt></ruby></h2>
    <p class="slide-body">
      <ruby>御本尊<rt>ごほんぞん</rt></ruby>がまつられる場所・空間のことです。
    </p>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="highlight-box flex-1" style="padding: 2.5cqw;">
        <div class="slide-accent" style="font-size: 2.4cqw; font-weight: 700; margin-bottom: 1cqw;"><ruby>自界<rt>じかい</rt></ruby>の<ruby>戒壇<rt>かいだん</rt></ruby></div>
        <div class="slide-body" style="font-size: 2cqw;">自分の心（どこにいても）</div>
      </div>
      <div class="highlight-box flex-1" style="padding: 2.5cqw;">
        <div class="slide-accent" style="font-size: 2.4cqw; font-weight: 700; margin-bottom: 1cqw;"><ruby>事<rt>じ</rt></ruby>の<ruby>戒壇<rt>かいだん</rt></ruby></div>
        <div class="slide-body" style="font-size: 2cqw;">実際に<ruby>題目<rt>だいもく</rt></ruby>を唱える場所</div>
      </div>
    </div>
    <div class="card" style="background: #fffbeb; border: 2px dashed #f59e0b; padding: 1.5cqw 2cqw; font-size: 2.2cqw; text-align: center;">
      🏠 家庭の仏壇も「<ruby>戒壇<rt>かいだん</rt></ruby>」です
    </div>
  </div>
</section>`;
}

function slide12Kosenrufu() {
  return `<section class="slide" data-notes="広宣流布は創価学会の根本的な使命です。一人ひとりの幸福の実現が、社会・世界の平和につながるという考え方です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第２章</div>
    <h2 class="slide-h2"><ruby>広宣流布<rt>こうせんるふ</rt></ruby>とは？</h2>
    <p class="slide-body">
      <ruby>法華経<rt>ほけきょう</rt></ruby>・<ruby>日蓮仏法<rt>にちれんぶっぽう</rt></ruby>を広く世界に広めること
    </p>
    <div class="flex-row gap-1 items-center" style="justify-content: center; padding: 1cqw 0;">
      <div class="card text-center" style="padding: 1.5cqw 2cqw; flex: 1;">
        <div style="font-size: 2.2cqw;">👤</div>
        <div class="slide-small" style="margin-top: 0.5cqw;">個人の幸福</div>
      </div>
      <div style="font-size: 3cqw; color: #f59e0b; font-weight: 900;">→</div>
      <div class="card text-center" style="padding: 1.5cqw 2cqw; flex: 1;">
        <div style="font-size: 2.2cqw;">🏘️</div>
        <div class="slide-small" style="margin-top: 0.5cqw;">地域の平和</div>
      </div>
      <div style="font-size: 3cqw; color: #f59e0b; font-weight: 900;">→</div>
      <div class="card text-center" style="padding: 1.5cqw 2cqw; flex: 1;">
        <div style="font-size: 2.2cqw;">
          <svg viewBox="0 0 40 40" style="width: 3cqw; height: 3cqw; display: inline-block;" aria-label="地球">
            <circle cx="20" cy="20" r="17" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
            <ellipse cx="20" cy="20" rx="8" ry="17" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
            <line x1="3" y1="20" x2="37" y2="20" stroke="#3b82f6" stroke-width="1.5"/>
            <line x1="8" y1="11" x2="32" y2="11" stroke="#3b82f6" stroke-width="1"/>
            <line x1="8" y1="29" x2="32" y2="29" stroke="#3b82f6" stroke-width="1"/>
          </svg>
        </div>
        <div class="slide-small" style="margin-top: 0.5cqw;">世界の平和</div>
      </div>
    </div>
    <div class="gosho-quote">
      <div class="gosho-text">「『<ruby>大願<rt>だいがん</rt></ruby>』とは、<ruby>法華弘通<rt>ほっけぐずう</rt></ruby>なり」</div>
      <div class="gosho-source">（新1027・全736）</div>
    </div>
  </div>
</section>`;
}

function slide13QuizCh2() {
  return `<section class="slide slide-quiz" data-notes="答えは①です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第２章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      「<ruby>一生成仏<rt>いっしょうじょうぶつ</rt></ruby>」の意味として正しいものはどれ？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        この一生で仏になること（今世での<ruby>成仏<rt>じょうぶつ</rt></ruby>）
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        死後に仏になること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        修行を積んで来世で<ruby>成仏<rt>じょうぶつ</rt></ruby>すること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        仏像を一生拝み続けること
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ <ruby>一生成仏<rt>いっしょうじょうぶつ</rt></ruby>とは「この一生（今世）で仏に成ること」です。何度も生まれ変わる必要なく、<ruby>南無妙法蓮華経<rt>なむみょうほうれんげきょう</rt></ruby>の実践によってこの一生で<ruby>成仏<rt>じょうぶつ</rt></ruby>できるという教えです。
    </div>
  </div>
</section>`;
}

function slide14BridgeCh3() {
  return `<section class="slide slide-bridge" data-notes="第3章では十界について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">3</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第３章</div>
    <div class="slide-h1" style="font-size: 7cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>十界<rt>じっかい</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      生命の10の状態を知ろう
    </div>
  </div>
</section>`;
}

function slide15Jikkai() {
  return `<section class="slide" data-notes="十界は一つひとつの境涯ではなく、私たちが瞬間瞬間に体験する生命の状態です。">
  <div class="slide-pad-sm h-full flex-col gap-2">
    <div class="section-label">第３章</div>
    <h2 class="slide-h2" style="margin-bottom: 0.5cqw;"><ruby>十界<rt>じっかい</rt></ruby>って何？</h2>
    <p class="slide-small" style="margin-bottom: 0.8cqw;">
      生命が持つ10種類の<ruby>境涯<rt>きょうがい</rt></ruby>（心の状態）のこと。誰の中にも、この10の状態がすべて含まれています。
    </p>
    <div class="flex-row gap-3" style="flex: 1; align-items: stretch;">

      <!-- 六道 -->
      <div style="flex: 1.2; display: flex; flex-direction: column; gap: 0.5cqw;">
        <div style="font-size: 1.2cqw; font-weight: 700; color: var(--c-sub); letter-spacing: 0.08em; padding-bottom: 0.3cqw; border-bottom: 2px solid #e2e8f0;"><ruby>六道<rt>ろくどう</rt></ruby> — 迷いの世界</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5cqw; flex: 1;">
          <div style="background:#fef2f2; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw;">
            <span style="font-size:2cqw;">😣</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>地獄界<rt>じごくかい</rt></ruby></span>
          </div>
          <div style="background:#fff7ed; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw;">
            <span style="font-size:2cqw;">😩</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>餓鬼界<rt>がきかい</rt></ruby></span>
          </div>
          <div style="background:#fefce8; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw;">
            <span style="font-size:2cqw;">😤</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>畜生界<rt>ちくしょうかい</rt></ruby></span>
          </div>
          <div style="background:#f0fdf4; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw;">
            <span style="font-size:2cqw;">😠</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>修羅界<rt>しゅらかい</rt></ruby></span>
          </div>
          <div style="background:#f0f9ff; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw;">
            <span style="font-size:2cqw;">😊</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>人界<rt>にんかい</rt></ruby></span>
          </div>
          <div style="background:#eff6ff; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw;">
            <span style="font-size:2cqw;">😄</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>天界<rt>てんかい</rt></ruby></span>
          </div>
        </div>
      </div>

      <!-- 矢印 -->
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; color:var(--c-accent); gap:0.4cqw;">
        <span style="font-size:2.2cqw;">→</span>
        <span style="font-size:1cqw; color:var(--c-sub); writing-mode:vertical-rl; letter-spacing:0.1em;">高まる</span>
      </div>

      <!-- 四聖 -->
      <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5cqw;">
        <div style="font-size: 1.2cqw; font-weight: 700; color: var(--c-sub); letter-spacing: 0.08em; padding-bottom: 0.3cqw; border-bottom: 2px solid #e2e8f0;"><ruby>四聖<rt>ししょう</rt></ruby> — 悟りの世界</div>
        <div style="display:flex; flex-direction:column; gap:0.5cqw; flex:1;">
          <div style="background:#f5f3ff; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw; flex:1;">
            <span style="font-size:2cqw;">👂</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>声聞界<rt>しょうもんかい</rt></ruby></span>
          </div>
          <div style="background:#fdf4ff; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw; flex:1;">
            <span style="font-size:2cqw;">🌿</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>縁覚界<rt>えんがくかい</rt></ruby></span>
          </div>
          <div style="background:#f0fdf4; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw; flex:1;">
            <span style="font-size:2cqw;">🙏</span><span style="font-size:1.5cqw; font-weight:700;"><ruby>菩薩界<rt>ぼさつかい</rt></ruby></span>
          </div>
          <div style="background:#fefce8; border-radius:10px; padding:0.7cqw 1cqw; display:flex; align-items:center; gap:0.7cqw; flex:1; border:2px solid var(--c-accent);">
            <span style="font-size:2cqw;">✨</span>
            <div>
              <div style="font-size:1.5cqw; font-weight:700; color:var(--c-accent);"><ruby>仏界<rt>ぶっかい</rt></ruby></div>
              <div style="font-size:1cqw; color:var(--c-sub);">誰もが持つ最高の境涯</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>`;
}

function slide16Rokudo() {
  return `<section class="slide" data-notes="六道は苦しみを繰り返す世界とも言われます。しかし仏法では、これらの境涯も自分の生命の一部と捉えます。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第３章</div>
    <h2 class="slide-h2"><ruby>六道<rt>ろくどう</rt></ruby>の世界</h2>
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5cqw; flex: 1;">
      <div class="card" style="padding: 1.5cqw; text-align: center;">
        <div style="font-size: 2.8cqw;">😢</div>
        <div class="slide-accent" style="font-size: 1.8cqw; font-weight: 700; margin: 0.4cqw 0;"><ruby>地獄界<rt>じごくかい</rt></ruby></div>
        <div class="slide-small">苦しみで身動きできない状態</div>
      </div>
      <div class="card" style="padding: 1.5cqw; text-align: center;">
        <div style="font-size: 2.8cqw;">😩</div>
        <div class="slide-accent" style="font-size: 1.8cqw; font-weight: 700; margin: 0.4cqw 0;"><ruby>餓鬼界<rt>がきかい</rt></ruby></div>
        <div class="slide-small">欲しくても満たされない状態</div>
      </div>
      <div class="card" style="padding: 1.5cqw; text-align: center;">
        <div style="font-size: 2.8cqw;">😤</div>
        <div class="slide-accent" style="font-size: 1.8cqw; font-weight: 700; margin: 0.4cqw 0;"><ruby>畜生界<rt>ちくしょうかい</rt></ruby></div>
        <div class="slide-small">本能だけで動く状態</div>
      </div>
      <div class="card" style="padding: 1.5cqw; text-align: center;">
        <div style="font-size: 2.8cqw;">😠</div>
        <div class="slide-accent" style="font-size: 1.8cqw; font-weight: 700; margin: 0.4cqw 0;"><ruby>修羅界<rt>しゅらかい</rt></ruby></div>
        <div class="slide-small">勝ちたい・争いたい状態</div>
      </div>
      <div class="card" style="padding: 1.5cqw; text-align: center;">
        <div style="font-size: 2.8cqw;">😊</div>
        <div class="slide-accent" style="font-size: 1.8cqw; font-weight: 700; margin: 0.4cqw 0;"><ruby>人界<rt>にんかい</rt></ruby></div>
        <div class="slide-small">穏やかに理性的な状態</div>
      </div>
      <div class="card" style="padding: 1.5cqw; text-align: center;">
        <div style="font-size: 2.8cqw;">😄</div>
        <div class="slide-accent" style="font-size: 1.8cqw; font-weight: 700; margin: 0.4cqw 0;"><ruby>天界<rt>てんかい</rt></ruby></div>
        <div class="slide-small">喜びに満ちた状態</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide17Shisho() {
  return `<section class="slide" data-notes="四聖は六道より高い境涯とされます。特に仏界は、すべての生命が持つ根本の状態です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第３章</div>
    <h2 class="slide-h2"><ruby>四聖<rt>ししょう</rt></ruby>の世界</h2>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1" style="padding: 2cqw; text-align: center;">
        <div style="font-size: 2.5cqw; margin-bottom: 0.5cqw;">👂</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.8cqw;"><ruby>声聞界<rt>しょうもんかい</rt></ruby></div>
        <div class="slide-small">教えを聞いて悟りを求める</div>
      </div>
      <div class="card flex-1" style="padding: 2cqw; text-align: center;">
        <div style="font-size: 2.5cqw; margin-bottom: 0.5cqw;">🌿</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.8cqw;"><ruby>縁覚界<rt>えんがくかい</rt></ruby></div>
        <div class="slide-small">自然や縁から悟りを求める</div>
      </div>
      <div class="card flex-1" style="padding: 2cqw; text-align: center;">
        <div style="font-size: 2.5cqw; margin-bottom: 0.5cqw;">🤝</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.8cqw;"><ruby>菩薩界<rt>ぼさつかい</rt></ruby></div>
        <div class="slide-small">他者の幸福のために動く</div>
      </div>
      <div class="card flex-1" style="padding: 2cqw; text-align: center; border: 2px solid #f59e0b;">
        <div style="font-size: 2.5cqw; margin-bottom: 0.5cqw;">✨</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.8cqw; color: #d97706;"><ruby>仏界<rt>ぶっかい</rt></ruby></div>
        <div class="slide-small">完全な<ruby>智慧<rt>ちえ</rt></ruby>と<ruby>慈悲<rt>じひ</rt></ruby>の状態</div>
      </div>
    </div>
    <div class="highlight-box" style="text-align: center; font-size: 2.2cqw;">
      <ruby>仏界<rt>ぶっかい</rt></ruby>こそが、私たちが目指す究極の<ruby>境涯<rt>きょうがい</rt></ruby>です
    </div>
  </div>
</section>`;
}

function slide18Jikkaigugu() {
  return `<section class="slide" data-notes="十界互具はすべての人が成仏できる根拠です。どんなに苦しい状態にある人も、その中に仏界があります。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第３章</div>
    <h2 class="slide-h2"><ruby>十界互具<rt>じっかいごぐ</rt></ruby></h2>
    <div class="flex-row gap-2" style="flex: 1;">
      <div style="display: flex; align-items: center; justify-content: center; flex: 1;">
        <svg viewBox="0 0 180 180" style="width: 100%; max-width: 22cqw;" aria-label="十界互具の円形図">
          <!-- Outer ring segments for 10 realms -->
          <circle cx="90" cy="90" r="80" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
          <!-- 10 segments -->
          <path d="M90,90 L90,10 A80,80 0 0,1 164,45 Z" fill="#fecaca" stroke="white" stroke-width="1.5"/>
          <path d="M90,90 L164,45 A80,80 0 0,1 164,135 Z" fill="#fed7aa" stroke="white" stroke-width="1.5"/>
          <path d="M90,90 L164,135 A80,80 0 0,1 90,170 Z" fill="#fef08a" stroke="white" stroke-width="1.5"/>
          <path d="M90,90 L90,170 A80,80 0 0,1 16,135 Z" fill="#bbf7d0" stroke="white" stroke-width="1.5"/>
          <path d="M90,90 L16,135 A80,80 0 0,1 16,45 Z" fill="#bae6fd" stroke="white" stroke-width="1.5"/>
          <path d="M90,90 L16,45 A80,80 0 0,1 90,10 Z" fill="#ddd6fe" stroke="white" stroke-width="1.5"/>
          <!-- Inner circle for each segment (representing互具) -->
          <circle cx="90" cy="36" r="7" fill="white" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>
          <circle cx="140" cy="68" r="7" fill="white" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>
          <circle cx="140" cy="112" r="7" fill="white" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>
          <circle cx="90" cy="145" r="7" fill="white" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>
          <circle cx="40" cy="112" r="7" fill="white" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>
          <circle cx="40" cy="68" r="7" fill="white" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>
          <!-- Center -->
          <circle cx="90" cy="90" r="22" fill="#fef9e7" stroke="#f59e0b" stroke-width="2"/>
          <text x="90" y="87" text-anchor="middle" font-size="8" fill="#92400e" font-weight="bold">十界</text>
          <text x="90" y="98" text-anchor="middle" font-size="8" fill="#92400e" font-weight="bold">互具</text>
        </svg>
      </div>
      <div class="flex-col gap-2 flex-1">
        <p class="slide-body" style="font-size: 2.1cqw;">
          どの<ruby>境涯<rt>きょうがい</rt></ruby>の中にも、残りの9つの境涯がすべて含まれています
        </p>
        <div class="highlight-box" style="font-size: 1.9cqw; padding: 1.5cqw;">
          だから「<ruby>地獄<rt>じごく</rt></ruby>にいる人」でも<ruby>仏界<rt>ぶっかい</rt></ruby>の可能性がある
        </div>
        <div class="highlight-box" style="font-size: 1.9cqw; padding: 1.5cqw;">
          だから「普通の人」でも仏になれる
        </div>
        <div class="highlight-box" style="font-size: 1.9cqw; padding: 1.5cqw;">
          これが「<ruby>十界互具<rt>じっかいごぐ</rt></ruby>」の法理です。誰もが<ruby>仏界<rt>ぶっかい</rt></ruby>を開く可能性を持っています。
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function slide19QuizCh3() {
  return `<section class="slide slide-quiz" data-notes="答えは①です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第３章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      <ruby>十界互具<rt>じっかいごぐ</rt></ruby>の説明として正しいものは？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        どの<ruby>境涯<rt>きょうがい</rt></ruby>の中にも10の境涯すべてが含まれている
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        十の境涯は別々に存在している
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        <ruby>仏界<rt>ぶっかい</rt></ruby>の人は<ruby>地獄界<rt>じごくかい</rt></ruby>を体験できない
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        <ruby>境涯<rt>きょうがい</rt></ruby>は生まれつき決まっている
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ <ruby>十界互具<rt>じっかいごぐ</rt></ruby>とは、どの<ruby>境涯<rt>きょうがい</rt></ruby>の中にも残りの9つの境涯がすべて含まれているという意味です。だからこそ、どんな人も<ruby>仏界<rt>ぶっかい</rt></ruby>を開くことができます。
    </div>
  </div>
</section>`;
}

function slide20BridgeCh4() {
  return `<section class="slide slide-bridge" data-notes="第4章では三証について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">4</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第４章</div>
    <div class="slide-h1" style="font-size: 7cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>三証<rt>さんしょう</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      正しい教えを見分ける3つの基準
    </div>
  </div>
</section>`;
}

function slide21Sannsho() {
  return `<section class="slide" data-notes="三証は教えの正しさを判断する基準です。特に現証（実際の結果）を重視するのが日蓮仏法の特徴です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第４章</div>
    <h2 class="slide-h2"><ruby>三証<rt>さんしょう</rt></ruby>とは？</h2>
    <p class="slide-body">
      正しい仏法かどうかを判断する3つの<ruby>証明<rt>しょうめい</rt></ruby>の基準です。
    </p>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1" style="padding: 2.5cqw; text-align: center; border-top: 4px solid #3b82f6;">
        <div style="font-size: 3cqw; margin-bottom: 1cqw;">📚</div>
        <div class="slide-accent" style="font-size: 2.5cqw; font-weight: 800; margin-bottom: 1cqw;"><ruby>文証<rt>もんしょう</rt></ruby></div>
        <div class="slide-small"><ruby>経典<rt>きょうてん</rt></ruby>・<ruby>御書<rt>ごしょ</rt></ruby>などの文にもとづいているか</div>
      </div>
      <div class="card flex-1" style="padding: 2.5cqw; text-align: center; border-top: 4px solid #8b5cf6;">
        <div style="font-size: 3cqw; margin-bottom: 1cqw;">🧠</div>
        <div class="slide-accent" style="font-size: 2.5cqw; font-weight: 800; margin-bottom: 1cqw;"><ruby>理証<rt>りしょう</rt></ruby></div>
        <div class="slide-small">道理・論理にかなっているか</div>
      </div>
      <div class="card flex-1" style="padding: 2.5cqw; text-align: center; border-top: 4px solid #f59e0b;">
        <div style="font-size: 3cqw; margin-bottom: 1cqw;">⭐</div>
        <div class="slide-accent" style="font-size: 2.5cqw; font-weight: 800; margin-bottom: 1cqw; color: #d97706;"><ruby>現証<rt>げんしょう</rt></ruby></div>
        <div class="slide-small">実際の結果・証拠があるか</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      最も重要なのは「<ruby>現証<rt>げんしょう</rt></ruby>」。実際の生活で幸せになれるかどうかが一番の<ruby>証明<rt>しょうめい</rt></ruby>です。
    </div>
  </div>
</section>`;
}

function slide22QuizCh4() {
  return `<section class="slide slide-quiz" data-notes="答えは①現証です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第４章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      <ruby>三証<rt>さんしょう</rt></ruby>の中で「実際の結果・証拠」を意味するものは？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        <ruby>現証<rt>げんしょう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        <ruby>文証<rt>もんしょう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        <ruby>理証<rt>りしょう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        <ruby>仏証<rt>ぶっしょう</rt></ruby>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ <ruby>現証<rt>げんしょう</rt></ruby>とは実際の結果・証拠のことです。<ruby>三証<rt>さんしょう</rt></ruby>の中でも<ruby>現証<rt>げんしょう</rt></ruby>がもっとも重要とされます。信仰実践によって実際の生活が好転することが、正しい仏法の証明になります。
    </div>
  </div>
</section>`;
}

function slide23BridgeCh5() {
  return `<section class="slide slide-bridge" data-notes="第5章では信行学について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">5</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第５章</div>
    <div class="slide-h1" style="font-size: 7cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>信行学<rt>しんぎょうがく</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      信じて・実践して・学ぶ
    </div>
  </div>
</section>`;
}

function slide24Shin() {
  return `<section class="slide" data-notes="信は単に「信じる」だけでなく、実際の行動につながる確信のことです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第５章</div>
    <h2 class="slide-h2"><ruby>信<rt>しん</rt></ruby> — まず信じることから</h2>
    <p class="slide-body">
      <ruby>日蓮仏法<rt>にちれんぶっぽう</rt></ruby>の実践の第一歩は「信じること」です。
    </p>
    <div class="card" style="background: #fffbeb; border: 2px solid #f59e0b; padding: 2cqw; text-align: center;">
      <div class="slide-accent" style="font-size: 2.8cqw; font-weight: 700;">
        <ruby>純粋<rt>じゅんすい</rt></ruby>に「これは正しい」と心から信じること
      </div>
    </div>
    <div class="flex-row gap-2">
      <div class="highlight-box flex-1" style="font-size: 2cqw; padding: 1.5cqw;">
        ① 疑いを持たず<ruby>御本尊<rt>ごほんぞん</rt></ruby>に<ruby>向<rt>む</rt></ruby>かう
      </div>
      <div class="highlight-box flex-1" style="font-size: 2cqw; padding: 1.5cqw;">
        ② <ruby>題目<rt>だいもく</rt></ruby>を唱え続ける信心
      </div>
    </div>
    <div class="gosho-quote">
      <div class="gosho-text">「<ruby>汝舎利弗<rt>なんじしゃりほつ</rt></ruby>すら　<ruby>尚<rt>なお</rt></ruby>この<ruby>経<rt>きょう</rt></ruby>に<ruby>於<rt>おい</rt></ruby>ては　<ruby>信<rt>しん</rt></ruby>を<ruby>以<rt>もっ</rt></ruby>て<ruby>入<rt>い</rt></ruby>ることを<ruby>得<rt>え</rt></ruby>たり」</div>
      <div class="gosho-source">— <ruby>法華経<rt>ほけきょう</rt></ruby>197ページ（<ruby>以信代入<rt>いしんだいにゅう</rt></ruby>）</div>
    </div>
  </div>
</section>`;
}

function slide25Gyo() {
  return `<section class="slide" data-notes="行には自分のための実践（自行）と他者のための実践（化他行）があります。両方が大切です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第５章</div>
    <h2 class="slide-h2"><ruby>行<rt>ぎょう</rt></ruby> — 実践すること</h2>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1" style="padding: 2.5cqw; border-top: 4px solid #3b82f6;">
        <div class="slide-accent" style="font-size: 2.4cqw; font-weight: 700; margin-bottom: 1.5cqw; text-align: center;">
          <ruby>自行<rt>じぎょう</rt></ruby><br><span style="font-size: 1.6cqw; font-weight: 400;">（自分の実践）</span>
        </div>
        <div class="slide-body" style="font-size: 2cqw; text-align: center;">
          毎日の<ruby>勤行<rt>ごんぎょう</rt></ruby>・<ruby>唱題<rt>しょうだい</rt></ruby>
        </div>
        <div style="text-align: center; margin-top: 1.5cqw; font-size: 2.5cqw;">🙏</div>
      </div>
      <div class="card flex-1" style="padding: 2.5cqw; border-top: 4px solid #22c55e;">
        <div class="slide-accent" style="font-size: 2.4cqw; font-weight: 700; margin-bottom: 1.5cqw; text-align: center;">
          <ruby>化他行<rt>けたぎょう</rt></ruby><br><span style="font-size: 1.6cqw; font-weight: 400;">（他者への実践）</span>
        </div>
        <div class="slide-body" style="font-size: 2cqw; text-align: center;">
          仏法を伝えること
        </div>
        <div style="text-align: center; margin-top: 1.5cqw; font-size: 2.5cqw;">💬</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      「<ruby>行<rt>ぎょう</rt></ruby>」は毎日の積み重ねが大切です。少しずつでも続けることが力になります。
    </div>
    <div style="display: flex; justify-content: center;">
      <svg viewBox="0 0 80 50" style="width: 16cqw;" aria-label="日の出のアイコン（毎日の実践を表す）">
        <!-- Sun rays -->
        <line x1="40" y1="5"  x2="40" y2="0"  stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
        <line x1="58" y1="11" x2="63" y2="7"  stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
        <line x1="68" y1="26" x2="74" y2="24" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
        <line x1="22" y1="11" x2="17" y2="7"  stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
        <line x1="12" y1="26" x2="6"  y2="24" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
        <!-- Sun half circle -->
        <path d="M18,35 A22,22 0 0,1 62,35" fill="#fef08a" stroke="#f59e0b" stroke-width="2"/>
        <!-- Horizon line -->
        <line x1="4" y1="35" x2="76" y2="35" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Ground glow -->
        <path d="M10,40 Q40,37 70,40" fill="none" stroke="#fde68a" stroke-width="1.5" opacity="0.7"/>
      </svg>
    </div>
  </div>
</section>`;
}

// ── Part 2: slide26〜slide50 ──

function slide26Gaku() {
  return `<section class="slide" data-notes="信行学は別々ではなく、三つが一体となって実践されます。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第５章</div>
    <h2 class="slide-h2"><ruby>学<rt>がく</rt></ruby> — 学び続けること</h2>
    <p class="slide-body">
      御書を読む、<ruby>座談会<rt>ざだんかい</rt></ruby>に参加する、仏法を深く学ぶことが「学」です。
    </p>
    <div class="flex-row gap-2">
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">📖</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700;">①御書を読む</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">💬</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700;">②仏法を語り合う</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">🎓</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700;">③歴史・哲学を学ぶ</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      「学」は信心と行動に深みを加えます。学べば学ぶほど信が深まる。
    </div>
  </div>
</section>`;
}

function slide27ShinGyoGaku() {
  return `<section class="slide" data-notes="信行学は互いに補い合う実践の三要素です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第５章</div>
    <h2 class="slide-h2"><ruby>信行学<rt>しんぎょうがく</rt></ruby>は一体</h2>
    <div class="flex-row gap-3 items-center" style="flex: 1;">
      <div style="display: flex; justify-content: center; flex: 1;">
        <svg viewBox="0 0 200 180" style="width: 100%; max-width: 26cqw;" aria-label="信行学の三角形の図">
          <!-- Triangle lines -->
          <line x1="100" y1="20" x2="30" y2="155" stroke="#3b82f6" stroke-width="2.5"/>
          <line x1="100" y1="20" x2="170" y2="155" stroke="#3b82f6" stroke-width="2.5"/>
          <line x1="30" y1="155" x2="170" y2="155" stroke="#3b82f6" stroke-width="2.5"/>
          <!-- Corner circles -->
          <circle cx="100" cy="20" r="22" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.5"/>
          <text x="100" y="16" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="bold">信</text>
          <text x="100" y="29" text-anchor="middle" font-size="7.5" fill="#3b82f6">しん</text>
          <circle cx="30" cy="155" r="22" fill="#dcfce7" stroke="#22c55e" stroke-width="2.5"/>
          <text x="30" y="151" text-anchor="middle" font-size="11" fill="#15803d" font-weight="bold">行</text>
          <text x="30" y="164" text-anchor="middle" font-size="7.5" fill="#22c55e">ぎょう</text>
          <circle cx="170" cy="155" r="22" fill="#fef9c3" stroke="#f59e0b" stroke-width="2.5"/>
          <text x="170" y="151" text-anchor="middle" font-size="11" fill="#92400e" font-weight="bold">学</text>
          <text x="170" y="164" text-anchor="middle" font-size="7.5" fill="#f59e0b">がく</text>
          <!-- Center label -->
          <circle cx="100" cy="115" r="18" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="100" y="112" text-anchor="middle" font-size="9.5" fill="#92400e" font-weight="bold">成仏</text>
          <text x="100" y="124" text-anchor="middle" font-size="7" fill="#b45309">じょうぶつ</text>
        </svg>
      </div>
      <div class="flex-col gap-2 flex-1">
        <p class="slide-body" style="font-size: 2.1cqw;">
          信・行・学は車の三つの輪。一つが欠けても前へ進めません。
        </p>
        <div class="gosho-quote">
          <div class="gosho-text">「<ruby>行学<rt>ぎょうがく</rt></ruby>の二道をはげみ<ruby>候<rt>そうろう</rt></ruby>べし。<ruby>行学<rt>ぎょうがく</rt></ruby>たえなば<ruby>仏法<rt>ぶっぽう</rt></ruby>はあるべからず。我もいたし、人をも<ruby>教化<rt>きょうけ</rt></ruby><ruby>候<rt>そうろう</rt></ruby>え。<ruby>行学<rt>ぎょうがく</rt></ruby>は<ruby>信心<rt>しんじん</rt></ruby>よりおこるべく<ruby>候<rt>そうろう</rt></ruby>。<ruby>力<rt>ちから</rt></ruby>あらば<ruby>一文一句<rt>いちもんいっく</rt></ruby>なりともかたらせ<ruby>給<rt>たま</rt></ruby>うべし。」</div>
          <div class="gosho-source">— 諸法実相抄</div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function slide28QuizCh5() {
  return `<section class="slide slide-quiz" data-notes="答えは①化他行です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第５章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      <ruby>信行学<rt>しんぎょうがく</rt></ruby>の「行」において、他者のための実践を何と呼ぶ？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        <ruby>化他行<rt>けたぎょう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        <ruby>自行<rt>じぎょう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        <ruby>勤行<rt>ごんぎょう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        <ruby>唱題<rt>しょうだい</rt></ruby>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ 他者への実践は<ruby>化他行<rt>けたぎょう</rt></ruby>といいます。自分のための実践（自行）と合わせて、両方が「行」の大切な柱です。
    </div>
  </div>
</section>`;
}

function slide29BridgeCh6() {
  return `<section class="slide slide-bridge" data-notes="第6章では宿命転換について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">6</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第６章</div>
    <div class="slide-h1" style="font-size: 6cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>宿命転換<rt>しゅくめいてんかん</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      生まれながらの運命も変えられる
    </div>
  </div>
</section>`;
}

function slide30Shukumyo() {
  return `<section class="slide" data-notes="宿命転換は単なる精神論ではなく、実際の生命変革のことを指します。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第６章</div>
    <h2 class="slide-h2"><ruby>宿命<rt>しゅくめい</rt></ruby>って何？</h2>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1" style="padding: 2.5cqw; border-top: 4px solid #ef4444;">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 1cqw; color: #dc2626;"><ruby>宿命<rt>しゅくめい</rt></ruby></div>
        <div class="slide-body" style="font-size: 2cqw;">
          過去世からの<ruby>業<rt>ごう</rt></ruby>（カルマ）による生まれつきの<ruby>運命<rt>うんめい</rt></ruby>
        </div>
      </div>
      <div class="card flex-1" style="padding: 2.5cqw; border-top: 4px solid #22c55e;">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 1cqw; color: #16a34a;"><ruby>運命<rt>うんめい</rt></ruby></div>
        <div class="slide-body" style="font-size: 2cqw;">
          今世の行動によって変えられるもの
        </div>
      </div>
    </div>
    <p class="slide-body">
      仏法では「生まれながらの運命」も変えることができると教えます。
    </p>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      <ruby>宿業<rt>しゅくごう</rt></ruby>（過去の<ruby>業<rt>ごう</rt></ruby>）は、現在の実践によって転換できる
    </div>
  </div>
</section>`;
}

function slide31Tenkan() {
  return `<section class="slide" data-notes="変毒為薬は苦しみを成長の糧に変えるという日蓮仏法の根本思想です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第６章</div>
    <h2 class="slide-h2">どうやって<ruby>転換<rt>てんかん</rt></ruby>するの？</h2>
    <div style="display: flex; justify-content: center; margin-bottom: 1cqw;">
      <svg viewBox="0 0 340 60" style="width: 100%; max-width: 58cqw;" aria-label="宿命転換の流れ図">
        <rect x="2" y="10" width="88" height="40" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="46" y="27" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">苦しみの</text>
        <text x="46" y="42" text-anchor="middle" font-size="9" fill="#dc2626" font-weight="bold">宿命</text>
        <polygon points="94,30 110,20 110,40" fill="#f59e0b"/>
        <rect x="113" y="5" width="114" height="50" rx="8" fill="#fef9c3" stroke="#f59e0b" stroke-width="2"/>
        <text x="170" y="22" text-anchor="middle" font-size="8.5" fill="#92400e" font-weight="bold">題目を唱える</text>
        <text x="170" y="36" text-anchor="middle" font-size="8.5" fill="#92400e" font-weight="bold">・実践する</text>
        <polygon points="230,30 246,20 246,40" fill="#22c55e"/>
        <rect x="249" y="10" width="88" height="40" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="2"/>
        <text x="293" y="27" text-anchor="middle" font-size="9" fill="#15803d" font-weight="bold">使命に</text>
        <text x="293" y="42" text-anchor="middle" font-size="9" fill="#15803d" font-weight="bold">変わる</text>
      </svg>
    </div>
    <div class="flex-row gap-2">
      <div class="highlight-box flex-1" style="font-size: 1.9cqw; padding: 1.5cqw;">
        <strong><ruby>因果<rt>いんが</rt></ruby>の<ruby>理法<rt>りほう</rt></ruby></strong><br>原因が変われば結果も変わる
      </div>
      <div class="highlight-box flex-1" style="font-size: 1.9cqw; padding: 1.5cqw;">
        <strong><ruby>変毒為薬<rt>へんどくいやく</rt></ruby></strong><br>毒（苦しみ）を薬（力）に変える
      </div>
      <div class="highlight-box flex-1" style="font-size: 1.9cqw; padding: 1.5cqw;">
        <strong><ruby>煩悩即菩提<rt>ぼんのうそくぼだい</rt></ruby></strong><br>悩みがそのまま<ruby>悟<rt>さと</rt></ruby>りの種
      </div>
    </div>
  </div>
</section>`;
}

function slide32QuizCh6() {
  return `<section class="slide slide-quiz" data-notes="答えは①です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第６章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      「<ruby>変毒為薬<rt>へんどくいやく</rt></ruby>」の意味として正しいものは？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        毒（苦しみ）を薬（力・功徳）に変えること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        薬を毒に変えること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        苦しみから逃げること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        運命は変えられないこと
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ <ruby>変毒為薬<rt>へんどくいやく</rt></ruby>とは「毒を変じて薬となす」という意味で、苦しみや悩みをそのまま成長・功徳・力に変えることができるという仏法の教えです。
    </div>
  </div>
</section>`;
}

function slide33BridgeCh7() {
  return `<section class="slide slide-bridge" data-notes="第7章では諸天善神・異体同心・人の振る舞いについて学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">7</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第７章</div>
    <div class="slide-h1" style="font-size: 4.5cqw; line-height: 1.35; margin-bottom: 2.5cqw;">
      <ruby>諸天善神<rt>しょてんぜんじん</rt></ruby>・<ruby>異体同心<rt>いたいどうしん</rt></ruby>・人の<ruby>振<rt>ふ</rt></ruby>る<ruby>舞<rt>ま</rt></ruby>い
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      仏法が社会に広がるとき
    </div>
  </div>
</section>`;
}

function slide34Shoten() {
  return `<section class="slide" data-notes="諸天善神は抽象的な存在ではなく、信心に応じて現れる生命の守護力として捉えられます。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第７章</div>
    <h2 class="slide-h2"><ruby>諸天善神<rt>しょてんぜんじん</rt></ruby></h2>
    <p class="slide-body">
      正しい仏法を守る天の存在たちのことです。
    </p>
    <div style="display: flex; justify-content: center; margin-bottom: 1cqw;">
      <svg viewBox="0 0 160 80" style="width: 100%; max-width: 26cqw;" aria-label="星・天の装飾図形">
        <circle cx="80" cy="40" r="36" fill="#fef9e7" stroke="#f59e0b" stroke-width="1.5" opacity="0.6"/>
        <circle cx="80" cy="40" r="26" fill="#fef3c7" stroke="#f59e0b" stroke-width="1" opacity="0.5"/>
        <!-- Stars -->
        <text x="80" y="47" text-anchor="middle" font-size="20" fill="#f59e0b">★</text>
        <text x="34" y="28" text-anchor="middle" font-size="11" fill="#fbbf24" opacity="0.8">✦</text>
        <text x="126" y="28" text-anchor="middle" font-size="11" fill="#fbbf24" opacity="0.8">✦</text>
        <text x="22" y="56" text-anchor="middle" font-size="8" fill="#fcd34d" opacity="0.6">✦</text>
        <text x="138" y="56" text-anchor="middle" font-size="8" fill="#fcd34d" opacity="0.6">✦</text>
        <text x="60" y="16" text-anchor="middle" font-size="8" fill="#fcd34d" opacity="0.7">✦</text>
        <text x="100" y="16" text-anchor="middle" font-size="8" fill="#fcd34d" opacity="0.7">✦</text>
      </svg>
    </div>
    <div class="flex-row gap-2">
      <div class="card flex-1" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; margin-bottom: 0.8cqw;">① 守護あり</div>
        <div class="slide-small">題目を唱え、正しく実践すれば<ruby>諸天善神<rt>しょてんぜんじん</rt></ruby>が守護する</div>
      </div>
      <div class="card flex-1" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; margin-bottom: 0.8cqw;">② 守護が離れる</div>
        <div class="slide-small">逆に不信や邪見があれば、守護が離れる</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw;">
      「諸天」は比喩的に「社会の善い力」「環境の加護」とも理解できます。
    </div>
  </div>
</section>`;
}

function slide35Itaidoshin() {
  return `<section class="slide" data-notes="異体同心は組織・チームの在り方の根本です。個性を認め合いながら同じ目的に向かう。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第７章</div>
    <h2 class="slide-h2"><ruby>異体同心<rt>いたいどうしん</rt></ruby></h2>
    <div class="text-center" style="padding: 1cqw 0;">
      <div class="slide-accent" style="font-size: 3.2cqw; font-weight: 800;">「体は<ruby>異<rt>こと</rt></ruby>なれど 心は一つ」</div>
    </div>
    <p class="slide-body" style="font-size: 2.1cqw;">
      体（個性・立場）はそれぞれ違っても、同じ<ruby>目的<rt>もくてき</rt></ruby>・<ruby>志<rt>こころざし</rt></ruby>に向かって一致団結すること。
    </p>
    <div class="flex-row gap-2">
      <div class="card flex-1 text-center" style="padding: 2cqw; border-top: 4px solid #22c55e;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; color: #16a34a;"><ruby>異体同心<rt>いたいどうしん</rt></ruby></div>
        <div class="slide-small" style="margin-top: 0.8cqw;"><ruby>万事<rt>ばんじ</rt></ruby>を<ruby>成就<rt>じょうじゅ</rt></ruby>する</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw; border-top: 4px solid #ef4444;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; color: #dc2626;"><ruby>同体異心<rt>どうたいいしん</rt></ruby></div>
        <div class="slide-small" style="margin-top: 0.8cqw;"><ruby>諸事<rt>しょじ</rt></ruby>が<ruby>成<rt>な</rt></ruby>らない</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 1.9cqw;">
      <ruby>広宣流布<rt>こうせんるふ</rt></ruby>を進めるにあたって、互いの個性を認め合いながら、同じ<ruby>目的<rt>もくてき</rt></ruby>に向かって力を合わせることが大切です。
    </div>
  </div>
</section>`;
}

function slide36Furumai() {
  return `<section class="slide" data-notes="振る舞いは信仰の鏡です。社会・家庭での立派な行動が最高の布教になります。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第７章</div>
    <h2 class="slide-h2">人の<ruby>振<rt>ふ</rt></ruby>る<ruby>舞<rt>ま</rt></ruby>い</h2>
    <p class="slide-body">
      信仰者は言葉だけでなく、日々の振る舞いで仏法を体現します。
    </p>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">🤝</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.5cqw;"><ruby>誠実<rt>せいじつ</rt></ruby>さ</div>
        <div class="slide-small">約束を守る、言葉に責任を持つ</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">🙇</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.5cqw;"><ruby>礼儀<rt>れいぎ</rt></ruby></div>
        <div class="slide-small">相手を尊重した言葉・態度</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">💪</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.5cqw;"><ruby>勇気<rt>ゆうき</rt></ruby></div>
        <div class="slide-small">正しいことを正しいと言える</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; text-align: center;">
      「<ruby>仏法<rt>ぶっぽう</rt></ruby>は<ruby>体<rt>たい</rt></ruby>なり、<ruby>世法<rt>せほう</rt></ruby>は<ruby>影<rt>かげ</rt></ruby>なり」— 内面の信心が外見の振る舞いに出る
    </div>
  </div>
</section>`;
}

function slide37QuizCh7() {
  return `<section class="slide slide-quiz" data-notes="答えは①です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第７章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      「<ruby>異体同心<rt>いたいどうしん</rt></ruby>」の意味は？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        体は違っても心（目的）は一つに団結すること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        体も心も同じであること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        独りで信心を貫くこと
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        異なる宗教が協力すること
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ <ruby>異体同心<rt>いたいどうしん</rt></ruby>とは「体（個性・立場）は異なれど、心（目的・志）は同一」という意味です。御書には「異体同心なれば万事を成し」とあり、団結の大切さを説いています。
    </div>
  </div>
</section>`;
}

function slide38BridgeCh8() {
  return `<section class="slide slide-bridge" data-notes="第8章では創価学会の歴史について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">8</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第８章</div>
    <div class="slide-h1" style="font-size: 5.5cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>創価学会<rt>そうかがっかい</rt></ruby>の<ruby>歴史<rt>れきし</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      70年で世界192カ国へ
    </div>
  </div>
</section>`;
}

function slide39Makiguchi() {
  return `<section class="slide" data-notes="創価学会は1930年に牧口常三郎によって教育運動として始まりました。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第８章</div>
    <h2 class="slide-h2"><ruby>創価学会<rt>そうかがっかい</rt></ruby>の<ruby>創立<rt>そうりつ</rt></ruby></h2>
    <div class="flex-col gap-2" style="flex: 1; position: relative; padding-left: 3.5cqw;">
      <!-- Vertical timeline line -->
      <div style="position: absolute; left: 1.2cqw; top: 0; bottom: 0; width: 0.4cqw; background: #3b82f6; border-radius: 2px;"></div>
      <div class="card" style="padding: 1.8cqw 2cqw; position: relative;">
        <div style="position: absolute; left: -2.9cqw; top: 50%; transform: translateY(-50%); width: 1.6cqw; height: 1.6cqw; background: #3b82f6; border-radius: 50%; border: 3px solid white;"></div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw; color: #1d4ed8;">1930年</div>
        <div class="slide-body" style="font-size: 2cqw;"><ruby>牧口常三郎<rt>まきぐちつねさぶろう</rt></ruby>が<ruby>創価教育学会<rt>そうかきょういくがっかい</rt></ruby>を<ruby>創立<rt>そうりつ</rt></ruby></div>
      </div>
      <div class="card" style="padding: 1.8cqw 2cqw; position: relative;">
        <div style="position: absolute; left: -2.9cqw; top: 50%; transform: translateY(-50%); width: 1.6cqw; height: 1.6cqw; background: #8b5cf6; border-radius: 50%; border: 3px solid white;"></div>
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 0.5cqw; color: #7c3aed;">1945年</div>
        <div class="slide-body" style="font-size: 2cqw;"><ruby>戸田城聖<rt>とだじょうせい</rt></ruby>が再建、「創価学会」に改称</div>
      </div>
    </div>
    <div class="flex-row gap-2">
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <svg viewBox="0 0 60 60" style="width: 6cqw; margin-bottom: 0.8cqw;" aria-label="人物アイコン">
          <circle cx="30" cy="20" r="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <path d="M12,52 Q30,42 48,52 L50,60 H10 Z" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
        </svg>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700;"><ruby>牧口常三郎<rt>まきぐちつねさぶろう</rt></ruby></div>
        <div class="slide-small">初代会長</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <svg viewBox="0 0 60 60" style="width: 6cqw; margin-bottom: 0.8cqw;" aria-label="人物アイコン">
          <circle cx="30" cy="20" r="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
          <path d="M12,52 Q30,42 48,52 L50,60 H10 Z" fill="#ddd6fe" stroke="#8b5cf6" stroke-width="1.5"/>
        </svg>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700;"><ruby>戸田城聖<rt>とだじょうせい</rt></ruby></div>
        <div class="slide-small">第２代会長</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide40Senso() {
  return `<section class="slide" data-notes="牧口・戸田の投獄は、権力に屈しない信仰者の姿を示しました。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第８章</div>
    <h2 class="slide-h2"><ruby>戦時中<rt>せんじちゅう</rt></ruby>の<ruby>弾圧<rt>だんあつ</rt></ruby></h2>
    <p class="slide-body">
      第二次世界大戦中、軍国主義に反対した牧口・戸田は<ruby>治安維持法<rt>ちあんいじほう</rt></ruby>で逮捕されました。
    </p>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1" style="padding: 2.5cqw; border-left: 4px solid #ef4444;">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 1cqw;"><ruby>牧口常三郎<rt>まきぐちつねさぶろう</rt></ruby></div>
        <div class="slide-body" style="font-size: 2cqw;">1944年、獄中で<ruby>殉教<rt>じゅんきょう</rt></ruby>（73歳）</div>
      </div>
      <div class="card flex-1" style="padding: 2.5cqw; border-left: 4px solid #8b5cf6;">
        <div class="slide-accent" style="font-size: 2.2cqw; font-weight: 700; margin-bottom: 1cqw;"><ruby>戸田城聖<rt>とだじょうせい</rt></ruby></div>
        <div class="slide-body" style="font-size: 2cqw;">2年間の獄中生活の後、終戦後に出獄</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      二人の不屈の精神が、戦後の創価学会再建の原動力となりました。
    </div>
  </div>
</section>`;
}

function slide41Ikeda() {
  return `<section class="slide" data-notes="池田大作SGI会長のもとで創価学会は世界宗教へと発展しました。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第８章</div>
    <h2 class="slide-h2">第３代会長 <ruby>池田大作<rt>いけだだいさく</rt></ruby></h2>
    <div style="display: flex; justify-content: center; margin-bottom: 1cqw;">
      <svg viewBox="0 0 200 100" style="width: 100%; max-width: 32cqw;" aria-label="世界地図と5大陸の点">
        <ellipse cx="100" cy="55" rx="95" ry="42" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
        <!-- Simplified continent dots -->
        <circle cx="55"  cy="40" r="5" fill="#3b82f6"/><!-- N.America -->
        <circle cx="45"  cy="65" r="4" fill="#3b82f6"/><!-- S.America -->
        <circle cx="100" cy="38" r="5" fill="#3b82f6"/><!-- Europe -->
        <circle cx="108" cy="55" r="5" fill="#3b82f6"/><!-- Africa -->
        <circle cx="148" cy="42" r="5" fill="#3b82f6"/><!-- Asia -->
        <circle cx="168" cy="72" r="4" fill="#3b82f6"/><!-- Oceania -->
        <!-- Connecting lines -->
        <line x1="55" y1="40" x2="100" y2="38" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
        <line x1="100" y1="38" x2="148" y2="42" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
        <line x1="108" y1="55" x2="148" y2="42" stroke="#93c5fd" stroke-width="1" opacity="0.7"/>
        <text x="100" y="90" text-anchor="middle" font-size="8" fill="#1e40af" font-weight="bold">世界192カ国・地域</text>
      </svg>
    </div>
    <div class="flex-row gap-2">
      <div class="card flex-1 text-center" style="padding: 1.8cqw;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; color: #d97706; margin-bottom: 0.5cqw;">1960年</div>
        <div class="slide-small">第３代会長に就任（32歳）</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 1.8cqw;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; color: #d97706; margin-bottom: 0.5cqw;">1975年</div>
        <div class="slide-small"><ruby>創価学会インタナショナル<rt>そうかがっかいいんたなしょなる</rt></ruby>（SGI）設立</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 1.8cqw;">
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; color: #d97706; margin-bottom: 0.5cqw;">世界へ</div>
        <div class="slide-small">192カ国・地域へ広宣流布を推進</div>
      </div>
    </div>
  </div>
</section>`;
}

function slide42QuizCh8() {
  return `<section class="slide slide-quiz" data-notes="答えは①牧口常三郎です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第８章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      創価学会を<ruby>創立<rt>そうりつ</rt></ruby>したのは誰でしょう？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        <ruby>牧口常三郎<rt>まきぐちつねさぶろう</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        <ruby>戸田城聖<rt>とだじょうせい</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        <ruby>池田大作<rt>いけだだいさく</rt></ruby>
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        <ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ 創価学会は1930年に<ruby>牧口常三郎<rt>まきぐちつねさぶろう</rt></ruby>が創立しました（当初の名称は「創価教育学会」）。第２代会長が戸田城聖、第３代会長が池田大作です。
    </div>
  </div>
</section>`;
}

function slide43BridgeCh9() {
  return `<section class="slide slide-bridge" data-notes="第9章では宗教改革について学びます。">
  <div class="slide-pad h-full flex-col" style="justify-content: center; align-items: flex-start;">
    <div class="chapter-num" style="font-size: 18cqw; font-weight: 900; opacity: 0.15; line-height: 1; position: absolute; right: 4cqw; top: 50%; transform: translateY(-50%);">9</div>
    <div class="slide-caption" style="font-size: 2cqw; letter-spacing: 0.2em; margin-bottom: 2cqw; opacity: 0.8;">第９章</div>
    <div class="slide-h1" style="font-size: 6cqw; line-height: 1.25; margin-bottom: 2.5cqw;">
      <ruby>宗教改革<rt>しゅうきょうかいかく</rt></ruby>
    </div>
    <div class="slide-caption" style="font-size: 2.4cqw; opacity: 0.85;">
      <ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>が目指した社会の変革
    </div>
  </div>
</section>`;
}

function slide44Rissho() {
  return `<section class="slide" data-notes="立正安国論は単なる宗教書ではなく、社会変革の宣言書です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第９章</div>
    <h2 class="slide-h2"><ruby>立正安国論<rt>りっしょうあんこくろん</rt></ruby></h2>
    <p class="slide-body">
      1260年、<ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>が時の権力者に提出した<ruby>諫暁<rt>かんぎょう</rt></ruby>の書。
    </p>
    <div class="card" style="padding: 2.5cqw; background: #fef9e7; border: 2px solid #f59e0b;">
      <div class="slide-accent" style="font-size: 2.4cqw; font-weight: 700; margin-bottom: 1.5cqw; text-align: center;">タイトル解説</div>
      <div class="flex-row gap-3">
        <div class="flex-col gap-1 flex-1 text-center">
          <div class="slide-accent" style="font-size: 3cqw; font-weight: 800; color: #d97706;"><ruby>立正<rt>りっしょう</rt></ruby></div>
          <div class="slide-body" style="font-size: 2cqw;">正法（正しい仏法）を立てる</div>
        </div>
        <div style="font-size: 3cqw; color: #f59e0b; display: flex; align-items: center; font-weight: 900;">＋</div>
        <div class="flex-col gap-1 flex-1 text-center">
          <div class="slide-accent" style="font-size: 3cqw; font-weight: 800; color: #d97706;"><ruby>安国<rt>あんこく</rt></ruby></div>
          <div class="slide-body" style="font-size: 2cqw;">国（社会・民衆）を安んじる</div>
        </div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      「正しい仏法が<ruby>根付<rt>ねづ</rt></ruby>いてこそ、社会は平和になる」という根本思想
    </div>
  </div>
</section>`;
}

function slide45Kaikaku() {
  return `<section class="slide" data-notes="宗教改革の精神は、現代の広宣流布活動に受け継がれています。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">第９章</div>
    <h2 class="slide-h2"><ruby>宗教改革<rt>しゅうきょうかいかく</rt></ruby>の意義</h2>
    <div class="flex-col gap-2" style="flex: 1;">
      <div class="highlight-box" style="font-size: 2.1cqw; padding: 1.8cqw;">
        <strong><ruby>邪法<rt>じゃほう</rt></ruby>を<ruby>破<rt>は</rt></ruby>する</strong> — 誤った教えを正す勇気
      </div>
      <div class="highlight-box" style="font-size: 2.1cqw; padding: 1.8cqw;">
        <strong><ruby>正法<rt>しょうほう</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる</strong> — 正しい教えを社会に広める
      </div>
      <div class="highlight-box" style="font-size: 2.1cqw; padding: 1.8cqw;">
        <strong>民衆の幸福</strong> — 宗教の目的は人々の幸せ
      </div>
    </div>
    <p class="slide-body" style="font-size: 2.1cqw;">
      宗教改革は過去の話ではなく、現代でも一人ひとりが実践できることです。
    </p>
  </div>
</section>`;
}

function slide46QuizCh9() {
  return `<section class="slide slide-quiz" data-notes="答えは①です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="slide-h3" style="font-size: 2.6cqw;">📝 第９章 確認クイズ</div>
    <div class="highlight-box" style="font-size: 2.6cqw; font-weight: 600; padding: 2cqw;">
      「<ruby>立正安国論<rt>りっしょうあんこくろん</rt></ruby>」の「安国」とはどういう意味？
    </div>
    <div class="flex-col gap-1" style="flex: 1;">
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw; border-left: 4px solid #22c55e;">
        <span class="num-pill" style="background: #22c55e; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">①</span>
        国（社会・民衆）を安んじること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">②</span>
        国を安全に守ること（軍事）
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">③</span>
        安らかに出国すること
      </div>
      <div class="card" style="padding: 1.4cqw 2cqw; font-size: 2.2cqw;">
        <span class="num-pill" style="background: #94a3b8; color: white; border-radius: 999px; padding: 0.2cqw 1cqw; margin-right: 1cqw; font-size: 1.8cqw;">④</span>
        国王が安心すること
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2cqw; background: #f0fdf4; border: 2px solid #22c55e; padding: 1.5cqw 2cqw;">
      ✅ 「<ruby>安国<rt>あんこく</rt></ruby>」とは「国（社会・民衆）を安んじる」という意味です。正しい仏法が社会に根付いてこそ、真の平和と民衆の幸福が実現するという<ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>の根本思想を表しています。
    </div>
  </div>
</section>`;
}

function slide47Matome1() {
  return `<section class="slide" data-notes="前半5章のまとめです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">まとめ</div>
    <h2 class="slide-h2">今日学んだこと — まとめ①</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5cqw; flex: 1;">
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #3b82f6; margin-bottom: 0.6cqw;">御書・諸法実相抄</div>
        <div class="slide-small"><ruby>日蓮大聖人<rt>にちれんだいしょうにん</rt></ruby>の教えの根本</div>
      </div>
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #8b5cf6; margin-bottom: 0.6cqw;"><ruby>一生成仏<rt>いっしょうじょうぶつ</rt></ruby>・<ruby>広宣流布<rt>こうせんるふ</rt></ruby></div>
        <div class="slide-small">この一生で必ず幸福に</div>
      </div>
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #22c55e; margin-bottom: 0.6cqw;"><ruby>十界<rt>じっかい</rt></ruby></div>
        <div class="slide-small">生命の10の<ruby>境涯<rt>きょうがい</rt></ruby>、誰にも<ruby>仏界<rt>ぶっかい</rt></ruby>がある</div>
      </div>
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #f59e0b; margin-bottom: 0.6cqw;"><ruby>三証<rt>さんしょう</rt></ruby></div>
        <div class="slide-small"><ruby>現証<rt>げんしょう</rt></ruby>こそ最大の証明</div>
      </div>
      <div class="card" style="padding: 2cqw; grid-column: span 2;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #ef4444; margin-bottom: 0.6cqw;"><ruby>信行学<rt>しんぎょうがく</rt></ruby></div>
        <div class="slide-small">信じ・実践し・学ぶ</div>
      </div>
    </div>
    <div style="border-left: 4px solid var(--accent, #3b82f6); padding-left: 1.5cqw; font-size: 2cqw; color: #3b82f6;">
      次のスライドで後半のまとめへ→
    </div>
  </div>
</section>`;
}

function slide48Matome2() {
  return `<section class="slide" data-notes="後半4章のまとめです。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">まとめ</div>
    <h2 class="slide-h2">今日学んだこと — まとめ②</h2>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5cqw; flex: 1;">
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #ef4444; margin-bottom: 0.6cqw;"><ruby>宿命転換<rt>しゅくめいてんかん</rt></ruby></div>
        <div class="slide-small"><ruby>変毒為薬<rt>へんどくいやく</rt></ruby>、宿命も変えられる</div>
      </div>
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #f59e0b; margin-bottom: 0.6cqw;"><ruby>諸天善神<rt>しょてんぜんじん</rt></ruby>・<ruby>異体同心<rt>いたいどうしん</rt></ruby>・振る舞い</div>
        <div class="slide-small">団結と誠実さ</div>
      </div>
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #3b82f6; margin-bottom: 0.6cqw;"><ruby>創価学会<rt>そうかがっかい</rt></ruby>の歴史</div>
        <div class="slide-small">牧口・戸田・池田の三代の師弟</div>
      </div>
      <div class="card" style="padding: 2cqw;">
        <div class="slide-accent" style="font-size: 1.9cqw; font-weight: 700; color: #22c55e; margin-bottom: 0.6cqw;"><ruby>宗教改革<rt>しゅうきょうかいかく</rt></ruby></div>
        <div class="slide-small"><ruby>立正安国<rt>りっしょうあんこく</rt></ruby>、社会の平和のために</div>
      </div>
    </div>
    <div class="highlight-box" style="font-size: 2.1cqw; text-align: center;">
      どの章も「一人の人間の幸福」から始まり「世界の平和」へとつながっています。
    </div>
  </div>
</section>`;
}

function slide49Matome3() {
  return `<section class="slide" data-notes="試験の準備よりも、内容を心から理解することが大切です。仏法は知識ではなく生き方です。">
  <div class="slide-pad h-full flex-col gap-2">
    <div class="section-label">まとめ</div>
    <h2 class="slide-h2"><ruby>任用試験<rt>にんようしけん</rt></ruby>に向けて</h2>
    <div class="text-center" style="padding: 1.5cqw 0;">
      <div class="slide-accent" style="font-size: 3.5cqw; font-weight: 800; line-height: 1.4;">「あなたのペースで<br>大丈夫！」</div>
    </div>
    <div class="flex-row gap-2" style="flex: 1;">
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">📖</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.6cqw;">繰り返し読む</div>
        <div class="slide-small">スライドを何度も見直そう</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">✏️</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.6cqw;">キーワードを書く</div>
        <div class="slide-small">フリガナを見ながら書いて覚える</div>
      </div>
      <div class="card flex-1 text-center" style="padding: 2cqw;">
        <div style="font-size: 2.8cqw; margin-bottom: 0.8cqw;">🤝</div>
        <div class="slide-accent" style="font-size: 2cqw; font-weight: 700; margin-bottom: 0.6cqw;">仲間と話す</div>
        <div class="slide-small">内容を誰かに話すと定着する</div>
      </div>
    </div>
    <div class="slide-accent" style="font-size: 3.2cqw; font-weight: 900; text-align: center; padding: 1cqw 0;">
      応援しています！
    </div>
  </div>
</section>`;
}

// ── Complete exports ──
window.slideFactories = [
  slide01Cover,
  slide02BridgeCh1, slide03Gosho, slide04Shohojisso, slide05Ichinen, slide06QuizCh1,
  slide07BridgeCh2, slide08Issho, slide09Honzon, slide10Daimoku, slide11Kaidan, slide12Kosenrufu, slide13QuizCh2,
  slide14BridgeCh3, slide15Jikkai, slide16Rokudo, slide17Shisho, slide18Jikkaigugu, slide19QuizCh3,
  slide20BridgeCh4, slide21Sannsho, slide22QuizCh4,
  slide23BridgeCh5, slide24Shin, slide25Gyo, slide26Gaku, slide27ShinGyoGaku, slide28QuizCh5,
  slide29BridgeCh6, slide30Shukumyo, slide31Tenkan, slide32QuizCh6,
  slide33BridgeCh7, slide34Shoten, slide35Itaidoshin, slide36Furumai, slide37QuizCh7,
  slide38BridgeCh8, slide39Makiguchi, slide40Senso, slide41Ikeda, slide42QuizCh8,
  slide43BridgeCh9, slide44Rissho, slide45Kaikaku, slide46QuizCh9,
  slide47Matome1, slide48Matome2, slide49Matome3
];

window.agendaItems = [
  { label: '表紙', section: null },
  // Ch1
  { label: '第１章：御書と諸法実相抄', section: '第１章' },
  { label: '御書とは何か', section: '第１章' },
  { label: '諸法実相抄のポイント', section: '第１章' },
  { label: '一念三千って何？', section: '第１章' },
  { label: '✏️ 確認クイズ①', section: '第１章' },
  // Ch2
  { label: '第２章：一生成仏と広宣流布', section: '第２章' },
  { label: '一生成仏とは', section: '第２章' },
  { label: '本門の本尊', section: '第２章' },
  { label: '本門の題目', section: '第２章' },
  { label: '本門の戒壇', section: '第２章' },
  { label: '広宣流布とは', section: '第２章' },
  { label: '✏️ 確認クイズ②', section: '第２章' },
  // Ch3
  { label: '第３章：十界', section: '第３章' },
  { label: '十界って何？', section: '第３章' },
  { label: '六道の世界', section: '第３章' },
  { label: '四聖の世界', section: '第３章' },
  { label: '十界互具', section: '第３章' },
  { label: '✏️ 確認クイズ③', section: '第３章' },
  // Ch4
  { label: '第４章：三証', section: '第４章' },
  { label: '三証とは', section: '第４章' },
  { label: '✏️ 確認クイズ④', section: '第４章' },
  // Ch5
  { label: '第５章：信行学', section: '第５章' },
  { label: '信 — まず信じることから', section: '第５章' },
  { label: '行 — 実践すること', section: '第５章' },
  { label: '学 — 学び続けること', section: '第５章' },
  { label: '信行学は一体', section: '第５章' },
  { label: '✏️ 確認クイズ⑤', section: '第５章' },
  // Ch6
  { label: '第６章：宿命転換', section: '第６章' },
  { label: '宿命って何？', section: '第６章' },
  { label: 'どうやって転換するの？', section: '第６章' },
  { label: '✏️ 確認クイズ⑥', section: '第６章' },
  // Ch7
  { label: '第７章：諸天善神・異体同心・振る舞い', section: '第７章' },
  { label: '諸天善神', section: '第７章' },
  { label: '異体同心', section: '第７章' },
  { label: '人の振る舞い', section: '第７章' },
  { label: '✏️ 確認クイズ⑦', section: '第７章' },
  // Ch8
  { label: '第８章：創価学会の歴史', section: '第８章' },
  { label: '創価学会の創立', section: '第８章' },
  { label: '戦時中の弾圧', section: '第８章' },
  { label: '第３代会長 池田大作', section: '第８章' },
  { label: '✏️ 確認クイズ⑧', section: '第８章' },
  // Ch9
  { label: '第９章：宗教改革', section: '第９章' },
  { label: '立正安国論', section: '第９章' },
  { label: '宗教改革の意義', section: '第９章' },
  { label: '✏️ 確認クイズ⑨', section: '第９章' },
  // まとめ
  { label: 'まとめ①（第1〜5章）', section: 'まとめ' },
  { label: 'まとめ②（第6〜9章）', section: 'まとめ' },
  { label: '任用試験に向けて', section: 'まとめ' },
];
