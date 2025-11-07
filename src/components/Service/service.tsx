import "./service.scss";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../hooks/usePost";
import { BASE_URL } from "../../constants";

export default function Service() {
  const navigate = useNavigate();

  const { posts } = usePosts({ page: 1, pageSize: 1000 });

  const postList =
    posts?.data.posts.filter(
      (post: any) =>
        post.isActive === true &&
        post.postGroup?.title?.toLowerCase().trim() === "dịch vụ y tế"
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

  return (
    <section className="service-team">
      <div className="container">
        <div className="heading">
          <h2>Dịch Vụ Khám Bệnh</h2>
          <div className="line"></div>
        </div>

        <div className="service-list">
          {postList.map((service: any) => (
            <div
              className="service-card"
              key={service.id}
              onClick={() => handleOpen(service)}
              style={{ cursor: "pointer" }}
            >
              <div className="service-img">
                <img
                  src={`${BASE_URL.BASE_URL_IMAGE}${service.thumbnail}`}
                  alt={service.title}
                />
              </div>
              <div className="service-info">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
