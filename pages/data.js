import { useState } from "react";

const data = () => {
  const [baslık, setBaslık] = useState("");
  const [icerik, setIcerik] = useState("");

  const date = new Date();
  const h=date.getHours();
  const min=date.getMinutes();

  const data = {
    baslık: baslık,
    icerik: {
      ad: icerik,
      tarih:`${date.toDateString()} ${h}:${min}`,
    },
  };
  const submitOn = async (e) => {
    e.preventDefault();

    const res = await fetch(process.env.NEXT_PUBLIC_DB_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setIcerik("");
    setBaslık("");
    await window.location.assign("/blog");
  };

  return (
    <div>
      <form onSubmit={submitOn}>
        <input
          type="text"
          value={baslık}
          placeholder="baslık"
          onChange={(e) => setBaslık(e.target.value)}
        />
        <textarea
          type="text"
          value={icerik}
          placeholder="baslık"
          onChange={(e) => setIcerik(e.target.value)}
        ></textarea>
        <button type="submit">Yolla</button>
      </form>
    </div>
  );
};

export default data;
