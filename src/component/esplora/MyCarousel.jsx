import { Carousel, Typography } from "@material-tailwind/react";
import { HorizontalCard } from "../cards/HorizontalCard";
import MiniCard from "../cards/MiniCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";
import MicroCard from "../cards/MicroCard";
import { baseUrl } from "../../redux/actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyCarousel({ prevItem, setActive, active }) {
  const me = useSelector((s) => s.user);
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const fetchAll = () => {
    if (!prevItem || !prevItem.id) return;

    let url = "";
    switch (prevItem.tipo?.toLowerCase()) {
      case "regno":
        url = `${baseUrl}/regno/${prevItem.id}/getPhylums`;
        break;
      case "phylum":
        url = `${baseUrl}/phylum/${prevItem.id}/getClassi`;
        break;
      case "classe":
        url = `${baseUrl}/classe/${prevItem.id}/getOrdini`;
        break;
      case "ordine":
        url = `${baseUrl}/ordine/${prevItem.id}/getFamiglie`;
        break;
      case "famiglia":
        url = `${baseUrl}/famiglia/${prevItem.id}/getGeneri`;
        break;
      case "genere":
        url = `${baseUrl}/genere/${prevItem.id}/getSpecie`;
        break;
      default:
        setError("Tipo non valido");
        return;
    }

    fetch(url, { headers: { Authorization: `Bearer ${me.token}` } })
      .then((resp) => {
        if (resp.ok) return resp.json();
        throw new Error("Errore nel recupero dei dati");
      })
      .then((data) => {
        setList(data);
        setError(null); // Reset error
      })
      .catch((err) => {
        console.error(err);
        setError("Errore nel caricamento dei dati.");
      });
  };

  useEffect(() => {
    fetchAll();
  }, [prevItem]);

  return (
    <div className="my-6 w-screen">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          centeredSlides={false}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[]}
        >
          {list.length > 0 ? (
            list.map((it, index) => (
              <SwiperSlide
                key={index}
                className="wauto"
                onClick={() => navigate(`/${it.id}`)}
              >
                <HorizontalCard
                  it={it}
                  classe={
                    active === it.id
                      ? "shadow-sm shadow-black grower hidden md:flex max-w-[45rem]"
                      : "smaller hidden md:flex shadow-xs max-w-[45rem]"
                  }
                />
                <MicroCard
                item={it}
                  classe={
                    active === it.id
                      ? "shadow-sm md:hidden w-[28rem] h-[28rem] shadow-black grower hide"
                      : "smaller md:hidden w-[28rem] h-[28rem] shadow-xs hide"
                  }
                />
              </SwiperSlide>
            ))
          ) : (
            <></>
          )}
        </Swiper>
      )}
    </div>
  );
}