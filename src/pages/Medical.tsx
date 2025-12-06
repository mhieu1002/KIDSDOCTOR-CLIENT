import "../styles/medical.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { usePosts } from "../hooks/usePost";
import { BASE_URL } from "../constants";

export default function Medical() {
  const navigate = useNavigate();
  const { posts } = usePosts({ page: 1, pageSize: 1000 });

  const normalize = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .trim();

  const postList =
    posts?.data.posts.filter(
      (post: any) =>
        post.isActive === true &&
        normalize(post.postGroup?.title || "") !== normalize("Dịch vụ y tế")
    ) ?? [];

  const toSlug = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleOpen = (post: any) => {
    const slug = toSlug(post.title);
    navigate(`/bai-viet/${post.id}-${slug}`);
  };

  const stripLeadingImages = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    doc.querySelectorAll("img").forEach((img) => img.remove());
    return doc.body.innerHTML;
  };

  const pageUrl = "https://kidsdoctor.vn/kien-thuc-y-khoa";
  const ogImage = "https://kidsdoctor.vn/og-kien-thuc-y-khoa.jpg"; // đặt 1 ảnh đại diện SEO

  return (
    <>
      {/* ⭐ SEO CHO TRANG DANH SÁCH KIẾN THỨC Y KHOA ⭐ */}
      <Helmet>
        <title>Kiến Thức Y Khoa - Phòng khám Nhi KidsDoctor</title>

        <meta
          name="description"
          content="Tổng hợp các bài viết Kiến Thức Y Khoa dành cho bố mẹ: chăm trẻ, dinh dưỡng, bệnh lý thường gặp, hướng dẫn xử lý an toàn tại nhà. Cập nhật bởi đội ngũ bác sĩ Nhi Đồng 2."
        />

        <meta
          name="keywords"
          content="kiến thức y khoa, sức khỏe trẻ em, chăm sóc trẻ, bệnh trẻ em, phòng khám nhi, KidsDoctor, bác sĩ nhi đồng 2"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Kiến Thức Y Khoa - KidsDoctor" />
        <meta
          property="og:description"
          content="Chuyên mục Kiến Thức Y Khoa dành cho bố mẹ chăm sóc trẻ đúng cách. Bài viết được biên soạn bởi đội ngũ bác sĩ Bệnh viện Nhi Đồng 2."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Kiến Thức Y Khoa - KidsDoctor" />
        <meta
          name="twitter:description"
          content="Kiến thức sức khỏe trẻ em từ đội ngũ bác sĩ chuyên khoa Nhi."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* ⭐ Nội dung trang */}
      <section className="medical-team">
        <div className="container">
          <div className="heading">
            <h2>Kiến Thức Y Khoa</h2>
            <div className="line"></div>
          </div>

          <div className="medical-list">
            {postList.map((medical: any) => (
              <div
                className="medical-card"
                key={medical.id}
                onClick={() => handleOpen(medical)}
                style={{ cursor: "pointer" }}
              >
                <div className="medical-img">
                  <img
                    src={
                      medical.thumbnail
                        ? `${BASE_URL.BASE_URL_IMAGE}${medical.thumbnail.replace(
                            /\\/g,
                            "/"
                          )}`
                        : "/default.jpg"
                    }
                    alt={medical.title}
                  />
                </div>

                <div className="medical-info">
                  <h3>{medical.title}</h3>

                  {medical.content && (
                    <p
                      className="medical-desc"
                      dangerouslySetInnerHTML={{
                        __html: stripLeadingImages(medical.content),
                      }}
                    />
                  )}

                  <button
                    className="view-more"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpen(medical);
                    }}
                    style={{ alignSelf: "flex-end", marginRight: "12px" }}
                  >
                    XEM THÊM
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
