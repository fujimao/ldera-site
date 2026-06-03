"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";

const briefs = [
  "動画化",
  "LP化",
  "変なコピー",
  "導線改善",
  "採用強化",
  "記憶残留",
  "営業支援",
  "ロゴ発光",
];

const missMessages = [
  "会議が3分長くなりました。",
  "資料の4ページ目で眠気が発生。",
  "普通すぎる案が通りかけました。",
  "問い合わせボタンが少し照れています。",
];

export function BriefCatcherGame() {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [miss, setMiss] = useState(0);
  const [message, setMessage] = useState("落ちてくる企画の種をクリックしてください。");

  const gameBriefs = useMemo(
    () =>
      briefs.map((brief, index) => ({
        brief,
        delay: `${index * 0.62}s`,
        left: `${8 + ((index * 17) % 78)}%`,
        speed: `${4.7 + (index % 4) * 0.34}s`,
      })),
    [],
  );

  function catchBrief(brief: string) {
    const nextCombo = combo + 1;
    setCombo(nextCombo);
    setScore((current) => current + 100 + nextCombo * 15);
    setMessage(`${brief}を捕獲。企画温度が${100 + nextCombo * 7}%になりました。`);
  }

  function missBrief() {
    setCombo(0);
    setMiss((current) => current + 1);
    setMessage(missMessages[miss % missMessages.length]);
  }

  function resetGame() {
    setScore(0);
    setCombo(0);
    setMiss(0);
    setMessage("再起動しました。次の企画を捕まえてください。");
  }

  return (
    <section className="section game-section" aria-labelledby="game-title">
      <div className="section-heading">
        <p className="eyebrow">Mini Game</p>
        <h2 id="game-title">企画書キャッチャー</h2>
      </div>
      <div className="game-layout">
        <div className="game-panel" role="application" aria-label="企画書キャッチャー">
          <div className="game-sky" onClick={missBrief}>
            {gameBriefs.map((item) => (
              <button
                className="brief-chip"
                key={item.brief}
                style={{
                  "--brief-delay": item.delay,
                  "--brief-left": item.left,
                  "--brief-speed": item.speed,
                } as CSSProperties}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  catchBrief(item.brief);
                }}
              >
                {item.brief}
              </button>
            ))}
            <div className="game-catcher">Ldera</div>
          </div>
        </div>
        <aside className="game-scoreboard" aria-live="polite">
          <span>Score</span>
          <strong>{score}</strong>
          <span>Combo</span>
          <strong>{combo}</strong>
          <span>Miss</span>
          <strong>{miss}</strong>
          <p>{message}</p>
          <button type="button" onClick={resetGame}>
            リセット
          </button>
        </aside>
      </div>
    </section>
  );
}
