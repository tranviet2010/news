import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
type SliderSettings = {
  slidesToShow: number;
  asNavFor?: Slider | undefined;
  autoplay: boolean;
  speed: number;
  arrows: boolean;
};

const TestimonialSlider7 = () => {
  const sliderRef = useRef<Slider | null>(null);
  const imgNavRef = useRef<Slider | null>(null);
  const [sliderSettings, setSliderSetting] = useState<SliderSettings>({
    slidesToShow: 1,
    asNavFor: undefined,
    autoplay: true,
    speed: 1000,
    arrows: false,
  });

  useEffect(() => {
    const sliderSettings: SliderSettings = {
      slidesToShow: 1,
      asNavFor: imgNavRef.current as Slider,
      autoplay: true,
      speed: 1000,
      arrows: false,
    };
    setSliderSetting(sliderSettings);
  }, []);
  const testimonialImagesSettings = {
    slidesToShow: 1,
    draggable: false,
    arrows: false,
    swipe: false,
    fade: true,
    asNavFor: sliderRef.current as Slider,
    autoplay: true,
    speed: 1000,
  };

  useEffect(() => {
    if (sliderRef.current) {
      setSliderSetting((prevSettings) => ({
        ...prevSettings,
        asNavFor: imgNavRef.current as Slider,
      }));
    }
  }, []);
  return (
    <section
      className="tl-13-testimonial pt-120 pb-120 bg-defaults"
      data-background="assets/images/tl-13/testimonial-bg.png"
    >
      <div className="container">
        <h2 className="tl-13-section-title">
        HỌC SINH NÓI GÌ VỀ CHÚNG TÔI
        </h2>
        <div className="row gy-4 align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="tl-13-testimonial-img">
              <Slider
                className="tl-13-testimonial-user-slider"
                {...testimonialImagesSettings}
                ref={imgNavRef}
              >
                <img
                  src="assets/images/tl-4/testimony-1.jpg"
                  alt="User Image"
                />
                <img
                  src="assets/images/tl-4/testimony-2.jpg"
                  alt="User Image"
                />
              </Slider>

              <img
                src="assets/images/tl-13/quote-icon.png"
                alt="icon"
                className="tl-13-testimonial-quote-icon"
              />
            </div>
          </div>

          <div className="col-lg-7">
            <Slider
              className="tl-13-testimonial-slider"
              {...sliderSettings}
              ref={sliderRef}
            >
              <div className="tl-4-testimony-txt">
                <p className="tl-4-testimony-review">
                "Nhắc đến ATS em chỉ nghĩ được 1 từ thôi, đó là "Perfect". Trong suốt khoảng thời gian làm việc với chị Mai và 
                ATS thì em không còn hoang mang và băn khoăn nữa, vì chị Mai theo em rất là sát. Chị Mai luôn động viên em khi tình
                 hình dịch căng thẳng ảnh hưởng đến chuyện du học của em cũng như cập nhật thông tin từ trường bên Úc cho em. 
                Em cảm ơn công ty ATS và chị Mai rất nhiều vì đã hỗ trợ và theo sát em trong suốt quá trình xin học bổng."
                </p>

                <div className="tl-4-reviewer">
                  <img
                    src="assets/images/tl-4/user-1.jpg"
                    alt="User Image"
                    className="tl-4-reviewer-img"
                  />

                  <div className="tl-4-reviewer-txt">
                    <h6 className="tl-4-reviewer-name">Nguyễn THị Kim Tuyền</h6>
                    <span className="tl-4-reviewer-label">Học bổng A$15,000</span>
                  </div>
                </div>
              </div>
              <div className="tl-4-testimony-txt">
                <p className="tl-4-testimony-review">
                "Ở ATS, mọi người làm việc rất là tận tâm, em cần bất cứ việc gì mọi người đều giúp đỡ. Những khó khăn về phần thông tin, 
                những gì em chưa hiểu đều được chị Ngọc giải đáp rất là đầy đủ và chi tiết. Từ đó giúp em xác định được rõ trường học cũng 
                như yêu cầu học bổng. Em cảm ơn chị Ngọc và công ty ATS đã giúp đỡ em từ 
                lúc mới bắt đầu tìm hiểu tới khi hoàn tất các việc xin hồ sơ cũng như apply học bổng và làm visa."
                </p>

                <div className="tl-4-reviewer">
                  <img
                    src="assets/images/tl-4/user-2.jpg"
                    alt="User Image"
                    className="tl-4-reviewer-img"
                  />

                  <div className="tl-4-reviewer-txt">
                    <h6 className="tl-4-reviewer-name">Lê Phan Tuấn Kiệt</h6>
                    <span className="tl-4-reviewer-label">
                    Học bổng A$40,000
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider7;
