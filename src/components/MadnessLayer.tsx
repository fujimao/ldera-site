"use client";

import { CSSProperties, useEffect, useState } from "react";

const fieldNotes = [
  "企画温度 102%",
  "違和感注入中",
  "問い合わせ誘導波",
  "記憶に残留",
  "映像反応あり",
  "Web神経接続",
  "会議室ゆらす",
  "真面目を変換",
];

export function MadnessLayer() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      setPointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const style = {
    "--pointer-x": `${pointer.x}%`,
    "--pointer-y": `${pointer.y}%`,
  } as CSSProperties;

  return (
    <div className="madness-layer" style={style} aria-hidden="true">
      <div className="madness-aura" />
      <div className="scanlines" />
      <div className="signal-rain">
        {fieldNotes.map((note, index) => (
          <span key={note} style={{ "--note-index": index } as CSSProperties}>
            {note}
          </span>
        ))}
      </div>
    </div>
  );
}
