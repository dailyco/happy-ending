import React from "react";
import SeparatedTemplate29 from "../Templates/SeparatedTemplate29";
import classNames from "classnames";

import "../../scss/pages.scss";

function P29() {
  const translateFlower = (f) => {
    let fInKorean = "";
    if (f === "rose") fInKorean = "장미";
    if (f === "freesia") fInKorean = "프리지아";
    if (f === "babyBreath") fInKorean = "안개꽃";
    if (f === "tulip") fInKorean = "튤립";
    if (f === "mum") fInKorean = "안개꽃";
    return fInKorean;
  };

  const name = localStorage.getItem("name") ?? "홍길동";
  const flower = localStorage.getItem("flower") ?? "rose";
  const flowerInKorean = translateFlower(flower);
  const deathMonthNDay = localStorage.getItem("deathMonth") + "월 " + localStorage.getItem("deathday") + "일";
  const sadMan = localStorage.getItem("sadMan");

  const data = {
    deco_data: {
      selfie: localStorage.getItem("photo"), // Json.parse로 이미지 객체화하기
      flower: flower,
      travelOrNot: localStorage.getItem("choice_p8") ?? "travel", // startsWith() 사용해서 travel, home 구분
    },
    title_data: {
      writer: name + "의",
      lastPage: "마지막페이지",
    },
    left_page_date: {
      grage_paragraph: {
        grave_header: name + "의 묘",
        // TODO name, deathMonthNDay, lastWord 넣기
        grave_body: (
          <>
            박한동은 11월 10일 세상을 떠났습니다.
            <br />
            박한동의 죽음을 추모하는 사람들이 그의 묘비 앞에서 박한동을 추억합니다. 나보다 남을 더 사랑했던 사람 박한동은 서비스를 마지막으로 나는 떠난다 라는 한마디를 남겼습니다.
          </>
        ),
      },
      funeral_paragraph: {
        funeral_header: name + "의 장례식",
        funeral_body: name + "의 장례식에 온 사람들은 가장 아름다웠던 순간이 담긴 그의 영정사진을 보았습니다. 그리고 그를 추모하며 " + flowerInKorean + " 한 송이를 헌화했습니다.",
      },
      happy_moment_paragraph: {
        happy_moment_header: name + "의 행복했던 순간",
        // TODO name, happyMoment 넣기
        happy_moment_body: (
          <>
            박한동은 주님을 만났던 순간에 행복함을 만끽했습니다.
            <br />그 순간, 박한동은 세상 누구보다도 행복한 사람이라고 느꼈습니다.
          </>
        ),
      },
    },
    right_page_data: {
      important_man_paragraph: {
        important_man_header: "가장 소중한 사람",
        important_man_body:
          sadMan +
          "은 당신의 죽음에 가장 슬퍼했습니다. 아마도 당신을 가장 소중하게 여기는 사람일 것입니다. 이런 사람이 당신에게 있다는 것은 정말 큰 행운입니다. 오늘 하루 " +
          sadMan +
          "에게 마음을 담은 따뜻한 한 마디를 전하는 건 어떤가요?",
      },
      rest_paragraph: {
        rest_header: "일상의 쉼표",
        // TODO 이거 사용자 선택에 따라 나누기
        rest_body: "영국으로 혼자 여행을 떠나고 싶어했던 당신, 잠시 모든걸 내려놓고 혼자 여행을 떠나보는건 어떤가요? 새로운 곳에서의 신선한 경험들은 길었던 당신의 일상에 쉼표가 되어줄 것입니다.",
      },
      will_paragraph: {
        will_header: "전하고 싶은 말",
        // TODO messages에서 name들 가져오기
        will_body:
          "당신은 죽기전 OOO, OOO, OOO에게 유서를 남겼습니다. 그곳에 적힌 이야기는 당신이 정말로 전하고 싶은 말일 것입니다. 조금은 부끄러운 마음에 말하지 못했다면 이번엔 용기를 내어 직접 전달하거나 작은 행동으로 표현하세요. 계속 미루다보면 표현할 기회를 놓칠 수도 있습니다. ",
      },
    },
    detailed_buttons_data: {
      print_button_data: "인쇄하기",
      home_button_data: "홈으로",
    },
  };

  return (
    <div className={classNames("Page", "P29")}>
      <SeparatedTemplate29></SeparatedTemplate29>
    </div>
  );
}

export default P29;
