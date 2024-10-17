import CardContainer from "@/components/container/CardContainer";

export default function page() {
  return (
    <section className="w-full h-full pt-12 flex flex-col items-center">
      <h1 className=" p-4 text-2xl lg:text-4xl font-semibold sm:mt-3 lg:mt-6">
        Ma Galerie{" "}
      </h1>
      <CardContainer />
    </section>
  );
}
