import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../constants";
import "../styles/postDetail.scss";

export default function PostDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postId = slug?.split("-")[0];

  const [post, setPost] = useState<any>(null);
  const [related, setRelated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const formatVNDate = (dateStr: string) =>
    new Date(dateStr).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });

  // ⭐ Tạo URL trang hiện tại
  const canonicalUrl = `https://kidsdoctor.vn/bai-viet/${slug}`;

  // ⭐ Lấy đoạn mô tả rút gọn (SEO Description)
  const getPlainText = (html: string) =>
    html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

  useEffect(() => {
    if (!postId) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. Lấy bài viết
        const res = await axios.get(`${BASE_URL.BASE_URL}/post/${postId}`);
        const postData = res.data.data;
        setPost(postData);

        // 2. Lấy tất cả bài viết để lọc liên quan
        const allRes = await axios.get(
          `${BASE_URL.BASE_URL}/post?page=1&pageSize=200`
        );
        const allPosts = allRes.data.data.posts;

        // 3. Lọc bài liên quan
        const relatedPosts = allPosts.filter(
          (p: any) =>
            p.id !== postData.id &&
            p.isActive === true &&
            p.groupId === postData.groupId
        );

        setRelated(relatedPosts.slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  if (loading) return <div className="loading">Đang tải bài viết...</div>;
  if (!post) return <div>Không tìm thấy bài viết</div>;

  // ⭐ Ảnh og:image
  const ogImage = post.thumbnail
    ? `${BASE_URL.BASE_URL_IMAGE}${post.thumbnail.replace(/\\/g, "/")}`
    : "https://kidsdoctor.vn/default-og.jpg";

  // ⭐ Meta description từ nội dung bài viết
  const metaDescription = getPlainText(post.content).slice(0, 160);

  return (
    <div className="post-detail container">

      {/* ⭐⭐ SEO CHO BÀI VIẾT ⭐⭐ */}
      <Helmet>
        <title>{post.title} | KidsDoctor</title>

        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`KidsDoctor, bài viết, ${post.title}`} />

        {/* Open Graph (Facebook, Zalo) */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      {/* --- Nội dung bài viết --- */}
      <h1>{post.title}</h1>
      <div className="post-meta">🕒 {formatVNDate(post.createdAt)}</div>

      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* --- Bài viết liên quan --- */}
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
                    src={`${BASE_URL.BASE_URL_IMAGE}${item.thumbnail.replace(
                      /\\/g,
                      "/"
                    )}`}
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
