import { useCallback, useEffect, useState } from 'react';

function useFeed(data) {
  const [feed, setFeed] = useState(data);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const img = new Image();

    img.src = feed.src;
    // 이미지 로드 완료 후 컴포넌트 표시
    img.onload = () => {
      setLoading(false);
    };
  }, []);

  const onChange = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment]
  );

  function addComment() {
    if (!comment) return;

    const temp = feed;
    const { name } = JSON.parse(localStorage.getItem('user'));

    temp.comments.push({ name, comment });

    setFeed({ ...temp });
    // 댓글 달기 완료했으면 empty
    setComment('');
  }

  const onClick = useCallback(() => {
    addComment();
  }, [feed, comment]);

  const onEnter = useCallback(
    (e) => {
      if (e.key === 'Enter') addComment();
    },
    [feed, comment]
  );

  return { feed, loading, comment, onChange, onClick, onEnter };
}

export default useFeed;
