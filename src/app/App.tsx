import { useRef } from 'react';
import svgPaths from '../imports/svg-09q6k8jxnb';
import imgFrame9 from "figma:asset/f7669dbc0b40c89bfc110a0ea9d6cd22e17ca4b7.png";
import imgFrame10 from "figma:asset/3deecaa9c153ab9c9dde5f3e3331a744bd58b656.png";
import imgFrame11 from "figma:asset/62343edb869d74c5ad9d91e3501d2cc049cd8116.png";
import imgFrame12 from "figma:asset/8fb94929d63d282277fd26fb6ba6bcb832c77cea.png";
import imgFrame13 from "figma:asset/55a1cf76732780bf1ee64783b0baf29113db46a2.png";
import imgImage1 from "figma:asset/4d67d874e7e6db0fc59e285ca668f22c08a0afc7.png";
import imgSpot from "figma:asset/dc3de119be5640e9033a3fb89ac5fc8069a28ecf.png";

export default function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Header */}
      <header className="fixed top-[48px] left-1/2 translate-x-[-50%] z-50 w-[1300px] max-w-[calc(100%-40px)] flex items-center justify-between">
        <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white uppercase">
          <p className="leading-[normal]">figma</p>
        </div>
        <nav className="flex font-['Montserrat',sans-serif] font-bold gap-[60px] items-center justify-end leading-[0] relative shrink-0 text-[20px] text-center text-nowrap text-white uppercase">
          <button 
            onClick={() => scrollToSection(aboutRef)}
            className="flex flex-col justify-center relative shrink-0 hover:text-[#ffc800] transition-colors"
          >
            <p className="leading-[normal] text-nowrap">About</p>
          </button>
          <button 
            onClick={() => scrollToSection(portfolioRef)}
            className="flex flex-col justify-center relative shrink-0 hover:text-[#ffc800] transition-colors"
          >
            <p className="leading-[normal] text-nowrap">portfolio</p>
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="flex flex-col justify-center relative shrink-0 hover:text-[#ffc800] transition-colors"
          >
            <p className="leading-[normal] text-nowrap">contact us</p>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full h-[860px]">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgSpot} />
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="w-[1301px] max-w-full px-4 py-[100px] flex flex-col gap-[70px]">
          <div className="flex flex-col gap-[11px] items-center leading-[0] text-center text-nowrap uppercase w-full">
            <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black">
              <p className="leading-[normal] text-nowrap">about</p>
            </div>
            <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[16px]">
              <p className="leading-[normal] text-nowrap">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="content-center flex flex-wrap gap-[20px] items-center relative shrink-0 w-full">
            {/* Service 1 - Cart Icon */}
            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-[320px] relative shrink-0">
              <div className="bg-[#ffc800] content-stretch flex items-center justify-center px-[52px] py-[49px] relative rounded-[80px] shrink-0 size-[160px]">
                <div className="relative shrink-0 size-[48px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                    <g>
                      <path d={svgPaths.p2f9b0f00} fill="black" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                    <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                      <p className="leading-[normal]">service</p>
                    </div>
                    <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                      <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Notebook Icon */}
            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-[320px] relative shrink-0">
              <div className="bg-[#ffc800] content-stretch flex items-center justify-center px-[52px] py-[49px] relative rounded-[80px] shrink-0 size-[160px]">
                <div className="relative shrink-0 size-[48px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                    <g>
                      <path d={svgPaths.p38d4ab00} fill="black" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                    <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                      <p className="leading-[normal]">service</p>
                    </div>
                    <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                      <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - Settings Icon */}
            <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center min-h-px min-w-[320px] relative shrink-0">
              <div className="bg-[#ffc800] content-stretch flex items-center justify-center px-[52px] py-[49px] relative rounded-[80px] shrink-0 size-[160px]">
                <div className="overflow-clip relative shrink-0 size-[48px]">
                  <div className="absolute contents inset-[8.33%]">
                    <div className="absolute contents inset-[8.33%]">
                      <div className="absolute inset-[8.33%]">
                        <div className="absolute inset-[-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                            <g>
                              <path d={svgPaths.p26298b00} fill="white" stroke="white" strokeLinejoin="round" strokeWidth="4" />
                              <path d={svgPaths.p1781a600} fill="black" stroke="black" strokeLinejoin="round" strokeWidth="4" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                    <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                      <p className="leading-[normal]">service</p>
                    </div>
                    <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                      <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={portfolioRef} className="bg-[#f1f1f1] w-full flex flex-col items-center py-[100px]">
          <div className="w-[1301px] max-w-full px-4">
            <div className="flex flex-col gap-[11px] items-center leading-[0] text-center text-nowrap uppercase w-full mb-[70px]">
              <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-black">
                <p className="leading-[normal] text-nowrap">Portfolio</p>
              </div>
              <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center relative shrink-0 text-[#555] text-[16px]">
                <p className="leading-[normal] text-nowrap">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="content-center flex flex-wrap gap-[40px_20px] items-center relative shrink-0 w-full">
              {/* Portfolio Item 1 */}
              <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
                <div className="relative shrink-0 h-[320px] w-[420px] max-w-full">
                  <div className="absolute bg-[#ffc800] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame9} />
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                        <p className="leading-[normal]">service</p>
                      </div>
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                        <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 2 */}
              <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
                <div className="relative shrink-0 h-[320px] w-[420px] max-w-full">
                  <div className="absolute bg-[#ffc800] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame10} />
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                        <p className="leading-[normal]">service</p>
                      </div>
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                        <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
                <div className="relative shrink-0 h-[320px] w-[420px] max-w-full">
                  <div className="absolute bg-[#ffc800] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame11} />
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                        <p className="leading-[normal]">service</p>
                      </div>
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                        <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 4 */}
              <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
                <div className="relative shrink-0 h-[320px] w-[420px] max-w-full">
                  <div className="absolute bg-[#ffc800] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame12} />
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                        <p className="leading-[normal]">service</p>
                      </div>
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                        <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Portfolio Item 5 */}
              <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-center max-w-[420px] min-h-px min-w-[320px] relative shrink-0">
                <div className="relative shrink-0 h-[320px] w-[420px] max-w-full">
                  <div className="absolute bg-[#ffc800] inset-0" />
                  <img alt="" className="absolute max-w-none object-50%-50% object-cover size-full" src={imgFrame13} />
                </div>
                <div className="relative shrink-0 w-full">
                  <div className="flex flex-col items-center size-full">
                    <div className="content-stretch flex flex-col gap-[10px] items-center leading-[0] px-[20px] py-0 relative text-center uppercase w-full">
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[24px] text-black text-nowrap">
                        <p className="leading-[normal]">service</p>
                      </div>
                      <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center min-w-full relative shrink-0 text-[#555] text-[16px] w-[min-content]">
                        <p className="leading-[1.6]">Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="bg-[#5d5d5d] w-full flex flex-col items-center py-[100px]">
          <div className="w-[1301px] max-w-full px-4">
            <div className="flex flex-col gap-[11px] items-center leading-[0] text-center text-nowrap uppercase w-full mb-[70px]">
              <div className="flex flex-col font-['Montserrat',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-white">
                <p className="leading-[normal] text-nowrap">contact us</p>
              </div>
              <div className="flex flex-col font-['Montserrat',sans-serif] font-normal justify-center relative shrink-0 text-[#ebebeb] text-[16px]">
                <p className="leading-[normal] text-nowrap">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div className="h-[600px] overflow-hidden relative shrink-0 w-full rounded-lg">
              <img alt="" className="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
