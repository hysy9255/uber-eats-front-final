export const formatTimeAgo = (orderedAt: string) => {
  const orderedTime = new Date(orderedAt).getTime();
  const now = Date.now();

  const diffMinutes = Math.floor((now - orderedTime) / (1000 * 60));

  if (diffMinutes < 1) {
    return "Just now";
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`;
  }

  const diffHours = Math.floor(diffMinutes / 60);

  if (diffHours < 24) {
    return `${diffHours} hr ago`;
  }

  const diffDays = Math.floor(diffHours / 24);

  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
};
