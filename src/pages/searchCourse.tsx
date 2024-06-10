import FooterSection3 from "../component/footer/FooterSection3";
import HeaderSection10 from "../component/header/HeaderSection10";
import SearchCourseComponent from "../component/searchcourse";

const SearchCourse = () => {
  return (
    <div className="home-13">
      <HeaderSection10
        style="home-13-header"
        darkLogo="assets/images/logos/tl-13-logo.png"
        lightLogo="assets/images/logos/tl-13-logo-light.png"
      />
      <SearchCourseComponent />
      <FooterSection3
        logo="assets/images/logos/tl-13-logo-light.png"
        style=""
      />
    </div>
  );
};

export default SearchCourse;
