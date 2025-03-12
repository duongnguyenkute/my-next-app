import Button from "../components/Button";


export default function Home() {
    return (
      <div className="max-w-[1512px]">
        <div className="content relative  flex justify-between items-center">
          {/* Lớp phủ 1 (từ secondary xuống button-primary, 75%-25%) */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary via-75% to-button-primary"></div>

          {/* Lớp phủ 2 (từ button-primary lên secondary, 25%-75%) */}
          <div className="absolute inset-0 bg-gradient-to-t from-button-primary via-button-primary via-25% to-secondary opacity-50"></div>

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
       
      </div>
    );
  }
  