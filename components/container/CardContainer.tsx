import Card from "../cards/Card";

const info = [
  {
    image: "/images/fennec.jpg",
    title: "Fennec",
    description: "Un magnifique fennec se reposant",
  },
  {
    image: "/images/tigre.jpg",
    title: "Tigre",
    description: "Un magnifique tigre s'abreuvant",
  },
  {
    image: "/images/lion.jpg",
    title: "Lion",
    description: "Un magnifique lion cherchant sa proie",
  },
];

export default function CardContainer() {
  return (
    <div className="w-full h-3/4 flex flex-col items-center p-4 gap-4">
      {info.map((infos, index) => (
        <Card
          key={index}
          id={index + 1}
          image={infos.image}
          title={infos.title}
          description={infos.description}
        />
      ))}
    </div>
  );
}
