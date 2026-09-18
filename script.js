// =========================================================
// 1. モバイルナビゲーションの開閉
// =========================================================
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // メニューのリンクをタップしたら自動で閉じる
  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================================
// 2. フッターの年号を自動表示
// =========================================================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =========================================================
// 3. お問い合わせフォーム（仮の送信処理）
//    実際に送信できるようにするには、index.html の
//    <form action="..."> に本物の送信先を設定してください。
//    設定済みになったら、下のpreventDefault()のブロックは
//    削除して、通常のフォーム送信に任せてください。
// =========================================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    const action = contactForm.getAttribute("action");

    // action属性がまだ仮のプレースホルダーのままの場合は送信をブロックして知らせる
    if (!action || action.includes("ここに")) {
      e.preventDefault();
      alert(
        "【設定が必要です】\n" +
        "このフォームはまだ送信先が設定されていません。\n" +
        "index.html の <form action=\"...\"> に、送信先のURL（Formspree等）や\n" +
        "mailto:を設定してください。"
      );
    }
    // action が正しく設定されていれば、ここでは何もせず通常通り送信されます
  });
}

// =========================================================
// 4. 「本日の日替わりランチ」を microCMS から取得するサンプル
//    ※ そのままでは動作しません。API情報を設定して有効化してください。
// =========================================================
/*
async function fetchTodayLunchFromMicroCMS() {
  const SERVICE_DOMAIN = "ここにmicroCMSのサービスドメインを入力"; // 例: your-service
  const API_KEY = "ここにmicroCMSのAPIキーを入力";
  const ENDPOINT = "todaylunch"; // 作成したAPIのエンドポイント名に置き換えてください

  try {
    const res = await fetch(
      `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${ENDPOINT}`,
      { headers: { "X-MICROCMS-API-KEY": API_KEY } }
    );
    const data = await res.json();

    const box = document.querySelector(".today-lunch-box .placeholder-box");
    if (box && data) {
      box.innerHTML = `
        <img src="${data.image?.url ?? ""}" alt="本日のランチ" style="border-radius:6px; margin-bottom:16px;">
        <h3>${data.title ?? ""}</h3>
        <p>${data.description ?? ""}</p>
      `;
    }
  } catch (err) {
    console.error("本日のランチ情報の取得に失敗しました:", err);
  }
}

// 設定が終わったら、この行のコメントを外して有効化してください
// fetchTodayLunchFromMicroCMS();
*/
