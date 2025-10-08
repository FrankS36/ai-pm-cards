/**
 * Share utility for cards and paths
 * Uses Web Share API on mobile, falls back to clipboard on desktop
 */

export const shareCard = async (card) => {
  const url = `${window.location.origin}/browse?card=${card.id}`;
  const title = `AI PM Card: ${card.title}`;
  const text = `Check out this AI PM card: ${card.title}`;

  return share({ title, text, url });
};

export const sharePath = async (pathId, pathTitle) => {
  const url = `${window.location.origin}/path/${pathId}`;
  const title = `AI PM Path: ${pathTitle}`;
  const text = `Check out this AI PM learning path: ${pathTitle}`;

  return share({ title, text, url });
};

const share = async ({ title, text, url }) => {
  // Check if Web Share API is supported (mainly mobile)
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return { success: true, method: 'native' };
    } catch (error) {
      // User cancelled or error occurred
      if (error.name === 'AbortError') {
        return { success: false, cancelled: true };
      }
      throw error;
    }
  } else {
    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(url);
      return { success: true, method: 'clipboard' };
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      return { success: false, error };
    }
  }
};
