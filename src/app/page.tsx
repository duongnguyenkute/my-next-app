import Button from "../components/Button";
import Container from "../components/Container";
import HowWeGiveItem from "../components/HowWeGiveItem";
import AwardsItem from "../components/AwardsItem";
import NewsItem from "../components/NewsItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
      <div className="w-full">
        {/* Our Mission Section*/}
        <Container>
          <div className="content relative  flex justify-between items-center" 
          style={{ backgroundImage: "url('/images/ARCF-GRADIENT 1.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
            {/* Nội dung bên trái */}
            <div className="content_left flex flex-col space-y-4 relative z-10 w-[543px] h-[260px]  mt-[102px] mr-[11px] ml-[140px] mb-[149px] ">
              <h2 className="font-bold text-[64px] text-white relative z-10">
              Our Mission
              </h2>
              <p className="text-white font-normal relative text-[22px] ">
                ARCF is dedicated to promoting respiratory health through research, education, and patient-focused philanthropic activities.
              </p>

              <div className="button_content flex gap-x-10 items-center">
                <Button className="bg-white text-primary ">Apply</Button>
                <Button className="bg-white text-primary text-">Donate</Button>
              </div>
            </div>

            {/* Nội dung bên phải */}
            <div className="content_right relative z-10 w-[818px] h-full ">
              <img className="w-full h-full object-fill" src="/images/headerimg.png" alt="Header Image" />
            </div>
          </div>      
        </Container>
        {/* How we Give Section*/}
        <Container className="h-[470px]">
          <div className="pt-[71px] pb-[107px] px-[140px]">
            <div className="w-[1233px] h-[297px] flex flex-col space-y-[40px] items-center">
            <div className="text-center justify-start text-primary text-5xl font-bold  leading-10">How We Give</div>
              <div className="flex justify-center items-center space-x-[168px]">
                <HowWeGiveItem 
                  imageSrc="/images/GraduationCap.png" 
                  title1="Student" 
                  title2="Awards" 
                />

                <HowWeGiveItem 
                  imageSrc="/images/BookOpenText.png"
                  title1="Research Awards" 
                  title2="& Grants" 
                   
                />

                <HowWeGiveItem 
                  imageSrc="/images/Trophy.png"
                  title1="Achievement" 
                  title2="Awards"  
                />

                <HowWeGiveItem 
                  imageSrc="/images/Globe.png" 
                  title1="International" 
                  title2="Fellowships"   
                />
              </div>
            </div>
          </div>
        </Container>
        {/*Awards Section*/}
        <Container>
          <div className="pt-[71px] pb-[107px] px-[140px] bg-primary ">
            <div className="w-[1233px] h-[297px] flex flex-col space-y-[75px]  items-center">
              <div className="text-center justify-start text-white text-5xl font-bold  leading-10">What We Gave in 2020</div>
                <div className="flex justify-center items-center space-x-[28px]">
                  <AwardsItem 
                    amount="$23,766"
                    title1="In Student" 
                    title2="Education Awards" >
                  </AwardsItem>

                  <AwardsItem 
                    amount="$9,216"
                    title1="In Research" 
                    title2="Awards & Grants" >
                  </AwardsItem>

                  <AwardsItem 
                    amount="$8,041"
                    title1="In Achievement" 
                    title2="Awards" >
                  </AwardsItem>

                  <AwardsItem 
                    amount="$3,900"
                    title1="In Fellowships" 
                    title2="Given" >
                  </AwardsItem> 
                </div>
              </div>
            
          </div>
          
        </Container>
        {/*News Section*/}
        <Container>
          <div className="px-[140px] pt-[65px] pb-[75px]">
            <div  className="flex flex-col justify-center items-center ">
              <h2 className="text-primary text-[46px] font-bold leading-10 pb-[75px]">Foundation News</h2>
              <div className="flex justify-center space-x-[83px]">
                <NewsItem
                  imgSrc="/images/Mask group.png"
                  date="AUGUST 15, 2024"
                  title="ARCF 2024 Fundraising Event"
                  description="Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the respiratory care profession..."
                />

                <NewsItem
                  imgSrc="/images/Mask group (1).png"
                  date="AUGUST 15, 2024"
                  title="ARCF 2024 Fundraising Event"
                  description="Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the respiratory care profession..."
                />

                <NewsItem
                  imgSrc="/images/amazon-smile-sm.png"
                  date="AUGUST 15, 2024"
                  title="ARCF 2024 Fundraising Event"
                  description="Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the respiratory care profession..."
                />
              </div>
              <div className="flex pt-[306px] ">
                <img src="/images/ArrowCircleLeft.png" alt="" className="h-8 w-8" />
                <img src="/images/ArrowCircleRight.svg" alt="" className="h-8 w-8" />
              </div>
            </div>
          </div>
        </Container>
        {/*Mission & Conference Section*/}
        <Container className="">
          <div className="flex justify-center items-stretch h-full w-full">
            {/* Mission */}
            <div className="bg-secondary flex-1 w-1/2 pl-[72px] py-[53px] pr-[93px] flex flex-col min-h-full">
              <h3 className="text-white text-[32px] font-normal leading-[120%] pb-3">
                Your Donations Support Our Mission
              </h3>
              <p className="text-white text-[18px] font-normal leading-[144%] pb-[33px]">
                The American Respiratory Care Foundation is a nonprofit organization formed for the purpose of supporting research, education, and charitable activities.
                <br />
                <br />
                The ARCF seeks to educate the public about respiratory health, assist in the training and continuing education of health care providers, and improve the quality of our environment.
              </p>
              <Button className="w-[186px] h-[49px] mt-auto">Donate Now</Button>
            </div>

            {/* Conference Section */}
            <div className="bg-primary flex-1 w-1/2 pr-[259px] py-[53px] pl-[82px] relative flex flex-col min-h-full">
              <div className="w-[415px]"> 
                <h3 className="text-white text-[32px] font-normal leading-[120%] pb-3">
                  61st Respiratory Care <br />
                  Journal Conference
                </h3>
                <p className="text-white text-[18px] font-normal leading-[144%] pb-[33px]">
                  June 19-21, 2024 <br />
                  Tampa, FL
                </p>
                <p className="text-white text-[22px] font-semibold italic leading-[115%] pb-[50px]">
                  Pediatric Asthma: Management <br />
                  Across the Continuum of Care
                </p>
              </div>

              <Button className="w-[289px] h-[49px] mt-auto">Sponsorship Opportunities</Button>
              <div className="absolute top-[63px] right-[89px] w-[200px] h-[267px]">
                <img src="/images/report.png" alt="" />
              </div>
            </div>
          </div>
        </Container>




      </div>


    );
  }
  