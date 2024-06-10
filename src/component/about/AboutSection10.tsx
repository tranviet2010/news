import FeatureTextSlider from "../slider/FeatureTextSlider";


const AboutSection10 = () => {
  const items = [
    { id: 1, text: 'Úc', img: 'https://ats.org.vn/storage/media/3pI3OgIUqR5EsleRpMnPVirZFm3k3KR6d1GKGU4C.jpeg' },
    { id: 2, text: 'Canada', img: 'https://ats.org.vn/storage/media/3pI3OgIUqR5EsleRpMnPVirZFm3k3KR6d1GKGU4C.jpeg' },
    { id: 3, text: 'Anh', img: 'https://ats.org.vn/storage/media/3pI3OgIUqR5EsleRpMnPVirZFm3k3KR6d1GKGU4C.jpeg' },
    { id: 4, text: 'Mỹ', img: 'https://ats.org.vn/storage/media/3pI3OgIUqR5EsleRpMnPVirZFm3k3KR6d1GKGU4C.jpeg' },
    { id: 5, text: 'Malaysia', img: 'https://ats.org.vn/storage/media/3pI3OgIUqR5EsleRpMnPVirZFm3k3KR6d1GKGU4C.jpeg' },
    { id: 6, text: 'Nhật bản', img: 'https://ats.org.vn/storage/media/3pI3OgIUqR5EsleRpMnPVirZFm3k3KR6d1GKGU4C.jpeg' },
  ];

  return (
    <section className="tl-13-about pt-120 pb-60">
      <div className="container">
        <h2 className="text-center">HỌC BỔNG DU HỌC</h2>
        <p className="text-center">Cập nhật ngay danh sách học bổng mới nhất cho tất cả các bậc học và tìm chương trình học bổng tối ưu nhất cho lộ trình du học của bạn</p>
        <div className="row gx-0 gy-4 gy-md-5 align-items-center justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="col-lg-4 efch-1 ef-img-r form-dh">
              <form>
                <h3>Tìm học bổng</h3>
                <p>Điền vào mẫu dưới đây để tìm học bổng tốt nhất cho bạn</p>
                <p>
                  <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </p>
                <p>
                  <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                  </select>
                </p>
                <input type="text" placeholder="Từ khoá ví dụ: Accounting" />
                <p className="text-center mt-2">
                  <button type="submit" className="tl-def-btn">Tìm kiếm</button>
                </p>
              </form>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              {items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="item-container">
                    <img src={item.img} alt={item.text} className="img-fluid item-image" />
                    <div className="item-overlay">
                      <div className="item-text">{item.text}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <FeatureTextSlider /> */}
    </section>
  );
};

export default AboutSection10;
