import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * 화면 크기에 맞춰 페이지를 키우고 줄인다.
 *
 * - stage: 페이지는 1920×1080 디자인 그대로, 화면에 꽉 차게 비율을 유지해 맞춘다.
 *          남는 위아래(또는 양옆)는 같은 배경을 흐리게 깔아 채운다.
 * - flow:  세로로 긴 휴대폰에서는 폭 640 기준으로 다시 배치한다(글자가 너무 작아지지 않게).
 *          배경 그림 위 정해진 자리에 놓이는 장면(SCENE_PATHS)은 flow 대신 stage 로 보여 준다.
 */
const STAGE_W = 1920;
const STAGE_H = 1080;
const FLOW_W = 640;

// 배경 그림·영상의 정해진 자리에 글이나 버튼이 놓여서, 다시 배치하면 어긋나는 화면
const SCENE_PATHS = new Set([
  "/p0",
  "/p4",
  "/p7",
  "/p9_1",
  "/p9_2",
  "/p10",
  "/p11",
  "/p15",
  "/p16_1",
  "/p17",
  "/p18",
  "/p22",
  "/p23",
  "/p26",
  "/p27",
  "/p29",
]);

function measure(pathname) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const portraitPhone = vw < vh && vw < 900;
  if (portraitPhone && !SCENE_PATHS.has(pathname)) {
    const s = vw / FLOW_W;
    return { mode: "flow", s, flowH: vh / s, rotateHint: false };
  }
  return { mode: "stage", s: Math.min(vw / STAGE_W, vh / STAGE_H), flowH: 0, rotateHint: portraitPhone };
}

function Stage({ children }) {
  const { pathname } = useLocation();
  const [backdrop, setBackdrop] = useState({ image: "none", video: "" });
  const [rotateHint, setRotateHint] = useState(false);
  const lastPage = useRef(null);

  // 화면 모드와 배율을 html 에 걸어 둔다(scss/stage.scss 가 읽는다)
  useLayoutEffect(() => {
    const apply = () => {
      const { mode, s, flowH, rotateHint } = measure(pathname);
      setRotateHint(rotateHint);
      const root = document.documentElement;
      root.classList.toggle("mode-stage", mode === "stage");
      root.classList.toggle("mode-flow", mode === "flow");
      root.style.setProperty("--s", String(s));
      root.style.setProperty("--flow-h", `${flowH}px`);
    };
    apply();
    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);
    };
  }, [pathname]);

  // 남는 자리를 채울 배경: 지금 페이지의 배경 그림, 없으면 배경 영상
  useEffect(() => {
    const pick = () => {
      const page = document.querySelector(".Page");
      if (!page || page === lastPage.current) return;
      lastPage.current = page;
      const image = getComputedStyle(page).backgroundImage;
      const video = page.querySelector(":scope > video");
      setBackdrop({
        image: image && image !== "none" ? image : "none",
        video: video ? video.currentSrc || video.querySelector("source")?.src || "" : "",
      });
    };
    pick();
    const observer = new MutationObserver(pick);
    observer.observe(document.getElementById("root"), { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="Backdrop" style={{ backgroundImage: backdrop.image }} aria-hidden="true">
        {backdrop.image === "none" && backdrop.video && (
          <video key={backdrop.video} src={backdrop.video} autoPlay muted loop playsInline />
        )}
      </div>
      {children}
      {rotateHint && <p className="RotateHint">휴대폰을 가로로 돌리면 더 크게 볼 수 있어요</p>}
    </>
  );
}

export default Stage;
