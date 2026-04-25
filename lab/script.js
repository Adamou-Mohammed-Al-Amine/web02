// ══ UPDATED LONG FORM DATA with YouTube embeds ══
const LONG = [
  { 
    id: 'QPU8Ws8fJPo', 
    badge: 'YouTube', 
    landscape: true,
    title: 'Documentary Style Edit', 
    style: 'Cinematic · Narrative',
    desc: 'Full documentary-style long-form edit with professional color grading, custom animated lower-thirds, chapter markers and immersive layered sound design.',
    views: '320K', 
    likes: '18K', 
    shares: '4.2K',
    duration: '15:24',
    tags: ['Color Grade','Sound Mix','Lower Thirds','Chapters','Narrative'], 
    tools: ['Premiere Pro','After Effects'] 
  },
  { 
    id: 'dQw4w9WgXcQ', 
    badge: 'YouTube', 
    landscape: true,
    title: 'Tutorial & Education', 
    style: 'Educational · Structured',
    desc: 'Clean, structured tutorial edit with animated screen recordings, chapter navigation, callout graphics and engaging motion graphics overlays that keep viewers learning.',
    views: '210K', 
    likes: '12K', 
    shares: '2.8K',
    duration: '22:15',
    tags: ['Motion Graphics','Chapters','Screen Rec','Lower Thirds'], 
    tools: ['Premiere Pro','After Effects','Photoshop'] 
  },
  { 
    id: 'jNQXAC9IVRw', 
    badge: 'YouTube', 
    landscape: true,
    title: 'Vlog & Adventure Series', 
    style: 'Vlog · Travel · Story',
    desc: 'Dynamic vlog editing with seamless transitions, drone footage integration and a cinematic color story that transports the viewer into the adventure.',
    views: '180K', 
    likes: '9.5K', 
    shares: '1.9K',
    duration: '18:42',
    tags: ['Drone','Transitions','LUT','Pacing','Storytelling'], 
    tools: ['Premiere Pro','After Effects','Illustrator'] 
  },
];

// ══ PLAYLIST FUNCTIONALITY ══
let currentVideoIndex = 0;
let filteredVideos = [...LONG];

function initPlaylist() {
  renderPlaylist();
  if (LONG.length > 0) {
    playVideo(0);
  }
  
  // Search functionality
  document.getElementById('playlistSearch').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    filteredVideos = LONG.filter(v => 
      v.title.toLowerCase().includes(query) || 
      v.desc.toLowerCase().includes(query) ||
      v.tags.some(tag => tag.toLowerCase().includes(query))
    );
    renderPlaylist();
  });
  
  // Sort functionality
  document.getElementById('playlistSort').addEventListener('change', (e) => {
    const sortBy = e.target.value;
    
    if (sortBy === 'title') {
      filteredVideos.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'views') {
      filteredVideos.sort((a, b) => parseNumber(b.views) - parseNumber(a.views));
    } else if (sortBy === 'likes') {
      filteredVideos.sort((a, b) => parseNumber(b.likes) - parseNumber(a.likes));
    } else {
      filteredVideos = [...LONG];
    }
    
    renderPlaylist();
  });
}

function parseNumber(str) {
  const num = parseFloat(str);
  if (str.includes('M')) return num * 1000000;
  if (str.includes('K')) return num * 1000;
  return num;
}

function renderPlaylist() {
  const container = document.getElementById('playlistItems');
  const countEl = document.getElementById('playlistCount');
  
  countEl.textContent = `${filteredVideos.length} video${filteredVideos.length !== 1 ? 's' : ''}`;
  
  if (filteredVideos.length === 0) {
    container.innerHTML = '<div class="no-results">No videos found matching your search 🔍</div>';
    return;
  }
  
  container.innerHTML = filteredVideos.map((v, idx) => `
    <div class="playlist-item ${idx === currentVideoIndex && filteredVideos === LONG ? 'active' : ''}" onclick="playVideo(${LONG.indexOf(v)})">
      <div class="playlist-item-thumb">
        <img src="https://img.youtube.com/vi/${v.id}/mqdefault.jpg" alt="${v.title}" />
        <div class="playlist-item-duration">${v.duration || '15:00'}</div>
        <div class="playlist-item-play"></div>
      </div>
      <div class="playlist-item-info">
        <div class="playlist-item-title">${v.title}</div>
        <div class="playlist-item-meta">
          <span class="playlist-item-views">👁️ ${v.views}</span>
          <span>❤️ ${v.likes}</span>
        </div>
      </div>
    </div>
  `).join('');
}

function playVideo(index) {
  currentVideoIndex = index;
  const video = LONG[index];
  
  // Update main player
  document.getElementById('mainPlayer').src = 
    `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`;
  
  // Update video info
  document.getElementById('mainTitle').textContent = video.title;
  document.getElementById('mainBadge').textContent = video.badge;
  document.getElementById('mainStyle').textContent = video.style;
  document.getElementById('mainDesc').textContent = video.desc;
  
  // Update stats
  document.getElementById('mainStats').innerHTML = `
    <div class="stat-item">
      <div class="stat-item-value">${video.views}</div>
      <div class="stat-item-label">👁️ Views</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${video.likes}</div>
      <div class="stat-item-label">❤️ Likes</div>
    </div>
    <div class="stat-item">
      <div class="stat-item-value">${video.shares}</div>
      <div class="stat-item-label">🔗 Shares</div>
    </div>
  `;
  
  // Update tags
  document.getElementById('mainTags').innerHTML = 
    video.tags.map(t => `<span class="main-tag">${t}</span>`).join('');
  
  // Update active state in playlist
  renderPlaylist();
  
  // Scroll active item into view
  setTimeout(() => {
    const activeItem = document.querySelector('.playlist-item.active');
    if (activeItem) {
      activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, 100);
}

// Initialize playlist when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initPlaylist();
});

// Also init after a short delay to ensure everything is loaded
setTimeout(initPlaylist, 500);
