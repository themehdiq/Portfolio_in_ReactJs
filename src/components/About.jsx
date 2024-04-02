import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eum
          hic quas voluptatem quidem sapiente tempore enim natus dolore
          delectus? Impedit voluptatum, dolorum dignissimos quod quas iste sequi
          quibusdam dolore?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Corrupti eum animi earum blanditiis voluptates nisi facilis
          aliquid rem quidem aperiam! Dolore sunt facilis vero libero neque
          quisquam fuga ipsam amet.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem
          optio labore minima vitae ut dicta sequi nisi, debitis iusto
          asperiores praesentium, velit odit in eius possimus, nobis similique
          consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempore, excepturi minima! Harum debitis mollitia facilis eum
          voluptas? Est maxime debitis labore, dicta, eligendi quidem, ex porro
          consequatur autem tenetur veniam?
        </p>
      </div>
    </div>
  );
}

export default About;
