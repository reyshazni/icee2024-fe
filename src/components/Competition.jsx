import Image from 'next/image'
import BCC from '../images/BCC.png'
import IBDC from '../images/Bridge.png'
import CETC from '../images/Tender.png'
import SlideFromLeft from './Animations/SlideFromLeft'
import SlideFromRight from './Animations/SlideFromRight'

function CompCard({ type, icon, title, subtitle, desc }) {
  switch (type) {
    case 'left':
      return (
        <div className="flex w-[300px] md:w-[400px] lg:w-[85vw] lg:justify-between lg:border-b-[5px] lg:border-b-[#C8EBE2]">
          <div className="flex h-[100px] min-w-[100px] items-center justify-center bg-[#C8EBE2] shadow-[4px_25px_100px_0_rgba(250,250,250,0.20)] lg:h-[150px] lg:w-[150px] ">
            <div className="h-[66px] w-[66px] lg:h-[100px] lg:w-[100px]">
              <Image src={icon} height={200} width={200} />
            </div>
          </div>
          <div className="flex w-[85%] flex-col justify-between lg:flex-row lg:items-center">
            <div className="ml-[8px] flex flex-col items-start justify-between">
              <h1 className="font-adam text-[30px] font-bold leading-[30px] text-[#FAFAFA] lg:text-[60px] lg:leading-normal">
                {title}
              </h1>
              <h2 className="font-adam text-[10px] font-bold text-[#FAFAFA] lg:text-[20px] ">
                {subtitle}
              </h2>
            </div>
            <span className="mb-[3px] flex h-[2.5px] w-full rounded bg-[#C8EBE2] lg:my-0 lg:hidden" />
            <div className="ml-[8px] lg:w-[55%]">
              <p className="font-montserrat text-[8px] text-[#FAFAFA] md:text-[10px] lg:text-end lg:text-[18px]">
                {desc}
              </p>
            </div>
          </div>
        </div>
      )

    case 'right':
      return (
        <div className="flex w-[300px] md:w-[400px] lg:w-[85vw] lg:justify-between lg:border-b-[5px] lg:border-b-[#C8EBE2]">
          <div className="flex w-[85%] flex-col-reverse justify-between lg:flex-row lg:items-center ">
            <div className="mr-[8px] lg:w-[55%]">
              <p className="text-end font-montserrat text-[8px] text-[#FAFAFA] md:text-[10px] lg:text-start lg:text-[18px]">
                {desc}
              </p>
            </div>
            <span className="mb-[3px] flex h-[2.5px] w-full rounded bg-[#C8EBE2] lg:my-0 lg:hidden" />

            <div className="mr-[8px] flex flex-col items-end justify-evenly">
              <h1 className="font-adam text-[30px] font-bold leading-[30px] text-[#FAFAFA] lg:text-[60px] lg:leading-[70px]">
                {title}
              </h1>
              <h2 className="text-end font-adam text-[10px] font-bold text-[#FAFAFA] lg:mt-[10px] lg:text-[20px] lg:leading-[25px]">
                {subtitle}
              </h2>
            </div>
          </div>
          <div className="flex h-[100px] min-w-[100px] items-center justify-center bg-[#C8EBE2] shadow-[4px_25px_100px_0_rgba(250,250,250,0.20)] lg:h-[150px] lg:w-[150px]">
            <div className="h-[66px] w-[66px] lg:h-[100px] lg:w-[100px]">
              <Image src={icon} height={200} width={200} />
            </div>
          </div>
        </div>
      )
    default:
      break
  }
}

export default function Competition() {
  return (
    <section
      id="competition"
      className="mb-[50px] flex flex-col items-center gap-[50px] px-[100px] lg:mb-[200px]"
    >
      <div className="">
        <h1 className="font-sarmady text-[60px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[120px]">
          Competition
        </h1>
      </div>

      <div className="flex flex-col items-center gap-[50px] lg:gap-[100px]">
        <SlideFromRight>
          <CompCard
            type={'left'}
            icon={BCC}
            title={'BCC'}
            subtitle={'Business Case Competition'}
            desc={
              'Business Case Competition is a competition where participants are strived to develop the best solution to a given companys business-related problems using problem-solving skills.'
            }
          />
        </SlideFromRight>

        <SlideFromLeft>
          <CompCard
            type={'right'}
            icon={CETC}
            title={'CETC'}
            subtitle={'Civil Engineering Tender Competition'}
            desc={
              'Civil Engineering Tender Competition is a competition where participants are challenged to make bid from a given project while actualizing it in tender documents with optimum cost and proper construction methods'
            }
          />
        </SlideFromLeft>

        <SlideFromRight>
          <CompCard
            type={'left'}
            icon={IBDC}
            title={'IBDC'}
            subtitle={'Innovative Bridge Design Competition'}
            desc={
              'Innovative Bridge Design Competition is a competition where participants will strive to design an efficient and economic bridge while implementing technology-based innovation on its operational planning'
            }
          />
        </SlideFromRight>
      </div>
    </section>
  )
}
