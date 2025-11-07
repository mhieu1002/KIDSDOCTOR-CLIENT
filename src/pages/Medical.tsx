import "../styles/medical.scss";
import { useNavigate } from "react-router-dom";
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

  // ✅ Tạo slug từ title
  const toSlug = (str: string) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // ✅ Mở trang chi tiết
  const handleOpen = (post: any) => {
    const slug = toSlug(post.title);
    navigate(`/bai-viet/${post.id}-${slug}`);
  };

  // ✅ Xóa ảnh trong nội dung đầu bài
  const stripLeadingImages = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    doc.querySelectorAll("img").forEach((img) => img.remove());
    return doc.body.innerHTML;
  };

  return (
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
  );
}
