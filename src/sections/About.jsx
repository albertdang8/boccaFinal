const About = () => {
  return (
      <section className="container flex flex-wrap justify-around items-center gap-8 mb-24">
        <div className="mix-w-screen flex flex-col gap-4 justify-center items-center max-w-[80ch] font-bold test-font">
          {/* kanit */}
          <h2 className="text-5xl font-semibold select-none">Origin</h2>
          <p className="text-2xl indent-8">
            {`Bocca Bocca pizza started with humble beginnings and big dreams. Tommy
          Beckelheimer started out making pizzas for friends in his backyard,
          trying to better his ingredients and recipes while enjoying the
          community that it brought together. What separates Bocca Bocca Pizza
          from the generic mid-life crisis dads brewing beers in their garage,
          or that one guy that really wants to start a podcast with his bros
          (not that there's anything inherently wrong with those things) is that
          Bocca Bocca isn't just a hobby. It's a passion and drive to meet new
          people, share ideas about food, and to grow. Most importantly: it
          helps pay the bills.`}
          </p>
          <p className="text-2xl indent-8">
            {`Tommy has worked in the service industry for a long time. He's been a
          barista at specialty coffee shops and not-so-specialty coffee shops.
          Then he went on to manage the tasting room at Chapman Crafted Brewery.
          From there he's met and befriended many foodtruck cooks, farmers, and
          bakers.`}
          </p>
          <p className="text-2xl indent-8">
            {`Eventually he parted ways with the brewery and took his savings to buy
          the necessities to start a pop up. It was a rough start. But as time,
          input, and ideas progressed, he got excited to keep honing the skill.
          Now he got his own friend to make this website for him!`}
          </p>
        </div>
        <div className="p-2 bg-secondary rounded-xl">
          <img src="/DSC05825.jpg" alt="" className="h-[600px] rounded-lg" />
        </div>
      </section>
  );
};

export default About;
