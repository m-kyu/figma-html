import svgPaths from "./svg-09q6k8jxnb";
import clsx from "clsx";
import imgFrame9 from "figma:asset/f7669dbc0b40c89bfc110a0ea9d6cd22e17ca4b7.png";
import imgFrame10 from "figma:asset/3deecaa9c153ab9c9dde5f3e3331a744bd58b656.png";
import imgFrame11 from "figma:asset/62343edb869d74c5ad9d91e3501d2cc049cd8116.png";
import imgFrame12 from "figma:asset/8fb94929d63d282277fd26fb6ba6bcb832c77cea.png";
import imgFrame13 from "figma:asset/55a1cf76732780bf1ee64783b0baf29113db46a2.png";
import imgImage1 from "figma:asset/4d67d874e7e6db0fc59e285ca668f22c08a0afc7.png";
import imgSpot from "figma:asset/dc3de119be5640e9033a3fb89ac5fc8069a28ecf.png";
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[48px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        {children}
      </svg>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">{children}</div>
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
        <p className="leading-[1.6]">{`Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem `}</p>
      </div>
    </Wrapper>
  );
}
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <Wrapper>
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
        <p className="leading-[normal]">{text}</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
        <p className="leading-[1.6]">{text1}</p>
      </div>
    </Wrapper>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[80px] items-center leading-[0] relative shrink-0 text-center text-nowrap uppercase w-full">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black">
        <p className="leading-[normal] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[16px]">
        <p className="leading-[normal] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}

function MdiCart() {
  return (
    <Wrapper1>
      <g id="mdi:cart">
        <path d={svgPaths.p2f9b0f00} fill="var(--fill-0, black)" id="Vector" />
      </g>
    </Wrapper1>
  );
}

function Frame() {
  return (
    <div className="bg-[#ffc800] content-stretch flex items-center justify-center px-[52px] py-[49px] relative rounded-[80px] shrink-0 size-[160px]">
      <MdiCart />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-[320px] relative shrink-0">
      <Frame />
      <Helper1 text="service" text1="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet" />
    </div>
  );
}

function StashNotebookSolid() {
  return (
    <Wrapper1>
      <g id="stash:notebook-solid">
        <path d={svgPaths.p38d4ab00} fill="var(--fill-0, black)" id="Vector" />
      </g>
    </Wrapper1>
  );
}

function Frame7() {
  return (
    <div className="bg-[#ffc800] content-stretch flex items-center justify-center px-[52px] py-[49px] relative rounded-[80px] shrink-0 size-[160px]">
      <StashNotebookSolid />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-[320px] relative shrink-0">
      <Frame7 />
      <Helper1 text="service" text1="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <g id="Group">
            <path d={svgPaths.p26298b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p1781a600} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[8.33%]" data-name="Mask group">
      <Group2 />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <path d="M0 0H48V48H0V0Z" fill="var(--fill-0, black)" id="Vector" />
      </svg>
    </div>
  );
}

function IconParkSolidSetting() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="icon-park-solid:setting">
      <MaskGroup />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#ffc800] content-stretch flex items-center justify-center px-[52px] py-[49px] relative rounded-[80px] shrink-0 size-[160px]">
      <IconParkSolidSetting />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-[320px] relative shrink-0">
      <Frame11 />
      <Helper1 text="service" text1="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-center flex flex-wrap gap-[20px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] h-[662px] items-start px-0 py-[100px] relative shrink-0 w-[1301px]" data-name="about">
      <Helper text="about" text1="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" />
      <Frame4 />
    </div>
  );
}

function Frame12() {
  return (
    <Wrapper2 additionalClassNames="h-[320px] w-[420px]">
      <div className="absolute bg-[#ffc800] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame9} />
    </Wrapper2>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
      <Frame12 />
      <Text text="service" />
    </div>
  );
}

function Frame14() {
  return (
    <Wrapper2 additionalClassNames="h-[320px] w-[420px]">
      <div className="absolute bg-[#ffc800] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame10} />
    </Wrapper2>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
      <Frame14 />
      <Text text="service" />
    </div>
  );
}

function Frame16() {
  return (
    <Wrapper2 additionalClassNames="h-[320px] w-[420px]">
      <div className="absolute bg-[#ffc800] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame11} />
    </Wrapper2>
  );
}

function Frame17() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
      <Frame16 />
      <Text text="service" />
    </div>
  );
}

function Frame18() {
  return (
    <Wrapper2 additionalClassNames="h-[320px] w-[420px]">
      <div className="absolute bg-[#ffc800] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame12} />
    </Wrapper2>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
      <Frame18 />
      <Text text="service" />
    </div>
  );
}

function Frame20() {
  return (
    <Wrapper2 additionalClassNames="h-[320px] w-[420px]">
      <div className="absolute bg-[#ffc800] inset-0" />
      <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame13} />
    </Wrapper2>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
      <Frame20 />
      <Text text="service" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-center flex flex-wrap gap-[40px_20px] items-center relative shrink-0 w-full">
      <Frame13 />
      <Frame15 />
      <Frame17 />
      <Frame19 />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[70px] items-start ml-0 mt-0 px-0 py-[100px] relative w-[1301px]">
      <Helper text="Portfolio" text1="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet" />
      <Frame21 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="bg-[#f1f1f1] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="portfolio">
      <Group1 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] h-[80px] items-center leading-[0] relative shrink-0 text-center text-nowrap uppercase w-full" data-name="title">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-white">
        <p className="leading-[normal] text-nowrap">contact us</p>
      </div>
      <div className="flex flex-col font-['Montserrat:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#ebebeb] text-[16px]">
        <p className="leading-[normal] text-nowrap">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[600px] overflow-auto relative shrink-0 w-[1301px]">
      <div className="absolute h-[1081px] left-[-2114.5px] top-[-341px] w-[3520px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[70px] items-start ml-0 mt-0 px-0 py-[100px] relative w-[1301px]">
      <Title />
      <Frame8 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame22 />
    </div>
  );
}

function Contactg() {
  return (
    <div className="bg-[#5d5d5d] content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="contactg">
      <Group3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0 w-[1920px]">
      <Wrapper2 additionalClassNames="h-[860px] w-full">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgSpot} />
      </Wrapper2>
      <About />
      <Portfolio />
      <Contactg />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch cursor-pointer flex font-['Montserrat:Bold',sans-serif] font-bold gap-[60px] items-center justify-end leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white uppercase">
      <button className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">About</p>
      </button>
      <button className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">portfolio</p>
      </button>
      <button className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[normal] text-nowrap">contact us</p>
      </button>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-1/2 top-[48px] translate-x-[-50%] w-[1300px]" data-name="header">
      <div className="flex flex-col font-['Montserrat:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white uppercase">
        <p className="leading-[normal]">figma</p>
      </div>
      <Frame9 />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop - 1">
      <Frame10 />
      <Header />
    </div>
  );
}