import "./App.css";
import FlipCard from "./Flipcard"; // Import the new component

function Homepage() {

  const images = [
    {
      src: "/images/Sticker/Nazis.png",
      width: 320,
      height: 212,
      text: "Die AfD nutzt Worte von Nationalsozialisten und Neonazis, aber willpartout nicht rechtsextrem sein.",
      mehrLink: "/nazis",
    },
    {
      src: "/images/Sticker/Kartoffel.png",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/kartoffel",
    },
    {
      src: "/images/Sticker/Filterblase.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/filterblase",
    },
    {
      src: "/images/Sticker/Herzen.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/herzen",
    },
    {
      src: "/images/Sticker/Hetze.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/hetze",
    },
    {
      src: "/images/Sticker/Täter.png",
      width: 320,
      height: 212,
      textFilePath: "sticker_text/sticker1.txt",
      mehrLink: "/taeter",
    },
    // ...add more images
  ];

  return (
    <>
      <div className="gallery-container">
        {images.map((img, index) => (
          <FlipCard key={index} image={img} mehrLink={img.mehrLink} />
        ))}
      </div>
    </>
  );
}

export default Homepage;