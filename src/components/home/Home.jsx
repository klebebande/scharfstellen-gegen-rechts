import "./Home.css";
import FlipCard from "./Flipcard"; // Import the new component

function Home() {

  const images = [
    {
      src: "/images/Sticker/Nazis.png",
      width: 320,
      height: 212,
      teaser: "Die AfD nutzt Worte von Nationalsozialisten und Neonazis, aber will partout nicht rechtsextrem sein.",
      mehrLink: "/nazis",
      color: "#6FB1F9",
    },
    {
      src: "/images/Sticker/Kartoffel.png",
      width: 320,
      height: 212,
      teaser: "Die AfD erfindet gerne Worte, um Angst zu schüren und andere Menschen anzugreifen. Einige Beispiele und ihre Bedeutungen.",
      alt: "Boats (Jeshu John - designerspics.com)",
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/kartoffel",
      color: "#F6D547"
    },
    {
      src: "/images/Sticker/Filterblase.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      teaser: "Die AfD verbreitet in sogenannten Filterblasen ihre Meinung. Was das bedeutet, liest du hier.",
      mehrLink: "/filterblase",
      color: "#5CA747",
    },
    {
      src: "/images/Sticker/Herzen.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/herzen",
      color: "#387DF6",
      teaser: "Die AfD verwendet häufig Hashtags, Emojis und Codes, die klar der rechtsextremen Szene zugeordnet werden können. Welche das sind.",
    },
    {
      src: "/images/Sticker/Hetze.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/hetze",
      color: "#ED6FD6",
      teaser: "Die AfD verbreitet gezielt Hass und Hetze im Netz. Was man gegen Hassrede tun kann.",
    },
    {
      src: "/images/Sticker/Täter.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/taeter",
      color: "#EB5729",
      teaser: "Die AfD hat viele Feinde und einen starken Zusammenhalt innerhalb ihrer Community. Wie sie das schafft, liest du hier.",
    },
  ];

  // Function to generate a random rotation between -15 and 15 degrees
  const getRandomRotation = () => {
    const min = -15;
    const max = 15;
    return Math.random() * (max - min) + min;
  };

  return (
    <>
      <div className="gallery-container">
        {images.map((img, index) => (
          <FlipCard key={index} image={img} mehrLink={img.mehrLink} style={{ transform: `rotate(${getRandomRotation()}deg)` }} />
        ))}
      </div>
    </>
  );
}

export default Home;