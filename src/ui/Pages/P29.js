import classNames from "classnames";
import React, { useRef, useEffect } from "react";
import { useReactToPrint } from 'react-to-print';
import SeparatedTemplate29 from "../Templates/SeparatedTemplate29";
import HomeIcon from "../../assets/icons/29-home7575.svg";
import AND from "../../assets/images/29p_images/29 And.png";
import PrintIcon from "../../assets/icons/29-printer-7575.svg";
import END from "../../assets/images/29p_images/29 The end.png";

import "../../scss/pages.scss";

function P29({ history }) {
  const page = useRef(null);

  const translateFlower = (f) => {
    let fInKorean = "";

    if (f === "rose") fInKorean = "장미";
    else if (f === "freesia") fInKorean = "프리지아";
    else if (f === "babyBreath") fInKorean = "안개꽃";
    else if (f === "tulip") fInKorean = "튤립";
    else if (f === "mum") fInKorean = "안개꽃";
    else fInKorean = "장미";

    return fInKorean;
  };

  const makeRestText = (choice) => {
    let restText = "";
    const travelToAlone = localStorage.getItem("travelToAlone") ?? "";
    const travelWithTo = localStorage.getItem("travelWithTo") ?? "";
    const travelWithWho = localStorage.getItem("travelWithWho") ?? "";
    const homeDoAlone = localStorage.getItem("homeDoAlone") ?? "";
    const homeWithWho = localStorage.getItem("homeWithWho") ?? "";
    const homeWithDo = localStorage.getItem("homeWithDo") ?? "";

    if (choice === "travel_alone")
      restText =
        travelToAlone + "(으)로 혼자 여행을 떠나고 싶어했던 당신, 잠시 모든걸 내려놓고 혼자 여행을 떠나보는건 어떤가요? 새로운 곳에서의 신선한 경험들은 길었던 당신의 일상에 쉼표가 되어줄 것입니다.";
    else if (choice === "travel_together")
      restText =
        travelWithTo +
        "(으)로 " +
        travelWithWho +
        "와(과) 함께 여행을 떠나고 싶어했던 당신, 소중한 사람들과 함께 잠시 여행을 떠나보는건 어떤가요? 사랑하는 사람들과 쌓는 추억은 앞으로의 시간들을 살아갈 원동력이 될 것입니다.";
    else if (choice === "home_alone")
      restText =
        "혼자 집에 남아 " +
        homeDoAlone +
        "하고 싶어했던 당신, 잠시 모든 짐을 내려놓고 아늑한 집에서 휴식을 취해보는 건 어떤가요? 혼자만의 시간을 통해 다시한번 삶의 이유와 내가 진정으로 추구해야할 것들을 정리할 수 있을 것입니다.";
    else if (choice === "home_together")
      restText =
        homeWithWho +
        "와(과) 함께 집에 남아 " +
        homeWithDo +
        "하고 싶어했던 당신, 오늘은 소중한 사람들과 함께 저녁을 먹으며 시간을 보내는 것은 어떤가요? 진정한 행복과 힐링은 특별한 곳이 아닌 일상 속에서 찾을 수 있습니다.";
    else
      restText =
        "한국(으)로 혼자 여행을 떠나고 싶어했던 당신, 잠시 모든걸 내려놓고 혼자 여행을 떠나보는건 어떤가요? 새로운 곳에서의 신선한 경험들은 길었던 당신의 일상에 쉼표가 되어줄 것입니다.";
    
    return restText;
  };

  const name = localStorage.getItem("name") ?? "홍길동";
  const selfie = JSON.parse(localStorage.getItem("photo")) ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_yrd8qyMAeTKfxPH00Az2BqE561qnoB5Ulw&usqp=CAU";
  const flower = localStorage.getItem("flower") ?? "rose";
  const travelOrHome = localStorage.getItem("choice_p8") ? localStorage.getItem("choice_p8").startsWith("travel") ? "travel" : "home" : "home";
  const deathMonthDay = (localStorage.getItem("deathMonth") ?? "11") + "월 " + (localStorage.getItem("deathDay") ?? "11") + "일";
  const alias = localStorage.getItem("alias") ?? "나보다 남을 더 사랑했던";
  const lastWord = localStorage.getItem("lastWord") ?? "서비스를 마지막으로 나는 떠난다";
  const flowerInKorean = translateFlower(flower);
  const happyMoment = localStorage.getItem("travelHappyMoment") ?? localStorage.getItem("homeHappyMoment") ?? "주님을 만났던 순간";
  const sadMan = localStorage.getItem("sadMan") ?? "홍길동";
  const restText = makeRestText(localStorage.getItem("choice_p8"));
  const to = JSON.parse(localStorage.getItem("messages")) 
    ? JSON.parse(localStorage.getItem("messages")).map((e) => e.to).join(", ")
    : "홍길동 ";

  const data = {
    deco_data: {
      selfie: selfie,
      flower: flower,
      travelOrHome: travelOrHome,
    },
    title_data: {
      writer: name + "의",
      lastPage: "마지막페이지",
    },
    l_paras_data: {
      img: END,
      paragraph1: {
        header: name + "의 묘",
        body: (
          <>
            {name}은 {deathMonthDay} 세상을 떠났습니다.
            <br />
            {name}의 죽음을 추모하는 사람들이 그의 묘비 앞에서 {name}을 추억합니다. {alias} 사람 {name}은 {lastWord} 라는 한마디를 남겼습니다.
          </>
        ),
      },
      paragraph2: {
        header: name + "의 장례식",
        body: name + "의 장례식에 온 사람들은 가장 아름다웠던 순간이 담긴 그의 영정사진을 보았습니다. 그리고 그를 추모하며 " + flowerInKorean + " 한 송이를 헌화했습니다.",
      },
      paragraph3: {
        header: name + "의 행복했던 순간",
        body: (
          <>
            {name}은 {happyMoment}에 행복함을 만끽했습니다.
            <br />그 순간, {name}은 세상 누구보다도 행복한 사람이라고 느꼈습니다.
          </>
        ),
      },
    },
    r_paras_data: {
      img: AND,
      paragraph1: {
        header: "가장 소중한 사람",
        body:
          sadMan +
          "은 당신의 죽음에 가장 슬퍼했습니다. 아마도 당신을 가장 소중하게 여기는 사람일 것입니다. 이런 사람이 당신에게 있다는 것은 정말 큰 행운입니다. 오늘 하루 " +
          sadMan +
          "에게 마음을 담은 따뜻한 한 마디를 전하는 건 어떤가요?",
      },
      paragraph2: {
        header: "일상의 쉼표",
        body: restText,
      },
      paragraph3: {
        header: "전하고 싶은 말",
        body:
          "당신은 죽기전 " +
          to +
          "에게 유서를 남겼습니다. 그곳에 적힌 이야기는 당신이 정말로 전하고 싶은 말일 것입니다. 조금은 부끄러운 마음에 말하지 못했다면 이번엔 용기를 내어 직접 전달하거나 작은 행동으로 표현하세요. 계속 미루다보면 표현할 기회를 놓칠 수도 있습니다.",
      },
    },
    detailed_buttons_data: {
      print_button_data: {
        icon: {
          alt: "print-icon",
          src: PrintIcon,
        },
        span_data: "인쇄하기",
        onClick: useReactToPrint({
          content: () => page.current,
        }),
      },
      home_button_data: {
        icon: {
          alt: "home-icon",
          src: HomeIcon,
        },
        span_data: "홈으로",
        onClick: () => {
          history.push('/');
        },
      },
    },
  };

  const styleName = {
    tp_style: [],
    title_style: {
      writer_style: ["title", "writer"],
      lastPage_style: ["title", "lastPage"],
    },
    l_paras_style: {
      img_style: "end",
      para1_style: {
        head_style: ["para", "head"],
        body_style: ["para", "body", "h3"],
      },
      para2_style: {
        head_style: ["para", "head"],
        body_style: ["para", "body", "h1"],
      },
      para3_style: {
        head_style: ["para", "head"],
        body_style: ["para", "body", "h1"],
      },
    },
    r_paras_style: {
      img_style: "and",
      para1_style: {
        head_style: ["para", "head"],
        body_style: ["para", "body", "h3"],
      },
      para2_style: {
        head_style: ["para", "head"],
        body_style: ["para", "body", "h2"],
      },
      para3_style: {
        head_style: ["para", "head"],
        body_style: ["para", "body", "h2"],
      },
    },
    detailed_buttons_style: {
      print_button_style: {
        button_style: ["circle", "print", "page-break"],
        icon_style: ["print"],
        span_style: ["nanum", "extra-bold", "print", "page-break"],
      },
      home_button_style: {
        button_style: ["circle", "home", "page-break"],
        icon_style: ["home"],
        span_style: ["nanum", "extra-bold", "home", "page-break"],
      },
    },
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block("정말 홈으로 돌아가실건가요?");
    return () => {
      unblock();
    };
  }, [history]);

  return (
    <div className={classNames("Page", "P29", "page-background-break")} ref={page}>
      <SeparatedTemplate29 data={data} styleName={styleName}></SeparatedTemplate29>
    </div>
  );
}

export default P29;
