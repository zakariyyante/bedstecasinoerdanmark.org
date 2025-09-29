import Banner from "./components/Banner";
import BrandsWrapper from "./components/BrandsWrapper";
import Content from "./components/Content";
export const dynamic = "force-dynamic";

const mock = [
  // {
  //   img: "/img/moonwins.png",
  //   bonusText: "up to €6,500 + 180 Free Spins",
  //   name: "MoonWin",
  //   url: "https://clickmoonpart.com/aac8fcf9f?subid=MoonWin-Dk01VG&clickid=",
  //   minDepo: "10 €",
  //   mobileOnly: true,
  // },
  // {
  //   img: "/img/boomerangs.png",
  //   bonusText: "700% up to 10000€ + 725FS",
  //   name: "boomerang-bet.io",
  //   url: "https://boomiotraff.com/g24f8a57f?subid=Boomerang-Dk01VG&clickid=",
  //   minDepo: "10 €",
  //   mobileOnly: true,
  // },
 
  // {
  //   img: "/img/spinrise.png",
  //   bonusText: "Up to €5,555 + 257 Free Spins",
  //   name: "Spinrise",
  //   url: "https://clickspinrise.com/ab23e5ceb?subid=Spinrise-Dk01VG&clickid=",
  //   minDepo: "10 €",
  //   mobileOnly: true,
  // },
  // {
  //   img: "/img/winhero.png",
  //   bonusText: "325% op til 28.000 KR + 500 FS",
  //   name: "Winhero",
  //   url: "https://goplaywithstars.com/tc3819ca8?visit_id=WinHero-Dk01VG&click_id=",
  //   minDepo: "25 €",
  //   mobileOnly: true,
  // },
  
  // {
  //   img: "/img/betibet.png",
  //   bonusText: "700% up to 10 000 € + 725 FS",
  //   name: "Betibet",
  //   url: "https://bettraff.com/gcd380954?subid=Betibet-Dk01VG&clickid=",
  //   minDepo: "10 €",
  //   mobileOnly: true,
  // },
  {
    img: "/img/expekt.webp",
    bonusText: "Bonus Offer-  FÅ 50 GYLDNE FREESPINS",
    name: "expekt",
    url: "https://nye.expekt.dk/redirect.aspx?pid=3732317&lpid=1255&bid=17147&s1=Expekt-DK01ZZ&s4=",
    minDepo: "10 €",
  },
  // {
  //   img: "/img/netbet.png",
  //   bonusText: "Bonus Offer- KUN FOR NYE KUNDER 100% OP TIL 1,000 DKK",
  //   name: "netbet",
  //   url: "https://netbet.livepartners.com/view.php?z=178753&subid=NetBet-Dk01VG&cid=",
  //   minDepo: "20 €",
  // },
  // {
  //   img: "/img/playjango.png",
  //   bonusText: "VELKOMMEN TIL PLAVIANGO! INDBETAL OG FA 100% OP TIL 500KR",
  //   name: "playjango",
  //   url: "https://record.affilistars.com/_od3_xSw98epxtkqLbPQI82Nd7ZgqdRLk/5/?campaign.name=PlayJango-Dk01VG&payload=",
  //   minDepo: "20 €",
  // },
  // {
  //   img: "/img/marathon.png",
  //   bonusText:
  //     "VELKOMSTBONUS - KUN NYE KUNDER 100 % AF DIN INDBETALING OP TIL 500 KR.",
  //   name: "MarathonBet",
  //   url: "https://mrthnbet.dk/df2286dd7?subid=MarathonBet-Dk01VG&clickid=",
  //   minDepo: "20 €",
  // },
  // {
  //   img: "/img/campobet.png",
  //   bonusText: "VELKOMSTBONUS 100% OP TIL 1000 KR",
  //   name: "Campobet",
  //   url: "https://campobetdk.servclick1move.com/?mid=22869_1354998&var1=CampoBet-Dk01VG&clickid=",
  //   minDepo: "20 €",
  // },
  // {
  //   img: "/img/betinia.webp",
  //   bonusText: "VELKOMSTBONUS 100% OP TIL 1.000 KR",
  //   name: "Betinia",
  //   url: "https://betiniadk.servclick1move.com/?mid=22869_1070053&subid=Betinia-Dk01VG&clickid=",
  //   minDepo: "20 €",
  // },
];

export default function Home() {
  return (
    <>
      <Banner title={"10 Best Online Casino Sites DK"} />
      <BrandsWrapper mock={mock} />
      <Content />
    </>
  );
}
