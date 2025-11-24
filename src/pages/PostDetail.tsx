import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import "../styles/postDetail.scss";

export default function PostDetail() {
  const { slug } = useParams(); // VD: 3-rua-vet-thuong-thay-bang-xxx
  const navigate = useNavigate();
  const postId = slug?.split("-")[0];

  const [post, setPost] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const formatVNDate = (dateStr: string) =>
    new Date(dateStr).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

  useEffect(() => {
    if (!postId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        // ✅ 1. Lấy bài hiện tại
        const res = await axios.get(`${BASE_URL.BASE_URL}/post/${postId}`);
        const postData = res.data.data;
        setPost(postData);

        // ✅ 2. Lấy tất cả bài viết
        const allRes = await axios.get(`${BASE_URL.BASE_URL}/post?page=1&pageSize=200`);
        const allPosts = allRes.data.data.posts;

        // ✅ 3. Lọc bài liên quan
        const relatedPosts = allPosts.filter(
          (p: any) =>
            p.id !== postData.id &&
            p.isActive === true &&
            p.groupId === postData.groupId
        );

        setRelated(relatedPosts.slice(0, 4)); // lấy 4 bài
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  if (loading) return <div className="loading">Đang tải bài viết...</div>;
  if (!post) return <div>Không tìm thấy bài viết</div>;

  return (
    <div className="post-detail container">
      <h1>{post.title}</h1>
      <div className="post-meta">🕒 {formatVNDate(post.createdAt)}</div>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* ✅ BÀI VIẾT LIÊN QUAN */}
      {related.length > 0 && (
        <div className="related-section">
          <h3>Bài viết liên quan</h3>
          <div className="related-list">
            {related.map((item) => {
              const newSlug = `${item.id}-${item.slug}`;

              return (
                <div
                  key={item.id}
                  className="related-card"
                  onClick={() => navigate(`/bai-viet/${newSlug}`)}
                >
                  <img
                    src={`${BASE_URL.BASE_URL_IMAGE}${item.thumbnail.replace(/\\/g, "/")}`}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
