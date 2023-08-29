import axios from "axios";

function get(link, setstate) {
  if (link.substring(0, 16) === "https://fb.watch") {
    setstate((p) => ({ ...p, loader: true }));
    const options = {
      method: "GET",
      url: "https://social-media-video-downloader.p.rapidapi.com/api/getSocialVideo",
      params: {
        url: link,
      },
      headers: {
        "X-RapidAPI-Key": "b3a94ab247msh71c8623952b637fp18e988jsn1b6709488930",
        "X-RapidAPI-Host": "social-media-video-downloader.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        setstate((p) => ({ ...p, video: res.data.links[0].link }));
      })
      .finally(() => {
        setstate((p) => ({ ...p, loader: false }));
      });
  } else {
    setstate((p) => ({ ...p, valid: true }));
  }
}

export default get;