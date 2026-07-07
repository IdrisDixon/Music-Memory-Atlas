const years = [
  {
    year: "2023",
    time: 8,
    songs: [
      song("best-friend", "最佳损友", "陈奕迅 / Eason Chan", "2023", "陈奕迅 - 最佳损友", "https://open.spotify.com/track/6AcdKwlWDTVEoc3gctxsji"),
      song("cheers", "干杯", "五月天 / Mayday", "2023", "五月天 - 干杯", "https://open.spotify.com/track/1pq8manc3lP5iEbLhzuZv2"),
      song("mercury", "水星记", "郭顶 / Guo Ding", "2023", "郭顶 - 水星记", "https://open.spotify.com/track/3CDcr9ogSecLIwourcz760"),
      song("miss-you-3000", "想见你想见你想见你", "八三夭 / 831", "2023", "八三夭 - 想见你想见你想见你", "https://open.spotify.com/track/69zgyr5HVKdInjeKpq1qHa"),
      song("visible-wings", "有形的翅膀", "张韶涵 / Angela Chang", "2023", "张韶涵 - 有形的翅膀", "https://open.spotify.com/track/5XrLZ5bUU8X6K58whf3cJG"),
      song("nameless-generation", "无名之辈", "陈雪燃 / Chen Xueran", "2023", "陈雪燃 - 无名之辈", "https://open.spotify.com/track/4t6xJufZtFgVb0fbjCnWNv"),
      song("as-wished", "如愿", "王菲 / Faye Wong", "2023", "王菲 - 如愿", "https://open.spotify.com/track/4x9retP0JqKa35zZZhNhNS"),
    ],
  },
  {
    year: "2024",
    time: 36,
    songs: [
      song("twilight-echo", "暮色回响", "张韶涵 / Angela Chang", "2024", "张韶涵 - 暮色回响", "https://open.spotify.com/track/2f2DiUH37TGAhUBqZhjfzj"),
      song("cloudy-day", "天黑黑", "孙燕姿 / Stefanie Sun", "2024", "孙燕姿 - 天黑黑", "https://open.spotify.com/track/0eob3HoVodpLkppKt6rVay"),
      song("nameless-one", "无名的人", "毛不易 / Mao Buyi", "2024", "毛不易 - 无名的人", "https://open.spotify.com/track/72kP6AJqsEeSLkO640Tu7F"),
      song("bauhinia", "紫荆花盛开", "李荣浩 / Li Ronghao, 梁咏琪 / Gigi Leung", "2024", "李荣浩 梁咏琪 - 紫荆花盛开"),
      song("next-dawn", "下一个天亮", "郭静 / Claire Kuo", "2024", "郭静 - 下一个天亮", "https://open.spotify.com/track/1AtH77F385v8TU7dxiyZcQ"),
    ],
  },
  {
    year: "2025",
    time: 64,
    songs: [
      song("wish", "愿", "毛不易 / Mao Buyi", "2025", "毛不易 - 愿"),
      song("chat", "聊聊", "毛不易 / Mao Buyi", "2025", "毛不易 - 聊聊", "https://open.spotify.com/track/52553kfuEi9MtdEgBmFIbx"),
      song("adult", "是你想成为的大人吗", "尤长靖 / Azora Chin", "2025", "尤长靖 - 是你想成为的大人吗", "https://open.spotify.com/track/7kK2bvNTgGW8Yy8jkc9G8o"),
      song("yesterday-sky", "昨日青空", "尤长靖 / Azora Chin", "2025", "尤长靖 - 昨日青空", "https://open.spotify.com/track/0XLiyF9yMbpNRfzGqtoYyj"),
      song("regular-friend", "普通朋友", "陶喆 / David Tao", "2025", "陶喆 - 普通朋友", "https://open.spotify.com/track/7CTitzr4eVIDCPUJi5Dr4B"),
      song("party-animal", "派对动物", "五月天 / Mayday", "2025", "五月天 - 派对动物", "https://open.spotify.com/track/4P8cRZZ5Xk1wfsbULoL1Qf"),
      song("carousel-city", "木马都市", "毛不易 / Mao Buyi", "2025", "毛不易 - 木马都市"),
      song("fun-festival", "Fun Festival", "ConcernedApe / ConcernedApe", "2025", "ConcernedApe - Fun Festival", "https://open.spotify.com/track/24IMYR3YeaGMxePyCLvcCU"),
    ],
  },
  {
    year: "2026",
    time: 92,
    songs: [
      song("letter-to-filmmakers", "给电影人的情书", "单依纯 / Shan Yichun", "2026", "单依纯 - 给电影人的情书", "https://open.spotify.com/track/1kUUev5B2vVhpo2FTLuQYH"),
      song("unnecessary-explanation", "多余的解释", "许嵩 / Xu Song", "2026", "许嵩 - 多余的解释", "https://open.spotify.com/track/2kWr3JUHOjwmGl6BDzhNdn"),
      song("why-not", "有何不可", "许嵩 / Xu Song", "2026", "许嵩 - 有何不可", "https://open.spotify.com/track/5rXBmcYNJYMYdhwxlMLh0s"),
      song("jasmine-rain", "茉莉雨", "林俊杰 / JJ Lin", "2026", "林俊杰 - 茉莉雨", "https://open.spotify.com/track/20UG5v2GbBXvGIsca9IqR4"),
      song("momentary-choice", "一时的选择", "林俊杰 / JJ Lin", "2026", "林俊杰 - 一时的选择", "https://open.spotify.com/track/1edKrqk7YCriloCaIi7ooC"),
      song("time-copy", "光阴副本", "林俊杰 / JJ Lin", "2026", "林俊杰 - 光阴副本", "https://open.spotify.com/track/7KJ5U4QwsM1FHvSE3M7nLM"),
      song("willingness-and-sorrow", "愿与愁", "林俊杰 / JJ Lin", "2026", "林俊杰 - 愿与愁", "https://open.spotify.com/track/4VGvaHir2FQ4WMKn3GS9AS"),
    ],
  },
];

const map = document.querySelector("#memoryMap");
const songList = document.querySelector("#songList");
const selectedYearTitle = document.querySelector("#selectedYearTitle");
const selectedYearCount = document.querySelector("#selectedYearCount");
const fields = {
  date: document.querySelector("#memoryDate"),
  title: document.querySelector("#memoryTitle"),
  artist: document.querySelector("#memoryArtist"),
  story: document.querySelector("#memoryStory"),
  place: document.querySelector("#memoryPlace"),
  player: document.querySelector("#playerFrame"),
};
const storyPanel = document.querySelector(".story-panel");

let selectedYear = years[0].year;

function song(id, title, artist, year, query, spotifyUrl = "", story = "") {
  return {
    id,
    title,
    artist,
    year,
    query,
    place: `${year} archive`,
    story: story || "Memory note coming soon.",
    spotifyUrl,
    spotifySearch: `https://open.spotify.com/search/${encodeURIComponent(query)}`,
    spotifyEmbed: getSpotifyEmbed(spotifyUrl),
  };
}

function getSpotifyEmbed(url) {
  const trackId = url.match(/track\/([A-Za-z0-9]+)/)?.[1];
  return trackId ? `https://open.spotify.com/embed/track/${trackId}` : "";
}

function drawYear(yearGroup, index) {
  const point = document.createElement("button");
  point.className = "year-point";
  point.type = "button";
  point.style.left = `${yearGroup.time}%`;
  point.style.top = "50%";
  point.innerHTML = `<strong>${yearGroup.year}</strong><span>${yearGroup.songs.length} songs</span>`;
  point.setAttribute("aria-label", `${yearGroup.year}, ${yearGroup.songs.length} songs`);
  point.addEventListener("click", () => selectYear(yearGroup.year));

  const stem = document.createElement("div");
  stem.className = "year-stem";
  stem.style.left = `${yearGroup.time}%`;

  map.append(stem, point);

  if (index === 0) point.classList.add("active");
}

function selectYear(year) {
  const yearGroup = years.find((group) => group.year === year);
  if (!yearGroup) return;

  selectedYear = year;
  document.querySelectorAll(".year-point").forEach((point) => {
    point.classList.toggle("active", point.getAttribute("aria-label").startsWith(year));
  });

  selectedYearTitle.textContent = yearGroup.year;
  selectedYearCount.textContent = `${yearGroup.songs.length} songs`;
  renderSongList(yearGroup);
  selectSong(yearGroup.songs[0].id);
}

function renderSongList(yearGroup) {
  songList.innerHTML = "";

  yearGroup.songs.forEach((memory) => {
    const item = document.createElement("button");
    item.className = "song-row";
    item.type = "button";
    item.dataset.songId = memory.id;
    item.innerHTML = `<strong>${memory.title}</strong><span>${memory.artist}</span>`;
    item.addEventListener("click", () => selectSong(memory.id));
    songList.append(item);
  });
}

function findSong(id) {
  return years.flatMap((group) => group.songs).find((memory) => memory.id === id);
}

function finishPanelSwitch() {
  requestAnimationFrame(() => {
    storyPanel.classList.remove("is-switching");
  });
}

function selectSong(id) {
  const memory = findSong(id);
  if (!memory) return;

  storyPanel.classList.add("is-switching");

  document.querySelectorAll(".song-row").forEach((row) => {
    row.classList.toggle("active", row.dataset.songId === id);
  });

  fields.date.textContent = memory.year;
  fields.title.textContent = memory.title;
  fields.artist.textContent = memory.artist;
  fields.story.textContent = memory.story;
  fields.place.textContent = memory.place;
  fields.player.classList.toggle("has-embed", Boolean(memory.spotifyEmbed));

  if (memory.spotifyEmbed) {
    fields.player.innerHTML = `
      <iframe
        title="${memory.title} Spotify player"
        src="${memory.spotifyEmbed}"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    `;
    finishPanelSwitch();
    return;
  }

  fields.player.innerHTML = `
    <a href="${memory.spotifySearch}" target="_blank" rel="noreferrer">Search Spotify</a>
    <p class="source-note">Spotify track not found yet. This song can use another source later.</p>
  `;
  finishPanelSwitch();
}

years.forEach(drawYear);
selectYear(selectedYear);
