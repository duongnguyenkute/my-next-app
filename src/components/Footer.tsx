import Line from "./Line";
import Container from "./Container";

const Footer = () => {
    return (
      <footer className=" " >
        <Container>
            <div className=" px-[72px] py-[100px] flex justify-center space-x-[50px]">
                {/*Contact Item*/}
                <div className="flex flex-col space-y-[33px] w-1/4">
                    <div>
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <div>
                        <p>
                            9425 North MacArthur Blvd,
                            <br />
                            Suite 100
                            <br />
                            Irving, TX 75063-4706
                        </p>
                        <br />
                        <p>
                            <strong className="font-bold">Phone:</strong> (972) 243-2272 <br />
                            <strong className="font-bold">Fax:</strong> (972) 484-2720 <br />
                            <strong className="font-bold">E-mail Us</strong>
                        </p>
                    </div>
                </div>
                {/*About us Item*/}
                <div className="flex flex-col space-y-3 w-1/4">
                    <h4 className="text-[18px] font-bold leading-[120%]">About Us</h4>
                    <p>The American Respiratory Care Foundation is a nonprofit organization 
                        formed for the purpose of supporting research, 
                        education, and charitable activities.
                        <br />
                        <br />
                        The ARCF seeks to educate the public about respiratory health, assist 
                        in the training and continuing education of health care providers, and 
                        improve the quality of our environment.
                    </p>
                </div>
                {/*How We Give Item*/}
                <div className="flex flex-col space-y-3 w-1/4" >
                    <h4 className="text-[18px] font-bold leading-[120%]">How We Give</h4>
                    
                    <p>Student Awards</p>
                    <Line></Line>
                    <p>Research Awards & Grants</p>
                    <Line></Line>
                    <p>Achievement Awards</p>
                    <Line></Line>
                    <p>Literary Awards</p>
                    <Line></Line>
                    <p>International Fellowship Program</p>
                </div>
                {/*Donations and Support Item*/}
                <div className="flex flex-col space-y-3 w-1/4">
                    <h4 className="text-[18px] font-bold leading-[120%]">Donations & Support</h4>
                    
                    <p>Make A Donation</p>
                    <Line></Line>
                    <p>Endowments</p>
                    <Line></Line>
                    <p>Sponsors and Donors</p>
                    <Line></Line>
                    <p className="">Support for International Fellowships</p>
                </div>
            </div>
            <div className="flex justify-between px-[74px] pt-[23px] pb-[35px] border-t border-[rgba(107,109,117,0.75)]">
                <p className="text-[12px] font-semibold leading-[120%] text-[rgba(107,109,117,0.75)]">
                    © 2024 American Respiratory Care Foundation. All Rights Reserved.
                </p>
                <p className="text-[12px] font-semibold leading-[120%] text-[rgba(107,109,117,0.75)]">
                The American Respiratory Care Foundation is a 501(c)(3) charitable organization.
                </p>
            </div>
        </Container>
        
    
      </footer>
    );
  };
  
  export default Footer;
  